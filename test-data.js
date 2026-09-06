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
    "key": "A",
    "label": "A",
    "title": "Circle the correct words.",
    "note": "Choose the word that completes each sentence correctly.",
    "points": 6,
    "questions": [
      {
        "id": "A1",
        "type": "choice",
        "prompt": "1. I'm ___ years old.",
        "options": [
          "eight",
          "ate"
        ],
        "answers": [
          "eight"
        ],
        "explanation": "Câu nói về tuổi nên cần số eight (8). Ate là dạng quá khứ của động từ eat.",
        "image": "",
        "points": 1
      },
      {
        "id": "A2",
        "type": "choice",
        "prompt": "2. I ___ the race!",
        "options": [
          "one",
          "won"
        ],
        "answers": [
          "won"
        ],
        "explanation": "Won là dạng quá khứ của win, nghĩa là đã thắng cuộc đua. One là số 1.",
        "image": "",
        "points": 1
      },
      {
        "id": "A3",
        "type": "choice",
        "prompt": "3. I got the answer ___.",
        "options": [
          "write",
          "right"
        ],
        "answers": [
          "right"
        ],
        "explanation": "Right ở đây nghĩa là đúng. Write là động từ viết.",
        "image": "",
        "points": 1
      },
      {
        "id": "A4",
        "type": "choice",
        "prompt": "4. The car is on the ___.",
        "options": [
          "road",
          "rode"
        ],
        "answers": [
          "road"
        ],
        "explanation": "Road là con đường, nơi ô tô di chuyển. Rode là dạng quá khứ của ride.",
        "image": "",
        "points": 1
      },
      {
        "id": "A5",
        "type": "choice",
        "prompt": "5. There are ___ pizzas.",
        "options": [
          "two",
          "too"
        ],
        "answers": [
          "two"
        ],
        "explanation": "Trước danh từ số nhiều pizzas cần số đếm two (2). Too nghĩa là cũng hoặc quá mức.",
        "image": "",
        "points": 1
      },
      {
        "id": "A6",
        "type": "choice",
        "prompt": "6. A ___ flew near me.",
        "options": [
          "be",
          "bee"
        ],
        "answers": [
          "bee"
        ],
        "explanation": "Sau mạo từ a và trước động từ flew cần danh từ bee, nghĩa là con ong. Be là động từ.",
        "image": "",
        "points": 1
      }
    ]
  },
  {
    "key": "B",
    "label": "B",
    "title": "Look and complete the words.",
    "note": "Use the picture and the letters already given.",
    "points": 3,
    "questions": [
      {
        "id": "B1",
        "type": "input",
        "prompt": "1. _ _ t _ e r _",
        "answers": [
          "pattern"
        ],
        "explanation": "Các đường và chấm lặp lại tạo thành một pattern, nghĩa là họa tiết hoặc quy luật lặp lại.",
        "image": "assets/images/page1-img2-318x240.png",
        "points": 1
      },
      {
        "id": "B2",
        "type": "input",
        "prompt": "2. s _ i _ _ l",
        "answers": [
          "spiral"
        ],
        "explanation": "Spiral là đường xoắn ốc, cong vòng quanh một tâm.",
        "image": "assets/images/page1-img3-273x237.png",
        "points": 1
      },
      {
        "id": "B3",
        "type": "input",
        "prompt": "3. _ _ e s _ _ n t",
        "answers": [
          "crescent"
        ],
        "explanation": "Crescent là hình lưỡi liềm, cong giống một vầng trăng mỏng.",
        "image": "assets/images/b3-crescent.png",
        "points": 1
      }
    ]
  },
  {
    "key": "C",
    "label": "C",
    "title": "Listen and check the correct picture. Write the word.",
    "note": "The letters a and b are the original picture labels. Listen, choose the picture, and type the word.",
    "points": 4,
    "audio": "assets/audio/Listening-C.mp3",
    "questions": [
      {
        "id": "C1",
        "type": "pictureWord",
        "points": 2,
        "prompt": "1.",
        "pictures": [
          {
            "value": "a",
            "image": "assets/images/page1-img5-87x189.png"
          },
          {
            "value": "b",
            "image": "assets/images/c1-picture-b.png"
          }
        ],
        "parts": [
          {
            "key": "picture",
            "label": "Nhãn hình",
            "type": "pictureChoice",
            "answers": [
              "a"
            ],
            "explanation": "Theo audio và đáp án gốc, con chọn hình a."
          },
          {
            "key": "word",
            "label": "Từ nghe được",
            "type": "input",
            "answers": [
              "sculpture"
            ],
            "explanation": "Sculpture là tác phẩm điêu khắc có hình khối ba chiều, giống bức tượng ở hình a."
          }
        ]
      },
      {
        "id": "C2",
        "type": "pictureWord",
        "points": 2,
        "prompt": "2.",
        "pictures": [
          {
            "value": "a",
            "image": "assets/images/page1-img6-174x192.png"
          },
          {
            "value": "b",
            "image": "assets/images/c2-picture-b.png"
          }
        ],
        "parts": [
          {
            "key": "picture",
            "label": "Nhãn hình",
            "type": "pictureChoice",
            "answers": [
              "b"
            ],
            "explanation": "Theo audio và đáp án gốc, con chọn hình b."
          },
          {
            "key": "word",
            "label": "Từ nghe được",
            "type": "input",
            "answers": [
              "origami"
            ],
            "explanation": "Origami là nghệ thuật gấp giấy thành các hình khác nhau."
          }
        ]
      }
    ]
  },
  {
    "key": "D",
    "label": "D",
    "title": "Complete the sentences.",
    "note": "Use There's, There isn't, There are, or There aren't.",
    "points": 5,
    "questions": [
      {
        "id": "D1",
        "type": "input",
        "prompt": "1. ___ a lot of crackers.",
        "answers": [
          "There are"
        ],
        "explanation": "Crackers là danh từ đếm được số nhiều nên dùng There are.",
        "image": "",
        "points": 1
      },
      {
        "id": "D2",
        "type": "input",
        "prompt": "2. ___ any paint.",
        "answers": [
          "There isn't",
          "There is not"
        ],
        "explanation": "Paint là danh từ không đếm được. Câu phủ định dùng There isn't any paint.",
        "image": "",
        "points": 1
      },
      {
        "id": "D3",
        "type": "input",
        "prompt": "3. ___ any markers.",
        "answers": [
          "There aren't",
          "There are not"
        ],
        "explanation": "Markers là danh từ số nhiều. Câu phủ định dùng There aren't any markers.",
        "image": "",
        "points": 1
      },
      {
        "id": "D4",
        "type": "input",
        "prompt": "4. ___ some juice.",
        "answers": [
          "There is",
          "There's"
        ],
        "explanation": "Juice là danh từ không đếm được nên dùng There is hoặc dạng viết tắt There's.",
        "image": "",
        "points": 1
      },
      {
        "id": "D5",
        "type": "input",
        "prompt": "5. ___ a lot of water.",
        "answers": [
          "There is",
          "There's"
        ],
        "explanation": "Water là danh từ không đếm được nên dùng There is hoặc There's.",
        "image": "",
        "points": 1
      }
    ]
  },
  {
    "key": "E",
    "label": "E",
    "title": "Look and complete the sentences.",
    "note": "Use a lot of, a few, or a little.",
    "points": 4,
    "questions": [
      {
        "id": "E1",
        "type": "input",
        "prompt": "1. There are ___ cookies.",
        "answers": [
          "a lot of"
        ],
        "explanation": "Cookies đếm được và hình cho thấy nhiều bánh, nên dùng a lot of.",
        "image": "assets/images/page2-img1-343x182.png",
        "points": 1
      },
      {
        "id": "E2",
        "type": "input",
        "prompt": "2. There are ___ crackers.",
        "answers": [
          "a few"
        ],
        "explanation": "Crackers đếm được nhưng hình chỉ còn một số ít, nên dùng a few.",
        "image": "assets/images/page2-img3-380x109.png",
        "points": 1
      },
      {
        "id": "E3",
        "type": "input",
        "prompt": "3. There is ___ juice.",
        "answers": [
          "a little"
        ],
        "explanation": "Juice không đếm được và hình chỉ còn một lượng nhỏ, nên dùng a little.",
        "image": "assets/images/page2-img2-202x177.png",
        "points": 1
      },
      {
        "id": "E4",
        "type": "input",
        "prompt": "4. There is ___ water.",
        "answers": [
          "a lot of"
        ],
        "explanation": "Water không đếm được và bình có một lượng nước lớn, nên dùng a lot of.",
        "image": "assets/images/e4-water-clean.png",
        "points": 1
      }
    ]
  },
  {
    "key": "F",
    "label": "F",
    "title": "Look and answer the questions.",
    "note": "Write a complete short answer.",
    "points": 3,
    "questions": [
      {
        "id": "F1",
        "type": "input",
        "prompt": "1. Are there a lot of oranges?",
        "answers": [
          "Yes, there are.",
          "Yes, there are"
        ],
        "explanation": "Trong bát có nhiều quả cam nên trả lời Yes, there are.",
        "image": "assets/images/page2-img5-357x179.png",
        "points": 1
      },
      {
        "id": "F2",
        "type": "input",
        "prompt": "2. Are there any more cookies?",
        "answers": [
          "No, there aren't.",
          "No, there aren't",
          "No there aren't.",
          "No there aren't",
          "No, there are not.",
          "No, there are not"
        ],
        "explanation": "Đĩa đã hết bánh nên trả lời No, there aren't.",
        "image": "assets/images/page2-img4-363x104.png",
        "points": 1
      },
      {
        "id": "F3",
        "type": "input",
        "prompt": "3. Is there some spaghetti?",
        "answers": [
          "Yes, there is.",
          "Yes, there is",
          "Yes there is.",
          "Yes there is"
        ],
        "explanation": "Hình có mì spaghetti nên trả lời Yes, there is.",
        "image": "assets/images/page2-img6-347x156.png",
        "points": 1
      }
    ]
  },
  {
    "key": "G",
    "label": "G",
    "title": "Listen and circle the correct words.",
    "note": "Play the audio and choose the word you hear.",
    "points": 4,
    "audio": "assets/audio/Listening-G.mp3",
    "questions": [
      {
        "id": "G1",
        "type": "choice",
        "prompt": "1. I have a ___ coin.",
        "options": [
          "shiny",
          "golden"
        ],
        "answers": [
          "shiny"
        ],
        "explanation": "Trong audio, con nghe thấy cụm shiny coin, nghĩa là đồng xu sáng bóng.",
        "image": "",
        "points": 1
      },
      {
        "id": "G2",
        "type": "choice",
        "prompt": "2. Please ___ the paper.",
        "options": [
          "crumple",
          "fold"
        ],
        "answers": [
          "fold"
        ],
        "explanation": "Trong audio, con nghe thấy fold the paper, nghĩa là gấp tờ giấy.",
        "image": "",
        "points": 1
      },
      {
        "id": "G3",
        "type": "choice",
        "prompt": "3. The book is on the ___ of the couch.",
        "options": [
          "edge",
          "end"
        ],
        "answers": [
          "edge"
        ],
        "explanation": "Audio nói on the edge of the couch, nghĩa là ở mép ghế sofa.",
        "image": "",
        "points": 1
      },
      {
        "id": "G4",
        "type": "choice",
        "prompt": "4. How high can he ___?",
        "options": [
          "climb",
          "fly"
        ],
        "answers": [
          "climb"
        ],
        "explanation": "Audio hỏi cậu ấy có thể trèo cao đến đâu, nên chọn climb.",
        "image": "",
        "points": 1
      }
    ]
  },
  {
    "key": "H",
    "label": "H",
    "title": "Look and write the words.",
    "note": "Name each art material shown in the original numbered picture.",
    "points": 6,
    "questions": [
      {
        "id": "H1",
        "type": "input",
        "prompt": "1.",
        "answers": [
          "markers"
        ],
        "explanation": "Hình cho thấy các bút màu markers.",
        "image": "assets/images/h1.png",
        "points": 1
      },
      {
        "id": "H2",
        "type": "input",
        "prompt": "2.",
        "answers": [
          "scissors"
        ],
        "explanation": "Hình cho thấy một chiếc kéo, tiếng Anh là scissors.",
        "image": "assets/images/h2.png",
        "points": 1
      },
      {
        "id": "H3",
        "type": "input",
        "prompt": "3.",
        "answers": [
          "glue"
        ],
        "explanation": "Hình cho thấy một lọ keo dán, tiếng Anh là glue.",
        "image": "assets/images/h3.png",
        "points": 1
      },
      {
        "id": "H4",
        "type": "input",
        "prompt": "4.",
        "answers": [
          "chalk"
        ],
        "explanation": "Hình cho thấy một hộp phấn, tiếng Anh là chalk.",
        "image": "assets/images/h4.png",
        "points": 1
      },
      {
        "id": "H5",
        "type": "input",
        "prompt": "5.",
        "answers": [
          "colored pencils",
          "coloured pencils"
        ],
        "explanation": "Hình cho thấy các bút chì màu: colored pencils (Mỹ) hoặc coloured pencils (Anh).",
        "image": "assets/images/h5.png",
        "points": 1
      },
      {
        "id": "H6",
        "type": "input",
        "prompt": "6.",
        "answers": [
          "watercolors",
          "water colours",
          "watercolors",
          "watercolours"
        ],
        "explanation": "Hình cho thấy một bộ màu nước, có thể viết watercolors hoặc watercolours.",
        "image": "assets/images/h6.png",
        "points": 1
      }
    ]
  },
  {
    "key": "I",
    "label": "I",
    "title": "Look at the pictures. Look at the letters. Write the words.",
    "note": "Unscramble the letters to name each picture.",
    "points": 2,
    "questions": [
      {
        "id": "I1",
        "type": "input",
        "prompt": "1. a r n e c",
        "answers": [
          "crane"
        ],
        "explanation": "Sắp xếp lại các chữ a-r-n-e-c được crane, nghĩa là cần cẩu.",
        "image": "assets/images/page3-img2-600x300.png",
        "points": 1
      },
      {
        "id": "I2",
        "type": "input",
        "prompt": "2. v e a w s",
        "answers": [
          "waves"
        ],
        "explanation": "Sắp xếp lại các chữ v-e-a-w-s được waves, nghĩa là những con sóng.",
        "image": "assets/images/page3-img3-600x300.png",
        "points": 1
      }
    ]
  },
  {
    "key": "J",
    "label": "J",
    "title": "Circle the correct words.",
    "note": "Choose the form that makes each sentence grammatically correct.",
    "points": 5,
    "questions": [
      {
        "id": "J1",
        "type": "choice",
        "prompt": "1. There was ___ juice.",
        "options": [
          "a little",
          "a few"
        ],
        "answers": [
          "a little"
        ],
        "explanation": "Juice không đếm được nên dùng a little.",
        "image": "",
        "points": 1
      },
      {
        "id": "J2",
        "type": "choice",
        "prompt": "2. There were ___ of carrots.",
        "options": [
          "a little",
          "a lot"
        ],
        "answers": [
          "a lot"
        ],
        "explanation": "Carrots đếm được và ở số nhiều nên cụm a lot of carrots là đúng.",
        "image": "",
        "points": 1
      },
      {
        "id": "J3",
        "type": "choice",
        "prompt": "3. ___ ten bottles of milk.",
        "options": [
          "There were",
          "There was"
        ],
        "answers": [
          "There were"
        ],
        "explanation": "Ten bottles là danh từ số nhiều nên dùng There were.",
        "image": "",
        "points": 1
      },
      {
        "id": "J4",
        "type": "choice",
        "prompt": "4. ___ any chicken?",
        "options": [
          "Were there",
          "Was there"
        ],
        "answers": [
          "Was there"
        ],
        "explanation": "Chicken ở đây là thức ăn không đếm được nên dùng Was there.",
        "image": "",
        "points": 1
      },
      {
        "id": "J5",
        "type": "choice",
        "prompt": "5. ___ plates were there?",
        "options": [
          "How many",
          "How much"
        ],
        "answers": [
          "How many"
        ],
        "explanation": "Plates là danh từ đếm được số nhiều nên hỏi How many.",
        "image": "",
        "points": 1
      }
    ]
  },
  {
    "key": "K",
    "label": "K",
    "title": "Write the questions. Look at the pictures and answer the questions.",
    "note": "Use a lot, a little, or a few in each answer.",
    "points": 8,
    "questions": [
      {
        "id": "K1",
        "type": "paired",
        "points": 2,
        "prompt": "1. markers / How / there / were / many",
        "image": "assets/images/page4-img2-476x340.png",
        "parts": [
          {
            "key": "question",
            "label": "Câu hỏi",
            "type": "input",
            "answers": [
              "How many markers were there?",
              "How many markers were there"
            ],
            "explanation": "Markers đếm được nên dùng How many: How many markers were there?"
          },
          {
            "key": "answer",
            "label": "Câu trả lời",
            "type": "input",
            "answers": [
              "There were a lot of markers.",
              "There were a lot of markers",
              "There were a lot.",
              "There were a lot"
            ],
            "explanation": "Hình cho thấy nhiều bút màu nên trả lời There were a lot of markers."
          }
        ]
      },
      {
        "id": "K2",
        "type": "paired",
        "points": 2,
        "prompt": "2. paint / was / there / much / How",
        "image": "assets/images/page4-img3-478x342.png",
        "parts": [
          {
            "key": "question",
            "label": "Câu hỏi",
            "type": "input",
            "answers": [
              "How much paint was there?",
              "How much paint was there"
            ],
            "explanation": "Paint không đếm được nên dùng How much: How much paint was there?"
          },
          {
            "key": "answer",
            "label": "Câu trả lời",
            "type": "input",
            "answers": [
              "There was a little paint.",
              "There was a little paint",
              "There was a little.",
              "There was a little"
            ],
            "explanation": "Hình chỉ có một lượng sơn nhỏ nên trả lời There was a little paint."
          }
        ]
      },
      {
        "id": "K3",
        "type": "paired",
        "points": 2,
        "prompt": "3. many / pencils / How / there / were",
        "image": "assets/images/page4-img4-478x342.png",
        "parts": [
          {
            "key": "question",
            "label": "Câu hỏi",
            "type": "input",
            "answers": [
              "How many pencils were there?",
              "How many pencils were there"
            ],
            "explanation": "Pencils đếm được nên dùng How many: How many pencils were there?"
          },
          {
            "key": "answer",
            "label": "Câu trả lời",
            "type": "input",
            "answers": [
              "There were a few pencils.",
              "There were a few pencils",
              "There were a few.",
              "There were a few"
            ],
            "explanation": "Hình chỉ có một số ít bút chì nên trả lời There were a few pencils."
          }
        ]
      },
      {
        "id": "K4",
        "type": "paired",
        "points": 2,
        "prompt": "4. How / there / much / paper / was",
        "image": "assets/images/page4-img5-478x342.png",
        "parts": [
          {
            "key": "question",
            "label": "Câu hỏi",
            "type": "input",
            "answers": [
              "How much paper was there?",
              "How much paper was there"
            ],
            "explanation": "Paper ở đây không đếm được nên dùng How much: How much paper was there?"
          },
          {
            "key": "answer",
            "label": "Câu trả lời",
            "type": "input",
            "answers": [
              "There was a lot of paper.",
              "There was a lot of paper",
              "There was a lot.",
              "There was a lot"
            ],
            "explanation": "Hình cho thấy một lượng giấy lớn nên trả lời There was a lot of paper."
          }
        ]
      }
    ]
  }
];
