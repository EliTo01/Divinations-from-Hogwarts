document.getElementById('getMessageButton').addEventListener('click', function() {
    const messages = {
        en: ["You are going to have many good opportunities in the future! Just look out for the baboons.",
"Ah… Oooh… Um… Good luck!", 
"Peek-a-boo!",
"The cake is a LIE.",
"Sssssss (The attached message is written in Parseltongue).",
"If you ever find yourself in a pizzeria and see a golden rabbit that looks like a robot… don’t follow it anywhere.",
"Knowledge is to know that tomatoes, cucumbers, peppers and eggplants are fruits. Wisdom is knowing that they don’t go in a fruit salad.",
"No, it’s not a good idea.",
"Don’t eat yellow snow. It’s not lemon-flavored.",
"Love Potions lead to the creation of Dark Lords. Don’t use them. It is better to just be yourself either way. ♥️",
"If you ever get attacked by a vampire, remember to defend yourself with sunshine karate. If you don’t know sunshine karate, punch it as hard as you can while shouting “ORA ORA” and hope to yourself that time will stop.",
"If you put sugar on cucumber, it tastes like watermelon. :D",
"Just do it.",
"The difference between a novice and a master is that the master has failed more times than the novice has tried.",
"People’s dreams have no end!",
"If you’re hungry, eat.",
"When the world shoves you around, you just gotta stand up and shove back. It's not like somebody's gonna save you if you start babbling excuses.",
"Miracles only happen to those who never give up!",
"If you don't take risks, you can't create a future!",
"The world isn’t perfect. But it’s there for us, doing the best it can… that’s what makes it so beautiful.",
"Knowing what it feels like to be in pain, is exactly why we try to be kind to others.",
"Whether a fish lives in a clear stream or a water ditch, so long as it continues swimming forward, it will grow up beautifully.",
"An apple a day keeps anyone away if you throw it hard enough!",
"Laziness is the mother of all bad habits. But ultimately, she is a mother and we should respect her.",
"If you use your head, you won’t get fat even if you eat sweets.",
"If you keep this secret, this strawberry is yours. 🍓",
"Problems that cannot be solved do not exist in this world.",
"Fools who don’t respect the past are likely to repeat it.",
"The only way to truly escape the mundane is for you to constantly be evolving. Whether you choose to aim high, or aim low. Enjoy each day for what it is.",
"Do you believe in gravity?",
"This is a test.",
"What a beautiful Duwang! (chew) There must be no other place as pretty as this town. This feels like a picnic.",
"OH NO!",
"Everyone hates knowing that tomorrow's Monday, but we live on thinking about how another fun Saturday will come around. It isn't always Monday!",
"The moment you think of giving up, think of the reason why you held on so long.",
"Destiny. Fate. Dreams. These unstoppable ideas are held deep in the heart of man. As long as there are people who seek freedom in this life, these things shall not vanish from the Earth.",
"There’s no such thing as a painless lesson. They just don’t exist. Sacrifices are necessary. You can’t gain anything without losing something first.",
"To be strong is not just about physical strength. It's about having a strong will and a determined spirit.",
"But you didn't get this far by giving up, did you? That's right. You have something called 'determination'. So as long as you hold on, so as long as you do what's in your heart, I believe you can do the right thing.",
"Take care of yourself, kid. Cause someone really cares about you.",
"Quick, behind that conveniently-shaped lamp!",
"👎︎︎♋︎❒︎🙵 ♎︎♋︎❒︎🙵♏︎❒︎ ⍓︎♏︎⧫︎ ♎︎♋︎❒︎🙵♏︎❒︎ ⧫︎♒︎♏︎ ♎︎♋︎❒︎🙵■︎♏︎⬧︎⬧︎ 🙵♏︎♏︎◻︎⬧︎ ♑︎❒︎□︎⬥︎♓︎■︎♑︎ ⧫︎♒︎♏︎ ⬧︎♒︎♋︎♎︎□︎⬥︎⬧︎ ♍︎◆︎⧫︎⧫︎♓︎■︎♑︎ ♎︎♏︎♏︎◻︎♏︎❒︎.",
"Beware the man who speaks in hands.",
"‘GOODBYES’ AREN'T ALLOWED IN MY TOWN. JUST 'SEE-YOU-LATERS!'",
"NYEH HE HE HE HE!",
"I BELIEVE IN YOU! YOU CAN DO A LITTLE BETTER! EVEN IF YOU DON'T THINK SO! I... I PROMISE…",
"The one thing that I know is that I know nothing.",
"Ohana means family. Family means no one gets left behind, or forgotten.",
"Do fa fa fa sol fa sol fa mi do si mi mi mi do si do si sol si do",
"Don’t shout! They can hear you outside!",
"You are the world! You’re my number 1! 🎶",
"There is no greater joy in life than to have a lot of things to do and to not do them. ✨️",
"You are a star. 🌟"
],
        gr: ["Θα έχεις πολλές καλές ευκαιρίες στο κοντινό μέλλον. Απλά πρόσεχε τους μπαμπουίνους.",
"Αν βρεθείς ποτέ σε πιτσαρία και δεις ένα χρυσό κουνέλι που μοιάζει με ρομπότ... μη το ακολουθήσεις.",
"Αα... Ου... Εμ... Καλή τύχη!",
"Γνώση είναι να ξέρεις πως η ντομάτα, το αγγούρι, η πιπεριά και η μελιτζάνα είναι φρούτα. Σοφία είναι να ξέρεις πως δεν πάνε στη φρουτοσαλάτα.",
"Είχες κανένα κακό όνειρο τελευταία; Αν ναι, η κοντή φταίει. Ξέρεις ποιά. Θα έχει δηλητηριάσει κάποιο πεπόνι! Πάω στοίχημα!",
"Όχι, δεν είναι καλή ιδέα.",
"Σσσσς (Το παραπάνω μήνυμα είναι στη γλώσσα των φιδιών).",
"Μην φας ποτέ κίτρινο χιόνι. Δεν έχει γεύση λεμόνι. Α-αν και δε μιλάω από εμπειρία…",
"Αν χρησιμοποιείς το κεφάλι σου για να καις θερμίδες, δεν θα παχύνεις ακόμα και αν τρως γλυκά.",
"Οι απερίσκεπτοι που δεν σέβονται το παρελθόν είναι πιθανό να το επαναλάβουν.",
"Ο μόνος τρόπος για να ξεφύγεις πραγματικά από την καθημερινότητα είναι να εξελίσσεσαι διαρκώς. Είτε επιλέξεις να στοχεύσεις ψηλά, είτε να στοχεύσεις χαμηλά. Απολαύστε την κάθε μέρα γι' αυτό που είναι.",
"Πιστεύεις στη βαρύτητα;",
"Αυτό είναι ένα τεστ.",
"Προβλήματα που δεν μπορούν να επιλυθούν δεν υπάρχουν σε αυτόν τον κόσμο.",
"ΟΧ, ΟΧΙ!",
"Τα φίλτρα αγάπης οδηγούν στη δημιουργία των σκοτεινών λόρδων. Μην τα χρησιμοποιείς. Είναι καλύτερα το να είσαι ο εαυτός σου έτσι και αλλιώς.♥️",
"Απλα κάν’το.",
"Αν σου επιτεθεί ποτέ βρικόλακας, να θυμάσαι να αμυνθείς με καράτε του ήλιου. Αν δεν ξέρεις καράτε του ήλιου, βάρα το όσο δυνατά μπορείς φωνάζοντας 'ορα ορα' και ευχήσου να σταματήσει ο χρόνος.",
"Τα όνειρα των ανθρώπων δεν έχουν τέλος!",
"Άμα βάλεις ζάχαρη στο αγγούρι, παίρνει γεύση σαν καρπούζι. :D",
"Άμα πεινάς, φάε.",
"Η διαφορά μεταξύ ενός αρχαρίου και ενός εξπέρ είναι ότι ο εξπέρ έχει αποτύχει περισσότερες φορές απ’ότι ο αρχάριος έχει προσπαθήσει.",
"Όταν η πραγματικότητα σε ρίχνει κάτω, πρέπει να σηκώνεσαι και να ανταποδίδεις. Δεν είναι λες και κάποιος θα σε σώσει αν αρχίσεις να λες δικαιολογίες...",
"Τα θαύματα συμβαίνουν μόνο σε όσους δεν τα παρατάνε ποτέ!",
"Το να γνωρίζουμε πώς είναι να πονάς, είναι ακριβώς ο λόγος για τον οποίο προσπαθούμε να είμαστε καλοί στους άλλους.",
"Αν δεν πάρεις καθόλου ρίσκα, δε θα μπορέσεις να δημιουργήσεις το μέλλον!",
"Ανεξάρτητα από το αν ένα ψάρι ζει σε ένα καθαρό ποτάμι ή σε μια τάφρο, όσο συνεχίζει να κολυμπάει προς τα εμπρός, θα μεγαλώσει υπέροχα.",
"Ο κόσμος δεν είναι τέλειος. Αλλά είναι εκεί για εμάς, και κάνει ό,τι καλύτερο μπορεί... αυτό είναι που τον κάνει τόσο όμορφο.",
"Ένα μήλο την ημέρα κρατάει τους πάντες πέρα, αν το ρίξεις αρκετά δυνατά!",
"Το κέικ είναι ψέμα.",
"Η τεμπελιά είναι η μητέρα όλων των κακών συνηθειών. Αλλά στην τελική, είναι μητέρα και πρέπει να τη σεβαστούμε.",
"Δεν υπάρχει κανένα ανώδυνο μάθημα. Απλά δεν υπάρχει. Οι θυσίες είναι απαραίτητες. Δεν μπορείς να κερδίσεις τίποτα χωρίς να χάσεις πρώτα κάτι.",
"Τη στιγμή που σκεφτείς να τα παρατήσεις, σκέψου τον λόγο για τον οποίο επέμενες τόσο καιρό.",
"Το να είσαι δυνατός δεν έχει να κάνει μόνο με τη σωματική δύναμη. Έχει να κάνει με μια ισχυρή θέληση και ένα αποφασιστικό πνεύμα.",
"Πεπρωμένο. Μοίρα. Όνειρα. Αυτές οι ασταμάτητες ιδέες βρίσκονται βαθιά στην καρδιά των ανθρώπων. Όσο υπάρχουν άνθρωποι που αναζητούν ελευθερία σε αυτή τη ζωή, αυτά τα πράγματα δεν θα εξαφανιστούν από τη Γη.",
"να προσέχεις τον εαυτό σου, πιτσιρίκι. γιατί κάποιος πραγματικά νοιάζεται για σένα.",
"Δεν έφτασες ως εδώ με το να τα παρατήσεις, έτσι δεν είναι; Σωστά. Έχεις κάτι που λέγεται 'αποφασιστικότητα'. Όσο λοιπόν αντέχεις, όσο πράττεις αυτό που έχεις μέσα στην καρδιά σου, πιστεύω ότι μπορείς να κάνεις το σωστό.",
"ΝΙΕΧΕΧΕΧΕΧΕΧΕ!",
"γρήγορα, κρύψου πίσω από μια βολικά διαμορφωμένη λάμπα.",
"👎︎︎♋︎❒︎🙵 ♎︎♋︎❒︎🙵♏︎❒︎ ⍓︎♏︎⧫︎ ♎︎♋︎❒︎🙵♏︎❒︎ ⧫︎♒︎♏︎ ♎︎♋︎❒︎🙵■︎♏︎⬧︎⬧︎ 🙵♏︎♏︎◻︎⬧︎ ♑︎❒︎□︎⬥︎♓︎■︎♑︎ ⧫︎♒︎♏︎ ⬧︎♒︎♋︎♎︎□︎⬥︎⬧︎ ♍︎◆︎⧫︎⧫︎♓︎■︎♑︎ ♎︎♏︎♏︎◻︎♏︎❒︎.",
"Πρόσεχε τον άνδρα που μιλά με τα χέρια.",
"ΠΙΣΤΕΥΩ ΣΕ ΣΕΝΑ! ΜΠΟΡΕΙΣ ΝΑ ΤΑ ΚΑΤΑΦΕΡΕΙΣ ΚΑΙ ΛΙΓΟ ΚΑΛΥΤΕΡΑ! ΑΚΌΜΑ ΚΙ ΑΝ ΔΕΝ ΤΟ ΠΙΣΤΕΥΕΙΣ! ΣΤΟ... ΣΤΟ ΥΠΟΣΧΟΜΑΙ...",
"ΤΑ 'ΑΝΤΙΟ' ΔΕΝ ΕΠΙΤΡΕΠΟΝΤΑΙ ΣΤΗΝ ΠΟΛΗ ΜΟΥ. ΜΟΝΟ ΤΑ 'ΛΕΜΕ ΑΡΓΟΤΕΡΑ'.",
"Δεν είναι καλό να παραμένουμε στα όνειρα και να ξεχνάμε να ζούμε.",
"Είσαι αστέρι! 🌟",
"Ουπς! Τό’κανες ξανά το θαύμα σου!",
"Δεν υπάρχει μεγαλύτερη ευχαρίστηση στη ζωή από το να έχεις να κάνεις ένα σωρό πράγματα και να μην τα κάνεις. ✨️",
"Μη φωνάζεις, ακούνε έξω!",
"Κάθε αρχή και δύσκολη λένε. Το τέλος να δεις!",
"Το νου σου και όλα θα πάνε καλά.",
"Αν η πραγματικότητα δε συμφωνεί μαζί μας, τόσο το χειρότερο γι'αυτήν!",
"Βάζω μια φωτιά… ΧΕΙ! Σ’όλα τα παλιά… ΧΕΙ!",
"Ιιιιιιιιι ο δράκουλας!",
"Το ένα πράμα που ξέρω είναι ότι δε ξέρω τίποτα.",
"Οχάνα σημαίνει οικογένεια, οικογένεια σημαίνει κανένα δεν αφήνουμε και δε ξεχνάμε.",
"Την έχει η ψυχή σου τη φωτιά.",
"Ντο φα φα φα σολ φα σολ φα μι ντο σι μι μι ντο σι ντο σι σολ σι ντο. 🎶"]
    };

    // Get selected language
    const selectedLanguage = document.getElementById('languageSelect').value;

    // Choose a random message from the selected language
    const randomMessage = messages[selectedLanguage][Math.floor(Math.random() * messages[selectedLanguage].length)];

    // Display the message
    const messageCanvas = document.getElementById('messageCanvas');
    messageCanvas.textContent = randomMessage;
});

