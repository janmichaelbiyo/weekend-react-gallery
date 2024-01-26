CREATE TABLE "gallery" (
  "id" SERIAL PRIMARY KEY,
  "url" VARCHAR,
  "title" VARCHAR,
  "description" TEXT,
  "likes" INTEGER DEFAULT 0
);

INSERT INTO "gallery" 
("url", "title", "description")
VALUES
('images/goat_small.jpg', 'Goat!', 'Photo of a goat taken at Glacier National Park.'),
('images/kinsey.png', 'Kinsey', 'The golden retriver husky'),
('images/Master_Sword.jpeg', 'Master Sword', 'The legendary heros sword the bane of darkness'),
('images/mushroom.jpg', 'Mushroom', 'Power mushroom can make user feel triple in size or so they say'),
('images/sad_Shredder.jpeg', 'Sad Shredder', 'Portrait of Foot clan leader after loosing to turtles again'),
('images/totoro.png', 'Totoro', 'The impresive forest deity/monster as least some would say');
  