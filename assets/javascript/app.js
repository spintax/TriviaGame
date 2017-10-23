$(document).ready(function () {
    $('#doneButton').hide();
    $('#tryAgainButton').hide();
    $('.correct').hide();
    $('.incorrect').hide();
    $('.incomplete').hide();

    // $('#gameMusic').get(0).play();


    var counter = 0

    var game = {
        questions: [{
            question: 'Which classic film, released in 1922 is considered the first horror movie?',
            answers: ['Nosferatu', 'Haxan', 'The Cabinet of Dr. Caligari', 'The Seventh Seal'],
            id: 'question-one',
            answer: 2
        }, {
            question: '"Leatherface" is the chief villain of which of the following horror films: ',
            answers: ['Friday the 13th', 'The People Under the Stairs', 'I Spit on Your Grave', 'The Texas Chainsaw Massacre'],
            id: 'question-two',
            answer: 3
        }, {
            question: 'Who directed the comedy horror classics "The Evil Dead", "Evil Dead II" and "Drag Me to Hell"?',
            answers: ['Woody Allen', 'Sam Raimi', 'Wes Craven', 'Roman Polanski'],
            id: 'question-three',
            answer: 1
        }, {
            question: 'Which of the following is NOT one of George Romeros famous zombie films?',
            answers: ['Day of the Dead', 'Dawn of the Dead', 'Island of the Dead', 'Diary of the Dead'],
            id: 'question-four',
            answer: 2
        }, {
            question: 'Mia Farrow stars in this chilling film, set in New York City from 1968?',
            answers: ['Rosemarys Baby', 'The Omen', 'The Shining', 'The Last House on the Left'],
            id: 'question-five',
            answer: 3
        }]
    }
    // var gamePlay = function gameStart() {
    //     $(this).hide();
    //     $('.correct').hide();
    //     $('.incorrect').hide();
    //     $('.incomplete').hide();
    //     $('#doneButton').show();
    //     buildQuestions();
    // }
    // when start button is clicked, it hides itself and shows the timer, the questions and a done button
    $('#startButton').on('click', function gameStart() {
        $(this).hide();
        $('.correct').hide();
        $('.incorrect').hide();
        $('.incomplete').hide();
        $('#doneButton').show();
        buildQuestions();

        $(function playMusic() {
            $('#sound').get(0).play();
        });

        function buildQuestions() {
            var questionBOX = ''
            for (var i = 0; i < game.questions.length; i++) {
                questionBOX = questionBOX + formTemplate(game.questions[i]);
            }
            $(".question-list").html(questionBOX);

        }

        function formTemplate(data) {
            // the first variable relates the form field for question with the data 
            var qString = "<br><strong><form id='questionOne'>" + data.question + "</strong><br>";
            var answers = data.answers;
            for (var i = 0; i < answers.length; i++) {
                var answerslist = answers[i];
                qString = qString + "<input type='radio' name='" + data.id + "' value= " + i + " >" + answerslist + "<br>";
                // qString = qString + "<input type='radio' name='" + data.id + "' value= " + i + " style=height:35px; width:35px; vertical-align: middle; > " + possiblelist + "<br>";
            }
            return qString + "</form>";
        }

    });
    $('#doneButton').on('click', function () {
        $(this).hide();
        $('#tryAgainButton').show();
        $('.question-list').hide();
        $('.correct').show();
        $('.incorrect').show();
        $('.incomplete').show();
        // $('#sound').hide();
    })
    $('#tryAgainButton').on('click', function () {
        gameStart ()
        $(this).hide();
        // gameStart();
    });
})