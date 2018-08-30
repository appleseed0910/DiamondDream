"use strict"
/*


   DGM6105, Programming Foundations, 2016 Fall
   Final Program
   
   Xinyi Hu
   'Atalanta in Calydon'
   
   Poem is Algernon Charles Swinburne's work.
   
   Background music: Using the Creative Commons Attribution license (https://creativecommons.org/licenses/by/4.0/) using the song "Mesmerize" by Kevin MacLeod
   Source: http://incompetech.com/music/royalty-free/index.html?isrc = USUAN1500005
   Artists: http://incompetech.com/
   
   All texts, photos, codes I used were created by myself.
   
   
*/


//Start position of actress
var Mx = 80;

//Variables of sound
var clicksound;
var bgm;

//Variables of different characters

var dialogue1 = false;
var Freddywords1index = 0;
var Freddywords1 = ["(This man wears shabby but clean black coat;\nHis jeans looks faded because of many times washing.\nHe’s tall, when you get close, he crouches down and look at you.)", 'Freddy: Hey, young lady… Could you … I mean…\nDo you have any extra change, just one dollar?', 'Cecelia:\nSorry… I don’t have…I’m just a poor student without cash. I’m sorry.\nWhy don’t you find a job? You aren’t disabled.', 'Freddy: Oh, that’s okay. Do your best on finals, college girl.', 'Freddy: Oh no. It’s harder than you think. Certainly, it’s easy for someone like you, good looking, clean clothes, high educated…Boss is looking for you! But not for me. Life is harder than your homework.', 'Cece: So, what? Mr. Hardlife. Standing here and begging for money. This is easy for you.', 'Freddy: Hey, I don’t want to argue with you.', 'Cece: I don’t want to, either! Especially after staying up all night for my stupid homework. Don’t lecture me. School is not as easy as you think.', 'Freddy: But you should admit. It’s very lucky you have the chance and relatives who gave you so much support to make you stay in school.', 'Cece: It’s true, but only if you have choice. Anyway, good luck, man, I gotta go.', 'Freddy: Goodbye, Miss. Pissy.'];
var Freddychoice1 = false;

var dialogue2 = false;
var Lizwords1index = 0;
var Lizwords1 = ['(Your classmate Elizabeth is sitting in the chair alone, holding a cup of coffee, looks dazed in the cold wet air.)', 'Cece: Hi Liz, how are you? Why are you sitting here, let’s go to the library.', 'Liz: Good afternoon, Cece. But I don’t want to go to the library. There’re too many people and it’s noisy and warm…', 'Cece: So? Are you crazy? What’s the matter with the heat, you’ll get a cold for this damn rain, come on.', 'Liz: No, I can’t. Getting a cold sounds a good idea. Then I don’t need to come to school for several days. I don’t need to hide from you guys. Just stay at home.', 'Cece: What’s up? What happened?', 'Liz: I broke up with Riz.', 'Cece: Unbelievable… Are you guys insane? Why? I knew Riz will graduated next year. But I thought he would stay here, find a job, live with you.', 'Liz: We planned what you said. But there’s a great opportunity in his hometown. He should go back. He has so many relatives there, they can help him in his career. On the opposite, I can almost do nothing for him.', 'Cece:\nHow did you persuade him to break up with you? You two are always so sweet.\nPhysically, you’re right. But I don’t think it’s a good choice.', 'Liz: I told him that I didn’t love him anymore. I got bored with him.', 'Cece: I can’t believe that he believed your lies!', 'Liz: He didn’t. But I started to hide from him. It’s very easy. Just pretend I’m disappearing from his life.', 'Cece: You’re cold blooded, you’re hurting both of you.', 'Liz: I just don’t want him to make such a significant decision for me. I can’t bear that burden. It’s my fault.', 'Cece: I don’t know whether it’s your fault. But obviously, you lost your mind. I gotta go. Take care of yourself.', 'Liz: I want to do something help him.', 'Cece: I don’t want to influence your choice. If you insist that you’re right. I hope you don’t regret it.', 'Liz: I don’t know. I think I will. But I still hope he has a better life. If he stays here and gives that chance up for me. I can do nothing to make it up for him. That makes me feel guilty.', 'Cece: You’re such a coward.', 'Liz: I am. Just leave me alone, Cece.'];
var Lizchoice1 = false;

