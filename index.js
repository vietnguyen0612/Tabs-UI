const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const tabs = $$('.tabs')
const panes = $$('.list-content')

const tabActive =$('.tabs.active')
const line = $('.line')
console.log(tabActive)

console.log(tabs)

tabs.forEach((tab,index)=> {
    const pane = panes[index]
    tab.onclick = function() {

        $('.tabs.active').classList.remove('active')
        $('.list-content.active').classList.remove('active')
        
        line.style.left = this.offsetLeft + 'px'
        line.style.width =this.offsetWidth + 'px'

        this.classList.add('active')
        pane.classList.add('active')
    }
})