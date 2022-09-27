player_1_name=localStorage.getItem("player_1_name")
player_2_name=localStorage.getItem("player_2_name")
player_1_score=0;
player_2_scare=0;

document.getElementById("player_1_name").innerHTML=player_1_name+":";
document.getElementById("player_2_name").innerHTML=player_2_name+":";

document.getElementById("player_1_score").innerHTML=player_1_score;
document.getElementById("player_2_score").innerHTML=player_2_score;

document.getElementById("player_question").innerHTML="Turno de preguntar-"+player_1_name;

document.getElementById("player_answer").innerHTML="Turno de contestar-"+player_2_name;

function send()
{
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    console.log("Palabra ene minuscula="+word);
    charAt1=word.charAt(1);
    console.log(charAt1);
    length_divide_2=Math.floor(word.lenght/2);
    charAt2=word.charAt(length_divide_2);
    console.log(charAt2)
lenght_minus_1=word.lenght-1;
charAt3=word.charAt(lenght_minus_1);
console.log(charAt3);

remove_charAt1=word.replace(charAt1,"_");
remove_charAt2=remove_charAt1.replace(charAt2,"_")
remove_charAt3=remove_charAt2.replace(charAt3,"_")
console.log(remove_charAt3)
}