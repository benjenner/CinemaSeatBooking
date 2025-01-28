
Jag valde att göra projektet i Typescripft för att få mer kontroll i utvecklingsfasen av programmet. Det är inte jättemycket data som ska valideras men jag ville ändå prova på att använda TS. 

Till en början strukturerade jag upp vilka komponenter jag ville att programmet skulle ha. Det tog lite tid att förstå hur komponenterna i React fungerar och hur jag skulle använda mig utav dom. Jag valde att betrakta varje del av programmet där användaren behöver ta ett beslut som en komponent. Att välja film, att välja säte, att administrera dom olika filmerna. Vidare hade jag kanske kunnat göra en komponent av <select>-elementet där användaren väljer film, då denna återanvänds i admin-formuläret.  


Jag behöll medföljande html-element precis som dom var. Det jag lade till var knappar för bokning samt administration och formulär för respektive knappar. Och, såklart, diverse funktionalitet som typ typ "onClick" och "onSubmit" osv. 

Jag anpassade min CSS något då det blev lite skavanker vid övergången till React. Men till stor del behöll jag den styling som fanns.

Jag ville först hantera dem olika elementens state's med context API. Jag hade dock svårt att få det att fungera så jag bestämde mig för att istället använda mig av property drilling, vilket jag tyckte fungerade bra i detta projekt som inte är speciellt omfattande. Det var till en början lite svårt att greppa hur olika state's skickas fram och tillbaka men efter ett tag satte sig även den logiken. Ett spännande sätt att programmera men jag kan helt klart se nackdelar vad gäller läsbarhet och "estetik (det blir väldigt tjockt i App.tsx)" om det tillämpas på en större applikation. 

För att validera mina formulär använde jag mig av Formik. Formik verkade till en början svårt att greppa men jag förstod ganska snabbt att det gjorde koden väldigt kompakt när det kom till att validera men också submit'a formuläret. 

En rolig uppgift som stuntals gav mig rejäl huvudbry och huvudvärk MEN som jag också lärde mig massor av. 
