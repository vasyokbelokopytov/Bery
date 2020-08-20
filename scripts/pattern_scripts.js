const burger = document.getElementById('burger');
const menu = document.getElementById('nav');

function animation() {
    const animatedItems = document.getElementsByClassName('animable');
    if (animatedItems.length > 0) {
        window.addEventListener('scroll', anim);

        function anim(){
            for (let i = 0; i < animatedItems.length; i++) {
                const item = animatedItems[i];
                const itemHeight = item.offsetHeight;
                const itemOffset = offset(item).top;
                const start = 8;


                let animationPoint = window.innerHeight - itemHeight / start;
                if (itemHeight > window.innerHeight) {
                    let animationPoint = window.innerHeight - window.innerHeight / start;
                }


                if (pageYOffset > (itemOffset - animationPoint) && pageYOffset < (itemOffset + itemHeight)) {
                    item.classList.add('animate');
                }

                else {
                    if (!item.classList.contains('no-repeat')) {
                        item.classList.remove('animate');

                    }
                }
            }
        }

        function offset(el) {
            const rect = el.getBoundingClientRect(),
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return {top: rect.top + scrollTop, left: rect.left + scrollLeft};
        }

        anim();
    }
}

function active(initiator, target) {
    initiator.addEventListener("click", function() {
            this.classList.toggle("active");
            target.classList.toggle('active');
        })}


function scrollToContacts(burger, menu) {
    const anchor = document.getElementById('anchor');
    const contacts = document.getElementById('footer');
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        burger.classList.remove('active');
        menu.classList.remove('active');


        contacts.scrollIntoView({
            behavior: "smooth",
            block: "start"
        })

    })
}

animation();
active(burger, menu);
scrollToContacts(burger, menu);
