console.group('Domknięcia - wzorzec factory');
(function () {
    var members = [
        'Alicja',
        'Aleksanda',
        'Jan',
        'Katarzyna',
        'Edward',
        'Wojciech',
        'Beata',
        'Agnieszka',
        'Filip',
        'Zuzanna',
        'Jakub'
    ];

    var memberMessageBuilder = function(message) {
        return function(userName) {
            return message.replace('%userName%', userName);
        };
    };

    var getWelcomeUserMessage = memberMessageBuilder('Witaj %userName% na wycieczce do Tajlandii.');
    var getSendTicketMessage = memberMessageBuilder('%userName% Twój numer biletu to 14132432423');

    for (let i = 0, l = members.length; i < l; i++) {
        console.log(getWelcomeUserMessage(members[i]));
        console.log(getSendTicketMessage(members[i]));
    }
})();
console.groupEnd();

console.group('Domknięcia - przykład interfejsu');
(function () {

    var tripManager = (function () {
        var members = [];
        var membersLimit = 10;
        var ageLimit = 18;

        var hasFreePlace = function () {
            return members.length < membersLimit;
        };

        var isValidAge = function (age) {
            return age >= ageLimit;
        };

        var addMember = function (name, age) {
            if (!hasFreePlace()) {
                throw Error ("Brak wolnych miejsc");
            }

            if (!isValidAge(age)) {
                throw Error ("Za młody jesteś!");
            }

            members.push(name);

            return true;
        };

        var getFreePlacesCount = function () {
            return membersLimit - members.length;
        };

        return {
            add: addMember
        };
    })();

    console.log(tripManager);

    tripManager.add('Jan', 19);
    // tripManager.add('Monika', 17);


})();
console.groupEnd();