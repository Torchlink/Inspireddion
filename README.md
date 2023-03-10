# Inspireddion

## English

### A portfolio project by Marcus Strauch

In the scope of the Full-Stack Enginneer career path on codecademy.com i was prompted to write a Reddit app using React, Redux, and the Reddit JOSN API.
This is the resulting project, which i honestly had a lot of fun with, and which taught me a lot of lessons. Not only abut the material covered in the codecademy course, but also about quite a few problems i ran into that required solutions not covered by codecademy. 

### Wireframes

![Desktop Wireframe](./wireframe_window.webp)

![Mobile Wireframe](./wireframe_mobile.webp)

### Technologies used:

+ React
+ Redux
+ React Router
+ Framer Motion
    >Framer Motion is used sparingly for page transitions. I am currently working on getting more familiar and comfortable with this library, which offers lots of great-looking animation capabilities that could be used to great effect.
+ React Showdown
    >This project uses react-showdown to convert the markdown returned by the Reddit API to html. The output is used as-is, which is fairly good and reliable, but some further processing might help.
+ React Testing Library
    >I utilize React Testing Library instead of Enzyme for React and Redux unit and integration testing, since Enzyme seems to currently(February 2023) lag behind in development.

### Features

+ Display of images, videos, galleries, and text content
+ Can load content from any public subreddit
+ Can navigate to next and previous pages
+ Individual posts can be navigated to and displayed, top layer of comments is loaded
+ Searching Reddit works
+ Searching can be restricted to current subreddit
+ Top 100 subreddits are displayed in sidebar and can be nagivated to
+ The subreddit list can be filtered as well
+ Animated page transitions
+ Placeholder images displayed while content is loading

### Future work

+ Display of comments beyond the first layer
+ Load more subreddits in sidebar



## German

### Ein portfolio Projekt von Marcus Strauch

Im Rahmen des Full-Stack Engineer Karriere-Pfads auf codecademy.com wurde mir die Herausforderung gestellt, eine Reddit-app mit React, Redux und der Reddit JSON API zu entwickeln. Dies ist das Ergebnis dieser Aufgabe, mit welcher ich ehrlich gesagt viel Spa?? hatte. Im Laufe der Entwicklung habe ich vieles dazugelernt, nicht nur ??ber das Material welches im Ausma?? des codecademy-Kurses enthalten ist. Durch die Stolpersteine, welche bei einem Projekt mit so viel Freiheit und so wenig Vorgaben unweigerlich auftauchen, musste ich mir nat??rlich noch einiges selber beibrigen und L??sungen auf eigene Fast finden.

#### Eingesetzte Bibliotheken:

+ React
+ Redux
+ React Router
+ Framer Motion
    >Diese Bibliothek benutze ich zur??ckhaltend um Seiten??berg??nge, welche durch React-Router ausgel??st werden, zu animieren. Allerdings sch??pfe ich die M??glichkeiten dieser Bibliothek noch lange nicht aus, daher arbeite ich mich im Moment in die Funktionalit??t von Framer Motion ein.
+ React Showdown
    >Showdown ist eine sehr praktische Bibliothek, welche die Umwandlung von Markdown zu HTML erm??glicht. Da Reddit Textinhalte in der Form von Markdown zur Verf??gung stellt, benutze ich die react-showdown Bibliothek um die korrekte Darstellung von Text durch Umwandlung von Markdown zu JSX zu gew??hrleisten.
+ React Testing Library

### Features

+ Anzeige von Bildern, Videos, Gallerien, und Textinhalten
+ Jeder ??ffentliche subreddit kann beuscht werden
+ N??chte und verherige Seiten k??nnen besucht werden
+ Jeder individuelle Beitrag kann als detaillierte Seite besucht werden, dort werden dann auch Kommentare angezeigt
+ Suchfunktion funktioniert
+ Die Suchfunktion kann auf den aktuellen Subreddit beschr??nkt werden
+ Die Top 100 subreddits sind in der Seitenleiste angezeigt und k??nnen von dort besucht werden
+ Die subreddit-Liste kann gefiltert werden
+ Animierte Seiten??berg??nge
+ Platzhalter werden angezeigt w??hrend Inhalte laden

### Zuk??nftige Verbesserungen

+ Anzeige von Antoworten und Kommentar-Threads
+ Mehr als 100 subreddits in der Seitenleiste anzeigen