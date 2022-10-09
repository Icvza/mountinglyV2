document.addEventListener('DOMContentLoaded', fetchServices)

//Nav
btn = document.getElementById('ham-stack')
btn.addEventListener('click', navToggle)

mobMenu = document.getElementById('menu')

function navToggle() {
    btn.classList.toggle('open')
    mobMenu.classList.toggle('flex')
    mobMenu.classList.toggle('hidden')
}

// Fetch request 
function fetchServices() {
    fetch('service-data.json')
        .then(resp => resp.json())
        .then(services => {
            loppThroughResponse(services.services)
        })
}

//products page 

let shopCont = document.getElementById('shop-container')


function loppThroughResponse(services) {
    services.map((service) => {
        let html = generateHTML(service)
        let element = elementFromHtml(html)
        shopCont.append(element)
        //debugger
    })
}

function generateHTML(service){
    return `<div class="flex flex-col md:w-[33.3%] p-6 m-3 space-y-10 bg-white rounded-2xl shadow-2xl md:flex-row md:space-y-10 md:space-x-10 md:m-0 md:p-16 ">
      
      <!-- Image Div -->
      <div>
        <img
          src="${service.photo}"
          alt=""
          class="rounded-lg mx-auto duration-200 w-60 hover:scale-105"
        />
      </div>

      <!-- Content -->
      <div class="flex flex-col space-y-6">


        <!-- Label & Title Container -->
        <div class="flex flex-col mb-4 space-y-3 text-center md:text-left">

          <div>
            <div
              class="inline-block px-3 py-1 text-sm text-white bg-black rounded-full"
            >
              Save $25
            </div>
          </div>

          <!-- Title -->
          <div class="max-w-sm text-2xl font-medium">
            ${service.name}
          </div>

          <!-- Price Container -->
          <div class="flex flex-col mb-4 space-y-3 text-center md:text-left">
            <p class="line-through">$${service.price}</p>
            <p class="text-5xl font-bold">$${service.price - 25}</p>
            <p class="text-sm font-light text-back">
                ${service.des}
            </p>
          </div>

          <!-- Button Group -->
          <div class="group">
            <button class="w-full transition-all duration-150 bg-blue-700 text-white border-b-8 border-b-blue-700 rounded-lg group-hover:border-t-8 group-hover:border-b-0 group-hover:bg-blue-700 group-hover:border-t-blue-700 group-hover:shadow-lg">
              <div class="px-8 py-4 duration-150 bg-blue-500 rounded-lg group-hover:bg-blue-700">
                Add to cart
              </div>
            </button>
          </div>
          <!-- Stock -->
          <div class="flex items-center space-x-3 group">
            <div class="w-3 h-3 bg-green-400 rounded-full group-hover:animate-ping">
            </div>
            <div class="text-sm">Available this week</div>
          </div>

          <!-- Bottom Buttons Container -->
          <div class="flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row">
            <button class="flex items-center justify-center py-3 px-5 space-x-3 border-2 border-gray-300 rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150">
              <span>Add to cart</span>
            </button>

            <button class="flex items-center justify-center py-3 px-5 space-x-3 border-2 border-gray-300 rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150">
              <span>Add to wishlist</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>`
}


function elementFromHtml(html) {
    const template = document.createElement("template")
    template.innerHTML = html.trim()
    return template.content.firstElementChild
}










// const products = services.map((service) => {
//     return 
// })

// products.forEach((service) => {
//     myfun(service)
// })


//div.classList.add('flex', 'flex-col', 'p-6', 'm-3', 'space-y-10', 'bg-white', 'rounded-2xl', 'shadow-2xl', 'md:flex-row', 'md:space-y-0', 'md:space-x-10', 'md:m-0', 'md:p-16', 'text-red-900')

// const products = services.map((service) => {
//     //Card Container
//     const div = document.createElement('div')
//     div.id =('card-container')
//     //Image Container 
//     const imgContainer= document.createElement('div')
//     imgContainer.id ='imageContainer'
//     //Image
//     const img = document.createElement('img')
//     img.id = 'serviceImg'
//     img.src=`${service.photo}`
//     // Adding img as a child to imgContainer 
//     imgContainer.append(img)
//     // Aadding imgContainer and child to div
//     div.append(imgContainer)
//     //Content container 
//     let content = document.createElement('div')
//     content.id = 'conent-container'
//     //Lable Container
//     let label = document.createElement('div')
//     label.id = 'label'
//     //xcontainer
//     let x = document.createElement('div')
//     x.id = 'x'
//     //ycontianer
//     let y = document.createElement('div')
//     y.id = 'y'
//     y.innerHTML = "Free Shipping"
//     //add y to x
//     x.append(y)


//     let des = document.createElement('div')
//     des.id ="des"
//     des.innerHTML=`${service.des}`

//     let price = document.createElement('div')
//     let p1 = document.createElement('p')
//     p1.innerHTML = `${service.price}`
//     let p2 = document.createElement('p')
//     p2.innerHTML = `${service.price} sale`
//     let p3 = document.createElement('p')
//     p3.innerHTML = "Offer good until november"
//     price.append(p1)
//     price.append(p2)
//     price.append(p3)


//     //add x to label 
//     label.append(x)
//     label.append(des)
//     label.append(price)
//     //add label to conent 
//     content.append(label)
//     //Add Conent Container to div
//     div.append(content)
//     //end 
//     return div
// })
