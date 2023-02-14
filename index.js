const model = [
    {type: 'title', velue: 'Hello World from JS'},
    {type: 'text', velue: 'here we go with some text'},
    {type: 'columns', velue: [
        '1111111',
        '2222222',
        '3333333',
    ]},
    {type: 'image', velue: './assets/image.png'}
]

const $site = document.querySelector('#site') 

model.forEach(block =>{
   let html = ''
   
   if (block.type === 'title') {
    html = title(block)

    } else if (block.type === 'text') {
      html = text(block)
    } else if (block.type === 'columns') {
      html = columns(block)
    } else if (block.type === 'image') {
      html = image(block)
    }

    $site.insertAdjacentHTML('beforeend', html)
})


function title(block) {
  return `
  <div class="row">
    <div class="col-sm">
      <h1>${block.velue}</h1>       
    </div>
  </div>    
`
}

function text(block) {
  return `
  <div class="row">
    <div class="col-sm">
       <p>${block.velue}</p>       
    </div>
  </div>
  `
}

function columns(block) { 
  const html = block.velue.map(item => `<div class="col-sm">${item}</div> `)
  return `
    <div class="row">
      ${html.join('')}
    </div>
  `
    
}

function image(block) {
  return `
  <div class="row">
    <img src="${block.velue}" />
  </div>  
  `
}