use hotel;
db.dropDatabase();

db.bookings.insertMany([
    {
        name: "Louise Archibald",
        email: "loulou@hotmail.co.uk",
        checkIn: true
    },
    {
        name: "Bobo Baggins",
        email: "bbaggins@aol.com",
        checkIn: false
    },
    {
        name: "Ian Wlod",
        email: "ianw@yahoo.com",
        checkIn: false
    }
])