var dialogue3 = false;
var Evawords1index = 0;
var Evawords1 = ['(This woman is dressed gorgeously, but looks unhappy. She’s smoking in her forties.)', 'Cece: Smoking is harmful to your health, lady.', 'Eva: I know, but it makes me relaxed.', 'Cece: You may try to find some other ways to relieve stress, like sports or some hobbies.', 'Eva: No, sweet heart. I don’t have too much time. I can only smoke for few minutes.', 'Cece: Okay, successful busy lady.', 'Eva: No, I’m not. My life is a mess.', 'Cece:\nSadly. Me, too.\nWhat a sad coincidence! Me, too.', 'Eva: What’s wrong with you?', 'Cece: I had a quarrel with my mom. I stayed up all night and I’m exhausted. She asked me to report about my life. I wanted to sleep.', 'Cece: She blamed my attitude. How unreasonable she was.', 'Eva: Don’t judge your mom, she just cares about you.', 'Cece: I know, I know. I really hope she can understand my feelings.', 'Eva: No one is flawless.', 'Cece: Right, so what about you, kind lady.', 'Eva: Eh… about my father.', 'Cece: It sounds like I’m not the only one who has family problems.', 'Eva: No, it’s totally different. I’m not just arguing him. I hate him. And I don’t even want to face him.', 'Cece: It sounds serious. I thought someone like you wouldn’t have problems like these. You look so mature and understanding.', 'Eva: I may never forgive him.', 'Cece: What did he do to make you hate him?', 'Eva: It’s about my mom’s death. When she died, doctors said to us, they found many kinds of disease in her body. Her heart, lungs, kidneys all had serious disease. ', 'Eva: That’s why we can’t save her, even though we had sent her to the best hospital. It didn’t work.', 'Eva: My sister and I, we were busy with our work and family. My mom and father, they lived together. ', 'Eva: Such a long time, he never mentioned a word about mom’s disease. He was a selfish and stubborn dad, when we were children, we knew that. ', 'Eva: But I can’t believe that he is so selfish that ignored his wife’s life.', 'Cece: I feel sorry about that.', 'Eva: Never mind. I just can’t relieve myself from this hatred. Let me smoke one more. Then I can go home later, see his face later.', 'Cece: So many endless homework and unreasonable relationship with my parents. Fussy. I don’t know what kind of life I want, I don’t know where I want to go, either. I’m lost without my dream.', 'Eva: It looks we both need to cheer up for our lives. ', 'Cece: I don’t think you have problems like me. You look successful and must be confident.', 'Eva: Not everything just looks as good as its appearance. I mean, I’d like to say you should keep finding your dream and don’t be someone like me.', 'Cece: Okay, though I still don’t know why, but I’ll remember your words, lady.', 'Eva: Great, so, time to say bye.', 'Cece: Goodbye my lady.'];
var Evachoice1 = false;

var dialogue4 = false;
var Oliverwordsindex = 0;
var Oliverwords = ['(A boy is wandering on the street. He looks thin and weak but energetic. He talks to people, feel like begging something, but most stranger just shaking their heads to him.)', 'Oliver: Hi! Miss.', 'Cece: Hello, Mister?', 'Oliver: Barrett, Oliver Barrett. Good afternoon, miss.', 'Cece: Cecelia Stahr. Nice to meet you, so, what’s up? Mr. Barrett.', 'Oliver: (Pretending Cough) Excuse me for my disturbing, the thing is, my buddy and me, we’re preparing a big plan.', 'Cece: Sounds interesting. What plan?', 'Oliver: We’re going to buy our spaceship.', 'Cece: You mean a model of spaceship?', 'Oliver: (whisper: It only can be a model, but it doesn’t matter.) The point is, we’re recruiting. Would you like be a space sailor? ', 'Cece: Great! But I need to get my course, I think I can’t go adventure with you guys.', 'Oliver: Oh, that’s pity. If you can tell me one little story about yourself, maybe I can keep a seat for you, I’m captain. Of course, I’ll exchange story about our ship with you. It’s worthwhile!', 'Cece:\nSure, firstly, I’m a college student.\nI’d love to, but I’m afraid I’m gonna be late for my class.', 'Oliver: I’m…eh… I’m a patient lives in the children hospital nearby.', 'Cece: Really? How are you feeling? ', 'Oliver: Don’t be nervous, kind miss, I’m much stronger than before!', 'Cece: Okay, take care.', 'Oliver: Thanks! And, our spaceship called ‘Serenity’. Are you a sci-fi fan? If you’re, you could know this name.', 'Cece: Oh, but I’m not. This name sounds beautiful, anyway.', 'Oliver: I think it’s, too. Then, I have a good friend, his name is Freddy, he’s my chief mate! We’re working on preparation of our ship. I take charge the recruiting part, and he take charge the funds part.', 'Cece: Wait, Freddy?', 'Oliver: Yes, did you see him before?', 'Cece: I have impression of him. Does he often stand outside of groceries? ', 'Oliver: Right, he like to do those stores owners some little favor to earn change. Sounds cool.', 'Cece: But he begging money from me today.', 'Oliver: One dollar?', 'Cece: How did you know that?', 'Oliver: That’s our contract, or say, creed.', 'Cece: What creed?', 'Oliver: We’re space cowboy! We need ask help from others, this is not something dishonor, but to avoid being lazy and greedy, we can only ask for one dollar or one story every time.', 'Cece: Reasonable. That’s all?', 'Oliver: Eh…In fact, Toy Joy’s discount gonna be end this week. So, we need hurry up saving money for that. But you see, I can’t help. Thank Freddy, my dude.', 'Cece: I can understand. It’s really important. I think I may misunderstand your friend. And also, my story is not fun enough. If I found anything more helpful, I’ll come back to you.', 'Oliver: I feel very appreciate, miss. Keep flying, keep shinny.', 'Cece: What’s that?', 'Oliver: Best wish from the captain of Serenity.', 'Cece: Cool.', 'Oliver: Jesus, apologize for my disturbing. Please go on. Wish you won’t be late, miss.', 'Cece: Thank you!'];
var Oliverchoice = false;

