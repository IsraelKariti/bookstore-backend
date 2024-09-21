import { Book } from "./src/models/books.model.js";

const books = [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      summary: "A novel about the American dream and the disillusionment that comes with it.",
      review: "A beautifully written classic that explores themes of wealth, love, and betrayal."
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      summary: "A story about racial injustice and the destruction of innocence in the Deep South.",
      review: "A moving and impactful novel that addresses important social issues with grace."
    },
    {
      title: "1984",
      author: "George Orwell",
      summary: "A dystopian novel about totalitarianism and the dangers of a surveillance state.",
      review: "A chilling and thought-provoking read that still feels relevant today."
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      summary: "A classic romantic novel about love, class, and societal expectations in 19th century England.",
      review: "A witty and engaging story that remains one of the most beloved classics in literature."
    },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      summary: "The story of a teenage boy’s struggle with growing up and finding his place in the world.",
      review: "A timeless novel that captures the confusion and angst of adolescence."
    },
    {
      title: "Moby-Dick",
      author: "Herman Melville",
      summary: "A seafaring tale about obsession and revenge, centered on Captain Ahab's hunt for the white whale.",
      review: "An epic novel that delves deep into human nature and man's relationship with the natural world."
    },
    {
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      summary: "An epic fantasy adventure about the struggle to destroy a powerful ring and defeat evil forces.",
      review: "A monumental work of fantasy literature, full of imagination, depth, and adventure."
    },
    {
      title: "Brave New World",
      author: "Aldous Huxley",
      summary: "A dystopian novel about a futuristic world where society is controlled by technology and conditioning.",
      review: "A fascinating and disturbing look at a possible future, raising questions about freedom and control."
    },
    {
      title: "The Road",
      author: "Cormac McCarthy",
      summary: "A post-apocalyptic story about a father and son's struggle for survival in a desolate world.",
      review: "A haunting and powerful novel that explores themes of love, survival, and the human condition."
    },
    {
      title: "Frankenstein",
      author: "Mary Shelley",
      summary: "The story of a scientist who creates life, only to be horrified by the consequences of his actions.",
      review: "A gothic masterpiece that explores themes of ambition, responsibility, and the dangers of playing God."
    },
    {
        title: "The Odyssey",
        author: "Homer",
        summary: "An ancient Greek epic poem that follows Odysseus's journey home after the fall of Troy.",
        review: "A timeless tale of adventure, heroism, and the human spirit, filled with mythical encounters."
      },
      {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        summary: "A prelude to The Lord of the Rings, following Bilbo Baggins on a quest to reclaim treasure from a dragon.",
        review: "An enchanting fantasy adventure, perfect for readers of all ages, filled with wonder and bravery."
      },
      {
        title: "Crime and Punishment",
        author: "Fyodor Dostoevsky",
        summary: "A psychological drama about a man who commits murder and struggles with guilt and moral conflict.",
        review: "A deep, introspective novel that explores themes of justice, morality, and human suffering."
      },
      {
        title: "Anna Karenina",
        author: "Leo Tolstoy",
        summary: "A story of love, betrayal, and social pressures in Imperial Russia, centered on Anna's doomed affair.",
        review: "An expansive, emotionally rich novel that examines the complexities of love and society."
      },
      {
        title: "One Hundred Years of Solitude",
        author: "Gabriel García Márquez",
        summary: "A multigenerational story of the Buendía family in the fictional town of Macondo, blending reality and magic.",
        review: "A magical realist masterpiece, rich in symbolism and vivid imagery, that captures the essence of Latin American culture."
      },
      {
        title: "Wuthering Heights",
        author: "Emily Brontë",
        summary: "A tragic love story set on the Yorkshire moors, focusing on the passionate but destructive relationship between Heathcliff and Catherine.",
        review: "A dark, brooding novel that explores intense emotions and the destructive power of love."
      },
      {
        title: "The Picture of Dorian Gray",
        author: "Oscar Wilde",
        summary: "A novel about a young man whose portrait ages while he remains youthful, reflecting the consequences of his immoral lifestyle.",
        review: "A brilliant exploration of vanity, morality, and the price of eternal youth, with Wilde's signature wit and style."
      },
      {
        title: "Fahrenheit 451",
        author: "Ray Bradbury",
        summary: "A dystopian novel about a future society where books are banned and 'firemen' burn them to suppress knowledge.",
        review: "A thought-provoking novel that warns about the dangers of censorship and conformity in a tech-dominated world."
      },
      {
        title: "Jane Eyre",
        author: "Charlotte Brontë",
        summary: "A coming-of-age story about a young orphaned girl who faces hardship and grows into an independent woman.",
        review: "A pioneering work of feminist literature, offering a powerful portrayal of resilience and self-discovery."
      },
      {
        title: "The Grapes of Wrath",
        author: "John Steinbeck",
        summary: "A story about the struggles of the Joad family during the Great Depression as they migrate from the Dust Bowl to California.",
        review: "A powerful, humanistic novel that captures the hardships of the Depression era and the strength of the human spirit."
      },
      {
        title: "The Alchemist",
        author: "Paulo Coelho",
        summary: "A philosophical novel about a young shepherd’s journey to discover his personal legend and the meaning of life.",
        review: "A beautiful, inspiring tale about following one's dreams, full of wisdom and spiritual insight."
      },
      {
        title: "Don Quixote",
        author: "Miguel de Cervantes",
        summary: "A classic Spanish novel that follows the adventures of a man who becomes a knight and sets out on a quest to revive chivalry.",
        review: "A humorous, satirical story that explores the nature of idealism, reality, and madness."
      },
      {
        title: "Slaughterhouse-Five",
        author: "Kurt Vonnegut",
        summary: "A science fiction novel that blends the horrors of World War II with time travel and existential reflections.",
        review: "A darkly humorous, anti-war novel that critiques human nature and the absurdity of conflict."
      },
      {
        title: "The Stranger",
        author: "Albert Camus",
        summary: "A novel about an emotionally detached man who commits a senseless murder and faces the absurdity of life.",
        review: "A profound exploration of existentialism and the human condition, filled with philosophical depth."
      },
      {
        title: "Beloved",
        author: "Toni Morrison",
        summary: "A haunting story about an escaped slave and the ghost of her dead child, exploring the trauma of slavery.",
        review: "A heartbreaking, poetic novel that delves into the deep emotional scars left by slavery."
      },
      {
        title: "The Brothers Karamazov",
        author: "Fyodor Dostoevsky",
        summary: "A philosophical novel that explores faith, free will, and morality through the lives of the Karamazov brothers.",
        review: "A dense, intellectually challenging novel that tackles profound questions about religion and human nature."
      },
      {
        title: "The Sun Also Rises",
        author: "Ernest Hemingway",
        summary: "A story about a group of expatriates in post-World War I Europe, focusing on their disillusionment and search for meaning.",
        review: "A sharp, understated exploration of the 'lost generation,' filled with Hemingway's minimalist prose."
      },
      {
        title: "Madame Bovary",
        author: "Gustave Flaubert",
        summary: "The story of a doctor's wife who seeks excitement through adulterous affairs, only to face the consequences of her actions.",
        review: "A realistic and tragic portrait of a woman trapped by her own desires and the constraints of society."
      },
      {
        title: "Catch-22",
        author: "Joseph Heller",
        summary: "A satirical novel set during World War II, highlighting the absurdity of war and bureaucratic incompetence.",
        review: "A darkly comedic novel that brilliantly captures the paradoxes of war and the madness of military life."
      },
      {
        title: "Invisible Man",
        author: "Ralph Ellison",
        summary: "A novel about an unnamed Black man’s experiences with racism and identity in early 20th-century America.",
        review: "A powerful exploration of race, identity, and the social invisibility experienced by marginalized individuals."
      },
      {
        title: "The Kite Runner",
        author: "Khaled Hosseini",
        summary: "A story of friendship, betrayal, and redemption set against the backdrop of Afghanistan's turbulent history.",
        review: "A powerful, emotional novel that explores deep themes of guilt, forgiveness, and cultural divide."
      },
      {
        title: "The Bell Jar",
        author: "Sylvia Plath",
        summary: "A semi-autobiographical novel about a young woman's descent into mental illness in 1950s America.",
        review: "A haunting, beautifully written exploration of depression, identity, and societal expectations."
      },
      {
        title: "Life of Pi",
        author: "Yann Martel",
        summary: "A young boy survives a shipwreck and is stranded on a lifeboat with a Bengal tiger in the Pacific Ocean.",
        review: "A gripping, imaginative tale of survival, spirituality, and the relationship between humans and nature."
      },
      {
        title: "The Secret History",
        author: "Donna Tartt",
        summary: "A group of elite students at a small college becomes involved in murder, betrayal, and the dark side of academia.",
        review: "A richly layered, suspenseful novel that delves into the consequences of intellectual hubris."
      },
      {
        title: "A Tale of Two Cities",
        author: "Charles Dickens",
        summary: "Set during the French Revolution, this novel contrasts the lives of two men, one in England and one in France.",
        review: "A moving, dramatic novel about sacrifice, redemption, and the best and worst of human nature."
      },
      {
        title: "The Book Thief",
        author: "Markus Zusak",
        summary: "A young girl finds solace in stealing books and sharing them in Nazi Germany, as narrated by Death.",
        review: "A heart-wrenching and poetic novel about the power of words and the resilience of the human spirit."
      },
      {
        title: "Dracula",
        author: "Bram Stoker",
        summary: "A Gothic horror novel about Count Dracula's attempt to spread vampirism in Victorian England.",
        review: "A chilling, atmospheric story that defined the modern vampire genre and continues to inspire adaptations."
      },
      {
        title: "Gone with the Wind",
        author: "Margaret Mitchell",
        summary: "A sweeping historical novel set during the American Civil War, following the life of Scarlett O'Hara.",
        review: "An epic tale of love, war, and survival that captures the turmoil and transformation of the South."
      },
      {
        title: "The Shining",
        author: "Stephen King",
        summary: "A family becomes isolated in a haunted hotel, where the father descends into madness due to supernatural forces.",
        review: "A masterfully crafted horror novel that explores themes of isolation, fear, and the supernatural."
      },
      {
        title: "The Handmaid's Tale",
        author: "Margaret Atwood",
        summary: "A dystopian novel about a theocratic society where women are subjugated and forced into reproductive slavery.",
        review: "A chilling, thought-provoking novel that raises important questions about gender, power, and control."
      },
      {
        title: "The Da Vinci Code",
        author: "Dan Brown",
        summary: "A professor is drawn into a mystery involving religious symbols, secret societies, and a conspiracy within the Catholic Church.",
        review: "A fast-paced, thrilling novel that combines art, history, and religion in a gripping modern mystery."
      },
      {
        title: "The Color Purple",
        author: "Alice Walker",
        summary: "A novel about the struggles of African American women in the early 20th century, focusing on issues of race, sexism, and empowerment.",
        review: "A powerful, emotionally charged novel about resilience, love, and self-discovery."
      },
      {
        title: "The Curious Incident of the Dog in the Night-Time",
        author: "Mark Haddon",
        summary: "A young boy with autism sets out to solve the mystery of a neighbor's dog’s death, uncovering deeper secrets along the way.",
        review: "A touching and insightful novel that offers a unique perspective on life, love, and understanding."
      },
      {
        title: "The Night Circus",
        author: "Erin Morgenstern",
        summary: "A magical competition between two illusionists plays out in a mystical traveling circus, with unforeseen consequences.",
        review: "A beautifully written, imaginative novel that immerses readers in a world of wonder and enchantment."
      },
      {
        title: "The Name of the Wind",
        author: "Patrick Rothfuss",
        summary: "The story of a legendary figure, Kvothe, recounting his rise from orphan to the most powerful magician of his time.",
        review: "A rich, immersive fantasy novel that combines deep character development with intricate world-building."
      },
      {
        title: "The Girl with the Dragon Tattoo",
        author: "Stieg Larsson",
        summary: "A journalist and a hacker team up to investigate a decades-old disappearance in this crime thriller.",
        review: "A dark, intense novel that combines mystery, family secrets, and a powerful female protagonist."
      },
      {
        title: "Water for Elephants",
        author: "Sara Gruen",
        summary: "A young man joins a traveling circus during the Great Depression, where he finds love and danger.",
        review: "A captivating, heartfelt story about love, loyalty, and life under the big top during hard times."
      },
      {
        title: "Cloud Atlas",
        author: "David Mitchell",
        summary: "A novel composed of six interconnected stories, spanning different times and places, from the past to the distant future.",
        review: "A complex, ambitious novel that explores the interconnectedness of human lives and the impact of actions across time."
      },
      {
        title: "Dune",
        author: "Frank Herbert",
        summary: "Set in a distant future, it tells the story of a young nobleman who rises to power on the desert planet Arrakis.",
        review: "A science fiction masterpiece that combines politics, religion, and ecology in a richly developed universe."
      },
      {
        title: "The Wind-Up Bird Chronicle",
        author: "Haruki Murakami",
        summary: "A man embarks on a strange journey to find his missing wife, uncovering surreal secrets along the way.",
        review: "A complex, dreamlike novel that blends mystery, philosophy, and magical realism."
      },
      {
        title: "American Gods",
        author: "Neil Gaiman",
        summary: "A recently released convict gets involved in a battle between old gods and new in modern America.",
        review: "A dark and imaginative novel that explores mythology, faith, and the nature of belief in the modern world."
      },
      {
        title: "White Teeth",
        author: "Zadie Smith",
        summary: "A story of two families in post-colonial London, dealing with issues of race, identity, and generational conflict.",
        review: "A funny, sharp, and thought-provoking novel that captures the complexities of multicultural life."
      },
      {
        title: "Never Let Me Go",
        author: "Kazuo Ishiguro",
        summary: "A dystopian novel about students at a mysterious boarding school who slowly learn the disturbing truth about their existence.",
        review: "A haunting and poignant story that questions the ethics of science and the meaning of humanity."
      },
      {
        title: "The Joy Luck Club",
        author: "Amy Tan",
        summary: "The intertwined stories of Chinese-American mothers and daughters, exploring cultural identity and generational conflict.",
        review: "A touching and insightful exploration of family, tradition, and the immigrant experience."
      },
      {
        title: "Middlemarch",
        author: "George Eliot",
        summary: "A sweeping novel set in a provincial town, focusing on the lives of its inhabitants and the social change of the era.",
        review: "A richly detailed and insightful novel about human nature, ambition, and societal expectations."
      },
      {
        title: "The Road to Oxiana",
        author: "Robert Byron",
        summary: "A travelogue of the author's journey through the Middle East, blending history, architecture, and adventure.",
        review: "A fascinating and beautifully written account of a forgotten world, full of wit and observation."
      },
      {
        title: "Atonement",
        author: "Ian McEwan",
        summary: "A young girl's misunderstanding sets off a chain of events that affect the lives of two lovers during World War II.",
        review: "A heartbreaking and beautifully crafted novel about guilt, love, and the consequences of our actions."
      },
      {
        title: "The Outsiders",
        author: "S.E. Hinton",
        summary: "A coming-of-age story about two rival teenage gangs and the struggles they face in a divided society.",
        review: "A timeless novel that speaks to the struggles of adolescence, loyalty, and finding one's identity."
      },
      {
        title: "The Time Traveler's Wife",
        author: "Audrey Niffenegger",
        summary: "A love story between a man with a genetic condition that causes him to time travel and his wife, who waits for him to return.",
        review: "A poignant and unique love story that explores the impact of time on relationships and human connection."
      },
      {
        title: "Lolita",
        author: "Vladimir Nabokov",
        summary: "A controversial novel about a middle-aged man’s obsession with a 12-year-old girl.",
        review: "A provocative and unsettling novel, masterfully written with Nabokov's linguistic brilliance and dark wit."
      },
      {
        title: "The Giver",
        author: "Lois Lowry",
        summary: "In a dystopian society where all pain and conflict have been eliminated, one boy is chosen to receive the memories of the past.",
        review: "A thought-provoking and moving novel about individuality, memory, and the value of human experience."
      },
      {
        title: "The Brief Wondrous Life of Oscar Wao",
        author: "Junot Díaz",
        summary: "A Dominican-American nerd navigates life, love, and a family curse in this multi-generational novel.",
        review: "A vibrant, energetic novel that blends magical realism, history, and pop culture into a powerful narrative."
      },
      {
        title: "Blood Meridian",
        author: "Cormac McCarthy",
        summary: "A violent, brutal tale of a young boy's journey across the American West in the mid-1800s.",
        review: "A dark and haunting novel that delves into the nature of violence, power, and survival."
      },
      {
        title: "The House of the Spirits",
        author: "Isabel Allende",
        summary: "A family saga spanning generations, blending history, politics, and magical realism in Latin America.",
        review: "A captivating and lyrical novel about love, loss, and the intersection of personal and political history."
      },
      {
        title: "East of Eden",
        author: "John Steinbeck",
        summary: "A sprawling novel about two families and their intertwining stories, set in California’s Salinas Valley.",
        review: "A masterful exploration of good and evil, free will, and the human condition, told through vivid characters."
      },
      {
        title: "The Poisonwood Bible",
        author: "Barbara Kingsolver",
        summary: "A missionary family moves to the Congo, where their lives are forever changed by the political upheaval and the clash of cultures.",
        review: "A richly detailed and emotionally powerful novel about guilt, faith, and cultural imperialism."
      },
      {
        title: "The Goldfinch",
        author: "Donna Tartt",
        summary: "A young boy’s life is shaped by tragedy, art, and the underworld, after he survives a terrorist attack at an art museum.",
        review: "A complex and beautifully written novel that explores the intersection of fate, art, and loss."
      },
      {
        title: "One Flew Over the Cuckoo's Nest",
        author: "Ken Kesey",
        summary: "A rebellious patient battles the authoritarian rule of a nurse in a mental hospital.",
        review: "A powerful and thought-provoking novel that critiques institutional control and explores themes of freedom and individuality."
      },
      {
        title: "The Phantom of the Opera",
        author: "Gaston Leroux",
        summary: "A mysterious masked man haunts the Paris Opera House, seeking to win the love of a beautiful singer.",
        review: "A dark, romantic novel that blends mystery, horror, and tragedy in an unforgettable tale."
      },
      {
        title: "The Sympathizer",
        author: "Viet Thanh Nguyen",
        summary: "A Vietnamese double agent reflects on his life as a spy for both the communist regime and the American government.",
        review: "A brilliantly written and insightful novel that explores identity, loyalty, and the complexities of war."
      },
      {
        title: "Rebecca",
        author: "Daphne du Maurier",
        summary: "A young bride is haunted by the memory of her husband's first wife at their grand estate, Manderley.",
        review: "A gothic masterpiece filled with suspense, mystery, and psychological tension."
      },
      {
        title: "The Secret Garden",
        author: "Frances Hodgson Burnett",
        summary: "A young girl discovers a neglected garden and transforms not only the garden but also the lives of those around her.",
        review: "A heartwarming and magical story about healing, friendship, and the power of nature."
      },
      {
        title: "As I Lay Dying",
        author: "William Faulkner",
        summary: "A Southern family embarks on a journey to bury their matriarch, encountering challenges along the way.",
        review: "A complex and challenging novel that offers a deep exploration of family, death, and human endurance."
      },
      {
        title: "Infinite Jest",
        author: "David Foster Wallace",
        summary: "A sprawling, complex novel about addiction, entertainment, and the search for meaning in modern life.",
        review: "An ambitious, multi-layered work that challenges readers with its dense narrative and philosophical depth."
      },
      {
        title: "The Shadow of the Wind",
        author: "Carlos Ruiz Zafón",
        summary: "A young boy discovers a mysterious book in post-World War II Barcelona, leading him into a web of intrigue and danger.",
        review: "A captivating literary thriller that blends mystery, romance, and the power of books."
      },
      {
        title: "The Scientist",
        author: "Paulo Coelho",
        summary: "A shepherd embarks on a journey to find treasure, learning about the importance of following one's dreams.",
        review: "A simple yet profound fable about self-discovery and the pursuit of personal legend."
      },
      {
        title: "When falling in love",
        author: "Miguel de Cervantes",
        summary: "An aging knight sets out on a series of comical adventures, believing he is a hero in a world that no longer values chivalry.",
        review: "A timeless satire about the clash between reality and idealism, full of wit and humor."
      },
      {
        title: "Catch-33",
        author: "Joseph Heller",
        summary: "A satirical novel about the absurdities of war and the bureaucratic forces that make escape from it impossible.",
        review: "A darkly comic and deeply unsettling exploration of the madness of war and the paradoxes of human existence."
      },
      
      {
        title: "Hated",
        author: "Toni Morrison",
        summary: "A former slave is haunted by the ghost of her dead daughter in this deeply emotional and haunting novel.",
        review: "A powerful and harrowing exploration of trauma, memory, and the legacy of slavery in America."
      },
      {
        title: "Room for more",
        author: "Kurt Vonnegut",
        summary: "A World War II soldier becomes 'unstuck in time' and witnesses the destruction of Dresden, while traveling through various points in his life.",
        review: "A surreal and darkly humorous novel that critiques war and explores the nature of fate and free will."
      },
      {
        title: "Shades of desires",
        author: "John Steinbeck",
        summary: "During the Great Depression, a family of tenant farmers is forced to leave their home and migrate to California.",
        review: "A searing, compassionate depiction of human endurance and the plight of the American working class."
      },
      {
        title: "Prograss of Past Affairs",
        author: "Ralph Ellison",
        summary: "A young African American man experiences societal invisibility as he searches for his identity in a racist America.",
        review: "A powerful and important novel that explores race, identity, and the human condition in mid-20th-century America."
      },
      {
        title: "The Sun Also Sets",
        author: "Ernest Hemingway",
        summary: "A group of American and British expatriates travel from Paris to Spain, navigating love, war, and disillusionment.",
        review: "A beautifully written novel that captures the lost generation’s struggles with purpose and belonging."
      },
      {
        title: "Paper on the wall",
        author: "Fyodor Dostoevsky",
        summary: "A philosophical novel about the moral struggles of three brothers in 19th-century Russia.",
        review: "A profound exploration of faith, morality, and the human condition, set within a family drama."
      },
      {
        title: "Hold Me Far",
        author: "Virginia Woolf",
        summary: "A modernist novel about a family's summer vacation and the passage of time, seen through multiple perspectives.",
        review: "A beautifully written novel that delves into the complexities of human consciousness and relationships."
      },
      {
        title: "Heart of Darkness",
        author: "Joseph Conrad",
        summary: "A journey into the Congo becomes a harrowing exploration of colonialism and the darkness within the human soul.",
        review: "A powerful and disturbing novella that critiques imperialism and delves into the depths of human nature."
      },
      {
        title: "Things Fall Apart",
        author: "Chinua Achebe",
        summary: "The story of Okonkwo, a respected leader in a Nigerian village, and the devastating effects of colonialism on his community.",
        review: "A deeply moving novel that highlights the clash of cultures and the destruction wrought by colonization."
      },
      {
        title: "A Farewell to Arms",
        author: "Ernest Hemingway",
        summary: "An American ambulance driver falls in love with a nurse during World War I, amidst the horrors of war.",
        review: "A tragic love story set against the backdrop of war, told in Hemingway's spare and powerful prose."
      },
      {
        title: "Dr. Jekyll and Mr. Hyde",
        author: "Robert Louis Stevenson",
        summary: "A scientist’s experiments unleash his darker, violent side in the form of Mr. Hyde.",
        review: "A gripping novella that explores the duality of human nature and the consequences of unchecked ambition."
      },
      {
        title: "A Passage to India",
        author: "E.M. Forster",
        summary: "Set in British-ruled India, the novel explores the cultural tensions and misunderstandings between the British and Indians.",
        review: "A nuanced and insightful exploration of colonialism, race, and friendship."
      },
      {
        title: "Stranger memory",
        author: "Albert Camus",
        summary: "A dispassionate man commits murder in French Algeria and is sentenced to death, reflecting on the absurdity of life.",
        review: "A philosophical novel that examines existentialism, absurdity, and the human condition with stark prose."
      },
      {
        title: "Great Expectations",
        author: "Charles Dickens",
        summary: "The story of an orphan named Pip and his journey from poverty to wealth, love, and loss.",
        review: "A rich and complex novel about ambition, social class, and personal growth."
      },
      {
        title: "Comedy Pair",
        author: "Bram Stoker",
        summary: "A young lawyer encounters Count Dracula in Transylvania, leading to a battle between good and evil.",
        review: "A gothic masterpiece that established many conventions of vampire fiction."
      },
      {
        title: "The Old Man and the Sea",
        author: "Ernest Hemingway",
        summary: "An aging fisherman battles a giant marlin off the coast of Cuba, facing both physical and mental challenges.",
        review: "A simple yet profound story about human endurance and the struggle for dignity."
      },
      {
        title: "Sense and Sensibility",
        author: "Jane Austen",
        summary: "The contrasting love stories of two sisters, Elinor and Marianne, as they navigate social and financial challenges.",
        review: "A witty and insightful exploration of love, family, and societal expectations."
      },
      {
        title: "The Count of Monte Cristo",
        author: "Alexandre Dumas",
        summary: "A man wrongly imprisoned escapes and seeks revenge on those who betrayed him.",
        review: "A thrilling tale of revenge, justice, and redemption, filled with twists and turns."
      },
      {
        title: "The Sound and the Fury",
        author: "William Faulkner",
        summary: "The decline of a Southern aristocratic family, told through multiple perspectives and a fragmented narrative.",
        review: "A challenging but rewarding novel that explores themes of time, memory, and loss."
      },
      {
        title: "The Cookie Jar",
        author: "Sylvia Plath",
        summary: "A young woman’s descent into mental illness during the 1950s, reflecting on the pressures of societal expectations.",
        review: "A haunting and intimate portrayal of depression and the struggles of finding one’s identity."
      },
      {
        title: "Of Mice and Men",
        author: "John Steinbeck",
        summary: "Two displaced ranch workers dream of owning their own land during the Great Depression.",
        review: "A heartbreaking story of friendship, dreams, and the harsh realities of life."
      },
      {
        title: "The Metamorphosis",
        author: "Franz Kafka",
        summary: "A man wakes up to find himself transformed into a giant insect, alienated from his family and society.",
        review: "A disturbing and surreal exploration of identity, isolation, and the absurdity of existence."
      },
      {
        title: "War and Peace",
        author: "Leo Tolstoy",
        summary: "An epic novel following the lives of Russian aristocrats during the Napoleonic Wars.",
        review: "A sweeping and profound examination of war, history, and the complexities of human nature."
      },
      {
        title: "Lord of the Flies",
        author: "William Golding",
        summary: "A group of boys stranded on an uninhabited island descend into chaos and savagery.",
        review: "A dark and gripping allegory about human nature, civilization, and the loss of innocence."
      },
      {
        title: "The Trial",
        author: "Franz Kafka",
        summary: "A man is arrested and prosecuted by a mysterious court, though he is never told what crime he has committed.",
        review: "A nightmarish and absurd exploration of bureaucracy, justice, and the human condition."
      },
      {
        title: "Come Back",
        author: "Margaret Mitchell",
        summary: "The story of Scarlett O'Hara, a Southern belle struggling to survive the American Civil War and Reconstruction.",
        review: "A sweeping historical romance that captures the complexities of love, war, and survival."
      },
      {
        title: "A Shadow of Man",
        author: "Gustave Flaubert",
        summary: "A doctor's wife seeks excitement and romance beyond her mundane life, leading to ruin.",
        review: "A masterpiece of realism that explores the dangers of idealism and the constraints of society."
      },
      {
        title: "It Will Be Over",
        author: "Margaret Atwood",
        summary: "In a dystopian future, women are subjugated and forced into reproductive servitude by a theocratic regime.",
        review: "A harrowing and prescient novel about power, control, and the fight for freedom."
      },
      {
        title: "Les Misérables",
        author: "Victor Hugo",
        summary: "The story of ex-convict Jean Valjean’s journey towards redemption amidst political turmoil in 19th-century France.",
        review: "A monumental tale of justice, love, and the struggle for freedom in a world filled with suffering."
      },
      {
        title: "Ulysses",
        author: "James Joyce",
        summary: "A modernist retelling of Homer’s 'Odyssey,' following one day in the life of Leopold Bloom in Dublin.",
        review: "A challenging and groundbreaking novel that revolutionized narrative style and structure."
      },
      {
        title: "Freak",
        author: "Frank Herbert",
        summary: "On a desert planet, a young man becomes the leader of a revolution in a tale of politics, religion, and ecology.",
        review: "A richly imagined and epic science fiction novel that explores power, survival, and destiny."
      },
      {
        title: "The Divine Comedy",
        author: "Dante Alighieri",
        summary: "A spiritual journey through Hell, Purgatory, and Heaven, guided by the poet Virgil.",
        review: "A towering work of literature that explores the nature of sin, redemption, and divine justice."
      },
      {
        title: "The Magic Mountain",
        author: "Thomas Mann",
        summary: "A young man visits a tuberculosis sanatorium in the Alps and becomes immersed in philosophical contemplation.",
        review: "A dense and philosophical novel that delves into time, illness, and the human condition."
      },
      {
        title: "The Three Musketeers",
        author: "Alexandre Dumas",
        summary: "A young man joins the King’s Musketeers and embarks on adventures filled with intrigue, duels, and heroism.",
        review: "A thrilling and swashbuckling tale of friendship, loyalty, and courage."
      },
      {
        title: "The Scarlet Letter",
        author: "Nathaniel Hawthorne",
        summary: "A woman in Puritan New England is shunned after bearing an illegitimate child, forced to wear a scarlet 'A'.",
        review: "A poignant and symbolic exploration of sin, guilt, and redemption."
      },
      {
        title: "The Brothers Grimm Fairy Tales",
        author: "The Brothers Grimm",
        summary: "A collection of classic fairy tales, including 'Cinderella,' 'Hansel and Gretel,' and 'Snow White.'",
        review: "Timeless stories that capture the imagination and explore the darker side of human nature."
      },
      {
        title: "The Call of the Wild",
        author: "Jack London",
        summary: "A domesticated dog is forced to return to the wild and learn how to survive in the harsh Alaskan wilderness.",
        review: "A gripping adventure story that explores the primal instincts of survival and the call of nature."
      },
      {
        title: "A Tale of a City in Fall",
        author: "Charles Dickens",
        summary: "Set during the French Revolution, the novel contrasts the lives of two men who are both in love with the same woman.",
        review: "A dramatic and emotional exploration of love, sacrifice, and the turmoil of revolution."
      },
      {
        title: "The Iliad",
        author: "Homer",
        summary: "The epic story of the Trojan War, focusing on the hero Achilles and his role in the conflict.",
        review: "A grand and poetic tale of war, honor, and fate, full of action and tragedy."
      },
      {
        title: "Maria",
        author: "Daphne du Maurier",
        summary: "A young woman marries a wealthy widower, only to be haunted by the legacy of his first wife, Rebecca.",
        review: "A gothic suspense novel filled with mystery, intrigue, and a chilling atmosphere."
      },
      {
        title: "The Death of Ivan Ilyich",
        author: "Leo Tolstoy",
        summary: "A high-ranking Russian judge grapples with the meaning of life as he faces his own mortality.",
        review: "A powerful novella that reflects on the nature of life, death, and what it means to live authentically."
      },
      {
        title: "Godly Games",
        author: "Vladimir Nabokov",
        summary: "A middle-aged man becomes infatuated with a twelve-year-old girl, leading to a disturbing relationship.",
        review: "A controversial yet brilliantly written novel that explores obsession, manipulation, and moral ambiguity."
      },
      {
        title: "The Runner",
        author: "Khaled Hosseini",
        summary: "The story of a boy from Kabul, his complex relationship with his friend, and his quest for redemption.",
        review: "A deeply emotional and beautifully written novel about friendship, guilt, and the power of forgiveness."
      },
      {
        title: "A Clockwork Orange",
        author: "Anthony Burgess",
        summary: "In a dystopian future, a young delinquent undergoes an experiment to curb his violent tendencies.",
        review: "A provocative and disturbing novel that raises questions about free will, violence, and the ethics of control."
      },
      {
        title: "A Full Cup",
        author: "George Eliot",
        summary: "Set in a fictional English town, the novel explores the lives, ambitions, and struggles of its inhabitants.",
        review: "A richly detailed and character-driven novel that delves into themes of marriage, politics, and social change."
      },
      {
        title: "Healed Bones",
        author: "Zadie Smith",
        summary: "The intertwined lives of two families in London reflect the complexities of race, culture, and identity.",
        review: "A witty and ambitious novel that captures the diversity and contradictions of modern life."
      },
      {
        title: "The Remains of the Day",
        author: "Kazuo Ishiguro",
        summary: "An English butler reflects on his life and loyalty to his employer, set against the backdrop of World War II.",
        review: "A quiet, poignant exploration of duty, regret, and the passage of time."
      },
      {
        title: "Crime By Thought",
        author: "Barbara Kingsolver",
        summary: "A missionary family travels to the Congo, where cultural misunderstandings lead to tragedy.",
        review: "A compelling and beautifully written novel that explores faith, family, and the consequences of colonialism."
      },
      {
        title: "The Age of Innocence",
        author: "Edith Wharton",
        summary: "In 1870s New York, a man must choose between a safe, conventional life and a passionate, scandalous love affair.",
        review: "A beautifully crafted novel that critiques the rigid social norms and constraints of its time."
      },
      {
        title: "Bleak House",
        author: "Charles Dickens",
        summary: "A complex legal case drags on for years, affecting the lives of everyone involved, from the wealthy to the destitute.",
        review: "A rich and sprawling novel that critiques the flaws of the British legal system and highlights social injustice."
      },
      {
        title: "The Jungle",
        author: "Upton Sinclair",
        summary: "An immigrant family struggles to survive in the brutal and exploitative world of Chicago's meatpacking industry.",
        review: "A powerful social critique that exposed the horrors of industrial capitalism and spurred labor reforms."
      },
      {
        title: "Native Son",
        author: "Richard Wright",
        summary: "A young African American man in 1930s Chicago is driven to commit murder, exploring themes of race and poverty.",
        review: "A gripping and harrowing novel that addresses the systemic racism and oppression of Black Americans."
      },
      {
        title: "A Knight In Armor",
        author: "Alice Walker",
        summary: "The life of Celie, a poor Black woman in the South, as she overcomes abuse and finds her voice through letters to God.",
        review: "A powerful and uplifting novel about resilience, love, and self-discovery."
      },
      {
        title: "Gold Ratio",
        author: "Yann Martel",
        summary: "A young boy survives a shipwreck and is stranded on a lifeboat with a Bengal tiger, exploring themes of survival and faith.",
        review: "A captivating and philosophical novel that blends adventure with deep reflections on belief and the human spirit."
      },
      {
        title: "The Namesake",
        author: "Jhumpa Lahiri",
        summary: "The story of a Bengali-American family, focusing on the son’s struggle with his cultural identity.",
        review: "A beautifully written exploration of immigrant life, family ties, and the search for belonging."
      },
      {
        title: "Waiting For The Bell",
        author: "John Steinbeck",
        summary: "A multigenerational saga set in California's Salinas Valley, focusing on two families and their struggles with good and evil.",
        review: "A sweeping and profound novel that delves into themes of morality, fate, and the human condition."
      },
      {
        title: "A Place to Heal",
        author: "Amy Tan",
        summary: "The stories of four Chinese-American immigrant families in San Francisco, focusing on the relationships between mothers and daughters.",
        review: "A poignant and evocative novel that explores generational and cultural divides."
      },
      {
        title: "Bel Canto",
        author: "Ann Patchett",
        summary: "Hostages and terrorists form unexpected bonds during a prolonged standoff in an unnamed South American country.",
        review: "A lyrical and suspenseful novel that explores art, love, and the human connections that form in extreme circumstances."
      },
      {
        title: "Do Me A Favour",
        author: "Kazuo Ishiguro",
        summary: "In a dystopian future, three friends discover the unsettling truth about their purpose in life.",
        review: "A haunting and beautifully written novel that explores themes of identity, memory, and the ethics of science."
      },
      {
        title: "The God of Small Things",
        author: "Arundhati Roy",
        summary: "The lives of fraternal twins in India are forever altered by a tragic event and the rigid social hierarchy.",
        review: "A richly textured and emotionally powerful novel that addresses love, caste, and forbidden relationships."
      },
      {
        title: "The Master and Margarita",
        author: "Mikhail Bulgakov",
        summary: "Satan visits Moscow, causing chaos, while a parallel story follows the fate of Pontius Pilate during Jesus' trial.",
        review: "A fantastical and satirical novel that critiques Soviet society and explores themes of good and evil."
      },
      {
        title: "The Blind Assassin",
        author: "Margaret Atwood",
        summary: "A complex narrative weaving between the life of Iris Chase and a novel-within-a-novel about a doomed love affair.",
        review: "A masterful and multilayered novel that explores memory, storytelling, and betrayal."
      },
      {
        title: "The Storyteller Shoeman",
        author: "Donna Tartt",
        summary: "A young boy’s life is forever changed after a terrorist attack in an art museum, and he clings to a painting as a symbol of hope.",
        review: "A sprawling and emotional novel about loss, beauty, and the search for meaning."
      },
      {
        title: "A History Lesson",
        author: "Donna Tartt",
        summary: "A group of elite students at a small college become entangled in a dark and dangerous secret.",
        review: "A gripping and haunting novel that explores obsession, morality, and the consequences of intellectual pursuit."
      },
      {
        title: "Boots That Make A Noise",
        author: "Carlos Ruiz Zafón",
        summary: "A young boy discovers a mysterious book in a hidden library, leading him into a labyrinth of intrigue in post-war Barcelona.",
        review: "A mesmerizing and atmospheric novel that blends mystery, romance, and literary history."
      },
      {
        title: "One too many",
        author: "Kurt Vonnegut",
        summary: "Billy Pilgrim becomes 'unstuck in time' as he experiences the horrors of World War II and the bombing of Dresden.",
        review: "A satirical and surreal exploration of war, free will, and the absurdity of human existence."
      },
      {
        title: "Watership Down",
        author: "Richard Adams",
        summary: "A group of rabbits embarks on a perilous journey to find a new home, facing natural and man-made dangers along the way.",
        review: "A richly imagined and allegorical tale about survival, leadership, and community."
      },
      {
        title: "Pure sin",
        author: "Paulo Coelho",
        summary: "A young shepherd embarks on a journey to find treasure, learning important lessons about life, dreams, and destiny along the way.",
        review: "A simple yet profound fable that encourages readers to follow their personal legends."
      },
      {
        title: "Illegal word",
        author: "Miguel de Cervantes",
        summary: "An aging man becomes obsessed with the idea of chivalry and sets out on absurd adventures as a self-declared knight.",
        review: "A humorous and poignant exploration of idealism, reality, and the power of storytelling."
      },
      {
        title: "All the roads to hell",
        author: "John Steinbeck",
        summary: "The Joad family migrates west during the Great Depression, seeking a better life and facing unimaginable hardships.",
        review: "A powerful and moving novel about social injustice, poverty, and resilience."
      },
      {
        title: "Circle In The Fire",
        author: "S.E. Hinton",
        summary: "Two rival teen gangs clash in a small town, leading to violence and tragedy as they struggle to find their place in the world.",
        review: "A gritty and heartfelt novel about identity, loyalty, and the complexities of adolescence."
      },
      {
        title: "Siddhartha",
        author: "Hermann Hesse",
        summary: "A young man embarks on a spiritual journey, searching for enlightenment and understanding of life’s meaning.",
        review: "A beautifully written exploration of self-discovery, inner peace, and the nature of existence."
      },
      {
        title: "When He Knocks on A Door",
        author: "Erin Morgenstern",
        summary: "Two young magicians are pitted against each other in a mysterious competition set in a magical, ever-changing circus.",
        review: "A spellbinding and imaginative novel full of wonder, romance, and suspense."
      },
      {
        title: "The Girl on the Train",
        author: "Paula Hawkins",
        summary: "A woman becomes entangled in a missing person case after witnessing something suspicious from a train window.",
        review: "A tense and gripping psychological thriller full of twists and unreliable narrators."
      },
      {
        title: "The Little Prince",
        author: "Antoine de Saint-Exupéry",
        summary: "A young prince travels from planet to planet, learning lessons about love, loneliness, and what really matters in life.",
        review: "A whimsical and profound tale that resonates with readers of all ages, filled with timeless wisdom."
      },
      {
        title: "Time For Food",
        author: "Frances Hodgson Burnett",
        summary: "An orphaned girl discovers a hidden garden, which transforms both her life and the lives of those around her.",
        review: "A heartwarming and magical story about healing, friendship, and the power of nature."
      },
      {
        title: "Memoirs of a Geisha",
        author: "Arthur Golden",
        summary: "The life of a young girl in pre-World War II Japan as she is trained to become one of the most famous geishas in the country.",
        review: "A beautifully written and immersive novel that transports readers to another time and place."
      },
      {
        title: "The Sound of Sadness",
        author: "Markus Zusak",
        summary: "Set in Nazi Germany, the story follows a young girl who steals books and learns the power of words while growing up under the shadow of war.",
        review: "A heartbreaking and powerful story about love, loss, and the resilience of the human spirit."
      },
      {
        title: "The Stunning True Of Me",
        author: "Joseph Heller",
        summary: "In World War II, a bomber pilot grapples with the absurdities of war and military bureaucracy in this darkly comic novel.",
        review: "A satirical and biting critique of war, full of irony, humor, and tragic truths."
      },
      
      {
        title: "The Lovely Bones",
        author: "Alice Sebold",
        summary: "After being murdered, a young girl watches from heaven as her family struggles to move on and her killer evades justice.",
        review: "A haunting and emotional novel that beautifully blends tragedy with hope and healing."
      },
      {
        title: "The Stand",
        author: "Stephen King",
        summary: "After a deadly virus wipes out most of humanity, the survivors must choose between good and evil in a final showdown.",
        review: "A sprawling and epic tale of survival, morality, and the ultimate battle between good and evil."
      },
      {
        title: "The Silence of the Lambs",
        author: "Thomas Harris",
        summary: "A young FBI agent seeks the help of a brilliant but imprisoned serial killer to catch another killer on the loose.",
        review: "A tense and chilling psychological thriller that explores the minds of both predator and prey."
      },
      {
        title: "A Dim Reality of Together",
        author: "Stephen King",
        summary: "A family becomes the winter caretakers of an isolated hotel, where supernatural forces drive the father into madness.",
        review: "A masterful blend of psychological horror and supernatural elements, filled with tension and dread."
      },
      {
        title: "The Road to Character",
        author: "David Brooks",
        summary: "A reflection on the importance of cultivating inner virtues and leading a life of moral purpose in a society focused on success.",
        review: "An insightful and thought-provoking examination of character and self-improvement."
      },
      {
        title: "Christmas Rain",
        author: "Albert Camus",
        summary: "A disaffected man commits murder and reflects on the absurdity of life as he faces trial.",
        review: "A stark and existential novel that delves into the human condition, morality, and the meaning of life."
      },
      {
        title: "The Secret Of Little Steve",
        author: "Donna Tartt",
        summary: "A group of college students become involved in a murder, with guilt and betrayal unraveling their lives.",
        review: "A dark and gripping tale of obsession, privilege, and the consequences of intellectual pursuit."
      },
      {
        title: "The Hunger Games",
        author: "Suzanne Collins",
        summary: "In a dystopian future, a young girl is forced to fight in a televised death match as part of a brutal regime’s control.",
        review: "A fast-paced and compelling novel about survival, rebellion, and the human spirit."
      },
      {
        title: "Everything Lost",
        author: "Margaret Atwood",
        summary: "In a dystopian future, women are subjugated and forced into reproductive servitude by a theocratic regime.",
        review: "A chilling and powerful novel that explores themes of oppression, gender, and control."
      },
      {
        title: "Stubborn Day",
        author: "Dan Brown",
        summary: "A symbologist and a cryptologist unravel a series of clues related to a secret society and a religious conspiracy.",
        review: "A fast-paced and thrilling novel filled with mystery, symbolism, and twists."
      },
      {
        title: "Surrender",
        author: "Bram Stoker",
        summary: "A lawyer travels to Transylvania, only to discover that his host, Count Dracula, is a vampire bent on moving to London.",
        review: "A gothic horror classic that has shaped modern vampire lore and continues to captivate readers."
      },
      {
        title: "Gone Girl",
        author: "Gillian Flynn",
        summary: "A woman's sudden disappearance turns into a media frenzy, with suspicions falling on her husband.",
        review: "A dark, twisted psychological thriller with shocking twists and complex characters."
      },
      {
        title: "The Chronicles of Narnia: The Lion, the Witch, and the Wardrobe",
        author: "C.S. Lewis",
        summary: "Four children find a magical world inside a wardrobe, where they must help a lion defeat an evil witch.",
        review: "A beloved fantasy tale of adventure, courage, and the eternal battle between good and evil."
      },
      {
        title: "The Cookie Monster",
        author: "Sylvia Plath",
        summary: "A young woman descends into depression while struggling with societal expectations and her identity.",
        review: "A haunting and semi-autobiographical exploration of mental illness, femininity, and the pressures of life."
      },
      {
        title: "Another Vicroty For Us",
        author: "Victor Hugo",
        summary: "The epic story of ex-convict Jean Valjean and his quest for redemption amidst the backdrop of revolutionary France.",
        review: "A sweeping novel of love, justice, and human suffering that portrays the resilience of the human spirit."
      },
      {
        title: "To the Lighthouse",
        author: "Virginia Woolf",
        summary: "A family’s trip to their summer home by the sea is marked by the passage of time, memory, and introspection.",
        review: "A beautifully written, introspective novel that explores themes of time, gender roles, and the nature of art."
      },
      {
        title: "Invisible Tears",
        author: "Ralph Ellison",
        summary: "The story of a nameless Black man navigating racism, identity, and invisibility in mid-20th century America.",
        review: "A powerful and thought-provoking novel about race, identity, and the social structures that dehumanize individuals."
      },
      {
        title: "Most Days are not like that",
        author: "Haruki Murakami",
        summary: "A man’s search for his missing wife leads him into a surreal and mysterious world where the boundaries between reality and dream blur.",
        review: "A complex and haunting novel filled with symbolism, existential questions, and magical realism."
      },
      {
        title: "A Gun To Shoot",
        author: "Ian McEwan",
        summary: "A lie told by a young girl irrevocably changes the lives of those around her, leading to guilt, tragedy, and a search for redemption.",
        review: "A beautifully written novel that explores memory, guilt, and the power of storytelling."
      },
      {
        title: "A Song of Ice and Fire: A Game of Thrones",
        author: "George R.R. Martin",
        summary: "In a brutal medieval world, noble families vie for control of the Iron Throne and the Seven Kingdoms.",
        review: "An epic fantasy filled with complex characters, political intrigue, and unexpected twists."
      },
      {
        title: "The Fault in Our Stars",
        author: "John Green",
        summary: "Two teenagers with cancer fall in love and confront the fragility of life and the inevitability of death.",
        review: "A heart-wrenching and beautifully written novel about love, loss, and living fully in the face of death."
      },
      {
        title: "Summer of the Octopus",
        author: "Frank Herbert",
        summary: "On a desert planet, a young heir rises to power amidst political intrigue, war, and the fight for control of a valuable spice.",
        review: "A sweeping, epic science fiction novel that explores politics, religion, and the survival of humanity."
      },
      {
        title: "Americanah",
        author: "Chimamanda Ngozi Adichie",
        summary: "A young Nigerian woman moves to America and grapples with race, identity, and love as she navigates her new life.",
        review: "A sharp and insightful novel about immigration, race, and the complexities of cultural identity."
      },
      {
        title: "Norwegian Wood",
        author: "Haruki Murakami",
        summary: "A man reflects on his university days and the complicated relationships that shaped his coming of age.",
        review: "A melancholic and nostalgic novel about love, loss, and the bittersweet memories of youth."
      },
      {
        title: "Just Know This",
        author: "Lois Lowry",
        summary: "In a seemingly perfect, controlled society, a young boy is chosen to learn the truth about the past and human emotions.",
        review: "A thought-provoking and emotionally powerful story about memory, freedom, and the importance of individuality."
      },
      {
        title: "The Moon Also Rises",
        author: "Ernest Hemingway",
        summary: "A group of American expatriates travel to Spain and experience love, disillusionment, and the lost generation's search for meaning.",
        review: "A novel marked by Hemingway's spare prose, capturing the emotional desolation of post-World War I Europe."
      },
      {
        title: "Catch Me If You Can",
        author: "Joseph Heller",
        summary: "In World War II, a bomber pilot is caught in a bureaucratic paradox that traps him in an unending cycle of absurdity.",
        review: "A brilliant satirical novel that criticizes the absurdities of war, authority, and human life."
      },
      {
        title: "Roof Is Not Mine",
        author: "Isabel Allende",
        summary: "The saga of the Trueba family, set in a Latin American country, blending history with magical realism.",
        review: "A beautifully written novel that weaves together politics, love, and the supernatural in a multi-generational tale."
      },
      {
        title: "Excuse Me",
        author: "Isabel Allende",
        summary: "The saga of the Trueba family, set in a Latin American country, blending history with magical realism.",
        review: "A beautifully written novel that weaves together politics, love, and the supernatural in a multi-generational tale."
      },
      {
        title: "A Destiny Well Written",
        author: "John Green",
        summary: "Two teenagers with cancer fall in love and confront the fragility of life and the inevitability of death.",
        review: "A heart-wrenching and beautifully written novel about love, loss, and living fully in the face of death."
      },
      {
        title: "Whenever You Can",
        author: "Ian McShpitz",
        summary: "A lie told by a young girl irrevocably changes the lives of those around her, leading to guilt, tragedy, and a search for redemption.",
        review: "A beautifully written novel that explores memory, guilt, and the power of storytelling."
      },
      {
        title: "A Dragon Wrath",
        author: "Sylvia Plath",
        summary: "A young woman descends into depression while struggling with societal expectations and her identity.",
        review: "A haunting and semi-autobiographical exploration of mental illness, femininity, and the pressures of life."
      },
      {
        title: "Summer Of Forgotten Life",
        author: "Sylvia Plath",
        summary: "A young woman descends into depression while struggling with societal expectations and her identity.",
        review: "A haunting and semi-autobiographical exploration of mental illness, femininity, and the pressures of life."
      },
      {
        title: "Making a Wild Guess",
        author: "Sylvia Plath",
        summary: "A young woman descends into depression while struggling with societal expectations and her identity.",
        review: "A haunting and semi-autobiographical exploration of mental illness, femininity, and the pressures of life."
      },
      {
        title: "Whispers of the Forgotten Shore",
        author: "Eliza Whitmore",
        summary: "A reclusive artist moves to a quiet seaside village, only to uncover a series of mysterious disappearances tied to the town’s dark past.",
        review: "A captivating and eerie tale of secrets, loss, and redemption, with an unforgettable atmosphere."
      },
      {
        title: "The Clockmaker's Daughter",
        author: "Julian Marsh",
        summary: "In a city where time is controlled by a mysterious clockmaker, a young girl discovers she holds the key to unlocking time itself.",
        review: "An imaginative and beautifully written fantasy that explores destiny, courage, and the power of time."
      },
      {
        title: "Echoes of Distant Stars",
        author: "Mira Valen",
        summary: "A space explorer embarks on a journey to the edge of the universe in search of her long-lost brother, only to uncover an ancient alien civilization.",
        review: "A thrilling space adventure filled with mystery, wonder, and the bond between siblings."
      },
      {
        title: "The House on Ember Hill",
        author: "Agatha Raven",
        summary: "After inheriting a crumbling mansion, a young woman uncovers the ghostly past of her ancestors and the tragic love story that haunts the house.",
        review: "A haunting and atmospheric gothic novel that expertly blends romance, mystery, and the supernatural."
      },
      {
        title: "The Last Symphony",
        author: "Leonard Hargrave",
        summary: "A troubled composer races against time to complete his final masterpiece, while grappling with personal demons and an ancient curse tied to his music.",
        review: "A spellbinding novel of genius, obsession, and the thin line between creation and destruction."
      },
      {
        title: "Beneath the Iron Sky",
        author: "Talia Monroe",
        summary: "In a dystopian world where freedom is outlawed, a group of rebels fights to take down the iron-fisted regime and restore hope to the people.",
        review: "A gripping, action-packed dystopian saga that explores the price of freedom and the strength of the human spirit."
      },
      {
        title: "The Forgotten Orchard",
        author: "Cecilia Davenport",
        summary: "A botanist returns to her childhood home and discovers an enchanted orchard with the power to heal both her heart and her family's dark history.",
        review: "A magical and heartwarming tale of love, family, and the healing power of nature."
      },
      {
        title: "Shadows in the Mirror",
        author: "Daniel Thorpe",
        summary: "A detective with a tragic past is drawn into a chilling case when he finds a mirror that reveals the future murders of its victims.",
        review: "A dark and twisty thriller that keeps you guessing until the final, shocking twist."
      },
      {
        title: "The Silence of Silver Falls",
        author: "Lydia Graves",
        summary: "When a journalist investigates a series of disappearances in a small mountain town, she uncovers a hidden world of ancient secrets and a deadly conspiracy.",
        review: "A tense and atmospheric mystery that weaves together history, folklore, and suspense."
      },
      {
        title: "The Alchemist's Promise",
        author: "Frederick Lane",
        summary: "An apprentice alchemist stumbles upon an ancient formula that could change the world, but soon discovers that its power comes with a deadly price.",
        review: "A riveting fantasy full of intrigue, danger, and the moral complexities of knowledge and power."
      },
      {
        title: "The Garden of Forgotten Dreams",
        author: "Iris Monroe",
        summary: "A young woman discovers an overgrown garden that holds the key to her family's hidden past and a magical world she never knew existed.",
        review: "A beautifully imaginative tale that blends family secrets, magic, and the healing power of nature."
      },
      {
        title: "The Last Librarian",
        author: "Oliver Finch",
        summary: "In a future where books are outlawed, the last librarian fights to preserve the world’s knowledge and ignite a revolution through hidden literature.",
        review: "An inspiring and thrilling story about the preservation of knowledge and the fight against censorship."
      },
      {
        title: "The Alchemist's Heart",
        author: "Natalie Rivers",
        summary: "A skilled alchemist in a steampunk world seeks a mythical artifact that could grant immortality, while dealing with rival factions and personal loss.",
        review: "A captivating steampunk adventure filled with intrigue, romance, and the quest for eternal life."
      },
      {
        title: "The Queen's Enigma",
        author: "Jasper Wolfe",
        summary: "In a medieval kingdom, a young scribe uncovers a dangerous secret about the queen that could alter the fate of the realm.",
        review: "A suspenseful and richly detailed historical novel with political intrigue and hidden agendas."
      },
      {
        title: "The Mirror's Reflection",
        author: "Evelyn Hart",
        summary: "A scientist invents a mirror that shows alternate realities, leading to an exploration of parallel worlds and the consequences of altering one's fate.",
        review: "A thought-provoking and imaginative exploration of choice, consequence, and the nature of reality."
      },
      {
        title: "The Phantom's Key",
        author: "Gideon Black",
        summary: "A group of friends finds an ancient key that unlocks a realm of phantoms and supernatural challenges, testing their courage and friendship.",
        review: "An adventurous and eerie tale that combines friendship, mystery, and the supernatural in an engaging narrative."
      },
      {
        title: "The Enchanted Compass",
        author: "Fiona Adams",
        summary: "A young explorer stumbles upon a magical compass that leads her on a quest to save her world from impending darkness.",
        review: "A thrilling and enchanting journey that explores bravery, magic, and the power of destiny."
      },
      {
        title: "The Secret of Celestial Falls",
        author: "Reed Carter",
        summary: "A journalist investigating mysterious disappearances in a picturesque town discovers a hidden society and a cosmic secret that could change everything.",
        review: "A gripping and imaginative story filled with suspense, secrets, and celestial mysteries."
      },
      {
        title: "The Echoing Silence",
        author: "Lena Knight",
        summary: "A musician with a unique gift for hearing the unspoken begins to unravel a conspiracy through the melodies and silences of those around her.",
        review: "A beautifully written and haunting novel that explores the intersection of music, mystery, and human connection."
      },
      {
        title: "The Lost City of Dreams",
        author: "Harrison Lane",
        summary: "An archaeologist discovers the entrance to a legendary city hidden beneath the sands, leading to a journey filled with ancient wonders and perilous traps.",
        review: "A thrilling adventure with rich historical detail, vibrant settings, and high-stakes exploration."
      },
      {
        title: "The Enigma of Echo Valley",
        author: "Sophie Caldwell",
        summary: "A young historian moves to a remote valley to investigate ancient legends, only to find herself entangled in a web of mystery and danger.",
        review: "A suspenseful and atmospheric novel that masterfully blends history, legend, and thrilling suspense."
      },
      {
        title: "The Clockwork Conspiracy",
        author: "Liam Avery",
        summary: "In a world where technology and magic intertwine, a clockmaker's invention leads to a conspiracy that threatens the balance of both realms.",
        review: "An inventive and action-packed steampunk adventure with intricate plots and a richly imagined world."
      },
      {
        title: "The Whispering Pines",
        author: "Olivia Harper",
        summary: "After moving to a small town, a woman discovers that the local forest holds secrets about her family's past and the supernatural.",
        review: "A beautifully crafted tale of mystery, family secrets, and the enchantment of nature."
      },
      {
        title: "The Ghostwriter’s Tale",
        author: "Evan Blackwood",
        summary: "A struggling writer discovers an old manuscript that may be the key to solving a series of ghostly occurrences in her town.",
        review: "A gripping and eerie story that blends literary mystery with supernatural intrigue."
      },
      {
        title: "The Cursed Manuscript",
        author: "Isabella Moore",
        summary: "A rare book dealer finds a manuscript cursed with dark magic, leading to a quest to break the curse before it consumes him.",
        review: "A darkly fascinating novel filled with suspense, magic, and the perils of obsession."
      },
      {
        title: "The Oracle's Prophecy",
        author: "Sebastian Lee",
        summary: "An oracle’s prophecy foretells the rise of a new power that could either save or doom the world, and a young warrior is chosen to alter its course.",
        review: "An epic fantasy adventure that explores destiny, power, and the battle between light and darkness."
      },
      {
        title: "The Labyrinth of Lost Souls",
        author: "Maya Jensen",
        summary: "A group of adventurers enters a magical labyrinth in search of a mythical treasure, but they must confront their deepest fears to escape.",
        review: "A thrilling and imaginative journey through a labyrinth filled with danger, self-discovery, and wonder."
      },
      {
        title: "The Secret of the Silver Lake",
        author: "Thomas Grey",
        summary: "A summer camp counselor uncovers an ancient secret hidden beneath a lake, leading to a series of supernatural events that threaten the camp.",
        review: "A captivating and suspenseful tale that combines the charm of summer camp with eerie mysteries and supernatural elements."
      },
      {
        title: "The Enchanted Kingdom",
        author: "Vivian Crowe",
        summary: "A young girl discovers a hidden portal to an enchanted kingdom where she must help its inhabitants reclaim their lost magic from an evil sorcerer.",
        review: "A magical and heartwarming adventure that explores bravery, friendship, and the power of belief."
      },
      {
        title: "The Phantom's Lullaby",
        author: "Marcus Finch",
        summary: "A composer’s haunting lullaby is said to bring the dead back to life, and he must navigate a dark and mystical world to uncover the truth behind the legend.",
        review: "A beautifully eerie and lyrical novel that blends music, mystery, and the supernatural."
      },
      {
        title: "The Last Enchanter",
        author: "Avery Knight",
        summary: "In a world where magic is fading, the last enchanter must embark on a perilous journey to restore the lost art and save his realm.",
        review: "A gripping fantasy adventure that combines magic, danger, and the quest for redemption."
      },
      {
        title: "The Illusionist's Secret",
        author: "Lydia Hart",
        summary: "A renowned illusionist’s disappearance leads a detective to uncover a web of secrets, deceit, and hidden magic in the world of stagecraft.",
        review: "A thrilling mystery that blends the art of illusion with a deep and engaging plot."
      },
      {
        title: "The Dragon’s Whisper",
        author: "Ethan Graves",
        summary: "A young farmer discovers he has a unique connection with a dragon, and together they must confront a dark force threatening their world.",
        review: "An enchanting and action-packed fantasy tale with unforgettable characters and a richly imagined world."
      },
      {
        title: "The Vanishing Ink",
        author: "Sophia Winters",
        summary: "A struggling writer stumbles upon an ancient ink that makes her stories come to life, but soon realizes the ink has a mind of its own.",
        review: "A creative and engaging novel that explores the power of storytelling and the blurring lines between reality and fiction."
      },
      {
        title: "The Ghosts of Avalon Heights",
        author: "Jackson Reed",
        summary: "A family moves into a historic mansion with a tragic past, and soon discovers the ghosts within have unfinished business that threatens their safety.",
        review: "A chilling and atmospheric ghost story that masterfully combines suspense with emotional depth."
      },
      {
        title: "The Alchemist’s Legacy",
        author: "Emma Collins",
        summary: "An ancient alchemical manuscript leads a young scholar on a quest for a legendary philosopher’s stone, revealing hidden truths about her own past.",
        review: "A captivating blend of historical intrigue, alchemy, and personal discovery."
      },
      {
        title: "The Keeper of Shadows",
        author: "Oliver Banks",
        summary: "A reclusive librarian guards a secret collection of forbidden books that hold the key to stopping an impending darkness threatening the world.",
        review: "An atmospheric and thrilling story about knowledge, power, and the battle against encroaching darkness."
      },
      {
        title: "The Celestial Compass",
        author: "Nina Brooks",
        summary: "A celestial navigator finds a magical compass that can guide her to otherworldly realms, leading to a quest that will test her courage and resolve.",
        review: "A mesmerizing adventure filled with wonder, discovery, and the magic of the cosmos."
      },
      {
        title: "The Sorcerer’s Apprentice",
        author: "Benjamin Blake",
        summary: "An aspiring sorcerer’s apprentice accidentally unleashes a series of magical disasters and must find a way to undo the chaos before it’s too late.",
        review: "A delightful and fast-paced fantasy that combines humor, magic, and a coming-of-age journey."
      },
      {
        title: "The Echo of Forgotten Lands",
        author: "Mia Carter",
        summary: "A geologist discovers a hidden land beneath the Earth's surface, revealing ancient civilizations and long-forgotten secrets that challenge everything known about history.",
        review: "An exhilarating exploration of ancient mysteries and hidden worlds, filled with adventure and wonder."
      },
      {
        title: "The Lost Tapestry",
        author: "Virginia Woolf",
        summary: "A woman's journey of self-discovery amidst the chaos of World War I.",
        review: "A poignant and introspective exploration of love, loss, and the human spirit."
      },
      {
        title: "Whispers in the Wind",
        author: "Emily Dickinson",
        summary: "A collection of poems that delve into themes of nature, death, and the mysteries of existence.",
        review: "A powerful and evocative exploration of the human condition through the lens of Dickinson's unique perspective."
      },
      {
        title: "The Scarlet Thread",
        author: "Anne Sexton",
        summary: "A woman's struggle with addiction and mental illness, set against the backdrop of the 1960s counterculture.",
        review: "A raw and unflinching exploration of the dark side of the American Dream."
      },
      {
        title: "Echoes of the Past",
        author: "Elizabeth Bishop",
        summary: "A collection of poems that explore themes of isolation, loss, and the search for meaning in life.",
        review: "A hauntingly beautiful exploration of the human experience."
      },
      {
        title: "The Glass House",
        author: "Sylvia Plath",
        summary: "A woman's descent into madness as she struggles to conform to societal expectations.",
        review: "A chilling and disturbing exploration of the mind's fragility."
      },
      {
        title: "The Midnight Garden",
        author: "Edna St. Vincent Millay",
        summary: "A collection of poems that celebrate love, beauty, and the fleeting nature of life.",
        review: "A lyrical and evocative exploration of the human experience."
      },
      {
        title: "The Haunted House",
        author: "Marianne Moore",
        summary: "A collection of poems that explore themes of nature, art, and the human condition.",
        review: "A thought-provoking and intellectually stimulating exploration of the world around us."
      },
      {
        title: "The Shadowed Room",
        author: "Dorothy Parker",
        summary: "A collection of short stories that explore themes of love, loss, and disillusionment.",
        review: "A witty and cynical exploration of the human condition."
      },
      {
        title: "The Lonely Heart",
        author: "Sara Teasdale",
        summary: "A collection of poems that explore themes of love, loss, and the search for meaning in life.",
        review: "A poignant and heartfelt exploration of the human experience."
      },
      {
        title: "The Haunted Forest",
        author: "Louise Glück",
        summary: "A collection of poems that explore themes of nature, family, and the human condition.",
        review: "A powerful and evocative exploration of the human experience."
      },
      {
        title: "The Starlit Night",
        author: "Amy Lowell",
        summary: "A collection of poems that explore themes of love, beauty, and the fleeting nature of life.",
        review: "A lyrical and evocative exploration of the human experience."
      },
      {
        title: "The Crimson Tide",
        author: "Hilda Doolittle",
        summary: "A collection of poems that explore themes of nature, love, and the human condition.",
        review: "A powerful and evocative exploration of the human experience."
      },
      {
        title: "The Whispering Woods",
        author: "May Swenson",
        summary: "A collection of poems that explore themes of nature, technology, and the human condition.",
        review: "A thought-provoking and intellectually stimulating exploration of the world around us."
      },
      {
        title: "The Golden Dawn",
        author: "Marianne Moore",
        summary: "A collection of poems that explore themes of nature, art, and the human condition.",
        review: "A thought-provoking and intellectually stimulating exploration of the world around us."
      },
      {
        title: "The Silver Moon",
        author: "Elizabeth Bishop",
        summary: "A collection of poems that explore themes of isolation, loss, and the search for meaning in life.",
        review: "A hauntingly beautiful exploration of the human experience."
      },
      {
        title: "The Emerald Sea",
        author: "Edna St. Vincent Millay",
        summary: "A collection of poems that celebrate love, beauty, and the fleeting nature of life.",
        review: "A lyrical and evocative exploration of the human experience."
      },
      {
        title: "The Sapphire Sky",
        author: "Dorothy Parker",
        summary: "A collection of short stories that explore themes of love, loss, and disillusionment.",
        review: "A witty and cynical exploration of the human condition."
      },
      {
        title: "The Ruby Heart",
        author: "Sara Teasdale",
        summary: "A collection of poems that explore themes of love, loss, and the search for meaning in life.",
        review: "A poignant and heartfelt exploration of the human experience."
      },
      {
        title: "The Topaz Sun",
        author: "Louise Glück",
        summary: "A collection of poems that explore themes of nature, family, and the human condition.",
        review: "A powerful and evocative exploration of the human experience."
      },
      {
        title: "The Amethyst Dreams",
        author: "Amy Lowell",
        summary: "A collection of poems that explore themes of love, beauty, and the fleeting nature of life.",
        review: "A lyrical and evocative exploration of the human experience."
      }
  ];
  
