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
      choice("A1", "1. I'm ___ years old.", ["eight", "ate"], "eight", "Câu nói về tuổi nên cần số eight (8). Ate là dạng quá khứ của động từ eat."),
      choice("A2", "2. I ___ the race!", ["one", "won"], "won", "Won là dạng quá khứ của win, nghĩa là đã thắng cuộc đua. One là số 1."),
      choice("A3", "3. I got the answer ___.", ["write", "right"], "right", "Right ở đây nghĩa là đúng. Write là động từ viết."),
      choice("A4", "4. The car is on the ___.", ["road", "rode"], "road", "Road là con đường, nơi ô tô di chuyển. Rode là dạng quá khứ của ride."),
      choice("A5", "5. There are ___ pizzas.", ["two", "too"], "two", "Trước danh từ số nhiều pizzas cần số đếm two (2). Too nghĩa là cũng hoặc quá mức."),
      choice("A6", "6. A ___ flew near me.", ["be", "bee"], "bee", "Sau mạo từ a và trước động từ flew cần danh từ bee, nghĩa là con ong. Be là động từ.")
    ]
  },
  {
    key: "B", label: "B", title: "Look and complete the words.",
    note: "Use the picture and the letters already given.", points: 3,
    questions: [
      input("B1", "1. _ _ t _ e r _", ["pattern"], "Các đường và chấm lặp lại tạo thành một pattern, nghĩa là họa tiết hoặc quy luật lặp lại.", A + "page1-img2-318x240.png"),
      input("B2", "2. s _ i _ _ l", ["spiral"], "Spiral là đường xoắn ốc, cong vòng quanh một tâm.", A + "page1-img3-273x237.png"),
      input("B3", "3. _ _ e s _ _ n t", ["crescent"], "Crescent là hình lưỡi liềm, cong giống một vầng trăng mỏng.", A + "b3-crescent.png")
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
        { key: "picture", label: "Nhãn hình", type: "pictureChoice", answers: ["a"], explanation: "Theo audio và đáp án gốc, con chọn hình a." },
        { key: "word", label: "Từ nghe được", type: "input", answers: ["sculpture"], explanation: "Sculpture là tác phẩm điêu khắc có hình khối ba chiều, giống bức tượng ở hình a." }
      ]},
      { id: "C2", type: "pictureWord", points: 2, prompt: "2.", pictures: [
        { value: "a", image: A + "page1-img6-174x192.png" }, { value: "b", image: A + "c2-picture-b.png" }
      ], parts: [
        { key: "picture", label: "Nhãn hình", type: "pictureChoice", answers: ["b"], explanation: "Theo audio và đáp án gốc, con chọn hình b." },
        { key: "word", label: "Từ nghe được", type: "input", answers: ["origami"], explanation: "Origami là nghệ thuật gấp giấy thành các hình khác nhau." }
      ]}
    ]
  },
  {
    key: "D", label: "D", title: "Complete the sentences.",
    note: "Use There's, There isn't, There are, or There aren't.", points: 5,
    questions: [
      input("D1", "1. ___ a lot of crackers.", ["There are"], "Crackers là danh từ đếm được số nhiều nên dùng There are."),
      input("D2", "2. ___ any paint.", ["There isn't", "There is not"], "Paint là danh từ không đếm được. Câu phủ định dùng There isn't any paint."),
      input("D3", "3. ___ any markers.", ["There aren't", "There are not"], "Markers là danh từ số nhiều. Câu phủ định dùng There aren't any markers."),
      input("D4", "4. ___ some juice.", ["There is", "There's"], "Juice là danh từ không đếm được nên dùng There is hoặc dạng viết tắt There's."),
      input("D5", "5. ___ a lot of water.", ["There is", "There's"], "Water là danh từ không đếm được nên dùng There is hoặc There's.")
    ]
  },
  {
    key: "E", label: "E", title: "Look and complete the sentences.",
    note: "Use a lot of, a few, or a little.", points: 4,
    questions: [
      input("E1", "1. There are ___ cookies.", ["a lot of"], "Cookies đếm được và hình cho thấy nhiều bánh, nên dùng a lot of.", A + "page2-img1-343x182.png"),
      input("E2", "2. There are ___ crackers.", ["a few"], "Crackers đếm được nhưng hình chỉ còn một số ít, nên dùng a few.", A + "page2-img3-380x109.png"),
      input("E3", "3. There is ___ juice.", ["a little"], "Juice không đếm được và hình chỉ còn một lượng nhỏ, nên dùng a little.", A + "page2-img2-202x177.png"),
      input("E4", "4. There is ___ water.", ["a lot of"], "Water không đếm được và bình có một lượng nước lớn, nên dùng a lot of.", A + "e4-water-clean.png")
    ]
  },
  {
    key: "F", label: "F", title: "Look and answer the questions.",
    note: "Write a complete short answer.", points: 3,
    questions: [
      input("F1", "1. Are there a lot of oranges?", ["Yes, there are.", "Yes, there are"], "Trong bát có nhiều quả cam nên trả lời Yes, there are.", A + "page2-img5-357x179.png"),
      input("F2", "2. Are there any more cookies?", ["No, there aren't.", "No, there aren't", "No there aren't.", "No there aren't", "No, there are not.", "No, there are not"], "Đĩa đã hết bánh nên trả lời No, there aren't.", A + "page2-img4-363x104.png"),
      input("F3", "3. Is there some spaghetti?", ["Yes, there is.", "Yes, there is", "Yes there is.", "Yes there is"], "Hình có mì spaghetti nên trả lời Yes, there is.", A + "page2-img6-347x156.png")
    ]
  },
  {
    key: "G", label: "G", title: "Listen and circle the correct words.",
    note: "Play the audio and choose the word you hear.", points: 4,
    audio: "assets/audio/Listening-G.mp3",
    questions: [
      choice("G1", "1. I have a ___ coin.", ["shiny", "golden"], "shiny", "Trong audio, con nghe thấy cụm shiny coin, nghĩa là đồng xu sáng bóng."),
      choice("G2", "2. Please ___ the paper.", ["crumple", "fold"], "fold", "Trong audio, con nghe thấy fold the paper, nghĩa là gấp tờ giấy."),
      choice("G3", "3. The book is on the ___ of the couch.", ["edge", "end"], "edge", "Audio nói on the edge of the couch, nghĩa là ở mép ghế sofa."),
      choice("G4", "4. How high can he ___?", ["climb", "fly"], "climb", "Audio hỏi cậu ấy có thể trèo cao đến đâu, nên chọn climb.")
    ]
  },
  {
    key: "H", label: "H", title: "Look and write the words.",
    note: "Name each art material shown in the original numbered picture.", points: 6,
    questions: [
      input("H1", "1.", ["markers"], "Hình cho thấy các bút màu markers.", A + "h1.png"),
      input("H2", "2.", ["scissors"], "Hình cho thấy một chiếc kéo, tiếng Anh là scissors.", A + "h2.png"),
      input("H3", "3.", ["glue"], "Hình cho thấy một lọ keo dán, tiếng Anh là glue.", A + "h3.png"),
      input("H4", "4.", ["chalk"], "Hình cho thấy một hộp phấn, tiếng Anh là chalk.", A + "h4.png"),
      input("H5", "5.", ["colored pencils", "coloured pencils"], "Hình cho thấy các bút chì màu: colored pencils (Mỹ) hoặc coloured pencils (Anh).", A + "h5.png"),
      input("H6", "6.", ["watercolors", "water colours", "watercolors", "watercolours"], "Hình cho thấy một bộ màu nước, có thể viết watercolors hoặc watercolours.", A + "h6.png")
    ]
  },
  {
    key: "I", label: "I", title: "Look at the pictures. Look at the letters. Write the words.",
    note: "Unscramble the letters to name each picture.", points: 2,
    questions: [
      input("I1", "1. a r n e c", ["crane"], "Sắp xếp lại các chữ a-r-n-e-c được crane, nghĩa là cần cẩu.", A + "page3-img2-600x300.png"),
      input("I2", "2. v e a w s", ["waves"], "Sắp xếp lại các chữ v-e-a-w-s được waves, nghĩa là những con sóng.", A + "page3-img3-600x300.png")
    ]
  },
  {
    key: "J", label: "J", title: "Circle the correct words.",
    note: "Choose the form that makes each sentence grammatically correct.", points: 5,
    questions: [
      choice("J1", "1. There was ___ juice.", ["a little", "a few"], "a little", "Juice không đếm được nên dùng a little."),
      choice("J2", "2. There were ___ of carrots.", ["a little", "a lot"], "a lot", "Carrots đếm được và ở số nhiều nên cụm a lot of carrots là đúng."),
      choice("J3", "3. ___ ten bottles of milk.", ["There were", "There was"], "There were", "Ten bottles là danh từ số nhiều nên dùng There were."),
      choice("J4", "4. ___ any chicken?", ["Were there", "Was there"], "Was there", "Chicken ở đây là thức ăn không đếm được nên dùng Was there."),
      choice("J5", "5. ___ plates were there?", ["How many", "How much"], "How many", "Plates là danh từ đếm được số nhiều nên hỏi How many.")
    ]
  },
  {
    key: "K", label: "K", title: "Write the questions. Look at the pictures and answer the questions.",
    note: "Use a lot, a little, or a few in each answer.", points: 8,
    questions: [
      { id: "K1", type: "paired", points: 2, prompt: "1. markers / How / there / were / many", image: A + "page4-img2-476x340.png", parts: [
        { key: "question", label: "Câu hỏi", type: "input", answers: ["How many markers were there?", "How many markers were there"], explanation: "Markers đếm được nên dùng How many: How many markers were there?" },
        { key: "answer", label: "Câu trả lời", type: "input", answers: ["There were a lot of markers.", "There were a lot of markers", "There were a lot.", "There were a lot"], explanation: "Hình cho thấy nhiều bút màu nên trả lời There were a lot of markers." }
      ]},
      { id: "K2", type: "paired", points: 2, prompt: "2. paint / was / there / much / How", image: A + "page4-img3-478x342.png", parts: [
        { key: "question", label: "Câu hỏi", type: "input", answers: ["How much paint was there?", "How much paint was there"], explanation: "Paint không đếm được nên dùng How much: How much paint was there?" },
        { key: "answer", label: "Câu trả lời", type: "input", answers: ["There was a little paint.", "There was a little paint", "There was a little.", "There was a little"], explanation: "Hình chỉ có một lượng sơn nhỏ nên trả lời There was a little paint." }
      ]},
      { id: "K3", type: "paired", points: 2, prompt: "3. many / pencils / How / there / were", image: A + "page4-img4-478x342.png", parts: [
        { key: "question", label: "Câu hỏi", type: "input", answers: ["How many pencils were there?", "How many pencils were there"], explanation: "Pencils đếm được nên dùng How many: How many pencils were there?" },
        { key: "answer", label: "Câu trả lời", type: "input", answers: ["There were a few pencils.", "There were a few pencils", "There were a few.", "There were a few"], explanation: "Hình chỉ có một số ít bút chì nên trả lời There were a few pencils." }
      ]},
      { id: "K4", type: "paired", points: 2, prompt: "4. How / there / much / paper / was", image: A + "page4-img5-478x342.png", parts: [
        { key: "question", label: "Câu hỏi", type: "input", answers: ["How much paper was there?", "How much paper was there"], explanation: "Paper ở đây không đếm được nên dùng How much: How much paper was there?" },
        { key: "answer", label: "Câu trả lời", type: "input", answers: ["There was a lot of paper.", "There was a lot of paper", "There was a lot.", "There was a lot"], explanation: "Hình cho thấy một lượng giấy lớn nên trả lời There was a lot of paper." }
      ]}
    ]
  }
];
