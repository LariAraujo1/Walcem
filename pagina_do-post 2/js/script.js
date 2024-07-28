document.addEventListener('DOMContentLoaded', function() {
    var submitButton = document.getElementById('submit-comment');
    var commentInput = document.getElementById('comment-input');
    var nameInput = document.getElementById('name-input');
    var commentList = document.getElementById('comment-list');
    

    function addComment(name, text) {
        var newComment = document.createElement('div');
        newComment.className = 'comment d-flex align-items-start';
        newComment.style.backgroundColor = '#e0e0e0';
        newComment.style.padding = '10px';
        newComment.style.marginBottom = '10px';
        newComment.style.borderRadius = '5px';
        newComment.style.position = 'relative'; // Para permitir o posicionamento dos ícones

        var avatarContainer = document.createElement('div');
        avatarContainer.style.display = 'flex';
        avatarContainer.style.flexDirection = 'column';
        avatarContainer.style.alignItems = 'center';
        avatarContainer.style.marginRight = '10px';

        var avatar = document.createElement('img');
        avatar.src = 'img/avatar.png';
        avatar.alt = 'Avatar';
        avatar.style.width = '40px';
        avatar.style.height = '40px';
        avatar.style.borderRadius = '50%';

        var commentAuthor = document.createElement('strong');
        commentAuthor.textContent = name;
        commentAuthor.style.marginTop = '5px';
        commentAuthor.style.textAlign = 'center';

        avatarContainer.appendChild(avatar);
        avatarContainer.appendChild(commentAuthor);

        var commentBody = document.createElement('div');
        commentBody.className = 'flex-grow-1';

        var commentHeader = document.createElement('div');
        commentHeader.className = 'd-flex justify-content-between align-items-center mb-2';

        var commentContent = document.createElement('p');
        commentContent.className = 'comment-content mb-1';
        commentContent.textContent = text;

        var commentFooter = document.createElement('div');
        commentFooter.className = 'comment-footer'; // Classe para posicionamento

        var commentFooterText = document.createElement('small');
        commentFooterText.className = 'text-muted';
        commentFooterText.textContent = 'Publicado há ';

        var commentTime = document.createElement('span');
        commentTime.className = 'text-primary'; // Classe para definir o estilo azul

        var publishTime = new Date();
        commentTime.textContent = '0 minutos';

        commentFooter.appendChild(commentFooterText);
        commentFooter.appendChild(commentTime);

        var actionButtons = document.createElement('div');
        actionButtons.style.position = 'absolute';
        actionButtons.style.top = '10px';
        actionButtons.style.right = '10px'; // Posiciona os botões no canto superior direito

        var editImage = document.createElement('img');
        editImage.src = 'img/lapis.png';
        editImage.className = 'action-icon me-2';
        editImage.alt = 'Editar';
        editImage.style.cursor = 'pointer';
        editImage.style.width = '20px';
        editImage.style.height = '20px';
        editImage.onclick = function() {
            commentInput.value = text;
            nameInput.value = name;
            newComment.remove();
        };

        var deleteImage = document.createElement('img');
        deleteImage.src = 'img/lixeira.png';
        deleteImage.className = 'action-icon';
        deleteImage.alt = 'Excluir';
        deleteImage.style.cursor = 'pointer';
        deleteImage.style.width = '20px';
        deleteImage.style.height = '20px';
        deleteImage.onclick = function() {
            var confirmDelete = window.confirm('Você tem certeza que deseja excluir este comentário?');
            if (confirmDelete) {
                newComment.remove();
            }
        };

        actionButtons.appendChild(editImage);
        actionButtons.appendChild(deleteImage);

        commentBody.appendChild(commentHeader);
        commentBody.appendChild(commentContent);
        commentBody.appendChild(commentFooter);

        newComment.appendChild(avatarContainer);
        newComment.appendChild(commentBody);
        newComment.appendChild(actionButtons); // Adiciona os botões ao novo comentário

        commentList.appendChild(newComment);

        // Atualizar o tempo de publicação a cada minuto
        setInterval(function() {
            var currentTime = new Date();
            var timeDifference = Math.floor((currentTime - publishTime) / 60000); // Diferença em minutos
            commentTime.textContent = timeDifference + ' minutos';
        }, 60000);
    }

    function handleComment() {
        var commentText = commentInput.value.trim();
        var userName = nameInput.value.trim();

        if (commentText !== '' && userName !== '') {
            addComment(userName, commentText);
            commentInput.value = '';
            nameInput.value = '';
        } else {
            alert('Por favor, preencha seu nome e comentário.');
        }
    }

    submitButton.addEventListener('click', handleComment);

    commentInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            handleComment();
        }
    });
});

function toggleMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.toggle('show');
}