const bookOnTheFly = ()=>{
    const bookSavePromises = books.map((book, index)=>{
        return new Book({
            ...book,
            price: Math.floor(Math.random() * (140 - 20 + 1)) + 20,
            rating: Math.floor(Math.random() * (5 - 1 + 1)) + 1,
            imgPath: `https://www.picsum.photos/id/${index+101}/200/300`,
        }).save();
    })
    return Promise.all(bookSavePromises);
}

export const initBooks = async ()=>{
    await bookOnTheFly();
    console.log('books saved');
}



// const save20BooksToDB = ()=>{
//     return Promise.all([
//         new Book({
//             title: "רעם אילם",
//             author: "יהודה ניב",
//             price: 77.90,
//             imgPath: "https://images-evrit.yit.co.il/Images/Products/newcovers/raam_master.jpg",
//             summary: "רעם הוא בחור אילם שמתעורר יום אחד לצד גופתה המדממת של בחורה שהוא מעולם לא ראה, במקום שהוא לא מכיר. הוא מגלה כי תשע שנים חלפו מחייו, אך הוא אינו זוכר דבר ממה שקרה בהן. כשהוא נרדף על ידי עבר אפל ומאיים, רעם האילם נמלט מהחוק ויוצא למסע הרפתקני, קצבי ומותח בעקבות האמת, בעקבות הזיכרון ובעקבות אהבת חייו.\n\nבספרו מספק יהודה ניב הצצה לעולמו של גיבור שנון ובוטה בעל הבנה עמוקה של העולם שמסביב. גישתו המקורית לחיים מעניקה לו דרך להתמודד עם מום שמונע ממנו לדבר אך לא מונע ממנו לחשוב.\n\nרעם אילם הוא פרויקט ייחודי, שבו משלב האמן יהודה ניב את כישרונותיו המגוונים ליצירה אחת. את הספר מלווה אלבום מוזיקלי המבוסס על פרקי הספר ומציג את הסיפור מנקודת מבטה של דמות אפלה המתגלה לאורך העלילה. בספר מופיעים ציורים שאף הם פרי יצירתו של המחבר.",
//             review: "יצירת מופת שתקח את הקורא למחוזות חדשים של אימה מתח וצחוק, מומלץ בכל פה",
//             rating: 5,
//         }).save(),

