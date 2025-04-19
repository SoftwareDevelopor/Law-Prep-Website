$('#bannerslider').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    },
    
    autoplay:true,
    autoplayTimeout:3000,
})

$('#cardCarousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    dots:false,
    
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    },
    
    autoplay:true,
    autoplayTimeout:4000,
})


$('#learnfromtopeducators').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    dots:false,
    
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    },
    
    autoplay:true,
    autoplayTimeout:4000,
})

$('#headlines').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    dots:false,
    
    responsive:{
        0:{
            items:1
            
        },
        600:{
            items:2
        },
        1000:{
            items:1
            
        }
    },
    
    autoplay:true,
    autoplayTimeout:5000,
})


$('#latestPosts').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    dots:false,
    
    responsive:{
        0:{
            items:1.1
            
        },
        600:{
            items:2
        },
        1000:{
            items:2
            
        }
    },
    
    autoplay:true,
    autoplayTimeout:5000,
})

$('#studentsTestimonials').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    dots:false,
    
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    },
    
    autoplay:true,
    autoplayTimeout:4000,
})

// Scroll animation for #trustModal on mobile or tablet
function autoScrollTrustModal() {
    const trustModal = document.querySelector('#trustModal');
    if (!trustModal) return;

    let scrollAmount = 0;
    
    const scrollInterval = 30; // Adjust interval time (ms)

    function scrollContent() {
        if (window.innerWidth <= 768) { // Mobile or tablet screen size
            scrollAmount += 1;
            trustModal.scrollLeft = scrollAmount;

            if (scrollAmount >= trustModal.scrollWidth - trustModal.clientWidth) {
                scrollAmount = 0; // Reset scroll to the start
            }
        }
    }

    setInterval(scrollContent, scrollInterval);
}

// Initialize the scroll animation
autoScrollTrustModal();

let btn=document.querySelector('.rank .btns #lawentrancebtn')

let judiciarybtn=document.querySelector('.rank .btns #judiciarybtn')

let judiciaryElem=document.querySelector('.rank #judiciary')
let trustModalElem=document.querySelector('.rank #trustModal')
let temp;
judiciarybtn.addEventListener("click", (event)=>{
    event.preventDefault();
    temp=trustModalElem.innerHTML;
    trustModalElem.innerHTML=judiciaryElem.innerHTML;
    judiciarybtn.classList.toggle('active');
    btn.addEventListener("click", (Event)=>{
        Event.preventDefault();
        trustModalElem.innerHTML=temp;
    })
})

// console.log(temp);
