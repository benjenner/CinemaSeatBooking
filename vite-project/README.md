# Projektbeskrivning

## Val av Teknik
Jag valde att göra projektet i TypeScript för att få mer kontroll i utvecklingsfasen av programmet. Det är inte jättemycket data som ska valideras men jag ville ändå prova på att använda TS.

## Komponentstruktur
Till en början strukturerade jag upp vilka komponenter jag ville att programmet skulle ha. Det tog lite tid att förstå hur komponenterna i React fungerar och hur jag skulle använda mig av dem. Jag valde att betrakta varje del av programmet där användaren behöver ta ett beslut som en komponent: att välja film, att välja säte, och att administrera de olika filmerna. Vidare hade jag kanske kunnat göra en komponent av `<select>`-elementet där användaren väljer film, då denna återanvänds i admin-formuläret.

## HTML- och CSS-anpassningar
Jag behöll medföljande HTML-element precis som de var. Det jag lade till var knappar för bokning och administration samt formulär för respektive knappar. Och, såklart, diverse funktionalitet som "onClick" och "onSubmit" med mera.

Jag anpassade min CSS något då det blev lite skavanker vid övergången till React, men till stor del behöll jag den styling som fanns.

## State Management
Jag ville först hantera de olika elementens states med Context API. Jag hade dock svårt att få det att fungera så jag bestämde mig för att istället använda mig av property drilling, vilket jag tyckte fungerade bra i detta projekt som inte är speciellt omfattande. Det var till en början lite svårt att greppa hur olika states skickas fram och tillbaka men efter ett tag satte sig även den logiken. Ett spännande sätt att programmera men jag kan helt klart se nackdelar vad gäller läsbarhet och "estetik" (det blir väldigt tjockt i App.tsx) om det tillämpas på en större applikation.

## Formulärvalidering
För att validera mina formulär använde jag mig av Formik. Formik verkade till en början svårt att greppa men jag förstod ganska snabbt att det gjorde koden väldigt kompakt när det kom till att validera men också att skicka in formuläret.

## Fortsatt Utveckling
Vidare vill jag göra vissa funktioner i datakomponenten generiska och repetera mindre kod, som till exempel URL i anropen.

## Sammanfattning
En rolig uppgift som stundtals gav mig rejäl huvudbry och huvudvärk men som jag också lärde mig massor av.