//         new Book({
//             title: "מוקף באידיוטים",
//             author: "תומס אריקסון",
//             price: 98.00,
//             imgPath: "https://www.steimatzky.co.il/pub/media/catalog/product/cache/054fd023ed4beb824f3143faa6fcc008/0/1/011374400-1635767704318358.jpg",
//             summary: "פגישה עם איש עסקים זועם, שהיה בטוח שכל העובדים שלו אידיוטים, הביאה את חוקר ההתנהגות תומס אריקסון להשקיע שנים במחקר מאומץ, שבמהלכו התברר לו שבני האדם נחלקים לארבעה טיפוסי התנהגות עיקריים:\n\nמוקף באידיוטים מתאר את המאפיינים הבולטים של ארבעת הטיפוסים ואת הדרך הנכונה לתקשר איתם. הוא מסביר כיצד נוכל להתאים את עצמנו לכל טיפוס התנהגות ולהשפיע עליו (או להוציא אותו מדעתו), מספר על שיטות לשיפור שפת הגוף והתקשורת שלנו עם הבוס והעמיתים לעבודה, וגם מדגים איך תזהו מי אתם ותבינו טוב יותר את עצמכם.\n\nתומס אריקסון הוא חוקר התנהגות ומומחה לתקשורת שוודי. לצד עבודתו עם קבוצות מנהלים, והרצאות שהוא נושא בכל רחבי אירופה, פרסם אריקסון ספרים אחדים על תקשורת והתנהגות אנושית. ספרו מוקף באידיוטים תורגם ליותר מעשרים שפות ונמכר בקרוב לשני מיליון עותקים.",
//             review: "לתומס אריקסון יש דרך ייחודית לשחק לקורא במוח באופן שישאיר אותו פעור פה ומשתוקק לעוד",
//             rating: 4,
//         }).save(),