var dialogue5 = false;
var Rizwordsindex = 0;
var Rizwords = ['(Your classmate Rizwan who is Elizabeth’s boyfriend. He is sitting and looking at a small box in front of him.)', 'Cece: What are you looking at?', 'Riz: It’s a pair of cufflinks.', 'Cece: Is that a gift from Liz? She’s always like this kind of things, cufflinks, ties, cravats.', 'Riz: Yes, it is. However, it’s a broke up gift.', 'Cece: Let me see it, I like her taste.', 'Riz: Here.', 'Cece: Unbelievable she gave you such a pair of ugly cufflinks as gift!', 'Riz: You know, we broke up. And I’m gonna leave and abandon her.', 'Cece: Oh I got it.', 'Riz: My flight is on tomorrow, I guess she won’t come, I don’t want she come, either. Can you say goodbye to her for me, Cece.', 'Cece:\nHave you ever think about it why she sent such ugly cufflinks to you as gift?\nYou should be ashamed.', 'Riz : Because we broke up and she hates me. It’s reasonable and I deserved.', 'Cece: That’s not all reasons. When we talked, she always said that, she wanted to buy you all kinds of cufflinks, ties, cravats and other things.', 'Cece: ‘But they’re all beautiful and expensive, I can’t afford, I’m planning that after I find my job, every month I get my salary, I’ll buy him one of them.’ She said.', 'Cece: Now, you’re going to leave, so she has no choice.', 'Cece: Of course, you’re right, since you decide to give all your efforts up, you can only get D, ugly cufflinks, you do deserved.', 'Riz: Do I have choice? She didn’t even want to see me.', 'Cece: You say? She lied to you, you shouldn’t lie to yourself. What she doesn’t want is you decide your life by her.', 'Riz: If I stay here, that’s totally for her.', 'Cece: But it’s different! You should tell her if you decide to stay, that’s your own choice, not her. ', 'Riz: What’s the difference?', 'Cece: It’s not her to make your decision. It’s yourself decide to be together with her. Even you give this opportunity up now, you may be regret for something you lost in the future. But if you leave tomorrow, you’ll regret right now.', 'Cece: No matter how much experience and money you get, you never gonna find the other Elizabeth.', 'Riz: …You’re right. Cece. How lucky we have a friend like you. I’ll try to find her.', 'Cece: You really changed?', 'Riz: Actually, I don’t want to leave her at first. Thank you, Cece. If you don’t mind, could you keep this pair of cufflinks?', 'Cece: Sure, it’s a special memento, right? I’m glad that you’ll be good.', '(You get a pair of ugly cufflinks.)', 'Riz: Yes, I’m.', 'Cece: Liz spent so much time and love on you. However, you give all things up.', 'Riz: She told me that she didn’t love me anymore. What I can do?', 'Cece: Why you choose to believe such a simple lie? Not believe in your love.', 'Riz: I don’t know. I’m confused, too. I think I need some time to make decision. I can’t answer at once. I may come back to her.', 'Cece: No, if you leave now, everything’ll change.', 'Riz: We’re all changing, aren’t we?', 'Cece: If you think so, I wouldn’t say any words.(But brave love can be unchangeable.)'];
var Rizchoice = false;

