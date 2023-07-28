import React from "react";

const Hours = () => {
    // create an array called shelterHours with objects for shop hours
    // each object has a day for the day, open for opening and close for closing
    // the hours are Monday - Friday 10:00 to 16:00, and Saturday - Sunday 09:00 to 20:00
    const shelterHours = [
        { day: "Monday", open: "10:00", close: "16:00" },
        { day: "Tuesday", open: "10:00", close: "16:00" },
        { day: "Wednesday", open: "10:00", close: "16:00" },
        { day: "Thursday", open: "10:00", close: "16:00" },
        { day: "Friday", open: "10:00", close: "16:00" },
        { day: "Saturday", open: "09:00", close: "20:00" },
        { day: "Sunday", open: "09:00", close: "20:00" }
    ];

    // get the long day name and store it in a variable named today
    const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

    // get today's hours
    const todayHours = shelterHours.find(day => day.day === today);

    // display todays in a div container with an id of hours
    return (
        <div id="hours">
            <h2>Today's Hours</h2>
            <p>{todayHours.day}: {todayHours.open} to {todayHours.close}</p>
        </div>
    );
};

export default Hours;