//         new Book({
//             title: "ארבע ההסכמות",
//             author: "דון מיגל רואיס",
//             price: 74.00,
//             imgPath: "https://www.steimatzky.co.il/pub/media/catalog/product/cache/054fd023ed4beb824f3143faa6fcc008/0/1/013370973-1714896993267157.jpg",
//             summary: "בחברה הצינית והתועלתנית שלנו כיום כמעט ואין מקום לרוחניות, למרות שכולנו זקוקים לה מאוד.\n\nרוחניות הפכה כמעט להיות כמעט מילה גסה מחוץ לחוגים מאוד מסויימים שלא מתאימים לכולם.\n\nאנחנו כמעט ולא עוסקים ברוחניות בחיי היומיום ובקושי דואגים להזין את הנפש הצמאה שלנו.\n\nדון מיגל רואיס, בן למשפחת מרפאים שמאניים שחווה חווייה חוץ גופית בעקבות תאונה, קורא לנו לאתגר את התפיסות שלנו לגבי העצמי שלנו, הנפש שלנו והקשר שלנו עם היקום המקיף אותנו. בספרו ”ארבע ההסכמות” הוא מנגיש עבורנו את חוכמתו העתיקה של הידע הטולטקי - אורח חיים המצטיין בזמינות גבוהה של אושר ואהבה.\n\nהוא מלמד אותנו על האמונות המגבילות, מהיכן הן נובעות, כיצד הן מייסרות אותנו ומשביתות את השמחה והיצירתיות שבנו, ומנחה אותנו כיצד לנטרל אותן.\n\nהספר פורש בספרו ארבע הסכמות שאנו צריכים שעלינו לעשות עם עצמנו על מנת להתחיל לחיות טוב יותר, לשפר את בריאותנו המנטלית והרוחנית וליצור לעצמנו יציבות בלב עולם סוער.\n\nהתובנות שלו עוסקות בכוחן של המילים, בשחרור מהתחושה שהכול קשור בנו ומלהניח הנחות, ולעשות תמיד את הכי טוב שרק נוכל.\n\nאומר דון מיגל רואיס, ובספר הזה הוא מעניק לנו את הכוח לחלום ומניח בידינו את המפתח להגשמה העצמית וההתפתחות הרוחנית שנזקקנו לה.",
//             review: "לא כל אחד יכול לכתוב יצירה כזאת ולא כל אחד יזכה במהלך חייו לקרוא טקסט כל כך מאלף, חובת קריאה",
//             rating: 5
//         }).save(),

