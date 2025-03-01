
CREATE TABLE IF NOT EXISTS masterpiece.prof (
  codeprof VARCHAR(25) PRIMARY KEY,
  nom VARCHAR(25) NOT NULL,
  prenom VARCHAR(25) NOT NULL,
  grade VARCHAR(25) NOT NULL
);


CREATE TABLE IF NOT EXISTS masterpiece.salle (
  codesal VARCHAR(50) PRIMARY KEY,
  designation VARCHAR(50) NOT NULL
);


CREATE TABLE IF NOT EXISTS masterpiece.occuper (
  id SERIAL PRIMARY KEY,
  codeprof VARCHAR(25) NOT NULL,
  codesal VARCHAR(25) NOT NULL,
  date DATE NOT NULL,
  FOREIGN KEY (codeprof) REFERENCES prof(codeprof),
  FOREIGN KEY (codesal) REFERENCES salle(codesal)
);