var dialogue6 = false;
var Dadwordsindex = 0;
var Dadwords = ['(This old man is sitting in the chair near the bus stop. People are talking and get on bus, get off bus. But he just sitting there and doesn’t look at anyone.)', 'Adamant: Hey, you, girl?', 'Cece: What? Are you calling me? Mister.', 'Adamant: Yes.', 'Cece: Can I help you?', 'Adamant: What’s that? What are you holding in that box?', 'Cece: It’s gift from my friends.', 'Adamant: Is it a pair of cufflinks?', 'Cece: Yes, how did you know?', 'Adamant: I recognize that wrap. That store always use this kind of wrap. ', 'Cece: You’re interested in accessories? My friend is, too.', 'Adamant: No, not at all.', 'Cece: Then, how did you know?', 'Adamant: Could you let me see it?', 'Cece: Sure. I think it’s not a very exorbitant pair of cufflinks.', 'Adamant: It looks ugly.', 'Cece: I know, but it’s my friend’s gift…', 'Adamant: I like it.', 'Cece: Excuse me?', 'Adamant: It reminds me of my wife. She was always like these things.', 'Adamant: I don’t understand why these things attract people.', 'Cece: But you just said you like it?', 'Adamant: Oh, yes. Because of it’s really ugly. ', 'Cece: You like ugly ones?', 'Adamant: Not really. We were poor in the past. My wife wanted to buy me a pair of cufflinks which I hadn’t. ', 'Adamant: I didn’t want let her down. But I didn’t want to spend too much money on it, either.', 'Adamant: We had two naughty daughters, they always wanted new toys, candy, cookie…', 'Adamant: So I lied to my wife.', 'Adamant: I told her, I liked the ugliest one. I would only choose that one if she insisted on buying.', 'Cece: Then? Did she buy it for you?', 'Adamant: Yep, and I used left money to buy three pieces of strawberry cake for them. My wife and daughters.', 'Cece: Sounds sweet.', 'Adamant: Yes, their smiles. What you can do if you see that smiles except spoil them.', 'Cece: Love do have many different forms.', 'Adamant: Girl, could you give that to me? ', 'Cece:\nI know you really want it. But it has special meaning to me. So..\nIt’s special to me. However, I’d love to give you.', 'Adamant: Thank you. I don’t know what I can do for you. If you don’t mind, you can keep this one dollar. That’s all I have.', 'Cece: Oh thanks but I don’t need these.', 'Adamant: I use them to get bus go home, but I just got my daughter’s call and she’ll come to drive me home. So I don’t need it anymore. You can keep it.', 'Cece: Wait, I should keep it. I have a friend who is asking for this.', 'Adamant: Good.', 'Cece: Thank you.', 'Adamant: You’re welcome.(You get one dollar.)', 'Adamant: That’s okay. Never mind.', 'Cece: Yes, I’m sorry.', 'Adamant: I need take bus to go home. See you, girl.', 'Cece: See you.'];
var Dadchoice = false;
var getdollar = false;

//This is the second time actress meet Freddy
var dialogue7 = false;
var Freddywords2index = 0;
var Freddywords2 = ['Cece: You’re still here.', 'Freddy: You come back, miss.Pissy.', 'Cece: Could you call me as a better nickname? Since I’m your colleague now.', 'Freddy: What colleague?', 'Cece: I’m on ‘Serenity’, too.', 'Freddy: You meet Oliver?', 'Cece: Yes, Mr. Captain.', 'Freddy: OK, welcome. So, what you want?', 'Cece: Report! I’ve collect one dollar. I think I should hand it to chief mate.', 'Freddy: You can.', 'Cece: And I really want to apologize for my rudeness formerly.', 'Freddy: Never mind, I even don’t remember. What are you talking about?', 'Cece: Tricky mate!', 'Freddy: You should call it smart. To be honest, I was rude, too. I should apologize to you, too.', 'Cece: That’s great, then we don’t owe each other.', 'Freddy: Yes, dude.', 'Cece: And I also have two more interesting stories.', 'Freddy: You want to tell Oliver?', 'Cece: I want to share with you, then we can tell Oliver together. It won’t break the rule, right? One story every time.', 'Freddy: Tricky sailor!', 'Cece: It’s smart!', 'Freddy: What are your stories?', 'Cece: One of them is about my classmates, and other one is about father and daughters……\n……………………\n…………………………………………'];


//Variables of opening interface and instruction interface
var x = 200;
var OPimage;
var Instruction;
var OPshow = true;
var Instrushow = false;

//Variables of story sitution
var storystart = false;
var storyend = false;
var endcamera = 0;

//Variables of scence
var BWsky1, BWsky2, BWsky3, BWsky4;
var Csky1, Csky2, Csky3, Csky4;
var BWbuilding1, BWbuilding8, BWbuilding5, BWbuilding2, BWbuilding3, BWbuilding4, BWbuilding9;
var Cbuilding1, Cbuilding8, Cbuilding5, Cbuilding2, Cbuilding3, Cbuilding4, Cbuilding9;

//Variables of ending interface
var thanks1 = false;
var thanks2 = false;
var poem, ack;
var quit = false;

var timer = 0;


function preload() {

  clicksound = loadSound("18V_Cordless_Drill_Switch.mp3");
  bgm = loadSound("Mesmerize.mp3");

  OPimage = loadImage("OP.png");
  Instruction = loadImage("instruction map.jpg");

  BWsky1 = loadImage("blackwhite/sky1.jpg");
  BWsky2 = loadImage("blackwhite/sky2.png");
  BWsky3 = loadImage("blackwhite/sky3.png");
  BWsky4 = loadImage("blackwhite/sky4.png");

  Csky1 = loadImage("color/sky1.png");
  Csky2 = loadImage("color/sky2.png");
  Csky3 = loadImage("color/sky3.png");
  Csky4 = loadImage("color/sky4.png");

  BWbuilding1 = loadImage("blackwhite/building1.png")
  BWbuilding8 = loadImage("blackwhite/building8.png")
  BWbuilding5 = loadImage("blackwhite/building5.png")
  BWbuilding2 = loadImage("blackwhite/building2.png")
  BWbuilding3 = loadImage("blackwhite/building3.png")
  BWbuilding4 = loadImage("blackwhite/building4.png")
  BWbuilding9 = loadImage("blackwhite/building9.png")

  Cbuilding1 = loadImage("color/building1.png")
  Cbuilding8 = loadImage("color/building8.png")
  Cbuilding5 = loadImage("color/building5.png")
  Cbuilding2 = loadImage("color/building2.png")
  Cbuilding3 = loadImage("color/building3.png")
  Cbuilding4 = loadImage("color/building4.png")
  Cbuilding9 = loadImage("color/building9.png")

  poem = loadImage("poem.jpg");
  ack = loadImage("acknowledgement.jpg");

}