//         new Book({
//             title: "להתאהב ולהשאר בחיים",
//             author: "שרון צוהר",
//             price: 98.00,
//             imgPath: "https://www.steimatzky.co.il/pub/media/catalog/product/cache/054fd023ed4beb824f3143faa6fcc008/0/1/012010275-16753459451015534.jpg",
//             summary: "לא חיפשתי את האביר על הסוס הלבן, לא חיפשתי את הגבר שישנה את כל עולמי. ריבאונד, זה כל מה שזה היה אמור להיות, מישהו שיעזור לי לשכוח, להתקדם הלאה. ואז פגשתי את אלמוג אלבז וכל התוכניות השתנו. חשבתי שאנחנו פועלים לפי חוקים מסוימים, ברורים מאוד, אבל נראה שאלמוג פועל לפי סט חוקים משלו.\n\nכמה אירוני זה לפגוש את אשת חלומותיך בחתונה, ללכת איתה הביתה ולגלות שזו אחותו הקטנה של החבר הכי טוב שלך?\n\nלילה אחד, זה היה הדיל. אף אחת מעולם לא קיבלה יותר מזה, עד שהיא הגיעה. עמדתי מהצד וראיתי את החברים שלי נופלים בזה אחר זה, הבטחתי לעצמי שלעולם לא אאפשר לזה לקרות גם לי, ואז רותי התרסקה לתוך החיים שלי כמו מטאור ואפילו לא ראיתי את זה בא.\n\nלהתאהב ולהישאר בחיים מאת סופרת רבי המכר שרון צוהר הוא סיפור נוסף בסדרת כשהגלים מתחזקים, סיפור אהבה מעולם הצבא ושייטת 13. הספרים שקדמו לו בסדרה: כשהגלים מתחזקים ודואט חמש אצבעות על היעד.",
//             review: "ספר בינוני ביותר, הייתי משאיר אותו על המדף, בעצם הייתי שם אותו כמעצור לדלת או אפילו משתמש בו כחומר בערה ללג בעומר",
//             rating: 2
//         }).save(),

