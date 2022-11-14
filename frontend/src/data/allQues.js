const data = [
  {
    id: 1,
    question: 'What is the chief end of man?',
    answer: "Man's chief end is to glorify God, and to enjoy him forever.",
    topic: 'God the Creator',
    proofText: ['I Cor. 10:31', 'Rom. 11:36', 'Ps. 73:25-28'],
  },
  {
    id: 2,
    question:
      'What rule hath God given to direct us how we may glorify and enjoy him?',
    answer:
      'The Word of God, which is contained in the Scriptures of the Old and New Testaments, is the only rule to direct us how we may glorify and enjoy him.',
    topic: 'God the Creator',
    proofText: ['II Tim. 3:16', 'Eph. 2:20', 'I John 1:3-4'],
  },
  {
    id: 3,
    question: 'What do the Scriptures principally teach?',
    answer:
      'The Scriptures principally teach what man is to believe concerning God, and what duty God requires of man.',
    topic: 'God the Creator',
    proofText: ['II Tim. 1:13, 3:16'],
  },
  {
    id: 4,
    question: 'What is God?',
    answer:
      'God is a spirit, infinite, eternal, and unchangeable, in his being, wisdom, power, holiness, justice, goodness and truth.',
    topic: 'God the Creator',
    proofText: [
      'John 4:24',
      'Job 11:7-9',
      'Ps. 90:2',
      'James 1:17',
      'Exod. 3:14',
      'Ps. 147:5',
      'Rev. 4:8',
      'Rev. 15:4',
      'Exod. 34:6-7',
    ],
  },
  {
    id: 5,
    question: 'Are there more Gods than one?',
    answer: 'There is but one only, the living and true God.',
    topic: 'God the Creator',
    proofText: ['Deut. 6:4', 'Jer. 10:10'],
  },
  {
    id: 6,
    question: 'How many persons are there in the godhead?',
    answer:
      'There are three persons in the Godhead; the Father, the Son, and the Holy Ghost; and these three are one God, the same in substance, equal in power and glory.',
    topic: 'God the Creator',
    proofText: ['I John 5:7', 'Matt. 28:19'],
  },
  {
    id: 7,
    question: 'What are the decrees of God?',
    answer:
      'The decrees of God are his eternal purpose, according to the counsel of his will, whereby, for his own glory, he hath foreordained whatsoever comes to pass.',
    topic: 'God the Creator',
    proofText: ['Eph. 1:4, 11', 'Rom. 9:22-23'],
  },
  {
    id: 8,
    question: 'How doth God execute his decrees?',
    answer:
      'God executeth his decrees in the works of creation and providence.',
    topic: 'God the Creator',
    proofText: [''],
  },
  {
    id: 9,
    question: 'What is the work of creation?',
    answer:
      "The work of creation is God's making all things of nothing, by the word of his power, in the space of six days, and all very good.",
    topic: 'God the Creator',
    proofText: ['Gen. 1', 'Heb. 11:3'],
  },
  {
    id: 10,
    question: 'How did God create man?',
    answer:
      'God created man male and female, after his own image, in knowledge, righteousness and holiness, with dominion over the creatures.',
    topic: 'God the Creator',
    proofText: ['Gen. 1:26-28', 'Col. 3:10', 'Eph. 4:24'],
  },
  {
    id: 11,
    question: "What are God's works of providence?",
    answer:
      "God's works of providence are his most holy, wise and powerful preserving and governing all his creatures, and all their actions.",
    topic: 'God the Creator',
    proofText: [
      'Ps. 145:17',
      'Ps. 104:24',
      'Isa. 28:29',
      'Heb. 1:3',
      'Ps. 103:19',
      'Matt. 10:29-31',
    ],
  },
  {
    id: 12,
    question:
      'What special act of providence did God exercise toward man in the estate wherein he was created?',
    answer:
      'When God had created man, he entered into a covenant of life with him, upon condition of perfect obedience; forbidding him to eat of the tree of the knowledge of good and evil, upon pain of death.',
    topic: 'God the Creator',
    proofText: ['Gal. 3:12', 'Gen. 2:17'],
  },
  {
    id: 13,
    question:
      'Did our first parents continue in the estate wherein they were created?',
    answer:
      'Our first parents, being left to the freedom of their own will, fell from the estate wherein they were created, by sinning against God.',
    topic: 'The Fall',
    proofText: ['Gen. 3:6-8, 13', 'Eccles. 7:29'],
  },
  {
    id: 14,
    question: 'What is sin?',
    answer:
      'Sin is any want of conformity unto, or transgression of, the law of God.',
    topic: 'The Fall',
    proofText: ['I John 3:4'],
  },
  {
    id: 15,
    question:
      'What was the sin whereby our first parents fell from the estate wherein they were created?',
    answer:
      'The sin whereby our first parents fell from the estate wherein they were created was their eating the forbidden fruit.',
    topic: 'The Fall',
    proofText: ['Gen. 3:6, 12'],
  },
  {
    id: 16,
    question: "Did all mankind fall in Adam's first transgression?",
    answer:
      'The covenant being made with Adam, not only for himself, but for his posterity; all mankind, descending from him by ordinary generation, sinned in him, and fell with him, in his first transgression.',
    topic: 'The Fall',
    proofText: ['Gen. 2:16-17', 'Rom. 5:12', 'I Cor. 15:21-22'],
  },
  {
    id: 17,
    question: 'Into what estate did the fall bring mankind?',
    answer: 'The fall brought mankind into an estate of sin and misery.',
    topic: 'The Fall',
    proofText: ['Rom. 5:12'],
  },
  {
    id: 18,
    question:
      'Wherein consists the sinfulness of that estate whereinto man fell?',
    answer:
      "The sinfulness of that estate whereinto man fell consists in the guilt of Adam's first sin, the want of original righteousness, and the corruption of his whole nature, which is commonly called original sin; together with all actual transgressions which proceed from it.",
    topic: 'The Fall',
    proofText: ['Rom 5:10-20', 'Eph. 2:1-3', 'James 1:14-15', 'Matt. 15:19'],
  },
  {
    id: 19,
    question: 'What is the misery of that estate whereinto man fell?',
    answer:
      'All mankind by their fall lost communion with God, are under his wrath and curse, and so made liable to all the miseries in this life, to death itself, and to the pains of hell forever.',
    topic: 'The Fall',
    proofText: [
      'Gen. 3:8, 10, 24',
      'Eph. 2:2-3',
      'Gal. 3:10',
      'Lam. 3:39',
      'Rom. 6:23',
      'Matt. 25:41, 46',
    ],
  },
  {
    id: 20,
    question:
      'Did God leave all mankind to perish in the estate of sin and misery?',
    answer:
      'God having, out of his mere good pleasure, from all eternity, elected some to everlasting life, did enter into a covenant of grace, to deliver them out of the estate of sin and misery, and to bring them into an estate of salvation by a redeemer.',
    topic: 'The Fall',
    proofText: ['Eph. 1:4', 'Rom. 3:20-22', 'Gal. 3:21-22'],
  },
  {
    id: 21,
    question: "Who is the redeemer of God's elect?",
    answer:
      "The only redeemer of God's elect is the Lord Jesus Christ, who, being the eternal Son of God, became man, and so was, and continueth to be, God and man in two distinct natures, and one person, forever.",
    topic: 'The Redeemer',
    proofText: [
      'I Tim. 2:5-6',
      'John 1:14',
      'Gal. 4:4',
      'Rom. 9:5',
      'Luke 1:35',
      'Col. 2:9',
      'Heb. 7:24-25',
    ],
  },
  {
    id: 22,
    question: 'How did Christ, being the Son of God, become man?',
    answer:
      'Christ, the Son of God, became man, by taking to himself a true body and a reasonable soul, being conceived by the power of the Holy Ghost in the womb of the virgin Mary, and born of her, yet without sin.',
    topic: 'The Redeemer',
    proofText: [
      'Heb. 2:14, 2:16, 10:5',
      'Matt. 26:38',
      'Luke 1:27, 31, 35, 42',
      'Gal. 4:4',
      'Heb. 4:15, 7:26',
    ],
  },
  {
    id: 23,
    question: 'What offices doth Christ execute as our redeemer?',
    answer:
      'Christ, as our redeemer, executeth the offices of a prophet, of a priest, and of a king, both in his estate of humiliation and exaltation.',
    topic: 'The Redeemer',
    proofText: [
      'Acts 3:21-22',
      'Heb. 12:25',
      'II Cor. 13:3',
      'Heb. 5:5-7',
      'Heb. 7:25',
      'Ps. 2:6',
      'Isa. 9:6-7',
      'Matt. 21:5',
      'Ps. 2:8-11',
    ],
  },
  {
    id: 24,
    question: 'How doth Christ execute the office of a prophet?',
    answer:
      'Christ executeth the office of a prophet, in revealing to us, by his word and Spirit, the will of God for our salvation.',
    topic: 'The Redeemer',
    proofText: ['John 1:18', 'I Peter 1:10-12', 'John 15:15, 20:31'],
  },
  {
    id: 25,
    question: 'How doth Christ execute the office of a priest?',
    answer:
      'Christ executeth the office of a priest, in his once offering up of himself a sacrifice to satisfy divine justice, and reconcile us to God; and in making continual intercession for us.',
    topic: 'The Redeemer',
    proofText: ['Heb. 2:17, 9:14, 28, 7:24-25'],
  },
  {
    id: 26,
    question: 'How doth Christ execute the office of a king?',
    answer:
      'Christ executeth the office of a king, in subduing us to himself, in ruling and defending us, and in restraining and conquering all his and our enemies.',
    topic: 'The Redeemer',
    proofText: [
      'Acts 15:14-16',
      'Isa. 32:1-2, 33:22',
      'I Cor. 15:25',
      'Ps. 110',
    ],
  },
  {
    id: 27,
    question: "Wherein did Christ's humiliation consist?",
    answer:
      "Christ's humiliation consisted in his being born, and that in a low condition, made under the law, undergoing the miseries of this life, the wrath of God, and the cursed death of the cross; in being buried, and continuing under the power of death for a time.",
    topic: 'The Redeemer',
    proofText: [
      'Luke 2:7',
      'Gal. 4:4',
      'Heb. 12:2-3',
      'Isa. 53:2-3',
      'Luke 22:44',
      'Matt. 27:46',
      'Phil. 2:8',
      'I Cor. 15:3-4',
      'Acts 2:24-27, 31',
    ],
  },
  {
    id: 28,
    question: "Wherein consisteth Christ's exaltation?",
    answer:
      "Christ's exaltation consisteth in his rising again from the dead on the third day, in ascending up into heaven, in sitting at the right hand of God the Father, and in coming to judge the world at the last day.",
    topic: 'The Redeemer',
    proofText: ['I Cor. 15:4', 'Mark 16:19', 'Eph. 1:20', 'Acts 1:11, 17:31'],
  },
  {
    id: 29,
    question:
      'How are we made partakers of the redemption purchased by Christ?',
    answer:
      'We are made partakers of the redemption purchased by Christ, by the effectual application of it to us by his Holy Spirit.',
    topic: 'The Redeemer',
    proofText: ['John 1:11-12', 'Titus 3:5-6'],
  },
  {
    id: 30,
    question:
      'How doth the Spirit apply to us the redemption purchased by Christ?',
    answer:
      'The Spirit applieth to us the redemption purchased by Christ, by working faith in us, and thereby uniting us to Christ in our effectual calling.',
    topic: 'The Redeemer',
    proofText: ['Eph. 1:13-14, 2:8, 3:17', 'I Cor. 1:9', 'John 6:37, 39'],
  },
  {
    id: 31,
    question: 'What is effectual calling?',
    answer:
      "Effectual calling is the work of God's Spirit, whereby, convincing us of our sin and misery, enlightening our minds in the knowledge of Christ, and renewing our wills, he doth persuade and enable us to embrace Jesus Christ, freely offered to us in the gospel.",
    topic: 'The Redeemer',
    proofText: [
      'II Tim. 1:9',
      'II Thess. 2:13-14',
      'Acts 2:37, 26:18',
      'Ezek. 36:26-27',
      'John 6:44-45',
      'Phil. 2:13',
    ],
  },
  {
    id: 32,
    question:
      'What benefits do they that are effectually called partake of in this life?',
    answer:
      'They that are effectually called do in this life partake of justification, adoption and sanctification, and the several benefits which in this life do either accompany or flow from them.',
    topic: 'The Redeemer',
    proofText: ['Rom. 8:30', 'Eph. 1:5', 'I Cor. 1:26, 30'],
  },
  {
    id: 33,
    question: 'What is justification?',
    answer:
      "Justification is an act of God's free grace, wherein he pardoneth all our sins, and accepteth us as righteous in his sight, only for the righteousness of Christ imputed to us, and received by faith alone.",
    topic: 'The Redeemer',
    proofText: [
      'Rom. 3:24-25, 4:6-8',
      'II Cor. 5:19, 21',
      'Rom. 5:17-19',
      'Gal. 2:16',
      'Phil. 3:9',
    ],
  },
  {
    id: 34,
    question: 'What is adoption?',
    answer:
      "Adoption is an act of God's free grace, whereby we are received into the number, and have a right to all the privileges of, the sons of God.",
    topic: 'The Redeemer',
    proofText: ['I John 3:1', 'John 1:12', 'Rom. 8:17'],
  },
  {
    id: 35,
    question: 'What is sanctification?',
    answer:
      "Sanctification is the work of God's free grace, whereby we are renewed in the whole man after the image of God, and are enabled more and more to die unto sin, and live unto righteousness.",
    topic: 'The Redeemer',
    proofText: ['II Thess. 2:13', 'Eph. 4:23-24', 'Rom. 6:4, 6'],
  },
  {
    id: 36,
    question:
      'What are the benefits which in this life do accompany or flow from justification, adoption and sanctification?',
    answer:
      "The benefits which in this life do accompany or flow from justification, adoption and sanctification, are, assurance of God's love, peace of conscience, joy in the Holy Ghost, increase of grace, and perseverance therein to the end.",
    topic: 'The Redeemer',
    proofText: [
      'Rom. 5:1-2, 5, 14:17',
      'Prov. 4:18',
      'I John 5:13',
      'I Pet. 1:5',
    ],
  },
  {
    id: 37,
    question: 'What benefits do believers receive from Christ at death?',
    answer:
      'The souls of believers are at their death made perfect in holiness, and do immediately pass into glory; and their bodies, being still united to Christ, do rest in their graves till the resurrection.',
    topic: 'The Redeemer',
    proofText: [
      'Heb. 12:23',
      'II Cor. 5:1, 6, 8',
      'Phil. 1:23',
      'Luke 23:43',
      'I Thess. 4:14',
      'Isa. 57:2',
      'Job 19:26-27',
    ],
  },
  {
    id: 38,
    question:
      'What benefits do believers receive from Christ at the resurrection?',
    answer:
      'At the resurrection, believers, being raised up in glory, shall be openly acknowledged and acquitted in the day of judgment, and made perfectly blessed in the full enjoying of God to all eternity.',
    topic: 'The Redeemer',
    proofText: [
      'I Cor. 15:43',
      'Matt. 10:32, 25:23',
      'I John 3:2',
      'I Cor. 13:12',
      'I Thess. 4:17-18',
    ],
  },
  {
    id: 39,
    question: 'What is the duty which God requireth of man?',
    answer:
      'The duty which God requireth of man is obedience to his revealed will.',
    topic: 'The Ten Commandments',
    proofText: ['Micah 6:8', 'I Sam. 15:22.'],
  },
  {
    id: 40,
    question:
      'What did God at first reveal to man for the rule of his obedience?',
    answer:
      'The rule which God at first revealed to man for his obedience was the moral law.',
    topic: 'The Ten Commandments',
    proofText: ['Rom. 2:14-15, 10:5'],
  },
  {
    id: 41,
    question: 'Where is the moral law summarily comprehended?',
    answer: 'The moral law is summarily comprehended in the ten commandments.',
    topic: 'The Ten Commandments',
    proofText: ['Deut. 10:4'],
  },
  {
    id: 42,
    question: 'What is the sum of the ten commandments?',
    answer:
      'The sum of the ten commandments is to love the Lord our God with all our heart, with all our soul, with all our strength, and with all our mind; and our neighbor as ourselves.',
    topic: 'The Ten Commandments',
    proofText: ['Matt. 22:37-40'],
  },
  {
    id: 43,
    question: 'What is the preface to the ten commandments?',
    answer:
      'The preface to the ten commandments is in these words, I am the Lord thy God, which have brought thee out of the land of Egypt, out of the house of bondage.',
    topic: 'The Ten Commandments',
    proofText: ['Exod. 20:2'],
  },
  {
    id: 44,
    question: 'What doth the preface to the ten commandments teach us?',
    answer:
      'The preface to the ten commandments teacheth us that because God is the Lord, and our God, and redeemer, therefore we are bound to keep all his commandments.',
    topic: 'The Ten Commandments',
    proofText: ['Luke 1:74-75', 'I Pet. 1:15-19'],
  },
  {
    id: 45,
    question: 'Which is the first commandment?',
    answer:
      'The first commandment is, Thou shalt have no other gods before me.',
    topic: 'The Ten Commandments',
    proofText: ['Exod. 20:3'],
  },
  {
    id: 46,
    question: 'What is required in the first commandment?',
    answer:
      'The first commandment requireth us to know and acknowledge God to be the only true God, and our God; and to worship and glorify him accordingly.',
    topic: 'The Ten Commandments',
    proofText: ['I Chron. 28:9', 'Deut. 26:17', 'Matt. 4:10', 'Ps. 29:2'],
  },
  {
    id: 47,
    question: 'What is forbidden in the first commandment?',
    answer:
      'The first commandment forbiddeth the denying, or not worshiping and glorifying the true God as God, and our God; and the giving of that worship and glory to any other, which is due to him alone.',
    topic: 'The Ten Commandments',
    proofText: ['Ps. 14:1, 81:10-11', 'Rom. 1:21, 25-26'],
  },
  {
    id: 48,
    question:
      'What are we specially taught by these words before me in the first commandment?',
    answer:
      'These words before me in the first commandment teach us that God, who seeth all things, taketh notice of, and is much displeased with, the sin of having any other god.',
    topic: 'The Ten Commandments',
    proofText: ['Ezek. 8:5-18'],
  },
  {
    id: 49,
    question: 'Which is the second commandment?',
    answer:
      'The second commandment is, Thou shalt not make unto thee any graven image, or any likeness of anything that is in heaven above, or that is in the earth beneath, or that is in the water under the earth: thou shalt not bow down thyself to them, nor serve them: for I the Lord thy God am a jealous God, visiting the iniquity of the fathers upon the children unto the third and fourth generation of them that hate me; and showing mercy unto thousands of them that love me, and keep my commandments.',
    topic: 'The Ten Commandments',
    proofText: ['Exod. 20:4-6'],
  },
  {
    id: 50,
    question: 'What is required in the second commandment?',
    answer:
      'The second commandment requireth the receiving, observing, and keeping pure and entire, all such religious worship and ordinances as God hath appointed in his word.',
    topic: 'The Ten Commandments',
    proofText: ['Deut. 32:46', 'Matt. 28:20', 'Acts. 2:42'],
  },
  {
    id: 51,
    question: 'What is forbidden in the second commandment?',
    answer:
      'The second commandment forbiddeth the worshiping of God by images, or any other way not appointed in his word.',
    topic: 'The Ten Commandments',
    proofText: ['Deut. 4:15-19, 12:31-32', 'Exod. 32:5, 8'],
  },
  {
    id: 52,
    question: 'What are the reasons annexed to the second commandment?',
    answer:
      "The reasons annexed to the second commandment are, God's sovereignty over us, his propriety in us, and the zeal he hath to his own worship.",
    topic: 'The Ten Commandments',
    proofText: ['Ps. 45:11, 95:2-3, 6', 'Exod. 34:13-14'],
  },
  {
    id: 53,
    question: 'Which is the third commandment?',
    answer:
      'The third commandment is, Thou shalt not take the name of the Lord thy God in vain: for the Lord will not hold him guiltless that taketh his name in vain.',
    topic: 'The Ten Commandments',
    proofText: ['Exod. 20:7'],
  },
  {
    id: 54,
    question: 'What is required in the third commandment?',
    answer:
      "The third commandment requireth the holy and reverent use of God's names, titles, attributes, ordinances, word and works.",
    topic: 'The Ten Commandments',
    proofText: [
      'Matt. 6:9',
      'Deut. 28:58',
      'Ps. 68:4',
      'Rev. 15:3-4',
      'Mal. 1:11, 14',
      'Ps. 138:1-2',
      'Job 36:24',
    ],
  },
  {
    id: 55,
    question: 'What is forbidden in the third commandment?',
    answer:
      'The third commandment forbiddeth all profaning or abusing of anything whereby God maketh himself known.',
    topic: 'The Ten Commandments',
    proofText: ['Mal. 1:6-7, 12, 2:2, 3:14.'],
  },
  {
    id: 56,
    question: 'What is the reason annexed to the third commandment?',
    answer:
      'The reason annexed to the third commandment is that however the breakers of this commandment may escape punishment from men, yet the Lord our God will not suffer them to escape his righteous judgment.',
    topic: 'The Ten Commandments',
    proofText: ['I Sam. 2:12, 17, 22, 29, 3:13', 'Deut. 28:58-59'],
  },
  {
    id: 57,
    question: 'Which is the fourth commandment?',
    answer:
      'The fourth commandment is, Remember the sabbath day, to keep it holy. Six days shalt thou labor, and do all thy work: but the seventh day is the sabbath of the Lord thy God: in it thou shalt not do any work, thou, nor thy son, nor thy daughter, thy manservant, nor thy maidservant, nor thy cattle, nor thy stranger that is within thy gates: for in six days the Lord made heaven and earth, the sea, and all that in them is, and rested the seventh day: wherefore the Lord blessed the sabbath day, and hallowed it.',
    topic: 'The Ten Commandments',
    proofText: ['Exod. 20:8-11'],
  },
  {
    id: 58,
    question: 'What is required in the fourth commandment?',
    answer:
      'The fourth commandment requireth the keeping holy to God such set times as he hath appointed in his word; expressly one whole day in seven, to be a holy sabbath to himself.',
    topic: 'The Ten Commandments',
    proofText: ['Deut. 5:12-14'],
  },
  {
    id: 59,
    question:
      'Which day of the seven hath God appointed to be the weekly sabbath?',
    answer:
      'From the beginning of the world to the resurrection of Christ, God appointed the seventh day of the week to be the weekly sabbath; and the first day of the week ever since, to continue to the end of the world, which is the Christian sabbath.',
    topic: 'The Ten Commandments',
    proofText: ['Gen. 2:2-3', 'I Cor. 16:1-2', 'Acts 20:7'],
  },
  {
    id: 60,
    question: 'How is the sabbath to be sanctified?',
    answer:
      "The sabbath is to be sanctified by a holy resting all that day, even from such worldly employments and recreations as are lawful on other days; and spending the whole time in the public and private exercises of God's worship, except so much as is to be taken up in the works of necessity and mercy.",
    topic: 'The Ten Commandments',
    proofText: [
      'Exod. 20:8, 10, 16:25-28',
      'Neh. 13:15-19, 21-22',
      'Luke 4:16',
      'Acts 20:7',
      'Ps. 92',
      'Isa. 66:23',
      'Matt. 12:1-31',
    ],
  },
  {
    id: 61,
    question: 'What is forbidden in the fourth commandment?',
    answer:
      'The fourth commandment forbiddeth the omission or careless performance of the duties required, and the profaning the day by idleness, or doing that which is in itself sinful, or by unnecessary thoughts, words or works, about our worldly employments or recreations.',
    topic: 'The Ten Commandments',
    proofText: [
      'Ezek. 22:26, 23:38',
      'Amos 8:5',
      'Mal. 1:13',
      'Acts 20:7, 9',
      'Jer. 17:24-26',
      'Isa. 58:13',
    ],
  },
  {
    id: 62,
    question: 'What are the reasons annexed to the fourth commandment?',
    answer:
      "The reasons annexed to the fourth commandment are, God's allowing us six days of the week for our own employments, his challenging a special propriety in the seventh, his own example, and his blessing the sabbath day.",
    topic: 'The Ten Commandments',
    proofText: ['Exod. 20:9, 20:11'],
  },
  {
    id: 63,
    question: 'Which is the fifth commandment?',
    answer:
      'The fifth commandment is, Honor thy father and thy mother; that thy days may be long upon the land which the Lord thy God giveth thee.',
    topic: 'The Ten Commandments',
    proofText: ['Exod. 20:12'],
  },
  {
    id: 64,
    question: 'What is required in the fifth commandment?',
    answer:
      'The fifth commandment requireth the preserving the honor, and performing the duties, belonging to every one in their several places and relations, as superiors, inferiors or equals.',
    topic: 'The Ten Commandments',
    proofText: ['Eph. 5:21', 'I Pet. 2:17', 'Rom. 12:10'],
  },
  {
    id: 65,
    question: 'What is forbidden in the fifth commandment?',
    answer:
      'The fifth commandment forbiddeth the neglecting of, or doing anything against, the honor and duty which belongeth to every one in their several places and relations.',
    topic: 'The Ten Commandments',
    proofText: ['Matt. 15:4-6', 'Ezek. 34:2-4', 'Rom. 13:8'],
  },
  {
    id: 66,
    question: 'What is the reason annexed to the fifth commandment?',
    answer:
      "The reason annexed to the fifth commandment is a promise of long life and prosperity (as far as it shall serve for God's glory and their own good) to all such as keep this commandment.",
    topic: 'The Ten Commandments',
    proofText: ['Deut. 5:16', 'Eph. 6:2-3'],
  },
  {
    id: 67,
    question: 'Which is the sixth commandment?',
    answer: 'The sixth commandment is, Thou shalt not kill.',
    topic: 'The Ten Commandments',
    proofText: ['Exod. 20:13'],
  },
  {
    id: 68,
    question: 'What is required in the sixth commandment?',
    answer:
      'The sixth commandment requireth all lawful endeavors to preserve our own life, and the life of others.',
    topic: 'The Ten Commandments',
    proofText: ['Eph. 5:28-29', 'I Kings 18:4'],
  },
  {
    id: 69,
    question: 'What is forbidden in the sixth commandment?',
    answer:
      'The sixth commandment forbiddeth the taking away of our own life, or the life of our neighbor unjustly, or whatsoever tendeth thereunto.',
    topic: 'The Ten Commandments',
    proofText: ['Acts 16:28', 'Gen. 9:6'],
  },
  {
    id: 70,
    question: 'Which is the seventh commandment?',
    answer: 'The seventh commandment is, Thou shalt not commit adultery.',
    topic: 'The Ten Commandments',
    proofText: ['Exod. 20:14'],
  },
  {
    id: 71,
    question: 'What is required in the seventh commandment?',
    answer:
      "The seventh commandment requireth the preservation of our own and our neighbor's chastity, in heart, speech and behavior.",
    topic: 'The Ten Commandments',
    proofText: ['I Cor. 7:2-3, 5, 34, 36', 'Col. 4:6', 'I Pet. 3:2'],
  },
  {
    id: 72,
    question: 'What is forbidden in the seventh commandment?',
    answer:
      'The seventh commandment forbiddeth all unchaste thoughts, words and actions.',
    topic: 'The Ten Commandments',
    proofText: ['Matt. 15:1, 5:28', 'Eph. 5:3-4.'],
  },
  {
    id: 73,
    question: 'Which is the eighth commandment?',
    answer: 'The eighth commandment is, Thou shalt not steal.',
    topic: 'The Ten Commandments',
    proofText: ['Exod. 20:15'],
  },
  {
    id: 74,
    question: 'What is required in the eighth commandment?',
    answer:
      'The eighth commandment requireth the lawful procuring and furthering the wealth and outward estate of ourselves and others.',
    topic: 'The Ten Commandments',
    proofText: [
      'Gen. 30:30, 47:14, 20',
      'I Tim. 5:8',
      'Lev. 25:35',
      'Deut. 22:1-5',
      'Exod. 23:4-5',
    ],
  },
  {
    id: 75,
    question: 'What is forbidden in the eighth commandment?',
    answer:
      "The eighth commandment forbiddeth whatsoever doth or may unjustly hinder our own or our neighbor's wealth or outward estate.",
    topic: 'The Ten Commandments',
    proofText: ['Prov. 21:17, 23:20-21,28:19', 'Eph. 4:28'],
  },
  {
    id: 76,
    question: 'Which is the ninth commandment?',
    answer:
      'The ninth commandment is, Thou shalt not bear false witness against thy neighbor.',
    topic: 'The Ten Commandments',
    proofText: ['Exod. 20:16'],
  },
  {
    id: 77,
    question: 'What is required in the ninth commandment?',
    answer:
      "The ninth commandment requireth the maintaining and promoting of truth between man and man, and of our own and our neighbor's good name, especially in witness-bearing.",
    topic: 'The Ten Commandments',
    proofText: ['Zech. 8:16', 'III John 12', 'Prov. 14:5, 25'],
  },
  {
    id: 78,
    question: 'What is forbidden in the ninth commandment?',
    answer:
      "The ninth commandment forbiddeth whatsoever is prejudicial to truth, or injurious to our own or our neighbor's good name.",
    topic: 'The Ten Commandments',
    proofText: ['I Sam. 17:28', 'Lev. 19:16', 'Ps. 15:3.'],
  },
  {
    id: 79,
    question: 'Which is the tenth commandment?',
    answer:
      "The tenth commandment is, Thou shalt not covet thy neighbor's house, thou shalt not covet thy neighbor's wife, nor his manservant, nor his maidservant, nor his ox, nor his ass, nor anything that is thy neighbor's.",
    topic: 'The Ten Commandments',
    proofText: ['Exod. 20:17'],
  },
  {
    id: 80,
    question: 'What is required in the tenth commandment?',
    answer:
      'The tenth commandment requireth full contentment with our own condition, with a right and charitable frame of spirit toward our neighbor, and all that is his.',
    topic: 'The Ten Commandments',
    proofText: [
      'Heb. 13:5',
      'I Tim. 6:6',
      'Job 31:29',
      'Rom. 12:15',
      'I Tim. 1:5',
      'I Cor. 13:4-7',
    ],
  },
  {
    id: 81,
    question: 'What is forbidden in the tenth commandment?',
    answer:
      'The tenth commandment forbiddeth all discontentment with our own estate, envying or grieving at the good of our neighbor, and all inordinate motions and affections to anything that is his.',
    topic: 'The Ten Commandments',
    proofText: [
      'I Kings 21:4',
      'Esther 5:13',
      'I Cor. 10:10',
      'Gal. 5:26',
      'James 3:14, 16',
      'Rom. 7:7-8, 13:9',
      'Deut. 5:21',
    ],
  },
  {
    id: 82,
    question: 'Is any man able perfectly to keep the commandments of God?',
    answer:
      'No mere man since the fall is able in this life perfectly to keep the commandments of God, but doth daily break them in thought, word and deed.',
    topic: 'The Ten Commandments',
    proofText: [
      'Eccles. 7:20',
      'I John 1:8, 10',
      'Gal. 5:17',
      'Gen. 6:5, 8:21',
      'Rom. 3:9-21',
      'James 3:2-13',
    ],
  },
  {
    id: 83,
    question: 'Are all transgressions of the law equally heinous?',
    answer:
      'Some sins in themselves, and by reason of several aggravations, are more heinous in the sight of God than others.',
    topic: 'The Ten Commandments',
    proofText: ['Ezek. 8:6, 13, 15', 'I John 5:16', 'Ps. 78:17, 32, 56'],
  },
  {
    id: 84,
    question: 'What doth every sin deserve?',
    answer:
      "Every sin deserveth God's wrath and curse, both in this life, and that which is to come.",
    topic: 'The Ten Commandments',
    proofText: ['Eph. 5:6', 'Gal. 3:10', 'Lam. 3:39', 'Matt. 25:41'],
  },
  {
    id: 85,
    question:
      'What doth God require of us that we may escape his wrath and curse due to us for sin?',
    answer:
      'To escape the wrath and curse of God due to us for sin, God requireth of us faith in Jesus Christ, repentance unto life, with the diligent use of all the outward means whereby Christ communicateth to us the benefits of redemption.',
    topic: 'The Sacraments',
    proofText: ['Acts. 20:21', 'Prov. 2:1-5, 8:33-36', 'Isa. 55:3'],
  },
  {
    id: 86,
    question: 'What is faith in Jesus Christ?',
    answer:
      'Faith in Jesus Christ is a saving grace, whereby we receive and rest upon him alone for salvation, as he is offered to us in the gospel.',
    topic: 'The Sacraments',
    proofText: [
      'Heb. 10:39',
      'John 1:12',
      'Isa. 26:3-4',
      'Phil. 3:9',
      'Gal. 2:16',
    ],
  },
  {
    id: 87,
    question: 'What is repentance unto life?',
    answer:
      'Repentance unto life is a saving grace, whereby a sinner, out of a true sense of his sin, and apprehension of the mercy of God in Christ, doth, with grief and hatred of his sin, turn from it unto God, with full purpose of, and endeavor after, new obedience.',
    topic: 'The Sacraments',
    proofText: [
      'Acts. 11:18, 2:37-38',
      'Joel 2:12',
      'Jer. 3:22, 31:18-19',
      'Ezek. 36:31',
      'II Cor. 7:11',
      'Isa. 1:16-17',
    ],
  },
  {
    id: 88,
    question:
      'What are the outward and ordinary means whereby Christ communicateth to us the benefits of redemption?',
    answer:
      'The outward and ordinary means whereby Christ communicateth to us the benefits of redemption, are his ordinances, especially the word, sacraments, and prayer; all which are made effectual to the elect for salvation.',
    topic: 'The Sacraments',
    proofText: ['Matt. 28:19-20', 'Acts 2:42, 46-47'],
  },
  {
    id: 89,
    question: 'How is the word made effectual to salvation?',
    answer:
      'The Spirit of God maketh the reading, but especially the preaching, of the word, an effectual means of convincing and converting sinners, and of building them up in holiness and comfort, through faith, unto salvation.',
    topic: 'The Sacraments',
    proofText: [
      'Neh. 8:8',
      'I Cor. 14:24-25',
      'Acts 26:18',
      'Ps. 19:8',
      'Acts 20:32',
      'Rom. 15:4',
      'II Tim. 3:15-17',
      'Rom. 10:13-17, 1:16',
    ],
  },
  {
    id: 90,
    question:
      'How is the word to be read and heard, that it may become effectual to salvation?',
    answer:
      'That the word may become effectual to salvation, we must attend thereunto with diligence, preparation and prayer; receive it with faith and love, lay it up in our hearts, and practice it in our lives.',
    topic: 'The Sacraments',
    proofText: [
      'Prov. 8:34',
      'I Pet. 2:1-2',
      'Ps. 119:18',
      'Heb. 4:2',
      'II Thess. 2:10',
      'Ps. 119:11',
      'Luke 8:15',
      'James 1:25',
    ],
  },
  {
    id: 91,
    question: 'How do the sacraments become effectual means of salvation?',
    answer:
      'The sacraments become effectual means of salvation, not from any virtue in them, or in him that doth administer them; but only by the blessing of Christ, and the working of his Spirit in them that by faith receive them.',
    topic: 'The Sacraments',
    proofText: ['I Pet. 3:21', 'Matt. 3:11', 'I Cor. 3:6-7, 12:13'],
  },
  {
    id: 92,
    question: 'What is a sacrament?',
    answer:
      'A sacrament is an holy ordinance instituted by Christ; wherein, by sensible signs, Christ, and the benefits of the new covenant, are represented, sealed, and applied to believers.',
    topic: 'The Sacraments',
    proofText: ['Gen. 17:7, 10', 'Exod. 12', 'I Cor. 11:23, 26'],
  },
  {
    id: 93,
    question: 'Which are the sacraments of the New Testament?',
    answer:
      "The sacraments of the New Testament are baptism and the Lord's supper.",
    topic: 'The Sacraments',
    proofText: ['Matt. 28:19, 26:26-28'],
  },
  {
    id: 94,
    question: 'What is baptism?',
    answer:
      "Baptism is a sacrament, wherein the washing with water in the name of the Father, and of the Son, and of the Holy Ghost, doth signify and seal our ingrafting into Christ, and partaking of the benefits of the covenant of grace, and our engagement to be the Lord's.",
    topic: 'The Sacraments',
    proofText: ['Matt. 28:19', 'Rom. 6:4', 'Gal. 3:27'],
  },
  {
    id: 95,
    question: 'To whom is baptism to be administered?',
    answer:
      'Baptism is not to be administered to any that are out of the visible church, till they profess their faith in Christ, and obedience to him; but the infants of such as are members of the visible church are to be baptized.',
    topic: 'The Sacraments',
    proofText: [
      'Acts 8:36-37, 2:38-39',
      'Gen. 17:10',
      'Col. 2:11-12',
      'I Cor. 7:14',
    ],
  },
  {
    id: 96,
    question: "What is the Lord's supper?",
    answer:
      "The Lord's supper is a sacrament, wherein, by giving and receiving bread and wine according to Christ's appointment, his death is showed forth; and the worthy receivers are, not after a corporal and carnal manner, but by faith, made partakers of his body and blood, with all his benefits, to their spiritual nourishment and growth in grace.",
    topic: 'The Sacraments',
    proofText: ['I Cor. 11:23-26, 10:16'],
  },
  {
    id: 97,
    question: "What is required to the worthy receiving of the Lord's supper?",
    answer:
      "It is required of them that would worthily partake of the Lord's supper, that they examine themselves of their knowledge to discern the Lord's body, of their faith to feed upon him, of their repentance, love, and new obedience; lest, coming unworthily, they eat and drink judgment to themselves.",
    topic: 'The Sacraments',
    proofText: ['I Cor. 5:7-8, 10:16-17, 11:28-29, 11:31,', 'II Cor. 13:5'],
  },
  {
    id: 98,
    question: 'What is prayer?',
    answer:
      'Prayer is an offering up of our desires unto God, for things agreeable to his will, in the name of Christ, with confession of our sins, and thankful acknowledgment of his mercies.',
    topic: "The Lord's Prayer",
    proofText: [
      'Ps. 62:8, 32:5-6',
      'Dan. 9:4',
      'I John 5:14',
      'John 16:23',
      'Phil. 4:6',
    ],
  },
  {
    id: 99,
    question: 'What rule hath God given for our direction in prayer?',
    answer:
      "The whole word of God is of use to direct us in prayer; but the special rule of direction is that form of prayer which Christ taught his disciples, commonly called the Lord's prayer.",
    topic: "The Lord's Prayer",
    proofText: ['I John 5:14', 'Matt. 6:9-13', 'Luke 11:2-4'],
  },
  {
    id: 100,
    question: "What doth the preface of the Lord's prayer teach us?",
    answer:
      "The preface of the Lord's prayer, which is, Our Father which art in heaven, teacheth us to draw near to God with all holy reverence and confidence, as children to a father able and ready to help us; and that we should pray with and for others.",
    topic: "The Lord's Prayer",
    proofText: [
      'Matt. 6:9',
      'Rom. 8:15',
      'Luke 11:13',
      'Acts. 12:5',
      'I Tim. 2:1-2',
    ],
  },
  {
    id: 101,
    question: 'What do we pray for in the first petition?',
    answer:
      'In the first petition, which is, Hallowed be thy name, we pray that God would enable us and others to glorify him in all that whereby he maketh himself known; and that he would dispose all things to his own glory.',
    topic: "The Lord's Prayer",
    proofText: ['Matt. 6:9', 'Ps. 67:2-3, 83'],
  },
  {
    id: 102,
    question: 'What do we pray for in the second petition?',
    answer:
      "In the second petition, which is, Thy kingdom come, we pray that Satan's kingdom may be destroyed; and that the kingdom of grace may be advanced, ourselves and others brought into it, and kept in it; and that the kingdom of glory may be hastened.",
    topic: "The Lord's Prayer",
    proofText: [
      'Matt. 6:10',
      'Ps. 68:1, 18',
      'II Thess. 3:1',
      'Rom. 10:1',
      'John 17:9, 20',
      'Rev. 12:10-11, 22:20',
    ],
  },
  {
    id: 103,
    question: 'What do we pray for in the third petition?',
    answer:
      'In the third petition, which is, Thy will be done in earth, as it is in heaven, we pray that God, by his grace, would make us able and willing to know, obey and submit to his will in all things, as the angels do in heaven.',
    topic: "The Lord's Prayer",
    proofText: [
      'Matt. 6:10, 26:39',
      'II Sam. 15:25',
      'Job 1:21',
      'Ps. 67, 119:36, 103:20-21',
    ],
  },
  {
    id: 104,
    question: 'What do we pray for in the fourth petition?',
    answer:
      "In the fourth petition, which is, Give us this day our daily bread, we pray that of God's free gift we may receive a competent portion of the good things of this life, and enjoy his blessing with them.",
    topic: "The Lord's Prayer",
    proofText: ['Matt. 6:11', 'Prov. 30:8-9', 'Gen. 28:20', 'I Tim. 4:4-5'],
  },
  {
    id: 105,
    question: 'What do we pray for in the fifth petition?',
    answer:
      "In the fifth petition, which is, And forgive us our debts, as we forgive our debtors, we pray that God, for Christ's sake, would freely pardon all our sins; which we are the rather encouraged to ask, because by his grace we are enabled from the heart to forgive others.",
    topic: "The Lord's Prayer",
    proofText: [
      'Matt. 6:12, 18:35',
      'Ps. 51:1-2, 7, 9',
      'Dan. 9:17-19',
      'Luke 11:4',
    ],
  },
  {
    id: 106,
    question: 'What do we pray for in the sixth petition?',
    answer:
      'In the sixth petition, which is, And lead us not into temptation, but deliver us from evil, we pray that God would either keep us from being tempted to sin, or support and deliver us when we are tempted.',
    topic: "The Lord's Prayer",
    proofText: ['Matt. 6:13, 26:41', 'II Cor. 12:7-8'],
  },
  {
    id: 107,
    question: "What doth the conclusion of the Lord's prayer teach us?",
    answer:
      "The conclusion of the Lord's prayer, which is, For thine is the kingdom, and the power, and the glory, forever, Amen, teacheth us to take our encouragement in prayer from God only, and in our prayers to praise him, ascribing kingdom, power and glory to him. And in testimony of our desire, and assurance to be heard, we say, Amen.",
    topic: "The Lord's Prayer",
    proofText: [
      'Matt. 6:13',
      'Dan. 9:4, 7-9, 16-19',
      'I Chron. 29:10-13',
      'I Cor. 14:16',
      'Rev. 22:20-21',
    ],
  },
]

const topics = [
  { topic: 'God the Creator', id: 1 },
  { topic: 'The Fall', id: 13 },
  { topic: 'The Redeemer', id: 21 },
  { topic: 'The Ten Commandments', id: 39 },
  { topic: 'The Sacraments', id: 85 },
  { topic: "The Lord's Prayer", id: 98 },
]

export { data, topics }
