
const button1=document.getElementById("select_btn1");
        const visible_card1=document.getElementById("visible1");
        const button2=document.getElementById("select_btn2");
    const visible_card2=document.getElementById("visible2");
    const button3=document.getElementById("select_btn3");
    const visible_card3=document.getElementById("visible3");


function change1(){
    
    const button1=document.getElementById("select_btn1");
    const visible_card1=document.getElementById("visible1");
    const button2=document.getElementById("select_btn2");
    const visible_card2=document.getElementById("visible2");
    const button3=document.getElementById("select_btn3");
    const visible_card3=document.getElementById("visible3");
    const card1=document.getElementById("buy1");
    const card2=document.getElementById("buy2");
    const card3=document.getElementById("buy3");
        card1.classList.remove("card2_main");
        card1.classList.add("card_select");
        card2.classList.remove("card_select");
        card2.classList.add("card2_main");
        card3.classList.remove("card_select");
        card3.classList.add("card2_main");
        button1.classList.remove("unselect");
        button1.classList.add("select");
        visible_card1.classList.remove("hide");
        visible_card1.classList.add("visible");
        button2.classList.remove("select");
        button12.classList.add("unselect");
        visible_card2.classList.remove("visible");
        visible_card2.classList.add("hide");
        button3.classList.remove("select");
        button3.classList.add("unselect");
        visible_card3.classList.remove("visible");
        visible_card3.classList.add("hide");
    
}
function change2(){
    
    
    const button1=document.getElementById("select_btn1");
    const visible_card1=document.getElementById("visible1");
    const button2=document.getElementById("select_btn2");
    const visible_card2=document.getElementById("visible2");
    const button3=document.getElementById("select_btn3");
    const visible_card3=document.getElementById("visible3");
    const card1=document.getElementById("buy1");
    const card2=document.getElementById("buy2");
    const card3=document.getElementById("buy3");
        card2.classList.remove("card2_main");
        card2.classList.add("card_select");
        card1.classList.remove("card_select");
        card1.classList.add("card2_main");
        card3.classList.remove("card_select");
        card3.classList.add("card2_main");
        button1.classList.remove("select");
        button1.classList.add("unselect");
        visible_card1.classList.remove("visible");
        visible_card1.classList.add("hide");
        button2.classList.remove("unselect");
        button2.classList.add("select");
        visible_card2.classList.remove("hide");
        visible_card2.classList.add("visible");
        button3.classList.remove("select");
        button3.classList.add("unselect");
        visible_card3.classList.remove("visible");
        visible_card3.classList.add("hide");

}
function change3(){
    
    
    const button1=document.getElementById("select_btn1");
    const visible_card1=document.getElementById("visible1");
    const button2=document.getElementById("select_btn2");
    const visible_card2=document.getElementById("visible2");
    const button3=document.getElementById("select_btn3");
    const visible_card3=document.getElementById("visible3");
    const card1=document.getElementById("buy1");
    const card2=document.getElementById("buy2");
    const card3=document.getElementById("buy3");
        card3.classList.remove("card2_main");
        card3.classList.add("card_select");
        card2.classList.remove("card_select");
        card2.classList.add("card2_main");
        card1.classList.remove("card_select");
        card1.classList.add("card2_main");
        button1.classList.remove("select");
        button1.classList.add("unselect");
        visible_card1.classList.remove("visible");
        visible_card1.classList.add("hide");
        button2.classList.remove("select");
        button2.classList.add("unselect");
        visible_card2.classList.remove("visible");
        visible_card2.classList.add("hide");
        button3.classList.remove("unselect");
        button3.classList.add("select");
        visible_card3.classList.remove("hide");
        visible_card3.classList.add("visible");

}