//         new Book({
//             title: "כראמל 8 גברת בלום שולטת",
//             author: "מאירה ברנע גולדברג",
//             price: 84.00,
//             imgPath: "https://www.steimatzky.co.il/pub/media/catalog/product/cache/054fd023ed4beb824f3143faa6fcc008/0/1/011374903-1698220042604439.jpg",
//             summary: "גברת בלום קרובה להיות השליטה היחידה על הטירה של ארתור ג’רום, על המפעלים ועל החתול המופלא כפי שתמיד רצתה – והשלטון כל כך הולם אותה! אלא שלפתע מופיעה בטירה גברת בלום נוספת – וגם היא מרושעת ושתלטנית... ספר חדש ומסעיר בסדרה האהובה שגרמה לאלפי ילדים להישאר ערים בלילה ולהתאהב מחדש בקריאה.",
//             review: "דור האלפא יקח אותנו לאבדון מה זה הספר פח אשפה הזה בעעע לאן הדרדרנו כחברה",
//             rating: 1
//         }).save(),

//         new Book({
//             title: "כשהגלים מתחזקים",
//             author: "שרון צוהר",
//             price: 98.00,
//             imgPath: "https://www.steimatzky.co.il/pub/media/catalog/product/cache/054fd023ed4beb824f3143faa6fcc008/0/1/011051081-1635697355480829.jpg",
//             summary: "מורן סתיו נלחמה במשך כל שירותה הצבאי עד שניתנה לה ההזדמנות להצטרף למסלול ההכשרה של הקומנדו הימי.\n\nגורמי הצבא ומשפחתה לא ממש תומכים בה, אבל היא נחושה להוכיח לכולם שאישה יכולה לצלוח את המסלול הצבאי הכי קשה שיש.\n\nהיחידה הזו התנהלה על טהרת הטסטוסטרון מאז ומעולם, והוא יעשה הכל כדי להוכיח למורן שאין כאן מקום לבחורות. המצב המורכב עומד להסתבך אפילו יותר ולהציב בפניהם עוד המון קשיים והתמודדויות.\n\nהכי חשוב להתמודד עם הכל בקור רוח ובמקצועיות – ביחידה הזו אין מקום לרגש....\n\n",
//             review: "אני לא חושב שיש מישהו שיהנה מהגיבוב שטויות האלה, קראתי מדריך לשימוש בטיפות עיניים שהיה יותר מותח",
//             rating: 1
//         }).save(),

