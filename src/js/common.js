class mainTitle {

    constructor(selector, cls, weight) {

        this.selector = document.querySelector(selector);
        this.cls = cls;
        this.weight = weight;

        this.selector.classList.add(cls); 

    }

    addColor(newcls) {

        return this.selector.classList.add(newcls); 

    }

    changeWeight(neweight) {

        let w = neweight || this.weight;

        return this.selector.style.fontWeight = w; 

    }


} 
 
let title = new mainTitle("h1","blue", "bold");

title.addColor("red");
title.changeWeight();

