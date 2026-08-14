const A = "assets/images/";
const TOTAL_POINTS = 50;

const choice = (id, prompt, options, answer, explanation, image = "") => ({
  id, type: "choice", prompt, options, answers: [answer], explanation, image, points: 1
});
const input = (id, prompt, answers, explanation, image = "") => ({
  id, type: "input", prompt, answers, explanation, image, points: 1
});

const sections = [
  {
    key: "A", label: "A", title: "Circle the correct words.",
    note: "Choose the word that completes each sentence correctly.", points: 6,
    questions: [
      choice("A1", "1. I'm ___ years old.", ["eight", "ate"], "eight", "Eight is the number 8. Ate is the past form of eat."),
      choice("A2", "2. I ___ the race!", ["one", "won"], "won", "Won is the past form of win. One is the number 1."),
      choice("A3", "3. I got the answer ___.", ["write", "right"], "right", "Right means correct. Write is the action of making words on a page."),
      choice("A4", "4. The car is on the ___.", ["road", "rode"], "road", "A road is a place where cars travel. Rode is the past form of ride."),
      choice("A5", "5. There are ___ pizzas.", ["two", "too"], "two", "Two is the number 2. Too means also or more than needed."),
      choice("A6", "6. A ___ flew near me.", ["be", "bee"], "bee", "A bee is a flying insect. Be is a verb.")
    ]
  },
  {
    key: "B", label: "B", title: "Look and complete the words.",
    note: "Use the picture and the letters already given.", points: 3,
    questions: [
      input("B1", "1. _ _ t _ e r _", ["pattern"], "The repeated lines and dots form a pattern.", A + "page1-img2-318x240.png"),
      input("B2", "2. s _ i _ _ l", ["spiral"], "A spiral is a line that curves around a central point.", A + "page1-img3-273x237.png"),
      input("B3", "3. _ _ e s _ _ n t", ["crescent"], "A crescent is a curved shape like a thin moon.", A + "b3-crescent.png")
    ]
  },
  {
    key: "C", label: "C", title: "Listen and check the correct picture. Write the word.",
    note: "The letters a and b are the original picture labels. Listen, choose the picture, and type the word.", points: 4,
    audio: "assets/audio/Listening-C.mp3",
    questions: [
      { id: "C1", type: "pictureWord", points: 2, prompt: "1.", pictures: [
        { value: "a", image: A + "page1-img5-87x189.png" }, { value: "b", image: A + "c1-picture-b.png" }
      ], parts: [
        { key: "picture", label: "Picture label", type: "pictureChoice", answers: ["a"], explanation: "The official key marks picture a." },
        { key: "word", label: "Word from the audio", type: "input", answers: ["sculpture"], explanation: "A sculpture is a three-dimensional work of art, like the statue in picture a." }
      ]},
      { id: "C2", type: "pictureWord", points: 2, prompt: "2.", pictures: [
        { value: "a", image: A + "page1-img6-174x192.png" }, { value: "b", image: A + "c2-picture-b.png" }
      ], parts: [
        { key: "picture", label: "Picture label", type: "pictureChoice", answers: ["b"], explanation: "The official key marks picture b." },
        { key: "word", label: "Word from the audio", type: "input", answers: ["origami"], explanation: "Origami is the art of folding paper into shapes." }
      ]}
    ]
  },
  {
    key: "D", label: "D", title: "Complete the sentences.",
    note: "Use There's, There isn't, There are, or There aren't.", points: 5,
    questions: [
      input("D1", "1. ___ a lot of crackers.", ["There are"], "Crackers is plural, so use There are."),
      input("D2", "2. ___ any paint.", ["There isn't", "There is not"], "Paint is uncountable. In a negative sentence, use There isn't any paint."),
      input("D3", "3. ___ any markers.", ["There aren't", "There are not"], "Markers is plural. In a negative sentence, use There aren't any markers."),
      input("D4", "4. ___ some juice.", ["There is", "There's"], "Juice is uncountable, so use There is or There's."),
      input("D5", "5. ___ a lot of water.", ["There is", "There's"], "Water is uncountable, so use There is or There's.")
    ]
  },
  {
    key: "E", label: "E", title: "Look and complete the sentences.",
    note: "Use a lot of, a few, or a little.", points: 4,
    questions: [
      input("E1", "1. There are ___ cookies.", ["a lot of"], "Cookies are countable, and the picture shows many cookies, so use a lot of.", A + "page2-img1-343x182.png"),
      input("E2", "2. There are ___ crackers.", ["a few"], "Crackers are countable, and only a small number remain, so use a few.", A + "page2-img3-380x109.png"),
      input("E3", "3. There is ___ juice.", ["a little"], "Juice is uncountable, and only a small amount remains, so use a little.", A + "page2-img2-202x177.png"),
      input("E4", "4. There is ___ water.", ["a lot of"], "Water is uncountable, and the jug contains a large amount, so use a lot of.", A + "e4-water-clean.png")
    ]
  },
  {
    key: "F", label: "F", title: "Look and answer the questions.",
    note: "Write a complete short answer.", points: 3,
    questions: [
      input("F1", "1. Are there a lot of oranges?", ["Yes, there are.", "Yes, there are"], "The bowl contains many oranges, so the answer is Yes, there are.", A + "page2-img5-357x179.png"),
      input("F2", "2. Are there any more cookies?", ["No, there aren't.", "No, there aren't", "No there aren't.", "No there aren't", "No, there are not.", "No, there are not"], "The plate is empty, so the answer is No, there aren't.", A + "page2-img4-363x104.png"),
      input("F3", "3. Is there some spaghetti?", ["Yes, there is.", "Yes, there is", "Yes there is.", "Yes there is"], "The picture shows spaghetti, so the answer is Yes, there is.", A + "page2-img6-347x156.png")
    ]
  },
  {
    key: "G", label: "G", title: "Listen and circle the correct words.",
    note: "Play the audio and choose the word you hear.", points: 4,
    audio: "assets/audio/Listening-G.mp3",
    questions: [
      choice("G1", "1. I have a ___ coin.", ["shiny", "golden"], "shiny", "The audio says shiny coin."),
      choice("G2", "2. Please ___ the paper.", ["crumple", "fold"], "fold", "The audio says fold the paper."),
      choice("G3", "3. The book is on the ___ of the couch.", ["edge", "end"], "edge", "The audio says on the edge of the couch."),
      choice("G4", "4. How high can he ___?", ["climb", "fly"], "climb", "The audio asks how high he can climb.")
    ]
  },
  {
    key: "H", label: "H", title: "Look and write the words.",
    note: "Name each art material shown in the original numbered picture.", points: 6,
    questions: [
      input("H1", "1.", ["markers"], "The picture shows colored markers.", A + "h1.png"),
      input("H2", "2.", ["scissors"], "The picture shows a pair of scissors.", A + "h2.png"),
      input("H3", "3.", ["glue"], "The picture shows a bottle of glue.", A + "h3.png"),
      input("H4", "4.", ["chalk"], "The picture shows a box of chalk.", A + "h4.png"),
      input("H5", "5.", ["colored pencils", "coloured pencils"], "The picture shows colored pencils.", A + "h5.png"),
      input("H6", "6.", ["watercolors", "water colours", "watercolors", "watercolours"], "The picture shows a watercolor paint set.", A + "h6.png")
    ]
  },
  {
    key: "I", label: "I", title: "Look at the pictures. Look at the letters. Write the words.",
    note: "Unscramble the letters to name each picture.", points: 2,
    questions: [
      input("I1", "1. a r n e c", ["crane"], "Rearranging a-r-n-e-c gives crane.", A + "page3-img2-600x300.png"),
      input("I2", "2. v e a w s", ["waves"], "Rearranging v-e-a-w-s gives waves.", A + "page3-img3-600x300.png")
    ]
  },
  {
    key: "J", label: "J", title: "Circle the correct words.",
    note: "Choose the form that makes each sentence grammatically correct.", points: 5,
    questions: [
      choice("J1", "1. There was ___ juice.", ["a little", "a few"], "a little", "Juice is uncountable, so use a little."),
      choice("J2", "2. There were ___ of carrots.", ["a little", "a lot"], "a lot", "Carrots are countable and plural, so a lot of carrots is correct."),
      choice("J3", "3. ___ ten bottles of milk.", ["There were", "There was"], "There were", "Ten bottles is plural, so use There were."),
      choice("J4", "4. ___ any chicken?", ["Were there", "Was there"], "Was there", "Chicken is uncountable here, so use Was there."),
      choice("J5", "5. ___ plates were there?", ["How many", "How much"], "How many", "Plates are countable, so ask How many.")
    ]
  },
  {
    key: "K", label: "K", title: "Write the questions. Look at the pictures and answer the questions.",
    note: "Use a lot, a little, or a few in each answer.", points: 8,
    questions: [
      { id: "K1", type: "paired", points: 2, prompt: "1. markers / How / there / were / many", image: A + "page4-img2-476x340.png", parts: [
        { key: "question", label: "Question", type: "input", answers: ["How many markers were there?", "How many markers were there"], explanation: "Markers are countable, so ask How many markers were there?" },
        { key: "answer", label: "Answer", type: "input", answers: ["There were a lot of markers.", "There were a lot of markers", "There were a lot.", "There were a lot"], explanation: "The picture shows many markers, so answer There were a lot of markers." }
      ]},
      { id: "K2", type: "paired", points: 2, prompt: "2. paint / was / there / much / How", image: A + "page4-img3-478x342.png", parts: [
        { key: "question", label: "Question", type: "input", answers: ["How much paint was there?", "How much paint was there"], explanation: "Paint is uncountable, so ask How much paint was there?" },
        { key: "answer", label: "Answer", type: "input", answers: ["There was a little paint.", "There was a little paint", "There was a little.", "There was a little"], explanation: "Only a small amount of paint is shown, so answer There was a little paint." }
      ]},
      { id: "K3", type: "paired", points: 2, prompt: "3. many / pencils / How / there / were", image: A + "page4-img4-478x342.png", parts: [
        { key: "question", label: "Question", type: "input", answers: ["How many pencils were there?", "How many pencils were there"], explanation: "Pencils are countable, so ask How many pencils were there?" },
        { key: "answer", label: "Answer", type: "input", answers: ["There were a few pencils.", "There were a few pencils", "There were a few.", "There were a few"], explanation: "The picture shows a small number of pencils, so answer There were a few pencils." }
      ]},
      { id: "K4", type: "paired", points: 2, prompt: "4. How / there / much / paper / was", image: A + "page4-img5-478x342.png", parts: [
        { key: "question", label: "Question", type: "input", answers: ["How much paper was there?", "How much paper was there"], explanation: "Paper is uncountable here, so ask How much paper was there?" },
        { key: "answer", label: "Answer", type: "input", answers: ["There was a lot of paper.", "There was a lot of paper", "There was a lot.", "There was a lot"], explanation: "The picture shows a large amount of paper, so answer There was a lot of paper." }
      ]}
    ]
  }
];
