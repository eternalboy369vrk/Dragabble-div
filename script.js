const cont = document.querySelector(".container");
        const card = document.querySelector(".card");
        const para = document.querySelector(".para");
        


        cont.addEventListener('mouseover', () =>{
            card.style.backgroundImage="url('images/Joker.jpeg') ";
            card.style.backgroundRepeat = "no-repeat"; 
            card.style.backgroundColor = 'lightgreen';
            card.style.border="3px inset #1eff00";
            card.style.borderRadius = "27px 1px 33px 2px";
            card.style.webkitBorderRadius = "27px 1px 33px 2px";
            card.style.mozBorderRadius = "27px 1px 33px 2px";
            para.textContent=""
        });
        cont.addEventListener('mouseout', () =>{
            card.style.backgroundColor = '';
            card.style.border="";
            card.style.borderRadius = "";
            card.style.webkitBorderRadius = "";
            card.style.mozBorderRadius = "";
        });

        let isResizing = false;

card.addEventListener('mousedown', (e) => {
    isResizing = true;
});

    document.addEventListener('mousemove', (e) =>{
        if(isResizing){
            const newWidth = e.clientX - cont.getBoundingClientRect().left;
                const newHeight = e.clientY - cont.getBoundingClientRect().top;

                if (newWidth > 100) {
                    card.style.width = newWidth + 'px';
                }
                if (newHeight > 50) {
                    card.style.height = newHeight + 'px';
                }
            
        }
    });
    document.addEventListener('mouseup', () => {
            isResizing = false;
        });