document.getElementById('getMessageButton').addEventListener('click', function () {
    // Get the selected language from the dropdown
    const selectedLanguage = document.getElementById('languageSelect').value;

    // Fetch messages for the selected language
    const languageMessages = messages[selectedLanguage];

    // Randomly select a message
    const randomMessage = languageMessages[Math.floor(Math.random() * languageMessages.length)];

   const messageCanvas = document.getElementById('messageCanvas');
const ctx = messageCanvas.getContext('2d');

// Clear the canvas before drawing a new message
ctx.clearRect(0, 0, messageCanvas.width, messageCanvas.height);

// Dynamically adjust font size based on the message length
const baseFontSize = 18; // Default font size
const maxFontSize = 20;  // Maximum font size
const minFontSize = 8;  // Minimum font size
const fontAdjustment = Math.max(
  minFontSize,
  Math.min(baseFontSize, maxFontSize / Math.sqrt(randomMessage.length / 50))
);
ctx.font = `${fontAdjustment}px Arial`;
ctx.fillStyle = '#444';  // Text color

// Call the wrapText function to display the message
const maxWidth = messageCanvas.width - 20; // Use 90% of the canvas width
const lineHeight = 16;                      // Line height in pixels
const x = 20;                               // Horizontal padding
const y = 60;                               // Vertical start point

wrapText(ctx, randomMessage, x, y, maxWidth, lineHeight);

    function wrapText(context, text, x, y, maxWidth, lineHeight) {
  const words = text.split(' ');
  let line = '';
  const maxHeight =
      context.canvas.height - 20;

  for (let i = 0; i < words.length; i++) {
    const testLine = line + words[i] + ' ';
    const testWidth = context.measureText(testLine).width;

    if (testWidth > maxWidth && i > 0) {
      context.fillText(line, x, y); // Draw the line on the canvas
      line = words[i] + ' ';       // Start a new line
      y += lineHeight;             // Move to the next line height
        if (y + lineHeight > maxHeight) {
            break;
        }
    } else {
      line = testLine;
    }
  }
  context.fillText(line, x, y); // Draw the last line
}

});
