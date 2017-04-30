/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 **/

'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).

const languageStrings = {
    'en-GB': {
        translation: {
            FACTS: [
                'A year on Mercury is just 88 days long.',
                'Despite being farther from the Sun, Venus experiences higher temperatures than Mercury.',
                'Venus rotates anti-clockwise, possibly because of a collision in the past with an asteroid.',
                'On Mars, the Sun appears about half the size as it does on Earth.',
                'Earth is the only planet not named after a god.',
                'Jupiter has the shortest day of all the planets.',
                'The Milky Way galaxy will collide with the Andromeda Galaxy in about 5 billion years.',
                'The Sun contains 99.86% of the mass in the Solar System.',
                'The Sun is an almost perfect sphere.',
                'A total solar eclipse can happen once every 1 to 2 years. This makes them a rare event.',
                'Saturn radiates two and a half times more energy into space than it receives from the sun.',
                'The temperature inside the Sun can reach 15 million degrees Celsius.',
                'The Moon is moving approximately 3.8 cm away from our planet every year.',
            ],
            SKILL_NAME: 'British Space Facts',
            GET_FACT_MESSAGE: "Here's your fact: ",
            HELP_MESSAGE: 'You can say tell me a space fact, or, you can say exit... What can I help you with?',
            HELP_REPROMPT: 'What can I help you with?',
            STOP_MESSAGE: 'Goodbye!',
        },
    },
    'en-US': {
        translation: {
            FACTS: [
                'In 1969, American Civil Rights Leader Martin Luther King gave this speech during the March on Washington For Jobs',
                'President John F Kennedy delivered this famous remark during his inauguration address',
                "This is an excerpt from President Franklin D. Roosevelt's first inaugural address",
                'On December 8, 1941, the day after Japanese forces attacked the American military base at Pearl Harbor, Hawaii, President' +
                'Franklin Roosevelt addressed Congress and asked for a Declaration of War with Japan',
                'The United States, at the order of President Harry S. Truman, dropped nuclear weapons on the Japanese cities of Hiroshima and'+
                'Nagasaki on August 6 and 9, 1945, respectively, during the final stage of World War II. President Truman addressed the nation after',
                'This quote is from President Lyndon B. Johnson’s speech at the signing of the voting rights act in 1965. The voting rights act prohibited racial discrimination in the voting process.',
                'This is President George W.Bush addressing the nation after The September 11 attacks, a series of four coordinated terrorist attacks' +
                'by the Islamic terrorist group al-Qaeda on the United States on the morning of Tuesday, September 11, 2001 that killed 2996 people.',
                'President Elect Barack Obama after he was the first African American elected as US American'
            ],
            AUDIO: ['<audio src="https://s3.amazonaws.com/arvarhack/mlk_speech_s3.mp3" />',
                '<audio src="https://s3.amazonaws.com/arvarhack/jfkquotes3.mp3" />',
                '<audio src="https://s3.amazonaws.com/arvarhack/fdrfear.mp3" />',
                '<audio src="https://s3.amazonaws.com/arvarhack/waronjapans3.mp3" />',
                '<audio src="https://s3.amazonaws.com/arvarhack/bombing.mp3" />',
                '<audio src="https://s3.amazonaws.com/arvarhack/presidentjohnsonrightforallamericanstovotes3.mp3"/>',
                '<audio src="https://s3.amazonaws.com/arvarhack/bush911s3.mp3" />',
                '<audio src="https://s3.amazonaws.com/arvarhack/obamaElections3.mp3" />'
            ],
            BOOKS: [
                'For more information about Martin Luther King junior, check out the book: Strength to love by martin luther king junior. Available for purchase on Amazon.com',
                'For more information about John F Kennedey, check out the book: An Unfinished Life: John F. Kennedy, 1917 - 1963 by  Robert Dallek. Available for purchase on Amazon.com',
                'For more information about Franklin D. Roosevelt, check out the book: F D R by Jean Edward Smith. Available for purchase on Amazon.com',
                'For more information about Japan and world war two, check out the book: Dawn of the Rising Sun: Why Did Japan Declare War on the World? by Kenneth Friedman. Available for purchase on Amazon.com',
                'For more information about the atomic bombngs of hiroshima, check out the book: The Atomic Bombings of Hiroshima and Nagasaki by The Manhattan Engineer District. Available for purchase on Amazon.com',
                'For more information about president johnson and the voting rights act, check out  the book Lillian\'s Right to Vote: A Celebration of the Voting Rights Act of 1965 by  Jonah Winter. Available for purchase on Amazon.com',
                'For more information about the september eleventh attacks, check out the book Nine, Ten: A September 11 Story by  Nora Raleigh Baskin. Available for purchase on Amazon.com',
                'For more information about obama\'s two thousand and eight presidential vicory, check out the book Groundbreakers: How Obama\'s 2.2 Million Volunteers Transformed Campaigning in America by  Elizabeth McKenna and Hahrie Han. Available for purchase on Amazon.com'
            ],
            SKILL_NAME: 'American Space Facts',
            GET_FACT_MESSAGE: "Here's your fact: ",
            HELP_MESSAGE: 'You can say tell me a space fact, or, you can say exit... What can I help you with?',
            HELP_REPROMPT: 'What can I help you with?',
            STOP_MESSAGE: 'Goodbye!',
        },
    },
    'de-DE': {
        translation: {
            FACTS: [
                'Ein Jahr dauert auf dem Merkur nur 88 Tage.',
                'Die Venus ist zwar weiter von der Sonne entfernt, hat aber höhere Temperaturen als Merkur.',
                'Venus dreht sich entgegen dem Uhrzeigersinn, möglicherweise aufgrund eines früheren Zusammenstoßes mit einem Asteroiden.',
                'Auf dem Mars erscheint die Sonne nur halb so groß wie auf der Erde.',
                'Die Erde ist der einzige Planet, der nicht nach einem Gott benannt ist.',
                'Jupiter hat den kürzesten Tag aller Planeten.',
                'Die Milchstraßengalaxis wird in etwa 5 Milliarden Jahren mit der Andromeda-Galaxis zusammenstoßen.',
                'Die Sonne macht rund 99,86 % der Masse im Sonnensystem aus.',
                'Die Sonne ist eine fast perfekte Kugel.',
                'Eine Sonnenfinsternis kann alle ein bis zwei Jahre eintreten. Sie ist daher ein seltenes Ereignis.',
                'Der Saturn strahlt zweieinhalb mal mehr Energie in den Weltraum aus als er von der Sonne erhält.',
                'Die Temperatur in der Sonne kann 15 Millionen Grad Celsius erreichen.',
                'Der Mond entfernt sich von unserem Planeten etwa 3,8 cm pro Jahr.',
            ],
            SKILL_NAME: 'Weltraumwissen auf Deutsch',
            GET_FACT_MESSAGE: 'Hier sind deine Fakten: ',
            HELP_MESSAGE: 'Du kannst sagen, „Nenne mir einen Fakt über den Weltraum“, oder du kannst „Beenden“ sagen... Wie kann ich dir helfen?',
            HELP_REPROMPT: 'Wie kann ich dir helfen?',
            STOP_MESSAGE: 'Auf Wiedersehen!',
        },
    },
};

const handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'HuberIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random space fact from the space facts list
        // Use this.t() to get corresponding language data
        const factArr = this.t('FACTS');
        const audioArr = this.t('AUDIO');
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];
        const audioLink = audioArr[factIndex];
        // Create speech output
        const speechOutput = this.t('GET_FACT_MESSAGE') + randomFact + audioLink;
        this.emit(':tellWithCard', speechOutput, this.t('SKILL_NAME'), randomFact);
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = this.t('HELP_MESSAGE');
        const reprompt = this.t('HELP_MESSAGE');
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'SessionEndedRequest': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
};

exports.handler = (event, context) => {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