function setup() {
  createCanvas(1024, 680);
  background(140);
  bgm.play();// this starts the sound stored in object "sound" playing

}

function drawMainrole() {
  
  //Main role(controlled by player)
  if (keyIsPressed) {

    if (key == 'd' || key == 'D') {
      Mx += 3;
    } else if (key == 'a' || key == 'A') {
      Mx -= 3;
    }
  }
  if (Mx < 0) {
    Mx = 0;
  }

  if (Mx > 4066) {
    Mx = 4066;
  }
  noStroke();
  fill(134, 240, 99);
  rect(Mx, 640, 30, 30);
}

function rain() {


  var rx, ry;
  rx = random(4096);
  ry = random(680);
  stroke(255);
  strokeWeight(2);
  line(rx, ry, rx, ry + random(40));
  strokeWeight(1);

}

function Freddy() {
  noStroke();
  fill(155, 86, 12);
  rect(350, 640, 30, 30);

}

function Liz() {
  noStroke();
  fill(240, 131, 182);
  rect(900, 640, 30, 30);
}

function Eva() {
  noStroke();
  fill(12, 155, 118);
  rect(1500, 640, 30, 30);
}

function Oliver() {
  noStroke();
  fill(255, 255, 0);
  rect(2100, 640, 30, 30);
}

function Riz() {
  noStroke();
  fill(37, 66, 175);
  rect(2700, 640, 30, 30);
}

function Dad() {
  noStroke();
  fill(114, 20, 129);
  rect(3500, 640, 30, 30);
}

function draw() {

  if (OPshow) {
    image(OPimage, 0, 0, 1024, 680);
    if (mouseX > 720 && mouseX < 880 && mouseY > 505 && mouseY < 540) {
      cursor(HAND);
      noFill();
      rect(720, 505, 170, 40);
      if (mouseIsPressed) {
        OPshow = false;
        Instrushow = true;
      }
    } else if (mouseX > 765 && mouseX < 845 && mouseY > 548 && mouseY < 585) {
      cursor(HAND);
      noFill();
      rect(765, 548, 80, 40);
      if (mouseIsPressed) {
        window.close();
      }
    }
  } else if (Instrushow) {
    image(Instruction, 0, 0, 1024, 680);
    if (keyIsDown) {
      if (keyCode == ENTER) {
        Instrushow = false;
        storystart = true;
      }
    }
  } else if (storystart) {

    if (Mx > 600 && Mx < 3672) {
      camera(Mx - 600, 0);
    } else if (Mx > 3672) {
      camera(3072, 0);
    }

    cursor(ARROW);




    image(BWsky4, 2924, 0);
    image(BWsky3, 1731, 0);
    image(BWsky1, 0, 0);
    image(BWsky2, 550, 0);

    if (Freddywords2index == 22) {
      image(Csky4, 2924, 0);
      image(Csky3, 1731, 0);
      image(Csky1, 0, 0);
      image(Csky2, 550, 0);
      storyend = true;
    }



    image(BWbuilding1, 0, 104, 550, 576);
    if (Freddywords1index == 3 || dialogue7 == true) {
      image(Cbuilding1, 0, 104, 550, 576);
      dialogue1 = false;
    }

    image(BWbuilding2, 550, 160, 882, 482);
    if (Evawords1index == 27) {
      image(Cbuilding2, 550, 160, 882, 482);
      dialogue3 = false;
    }

    image(BWbuilding3, 1403, 315, 1137, 365);
    if (Oliverwordsindex == 36) {
      image(Cbuilding3, 1403, 315, 1137, 365);
      dialogue4 = false;
    }

    image(BWbuilding8, 279, 292, 713, 388);
    if (Lizwords1index == 15) {
      image(Cbuilding8, 279, 292, 713, 388);
      dialogue2 = false;
    }

    image(BWbuilding5, 992, 510, 414, 170);
    if (Evawords1index == 27) {
      image(Cbuilding5, 992, 510, 414, 170);
      dialogue3 = false;
    }

    image(BWbuilding4, 2540, 92, 1155, 588);
    if (Rizwordsindex == 28) {
      image(Cbuilding4, 2540, 92, 1155, 588);
      dialogue5 = false;
    }

    image(BWbuilding9, 3318, 197);
    if (Dadwordsindex == 42) {
      image(Cbuilding9, 3318, 197);
      dialogue6 = false;
      getdollar = true;
    }

    if (!storyend) {
      rain();
    }
    Freddy();
    Liz();
    Eva();
    Oliver();
    Riz();
    Dad();

    drawMainrole();

    if (Mx > 310 && Mx < 390) {
      if (keyIsDown && !dialogue2 && !dialogue3 && !dialogue4 && !dialogue5 && !dialogue6) {
        if (keyCode == 32) {
          if (!getdollar) {
            dialogue1 = true;
            Dialogue();
          } else {
            dialogue7 = true;
            Dialogue();
          }
        }
      }
    } else if (Mx > 860 && Mx < 940) {
      if (keyIsDown && !dialogue1 && !dialogue3 && !dialogue4 && !dialogue5 && !dialogue6 && !dialogue7) {
        if (keyCode == 32) {
          dialogue2 = true;
          Dialogue();
        }
      }
    } else if (Mx > 1460 && Mx < 1540) {
      if (keyIsDown && !dialogue1 && !dialogue2 && !dialogue4 && !dialogue5 && !dialogue6 && !dialogue7) {
        if (keyCode == 32) {
          dialogue3 = true;
          Dialogue();
        }
      }
    } else if (Mx > 2060 && Mx < 2140) {
      if (keyIsDown && !dialogue1 && !dialogue2 && !dialogue3 && !dialogue5 && !dialogue6 && !dialogue7) {
        if (keyCode == 32) {
          dialogue4 = true;
          Dialogue();
        }
      }
    } else if (Mx > 2660 && Mx < 2740) {
      if (keyIsDown && !dialogue1 && !dialogue2 && !dialogue3 && !dialogue4 && !dialogue6 && !dialogue7) {
        if (keyCode == 32) {
          dialogue5 = true;
          Dialogue();
        }
      }
    } else if (Mx > 3460 && Mx < 3540) {
      if (keyIsDown && !dialogue1 && !dialogue2 && !dialogue3 && !dialogue4 && !dialogue5 && !dialogue7) {
        if (keyCode == 32) {
          dialogue6 = true;
          Dialogue();
        }
      }
    }

    Choice();

  } else if (storyend) {
    if (endcamera < 3072) {
      endcamera += 3;
    }
    
    camera(endcamera, 0);

    if (endcamera >= 3072) {
      thanks1 = true;
      storyend = false;
    }

    image(Csky4, 2924, 0);
    image(Csky3, 1731, 0);
    image(Csky1, 0, 0);
    image(Csky2, 550, 0);
    image(Cbuilding1, 0, 104, 550, 576);
    image(Cbuilding2, 550, 160, 882, 482);
    image(Cbuilding3, 1403, 315, 1137, 365);
    image(Cbuilding8, 279, 292, 713, 388);
    image(Cbuilding5, 992, 510, 414, 170);
    image(Cbuilding4, 2540, 92, 1155, 588);
    image(Cbuilding9, 3318, 197);

  } else if (thanks1) {
    image(poem, 0, 0);
  } else if (thanks2) {
    image(ack, 0, 0);
  }


}

