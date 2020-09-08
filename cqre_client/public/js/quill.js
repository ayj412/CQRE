
    var quill = new Quill('#editor-container', {
    modules: {
        syntax: true,
        toolbar: [
        [{ 'header': 1 }, { 'header': 2 }],
        ['bold', 'italic', 'underline', 'strike'],
        ['link', 'image', 'video'],
        ['blockquote', 'code-block'],
        [{ align: '' }, { align: 'center' }, { align: 'right' }, { align: 'justify' }],
        ['clean']  
        ],
        imageResize: {
            toolbarStyles: {display:'none'},
        },
        
    },
    placeholder: '포스트의 내용을 적어주세요',
    theme: 'snow'  // or 'bubble'
    });
    quill.root.spellcheck = false;
    quill.getModule('toolbar').addHandler('image', function(){
        setlectLocalImage();
    });

    function setlectLocalImage() {
        console.log("dsadasdas")
        const input = document.createElement('input');
        input.setAttribute('type', 'file')
        input.click();

        // Listen upload local image and save to server
        input.onchange = function() {
            const fd = new FormData();
            const file = $(this)[0].files[0];
            fd.append('image', file)
            

            const url = '/api/post'
            const config = {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            }
            $.ajax({
                type: "POST",
                enctype: "multipart/form-data",
                url: url,
                data: fd,
                processData: false,
                contentType: false,
                success: function(data) {
                    const range = quill.getSelection();
                    quill.insertEmbed(range.index, 'image', '/image/'+data)
                }
              });
        }
    }
    
    $('.thumbnail-input').click(function(){
        $('#thumbnail_input').click();
    })

    function readURL(input) {
        const fd = new FormData();
        const file = input.files[0];
        console.log("file", file)
        fd.append('image', file)
            
        const url = '/api/post'
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        $.ajax({
            type: "POST",
            enctype: "multipart/form-data",
            url: url,
            data: fd,
            processData: false,
            contentType: false,
            success: function(data) {
                console.log("data=>", data);
                $('#thumbnail').attr('src', '/image/'+data);
            }
        });
    }
    
    $("#thumbnail_input").change(function(){
        readURL(this);
    });

    $("#post-regist-btn").click(function(){
        const url = '/api/writePost'
        var postTitle = $('#post_title').val();
        var postContent = JSON.stringify(quill.getContents()['ops']);
        var thumbnail = "";
        var postSummary = $('#post_summary').val();

        // console.log("postTitle =>", postTitle)
        console.log("postContent =>", JSON.stringify(postContent));
        console.log("thumbnail =>", thumbnail)
        console.log("postSummary =>", postSummary)
        console.log($("#thumbnail_input")[0].files['length'])
        if( $("#thumbnail_input")[0].files['length'] == 1 ) {
            thumbnail = $("#thumbnail").attr("src")
            console.log("thumbnail=>", thumbnail)
        }
        

        $.post( url, { 
            postTitle: postTitle,
            postContent: postContent,
            thumbnail: thumbnail,
            postSummary: postSummary
        })
        .done(function( data ) {
            alert( "Data Loaded: " + data );
        });
    });