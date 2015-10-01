
var client = new UoACalendarClient({ apiToken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJvcmlnX2lhdCI6MTQyMjQ5ODk0OSwiZXhwIjoxNDIyNDk5MjQ5LCJ1c2VyX2lkIjoyLCJ1c2VybmFtZSI6ImRldmVsb3BlciIsImVtYWlsIjoidGVzdEBhdWNrbGFuZC5hYy5ueiJ9.7jLkEBovT2HvT2noL4xdIhddaY8wpZpEVYEDHnnNm1Y"});
var calendarID;

function createCalendarClick()
{
	alert('createCalendarClick button call');
	client.addCalendar("My Calendar",

        /**
        * onSuccess callback
        * @param res: response
        * @param data: deserialized new calendar data e.g. { name: "My Calendar", id: 1 }
        */
        function(res, data) {
            console.log(res);
            console.log(data);
            calendarID = data.id; //Sign new calendar id to global
            alert('Succeeded. Calendar id: ' + data.id);
        },

        /**
        * onError callback
        * @param res: response
        */

        function(res, data) {
            alert('Failed to create calendar');
        }
    );
}

function addEventClick()
{
	alert('addEventClick button call');
	client.addEvent(calendarID, { title: "hello", start: new Date()}, 

        /**
         * onSuccess callback
         * @param res: response
         * @param data: deserialized new event data e.g. { name: "Star Wars Release Date", id: 1 }
         */
        function(res, data) {
            console.log(res);
            console.log(data);
            alert('Succeeded. Event id: ' + data.id);
        },

        /**
         * onError callback
         * @param res: response
         */
        function(res, data) {
            alert('Failed to add event');
        }
    );
}

function findEventClick()
{
	alert('findEventClick button call');
	client.findEvents(calendarID, new Date(1977, 5, 25), new Date(),

        /**
         * onSuccess callback
         * @param res: response
         * @param data: deserialized event array e.g. [{name: "Star Wars Release Date", id: 1},
         * {name: "Lunch", id: 2}]
         */
        function(res, data) {
            console.log(res);
            console.log(data);
            alert('I found these events: ' + data.toString());
        },
        // onError callback
        function(res, data) {
            alert('Failed to find events');
        }
    );
}