//This function is used to draw option frame
function Choice() {

  if (dialogue1) {
    if (Freddywords1index == 2) {
      Freddychoice1 = true;
    }
  }
  if (Freddychoice1) {
    if (mouseX > 76 && mouseX < 880 && mouseY > 555 && mouseY < 615) {
      cursor(HAND);
      noFill();
      stroke(0);
      rect(72, 555, 815, 60);
    } else if (mouseX > 76 && mouseX < 880 && mouseY > 620 && mouseY < 650) {
      cursor(HAND);
      noFill();
      stroke(0);
      rect(72, 620, 815, 30);
    }
  }

  if (dialogue2) {
    if (Lizwords1index == 9) {
      Lizchoice1 = true;
    }
  }
  if (Lizchoice1) {
    if (mouseX > 76 && mouseX < 1180 && mouseY > 555 && mouseY < 615) {
      cursor(HAND);
      noFill();
      stroke(0);
      rect(375, 550, 860, 58);
    } else if (mouseX > 76 && mouseX < 1180 && mouseY > 620 && mouseY < 650) {
      cursor(HAND);
      noFill();
      stroke(0);
      rect(375, 610, 835, 29);
    }
  }

  if (dialogue3) {
    if (Evawords1index == 7) {
      Evachoice1 = true;
    }
    if (Evachoice1) {
      if (mouseX > 76 && mouseX < 480 && mouseY > 555 && mouseY < 585) {
        cursor(HAND);
        noFill();
        stroke(0);
        rect(970, 550, 460, 30);
      } else if (mouseX > 76 && mouseX < 480 && mouseY > 585 && mouseY < 615) {
        cursor(HAND);
        noFill();
        stroke(0);
        rect(970, 580, 460, 30);
      }
    }
  }

  if (dialogue4) {
    if (Oliverwordsindex == 12) {
      Oliverchoice = true;
    }
    if (Oliverchoice) {
      if (mouseX > 76 && mouseX < 480 && mouseY > 555 && mouseY < 585) {
        cursor(HAND);
        noFill();
        stroke(0);
        rect(1610, 550, 660, 30);
      } else if (mouseX > 76 && mouseX < 680 && mouseY > 585 && mouseY < 615) {
        cursor(HAND);
        noFill();
        stroke(0);
        rect(1610, 580, 860, 30);
      }
    }
  }

  if (dialogue5) {
    if (Rizwordsindex == 11) {
      Rizchoice = true;
    }
    if (Rizchoice) {
      if (mouseX > 76 && mouseX < 880 && mouseY > 555 && mouseY < 615) {
        cursor(HAND);
        noFill();
        stroke(0);
        rect(2205, 550, 860, 60);
      } else if (mouseX > 76 && mouseX < 680 && mouseY > 615 && mouseY < 645) {
        cursor(HAND);
        noFill();
        stroke(0);
        rect(2205, 610, 360, 30);
      }
    }
  }

  if (dialogue6) {
    if (Dadwordsindex == 35) {
      Dadchoice = true;
    }
    if (Dadchoice) {
      if (mouseX > 76 && mouseX < 880 && mouseY > 555 && mouseY < 585) {
        cursor(HAND);
        noFill();
        stroke(0);
        rect(3005, 550, 860, 30);
      } else if (mouseX > 76 && mouseX < 880 && mouseY > 585 && mouseY < 615) {
        cursor(HAND);
        noFill();
        stroke(0);
        rect(3005, 580, 660, 30);
      }
    }
  }
}

