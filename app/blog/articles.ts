// Full text of each blog article, keyed by slug (see BLOG_POSTS in data.ts).

export type ArticleBlock =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

export const ARTICLE_BODIES: Record<string, ArticleBlock[]> = {
  "knee-osteoarthritis-early-signs": [
    {
      type: "p",
      text: "Osteoarthritis is a condition in which the cartilage that cushions the ends of the bones in a joint slowly wears down. The knee is one of the joints it affects most often, and the changes usually build up over years rather than appearing overnight.",
    },
    { type: "h2", text: "Early signs to look out for" },
    {
      type: "ul",
      items: [
        "Stiffness in the morning or after sitting for a while, which eases as you move",
        "Pain when climbing stairs, squatting or getting up from a low chair",
        "Swelling around the knee after a long walk or a busy day",
        "A grinding or crackling feeling when the knee bends",
        "Pain that is worse at the end of the day",
      ],
    },
    { type: "h2", text: "What you can do at home" },
    {
      type: "p",
      text: "Gentle, regular activity helps keep the joint moving and the muscles around it strong. Walking on level ground, cycling and simple strengthening exercises are often suggested. Keeping a healthy weight reduces the load on the knees, and short periods of rest help when the joint is sore.",
    },
    {
      type: "p",
      text: "Avoid starting new pain medicines without advice, especially if you have other health conditions or take regular medication.",
    },
    { type: "h2", text: "When to see an orthopaedic specialist" },
    {
      type: "ul",
      items: [
        "Pain or stiffness that keeps coming back or limits your daily routine",
        "Swelling that does not settle with rest",
        "The knee giving way, locking or feeling unstable",
        "Pain at night that disturbs your sleep",
      ],
    },
    {
      type: "p",
      text: "An orthopaedic doctor will examine the knee and may suggest an X-ray to see how the joint looks. Treatment is planned around your symptoms and daily needs, and can range from exercises and lifestyle changes to other options when these are not enough.",
    },
  ],

  "sciatica-or-back-pain": [
    {
      type: "p",
      text: "Back pain is very common, and most of the time it comes from the muscles and ligaments of the back. Sciatica is different: it happens when the sciatic nerve, which runs from the lower back down each leg, is irritated or pressed on.",
    },
    { type: "h2", text: "How sciatica feels" },
    {
      type: "ul",
      items: [
        "Pain that travels from the lower back or buttock down one leg",
        "Tingling, pins and needles or numbness in the leg or foot",
        "Pain that gets worse when sitting for long, coughing or sneezing",
        "Weakness in the leg or foot in some cases",
      ],
    },
    { type: "h2", text: "How ordinary back pain feels" },
    {
      type: "p",
      text: "Muscular back pain usually stays in the back itself. It may feel like an ache or stiffness, often after lifting, a long day at a desk or an awkward movement, and it tends to improve over days to weeks with gentle movement.",
    },
    { type: "h2", text: "Common causes of sciatica" },
    {
      type: "p",
      text: "A slipped (herniated) disc pressing on a nerve root is a frequent cause. Narrowing of the spaces in the spine and changes in the spine with age can also irritate the nerve.",
    },
    { type: "h2", text: "When to see a spine specialist" },
    {
      type: "ul",
      items: [
        "Leg pain that does not improve or keeps returning",
        "Numbness or weakness that is getting worse",
        "Pain that stops you from walking, working or sleeping",
      ],
    },
    {
      type: "p",
      text: "Seek emergency care straight away if back pain comes with loss of bladder or bowel control, or numbness around the groin or inner thighs.",
    },
  ],

  "first-antenatal-visit": [
    {
      type: "p",
      text: "Your first antenatal visit is the start of regular care through your pregnancy. It is a chance for your doctor to understand your health and for you to ask any questions you have.",
    },
    { type: "h2", text: "What usually happens" },
    {
      type: "ul",
      items: [
        "A conversation about your health, previous pregnancies and family history",
        "Checks such as blood pressure and weight",
        "Routine blood and urine tests",
        "An ultrasound scan, when your doctor advises it",
        "A plan for upcoming visits and tests",
      ],
    },
    { type: "h2", text: "What to bring" },
    {
      type: "ul",
      items: [
        "Any previous medical reports and test results",
        "A list of medicines and supplements you take",
        "Details of the first day of your last period",
        "Your questions, written down so you do not forget them",
      ],
    },
    { type: "h2", text: "Questions you may want to ask" },
    {
      type: "p",
      text: "You might ask about diet, safe exercise, which supplements to take, warning signs to watch for and how often you will need check-ups. No question is too small.",
    },
    { type: "h2", text: "When to call your doctor" },
    {
      type: "p",
      text: "Contact your doctor promptly if you have bleeding, severe pain in the abdomen, a severe headache, blurred vision, high fever or reduced movement of the baby later in pregnancy.",
    },
  ],

  "inguinal-hernia-symptoms-treatment": [
    {
      type: "p",
      text: "An inguinal hernia happens when tissue pushes through a weak spot in the muscles of the groin. It is one of the most common types of hernia.",
    },
    { type: "h2", text: "Symptoms" },
    {
      type: "ul",
      items: [
        "A bulge in the groin that may grow when you cough, strain or stand",
        "A bulge that goes back in when you lie down",
        "Discomfort, heaviness or aching in the groin",
        "Pain when lifting or bending",
      ],
    },
    { type: "h2", text: "Why waiting can be a risk" },
    {
      type: "p",
      text: "A hernia does not heal on its own and may get bigger over time. Rarely, part of the bowel can become trapped, which needs emergency care.",
    },
    {
      type: "p",
      text: "Go to emergency care straight away if the bulge becomes hard, very painful or cannot be pushed back, or if you have vomiting or cannot pass gas.",
    },
    { type: "h2", text: "Treatment options" },
    {
      type: "p",
      text: "Hernias are repaired with surgery. Many can be repaired laparoscopically, through small cuts, which often means a shorter hospital stay. Your surgeon will advise the right approach after examining you.",
    },
  ],

  "gallstones-symptoms-surgery": [
    {
      type: "p",
      text: "Gallstones are hard deposits that form in the gallbladder, a small organ under the liver that stores bile. Many people have gallstones without any symptoms.",
    },
    { type: "h2", text: "Common symptoms" },
    {
      type: "ul",
      items: [
        "Pain in the upper right or middle of the abdomen, often after a fatty meal",
        "Pain that spreads to the back or right shoulder",
        "Nausea or vomiting",
        "Bloating and indigestion",
      ],
    },
    { type: "h2", text: "How gallstones are diagnosed" },
    {
      type: "p",
      text: "An ultrasound of the abdomen is the usual first test. Blood tests may be done to check the liver and look for infection.",
    },
    { type: "h2", text: "When surgery is recommended" },
    {
      type: "p",
      text: "Surgery to remove the gallbladder is usually advised when gallstones cause repeated pain or complications. It is commonly done laparoscopically. People can live normally without a gallbladder.",
    },
    { type: "h2", text: "When to seek urgent care" },
    {
      type: "p",
      text: "Seek medical help quickly for severe pain that does not settle, high fever with chills, or yellowing of the skin or eyes.",
    },
  ],

  "kidney-stones-warning-signs": [
    {
      type: "p",
      text: "Kidney stones are hard deposits of minerals and salts that form inside the kidneys. Small stones may pass on their own, while larger ones can block the flow of urine.",
    },
    { type: "h2", text: "Warning signs" },
    {
      type: "ul",
      items: [
        "Sudden, severe pain in the side or back, below the ribs",
        "Pain that spreads to the lower abdomen or groin",
        "Blood in the urine, or pink or brown urine",
        "Burning while passing urine, or needing to go more often",
        "Nausea or vomiting",
      ],
    },
    { type: "h2", text: "Everyday prevention tips" },
    {
      type: "ul",
      items: [
        "Drink enough water through the day, especially in hot weather",
        "Limit salt and very salty processed foods",
        "Eat a balanced diet, and ask your doctor before cutting out foods",
        "Follow any specific diet advice given after a stone test",
      ],
    },
    { type: "h2", text: "When to see a urologist" },
    {
      type: "p",
      text: "See a doctor if you have repeated stones or blood in the urine. Seek urgent care for severe pain, fever with chills, or if you cannot pass urine.",
    },
  ],

  "cough-lasting-two-weeks-tb": [
    {
      type: "p",
      text: "Most coughs clear up on their own. A cough that lasts more than two weeks should be checked by a doctor, as it can have several causes, including tuberculosis (TB).",
    },
    { type: "h2", text: "Symptoms that need checking" },
    {
      type: "ul",
      items: [
        "A cough lasting more than two weeks",
        "Fever, especially in the evening",
        "Night sweats",
        "Weight loss or loss of appetite",
        "Coughing up blood",
      ],
    },
    { type: "h2", text: "How TB is tested for" },
    {
      type: "p",
      text: "Your doctor may ask for a sputum test and a chest X-ray, along with other tests depending on your symptoms.",
    },
    { type: "h2", text: "Why completing treatment matters" },
    {
      type: "p",
      text: "TB can be treated with a course of medicines that lasts several months. Taking every dose for the full course, even after you feel better, helps cure the infection and prevents it from becoming harder to treat.",
    },
    {
      type: "p",
      text: "If you have been in close contact with someone who has TB, tell your doctor.",
    },
  ],

  "chest-pain-emergency-signs": [
    {
      type: "p",
      text: "Chest pain has many causes, from muscle strain and acidity to problems with the heart or lungs. Some signs mean you should get emergency help without waiting.",
    },
    { type: "h2", text: "Call for emergency help if you have" },
    {
      type: "ul",
      items: [
        "Pressure, tightness or heaviness in the chest",
        "Pain spreading to the arm, jaw, neck or back",
        "Breathlessness, sweating, nausea or dizziness with the pain",
        "Chest pain that comes on with exertion and does not settle with rest",
      ],
    },
    { type: "h2", text: "What to do" },
    {
      type: "p",
      text: "Call emergency services or get to the nearest emergency department straight away. Do not drive yourself, and do not wait to see if the pain passes.",
    },
    { type: "h2", text: "Other causes of chest pain" },
    {
      type: "p",
      text: "Acidity, muscle strain and anxiety can also cause chest pain. Only a doctor can tell the difference, so it is always safer to get checked.",
    },
  ],

  "headache-red-flags": [
    {
      type: "p",
      text: "Most headaches are not serious and ease with rest, fluids or simple remedies. A few warning signs, however, need urgent medical assessment.",
    },
    { type: "h2", text: "Red-flag symptoms" },
    {
      type: "ul",
      items: [
        "A sudden, severe headache, often described as the worst ever",
        "Headache with weakness, numbness or trouble speaking",
        "Headache with confusion, fainting or a seizure",
        "Headache after a head injury",
        "Headache with fever and a stiff neck",
      ],
    },
    {
      type: "p",
      text: "If you have any of these, seek emergency care straight away.",
    },
    { type: "h2", text: "When to see a specialist" },
    {
      type: "p",
      text: "See a doctor if your headaches are new and keep coming back, are getting more frequent or more severe, or wake you from sleep.",
    },
  ],

  "recurring-sinus-problems": [
    {
      type: "p",
      text: "The sinuses are air-filled spaces around the nose. When their lining swells, mucus cannot drain easily, which causes blockage, pressure and infections.",
    },
    { type: "h2", text: "Common symptoms" },
    {
      type: "ul",
      items: [
        "A blocked or runny nose",
        "Pressure or pain around the eyes, cheeks or forehead",
        "Reduced sense of smell",
        "Mucus running down the back of the throat",
      ],
    },
    { type: "h2", text: "Common causes" },
    {
      type: "ul",
      items: [
        "Allergies",
        "Repeated colds and infections",
        "A deviated nasal septum",
        "Nasal polyps",
      ],
    },
    { type: "h2", text: "When to see an ENT specialist" },
    {
      type: "p",
      text: "See an ENT doctor if symptoms last for weeks, keep coming back, or come with swelling around the eyes or a high fever.",
    },
  ],

  "screen-time-eye-strain": [
    {
      type: "p",
      text: "Long hours at screens can leave your eyes tired, dry and uncomfortable. This is common and usually improves with a few changes to how you work.",
    },
    { type: "h2", text: "Simple habits that help" },
    {
      type: "ul",
      items: [
        "Follow the 20-20-20 rule: every 20 minutes, look at something about 20 feet away for 20 seconds",
        "Keep the screen about an arm's length away and slightly below eye level",
        "Adjust brightness to match the room and reduce glare",
        "Blink often, and take regular breaks",
      ],
    },
    { type: "h2", text: "When to get your eyes checked" },
    {
      type: "p",
      text: "Book an eye examination if you have blurred vision, frequent headaches, eye pain or redness, or if your symptoms do not improve.",
    },
  ],

  "wisdom-tooth-pain": [
    {
      type: "p",
      text: "Wisdom teeth are the last teeth to come through, usually in the late teens or twenties. When there is not enough space, they can come in crooked or only partly.",
    },
    { type: "h2", text: "Signs of a problem" },
    {
      type: "ul",
      items: [
        "Pain or swelling at the back of the jaw",
        "Swollen or bleeding gums around the tooth",
        "Difficulty opening the mouth",
        "Bad taste or bad breath",
      ],
    },
    { type: "h2", text: "When extraction is needed" },
    {
      type: "p",
      text: "Your dentist will examine the tooth and may take an X-ray. Removal may be advised if the tooth causes repeated infection, damages nearby teeth or cannot come through properly.",
    },
    { type: "h2", text: "Recovery" },
    {
      type: "p",
      text: "Some swelling and discomfort for a few days is normal. Follow your dentist's advice on eating, cleaning your mouth and medicines, and contact them if pain or swelling gets worse.",
    },
  ],
};
