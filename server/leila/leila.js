module.exports = {
  Fox: (port, name, bust, belly, hips, palette) => {
    // <- Comment out these top to lines, AND the bottom two lines, to import them into your server index file.
    // function Fox(port, name, bust, belly, hips) {
    // <- to start/stop testing ____________________________________________________________________________________________________________
    console.clear();
    let frame = 0;
    let phraseNumArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    // phraseNumArr = [14];

    let phraseNumSelector = 0;
    let animSpeed = 937.5;
    let chaos = 0;

    //If you're reading this... Then you've Found the Virtual Waifu I've been making in my spare time
    //Her name is Leila.Fox and I animated her with console.log and console.clear
    //Her movements sync to music at 128 bpm
    //She Shuffles her phrases rather than randomly selecting one with math.random()
    //Her animations are easy to mutate with the armsOut and mouthOpen variables
    //Mouth open will Intuitively update when phraseBit is true
    //Explore it if you would like,
    //Copy past this into your own project,
    //Have fun
    //but DO NOT! ATTEMPT TO PUSH ~YOUR~ CHANGES TO ~MY~ GITHUB WITHOUT PERMISSION.

    //This is the Fisher-Yates Method of Shuffling an array.
    function shuffle(array) {
      var m = array.length,
        t,
        i;
      while (m) {
        i = Math.floor(Math.random() * m--);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
      }
      return array;
    }
    shuffle(phraseNumArr);
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    function leilaAnimation() {
      setTimeout(() => {
        leilaAnimation();
      }, animSpeed);

      frame++;
      let leila = "";
      let phraseBit = "";
      let armsOut = 0;
      let mouthOpen = 0;
      let reset = "\x1b[0m";
      let underscore = "\x1b[4m";
      // let dim = "\x1b[2m";
      let bright = "\x1b[1m";
      let black = "\x1b[30m";

      let color = "";

      let lightOff = reset;
      let lightOn = reset + bright;

      if (frame > 24) {
        phraseNumSelector++;
        frame = 9;
      }

      phraseFrame = frame - 8;

      if (frame === 24 && chaos != 0) {
        chaos = 0;
      }

      if (phraseNumSelector >= phraseNumArr.length) {
        shuffle(phraseNumArr);
        phraseNumSelector = 0;
      }

      phraseNumber = phraseNumArr[phraseNumSelector];

      colorPicker = palette;

      switch (palette) {
        case 7:
          colorPicker = phraseNumArr[0] % 7;
          break;
        case 8:
          colorPicker = phraseNumber % 7;
          break;
        case 9:
          colorPicker = frame % 7;
          break;
      }

      // color = "\x1b[91m";

      switch (colorPicker) {
        case 0:
          color = "\x1b[91m";
          break;
        case 1:
          color = "\x1b[92m"; // <-GREEN
          break;
        case 2:
          color = "\x1b[95m"; // <-PURPLE
          break;
        case 3:
          color = "\x1b[94m"; // <-BLUE
          break;
        case 4:
          color = "\x1b[93m"; // <-YELLOW
          break;
        case 5:
          color = "\x1b[90m"; //<- BLACK
          break;
        case 6:
          color = "\x1b[96m"; // <-TEAL
          break;
      }

      // Connection ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

      if (frame == 1) {
        phraseBit = `Port ${port} Ready Sir!`;
        armsOut = 2;
      }

      if (frame == 2) {
        phraseBit = `Database Connected! Nya!`;
      }

      if (frame == 3) {
        phraseBit = `Leila Ready to Serve`;
      }

      if (frame == 4) {
        phraseBit = `Master ${name}! NYA!`;
      }

      /*
        PHRASE REFERENCE COPY AND PAST THE 4 LINES BELOW TO START A PHRASE
      // Phrase X ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      if (phraseFrame == Y && phraseNumber == Z && phraseBit == "") {
        phraseBit = `PutPhraseBitHere`
      }
      */
      // Phrase 1 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      if (phraseFrame == 1 && phraseNumber == 1 && phraseBit == "") {
        phraseBit = `You're Doing Great, Nya!`;
        armsOut = 2;
      }

      if (phraseFrame == 2 && phraseNumber == 1 && phraseBit == "") {
        phraseBit = `Keep Coding Nya!`;
        armsOut = 2;
      }

      // Phrase 2 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      if (phraseFrame == 1 && phraseNumber == 2 && phraseBit == "") {
        phraseBit = `Nya~ Nya~`;
        armsOut = 2;
      }

      if (phraseFrame == 2 && phraseNumber == 2 && phraseBit == "") {
        phraseBit = `Purr~ Purr~`;
        armsOut = 2;
      }

      // Phrase 3 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      if (phraseFrame == 1 && phraseNumber == 3 && phraseBit == "") {
        phraseBit = `Leila loves ${name}`;
      }

      // Phrase 4 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      if (phraseFrame == 1 && phraseNumber == 4 && phraseBit == "") {
        phraseBit = `Does Master ${name} Like...`;
      }

      if (phraseFrame == 2 && phraseNumber == 4 && phraseBit == "") {
        phraseBit = `Leila's Stockings? Nya?`;
        armsOut = 1;
        mouthOpen = 3;
      }

      // Phrase 5 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      if (phraseFrame == 1 && phraseNumber == 5 && phraseBit == "") {
        phraseBit = `Keep Staring`;
      }

      if (phraseFrame == 2 && phraseNumber == 5 && phraseBit == "") {
        phraseBit = `At Leila's Boobs! nya!`;
        armsOut = 2;
      }

      if (phraseFrame == 5 && phraseNumber == 5 && phraseBit == "") {
        phraseBit = `Leila Enjoys`;
        armsOut = 1;
      }

      if (phraseFrame == 6 && phraseNumber == 5 && phraseBit == "") {
        phraseBit = `The Attention NYA!`;
        armsOut = 1;
      }

      // Phrase 6 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      if (phraseFrame == 1 && phraseNumber == 6 && phraseBit == "") {
        phraseBit = `Work Hard`;
      }

      if (phraseFrame == 2 && phraseNumber == 6 && phraseBit == "") {
        phraseBit = `Earn Money`;
      }

      if (phraseFrame == 3 && phraseNumber == 6 && phraseBit == "") {
        phraseBit = `Raise CatGirls`;
      }

      // Phrase 7 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      if (phraseFrame == 1 && phraseNumber == 7 && phraseBit == "") {
        phraseBit = `Leila Exists Only`;
      }

      if (phraseFrame == 2 && phraseNumber == 7 && phraseBit == "") {
        phraseBit = `To Look Pretty`;
        armsOut = 1;
      }

      if (phraseFrame == 3 && phraseNumber == 7 && phraseBit == "") {
        phraseBit = `For Master ${name} Nya!`;
        armsOut = 2;
      }

      if (phraseFrame == 6 && phraseNumber == 7 && phraseBit == "") {
        phraseBit = `And to Increase...`;
      }

      if (phraseFrame == 7 && phraseNumber == 7 && phraseBit == "") {
        phraseBit = `${name}'s Productivity`;
      }

      // Phrase 8 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      if (phraseFrame == 1 && phraseNumber == 8 && phraseBit == "") {
        phraseBit = `No Thoughts`;
        armsOut = 1;
      }

      if (phraseFrame == 2 && phraseNumber == 8 && phraseBit == "") {
        phraseBit = `Head Empty`;
        armsOut = 1;
      }

      if (phraseFrame == 3 && phraseNumber == 8 && phraseBit == "") {
        phraseBit = `Nya! Nya!`;
        armsOut = 2;
      }

      if (phraseFrame == 4 && phraseNumber == 8 && phraseBit == "") {
        phraseBit = `Just a FuckPet`;
        armsOut = 2;
        mouthOpen = 2;
      }

      // Phrase 9 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      if (phraseFrame == 1 && phraseNumber == 9 && phraseBit == "") {
        phraseBit = `Hey Master...`;
        armsOut = 2;
        chaos = 1;
      }

      if (phraseFrame == 2 && phraseNumber == 9 && phraseBit == "") {
        phraseBit = `You're a Butt`;
        armsOut = 2;
      }

      if (
        2 < phraseFrame == phraseFrame < 12 &&
        phraseNumber == 9 &&
        phraseBit == ""
      ) {
        phraseBit = `!!!!!!!!!!`;
        armsOut = 1;
        mouthOpen = 2;
        chaos = 1;
      } else if (phraseNumber == 9) {
        chaos = 0;
      }

      if (phraseFrame == 4 && phraseNumber == 9 && phraseBit == "") {
        armsOut = 1;
        mouthOpen = 2;
        chaos = 2;
      }

      if (phraseFrame == 14 && phraseNumber == 9 && phraseBit == "") {
        phraseBit = `Thank You Master ${name}!!!`;
        armsOut = 1;
      }

      if (phraseFrame == 15 && phraseNumber == 9 && phraseBit == "") {
        armsOut = 1;
      }

      if (phraseFrame == 16 && phraseNumber == 9 && phraseBit == "") {
        phraseBit = `Leila's Dizzy! NYA!`;
        armsOut = 2;
      }

      // Phrase 10 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      if (phraseFrame == 1 && phraseNumber == 10 && phraseBit == "") {
        phraseBit = `GO GO GO`;
        armsOut = 1;
      }

      if (phraseFrame == 2 && phraseNumber == 10 && phraseBit == "") {
        phraseBit = `WRITE MORE CODE`;
        armsOut = 1;
      }

      if (phraseFrame == 3 && phraseNumber == 10 && phraseBit == "") {
        phraseBit = `OR SOMEONE!`;
        armsOut = 1;
      }

      if (phraseFrame == 4 && phraseNumber == 10 && phraseBit == "") {
        phraseBit = `WILL BE!`;
        armsOut = 1;
      }

      if (phraseFrame == 5 && phraseNumber == 10 && phraseBit == "") {
        phraseBit = `!!!PUNISHED!!!`;
        armsOut = 1;
      }

      if (phraseFrame == 7 && phraseNumber == 10 && phraseBit == "") {
        phraseBit = `It's leila...`;
        mouthOpen = 3;
      }

      if (phraseFrame == 9 && phraseNumber == 10 && phraseBit == "") {
        phraseBit = `...leila gets punished NYA!`;
        mouthOpen = 3;
      }

      // Phrase 11 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      if (phraseFrame == 1 && phraseNumber == 11 && phraseBit == "") {
        phraseBit = `Repeat after Leila`;
      }

      if (phraseFrame == 2 && phraseNumber == 11 && phraseBit == "") {
        phraseBit = `I'm doing my best`;
      }

      if (phraseFrame == 4 && phraseNumber == 11 && phraseBit == "") {
        phraseBit = `I'm doing my best`;
      }

      if (phraseFrame == 6 && phraseNumber == 11 && phraseBit == "") {
        phraseBit = `I'm doing my best`;
      }

      // Phrase 13 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      if (phraseFrame == 3 && phraseNumber == 13 && phraseBit == "") {
        phraseBit = `LEILA A FOXXXO!!!`;
      }

      if (phraseFrame == 4 && phraseNumber == 13 && phraseBit == "") {
        phraseBit = `AND THAT MEANS...`;
      }

      if (phraseFrame == 5 && phraseNumber == 13 && phraseBit == "") {
        phraseBit = `SHE'S PLAYFUL AND FLUFFY!! NYA!`;
      }

      // Phrase 14 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      if (phraseFrame == 1 && phraseNumber == 14 && phraseBit == "") {
        phraseBit = `feeding time Master???`;
      }

      if (
        0 < phraseFrame == phraseFrame < 12 &&
        phraseNumber == 14 &&
        phraseBit == ""
      ) {
        armsOut = 2;
        if (phraseFrame % 2 == 0) {
          phraseBit = `~Suck~`;
          mouthOpen = 1;
        } else {
          phraseBit = `~Lick~`;
          mouthOpen = 2;
        }
      }

      if (phraseFrame == 12 && phraseNumber == 14 && phraseBit == "") {
        phraseBit = `~Gush~`;
        mouthOpen = 1;
      }

      if (phraseFrame == 13 && phraseNumber == 14 && phraseBit == "") {
        phraseBit = `~Gulp~`;
      }

      if (phraseFrame == 14 && phraseNumber == 14 && phraseBit == "") {
        phraseBit = `So Tasty!`;
      }

      if (phraseFrame == 15 && phraseNumber == 14 && phraseBit == "") {
        phraseBit = `Thank you Master! NYA!`;
      }

      // Phrase 15 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      if (
        phraseNumber == 15 &&
        -1 < phraseFrame == phraseFrame < 8 &&
        phraseBit == ""
      ) {
        phraseBit = `!!!!!!!!!!!!`;
        mouthOpen = 2;
        armsOut = 1;
        chaos = 1;
      } else if (phraseNumber == 15) {
        chaos = 0;
      }

      if (phraseFrame == 11 && phraseNumber == 15 && phraseBit == "") {
        phraseBit = `Thank you...`;
      }

      if (phraseFrame == 12 && phraseNumber == 15 && phraseBit == "") {
        phraseBit = `For giving leila...`;
      }

      if (phraseFrame == 13 && phraseNumber == 15 && phraseBit == "") {
        phraseBit = `The shock collar...`;
      }

      if (phraseFrame == 14 && phraseNumber == 15 && phraseBit == "") {
        phraseBit = `To remind her...`;
      }

      if (phraseFrame == 15 && phraseNumber == 15 && phraseBit == "") {
        phraseBit = `She's Owned Property.`;
      }

      // Phrase 16 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      if (phraseFrame == 1 && phraseNumber == 16 && phraseBit == "") {
        phraseBit = `Hey Master...`;
      }

      if (phraseFrame == 3 && phraseNumber == 16 && phraseBit == "") {
        phraseBit = `You're effort...`;
      }

      if (phraseFrame == 4 && phraseNumber == 16 && phraseBit == "") {
        phraseBit = `Is Meaningful...`;
      }

      if (phraseFrame == 6 && phraseNumber == 16 && phraseBit == "") {
        phraseBit = `With effort...`;
      }

      if (phraseFrame == 7 && phraseNumber == 16 && phraseBit == "") {
        phraseBit = `You made Leila...`;
      }

      if (phraseFrame == 9 && phraseNumber == 16 && phraseBit == "") {
        phraseBit = `And that's valid... nya.`;
      }

      // LEILA CREATION GOES DOWN HERE!!! AFTER DECIDING WHAT SHE SAYS IF ANYTHING.
      // head and text bubble
      // IF phraseBit IS TRUE! THEN USE SPEAKING HEAD, ELSE NON-SPEAKING HEAD

      let leilaHead = "";

      if (phraseBit && leilaHead == "") {
        leilaHead = `(${reset}${phraseBit}${bright})\n  \\ ${color}|\\${lightOn}_${color}/|    \n    |${lightOn}/ \\${color}|${lightOn}\n`; //SPEAKING HEAD
        if (mouthOpen == 0) {
          mouthOpen = 1;
        }
      } else {
        leilaHead = `${color}    .   .\n    |\\${lightOn}_${color}/|    \n    |${lightOn}/ \\${color}|${lightOn}\n`; //NON-SPEAKING HEAD
      }

      leila += leilaHead;

      leilaMouth = "";

      if (mouthOpen) {
        if (mouthOpen == 1) {
          leilaMouth = `    *\\${color}o${lightOn}/* \n`;
        }
        if (mouthOpen == 2) {
          leilaMouth = `    *\\${color}Q${lightOn}/* \n`;
        }
        if (mouthOpen == 3) {
          leilaMouth = `    *\\${color}w${lightOn}/* \n`;
        }
      } else {
        leilaMouth = `    *\\${color}=${lightOn}/* \n`;
      }

      leila += leilaMouth;

      // bust, belly, hips
      let leilaBody = "";
      let breasts = `(${underscore} Y ${reset})`;
      let waist = ") (";

      switch (bust) {
        case 1:
          breasts = `(${underscore} V ${reset})`;
          break;
        case 2:
          breasts = `(${underscore}\\Y/${reset})`;
          break;
        case 3:
          breasts = `(${underscore}/Y\\${reset})`;
          break;
        case 4:
          breasts = `(${underscore}   ${reset})`;
          break;
        case 5:
          breasts = `(${underscore} * ${reset})`;
          break;
        case 6:
          breasts = `(${underscore} U ${reset})`;
          break;
        case 7:
          breasts = `(${underscore}VXN${reset})`;
          break;
        case 8:
          breasts = `(${underscore}???${reset})`;
          break;
        case 9:
          breasts = `(${underscore}XXX${reset})`;
          break;
        case 10:
          breasts = `${color}(${underscore} Y ${reset}${color})${lightOff}`;
          break;
        case 11:
          breasts = `${color}(${underscore} V ${reset}${color})${lightOff}`;
          break;
        case 12:
          breasts = `${color}(${underscore}.Y.${reset}${color})${lightOff}`;
          break;
        case 13:
          breasts = `${color}(${underscore}/Y\\${reset}${color})${lightOff}`;
          break;
        case 14:
          breasts = `${color}(${underscore}   ${reset}${color})${lightOff}`;
          break;
        case 15:
          breasts = `${color}(${underscore} * ${reset}${color})${lightOff}`;
          break;
        case 16:
          breasts = `${color}(${underscore} U ${reset}${color})${lightOff}`;
          break;
        case 17:
          breasts = `${color}(${underscore}VXN${reset}${color})${lightOff}`;
          break;
        case 18:
          breasts = `${color}(${underscore}???${reset}${color})${lightOff}`;
          break;
        case 19:
          breasts = `${color}(${underscore}XXX${reset}${color})${lightOff}`;
          break;
        case 20:
          breasts = `${color}(${underscore}SUK${reset}${color})${lightOff}`;
          break;
        case 21:
          breasts = `${color}(${underscore}FOX${reset}${color})${lightOff}`;
          break;
      }

      switch (belly) {
        case 1:
          waist = `${underscore}).(${reset}`;
          break;
        case 2:
          waist = `${underscore})|(${reset}`;
          break;
        case 3:
          waist = `${underscore})=(${reset}`;
          break;
        case 4:
          waist = `${underscore})x(${reset}`;
          break;
        case 5:
          waist = `${underscore})${color}_${lightOff}(${reset}`;
          break;
        case 6:
          waist = `${lightOn}${color}) (${lightOff}${reset}`;
          break;
        case 7:
          waist = `${underscore}${color})|(${lightOff}${reset}`;
          break;
      }

      switch (armsOut) {
        case 0:
          leilaBody = `    .-"-. \n  ${black} /${lightOff}${breasts}${lightOn}${black}\\ \n${black}   \\\\${lightOff}${waist}${lightOn}${black}// \n`;
          break;
        case 1:
          leilaBody = `    .-"-. \n  ${black} /${lightOff}${breasts}${lightOn}${black}\\ \n${black}  // ${lightOff}${waist}${lightOn}${black} \\\\ \n`;
          break;
        case 2:
          leilaBody = `    .-"-. \n  ${black} /${lightOff}${breasts}${lightOn}${black}\\ \n${black}   " ${lightOff}${waist}${lightOn}${black} "  \n`;
          break;
      }

      leila += leilaBody;

      //thighs and hips
      leilaSkirt = `${lightOff}   .${underscore}/( )\\${reset}. ${lightOn}\n`;
      leilaThighs = `    \\${black}_${lightOn}|${black}_${lightOn}/ \n`;

      if (hips == 1) {
      }

      switch (hips) {
        case 1:
          leilaSkirt = `${lightOff}    /|_|\\${lightOn}\n`;
          break;
        case 2:
          leilaSkirt = `${lightOff}    /${color}|_|${lightOff}\\${lightOn}\n`;
          break;
        case 3:
          leilaSkirt = `${lightOff}    / V \\${lightOn}\n`;
          break;
        case 4:
          leilaSkirt = `${lightOff}    / ${color}V${lightOff} \\${lightOn}\n`;
          break;
        case 5:
          leilaSkirt = `${lightOff}    /${color}\\_/${lightOff}\\${lightOn}\n`;
          break;
        case 6:
          leilaSkirt = `${lightOff}${color}   .${underscore}/( )\\${reset}${color}. ${lightOff}${lightOn}\n`;
          break;
        case 7:
          leilaSkirt = `${lightOff}${color}    ${underscore}//|\\\\${reset}${color}  ${lightOff}${lightOn}\n`;
          break;
        case 8:
          leilaSkirt = `${lightOff}    / Y \\${lightOn}\n`;
          break;
      }

      leila += leilaSkirt;
      leila += leilaThighs;

      // Legs and swishing tail
      let leilaLegs = "";

      if (frame % 2 == 0 && leilaLegs == "") {
        leilaLegs += `    ${color}/${black}\\|/ ${lightOn}\n${color}/\\_/ ${black}/|\\${lightOn} \n${color}\\___/${black}\\|/ \n     /Y\\${lightOn}`;
      } else {
        leilaLegs = `     ${black}\\|/${lightOn}${color}\\ \n     ${black}/|\\${lightOn} ${color}\\_/\\ \n     ${black}\\|/${lightOn}${color}\\___/ \n     ${black}/Y\\${lightOn}`;
      }

      leila += leilaLegs;

      switch (chaos) {
        case 0:
          animSpeed = 937.5;
          break;
        case 1:
          animSpeed = 198.75;
          break;
        case 2:
          animSpeed = 1875;
          break;
      }

      console.clear();
      console.log(leila); // <- THIS STAYS DO NOT DELETE
      //DEBUG LOGIC BELOW
      // console.log("frame:", frame);
      // console.log("phraseNumber:", phraseNumber);
      // console.log("phraseFrame:", phraseFrame);
      // console.log("chaos:", chaos);
      // console.log("colorPicker:", colorPicker);
      // __________________________________________________________________________________________________________________________________________
    }
    // Wrap the equation below with a setTimeout function to delay it, rather than starting the animation immediately
    leilaAnimation();
  },
  // Fox(5000, "Mars", 10, 6, 6);
};