//This function is used to draw dialogue interface
function Dialogue() {

  if (dialogue1) {
    //Cover layer
    fill(255, 218, 188, 140);
    rect(0, 0, 1024, 680);
    //Dialogue cloud
    strokeJoin(ROUND);
    stroke(255, 115, 0);
    fill(255, 241, 229);
    rect(40, 500, 920, 160, 20);
    //Text
    textFont("Consolas");
    textSize(26);
    fill(155, 86, 12);
    text(Freddywords1[Freddywords1index], 76, 520, 880, 160);
  }

  if (dialogue2) {
    //Cover layer
    fill(255, 188, 218, 140);
    rect(0, 0, 2048, 680);
    //Dialogue cloud
    strokeJoin(ROUND);
    stroke(255, 0, 119);
    fill(255, 229, 241);
    rect(340, 500, 920, 160, 20);
    //Text
    textFont("Consolas");
    textSize(24);
    fill(155, 12, 86);
    text(Lizwords1[Lizwords1index], 376, 520, 880, 160);
  }

  if (dialogue3) {
    //Cover layer
    fill(159, 232, 213, 140);
    rect(0, 0, 3000, 680);
    //Dialogue cloud
    strokeJoin(ROUND);
    stroke(0, 178, 132);
    fill(206, 232, 225);
    rect(940, 500, 920, 160, 20);
    //Text
    textFont("Consolas");
    textSize(24);
    fill(12, 155, 86);
    text(Evawords1[Evawords1index], 976, 520, 880, 160);
  }

  if (dialogue4) {
    //Cover layer
    fill(249, 250, 124, 140);
    rect(0, 0, 4000, 680);
    //Dialogue cloud
    strokeJoin(ROUND);
    stroke(132, 178, 0);
    fill(250, 250, 192);
    rect(1575, 500, 920, 160, 20);
    //Text
    textFont("Consolas");
    textSize(24);
    fill(242, 167, 44);
    text(Oliverwords[Oliverwordsindex], 1610, 520, 880, 160);
  }

  if (dialogue5) {
    //Cover layer
    fill(117, 143, 224, 140);
    rect(0, 0, 4100, 680);
    //Dialogue cloud
    strokeJoin(ROUND);
    stroke(0, 38, 185);
    fill(204, 208, 227);
    rect(2175, 500, 920, 160, 20);
    //Text
    textFont("Consolas");
    textSize(24);
    fill(15, 33, 103);
    text(Rizwords[Rizwordsindex], 2210, 520, 880, 160);
  }

  if (dialogue6) {
    //Cover layer
    fill(205, 98, 222, 140);
    rect(0, 0, 4100, 680);
    //Dialogue cloud
    strokeJoin(ROUND);
    stroke(153, 0, 178);
    fill(219, 188, 224);
    rect(2975, 500, 920, 160, 20);
    //Text
    textFont("Consolas");
    textSize(24);
    fill(125, 84, 131);
    text(Dadwords[Dadwordsindex], 3010, 520, 880, 160);
  }

  if (dialogue7) {
    //Cover layer
    fill(255, 218, 188, 140);
    rect(0, 0, 1024, 680);
    //Dialogue cloud
    strokeJoin(ROUND);
    stroke(255, 115, 0);
    fill(255, 241, 229);
    rect(40, 500, 920, 160, 20);
    //Text
    textFont("Consolas");
    textSize(26);
    fill(155, 86, 12);
    text(Freddywords2[Freddywords2index], 76, 520, 880, 160);
  }
}