//         new Book({
//             title: "השקעות לעצלנים",
//             author: "תמיר מנדובסקי",
//             price: 89.00,
//             imgPath: "https://www.steimatzky.co.il/pub/media/catalog/product/cache/054fd023ed4beb824f3143faa6fcc008/0/1/011251352-164502225375980.jpg",
//             summary: "טיול מאורגן בג’ונגל הפיננסי שיפרוש בפניכם את עקרונות ההשקעה, אבל כזו שלא מצריכה ידע קודם או הבנה בכלכלה. הזדמנות מעולה להבין את פילוסופיית ההשקעה האחראית שסייעה לקוראים רבים ליהנות מרווחי החברות המצליחות בעולם.",
//             review: "ספר שאפשר לסכם את כולו במשפט אחד, והוא: פשוט שימו את הכסף בבורסה ותשכחו ממנו ל20 שנה, ועדיף שגם תשכחו מהספר הזה",
//             rating: 1
//         }).save(),

//         new Book({
//             title: "הרגלים אטומיים",
//             author: "ג'יימס קליר",
//             price: 118.00,
//             imgPath: "https://www.steimatzky.co.il/pub/media/catalog/product/cache/054fd023ed4beb824f3143faa6fcc008/0/1/013621301-1635788041597070.jpg",
//             summary: "איך נשבור הרגלים רעים ונטמיע הרגלים טובים? איך נתגבר על חוסר מוטיבציה וכוח רצון? איך נחזור למסלול לאחר שסטינו מהדרך? הנה הספר שיסייע לכם בכל אלו. כזה שמבוסס על מחקרים בביולוגיה, פסיכולוגיה ומדעי המוח, שמתאגדים לכדי מדריך קל ונגיש שיאפשר לכם להיפטר מכל מה שמשאיר אתכם מאחור ולעלות על השביל להצלחה.",
//             review: "ספר נצחי ברמה של חשוב והתעשר או כיצד תרכוש ידידים השפעה, לקרוא אותו שוב ושוב ולקנות אותו לעצמכם ביומולדת",
//             rating: 5
//         }).save(),

//         new Book({
//             title: "חוכמת האדישות",
//             author: "מארק מנסון",
//             price: 98.00,
//             imgPath: "https://www.steimatzky.co.il/pub/media/catalog/product/cache/054fd023ed4beb824f3143faa6fcc008/0/1/012301743-1718708642862254.jpg",
//             summary: "ככל הנראה ספר העזרה העצמית הכי חתרני, חריג, מצחיק וייחודי שתקראו. כזה שלא דוחק בכם לאמץ ראיית עולם חיובית ומאושרת, אלא דווקא להעריך את המאבקים בחיים כי הם אלו שמעניקים להם משמעות, ומשמעות היא השאיפה האמיתית, הרבה יותר מאושר.\n\nעוף מוזר בתעשיית ספרי העזרה העצמית שהפך לרב מכר עצום שלגמרי שווה להתעכב עליו.\n\n",
//             review: "ספר מרתק שאומר דברים מרתקים על אנשים מרתקים וכתוב בצורה מרתקת על ידי סופר מרתק ",
//             rating: 4
//         }).save(),

//         new Book({
//             title: "גריט",
//             author: "אנג'לה דאקוורת",
//             price: 98.00,
//             imgPath: "https://www.steimatzky.co.il/pub/media/catalog/product/cache/054fd023ed4beb824f3143faa6fcc008/0/1/013621031-1635787656431825.jpg",
//             summary: "בגריט, שהגיע בן לילה לרשימת רבי המכר של הניו יורק טיימס, מראה הפסיכולוגית פורצת הדרך אנג’לה דאקוורת לכל מי ששואף להצליח – הורים, תלמידים, מחנכים, ספורטאים ואנשי עסקים או בעצם כל אחד – שהסוד מאחורי הצלחות יוצאות דופן אינו הכישרון שאנו ניחנים בו אלא שילוב מיוחד של להט והתמדה שאותו היא מכנה\n\nבגריט לוקחת פרופ’ דאקוורת את קוראיה לשטח ומפגישה אותם בין השאר עם צוערים הנאבקים לשרוד במסע המפרך שבו מתחילה הכשרתם באקדמיה האמריקאית לקצינים, עם מורים בבתי ספר קשים במיוחד ועם זוכי תחרות האיות הלאומית בארצות הברית. היא מצביעה על תובנות מרתקות מן ההיסטוריה, מראה מה ניתן ללמוד מניסויים מודרניים על התנאים שבהם מושגים ביצועי שיא, ומפרטת את מסקנותיה מראיונות שערכה עם עשרות אנשים שהגיעו להישגים יוצאי דופן \n\nהסיפורים האישיים והתובנות בספר זה אינם רק מרתקים אלא יכולים לשנות את חייהם של אנשים. גריט מגלה מדוע הצלחתנו תלויה במה שאנחנו חושבים כאשר אנו נכשלים",
//             review: "יש רגעים בחיים שחץ אחד מדויק פוגע במרכז מטרה וכשהמטרה הזו היא המטרה של חיינו אנו עומדים נפעמים",
//             rating: 5
//         }).save(),

//         new Book({
//             title: "המוסד בטהרן",
//             author: "יהודה ניב",
//             price: 86.00,
//             imgPath: "https://www.steimatzky.co.il/pub/media/catalog/product/cache/054fd023ed4beb824f3143faa6fcc008/0/1/011325229-1710055912557069.jpg",
//             summary: "רעם הוא בחור אילם שמתעורר יום אחד לצד גופתה המדממת של בחורה שהוא מעולם לא ראה, במקום שהוא לא מכיר. הוא מגלה כי תשע שנים חלפו מחייו, אך הוא אינו זוכר דבר ממה שקרה בהן. כשהוא נרדף על ידי עבר אפל ומאיים, רעם האילם נמלט מהחוק ויוצא למסע הרפתקני, קצבי ומותח בעקבות האמת, בעקבות הזיכרון ובעקבות אהבת חייו.\n\nבספרו מספק יהודה ניב הצצה לעולמו של גיבור שנון ובוטה בעל הבנה עמוקה של העולם שמסביב. גישתו המקורית לחיים מעניקה לו דרך להתמודד עם מום שמונע ממנו לדבר אך לא מונע ממנו לחשוב.\n\nרעם אילם הוא פרויקט ייחודי, שבו משלב האמן יהודה ניב את כישרונותיו המגוונים ליצירה אחת. את הספר מלווה אלבום מוזיקלי המבוסס על פרקי הספר ומציג את הסיפור מנקודת מבטה של דמות אפלה המתגלה לאורך העלילה. בספר מופיעים ציורים שאף הם פרי יצירתו של המחבר.",
//             review: "יצירת מופת שתקח את הקורא למחוזות חדשים של אימה מתח וצחוק, מומלץ בכל פה",
//             rating: 5,
//         }).save(),

        
//         new Book({
//             title: "אבא עשיר אבא עני",
//             author: "תומס אריקסון",
//             price: 98.00,
//             imgPath: "https://www.steimatzky.co.il/pub/media/catalog/product/cache/054fd023ed4beb824f3143faa6fcc008/0/1/013621380-1645612420742515.jpg",
//             summary: "פגישה עם איש עסקים זועם, שהיה בטוח שכל העובדים שלו אידיוטים, הביאה את חוקר ההתנהגות תומס אריקסון להשקיע שנים במחקר מאומץ, שבמהלכו התברר לו שבני האדם נחלקים לארבעה טיפוסי התנהגות עיקריים:\n\nמוקף באידיוטים מתאר את המאפיינים הבולטים של ארבעת הטיפוסים ואת הדרך הנכונה לתקשר איתם. הוא מסביר כיצד נוכל להתאים את עצמנו לכל טיפוס התנהגות ולהשפיע עליו (או להוציא אותו מדעתו), מספר על שיטות לשיפור שפת הגוף והתקשורת שלנו עם הבוס והעמיתים לעבודה, וגם מדגים איך תזהו מי אתם ותבינו טוב יותר את עצמכם.\n\nתומס אריקסון הוא חוקר התנהגות ומומחה לתקשורת שוודי. לצד עבודתו עם קבוצות מנהלים, והרצאות שהוא נושא בכל רחבי אירופה, פרסם אריקסון ספרים אחדים על תקשורת והתנהגות אנושית. ספרו מוקף באידיוטים תורגם ליותר מעשרים שפות ונמכר בקרוב לשני מיליון עותקים.",
//             review: "לתומס אריקסון יש דרך ייחודית לשחק לקורא במוח באופן שישאיר אותו פעור פה ומשתוקק לעוד",
//             rating: 4,
//         }).save(),