function mouseClicked() {
  //Click sound
  clicksound.play();
  
  
  //Click in the particular area, make choice
  if (Freddychoice1) {
    if (mouseX > 76 && mouseX < 880 && mouseY > 555 && mouseY < 615) {
      Freddychoice1 = false;
      Freddywords1index = 3;
    } else if (mouseX > 76 && mouseX < 880 && mouseY > 620 && mouseY < 650) {
      Freddychoice1 = false;
      Freddywords1index = 4;
    }
  }

  if (Lizchoice1) {
    if (mouseX > 76 && mouseX < 1180 && mouseY > 555 && mouseY < 615) {
      Lizchoice1 = false;
      Lizwords1index = 10;
    } else if (mouseX > 76 && mouseX < 1180 && mouseY > 620 && mouseY < 650) {
      Lizchoice1 = false;
      Lizwords1index = 16;
    }
  }

  if (Evachoice1) {
    if (mouseX > 76 && mouseX < 480 && mouseY > 555 && mouseY < 585) {
      Evachoice1 = false;
      Evawords1index = 28;
    } else if (mouseX > 76 && mouseX < 480 && mouseY > 585 && mouseY < 615) {
      Evachoice1 = false;
      Evawords1index = 8;
    }
  }

  if (Oliverchoice) {
    if (mouseX > 76 && mouseX < 480 && mouseY > 555 && mouseY < 585) {
      Oliverchoice = false;
      Oliverwordsindex = 13;
    } else if (mouseX > 76 && mouseX < 680 && mouseY > 585 && mouseY < 615) {
      Oliverchoice = false;
      Oliverwordsindex = 37;
    }
  }

  if (Rizchoice) {
    if (mouseX > 76 && mouseX < 880 && mouseY > 555 && mouseY < 615) {
      Rizchoice = false;
      Rizwordsindex = 12;
    } else if (mouseX > 76 && mouseX < 680 && mouseY > 615 && mouseY < 645) {
      Rizchoice = false;
      Rizwordsindex = 29;
    }
  }

  if (Dadchoice) {
    if (mouseX > 76 && mouseX < 880 && mouseY > 555 && mouseY < 585) {
      Dadchoice = false;
      Dadwordsindex = 43;
    } else if (mouseX > 76 && mouseX < 880 && mouseY > 585 && mouseY < 615) {
      Dadchoice = false;
      Dadwordsindex = 36;
    }
  }

  if (quit) {
    window.close();
  }

}

//This function is used to push the conversation op program go on
function keyPressed() {

  if (dialogue1) {
    if (Freddywords1index < 2) {
      Freddywords1index++;
    } else if (Freddywords1index > 3 && Freddywords1index <= 9) {
      Freddywords1index++;
    } else if (Freddywords1index >= 10) {
      Freddywords1index = 0;
    }
  }

  if (dialogue2) {
    if (Lizwords1index < 9) {
      Lizwords1index++;
    } else if (Lizwords1index >= 10 && Lizwords1index < 15) {
      Lizwords1index++;
    } else if (Lizwords1index >= 16 && Lizwords1index < 20) {
      Lizwords1index++
    } else if (Lizwords1index >= 20) {
      Lizwords1index = 0;
    }
  }

  if (dialogue3) {
    if (Evawords1index < 7) {
      Evawords1index++;
    } else if (Evawords1index >= 8 && Evawords1index < 27) {
      Evawords1index++;
    } else if (Evawords1index >= 28 && Evawords1index < 34) {
      Evawords1index++
    } else if (Evawords1index >= 34) {
      Evawords1index = 0;
    }
  }

  if (dialogue4) {
    if (Oliverwordsindex < 12) {
      Oliverwordsindex++;
    } else if (Oliverwordsindex >= 13 && Oliverwordsindex < 36) {
      Oliverwordsindex++;
    } else if (Oliverwordsindex >= 37 && Oliverwordsindex < 38) {
      Oliverwordsindex++;
    } else if (Oliverwordsindex >= 38) {
      Oliverwordsindex = 0;
    }
  }

  if (dialogue5) {
    if (Rizwordsindex < 11) {
      Rizwordsindex++;
    } else if (Rizwordsindex >= 12 && Rizwordsindex < 28) {
      Rizwordsindex++;
    } else if (Rizwordsindex >= 29 && Rizwordsindex < 36) {
      Rizwordsindex++;
    } else if (Rizwordsindex >= 36) {
      Rizwordsindex = 0;
    }
  }

  if (dialogue6) {
    if (Dadwordsindex < 35) {
      Dadwordsindex++;
    } else if (Dadwordsindex >= 36 && Dadwordsindex < 42) {
      Dadwordsindex++;
    } else if (Dadwordsindex >= 43 && Dadwordsindex < 46) {
      Dadwordsindex++;
    } else if (Dadwordsindex >= 46) {
      Dadwordsindex = 0;
    }
  }

  if (dialogue7) {
    if (Freddywords2index < 22) {
      Freddywords2index++;
    } else if (Freddywords2index >= 22) {
      Freddywords2index = 22;
    }
  }

  if (storyend) {
    storystart = false;
  }

  if (thanks1) {
    thanks1 = false;
    thanks2 = true;
  }

}