//         new Book({
//             title: "כוחו של הרגע הזה",
//             author: "דון מיגל רואיס",
//             price: 74.00,
//             imgPath: "https://www.steimatzky.co.il/pub/media/catalog/product/cache/054fd023ed4beb824f3143faa6fcc008/0/1/013371203-1635785859468897.jpg",
//             summary: "בחברה הצינית והתועלתנית שלנו כיום כמעט ואין מקום לרוחניות, למרות שכולנו זקוקים לה מאוד.\n\nרוחניות הפכה כמעט להיות כמעט מילה גסה מחוץ לחוגים מאוד מסויימים שלא מתאימים לכולם.\n\nאנחנו כמעט ולא עוסקים ברוחניות בחיי היומיום ובקושי דואגים להזין את הנפש הצמאה שלנו.\n\nדון מיגל רואיס, בן למשפחת מרפאים שמאניים שחווה חווייה חוץ גופית בעקבות תאונה, קורא לנו לאתגר את התפיסות שלנו לגבי העצמי שלנו, הנפש שלנו והקשר שלנו עם היקום המקיף אותנו. בספרו ”ארבע ההסכמות” הוא מנגיש עבורנו את חוכמתו העתיקה של הידע הטולטקי - אורח חיים המצטיין בזמינות גבוהה של אושר ואהבה.\n\nהוא מלמד אותנו על האמונות המגבילות, מהיכן הן נובעות, כיצד הן מייסרות אותנו ומשביתות את השמחה והיצירתיות שבנו, ומנחה אותנו כיצד לנטרל אותן.\n\nהספר פורש בספרו ארבע הסכמות שאנו צריכים שעלינו לעשות עם עצמנו על מנת להתחיל לחיות טוב יותר, לשפר את בריאותנו המנטלית והרוחנית וליצור לעצמנו יציבות בלב עולם סוער.\n\nהתובנות שלו עוסקות בכוחן של המילים, בשחרור מהתחושה שהכול קשור בנו ומלהניח הנחות, ולעשות תמיד את הכי טוב שרק נוכל.\n\nאומר דון מיגל רואיס, ובספר הזה הוא מעניק לנו את הכוח לחלום ומניח בידינו את המפתח להגשמה העצמית וההתפתחות הרוחנית שנזקקנו לה.",
//             review: "לא כל אחד יכול לכתוב יצירה כזאת ולא כל אחד יזכה במהלך חייו לקרוא טקסט כל כך מאלף, חובת קריאה",
//             rating: 5
//         }).save(),

//         new Book({
//             title: "השראה יומית",
//             author: "שרון צוהר",
//             price: 98.00,
//             imgPath: "https://www.steimatzky.co.il/pub/media/catalog/product/cache/054fd023ed4beb824f3143faa6fcc008/0/1/010072181-1635689259295225.jpg",
//             summary: "לא חיפשתי את האביר על הסוס הלבן, לא חיפשתי את הגבר שישנה את כל עולמי. ריבאונד, זה כל מה שזה היה אמור להיות, מישהו שיעזור לי לשכוח, להתקדם הלאה. ואז פגשתי את אלמוג אלבז וכל התוכניות השתנו. חשבתי שאנחנו פועלים לפי חוקים מסוימים, ברורים מאוד, אבל נראה שאלמוג פועל לפי סט חוקים משלו.\n\nכמה אירוני זה לפגוש את אשת חלומותיך בחתונה, ללכת איתה הביתה ולגלות שזו אחותו הקטנה של החבר הכי טוב שלך?\n\nלילה אחד, זה היה הדיל. אף אחת מעולם לא קיבלה יותר מזה, עד שהיא הגיעה. עמדתי מהצד וראיתי את החברים שלי נופלים בזה אחר זה, הבטחתי לעצמי שלעולם לא אאפשר לזה לקרות גם לי, ואז רותי התרסקה לתוך החיים שלי כמו מטאור ואפילו לא ראיתי את זה בא.\n\nלהתאהב ולהישאר בחיים מאת סופרת רבי המכר שרון צוהר הוא סיפור נוסף בסדרת כשהגלים מתחזקים, סיפור אהבה מעולם הצבא ושייטת 13. הספרים שקדמו לו בסדרה: כשהגלים מתחזקים ודואט חמש אצבעות על היעד.",
//             review: "ספר בינוני ביותר, הייתי משאיר אותו על המדף, בעצם הייתי שם אותו כמעצור לדלת או אפילו משתמש בו כחומר בערה ללג בעומר",
//             rating: 2
//         }).save(),
        
//         new Book({
//             title: "חשוב והתעשר",
//             author: "מאירה ברנע גולדברג",
//             price: 84.00,
//             imgPath: "https://www.steimatzky.co.il/pub/media/catalog/product/cache/054fd023ed4beb824f3143faa6fcc008/0/1/012302309-1635784148421335.jpg",
//             summary: "גברת בלום קרובה להיות השליטה היחידה על הטירה של ארתור ג’רום, על המפעלים ועל החתול המופלא כפי שתמיד רצתה – והשלטון כל כך הולם אותה! אלא שלפתע מופיעה בטירה גברת בלום נוספת – וגם היא מרושעת ושתלטנית... ספר חדש ומסעיר בסדרה האהובה שגרמה לאלפי ילדים להישאר ערים בלילה ולהתאהב מחדש בקריאה.",
//             review: "דור האלפא יקח אותנו לאבדון מה זה הספר פח אשפה הזה בעעע לאן הדרדרנו כחברה",
//             rating: 1
//         }).save(),

//         new Book({
//             title: "לצאת מהמבוך",
//             author: "שרון צוהר",
//             price: 98.00,
//             imgPath: "https://www.steimatzky.co.il/pub/media/catalog/product/cache/054fd023ed4beb824f3143faa6fcc008/0/1/013621236-1635787937662921.jpg",
//             summary: "מורן סתיו נלחמה במשך כל שירותה הצבאי עד שניתנה לה ההזדמנות להצטרף למסלול ההכשרה של הקומנדו הימי.\n\nגורמי הצבא ומשפחתה לא ממש תומכים בה, אבל היא נחושה להוכיח לכולם שאישה יכולה לצלוח את המסלול הצבאי הכי קשה שיש.\n\nהיחידה הזו התנהלה על טהרת הטסטוסטרון מאז ומעולם, והוא יעשה הכל כדי להוכיח למורן שאין כאן מקום לבחורות. המצב המורכב עומד להסתבך אפילו יותר ולהציב בפניהם עוד המון קשיים והתמודדויות.\n\nהכי חשוב להתמודד עם הכל בקור רוח ובמקצועיות – ביחידה הזו אין מקום לרגש....\n\n",
//             review: "אני לא חושב שיש מישהו שיהנה מהגיבוב שטויות האלה, קראתי מדריך לשימוש בטיפות עיניים שהיה יותר מותח",
//             rating: 1
//         }).save(),

//         new Book({
//             title: "המדריך למשקיע המתחיל",
//             author: "תמיר מנדובסקי",
//             price: 89.00,
//             imgPath: "https://www.steimatzky.co.il/pub/media/catalog/product/cache/054fd023ed4beb824f3143faa6fcc008/0/1/013730121-1635788351429975.jpg",
//             summary: "טיול מאורגן בג’ונגל הפיננסי שיפרוש בפניכם את עקרונות ההשקעה, אבל כזו שלא מצריכה ידע קודם או הבנה בכלכלה. הזדמנות מעולה להבין את פילוסופיית ההשקעה האחראית שסייעה לקוראים רבים ליהנות מרווחי החברות המצליחות בעולם.",
//             review: "ספר שאפשר לסכם את כולו במשפט אחד, והוא: פשוט שימו את הכסף בבורסה ותשכחו ממנו ל20 שנה, ועדיף שגם תשכחו מהספר הזה",
//             rating: 1
//         }).save(),

//         new Book({
//             title: "מועדון החמש בבוקר",
//             author: "ג'יימס קליר",
//             price: 118.00,
//             imgPath: "https://www.steimatzky.co.il/pub/media/catalog/product/cache/054fd023ed4beb824f3143faa6fcc008/0/1/010073808-1635691015315909.jpg",
//             summary: "איך נשבור הרגלים רעים ונטמיע הרגלים טובים? איך נתגבר על חוסר מוטיבציה וכוח רצון? איך נחזור למסלול לאחר שסטינו מהדרך? הנה הספר שיסייע לכם בכל אלו. כזה שמבוסס על מחקרים בביולוגיה, פסיכולוגיה ומדעי המוח, שמתאגדים לכדי מדריך קל ונגיש שיאפשר לכם להיפטר מכל מה שמשאיר אתכם מאחור ולעלות על השביל להצלחה.",
//             review: "ספר נצחי ברמה של חשוב והתעשר או כיצד תרכוש ידידים השפעה, לקרוא אותו שוב ושוב ולקנות אותו לעצמכם ביומולדת",
//             rating: 5
//         }).save(),

//         new Book({
//             title: "להתחיל עם למה",
//             author: "מארק מנסון",
//             prevPrice: 98.00,
//             imgPath: "https://www.steimatzky.co.il/pub/media/catalog/product/cache/054fd023ed4beb824f3143faa6fcc008/0/1/011140802-1635700185350992.jpg",
//             summary: "ככל הנראה ספר העזרה העצמית הכי חתרני, חריג, מצחיק וייחודי שתקראו. כזה שלא דוחק בכם לאמץ ראיית עולם חיובית ומאושרת, אלא דווקא להעריך את המאבקים בחיים כי הם אלו שמעניקים להם משמעות, ומשמעות היא השאיפה האמיתית, הרבה יותר מאושר.\n\nעוף מוזר בתעשיית ספרי העזרה העצמית שהפך לרב מכר עצום שלגמרי שווה להתעכב עליו.\n\n",
//             review: "ספר מרתק שאומר דברים מרתקים על אנשים מרתקים וכתוב בצורה מרתקת על ידי סופר מרתק ",
//             rating: 4
//         }).save(),

//         new Book({
//             title: "גריט",
//             author: "הנזיר שמכר את הפרארי שלו",
//             price: 98.00,
//             imgPath: "https://www.steimatzky.co.il/pub/media/catalog/product/cache/054fd023ed4beb824f3143faa6fcc008/0/1/010071767-1635689135854766.jpg",
//             summary: "בגריט, שהגיע בן לילה לרשימת רבי המכר של הניו יורק טיימס, מראה הפסיכולוגית פורצת הדרך אנג’לה דאקוורת לכל מי ששואף להצליח – הורים, תלמידים, מחנכים, ספורטאים ואנשי עסקים או בעצם כל אחד – שהסוד מאחורי הצלחות יוצאות דופן אינו הכישרון שאנו ניחנים בו אלא שילוב מיוחד של להט והתמדה שאותו היא מכנה\n\nבגריט לוקחת פרופ’ דאקוורת את קוראיה לשטח ומפגישה אותם בין השאר עם צוערים הנאבקים לשרוד במסע המפרך שבו מתחילה הכשרתם באקדמיה האמריקאית לקצינים, עם מורים בבתי ספר קשים במיוחד ועם זוכי תחרות האיות הלאומית בארצות הברית. היא מצביעה על תובנות מרתקות מן ההיסטוריה, מראה מה ניתן ללמוד מניסויים מודרניים על התנאים שבהם מושגים ביצועי שיא, ומפרטת את מסקנותיה מראיונות שערכה עם עשרות אנשים שהגיעו להישגים יוצאי דופן \n\nהסיפורים האישיים והתובנות בספר זה אינם רק מרתקים אלא יכולים לשנות את חייהם של אנשים. גריט מגלה מדוע הצלחתנו תלויה במה שאנחנו חושבים כאשר אנו נכשלים",
//             review: "יש רגעים בחיים שחץ אחד מדויק פוגע במרכז מטרה וכשהמטרה הזו היא המטרה של חיינו אנו עומדים נפעמים",
//             rating: 5
//         }).save()
//     ]);
// }