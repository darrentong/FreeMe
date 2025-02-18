
/** syllabus indexes **/
db.getCollection("syllabus").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** syllabus records **/
db.getCollection("syllabus").insert({
  "_id": ObjectId("53f4a79b975a134d535d175f"),
  "catalogId": "BIOL411",
  "classRoom": "BS 004",
  "courseCredit": NumberInt(3),
  "courseName": "Microbial Physiology",
  "createdBy": "schreier@umbc.edu",
  "createdOn": ISODate("2014-08-20T13:50:19.343Z"),
  "email": "schreier@umbc.edu",
  "endTime": "11:50 AM",
  "enrolledCount": NumberInt(3),
  "exam": [
    {
      "dueDate": ISODate("2014-10-08T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Exam I"
    },
    {
      "dueDate": ISODate("2014-11-10T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Exam II"
    },
    {
      "dueDate": ISODate("2014-12-15T00:00:00.0Z"),
      "dueTime": "10:30 AM",
      "name": "Exam III"
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946c975ab331537002d6"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed",
  "section": NumberLong(1),
  "startTime": "10:00 AM",
  "version": NumberLong(5),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-27T00:03:19.15Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53f54411975a134d535d176f"),
  "catalogId": "CHEM101",
  "classRoom": "UC201",
  "courseCredit": NumberInt(3),
  "courseName": "Chemistry I",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-21T00:57:53.327Z"),
  "email": "hamilton@umbc.edu",
  "endTime": "2:50 PM",
  "enrolledCount": NumberInt(13),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946d975ab33153700305"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Wed",
  "section": NumberInt(2),
  "startTime": "1:00 PM",
  "version": NumberLong(44),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-27T00:04:11.402Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53fd2b15975a76b7173fe672"),
  "catalogId": "LING310",
  "classRoom": "Performing Arts & Humanities 234",
  "courseCredit": NumberInt(3),
  "courseName": "Phonology & Morphology",
  "createdBy": "sifra1@umbc.edu",
  "createdOn": ISODate("2014-08-27T00:49:25.954Z"),
  "email": "young@umbc.edu",
  "endTime": "10:45 AM",
  "enrolledCount": NumberInt(1),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9475975ab33153700593"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed,Fri",
  "section": NumberInt(1),
  "startTime": "10:00 AM",
  "version": NumberLong(3),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:57:38.373Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53fd2d92975a76b7173fe676"),
  "catalogId": "HONR300",
  "classRoom": "Albin O Kuhn Library & Gallery 216M",
  "courseCredit": NumberInt(3),
  "courseName": "General Honors Seminar",
  "createdBy": "sifra1@umbc.edu",
  "createdOn": ISODate("2014-08-27T01:00:02.438Z"),
  "email": "bediako@umbc.edu",
  "endTime": "3:30 PM",
  "enrolledCount": NumberInt(2),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9476975ab331537005ed"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Thu",
  "section": NumberInt(4),
  "startTime": "1:00 PM",
  "version": NumberLong(4),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:57:30.546Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53fd2c3d975a76b7173fe674"),
  "catalogId": "PSYC316",
  "classRoom": "Janet & Walter Sondheim Hall 111",
  "courseCredit": NumberInt(3),
  "courseName": "Language And Thought",
  "createdBy": "sifra1@umbc.edu",
  "createdOn": ISODate("2014-08-27T00:54:21.402Z"),
  "email": "baker@umbc.edu",
  "endTime": "5:15 PM",
  "enrolledCount": NumberInt(1),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9476975ab331537005ea"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed",
  "section": NumberInt(1),
  "startTime": "4:00 PM",
  "version": NumberLong(3),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:57:34.488Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("540cb87a975a228d7ebbacdb"),
  "catalogId": "FYS103",
  "classRoom": "MEYR272",
  "courseCredit": NumberInt(3),
  "courseName": "Paradigms and Paradoxes: An Attempt to Understanding the Universe",
  "createdBy": "co14@umbc.edu",
  "createdOn": ISODate("2014-09-07T19:56:42.733Z"),
  "email": "jliebman@umbc.edu",
  "endTime": "9:45 AM",
  "enrolledCount": NumberInt(1),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946d975ab3315370030b"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "section": NumberInt(1),
  "startTime": "8:30 AM",
  "version": NumberLong(3),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:47:22.85Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5421aeeb975a3e66f29b5b91"),
  "catalogId": "STAT351",
  "classRoom": "Sherman  145",
  "courseCredit": NumberInt(3),
  "courseName": "Applied Stat \/ Biz Econ Discussion",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-09-23T17:33:31.108Z"),
  "email": "estanwy1@umbc.edu",
  "endTime": "2:50 PM",
  "enrolledCount": NumberInt(1),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9474975ab3315370054c"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue",
  "section": NumberInt(6),
  "startTime": "2:00 PM",
  "version": NumberLong(1),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:39:40.563Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53f4b3b9975a134d535d1764"),
  "catalogId": "ECON311",
  "classRoom": "Sondheim 112",
  "courseCredit": NumberInt(3),
  "courseName": "Intermediate Microeconomic Analysis",
  "createdBy": "coates@umbc.edu",
  "createdOn": ISODate("2014-08-20T14:42:00.400Z"),
  "email": "coates@umbc.edu",
  "endTime": "2:15 PM",
  "enrolledCount": NumberInt(2),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9470975ab331537003f3"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed",
  "section": NumberInt(1),
  "startTime": "1:00 PM",
  "version": NumberLong(5),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-27T00:03:21.524Z"),
  "exam": [
    {
      "dueDate": ISODate("2014-10-08T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Midterm 1"
    },
    {
      "dueDate": ISODate("2014-11-19T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Midterm 2"
    },
    {
      "dueDate": ISODate("2014-12-17T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Final exam"
    }
  ],
  "misc": [
    {
      "dueDate": ISODate("2014-09-22T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Class cancelled"
    },
    {
      "dueDate": ISODate("2014-09-24T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "class cancelled"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53f4b77b975a134d535d1766"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-05T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "HW0"
    },
    {
      "dueDate": ISODate("2014-10-10T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "HW1"
    },
    {
      "dueDate": ISODate("2014-10-24T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "HW2"
    },
    {
      "dueDate": ISODate("2014-11-07T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "HW3"
    }
  ],
  "catalogId": "CMPE310",
  "classRoom": "ITE 237",
  "courseCredit": NumberInt(3),
  "courseName": "Systems Design and Programming",
  "createdBy": "gslaught@umbc.edu",
  "createdOn": ISODate("2014-08-20T14:58:03.634Z"),
  "email": "gslaught@umbc.edu",
  "endTime": "3:45 PM",
  "enrolledCount": NumberInt(2),
  "exam": [
    {
      "dueDate": ISODate("2014-10-27T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Midterm Exam"
    },
    {
      "dueDate": ISODate("2014-12-12T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Final Exam"
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946d975ab33153700349"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed",
  "misc": [
    {
      "dueDate": ISODate("2014-09-26T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Lab0"
    },
    {
      "dueDate": ISODate("2014-10-17T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Lab1"
    },
    {
      "dueDate": ISODate("2014-11-14T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Final Project Part I"
    },
    {
      "dueDate": ISODate("2014-12-05T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Final Project Part II"
    }
  ],
  "quiz": [
    {
      "dueDate": ISODate("2014-09-12T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Disc0\/ML0"
    },
    {
      "dueDate": ISODate("2014-09-19T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Disc1\/ML1"
    },
    {
      "dueDate": ISODate("2014-09-26T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Disc2\/ML2"
    },
    {
      "dueDate": ISODate("2014-10-03T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Disc3\/ML3"
    },
    {
      "dueDate": ISODate("2014-10-10T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Disc4\/ML4"
    },
    {
      "dueDate": ISODate("2014-10-17T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Disc5\/ML5"
    }
  ],
  "section": NumberLong(1),
  "startTime": "2:30 PM",
  "version": NumberLong(7),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-27T00:03:23.541Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53f52bd9975a134d535d176c"),
  "catalogId": "HIST485",
  "classRoom": "Sondheim 409",
  "courseCredit": NumberInt(3),
  "courseName": "Imperial Russia, 1762-1914",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-20T23:14:33.841Z"),
  "email": "kbronw@umbc.edu",
  "endTime": "11:15 AM",
  "enrolledCount": NumberInt(1),
  "exam": [
    {
      "dueDate": ISODate("2014-12-15T00:00:00.0Z"),
      "dueTime": "10:30 AM",
      "name": "Final Exam"
    },
    {
      "dueDate": ISODate("2014-10-22T00:00:00.0Z"),
      "dueTime": "10:30 AM",
      "name": "Mid Term Exam"
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9472975ab331537004aa"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed",
  "misc": [
    {
      "dueDate": ISODate("2014-11-19T00:00:00.0Z"),
      "dueTime": "10:15 AM",
      "name": "Essay"
    },
    {
      "dueDate": ISODate("2014-10-02T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Extra Credit"
    },
    {
      "dueDate": ISODate("2014-09-10T00:00:00.0Z"),
      "dueTime": "10:30 AM",
      "name": "Game 1 Dashkova and Dawson"
    },
    {
      "dueDate": ISODate("2014-10-01T00:00:00.0Z"),
      "dueTime": "10:30 AM",
      "name": "Game 2 Nikitenko, Up from Serfdom, King, Odessa, and Children of Rus’"
    },
    {
      "dueDate": ISODate("2014-10-15T00:00:00.0Z"),
      "dueTime": "10:30 AM",
      "name": "Game 3 Hadji Murat and “Is Russia European”"
    },
    {
      "dueDate": ISODate("2014-11-10T00:00:00.0Z"),
      "dueTime": "10:30 AM",
      "name": "Game 4 Tian-Shanskaia  and Chernyshevsky, “What is to be Done?”"
    },
    {
      "dueDate": ISODate("2014-12-01T00:00:00.0Z"),
      "dueTime": "10:15 AM",
      "name": "Game 5 Figner"
    }
  ],
  "section": NumberInt(1),
  "startTime": "10:00 AM",
  "version": NumberLong(8),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-27T00:03:27.736Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53f53276975a134d535d176d"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-02T00:00:00.0Z"),
      "dueTime": "11:45 PM",
      "name": "ALEKS Chapter 1"
    },
    {
      "dueDate": ISODate("2014-09-03T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 2.1-2.5"
    },
    {
      "dueDate": ISODate("2014-09-08T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 2.6-2.7"
    },
    {
      "dueDate": ISODate("2014-09-10T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 3.1-3.5"
    },
    {
      "dueDate": ISODate("2014-09-12T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 3.6-3.8"
    },
    {
      "dueDate": ISODate("2014-09-15T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 3.9-3.10"
    },
    {
      "dueDate": ISODate("2014-09-17T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 4.1-4.3"
    },
    {
      "dueDate": ISODate("2014-09-22T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 4.4-4.6"
    },
    {
      "dueDate": ISODate("2014-09-24T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 5.1-5.4"
    },
    {
      "dueDate": ISODate("2014-09-26T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 5.5-5.7"
    },
    {
      "dueDate": ISODate("2014-09-29T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 5.8-5.10"
    },
    {
      "dueDate": ISODate("2014-10-01T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 6.1-6.2"
    },
    {
      "dueDate": ISODate("2014-10-03T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 6.3-6.6"
    },
    {
      "dueDate": ISODate("2014-10-06T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 7.1-7.2"
    },
    {
      "dueDate": ISODate("2014-10-08T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 7.3"
    },
    {
      "dueDate": ISODate("2014-10-13T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 7.4-7.6"
    },
    {
      "dueDate": ISODate("2014-10-15T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 7.7-7.8"
    },
    {
      "dueDate": ISODate("2014-10-20T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 8.1-8.2"
    },
    {
      "dueDate": ISODate("2014-10-22T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 8.3-8.4"
    },
    {
      "dueDate": ISODate("2014-10-27T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 9.1-9.3"
    },
    {
      "dueDate": ISODate("2014-10-29T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 9.4"
    },
    {
      "dueDate": ISODate("2014-11-03T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 9.5"
    },
    {
      "dueDate": ISODate("2014-11-05T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 9.6"
    },
    {
      "dueDate": ISODate("2014-11-10T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 10.1-10.2"
    },
    {
      "dueDate": ISODate("2014-11-12T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 10.3"
    },
    {
      "dueDate": ISODate("2014-11-14T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 10.4"
    },
    {
      "dueDate": ISODate("2014-11-17T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 10.5"
    },
    {
      "dueDate": ISODate("2014-11-19T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 10.6-10.7"
    },
    {
      "dueDate": ISODate("2014-11-24T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 10.8"
    },
    {
      "dueDate": ISODate("2014-12-01T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 11.1-11.3"
    },
    {
      "dueDate": ISODate("2014-12-03T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 11.4-11.5"
    },
    {
      "dueDate": ISODate("2014-12-05T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 11.6-11.7"
    },
    {
      "dueDate": ISODate("2014-12-08T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 11.8"
    }
  ],
  "catalogId": "CHEM101",
  "classRoom": "MEYR030",
  "courseCredit": NumberInt(3),
  "courseName": "Chemistry I",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-20T23:42:46.230Z"),
  "email": "carpent@umbc.edu",
  "endTime": "10:50 AM",
  "enrolledCount": NumberInt(66),
  "exam": [
    {
      "dueDate": ISODate("2014-09-19T00:00:00.0Z"),
      "dueTime": "4:15 PM",
      "name": "Exam 1"
    },
    {
      "dueDate": ISODate("2014-10-10T00:00:00.0Z"),
      "dueTime": "4:15 PM",
      "name": "Exam 2"
    },
    {
      "dueDate": ISODate("2014-10-31T00:00:00.0Z"),
      "dueTime": "4:15 PM",
      "name": "Exam 3"
    },
    {
      "dueDate": ISODate("2014-11-21T00:00:00.0Z"),
      "dueTime": "4:15 PM",
      "name": "Exam 4"
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946d975ab33153700302"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed,Fri",
  "section": NumberInt(1),
  "startTime": "10:00 AM",
  "version": NumberLong(80),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-27T00:03:32.170Z"),
  "misc": [
    {
      "dueDate": ISODate("2014-09-04T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-09-07T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-09-14T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-09-18T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-09-21T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-09-28T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-10-05T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-10-09T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-10-12T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-10-19T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-10-26T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-10-30T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-11-02T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-11-09T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-11-16T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-11-20T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-11-23T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-11-30T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-12-07T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53f542b53219e0cb2e596629"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-02T00:00:00.0Z"),
      "dueTime": "11:45 PM",
      "name": "ALEKS Chapter 1"
    },
    {
      "dueDate": ISODate("2014-09-03T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 2.1-2.5"
    },
    {
      "dueDate": ISODate("2014-09-08T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 2.6-2.7"
    },
    {
      "dueDate": ISODate("2014-09-10T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 3.1-3.5"
    },
    {
      "dueDate": ISODate("2014-09-12T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 3.6-3.8"
    },
    {
      "dueDate": ISODate("2014-09-15T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 3.9-3.10"
    },
    {
      "dueDate": ISODate("2014-09-17T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 4.1-4.3"
    },
    {
      "dueDate": ISODate("2014-09-22T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 4.4-4.6"
    },
    {
      "dueDate": ISODate("2014-09-24T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 5.1-5.4"
    },
    {
      "dueDate": ISODate("2014-09-26T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 5.5-5.7"
    },
    {
      "dueDate": ISODate("2014-09-29T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 5.8-5.10"
    },
    {
      "dueDate": ISODate("2014-10-01T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 6.1-6.2"
    },
    {
      "dueDate": ISODate("2014-10-03T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 6.3-6.6"
    },
    {
      "dueDate": ISODate("2014-10-06T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 7.1-7.2"
    },
    {
      "dueDate": ISODate("2014-10-08T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 7.3"
    },
    {
      "dueDate": ISODate("2014-10-13T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 7.4-7.6"
    },
    {
      "dueDate": ISODate("2014-10-15T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 7.7-7.8"
    },
    {
      "dueDate": ISODate("2014-10-20T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 8.1-8.2"
    },
    {
      "dueDate": ISODate("2014-10-22T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 8.3-8.4"
    },
    {
      "dueDate": ISODate("2014-10-27T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 9.1-9.3"
    },
    {
      "dueDate": ISODate("2014-10-29T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 9.4"
    },
    {
      "dueDate": ISODate("2014-11-03T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 9.5"
    },
    {
      "dueDate": ISODate("2014-11-05T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 9.6"
    },
    {
      "dueDate": ISODate("2014-11-10T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 10.1-10.2"
    },
    {
      "dueDate": ISODate("2014-11-12T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 10.3"
    },
    {
      "dueDate": ISODate("2014-11-14T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 10.4"
    },
    {
      "dueDate": ISODate("2014-11-17T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 10.5"
    },
    {
      "dueDate": ISODate("2014-11-19T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 10.6-10.7"
    },
    {
      "dueDate": ISODate("2014-11-24T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 10.8"
    },
    {
      "dueDate": ISODate("2014-12-01T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 11.1-11.3"
    },
    {
      "dueDate": ISODate("2014-12-03T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 11.4-11.5"
    },
    {
      "dueDate": ISODate("2014-12-05T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 11.6-11.7"
    },
    {
      "dueDate": ISODate("2014-12-08T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 11.8"
    }
  ],
  "catalogId": "CHEM101",
  "classRoom": "MEYR030",
  "courseCredit": NumberLong(3),
  "courseName": "Chemistry I",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-20T23:42:46.230Z"),
  "email": "carpent@umbc.edu",
  "endTime": "2:50 PM",
  "enrolledCount": NumberInt(83),
  "exam": [
    {
      "dueDate": ISODate("2014-09-19T00:00:00.0Z"),
      "dueTime": "4:15 PM",
      "name": "Exam 1"
    },
    {
      "dueDate": ISODate("2014-10-10T00:00:00.0Z"),
      "dueTime": "4:15 PM",
      "name": "Exam 2"
    },
    {
      "dueDate": ISODate("2014-10-31T00:00:00.0Z"),
      "dueTime": "4:15 PM",
      "name": "Exam 3"
    },
    {
      "dueDate": ISODate("2014-11-21T00:00:00.0Z"),
      "dueTime": "4:15 PM",
      "name": "Exam 4"
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946d975ab33153700302"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed,Fri",
  "section": NumberLong(6),
  "startTime": "2:00 PM",
  "version": NumberLong(93),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-27T00:03:29.581Z"),
  "misc": [
    {
      "dueDate": ISODate("2014-09-04T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-09-07T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-09-14T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-09-18T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-09-21T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-09-28T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-10-05T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-10-09T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-10-12T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-10-19T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-10-26T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-10-30T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-11-02T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-11-09T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-11-16T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-11-20T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-11-23T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-11-30T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-12-07T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53f542f13219e0402f596629"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-02T00:00:00.0Z"),
      "dueTime": "11:45 PM",
      "name": "ALEKS Chapter 1"
    },
    {
      "dueDate": ISODate("2014-09-03T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 2.1-2.5"
    },
    {
      "dueDate": ISODate("2014-09-08T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 2.6-2.7"
    },
    {
      "dueDate": ISODate("2014-09-10T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 3.1-3.5"
    },
    {
      "dueDate": ISODate("2014-09-12T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 3.6-3.8"
    },
    {
      "dueDate": ISODate("2014-09-15T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 3.9-3.10"
    },
    {
      "dueDate": ISODate("2014-09-17T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 4.1-4.3"
    },
    {
      "dueDate": ISODate("2014-09-22T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 4.4-4.6"
    },
    {
      "dueDate": ISODate("2014-09-24T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 5.1-5.4"
    },
    {
      "dueDate": ISODate("2014-09-26T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 5.5-5.7"
    },
    {
      "dueDate": ISODate("2014-09-29T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 5.8-5.10"
    },
    {
      "dueDate": ISODate("2014-10-01T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 6.1-6.2"
    },
    {
      "dueDate": ISODate("2014-10-03T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 6.3-6.6"
    },
    {
      "dueDate": ISODate("2014-10-06T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 7.1-7.2"
    },
    {
      "dueDate": ISODate("2014-10-08T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 7.3"
    },
    {
      "dueDate": ISODate("2014-10-13T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 7.4-7.6"
    },
    {
      "dueDate": ISODate("2014-10-15T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 7.7-7.8"
    },
    {
      "dueDate": ISODate("2014-10-20T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 8.1-8.2"
    },
    {
      "dueDate": ISODate("2014-10-22T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 8.3-8.4"
    },
    {
      "dueDate": ISODate("2014-10-27T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 9.1-9.3"
    },
    {
      "dueDate": ISODate("2014-10-29T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 9.4"
    },
    {
      "dueDate": ISODate("2014-11-03T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 9.5"
    },
    {
      "dueDate": ISODate("2014-11-05T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 9.6"
    },
    {
      "dueDate": ISODate("2014-11-10T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 10.1-10.2"
    },
    {
      "dueDate": ISODate("2014-11-12T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 10.3"
    },
    {
      "dueDate": ISODate("2014-11-14T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 10.4"
    },
    {
      "dueDate": ISODate("2014-11-17T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 10.5"
    },
    {
      "dueDate": ISODate("2014-11-19T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 10.6-10.7"
    },
    {
      "dueDate": ISODate("2014-11-24T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 10.8"
    },
    {
      "dueDate": ISODate("2014-12-01T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 11.1-11.3"
    },
    {
      "dueDate": ISODate("2014-12-03T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 11.4-11.5"
    },
    {
      "dueDate": ISODate("2014-12-05T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 11.6-11.7"
    },
    {
      "dueDate": ISODate("2014-12-08T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 11.8"
    }
  ],
  "catalogId": "CHEM101",
  "classRoom": "MEYR030",
  "courseCredit": NumberLong(3),
  "courseName": "Chemistry I",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-20T23:42:46.230Z"),
  "email": "carpent@umbc.edu",
  "endTime": "3:50 PM",
  "enrolledCount": NumberInt(87),
  "exam": [
    {
      "dueDate": ISODate("2014-09-19T00:00:00.0Z"),
      "dueTime": "4:15 PM",
      "name": "Exam 1"
    },
    {
      "dueDate": ISODate("2014-10-10T00:00:00.0Z"),
      "dueTime": "4:15 PM",
      "name": "Exam 2"
    },
    {
      "dueDate": ISODate("2014-10-31T00:00:00.0Z"),
      "dueTime": "4:15 PM",
      "name": "Exam 3"
    },
    {
      "dueDate": ISODate("2014-11-21T00:00:00.0Z"),
      "dueTime": "4:15 PM",
      "name": "Exam 4"
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946d975ab33153700302"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed,Fri",
  "section": NumberLong(11),
  "startTime": "3:00 PM",
  "version": NumberLong(102),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-27T00:03:38.695Z"),
  "misc": [
    {
      "dueDate": ISODate("2014-09-04T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-09-07T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-09-14T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-09-18T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-09-21T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-09-28T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-10-05T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-10-09T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-10-12T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-10-19T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-10-26T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-10-30T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-11-02T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-11-09T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-11-16T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-11-20T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-11-23T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-11-30T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-12-07T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53f5f6b13219e0284059662e"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-02T00:00:00.0Z"),
      "dueTime": "11:45 PM",
      "name": "ALEKS Chapter 1"
    },
    {
      "dueDate": ISODate("2014-08-29T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 1.6"
    },
    {
      "dueDate": ISODate("2014-09-03T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 2.1-2.5"
    },
    {
      "dueDate": ISODate("2014-09-08T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 2.6-2.7"
    },
    {
      "dueDate": ISODate("2014-09-10T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 3.1-3.5"
    },
    {
      "dueDate": ISODate("2014-09-12T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 3.6-3.8"
    },
    {
      "dueDate": ISODate("2014-09-15T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 3.9-3.10"
    },
    {
      "dueDate": ISODate("2014-09-17T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 4.1-4.3"
    },
    {
      "dueDate": ISODate("2014-09-22T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 4.4-4.6"
    },
    {
      "dueDate": ISODate("2014-09-24T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 5.1-5.4"
    },
    {
      "dueDate": ISODate("2014-09-26T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 5.5-5.7"
    },
    {
      "dueDate": ISODate("2014-09-29T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 5.8-5.10"
    },
    {
      "dueDate": ISODate("2014-10-01T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 6.1-6.2"
    },
    {
      "dueDate": ISODate("2014-10-03T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 6.3-6.6"
    },
    {
      "dueDate": ISODate("2014-10-06T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 7.1-7.2"
    },
    {
      "dueDate": ISODate("2014-10-08T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 7.3"
    },
    {
      "dueDate": ISODate("2014-10-13T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 7.4-7.6"
    },
    {
      "dueDate": ISODate("2014-10-15T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 7.7-7.8"
    },
    {
      "dueDate": ISODate("2014-10-20T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 8.1-8.2"
    },
    {
      "dueDate": ISODate("2014-10-22T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 8.3-8.4"
    },
    {
      "dueDate": ISODate("2014-10-27T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 9.1-9.3"
    },
    {
      "dueDate": ISODate("2014-10-29T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 9.4"
    },
    {
      "dueDate": ISODate("2014-11-03T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 9.5"
    },
    {
      "dueDate": ISODate("2014-11-05T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 9.6"
    },
    {
      "dueDate": ISODate("2014-11-10T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 10.1-10.2"
    },
    {
      "dueDate": ISODate("2014-11-12T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 10.3"
    },
    {
      "dueDate": ISODate("2014-11-14T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 10.4"
    },
    {
      "dueDate": ISODate("2014-11-17T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 10.5"
    },
    {
      "dueDate": ISODate("2014-11-19T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 10.6-10.7"
    },
    {
      "dueDate": ISODate("2014-11-24T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 10.8"
    },
    {
      "dueDate": ISODate("2014-12-01T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 11.1-11.3"
    },
    {
      "dueDate": ISODate("2014-12-03T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 11.4-11.5"
    },
    {
      "dueDate": ISODate("2014-12-05T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 11.6-11.7"
    },
    {
      "dueDate": ISODate("2014-12-08T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 11.8"
    }
  ],
  "catalogId": "CHEM101H",
  "classRoom": "MEYR030",
  "courseCredit": NumberLong(3),
  "courseName": "Chemistry I Honors",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-20T23:42:46.230Z"),
  "email": "carpent@umbc.edu",
  "endTime": "2:50 PM",
  "enrolledCount": NumberInt(9),
  "exam": [
    {
      "dueDate": ISODate("2014-09-19T00:00:00.0Z"),
      "dueTime": "4:15 PM",
      "name": "Exam 1"
    },
    {
      "dueDate": ISODate("2014-10-10T00:00:00.0Z"),
      "dueTime": "4:15 PM",
      "name": "Exam 2"
    },
    {
      "dueDate": ISODate("2014-10-31T00:00:00.0Z"),
      "dueTime": "4:15 PM",
      "name": "Exam 3"
    },
    {
      "dueDate": ISODate("2014-11-21T00:00:00.0Z"),
      "dueTime": "4:15 PM",
      "name": "Exam 4"
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946d975ab33153700302"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed,Fri",
  "section": NumberInt(4),
  "startTime": "2:00 PM",
  "version": NumberLong(41),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-27T00:03:36.500Z"),
  "misc": [
    {
      "dueDate": ISODate("2014-09-04T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-09-07T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-09-14T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-09-18T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-09-21T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-09-28T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-10-05T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-10-09T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-10-12T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-10-19T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-10-26T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-10-30T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-11-02T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-11-09T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-11-16T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-11-20T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-11-23T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-11-30T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-12-07T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53f5fb8a3219e0284059662f"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-02T00:00:00.0Z"),
      "dueTime": "11:45 PM",
      "name": "ALEKS Chapter 1"
    },
    {
      "dueDate": ISODate("2014-08-29T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 1.6"
    },
    {
      "dueDate": ISODate("2014-09-03T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 2.1-2.5"
    },
    {
      "dueDate": ISODate("2014-09-08T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 2.6-2.7"
    },
    {
      "dueDate": ISODate("2014-09-10T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 3.1-3.5"
    },
    {
      "dueDate": ISODate("2014-09-12T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 3.6-3.8"
    },
    {
      "dueDate": ISODate("2014-09-15T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 3.9-3.10"
    },
    {
      "dueDate": ISODate("2014-09-17T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 4.1-4.3"
    },
    {
      "dueDate": ISODate("2014-09-22T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 4.4-4.6"
    },
    {
      "dueDate": ISODate("2014-09-24T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 5.1-5.4"
    },
    {
      "dueDate": ISODate("2014-09-26T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 5.5-5.7"
    },
    {
      "dueDate": ISODate("2014-09-29T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 5.8-5.10"
    },
    {
      "dueDate": ISODate("2014-10-01T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 6.1-6.2"
    },
    {
      "dueDate": ISODate("2014-10-03T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 6.3-6.6"
    },
    {
      "dueDate": ISODate("2014-10-06T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 7.1-7.2"
    },
    {
      "dueDate": ISODate("2014-10-08T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 7.3"
    },
    {
      "dueDate": ISODate("2014-10-13T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 7.4-7.6"
    },
    {
      "dueDate": ISODate("2014-10-15T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 7.7-7.8"
    },
    {
      "dueDate": ISODate("2014-10-20T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 8.1-8.2"
    },
    {
      "dueDate": ISODate("2014-10-22T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 8.3-8.4"
    },
    {
      "dueDate": ISODate("2014-10-27T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 9.1-9.3"
    },
    {
      "dueDate": ISODate("2014-10-29T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 9.4"
    },
    {
      "dueDate": ISODate("2014-11-03T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 9.5"
    },
    {
      "dueDate": ISODate("2014-11-05T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 9.6"
    },
    {
      "dueDate": ISODate("2014-11-10T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 10.1-10.2"
    },
    {
      "dueDate": ISODate("2014-11-12T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 10.3"
    },
    {
      "dueDate": ISODate("2014-11-14T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 10.4"
    },
    {
      "dueDate": ISODate("2014-11-17T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 10.5"
    },
    {
      "dueDate": ISODate("2014-11-19T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 10.6-10.7"
    },
    {
      "dueDate": ISODate("2014-11-24T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 10.8"
    },
    {
      "dueDate": ISODate("2014-12-01T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 11.1-11.3"
    },
    {
      "dueDate": ISODate("2014-12-03T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 11.4-11.5"
    },
    {
      "dueDate": ISODate("2014-12-05T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 11.6-11.7"
    },
    {
      "dueDate": ISODate("2014-12-08T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "ALEKS 11.8"
    }
  ],
  "catalogId": "CHEM101H",
  "classRoom": "MEYR030",
  "courseCredit": NumberLong(3),
  "courseName": "Chemistry I Honors",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-20T23:42:46.230Z"),
  "email": "carpent@umbc.edu",
  "endTime": "10:50 AM",
  "enrolledCount": NumberInt(14),
  "exam": [
    {
      "dueDate": ISODate("2014-09-19T00:00:00.0Z"),
      "dueTime": "4:15 PM",
      "name": "Exam 1"
    },
    {
      "dueDate": ISODate("2014-10-10T00:00:00.0Z"),
      "dueTime": "4:15 PM",
      "name": "Exam 2"
    },
    {
      "dueDate": ISODate("2014-10-31T00:00:00.0Z"),
      "dueTime": "4:15 PM",
      "name": "Exam 3"
    },
    {
      "dueDate": ISODate("2014-11-21T00:00:00.0Z"),
      "dueTime": "4:15 PM",
      "name": "Exam 4"
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946d975ab33153700302"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed,Fri",
  "section": NumberLong(1),
  "startTime": "10:00 AM",
  "version": NumberLong(41),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-27T00:03:34.66Z"),
  "misc": [
    {
      "dueDate": ISODate("2014-09-04T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-09-07T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-09-14T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-09-18T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-09-21T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-09-28T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-10-05T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-10-09T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-10-12T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-10-19T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-10-26T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-10-30T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-11-02T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-11-09T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-11-16T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-11-20T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-11-23T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-11-30T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    },
    {
      "dueDate": ISODate("2014-12-07T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Virtual Office Hours"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53f81008975a7275c0117044"),
  "catalogId": "PHYS111",
  "classRoom": "MEYR030",
  "courseCredit": NumberInt(3),
  "courseName": "Basic Physics I",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-23T03:52:40.338Z"),
  "email": "andersoe@umbc.edu",
  "endTime": "11:50 AM",
  "enrolledCount": NumberInt(9),
  "exam": [
    {
      "dueDate": ISODate("2014-09-19T00:00:00.0Z"),
      "dueTime": "11:15 AM",
      "name": "Chapters 1-2 Labs 1-2"
    },
    {
      "dueDate": ISODate("2014-10-10T00:00:00.0Z"),
      "dueTime": "11:15 AM",
      "name": "Chapters 4-6 Labs 3-5"
    },
    {
      "dueDate": ISODate("2014-11-07T00:00:00.0Z"),
      "dueTime": "11:15 AM",
      "name": "Ch 7-8, 10-11.3 Labs 6-8"
    },
    {
      "dueDate": ISODate("2014-12-05T00:00:00.0Z"),
      "dueTime": "11:15 AM",
      "name": "Ch 11.4-14 Labs 9-10"
    },
    {
      "dueDate": ISODate("2014-12-12T00:00:00.0Z"),
      "dueTime": "10:30 AM",
      "name": "Comprehensive Final MEYR030"
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9475975ab331537005c3"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed,Fri",
  "section": NumberInt(1),
  "startTime": "11:00 AM",
  "version": NumberLong(36),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-27T00:04:15.509Z"),
  "quiz": [
    {
      "dueDate": ISODate("2014-08-29T00:00:00.0Z"),
      "dueTime": "10:50 AM",
      "name": "RQ Ch1 and Syllabus"
    },
    {
      "dueDate": ISODate("2014-09-03T00:00:00.0Z"),
      "dueTime": "10:50 AM",
      "name": "RQ Ch 2.1 - 2.4"
    },
    {
      "dueDate": ISODate("2014-09-08T00:00:00.0Z"),
      "dueTime": "10:50 AM",
      "name": "RQ Ch 2.5 - 2.6"
    },
    {
      "dueDate": ISODate("2014-09-15T00:00:00.0Z"),
      "dueTime": "10:50 AM",
      "name": "RQ Ch 2.7"
    },
    {
      "dueDate": ISODate("2014-09-22T00:00:00.0Z"),
      "dueTime": "10:50 AM",
      "name": "RQ Ch 4"
    },
    {
      "dueDate": ISODate("2014-09-29T00:00:00.0Z"),
      "dueTime": "10:50 AM",
      "name": "RQ Ch 5.1 - 5.6"
    },
    {
      "dueDate": ISODate("2014-10-06T00:00:00.0Z"),
      "dueTime": "10:50 AM",
      "name": "RQ Ch 3.8, 6.2-6.5"
    },
    {
      "dueDate": ISODate("2014-10-13T00:00:00.0Z"),
      "dueTime": "10:50 AM",
      "name": "RQ CH 7.2-7.3, 8.1"
    },
    {
      "dueDate": ISODate("2014-10-20T00:00:00.0Z"),
      "dueTime": "10:50 AM",
      "name": "RQ CH 8.3-8.4"
    },
    {
      "dueDate": ISODate("2014-10-27T00:00:00.0Z"),
      "dueTime": "10:50 AM",
      "name": "RQ CH 10.1-10.6, 10.8"
    },
    {
      "dueDate": ISODate("2014-11-03T00:00:00.0Z"),
      "dueTime": "10:50 AM",
      "name": "RQ CH 11.1-11.3"
    },
    {
      "dueDate": ISODate("2014-11-10T00:00:00.0Z"),
      "dueTime": "10:50 AM",
      "name": "RQ CH 11.4-11.5, 12.1-12.3, 12.5-12.8"
    },
    {
      "dueDate": ISODate("2014-11-17T00:00:00.0Z"),
      "dueTime": "10:50 AM",
      "name": "RQ CH 13"
    },
    {
      "dueDate": ISODate("2014-11-24T00:00:00.0Z"),
      "dueTime": "10:50 AM",
      "name": "RQ CH 14"
    }
  ],
  "assignment": [
    {
      "dueDate": ISODate("2014-08-29T00:00:00.0Z"),
      "dueTime": "11:15 PM",
      "name": "MP 0 (ungraded)"
    },
    {
      "dueDate": ISODate("2014-09-03T00:00:00.0Z"),
      "dueTime": "11:15 PM",
      "name": "MP 1"
    },
    {
      "dueDate": ISODate("2014-09-10T00:00:00.0Z"),
      "dueTime": "11:15 PM",
      "name": "MP 2"
    },
    {
      "dueDate": ISODate("2014-09-17T00:00:00.0Z"),
      "dueTime": "11:15 PM",
      "name": "MP 3"
    },
    {
      "dueDate": ISODate("2014-09-24T00:00:00.0Z"),
      "dueTime": "11:15 PM",
      "name": "MP 4"
    },
    {
      "dueDate": ISODate("2014-10-01T00:00:00.0Z"),
      "dueTime": "11:15 PM",
      "name": "MP 5"
    },
    {
      "dueDate": ISODate("2014-10-08T00:00:00.0Z"),
      "dueTime": "11:15 PM",
      "name": "MP 6"
    },
    {
      "dueDate": ISODate("2014-10-15T00:00:00.0Z"),
      "dueTime": "11:15 PM",
      "name": "MP 7"
    },
    {
      "dueDate": ISODate("2014-10-22T00:00:00.0Z"),
      "dueTime": "11:15 PM",
      "name": "MP 8"
    },
    {
      "dueDate": ISODate("2014-10-29T00:00:00.0Z"),
      "dueTime": "11:15 PM",
      "name": "MP 9"
    },
    {
      "dueDate": ISODate("2014-11-05T00:00:00.0Z"),
      "dueTime": "11:15 PM",
      "name": "MP 10"
    },
    {
      "dueDate": ISODate("2014-11-12T00:00:00.0Z"),
      "dueTime": "11:15 PM",
      "name": "MP 11"
    },
    {
      "dueDate": ISODate("2014-11-19T00:00:00.0Z"),
      "dueTime": "11:15 PM",
      "name": "MP 12"
    },
    {
      "dueDate": ISODate("2014-11-26T00:00:00.0Z"),
      "dueTime": "11:15 PM",
      "name": "MP 13"
    },
    {
      "dueDate": ISODate("2014-12-03T00:00:00.0Z"),
      "dueTime": "11:15 PM",
      "name": "MP 14"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53f826893219e0004559662c"),
  "catalogId": "CHEM351",
  "classRoom": "Engineering 027",
  "courseCredit": NumberLong(3),
  "courseName": "Organic Chemistry I",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-23T05:18:43.973Z"),
  "email": "gierasch@umbc.edu",
  "endTime": "10:50 AM",
  "enrolledCount": NumberInt(14),
  "exam": [
    {
      "dueDate": ISODate("2014-10-01T00:00:00.0Z"),
      "dueTime": "7:15 PM",
      "name": "Exam 1"
    },
    {
      "dueDate": ISODate("2014-10-22T00:00:00.0Z"),
      "dueTime": "7:15 PM",
      "name": "Exam 2"
    },
    {
      "dueDate": ISODate("2014-11-12T00:00:00.0Z"),
      "dueTime": "7:15 PM",
      "name": "Exam 3"
    },
    {
      "dueDate": ISODate("2014-12-03T00:00:00.0Z"),
      "dueTime": "7:15 PM",
      "name": "Exam 4"
    },
    {
      "dueDate": ISODate("2014-12-17T00:00:00.0Z"),
      "dueTime": "6:00 PM",
      "name": "Final Exam"
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946a975ab33153700293"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed,Fri",
  "section": NumberLong(2),
  "startTime": "10:00 AM",
  "version": NumberLong(23),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-27T00:04:46.104Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53f82433975a85f18a7dcbe8"),
  "catalogId": "CHEM351",
  "classRoom": "Engineering 027",
  "courseCredit": NumberInt(3),
  "courseName": "Organic Chemistry I",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-23T05:18:43.973Z"),
  "email": "gierasch@umbc.edu",
  "endTime": "9:50 AM",
  "enrolledCount": NumberInt(10),
  "exam": [
    {
      "dueDate": ISODate("2014-10-01T00:00:00.0Z"),
      "dueTime": "7:15 PM",
      "name": "Exam 1"
    },
    {
      "dueDate": ISODate("2014-10-22T00:00:00.0Z"),
      "dueTime": "7:15 PM",
      "name": "Exam 2"
    },
    {
      "dueDate": ISODate("2014-11-12T00:00:00.0Z"),
      "dueTime": "7:15 PM",
      "name": "Exam 3"
    },
    {
      "dueDate": ISODate("2014-12-03T00:00:00.0Z"),
      "dueTime": "7:15 PM",
      "name": "Exam 4"
    },
    {
      "dueDate": ISODate("2014-12-17T00:00:00.0Z"),
      "dueTime": "6:00 PM",
      "name": "Final Exam"
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946a975ab33153700293"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed,Fri",
  "section": NumberInt(1),
  "startTime": "9:00 AM",
  "version": NumberLong(22),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-27T00:04:44.90Z"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-08T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Pre-Class 1"
    },
    {
      "dueDate": ISODate("2014-09-15T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Pre-Class 2"
    },
    {
      "dueDate": ISODate("2014-09-22T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Pre-Class 3"
    },
    {
      "dueDate": ISODate("2014-09-29T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Pre-Class 4"
    },
    {
      "dueDate": ISODate("2014-10-06T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Pre-Class 5"
    },
    {
      "dueDate": ISODate("2014-10-13T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Pre-Class 6"
    },
    {
      "dueDate": ISODate("2014-10-20T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Pre-Class 7"
    },
    {
      "dueDate": ISODate("2014-10-27T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Pre-Class 8"
    },
    {
      "dueDate": ISODate("2014-11-03T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Pre-Class 9"
    },
    {
      "dueDate": ISODate("2014-11-10T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Pre-Class 10"
    },
    {
      "dueDate": ISODate("2014-11-17T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Pre-Class 11"
    },
    {
      "dueDate": ISODate("2014-11-24T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Pre-Class 12"
    },
    {
      "dueDate": ISODate("2014-12-01T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Pre-Class 13"
    }
  ],
  "misc": [
    {
      "dueDate": ISODate("2014-08-27T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Mastery"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53f83a21975ac9dcd58cea1a"),
  "catalogId": "BIOL302",
  "classRoom": "MEYR030",
  "courseCredit": NumberInt(3),
  "courseName": "Molecular and General Genetics",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-23T06:52:17.900Z"),
  "email": "stmiller@umbc.edu",
  "endTime": "9:45 AM",
  "enrolledCount": NumberInt(11),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946c975ab331537002cd"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "section": NumberInt(1),
  "startTime": "8:30 AM",
  "version": NumberLong(21),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-27T00:05:03.50Z"),
  "exam": [
    {
      "dueDate": ISODate("2014-09-16T00:00:00.0Z"),
      "dueTime": "8:15 AM",
      "name": "Exam 1"
    },
    {
      "dueDate": ISODate("2014-10-23T00:00:00.0Z"),
      "dueTime": "8:15 AM",
      "name": "Exam 2"
    },
    {
      "dueDate": ISODate("2014-12-04T00:00:00.0Z"),
      "dueTime": "8:15 AM",
      "name": "Exam 3"
    },
    {
      "dueDate": ISODate("2014-12-12T00:00:00.0Z"),
      "dueTime": "8:15 AM",
      "name": "Comprehensive Final"
    }
  ],
  "misc": [
    {
      "dueDate": ISODate("2014-09-14T00:00:00.0Z"),
      "dueTime": "7:00 PM",
      "name": "Review Exam 1"
    },
    {
      "dueDate": ISODate("2014-10-21T00:00:00.0Z"),
      "dueTime": "7:00 PM",
      "name": "Review Exam 2"
    },
    {
      "dueDate": ISODate("2014-12-02T00:00:00.0Z"),
      "dueTime": "7:00 PM",
      "name": "Review Exam 3"
    },
    {
      "dueDate": ISODate("2014-12-09T00:00:00.0Z"),
      "dueTime": "7:00 PM",
      "name": "Review Final"
    }
  ],
  "quiz": [
    {
      "dueDate": ISODate("2014-09-02T00:00:00.0Z"),
      "dueTime": "8:45 AM",
      "name": "iRAT\/tRAT 1"
    },
    {
      "dueDate": ISODate("2014-09-18T00:00:00.0Z"),
      "dueTime": "8:45 AM",
      "name": "iRAT\/tRAT 2"
    },
    {
      "dueDate": ISODate("2014-10-07T00:00:00.0Z"),
      "dueTime": "8:45 AM",
      "name": "iRAT\/tRAT 3"
    },
    {
      "dueDate": ISODate("2014-10-28T00:00:00.0Z"),
      "dueTime": "8:45 AM",
      "name": "iRAT\/tRAT 4"
    },
    {
      "dueDate": ISODate("2014-11-13T00:00:00.0Z"),
      "dueTime": "8:45 AM",
      "name": "iRAT\/tRAT 5"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53f851fc975ac9dcd58cea1d"),
  "catalogId": "MATH225",
  "classRoom": "Math & Psych 103",
  "courseCredit": NumberInt(3),
  "courseName": "Introduction to Differential Equations",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-23T08:34:04.883Z"),
  "email": "bdean@umbc.edu",
  "endTime": "2:15 PM",
  "enrolledCount": NumberInt(2),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fe6f603219e0982eceeb4e"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "section": NumberInt(2),
  "startTime": "1:00 PM",
  "version": NumberLong(16),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-27T00:05:45.869Z"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-04T00:00:00.0Z"),
      "dueTime": "1:05 PM",
      "name": "Homework 1"
    },
    {
      "dueDate": ISODate("2014-09-11T00:00:00.0Z"),
      "dueTime": "1:05 PM",
      "name": "Homework 2"
    },
    {
      "dueDate": ISODate("2014-09-18T00:00:00.0Z"),
      "dueTime": "1:05 PM",
      "name": "Homework 3"
    },
    {
      "dueDate": ISODate("2014-09-25T00:00:00.0Z"),
      "dueTime": "1:05 PM",
      "name": "Homework 4"
    },
    {
      "dueDate": ISODate("2014-10-02T00:00:00.0Z"),
      "dueTime": "1:05 PM",
      "name": "Homework 5"
    },
    {
      "dueDate": ISODate("2014-10-09T00:00:00.0Z"),
      "dueTime": "1:05 PM",
      "name": "Homework 6"
    },
    {
      "dueDate": ISODate("2014-10-16T00:00:00.0Z"),
      "dueTime": "1:05 PM",
      "name": "Homework 7"
    },
    {
      "dueDate": ISODate("2014-10-23T00:00:00.0Z"),
      "dueTime": "1:05 PM",
      "name": "Homework 8"
    },
    {
      "dueDate": ISODate("2014-10-30T00:00:00.0Z"),
      "dueTime": "1:05 PM",
      "name": "Homework 9"
    },
    {
      "dueDate": ISODate("2014-11-13T00:00:00.0Z"),
      "dueTime": "1:05 PM",
      "name": "Homework 10"
    },
    {
      "dueDate": ISODate("2014-11-20T00:00:00.0Z"),
      "dueTime": "1:05 PM",
      "name": "Homework 11"
    },
    {
      "dueDate": ISODate("2014-12-04T00:00:00.0Z"),
      "dueTime": "1:15 PM",
      "name": "Homework 12"
    }
  ],
  "exam": [
    {
      "dueDate": ISODate("2014-10-02T00:00:00.0Z"),
      "dueTime": "1:15 PM",
      "name": "Midterm Exam 1"
    },
    {
      "dueDate": ISODate("2014-11-06T00:00:00.0Z"),
      "dueTime": "1:15 PM",
      "name": "Midterm Exam 2"
    },
    {
      "dueDate": ISODate("2014-12-16T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Final Exam MP103"
    }
  ],
  "misc": [
    {
      "dueDate": ISODate("2014-12-09T00:00:00.0Z"),
      "dueTime": "1:15 PM",
      "name": "Final Review"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53f8da5d975ac9dcd58cea25"),
  "catalogId": "MATH215",
  "classRoom": "Administration 101",
  "courseCredit": NumberInt(3),
  "courseName": "Applied Finite Math",
  "createdBy": "slilly1@umbc.edu",
  "createdOn": ISODate("2014-08-23T18:15:57.190Z"),
  "email": "jkapoor@umbc.edu",
  "endTime": "3:45 PM",
  "enrolledCount": NumberInt(1),
  "exam": [
    {
      "dueDate": ISODate("2014-09-29T00:00:00.0Z"),
      "dueTime": "3:45 PM",
      "name": "Exam 1"
    },
    {
      "dueDate": ISODate("2014-10-27T00:00:00.0Z"),
      "dueTime": "3:45 PM",
      "name": "Exam 2"
    },
    {
      "dueDate": ISODate("2014-11-24T00:00:00.0Z"),
      "dueTime": "3:45 PM",
      "name": "Exam 3"
    },
    {
      "dueDate": ISODate("2014-12-12T00:00:00.0Z"),
      "dueTime": "3:45 PM",
      "name": "FINAL EXAM"
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9474975ab33153700531"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed",
  "quiz": [
    {
      "dueDate": ISODate("2014-09-15T00:00:00.0Z"),
      "dueTime": "3:45 PM",
      "name": "Quiz 1"
    },
    {
      "dueDate": ISODate("2014-10-13T00:00:00.0Z"),
      "dueTime": "3:45 PM",
      "name": "Quiz 2"
    },
    {
      "dueDate": ISODate("2014-11-10T00:00:00.0Z"),
      "dueTime": "3:45 PM",
      "name": "Quiz 3"
    }
  ],
  "section": NumberInt(1),
  "startTime": "2:30 PM",
  "version": NumberLong(6),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-27T00:05:41.176Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53f92b5a975aeb226e1da50e"),
  "catalogId": "MATH251",
  "classRoom": "Sherman Hall 003",
  "courseCredit": NumberInt(3),
  "courseName": "Multivariable Calculus",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-24T00:01:30.817Z"),
  "email": "tbudimir@umbc.edu",
  "endTime": "6:45 PM",
  "enrolledCount": NumberInt(12),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("540e2f753219e05717a849b0"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "section": NumberInt(6),
  "startTime": "5:30 PM",
  "version": NumberLong(29),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-27T00:05:38.647Z"),
  "exam": [
    {
      "dueDate": ISODate("2014-09-23T00:00:00.0Z"),
      "dueTime": "5:45 PM",
      "name": "Exam 1 Ch"
    },
    {
      "dueDate": ISODate("2014-10-28T00:00:00.0Z"),
      "dueTime": "5:45 PM",
      "name": "Exam 2 Ch"
    },
    {
      "dueDate": ISODate("2014-12-02T00:00:00.0Z"),
      "dueTime": "5:45 PM",
      "name": "Exam 3 Ch"
    }
  ],
  "assignment": [
    {
      "dueDate": ISODate("2014-08-31T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "HW 1"
    },
    {
      "dueDate": ISODate("2014-09-07T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "HW 2"
    },
    {
      "dueDate": ISODate("2014-09-14T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "HW 3"
    },
    {
      "dueDate": ISODate("2014-09-21T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "HW 4"
    },
    {
      "dueDate": ISODate("2014-09-28T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "HW 5"
    },
    {
      "dueDate": ISODate("2014-10-05T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "HW 6"
    },
    {
      "dueDate": ISODate("2014-10-12T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "HW 7"
    },
    {
      "dueDate": ISODate("2014-10-19T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "HW 8"
    },
    {
      "dueDate": ISODate("2014-10-26T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "HW 9"
    },
    {
      "dueDate": ISODate("2014-11-02T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "HW 10"
    },
    {
      "dueDate": ISODate("2014-11-09T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "HW 11"
    },
    {
      "dueDate": ISODate("2014-11-16T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "HW 12"
    },
    {
      "dueDate": ISODate("2014-11-23T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "HW 13"
    },
    {
      "dueDate": ISODate("2014-11-30T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "HW 14"
    },
    {
      "dueDate": ISODate("2014-12-07T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "HW 15"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53f93582975aeb226e1da50f"),
  "catalogId": "MATH251",
  "classRoom": "Sherman Hall 013",
  "courseCredit": NumberInt(3),
  "courseName": "Multivariable Calculus",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-24T00:44:50.499Z"),
  "email": "tbudimir@umbc.edu",
  "endTime": "8:00 PM",
  "enrolledCount": NumberInt(2),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("540e2f753219e05717a849b0"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Thu",
  "quiz": [
    {
      "dueDate": ISODate("2014-09-04T00:00:00.0Z"),
      "dueTime": "7:15 PM",
      "name": "Quiz 0"
    },
    {
      "dueDate": ISODate("2014-09-11T00:00:00.0Z"),
      "dueTime": "7:15 PM",
      "name": "Quiz 1 12.1-12.4"
    },
    {
      "dueDate": ISODate("2014-09-18T00:00:00.0Z"),
      "dueTime": "7:15 PM",
      "name": "Quiz 2 12.5-13.2"
    },
    {
      "dueDate": ISODate("2014-10-02T00:00:00.0Z"),
      "dueTime": "7:15 PM",
      "name": "Quiz 3 14.1-14.2"
    },
    {
      "dueDate": ISODate("2014-10-09T00:00:00.0Z"),
      "dueTime": "7:15 PM",
      "name": "Quiz 4 14.3-14.5"
    },
    {
      "dueDate": ISODate("2014-10-16T00:00:00.0Z"),
      "dueTime": "7:15 PM",
      "name": "Quiz 5 14.6-14.8"
    },
    {
      "dueDate": ISODate("2014-10-23T00:00:00.0Z"),
      "dueTime": "7:15 PM",
      "name": "Quiz 6 3.10-3.11"
    },
    {
      "dueDate": ISODate("2014-11-06T00:00:00.0Z"),
      "dueTime": "7:15 PM",
      "name": "Quiz 7 15.7"
    },
    {
      "dueDate": ISODate("2014-11-13T00:00:00.0Z"),
      "dueTime": "7:15 PM",
      "name": "Quiz 8 15.8-16.1"
    },
    {
      "dueDate": ISODate("2014-11-20T00:00:00.0Z"),
      "dueTime": "7:15 PM",
      "name": "Quiz 9 16.2-16.4"
    }
  ],
  "section": NumberInt(7),
  "startTime": "7:10 PM",
  "version": NumberLong(13),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:59:34.84Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53f935c53219e0be6a59662d"),
  "catalogId": "MATH251",
  "classRoom": "Sherman Hall 014",
  "courseCredit": NumberLong(3),
  "courseName": "Multivariable Calculus",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-24T00:44:50.499Z"),
  "email": "tbudimir@umbc.edu",
  "endTime": "8:00 PM",
  "enrolledCount": NumberInt(2),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("540e2f753219e05717a849b0"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Thu",
  "quiz": [
    {
      "dueDate": ISODate("2014-09-04T00:00:00.0Z"),
      "dueTime": "7:15 PM",
      "name": "Quiz 0"
    },
    {
      "dueDate": ISODate("2014-09-11T00:00:00.0Z"),
      "dueTime": "7:15 PM",
      "name": "Quiz 1 12.1-12.4"
    },
    {
      "dueDate": ISODate("2014-09-18T00:00:00.0Z"),
      "dueTime": "7:15 PM",
      "name": "Quiz 2 12.5-13.2"
    },
    {
      "dueDate": ISODate("2014-10-02T00:00:00.0Z"),
      "dueTime": "7:15 PM",
      "name": "Quiz 3 14.1-14.2"
    },
    {
      "dueDate": ISODate("2014-10-09T00:00:00.0Z"),
      "dueTime": "7:15 PM",
      "name": "Quiz 4 14.3-14.5"
    },
    {
      "dueDate": ISODate("2014-10-16T00:00:00.0Z"),
      "dueTime": "7:15 PM",
      "name": "Quiz 5 14.6-14.8"
    },
    {
      "dueDate": ISODate("2014-10-23T00:00:00.0Z"),
      "dueTime": "7:15 PM",
      "name": "Quiz 6 3.10-3.11"
    },
    {
      "dueDate": ISODate("2014-11-06T00:00:00.0Z"),
      "dueTime": "7:15 PM",
      "name": "Quiz 7 15.7"
    },
    {
      "dueDate": ISODate("2014-11-13T00:00:00.0Z"),
      "dueTime": "7:15 PM",
      "name": "Quiz 8 15.8-16.1"
    },
    {
      "dueDate": ISODate("2014-11-20T00:00:00.0Z"),
      "dueTime": "7:15 PM",
      "name": "Quiz 9 16.2-16.4"
    }
  ],
  "section": NumberLong(8),
  "startTime": "7:10 PM",
  "version": NumberLong(8),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:59:36.89Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53f936603219e0917059662c"),
  "catalogId": "MATH251",
  "classRoom": "Sherman Hall 014",
  "courseCredit": NumberLong(3),
  "courseName": "Multivariable Calculus",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-24T00:44:50.499Z"),
  "email": "tbudimir@umbc.edu",
  "endTime": "8:00 PM",
  "enrolledCount": NumberInt(4),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("540e2f753219e05717a849b0"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue",
  "quiz": [
    {
      "dueDate": ISODate("2014-09-02T00:00:00.0Z"),
      "dueTime": "7:15 PM",
      "name": "Quiz 0"
    },
    {
      "dueDate": ISODate("2014-09-09T00:00:00.0Z"),
      "dueTime": "7:15 PM",
      "name": "Quiz 1 12.1-12.4"
    },
    {
      "dueDate": ISODate("2014-09-16T00:00:00.0Z"),
      "dueTime": "7:15 PM",
      "name": "Quiz 2 12.5-13.2"
    },
    {
      "dueDate": ISODate("2014-09-30T00:00:00.0Z"),
      "dueTime": "7:15 PM",
      "name": "Quiz 3 14.1-14.2"
    },
    {
      "dueDate": ISODate("2014-10-07T00:00:00.0Z"),
      "dueTime": "7:15 PM",
      "name": "Quiz 4 14.3-14.5"
    },
    {
      "dueDate": ISODate("2014-10-14T00:00:00.0Z"),
      "dueTime": "7:15 PM",
      "name": "Quiz 5 14.6-14.8"
    },
    {
      "dueDate": ISODate("2014-10-21T00:00:00.0Z"),
      "dueTime": "7:15 PM",
      "name": "Quiz 6 3.10-3.11"
    },
    {
      "dueDate": ISODate("2014-11-04T00:00:00.0Z"),
      "dueTime": "7:15 PM",
      "name": "Quiz 7 15.7"
    },
    {
      "dueDate": ISODate("2014-11-11T00:00:00.0Z"),
      "dueTime": "7:15 PM",
      "name": "Quiz 8 15.8-16.1"
    },
    {
      "dueDate": ISODate("2014-11-18T00:00:00.0Z"),
      "dueTime": "7:15 PM",
      "name": "Quiz 9 16.2-16.4"
    }
  ],
  "section": NumberLong(10),
  "startTime": "7:10 PM",
  "version": NumberLong(15),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-27T00:05:34.318Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53f938633219e0917059662d"),
  "catalogId": "MATH251",
  "classRoom": "Sherman Hall 013",
  "courseCredit": NumberLong(3),
  "courseName": "Multivariable Calculus",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-24T00:44:50.499Z"),
  "email": "tbudimir@umbc.edu",
  "endTime": "8:00 PM",
  "enrolledCount": NumberInt(5),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("540e2f753219e05717a849b0"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue",
  "quiz": [
    {
      "dueDate": ISODate("2014-09-02T00:00:00.0Z"),
      "dueTime": "7:15 PM",
      "name": "Quiz 0"
    },
    {
      "dueDate": ISODate("2014-09-09T00:00:00.0Z"),
      "dueTime": "7:15 PM",
      "name": "Quiz 1 12.1-12.4"
    },
    {
      "dueDate": ISODate("2014-09-16T00:00:00.0Z"),
      "dueTime": "7:15 PM",
      "name": "Quiz 2 12.5-13.2"
    },
    {
      "dueDate": ISODate("2014-09-30T00:00:00.0Z"),
      "dueTime": "7:15 PM",
      "name": "Quiz 3 14.1-14.2"
    },
    {
      "dueDate": ISODate("2014-10-07T00:00:00.0Z"),
      "dueTime": "7:15 PM",
      "name": "Quiz 4 14.3-14.5"
    },
    {
      "dueDate": ISODate("2014-10-14T00:00:00.0Z"),
      "dueTime": "7:15 PM",
      "name": "Quiz 5 14.6-14.8"
    },
    {
      "dueDate": ISODate("2014-10-21T00:00:00.0Z"),
      "dueTime": "7:15 PM",
      "name": "Quiz 6 3.10-3.11"
    },
    {
      "dueDate": ISODate("2014-11-04T00:00:00.0Z"),
      "dueTime": "7:15 PM",
      "name": "Quiz 7 15.7"
    },
    {
      "dueDate": ISODate("2014-11-11T00:00:00.0Z"),
      "dueTime": "7:15 PM",
      "name": "Quiz 8 15.8-16.1"
    },
    {
      "dueDate": ISODate("2014-11-18T00:00:00.0Z"),
      "dueTime": "7:15 PM",
      "name": "Quiz 9 16.2-16.4"
    }
  ],
  "section": NumberLong(9),
  "startTime": "7:10 PM",
  "version": NumberLong(12),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-27T00:05:36.312Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53fa3e68975abef615620163"),
  "catalogId": "PHED153",
  "classRoom": "SOND107",
  "courseCredit": NumberInt(3),
  "courseName": "SCUBA",
  "createdBy": "sasha@umbc.edu",
  "createdOn": ISODate("2014-08-24T19:35:04.500Z"),
  "email": "maier@umbc.edu",
  "endTime": "8:00 PM",
  "enrolledCount": NumberInt(1),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946a975ab33153700293"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Wed",
  "section": NumberInt(2),
  "startTime": "6:00 PM",
  "version": NumberLong(4),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:59:24.457Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53fbca9f975a76b7173fe60e"),
  "assignment": [
    {
      "dueDate": ISODate("2014-10-16T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Analysis of Organization"
    },
    {
      "dueDate": ISODate("2014-10-30T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Beginnings: Assessment, Planning and Intervention"
    },
    {
      "dueDate": ISODate("2014-11-20T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Group Proposal"
    },
    {
      "dueDate": ISODate("2014-11-13T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Group Records (Due Various Dates)"
    },
    {
      "dueDate": ISODate("2014-12-15T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Critique of Intervention"
    }
  ],
  "catalogId": "SOWK481",
  "classRoom": "TBA",
  "courseCredit": NumberInt(3),
  "courseName": "Social Work Methods II",
  "createdBy": "mmaskew1@umbc.edu",
  "createdOn": ISODate("2014-08-25T23:45:35.238Z"),
  "email": "knight@umbc.edu",
  "endTime": "2:15 PM",
  "enrolledCount": NumberInt(1),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9477975ab33153700620"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "section": NumberInt(1),
  "startTime": "1:00 PM",
  "version": NumberLong(7),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:58:44.630Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53fbd36e975a76b7173fe612"),
  "catalogId": "PSYC370",
  "classRoom": "Sondheim 105",
  "courseCredit": NumberInt(3),
  "courseName": "Sensation and Perception",
  "createdBy": "vg14773@umbc.edu",
  "createdOn": ISODate("2014-08-26T00:23:10.420Z"),
  "email": "rquiton1@umbc.edu",
  "endTime": "3:45 PM",
  "enrolledCount": NumberInt(2),
  "exam": [
    {
      "dueDate": ISODate("2014-09-23T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Exam 1"
    },
    {
      "dueDate": ISODate("2014-10-28T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Exam 2"
    },
    {
      "dueDate": ISODate("2014-12-09T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Exam 3"
    },
    {
      "dueDate": ISODate("2014-12-11T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Final Exam"
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946a975ab33153700293"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "misc": [
    {
      "dueDate": ISODate("2014-10-02T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Writing Assignment 1"
    },
    {
      "dueDate": ISODate("2014-11-11T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Writing Assignment 2"
    },
    {
      "dueDate": ISODate("2014-12-04T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Reflection Paper"
    }
  ],
  "quiz": [
    {
      "dueDate": ISODate("2014-09-02T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Syllabus Quiz"
    }
  ],
  "section": NumberInt(1),
  "startTime": "2:30 PM",
  "version": NumberLong(8),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:58:42.867Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53fd2cb0975a76b7173fe675"),
  "catalogId": "LING230",
  "classRoom": "Janet & Walter Sondheim Hall 204",
  "courseCredit": NumberInt(3),
  "courseName": "World Lang Communities",
  "createdBy": "sifra1@umbc.edu",
  "createdOn": ISODate("2014-08-27T00:56:16.296Z"),
  "email": "may@umbc.edu",
  "endTime": "12:45 AM",
  "enrolledCount": NumberInt(1),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9474975ab3315370057b"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "section": NumberInt(1),
  "startTime": "11:30 AM",
  "version": NumberLong(4),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:57:32.458Z"),
  "exam": [
    {
      "dueDate": ISODate("2014-09-25T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Test #1"
    },
    {
      "dueDate": ISODate("2014-10-30T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Test #2"
    },
    {
      "dueDate": ISODate("2014-12-09T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Test #3"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53fd49f6975a76b7173fe67e"),
  "catalogId": "PSYC406",
  "classRoom": "Sondheim 406",
  "courseCredit": NumberInt(3),
  "courseName": "Advanced Behavior Pathology",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-27T03:01:10.193Z"),
  "email": "jamurphy@umbc.edu",
  "endTime": "12:45 PM",
  "enrolledCount": NumberInt(0),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9476975ab331537005ff"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "misc": [
    {
      "dueDate": ISODate("2014-09-23T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Team Evaluation 1"
    },
    {
      "dueDate": ISODate("2014-10-23T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Team Evaluation 2"
    },
    {
      "dueDate": ISODate("2014-12-04T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Team Evaluation 3"
    },
    {
      "dueDate": ISODate("2014-12-15T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "FINAL PAPER"
    },
    {
      "dueDate": ISODate("2014-09-09T00:00:00.0Z"),
      "dueTime": "11:30 AM",
      "name": "Plagiarism Certification"
    },
    {
      "dueDate": ISODate("2014-09-25T00:00:00.0Z"),
      "dueTime": "11:30 AM",
      "name": "Extra Credit 1"
    },
    {
      "dueDate": ISODate("2014-10-28T00:00:00.0Z"),
      "dueTime": "11:30 AM",
      "name": "Extra Credit 2"
    },
    {
      "dueDate": ISODate("2014-12-09T00:00:00.0Z"),
      "dueTime": "11:30 AM",
      "name": "Extra Credit 3"
    }
  ],
  "section": NumberInt(1),
  "startTime": "11:30 AM",
  "version": NumberLong(13),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:57:26.61Z"),
  "exam": [
    {
      "dueDate": ISODate("2014-09-25T00:00:00.0Z"),
      "dueTime": "11:45 AM",
      "name": "Exam 1"
    },
    {
      "dueDate": ISODate("2014-10-28T00:00:00.0Z"),
      "dueTime": "11:45 AM",
      "name": "Exam 2"
    },
    {
      "dueDate": ISODate("2014-12-09T00:00:00.0Z"),
      "dueTime": "11:45 AM",
      "name": "Exam 3"
    }
  ],
  "quiz": [
    {
      "dueDate": ISODate("2014-09-04T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Syllabus Quiz"
    },
    {
      "dueDate": ISODate("2014-09-04T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Term Paper: TCRL"
    },
    {
      "dueDate": ISODate("2014-10-09T00:00:00.0Z"),
      "dueTime": "5:00 PM",
      "name": "Term Paper: AC1"
    },
    {
      "dueDate": ISODate("2014-11-04T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Term Paper: AC2"
    }
  ],
  "assignment": [
    {
      "dueDate": ISODate("2014-09-04T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Journal Entry"
    },
    {
      "dueDate": ISODate("2014-09-09T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Journal Entry"
    },
    {
      "dueDate": ISODate("2014-09-11T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Journal Entry"
    },
    {
      "dueDate": ISODate("2014-09-16T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Journal Entry"
    },
    {
      "dueDate": ISODate("2014-09-18T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Journal Entry"
    },
    {
      "dueDate": ISODate("2014-09-23T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Journal Entry"
    },
    {
      "dueDate": ISODate("2014-09-30T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Journal Entry"
    },
    {
      "dueDate": ISODate("2014-10-02T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Journal Entry"
    },
    {
      "dueDate": ISODate("2014-10-07T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Journal Entry"
    },
    {
      "dueDate": ISODate("2014-10-09T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Journal Entry"
    },
    {
      "dueDate": ISODate("2014-10-14T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Journal Entry"
    },
    {
      "dueDate": ISODate("2014-10-16T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Journal Entry"
    },
    {
      "dueDate": ISODate("2014-10-21T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Journal Entry"
    },
    {
      "dueDate": ISODate("2014-10-23T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Journal Entry"
    },
    {
      "dueDate": ISODate("2014-11-04T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Journal Entry"
    },
    {
      "dueDate": ISODate("2014-11-06T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Journal Entry"
    },
    {
      "dueDate": ISODate("2014-11-11T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Journal Entry"
    },
    {
      "dueDate": ISODate("2014-11-13T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Journal Entry"
    },
    {
      "dueDate": ISODate("2014-11-18T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Journal Entry"
    },
    {
      "dueDate": ISODate("2014-11-20T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Journal Entry"
    },
    {
      "dueDate": ISODate("2014-11-25T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Journal Entry"
    },
    {
      "dueDate": ISODate("2014-12-02T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Journal Entry"
    },
    {
      "dueDate": ISODate("2014-12-04T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Journal Entry"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53fd515c975a76b7173fe684"),
  "catalogId": "PSYC311",
  "classRoom": "MATH104",
  "courseCredit": NumberInt(3),
  "courseName": "Research Methods in Psychology I",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-27T03:32:44.581Z"),
  "email": "jamurphy@umbc.edu",
  "endTime": "10:50 AM",
  "enrolledCount": NumberInt(1),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9476975ab331537005ff"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed,Fri",
  "section": NumberInt(1),
  "startTime": "10:00 AM",
  "version": NumberLong(7),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:57:24.23Z"),
  "exam": [
    {
      "dueDate": ISODate("2014-09-22T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Exam 1"
    },
    {
      "dueDate": ISODate("2014-10-27T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Exam 2"
    },
    {
      "dueDate": ISODate("2014-12-01T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Exam 3"
    },
    {
      "dueDate": ISODate("2014-12-15T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Cumulative Final Exam"
    }
  ],
  "misc": [
    {
      "dueDate": ISODate("2014-08-28T00:00:00.0Z"),
      "dueTime": "11:45 PM",
      "name": "Team Survey and Test Signup"
    },
    {
      "dueDate": ISODate("2014-09-19T00:00:00.0Z"),
      "dueTime": "5:00 PM",
      "name": "Team Evaluations 1"
    },
    {
      "dueDate": ISODate("2014-10-24T00:00:00.0Z"),
      "dueTime": "5:00 PM",
      "name": "Team Evaluations 2"
    },
    {
      "dueDate": ISODate("2014-12-05T00:00:00.0Z"),
      "dueTime": "5:00 PM",
      "name": "Team Evaluations 3"
    },
    {
      "dueDate": ISODate("2014-12-12T00:00:00.0Z"),
      "dueTime": "5:00 PM",
      "name": "Radio Story: Group Eval"
    },
    {
      "dueDate": ISODate("2014-12-08T00:00:00.0Z"),
      "dueTime": "5:00 PM",
      "name": "Final Radio Story"
    },
    {
      "dueDate": ISODate("2014-11-24T00:00:00.0Z"),
      "dueTime": "9:30 AM",
      "name": "Radio Story:Group Draft Feedback"
    },
    {
      "dueDate": ISODate("2014-11-17T00:00:00.0Z"),
      "dueTime": "9:30 AM",
      "name": "Radio Story:Group Audio Draft"
    },
    {
      "dueDate": ISODate("2014-11-10T00:00:00.0Z"),
      "dueTime": "5:00 PM",
      "name": "Literature Search"
    },
    {
      "dueDate": ISODate("2014-11-03T00:00:00.0Z"),
      "dueTime": "9:30 AM",
      "name": "Group Script Draft"
    },
    {
      "dueDate": ISODate("2014-10-22T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Script Review"
    },
    {
      "dueDate": ISODate("2014-10-15T00:00:00.0Z"),
      "dueTime": "9:30 AM",
      "name": "Story Script Draft"
    },
    {
      "dueDate": ISODate("2014-10-03T00:00:00.0Z"),
      "dueTime": "3:00 PM",
      "name": "Stats Refresh"
    },
    {
      "dueDate": ISODate("2014-09-11T00:00:00.0Z"),
      "dueTime": "9:30 AM",
      "name": "Extra Credit 1"
    },
    {
      "dueDate": ISODate("2014-10-27T00:00:00.0Z"),
      "dueTime": "9:30 AM",
      "name": "Extra Credit 2"
    },
    {
      "dueDate": ISODate("2014-12-01T00:00:00.0Z"),
      "dueTime": "9:30 AM",
      "name": "Extra Credit 3"
    }
  ],
  "quiz": [
    {
      "dueDate": ISODate("2014-08-29T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Syllabus tQuiz & tQuiz in Class"
    },
    {
      "dueDate": ISODate("2014-09-05T00:00:00.0Z"),
      "dueTime": "9:30 AM",
      "name": "Unit 2 iQuiz & tQuiz in Class"
    },
    {
      "dueDate": ISODate("2014-09-10T00:00:00.0Z"),
      "dueTime": "9:30 AM",
      "name": "Unit 3 iQuiz & tQuiz in Class"
    },
    {
      "dueDate": ISODate("2014-09-17T00:00:00.0Z"),
      "dueTime": "9:30 AM",
      "name": "Unit 4 iQuiz & tQuiz in Class"
    },
    {
      "dueDate": ISODate("2014-09-24T00:00:00.0Z"),
      "dueTime": "9:30 AM",
      "name": "Unit 5\/PT 1 iQuiz & tQuiz in Class"
    },
    {
      "dueDate": ISODate("2014-10-01T00:00:00.0Z"),
      "dueTime": "9:30 AM",
      "name": "Unit 5\/PT 2 iQuiz & tQuiz in Class"
    },
    {
      "dueDate": ISODate("2014-10-06T00:00:00.0Z"),
      "dueTime": "9:30 AM",
      "name": "Unit 6 iQuiz & tQuiz in Class"
    },
    {
      "dueDate": ISODate("2014-10-13T00:00:00.0Z"),
      "dueTime": "9:30 AM",
      "name": "Unit 7 iQuiz & tQuiz in Class"
    },
    {
      "dueDate": ISODate("2014-10-20T00:00:00.0Z"),
      "dueTime": "9:30 AM",
      "name": "Unit 8 iQuiz & tQuiz in Class"
    },
    {
      "dueDate": ISODate("2014-10-29T00:00:00.0Z"),
      "dueTime": "9:30 AM",
      "name": "Unit 9 iQuiz & tQuiz in Class"
    },
    {
      "dueDate": ISODate("2014-11-05T00:00:00.0Z"),
      "dueTime": "9:30 AM",
      "name": "Unit 10 iQuiz & tQuiz in Class"
    },
    {
      "dueDate": ISODate("2014-11-14T00:00:00.0Z"),
      "dueTime": "9:30 AM",
      "name": "Unit 11 iQuiz & tQuiz in Class"
    },
    {
      "dueDate": ISODate("2014-11-21T00:00:00.0Z"),
      "dueTime": "9:30 AM",
      "name": "Unit 12 iQuiz & tQuiz in Class"
    }
  ],
  "assignment": [
    {
      "dueDate": ISODate("2014-09-05T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Unit 2 Online Activity"
    },
    {
      "dueDate": ISODate("2014-09-12T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Unit 3 & Research Choice"
    },
    {
      "dueDate": ISODate("2014-09-19T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Unit 4 Online Activity"
    },
    {
      "dueDate": ISODate("2014-09-26T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Unit 5\/PT1 & Story Title"
    },
    {
      "dueDate": ISODate("2014-09-19T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Unit 5\/PT2 & Title Voting"
    },
    {
      "dueDate": ISODate("2014-10-10T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Unit 6 Online Activity"
    },
    {
      "dueDate": ISODate("2014-10-17T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Unit 7 Online Activity"
    },
    {
      "dueDate": ISODate("2014-10-24T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Unit 8 Online Activity"
    },
    {
      "dueDate": ISODate("2014-10-24T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Unit 9 Online Activity"
    },
    {
      "dueDate": ISODate("2014-11-07T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Unit 10 Online Activity"
    },
    {
      "dueDate": ISODate("2014-11-14T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Unit 11 Online Activity"
    },
    {
      "dueDate": ISODate("2014-11-21T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Unit 12 Part 1 Online Activity"
    },
    {
      "dueDate": ISODate("2014-11-26T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Unit 12 Part 2 Online Activity"
    },
    {
      "dueDate": ISODate("2014-12-05T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Unit 13 Online Activity"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53fd649d975a76b7173fe68b"),
  "catalogId": "PSYC320",
  "classRoom": "Sherman Hall 014",
  "courseCredit": NumberInt(3),
  "courseName": "Psychological Assessment",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-27T04:54:53.307Z"),
  "email": "jamurphy@umbc.edu",
  "endTime": "2:50 PM",
  "enrolledCount": NumberInt(3),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9476975ab331537005ff"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed,Fri",
  "section": NumberInt(1),
  "startTime": "2:00 PM",
  "version": NumberLong(12),
  "exam": [
    {
      "dueDate": ISODate("2014-09-22T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "Exam 1"
    },
    {
      "dueDate": ISODate("2014-10-29T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "Exam 2"
    },
    {
      "dueDate": ISODate("2014-12-08T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "Exam 3"
    },
    {
      "dueDate": ISODate("2014-12-12T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Cumulative Final Exam"
    }
  ],
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:57:21.865Z"),
  "assignment": [
    {
      "dueDate": ISODate("2014-12-04T00:00:00.0Z"),
      "dueTime": "5:00 PM",
      "name": "2 Test Items"
    },
    {
      "dueDate": ISODate("2014-11-25T00:00:00.0Z"),
      "dueTime": "5:00 PM",
      "name": "2 Test Items"
    },
    {
      "dueDate": ISODate("2014-11-13T00:00:00.0Z"),
      "dueTime": "5:00 PM",
      "name": "2 Test Items"
    },
    {
      "dueDate": ISODate("2014-11-06T00:00:00.0Z"),
      "dueTime": "5:00 PM",
      "name": "2 Test Items"
    },
    {
      "dueDate": ISODate("2014-10-26T00:00:00.0Z"),
      "dueTime": "5:00 PM",
      "name": "2 Test Items"
    },
    {
      "dueDate": ISODate("2014-10-14T00:00:00.0Z"),
      "dueTime": "5:00 PM",
      "name": "2 Test Items"
    },
    {
      "dueDate": ISODate("2014-10-09T00:00:00.0Z"),
      "dueTime": "5:00 PM",
      "name": "2 Test Items"
    },
    {
      "dueDate": ISODate("2014-09-30T00:00:00.0Z"),
      "dueTime": "5:00 PM",
      "name": "2 Test Items"
    },
    {
      "dueDate": ISODate("2014-09-18T00:00:00.0Z"),
      "dueTime": "5:00 PM",
      "name": "2 Test Items"
    },
    {
      "dueDate": ISODate("2014-09-11T00:00:00.0Z"),
      "dueTime": "5:00 PM",
      "name": "2 Test Items"
    },
    {
      "dueDate": ISODate("2014-09-07T00:00:00.0Z"),
      "dueTime": "5:00 PM",
      "name": "2 Test Items"
    }
  ],
  "misc": [
    {
      "dueDate": ISODate("2014-10-15T00:00:00.0Z"),
      "dueTime": "1:30 PM",
      "name": "On-Line Assignment & Team Quiz in Class"
    },
    {
      "dueDate": ISODate("2014-10-17T00:00:00.0Z"),
      "dueTime": "1:30 PM",
      "name": "On-Line Assignment"
    },
    {
      "dueDate": ISODate("2014-10-20T00:00:00.0Z"),
      "dueTime": "1:30 PM",
      "name": "On-Line Assignment"
    },
    {
      "dueDate": ISODate("2014-09-19T00:00:00.0Z"),
      "dueTime": "5:00 PM",
      "name": "Team Evaluation 1"
    },
    {
      "dueDate": ISODate("2014-10-27T00:00:00.0Z"),
      "dueTime": "5:00 PM",
      "name": "Team Evaluation 2"
    },
    {
      "dueDate": ISODate("2014-12-05T00:00:00.0Z"),
      "dueTime": "5:00 PM",
      "name": "Team Evaluation 3"
    }
  ],
  "quiz": [
    {
      "dueDate": ISODate("2014-08-29T00:00:00.0Z"),
      "dueTime": "1:30 PM",
      "name": "Syllabus Quiz"
    },
    {
      "dueDate": ISODate("2014-09-03T00:00:00.0Z"),
      "dueTime": "1:30 PM",
      "name": "Ch 01, Part 1"
    },
    {
      "dueDate": ISODate("2014-09-05T00:00:00.0Z"),
      "dueTime": "1:30 PM",
      "name": "Ch 01, Part 2"
    },
    {
      "dueDate": ISODate("2014-09-08T00:00:00.0Z"),
      "dueTime": "1:30 PM",
      "name": "Ch 01, Part 3"
    },
    {
      "dueDate": ISODate("2014-09-10T00:00:00.0Z"),
      "dueTime": "1:30 PM",
      "name": "Ch 05, Part 1"
    },
    {
      "dueDate": ISODate("2014-09-12T00:00:00.0Z"),
      "dueTime": "1:30 PM",
      "name": "Ch 05, Part 2"
    },
    {
      "dueDate": ISODate("2014-09-15T00:00:00.0Z"),
      "dueTime": "1:30 PM",
      "name": "Ch 06, Part 1"
    },
    {
      "dueDate": ISODate("2014-09-17T00:00:00.0Z"),
      "dueTime": "1:30 PM",
      "name": "Ch 06, Part 2"
    },
    {
      "dueDate": ISODate("2014-09-19T00:00:00.0Z"),
      "dueTime": "1:30 PM",
      "name": "Ch 06, Part 3"
    },
    {
      "dueDate": ISODate("2014-09-24T00:00:00.0Z"),
      "dueTime": "1:30 PM",
      "name": "Ch 08, Part 1"
    },
    {
      "dueDate": ISODate("2014-09-26T00:00:00.0Z"),
      "dueTime": "1:30 PM",
      "name": "Ch 08, Part 2"
    },
    {
      "dueDate": ISODate("2014-09-29T00:00:00.0Z"),
      "dueTime": "1:30 PM",
      "name": "Ch 08, Part 3"
    },
    {
      "dueDate": ISODate("2014-10-01T00:00:00.0Z"),
      "dueTime": "1:30 PM",
      "name": "Ch 08, Part 4 & Team Quiz in Class"
    },
    {
      "dueDate": ISODate("2014-10-06T00:00:00.0Z"),
      "dueTime": "1:30 PM",
      "name": "Ch 09, Part 1"
    },
    {
      "dueDate": ISODate("2014-10-08T00:00:00.0Z"),
      "dueTime": "1:30 PM",
      "name": "Ch 09, Part 2"
    },
    {
      "dueDate": ISODate("2014-10-10T00:00:00.0Z"),
      "dueTime": "1:30 PM",
      "name": "Ch 09, Part 3"
    },
    {
      "dueDate": ISODate("2015-01-06T00:00:00.0Z"),
      "dueTime": "1:30 PM",
      "name": "Ch 10, Part 1"
    },
    {
      "dueDate": ISODate("2014-10-24T00:00:00.0Z"),
      "dueTime": "1:30 PM",
      "name": "Ch 11, Part 1"
    },
    {
      "dueDate": ISODate("2014-10-31T00:00:00.0Z"),
      "dueTime": "1:30 PM",
      "name": "Ch 12, Part 1"
    },
    {
      "dueDate": ISODate("2014-11-03T00:00:00.0Z"),
      "dueTime": "1:30 PM",
      "name": "Ch 12, Part 2"
    },
    {
      "dueDate": ISODate("2014-11-05T00:00:00.0Z"),
      "dueTime": "1:30 PM",
      "name": "Ch 12, Part 3"
    },
    {
      "dueDate": ISODate("2014-11-10T00:00:00.0Z"),
      "dueTime": "1:30 PM",
      "name": "Ch 13, Part 1"
    },
    {
      "dueDate": ISODate("2014-11-12T00:00:00.0Z"),
      "dueTime": "1:30 PM",
      "name": "Ch 13, Part 2"
    },
    {
      "dueDate": ISODate("2014-11-14T00:00:00.0Z"),
      "dueTime": "1:30 PM",
      "name": "Ch 13, Part 3"
    },
    {
      "dueDate": ISODate("2014-11-19T00:00:00.0Z"),
      "dueTime": "1:30 PM",
      "name": "Ch 15, Part 1"
    },
    {
      "dueDate": ISODate("2014-11-21T00:00:00.0Z"),
      "dueTime": "1:30 PM",
      "name": "Ch 15, Part 2"
    },
    {
      "dueDate": ISODate("2014-11-24T00:00:00.0Z"),
      "dueTime": "1:30 PM",
      "name": "Ch 15, Part 3"
    },
    {
      "dueDate": ISODate("2014-11-26T00:00:00.0Z"),
      "dueTime": "1:30 PM",
      "name": "Ch 15, Part 4 & Team Quiz in Class"
    },
    {
      "dueDate": ISODate("2014-12-01T00:00:00.0Z"),
      "dueTime": "1:30 PM",
      "name": "Ch 16, Part 1"
    },
    {
      "dueDate": ISODate("2014-12-05T00:00:00.0Z"),
      "dueTime": "1:30 PM",
      "name": "Ch 16, Part 3 & Team Quiz in Class"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53fa9ac4975a6811addfbfa5"),
  "catalogId": "HCST100",
  "classRoom": "Sherman Hall 145",
  "courseCredit": NumberInt(3),
  "courseName": "Human Context Sci\/Tech",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-25T02:09:07.283Z"),
  "email": "ebrown@umbc.edu",
  "endTime": "2:15 PM",
  "enrolledCount": NumberInt(3),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fdfdbd3219e07946ceeb4e"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed",
  "section": NumberInt(1),
  "startTime": "1:00 PM",
  "version": NumberLong(24),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:58:57.51Z"),
  "misc": [
    {
      "dueDate": ISODate("2014-09-18T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Essay #1"
    },
    {
      "dueDate": ISODate("2014-10-09T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Essay #2"
    },
    {
      "dueDate": ISODate("2014-10-30T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Essay #3"
    },
    {
      "dueDate": ISODate("2014-11-20T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Essay #4"
    },
    {
      "dueDate": ISODate("2014-12-13T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Essay #5"
    }
  ],
  "assignment": [
    {
      "dueDate": ISODate("2014-09-04T00:00:00.0Z"),
      "dueTime": "11:45 PM",
      "name": "Reading Notes #1"
    },
    {
      "dueDate": ISODate("2014-10-16T00:00:00.0Z"),
      "dueTime": "11:45 PM",
      "name": "Reading Notes #3"
    },
    {
      "dueDate": ISODate("2014-11-06T00:00:00.0Z"),
      "dueTime": "11:45 PM",
      "name": "Reading Notes #4"
    },
    {
      "dueDate": ISODate("2014-11-26T00:00:00.0Z"),
      "dueTime": "11:45 PM",
      "name": "Reading Notes #5"
    },
    {
      "dueDate": ISODate("2014-10-01T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "Reading Notes #2"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53fa95a2975a6811addfbfa4"),
  "catalogId": "MGMT360",
  "classRoom": "ITE406",
  "courseCredit": NumberInt(3),
  "courseName": "Business Law",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-25T01:47:14.810Z"),
  "email": "tmahoney@btlg.us",
  "endTime": "7:00 PM",
  "enrolledCount": NumberInt(5),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fdfcfe3219e0982eceeb4d"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Wed",
  "section": NumberInt(1),
  "startTime": "4:30 PM",
  "version": NumberLong(33),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:59:03.519Z"),
  "quiz": [
    {
      "dueDate": ISODate("2014-09-03T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Quiz 1 Ch1,Ch2,Ch3"
    },
    {
      "dueDate": ISODate("2014-09-10T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Quiz 2 Ch5,Ch6"
    },
    {
      "dueDate": ISODate("2014-09-24T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Quiz 3 Ch9,Ch10,Ch11 Part 1"
    },
    {
      "dueDate": ISODate("2014-10-01T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Quiz 4 Ch9,Ch10,Ch11 Part 2"
    },
    {
      "dueDate": ISODate("2014-10-08T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Quiz 5 Ch12,Ch13"
    },
    {
      "dueDate": ISODate("2014-10-22T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Quiz 6 Ch17,Ch20"
    },
    {
      "dueDate": ISODate("2014-10-29T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Quiz 7 Ch18, Ch19"
    },
    {
      "dueDate": ISODate("2014-11-12T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Quiz 8 Ch14"
    },
    {
      "dueDate": ISODate("2014-11-19T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Quiz 9 Ch21,Ch22"
    }
  ],
  "exam": [
    {
      "dueDate": ISODate("2014-09-17T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Exam 1 Ch1,2,3,5,6"
    },
    {
      "dueDate": ISODate("2014-10-15T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Exam 2 Ch9,10,11,12,13"
    },
    {
      "dueDate": ISODate("2014-11-05T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Exam 3 Ch17,18,19,23"
    },
    {
      "dueDate": ISODate("2014-12-15T00:00:00.0Z"),
      "dueTime": "3:30 PM",
      "name": "Final Exam"
    }
  ],
  "misc": [
    {
      "dueDate": ISODate("2014-11-26T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Case Analysis Due"
    },
    {
      "dueDate": ISODate("2014-11-12T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Trial Assignment Due"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53fa383e975abef615620160"),
  "catalogId": "CMSC341",
  "classRoom": "ITE227",
  "courseCredit": NumberInt(3),
  "courseName": "Data Structures",
  "createdBy": "sasha@umbc.edu",
  "createdOn": ISODate("2014-08-24T19:08:46.618Z"),
  "email": "nicholas@umbc.edu",
  "endTime": "3:45 PM",
  "enrolledCount": NumberInt(4),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946d975ab33153700333"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed",
  "section": NumberInt(4),
  "startTime": "2:30 PM",
  "version": NumberLong(20),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:59:30.251Z"),
  "exam": [
    {
      "dueDate": ISODate("2014-10-06T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Exam 1"
    },
    {
      "dueDate": ISODate("2014-11-10T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Exam 2"
    },
    {
      "dueDate": ISODate("2014-12-15T00:00:00.0Z"),
      "dueTime": "8:00 AM",
      "name": "Common Final"
    }
  ],
  "misc": [
    {
      "dueDate": ISODate("2014-09-10T00:00:00.0Z"),
      "dueTime": "12:00 AM",
      "name": "Project 0"
    },
    {
      "dueDate": ISODate("2014-09-30T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "Project 1"
    }
  ],
  "assignment": [
    {
      "dueDate": ISODate("2014-09-12T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "Homework #1"
    },
    {
      "dueDate": ISODate("2014-10-01T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Homework #2"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53fe7ddd975a76b7173fe6c4"),
  "catalogId": "HIST103",
  "classRoom": "IT104",
  "courseCredit": NumberInt(3),
  "courseName": "HIST 103",
  "createdBy": "lm5@umbc.edu",
  "createdOn": ISODate("2014-08-28T00:54:53.949Z"),
  "email": "juloakes@umbc.edu",
  "endTime": "11:00 AM",
  "enrolledCount": NumberInt(1),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9472975ab331537004b7"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed,Fri",
  "section": NumberInt(1),
  "startTime": "10:00 AM",
  "version": NumberLong(5),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:57:13.540Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53fe819d975a76b7173fe6c8"),
  "catalogId": "MATH152",
  "classRoom": "SOND204",
  "courseCredit": NumberInt(3),
  "courseName": "Calculus II Discussion",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-28T01:10:53.102Z"),
  "email": "tighe@umbc.edu",
  "endTime": "10:50 AM",
  "enrolledCount": NumberInt(5),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9474975ab3315370054e"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed",
  "quiz": [
    {
      "dueDate": ISODate("2014-09-03T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Quiz 1 on 6.1-6.2"
    },
    {
      "dueDate": ISODate("2014-09-10T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Quiz 2 on 6.3-6.4"
    },
    {
      "dueDate": ISODate("2014-09-17T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Quiz 3 on 7.1-7.2"
    },
    {
      "dueDate": ISODate("2014-10-01T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Quiz 4 on 7.4"
    },
    {
      "dueDate": ISODate("2014-10-08T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Quiz 5 on 7.7"
    },
    {
      "dueDate": ISODate("2014-10-15T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Quiz 6 on 7.8-8.2"
    },
    {
      "dueDate": ISODate("2014-10-29T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Quiz 7 on 11.4-11.5"
    },
    {
      "dueDate": ISODate("2014-11-05T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Quiz 8 on 11.6-11.7"
    },
    {
      "dueDate": ISODate("2014-11-12T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Quiz 9 on 11.8-11.9"
    },
    {
      "dueDate": ISODate("2014-11-26T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Quiz 10 on 10.5"
    },
    {
      "dueDate": ISODate("2014-12-03T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Quiz 11 on 10.1-10.2"
    }
  ],
  "section": NumberInt(2),
  "startTime": "10:00 AM",
  "version": NumberLong(10),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:57:04.972Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53fe8dee3219e0cc51ceeb4d"),
  "catalogId": "MATH152",
  "classRoom": "SOND203",
  "courseCredit": NumberLong(3),
  "courseName": "Calculus II Discussion",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-28T01:10:53.102Z"),
  "email": "tighe@umbc.edu",
  "endTime": "10:50 AM",
  "enrolledCount": NumberInt(5),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9474975ab3315370054e"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed",
  "quiz": [
    {
      "dueDate": ISODate("2014-09-03T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Quiz 1 on 6.1-6.2"
    },
    {
      "dueDate": ISODate("2014-09-10T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Quiz 2 on 6.3-6.4"
    },
    {
      "dueDate": ISODate("2014-09-17T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Quiz 3 on 7.1-7.2"
    },
    {
      "dueDate": ISODate("2014-10-01T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Quiz 4 on 7.4"
    },
    {
      "dueDate": ISODate("2014-10-08T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Quiz 5 on 7.7"
    },
    {
      "dueDate": ISODate("2014-10-15T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Quiz 6 on 7.8-8.2"
    },
    {
      "dueDate": ISODate("2014-10-29T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Quiz 7 on 11.4-11.5"
    },
    {
      "dueDate": ISODate("2014-11-05T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Quiz 8 on 11.6-11.7"
    },
    {
      "dueDate": ISODate("2014-11-12T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Quiz 9 on 11.8-11.9"
    },
    {
      "dueDate": ISODate("2014-11-26T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Quiz 10 on 10.5"
    },
    {
      "dueDate": ISODate("2014-12-03T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Quiz 11 on 10.1-10.2"
    }
  ],
  "section": NumberLong(3),
  "startTime": "10:00 AM",
  "version": NumberLong(9),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:57:06.936Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53fe8e413219e0982eceeb4f"),
  "catalogId": "MATH152",
  "classRoom": "MP103",
  "courseCredit": NumberLong(3),
  "courseName": "Calculus II Discussion",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-28T01:10:53.102Z"),
  "email": "tighe@umbc.edu",
  "endTime": "9:50 AM",
  "enrolledCount": NumberInt(4),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9474975ab3315370054e"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed",
  "quiz": [
    {
      "dueDate": ISODate("2014-09-03T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Quiz 1 on 6.1-6.2"
    },
    {
      "dueDate": ISODate("2014-09-10T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Quiz 2 on 6.3-6.4"
    },
    {
      "dueDate": ISODate("2014-09-17T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Quiz 3 on 7.1-7.2"
    },
    {
      "dueDate": ISODate("2014-10-01T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Quiz 4 on 7.4"
    },
    {
      "dueDate": ISODate("2014-10-08T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Quiz 5 on 7.7"
    },
    {
      "dueDate": ISODate("2014-10-15T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Quiz 6 on 7.8-8.2"
    },
    {
      "dueDate": ISODate("2014-10-29T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Quiz 7 on 11.4-11.5"
    },
    {
      "dueDate": ISODate("2014-11-05T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Quiz 8 on 11.6-11.7"
    },
    {
      "dueDate": ISODate("2014-11-12T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Quiz 9 on 11.8-11.9"
    },
    {
      "dueDate": ISODate("2014-11-26T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Quiz 10 on 10.5"
    },
    {
      "dueDate": ISODate("2014-12-03T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Quiz 11 on 10.1-10.2"
    }
  ],
  "section": NumberLong(4),
  "startTime": "9:00 AM",
  "version": NumberLong(6),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:57:08.942Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53fe8e6e3219e0982eceeb50"),
  "catalogId": "MATH152",
  "classRoom": "Performing Arts 108",
  "courseCredit": NumberLong(3),
  "courseName": "Calculus II Discussion",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-28T01:10:53.102Z"),
  "email": "tighe@umbc.edu",
  "endTime": "9:50 AM",
  "enrolledCount": NumberInt(4),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9474975ab3315370054e"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed",
  "quiz": [
    {
      "dueDate": ISODate("2014-09-03T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Quiz 1 on 6.1-6.2"
    },
    {
      "dueDate": ISODate("2014-09-10T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Quiz 2 on 6.3-6.4"
    },
    {
      "dueDate": ISODate("2014-09-17T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Quiz 3 on 7.1-7.2"
    },
    {
      "dueDate": ISODate("2014-10-01T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Quiz 4 on 7.4"
    },
    {
      "dueDate": ISODate("2014-10-08T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Quiz 5 on 7.7"
    },
    {
      "dueDate": ISODate("2014-10-15T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Quiz 6 on 7.8-8.2"
    },
    {
      "dueDate": ISODate("2014-10-29T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Quiz 7 on 11.4-11.5"
    },
    {
      "dueDate": ISODate("2014-11-05T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Quiz 8 on 11.6-11.7"
    },
    {
      "dueDate": ISODate("2014-11-12T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Quiz 9 on 11.8-11.9"
    },
    {
      "dueDate": ISODate("2014-11-26T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Quiz 10 on 10.5"
    },
    {
      "dueDate": ISODate("2014-12-03T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Quiz 11 on 10.1-10.2"
    }
  ],
  "section": NumberLong(5),
  "startTime": "9:00 AM",
  "version": NumberLong(7),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:57:11.638Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53fe7daa975a76b7173fe6c3"),
  "catalogId": "MATH152",
  "classRoom": "Sherman 003",
  "courseCredit": NumberInt(3),
  "courseName": "Calculus II",
  "createdBy": "zgarcia1@umbc.edu",
  "createdOn": ISODate("2014-08-28T00:54:01.800Z"),
  "email": "tighe@umbc.edu",
  "endTime": "11:50 AM",
  "enrolledCount": NumberInt(14),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9474975ab3315370054e"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed,Fri",
  "section": NumberInt(1),
  "startTime": "11:00 AM",
  "version": NumberLong(29),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:57:15.559Z"),
  "exam": [
    {
      "dueDate": ISODate("2014-09-24T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Exam 1 on 6.1-7.3"
    },
    {
      "dueDate": ISODate("2014-10-22T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Exam 2 on 7.4-11.3"
    },
    {
      "dueDate": ISODate("2014-11-19T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Exam 3 on 11.4-11.11"
    }
  ],
  "assignment": [
    {
      "dueDate": ISODate("2014-09-02T00:00:00.0Z"),
      "dueTime": "11:15 PM",
      "name": "Webassign 1"
    },
    {
      "dueDate": ISODate("2014-09-09T00:00:00.0Z"),
      "dueTime": "11:15 PM",
      "name": "Webassign 2"
    },
    {
      "dueDate": ISODate("2014-09-16T00:00:00.0Z"),
      "dueTime": "11:15 PM",
      "name": "Webassign 3"
    },
    {
      "dueDate": ISODate("2014-09-23T00:00:00.0Z"),
      "dueTime": "11:15 PM",
      "name": "Webassign 4"
    },
    {
      "dueDate": ISODate("2014-09-30T00:00:00.0Z"),
      "dueTime": "11:15 PM",
      "name": "Webassign 5"
    },
    {
      "dueDate": ISODate("2014-10-07T00:00:00.0Z"),
      "dueTime": "11:15 PM",
      "name": "Webassign 6"
    },
    {
      "dueDate": ISODate("2014-10-14T00:00:00.0Z"),
      "dueTime": "11:15 PM",
      "name": "Webassign 7"
    },
    {
      "dueDate": ISODate("2014-10-21T00:00:00.0Z"),
      "dueTime": "11:15 PM",
      "name": "Webassign 8"
    },
    {
      "dueDate": ISODate("2014-10-28T00:00:00.0Z"),
      "dueTime": "11:15 PM",
      "name": "Webassign 9"
    },
    {
      "dueDate": ISODate("2014-11-04T00:00:00.0Z"),
      "dueTime": "11:15 PM",
      "name": "Webassign 10"
    },
    {
      "dueDate": ISODate("2014-11-11T00:00:00.0Z"),
      "dueTime": "11:15 PM",
      "name": "Webassign 11"
    },
    {
      "dueDate": ISODate("2014-11-18T00:00:00.0Z"),
      "dueTime": "11:15 PM",
      "name": "Webassign 12"
    },
    {
      "dueDate": ISODate("2014-11-25T00:00:00.0Z"),
      "dueTime": "11:15 PM",
      "name": "Webassign 13"
    },
    {
      "dueDate": ISODate("2014-12-02T00:00:00.0Z"),
      "dueTime": "11:15 PM",
      "name": "Webassign 14"
    }
  ],
  "misc": [
    {
      "dueDate": ISODate("2014-08-29T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Office Hours CASTLE UC115D"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53ff6979975a76b7173fe6e2"),
  "catalogId": "GES101",
  "classRoom": "Admin 101",
  "courseCredit": NumberInt(3),
  "courseName": "Physical Geography",
  "createdBy": "cyoung9@umbc.edu",
  "createdOn": ISODate("2014-08-28T17:40:09.346Z"),
  "email": "studdsc@umbc.edu",
  "endTime": "2:15 PM",
  "enrolledCount": NumberInt(5),
  "exam": [
    {
      "dueDate": ISODate("2014-09-25T00:00:00.0Z"),
      "dueTime": "1:45 PM",
      "name": "Exam I"
    },
    {
      "dueDate": ISODate("2014-10-21T00:00:00.0Z"),
      "dueTime": "1:45 PM",
      "name": "Exam II"
    },
    {
      "dueDate": ISODate("2014-11-18T00:00:00.0Z"),
      "dueTime": "1:45 PM",
      "name": "Exam III"
    },
    {
      "dueDate": ISODate("2014-12-09T00:00:00.0Z"),
      "dueTime": "1:45 PM",
      "name": "Exam IV"
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946a975ab33153700293"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "section": NumberInt(2),
  "startTime": "1:00 PM",
  "version": NumberLong(7),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:57:02.960Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53fa952c975a6811addfbfa3"),
  "catalogId": "STAT351",
  "classRoom": "Web Web",
  "courseCredit": NumberInt(3),
  "courseName": "Applied Stat\/Business & Econ",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-25T01:45:16.252Z"),
  "email": "estanwy1@umbc.edu",
  "endTime": "3:15 PM",
  "enrolledCount": NumberInt(3),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9474975ab3315370054c"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "section": NumberInt(4),
  "startTime": "2:00 PM",
  "version": NumberLong(28),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:59:05.478Z"),
  "quiz": [
    {
      "dueDate": ISODate("2014-09-04T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "Quiz 1 Ch 1 & 2"
    },
    {
      "dueDate": ISODate("2014-09-11T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "Quiz 2 Chapter 3"
    },
    {
      "dueDate": ISODate("2014-09-18T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "Quiz 3 Chapter 4"
    },
    {
      "dueDate": ISODate("2014-10-02T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "Quiz 4 Chapter 6"
    },
    {
      "dueDate": ISODate("2014-10-09T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "Quiz 5 Ch 7.1-7.2"
    },
    {
      "dueDate": ISODate("2014-10-16T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "Quiz 6 Ch 7.4-7.5"
    },
    {
      "dueDate": ISODate("2014-10-23T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "Quiz 7 Ch 8.1 - 8.2"
    },
    {
      "dueDate": ISODate("2014-10-30T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "Quiz 8 Ch 9.1-9.3"
    },
    {
      "dueDate": ISODate("2014-11-13T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "Quiz 9 Chapter 10"
    },
    {
      "dueDate": ISODate("2014-11-20T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "Quiz 10 Ch 11.1-11.2"
    },
    {
      "dueDate": ISODate("2014-12-04T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "Quiz 11 Ch 12.1-12.3"
    }
  ],
  "exam": [
    {
      "dueDate": ISODate("2014-09-25T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "Exam 1 Ch 1 - 5"
    },
    {
      "dueDate": ISODate("2014-11-06T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "Exam 2 Ch 6 - 9"
    }
  ],
  "assignment": [
    {
      "dueDate": ISODate("2014-08-31T00:00:00.0Z"),
      "dueTime": "11:45 PM",
      "name": "Intro HW & Algebra Review"
    },
    {
      "dueDate": ISODate("2014-09-04T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "Ch 1 & 2"
    },
    {
      "dueDate": ISODate("2014-09-11T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "Ch 3"
    },
    {
      "dueDate": ISODate("2014-09-18T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "Ch 4"
    },
    {
      "dueDate": ISODate("2014-09-25T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "Ch 5"
    },
    {
      "dueDate": ISODate("2014-10-02T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "Ch 6"
    },
    {
      "dueDate": ISODate("2014-10-16T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "Ch 7"
    },
    {
      "dueDate": ISODate("2014-10-23T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "Ch 8"
    },
    {
      "dueDate": ISODate("2014-10-30T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "Ch 9"
    },
    {
      "dueDate": ISODate("2014-11-13T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "Ch 10"
    },
    {
      "dueDate": ISODate("2014-11-20T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "Ch 11"
    },
    {
      "dueDate": ISODate("2014-12-04T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "Ch 12"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53ffa7b2975a76b7173fe6f2"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-04T00:00:00.0Z"),
      "dueTime": "7:00 PM",
      "name": "Personal Bio"
    },
    {
      "dueDate": ISODate("2014-09-11T00:00:00.0Z"),
      "dueTime": "7:00 PM",
      "name": "Analytical Report Topics"
    }
  ],
  "catalogId": "ENGL393",
  "classRoom": "Performing Arts 318",
  "courseCredit": NumberInt(3),
  "courseName": "Technical Writing",
  "createdBy": "afree1@umbc.edu",
  "createdOn": ISODate("2014-08-28T22:05:38.358Z"),
  "email": "vickim@umbc.edu",
  "endTime": "9:45 PM",
  "enrolledCount": NumberInt(1),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9471975ab33153700469"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Wed",
  "section": NumberInt(11),
  "startTime": "7:00 PM",
  "version": NumberLong(3),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:56:51.911Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53ffc84e975a76b7173fe6f4"),
  "catalogId": "CMPE314",
  "classRoom": "Sondheim 409",
  "courseCredit": NumberInt(3),
  "courseName": "Principles of Electronic Circuits",
  "createdBy": "FR25852@umbc.edu",
  "createdOn": ISODate("2014-08-29T00:24:46.512Z"),
  "email": "liyan@umbc.edu",
  "endTime": "3:45 PM",
  "enrolledCount": NumberInt(2),
  "exam": [
    {
      "dueDate": ISODate("2014-10-02T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Midterm 1"
    },
    {
      "dueDate": ISODate("2014-11-06T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Midterm 2"
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946d975ab3315370034c"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "section": NumberInt(1),
  "startTime": "2:30 PM",
  "version": NumberLong(6),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:56:49.761Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5400762d975a76b7173fe702"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-03T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "HW 1 Ch 1, 2.1-2.5"
    },
    {
      "dueDate": ISODate("2014-09-10T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "HW 2 Ch 2.6,2.8-2.9,3.1-3.2"
    },
    {
      "dueDate": ISODate("2014-09-17T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "HW 3 Ch 3.3-3.7"
    },
    {
      "dueDate": ISODate("2014-09-29T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "HW 4 Chapter 4"
    },
    {
      "dueDate": ISODate("2014-10-06T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "HW 5 Chapter 5"
    },
    {
      "dueDate": ISODate("2014-10-13T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "HW 6 Chapter 6"
    },
    {
      "dueDate": ISODate("2014-10-22T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "HW 7 Chapter 7"
    },
    {
      "dueDate": ISODate("2014-10-29T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "HW 8 Chapter 8"
    },
    {
      "dueDate": ISODate("2014-11-05T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "HW 9 Chapter 9"
    },
    {
      "dueDate": ISODate("2014-11-12T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "HW 10 Chapter 10"
    },
    {
      "dueDate": ISODate("2014-11-26T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "HW 11 Chapter 11"
    },
    {
      "dueDate": ISODate("2014-12-03T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "HW 12 Chapter 12"
    }
  ],
  "catalogId": "STAT350",
  "classRoom": "Physics 101",
  "courseCredit": NumberInt(3),
  "courseName": "Stat w\/ App in the Bio Sciences",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-29T12:46:37.928Z"),
  "email": "yunliu@umbc.edu",
  "endTime": "11:50 AM",
  "enrolledCount": NumberInt(5),
  "exam": [
    {
      "dueDate": ISODate("2014-09-22T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Exam 1 Ch 1 - 3"
    },
    {
      "dueDate": ISODate("2014-10-15T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Exam 2 Ch 4 - 6"
    },
    {
      "dueDate": ISODate("2014-11-19T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Exam 3 Ch 7 - 10"
    },
    {
      "dueDate": ISODate("2014-11-19T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Exam 3 Ch 7 - 10"
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9474975ab33153700535"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed",
  "misc": [
    {
      "dueDate": ISODate("2014-10-10T00:00:00.0Z"),
      "dueTime": "11:45 PM",
      "name": "Project 1"
    },
    {
      "dueDate": ISODate("2014-11-14T00:00:00.0Z"),
      "dueTime": "11:45 PM",
      "name": "Project 2"
    },
    {
      "dueDate": ISODate("2014-12-10T00:00:00.0Z"),
      "dueTime": "11:45 PM",
      "name": "Project 3"
    }
  ],
  "quiz": [
    {
      "dueDate": ISODate("2014-09-03T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Quiz 1"
    },
    {
      "dueDate": ISODate("2014-09-10T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Quiz 2"
    },
    {
      "dueDate": ISODate("2014-09-17T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Quiz 3"
    },
    {
      "dueDate": ISODate("2014-09-29T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Quiz 4"
    },
    {
      "dueDate": ISODate("2014-10-06T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Quiz 5"
    },
    {
      "dueDate": ISODate("2014-10-13T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Quiz 6"
    },
    {
      "dueDate": ISODate("2014-10-22T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Quiz 7"
    },
    {
      "dueDate": ISODate("2014-10-29T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Quiz 8"
    },
    {
      "dueDate": ISODate("2014-11-05T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Quiz 9"
    },
    {
      "dueDate": ISODate("2014-11-12T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Quiz 10"
    },
    {
      "dueDate": ISODate("2014-11-26T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Quiz 11"
    },
    {
      "dueDate": ISODate("2014-12-03T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Quiz 12"
    }
  ],
  "section": NumberInt(1),
  "startTime": "10:00 AM",
  "version": NumberLong(18),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:56:47.669Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("54007ce6975a76b7173fe703"),
  "catalogId": "GERM201",
  "classRoom": "Performing Arts 107",
  "courseCredit": NumberInt(3),
  "courseName": "Intermediate German I",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-29T13:15:18.937Z"),
  "email": "xwolff@umbc.edu",
  "endTime": "11:15 AM",
  "enrolledCount": NumberInt(1),
  "exam": [
    {
      "dueDate": ISODate("2014-09-30T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Exam 1 Kapitel 8 und 9"
    },
    {
      "dueDate": ISODate("2014-10-23T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Exam 2"
    },
    {
      "dueDate": ISODate("2014-11-13T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Exam 3"
    },
    {
      "dueDate": ISODate("2014-12-16T00:00:00.0Z"),
      "dueTime": "10:30 AM",
      "name": "Final exam"
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9475975ab33153700591"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "section": NumberInt(1),
  "startTime": "10:00 AM",
  "version": NumberLong(10),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:56:42.380Z"),
  "misc": [
    {
      "dueDate": ISODate("2014-09-16T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Essay 1 Version 1"
    },
    {
      "dueDate": ISODate("2014-09-25T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Essay 1 Final"
    },
    {
      "dueDate": ISODate("2014-10-09T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Essay 2 Version 1"
    },
    {
      "dueDate": ISODate("2014-10-21T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Essay 2 Final"
    },
    {
      "dueDate": ISODate("2014-11-06T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Essay 3 Version 1"
    },
    {
      "dueDate": ISODate("2014-11-18T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Essay 3 Final"
    },
    {
      "dueDate": ISODate("2014-12-02T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Final Project"
    },
    {
      "dueDate": ISODate("2014-12-04T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Final Project"
    },
    {
      "dueDate": ISODate("2014-12-09T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Final Project"
    }
  ],
  "assignment": [
    {
      "dueDate": ISODate("2014-09-02T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Homework"
    },
    {
      "dueDate": ISODate("2014-09-04T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Homework"
    },
    {
      "dueDate": ISODate("2014-09-09T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Homework"
    },
    {
      "dueDate": ISODate("2014-09-11T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Homework"
    },
    {
      "dueDate": ISODate("2014-09-16T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Homework"
    },
    {
      "dueDate": ISODate("2014-09-18T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Homework"
    },
    {
      "dueDate": ISODate("2014-09-23T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Homework"
    },
    {
      "dueDate": ISODate("2014-09-25T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Homework"
    },
    {
      "dueDate": ISODate("2014-09-30T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Homework"
    },
    {
      "dueDate": ISODate("2014-10-02T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Homework"
    },
    {
      "dueDate": ISODate("2014-10-07T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Homework"
    },
    {
      "dueDate": ISODate("2014-10-09T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Homework"
    },
    {
      "dueDate": ISODate("2014-10-14T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Homework"
    },
    {
      "dueDate": ISODate("2014-10-16T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Homework"
    },
    {
      "dueDate": ISODate("2014-10-21T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Homework"
    },
    {
      "dueDate": ISODate("2014-10-23T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Homework"
    },
    {
      "dueDate": ISODate("2014-10-28T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Homework"
    },
    {
      "dueDate": ISODate("2014-10-30T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Homework"
    },
    {
      "dueDate": ISODate("2014-11-04T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Homework"
    },
    {
      "dueDate": ISODate("2014-11-06T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Homework"
    },
    {
      "dueDate": ISODate("2014-11-11T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Homework"
    },
    {
      "dueDate": ISODate("2014-11-13T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Homework"
    },
    {
      "dueDate": ISODate("2014-11-18T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Homework"
    },
    {
      "dueDate": ISODate("2014-11-20T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Homework"
    },
    {
      "dueDate": ISODate("2014-11-25T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Homework"
    },
    {
      "dueDate": ISODate("2014-12-02T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Homework"
    },
    {
      "dueDate": ISODate("2014-12-04T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Homework"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5400890f975a76b7173fe706"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-02T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Chapter 2"
    }
  ],
  "catalogId": "POLI301",
  "classRoom": "SONDHEIM 206",
  "courseCredit": NumberInt(3),
  "courseName": "Research Methods in Political Science",
  "createdBy": "alysram1@umbc.edu",
  "createdOn": ISODate("2014-08-29T14:07:11.495Z"),
  "email": "forestie@umbc.edu",
  "endTime": "11:15 AM",
  "enrolledCount": NumberInt(2),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9476975ab331537005d8"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "section": NumberInt(2),
  "startTime": "10:00 AM",
  "version": NumberLong(4),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:56:40.135Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53ff6b8a975a76b7173fe6e4"),
  "catalogId": "BIOL303",
  "classRoom": "MEYR030",
  "courseCredit": NumberInt(3),
  "courseName": "Cell Biology",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-28T17:48:58.307Z"),
  "email": "egreen@umbc.edu",
  "endTime": "2:15 PM",
  "enrolledCount": NumberInt(4),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53ff6c763219e0982eceeb51"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "section": NumberInt(1),
  "startTime": "1:00 PM",
  "version": NumberLong(17),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:57:00.880Z"),
  "exam": [
    {
      "dueDate": ISODate("2014-09-23T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Exam 1 Lectures 1 -7"
    },
    {
      "dueDate": ISODate("2014-10-16T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Exam 2 Lectures 8 - 13"
    },
    {
      "dueDate": ISODate("2014-11-11T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Exam 3 Lectures 14 - 19"
    },
    {
      "dueDate": ISODate("2014-12-09T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Exam 4 Lectures 20 - 25"
    },
    {
      "dueDate": ISODate("2014-12-16T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Comprehensive Final"
    }
  ],
  "assignment": [
    {
      "dueDate": ISODate("2014-09-02T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Homework"
    },
    {
      "dueDate": ISODate("2014-09-09T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Homework"
    },
    {
      "dueDate": ISODate("2014-09-16T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Homework"
    },
    {
      "dueDate": ISODate("2014-09-23T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Homework"
    },
    {
      "dueDate": ISODate("2014-09-30T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Homework"
    },
    {
      "dueDate": ISODate("2014-10-07T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Homework"
    },
    {
      "dueDate": ISODate("2014-10-14T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Homework"
    },
    {
      "dueDate": ISODate("2014-10-21T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Homework"
    },
    {
      "dueDate": ISODate("2014-10-28T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Homework"
    },
    {
      "dueDate": ISODate("2014-11-04T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Homework"
    },
    {
      "dueDate": ISODate("2014-11-11T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Homework"
    },
    {
      "dueDate": ISODate("2014-11-18T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Homework"
    },
    {
      "dueDate": ISODate("2014-11-25T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Homework"
    },
    {
      "dueDate": ISODate("2014-12-02T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Homework"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5400a274975a76b7173fe70b"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-22T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Using the library"
    },
    {
      "dueDate": ISODate("2014-10-01T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Regression"
    },
    {
      "dueDate": ISODate("2014-10-13T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "ANOVA"
    },
    {
      "dueDate": ISODate("2014-10-22T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Factorial ANOVA"
    },
    {
      "dueDate": ISODate("2014-11-05T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Single-subject Design"
    }
  ],
  "catalogId": "PSYC332",
  "classRoom": "M&P103",
  "courseCredit": NumberInt(3),
  "courseName": "Experimental Psychology  : Design and Analysis II",
  "createdBy": "vg14773@umbc.edu",
  "createdOn": ISODate("2014-08-29T15:55:32.894Z"),
  "email": "jlbecraft@umbc.edu",
  "endTime": "2:15 PM",
  "enrolledCount": NumberInt(2),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946a975ab33153700293"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed",
  "misc": [
    {
      "dueDate": ISODate("2014-09-08T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Respond to #1 Survey"
    },
    {
      "dueDate": ISODate("2014-09-24T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Article Review #1"
    },
    {
      "dueDate": ISODate("2014-10-06T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Research Project #1"
    },
    {
      "dueDate": ISODate("2014-10-08T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Research Project #2:  Annotated Bib of 2 References"
    },
    {
      "dueDate": ISODate("2014-10-15T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Data Collection for RP #2"
    },
    {
      "dueDate": ISODate("2014-10-20T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Specify RP #2 factors and covariates"
    },
    {
      "dueDate": ISODate("2014-10-29T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Article Review #2"
    },
    {
      "dueDate": ISODate("2014-11-03T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "IRB Application Packet"
    },
    {
      "dueDate": ISODate("2014-11-10T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Article Review #3"
    },
    {
      "dueDate": ISODate("2014-11-24T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "RP#2 Written Proposal"
    },
    {
      "dueDate": ISODate("2014-12-08T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "RP #2 Poster"
    },
    {
      "dueDate": ISODate("2014-12-08T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "RP #2 Final Paper"
    }
  ],
  "section": NumberInt(5),
  "startTime": "1:00 PM",
  "version": NumberLong(5),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:56:31.35Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5400baab975a76b7173fe713"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-08T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "HW 1"
    }
  ],
  "catalogId": "STAT451",
  "classRoom": "Information Technology 456",
  "courseCredit": NumberInt(3),
  "courseName": "Intro Probability Theory",
  "createdBy": "khareli1@umbc.edu",
  "createdOn": ISODate("2014-08-29T17:38:51.199Z"),
  "email": "estanwy1@umbc.edu",
  "endTime": "5:15 PM",
  "enrolledCount": NumberInt(1),
  "exam": [
    {
      "dueDate": ISODate("2014-10-08T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "EXAM 1"
    },
    {
      "dueDate": ISODate("2014-11-12T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "EXAM 2"
    },
    {
      "dueDate": ISODate("2014-12-15T00:00:00.0Z"),
      "dueTime": "3:30 PM",
      "name": "FINAL"
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9474975ab3315370054c"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed",
  "quiz": [
    {
      "dueDate": ISODate("2014-09-03T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Weekly Quiz 1"
    },
    {
      "dueDate": ISODate("2014-09-10T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Weekly Quiz 2"
    }
  ],
  "section": NumberInt(1),
  "startTime": "4:00 PM",
  "version": NumberLong(6),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:56:26.416Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5401df0b975ace6ec741761a"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-09T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Essay 1 Rough Draft"
    },
    {
      "dueDate": ISODate("2014-09-23T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Essay 1 Final Draft"
    },
    {
      "dueDate": ISODate("2014-10-14T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Essay 2 Rough Draft"
    },
    {
      "dueDate": ISODate("2014-10-21T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Essay 2 Final Draft"
    },
    {
      "dueDate": ISODate("2014-10-21T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Letter w\/ Essay 2"
    },
    {
      "dueDate": ISODate("2014-10-02T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "10 Annotated Bibliography for Essay 2"
    },
    {
      "dueDate": ISODate("2014-10-28T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Essay 3 Rough Draft"
    },
    {
      "dueDate": ISODate("2014-11-04T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Essay 3 Final"
    },
    {
      "dueDate": ISODate("2014-11-11T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "10 Interviews for Essay 4"
    },
    {
      "dueDate": ISODate("2014-11-11T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Essay 4 Rough Draft"
    },
    {
      "dueDate": ISODate("2014-11-18T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Essay 4 Final Draft"
    },
    {
      "dueDate": ISODate("2014-11-18T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Letter w\/ Essay 4"
    },
    {
      "dueDate": ISODate("2014-11-20T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Essay 5 Rough Draft"
    },
    {
      "dueDate": ISODate("2014-11-25T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Essay 5 Final Draft"
    }
  ],
  "catalogId": "ENGL100Y",
  "classRoom": "Performing Arts 314",
  "courseCredit": NumberInt(3),
  "courseName": "English Composition with Y section",
  "createdBy": "Bamin1@umbc.edu",
  "createdOn": ISODate("2014-08-30T14:26:19.193Z"),
  "email": "mabe@umbc.edu",
  "endTime": "11:15 AM",
  "enrolledCount": NumberInt(3),
  "exam": [
    {
      "dueDate": ISODate("2014-12-02T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "AW's Take-Home Essay Exam"
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9471975ab33153700463"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "section": NumberInt(3),
  "startTime": "10:00 AM",
  "version": NumberLong(8),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:53:53.478Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("54076eff975af2f957fdb82c"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-05T00:00:00.0Z"),
      "dueTime": "1:00 AM",
      "name": "Webassign #3"
    },
    {
      "dueDate": ISODate("2014-08-29T00:00:00.0Z"),
      "dueTime": "12:01 AM",
      "name": "Webassign #1"
    },
    {
      "dueDate": ISODate("2014-09-03T00:00:00.0Z"),
      "dueTime": "12:01 AM",
      "name": "Webassign #2"
    },
    {
      "dueDate": ISODate("2014-09-22T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Webassign #7"
    },
    {
      "dueDate": ISODate("2014-09-26T00:00:00.0Z"),
      "dueTime": "7:00 AM",
      "name": "Webassign #7"
    }
  ],
  "catalogId": "PHYS121",
  "classRoom": "Meyerhoff Chemistry 030",
  "courseCredit": NumberInt(3),
  "courseName": "Physics I",
  "createdBy": "keegan2@umbc.edu",
  "createdOn": ISODate("2014-09-03T19:41:51.747Z"),
  "email": "Dr.Worchesky@umbc.edu",
  "endTime": "9:50 AM",
  "enrolledCount": NumberInt(28),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9476975ab331537005d3"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed,Fri",
  "section": NumberInt(1),
  "startTime": "9:00 AM",
  "version": NumberLong(38),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:49:59.448Z"),
  "exam": [
    {
      "dueDate": ISODate("2014-09-24T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Exam 1"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("54222f1c975a1842ee355338"),
  "catalogId": "ZYX",
  "classRoom": "meyr",
  "courseCredit": NumberInt(3),
  "courseName": "xyz",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-09-24T02:40:28.703Z"),
  "email": "resta@umbc.edu",
  "endTime": "7:45 PM",
  "enrolledCount": NumberInt(0),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9476975ab33153700604"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Fri",
  "section": NumberInt(1),
  "startTime": "5:30 PM",
  "version": NumberLong(28),
  "lastUpdatedBy": "mprocto1@umbc.edu",
  "lastUpdatedOn": ISODate("2014-09-27T00:06:16.573Z"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-26T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "yes"
    }
  ],
  "exam": [
    {
      "dueDate": ISODate("2014-09-26T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "yay"
    }
  ],
  "misc": [
    {
      "dueDate": ISODate("2014-09-26T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "no"
    }
  ],
  "quiz": [
    {
      "dueDate": ISODate("2014-09-25T00:00:00.0Z"),
      "dueTime": "11:00 PM",
      "name": "1"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("542621fc975a8386e89b0442"),
  "catalogId": "PHYS122L",
  "classRoom": "MATH 104",
  "courseCredit": NumberInt(3),
  "courseName": "Physics Lab",
  "createdBy": "ldonato1@umbc.edu",
  "createdOn": ISODate("2014-09-27T02:33:32.253Z"),
  "email": "takacs@umbc.edu",
  "endTime": "5:30 PM",
  "enrolledCount": NumberInt(1),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9475975ab331537005d1"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue",
  "section": NumberInt(1),
  "startTime": "2:30 PM",
  "syllabusStatus": "ACTIVE",
  "version": NumberLong(0)
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("54009e783219e0c869ceeb4d"),
  "catalogId": "GERM201",
  "classRoom": "Engineering 022",
  "courseCredit": NumberLong(3),
  "courseName": "Intermediate German I",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-29T13:15:18.937Z"),
  "email": "xwolff@umbc.edu",
  "endTime": "12:45 PM",
  "enrolledCount": NumberInt(1),
  "exam": [
    {
      "dueDate": ISODate("2014-09-30T00:00:00.0Z"),
      "dueTime": "11:30 AM",
      "name": "Exam 1 Kapitel 8 und 9"
    },
    {
      "dueDate": ISODate("2014-10-23T00:00:00.0Z"),
      "dueTime": "11:30 AM",
      "name": "Exam 2"
    },
    {
      "dueDate": ISODate("2014-11-13T00:00:00.0Z"),
      "dueTime": "11:30 AM",
      "name": "Exam 3"
    },
    {
      "dueDate": ISODate("2014-12-11T00:00:00.0Z"),
      "dueTime": "10:30 AM",
      "name": "Final exam"
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9475975ab33153700591"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "section": NumberLong(2),
  "startTime": "11:30 AM",
  "version": NumberLong(9),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:56:45.49Z"),
  "misc": [
    {
      "dueDate": ISODate("2014-09-16T00:00:00.0Z"),
      "dueTime": "11:30 AM",
      "name": "Essay 1 Version 1"
    },
    {
      "dueDate": ISODate("2014-09-25T00:00:00.0Z"),
      "dueTime": "11:30 AM",
      "name": "Essay 1 Final"
    },
    {
      "dueDate": ISODate("2014-10-09T00:00:00.0Z"),
      "dueTime": "11:30 AM",
      "name": "Essay 2 Version 1"
    },
    {
      "dueDate": ISODate("2014-10-21T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Essay 2 Final"
    },
    {
      "dueDate": ISODate("2014-11-06T00:00:00.0Z"),
      "dueTime": "11:30 AM",
      "name": "Essay 3 Version 1"
    },
    {
      "dueDate": ISODate("2014-11-18T00:00:00.0Z"),
      "dueTime": "11:30 AM",
      "name": "Essay 3 Final"
    },
    {
      "dueDate": ISODate("2014-12-02T00:00:00.0Z"),
      "dueTime": "11:30 AM",
      "name": "Final Project"
    },
    {
      "dueDate": ISODate("2014-12-04T00:00:00.0Z"),
      "dueTime": "11:30 AM",
      "name": "Final Project"
    },
    {
      "dueDate": ISODate("2014-12-09T00:00:00.0Z"),
      "dueTime": "11:30 AM",
      "name": "Final Project"
    }
  ],
  "assignment": [
    {
      "dueDate": ISODate("2014-09-02T00:00:00.0Z"),
      "dueTime": "11:30 AM",
      "name": "Homework"
    },
    {
      "dueDate": ISODate("2014-09-04T00:00:00.0Z"),
      "dueTime": "11:30 AM",
      "name": "Homework"
    },
    {
      "dueDate": ISODate("2014-09-09T00:00:00.0Z"),
      "dueTime": "11:30 AM",
      "name": "Homework"
    },
    {
      "dueDate": ISODate("2014-09-11T00:00:00.0Z"),
      "dueTime": "11:30 AM",
      "name": "Homework"
    },
    {
      "dueDate": ISODate("2014-09-16T00:00:00.0Z"),
      "dueTime": "11:30 AM",
      "name": "Homework"
    },
    {
      "dueDate": ISODate("2014-09-18T00:00:00.0Z"),
      "dueTime": "11:30 AM",
      "name": "Homework"
    },
    {
      "dueDate": ISODate("2014-09-23T00:00:00.0Z"),
      "dueTime": "11:30 AM",
      "name": "Homework"
    },
    {
      "dueDate": ISODate("2014-09-25T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Homework"
    },
    {
      "dueDate": ISODate("2014-09-30T00:00:00.0Z"),
      "dueTime": "11:30 AM",
      "name": "Homework"
    },
    {
      "dueDate": ISODate("2014-10-02T00:00:00.0Z"),
      "dueTime": "11:30 AM",
      "name": "Homework"
    },
    {
      "dueDate": ISODate("2014-10-07T00:00:00.0Z"),
      "dueTime": "11:30 AM",
      "name": "Homework"
    },
    {
      "dueDate": ISODate("2014-10-09T00:00:00.0Z"),
      "dueTime": "11:30 AM",
      "name": "Homework"
    },
    {
      "dueDate": ISODate("2014-10-14T00:00:00.0Z"),
      "dueTime": "11:30 AM",
      "name": "Homework"
    },
    {
      "dueDate": ISODate("2014-10-16T00:00:00.0Z"),
      "dueTime": "11:30 AM",
      "name": "Homework"
    },
    {
      "dueDate": ISODate("2014-10-21T00:00:00.0Z"),
      "dueTime": "11:30 AM",
      "name": "Homework"
    },
    {
      "dueDate": ISODate("2014-10-23T00:00:00.0Z"),
      "dueTime": "11:30 AM",
      "name": "Homework"
    },
    {
      "dueDate": ISODate("2014-10-28T00:00:00.0Z"),
      "dueTime": "11:30 AM",
      "name": "Homework"
    },
    {
      "dueDate": ISODate("2014-10-30T00:00:00.0Z"),
      "dueTime": "11:30 AM",
      "name": "Homework"
    },
    {
      "dueDate": ISODate("2014-11-04T00:00:00.0Z"),
      "dueTime": "11:30 AM",
      "name": "Homework"
    },
    {
      "dueDate": ISODate("2014-11-06T00:00:00.0Z"),
      "dueTime": "11:30 AM",
      "name": "Homework"
    },
    {
      "dueDate": ISODate("2014-11-11T00:00:00.0Z"),
      "dueTime": "11:30 AM",
      "name": "Homework"
    },
    {
      "dueDate": ISODate("2014-11-13T00:00:00.0Z"),
      "dueTime": "11:30 AM",
      "name": "Homework"
    },
    {
      "dueDate": ISODate("2014-11-18T00:00:00.0Z"),
      "dueTime": "11:30 AM",
      "name": "Homework"
    },
    {
      "dueDate": ISODate("2014-11-20T00:00:00.0Z"),
      "dueTime": "11:30 AM",
      "name": "Homework"
    },
    {
      "dueDate": ISODate("2014-11-25T00:00:00.0Z"),
      "dueTime": "11:30 AM",
      "name": "Homework"
    },
    {
      "dueDate": ISODate("2014-12-02T00:00:00.0Z"),
      "dueTime": "11:30 AM",
      "name": "Homework"
    },
    {
      "dueDate": ISODate("2014-12-04T00:00:00.0Z"),
      "dueTime": "11:30 AM",
      "name": "Homework"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5400bca6975a76b7173fe714"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-16T00:00:00.0Z"),
      "dueTime": "5:00 PM",
      "name": "HW 1"
    },
    {
      "dueDate": ISODate("2014-09-25T00:00:00.0Z"),
      "dueTime": "5:00 PM",
      "name": "HW 2"
    },
    {
      "dueDate": ISODate("2014-10-02T00:00:00.0Z"),
      "dueTime": "5:00 PM",
      "name": "HW 3"
    },
    {
      "dueDate": ISODate("2014-10-09T00:00:00.0Z"),
      "dueTime": "5:00 PM",
      "name": "HW 4"
    },
    {
      "dueDate": ISODate("2014-10-16T00:00:00.0Z"),
      "dueTime": "5:00 PM",
      "name": "HW 5"
    },
    {
      "dueDate": ISODate("2014-10-28T00:00:00.0Z"),
      "dueTime": "5:00 PM",
      "name": "HW 6"
    },
    {
      "dueDate": ISODate("2014-11-06T00:00:00.0Z"),
      "dueTime": "5:00 PM",
      "name": "HW 7"
    },
    {
      "dueDate": ISODate("2014-11-13T00:00:00.0Z"),
      "dueTime": "5:00 PM",
      "name": "HW 8"
    },
    {
      "dueDate": ISODate("2014-11-20T00:00:00.0Z"),
      "dueTime": "5:00 PM",
      "name": "Project 1"
    },
    {
      "dueDate": ISODate("2014-12-09T00:00:00.0Z"),
      "dueTime": "5:00 PM",
      "name": "Project 2"
    }
  ],
  "catalogId": "CMSC201",
  "classRoom": "MEYR030",
  "courseCredit": NumberInt(3),
  "courseName": "Computer Science I for Majors",
  "createdBy": "khareli1@umbc.edu",
  "createdOn": ISODate("2014-08-29T17:47:18.803Z"),
  "email": "pedram@umbc.edu",
  "endTime": "6:45 PM",
  "enrolledCount": NumberInt(7),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("5400bef73219e0982eceeb55"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "section": NumberInt(7),
  "startTime": "5:30 PM",
  "version": NumberLong(9),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:56:24.332Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5400d450975a76b7173fe71e"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-04T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Reed and Schmuck Article Summary\/Response"
    },
    {
      "dueDate": ISODate("2014-09-04T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Discussion about Writing"
    },
    {
      "dueDate": ISODate("2014-09-30T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Essay #1 Rough Draft"
    }
  ],
  "catalogId": "ENGL100",
  "classRoom": "PAHB 314",
  "courseCredit": NumberInt(3),
  "courseName": "English Composition",
  "createdBy": "kwynn1@umbc.edu",
  "createdOn": ISODate("2014-08-29T19:28:16.893Z"),
  "email": "putzel@umbc.edu",
  "endTime": "2:15 PM",
  "enrolledCount": NumberInt(15),
  "exam": [
    {
      "dueDate": ISODate("2014-10-21T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Essay #1"
    },
    {
      "dueDate": ISODate("2014-10-28T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Essay #2"
    },
    {
      "dueDate": ISODate("2014-12-09T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Essay #3"
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9472975ab3315370046c"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "section": NumberInt(15),
  "startTime": "1:00 PM",
  "version": NumberLong(20),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:56:22.351Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5400d6e2975a76b7173fe720"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-04T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "Assignment 1"
    },
    {
      "dueDate": ISODate("2014-09-11T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "Assignment 2"
    },
    {
      "dueDate": ISODate("2014-09-18T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "Assignment 3"
    },
    {
      "dueDate": ISODate("2014-10-16T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "Assignment 4"
    },
    {
      "dueDate": ISODate("2014-11-06T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "Assignment 5"
    },
    {
      "dueDate": ISODate("2014-11-13T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "Assignment 6"
    }
  ],
  "catalogId": "FYE101",
  "classRoom": "ITE 104",
  "courseCredit": NumberInt(3),
  "courseName": "Intro to an Honors University Seminar",
  "createdBy": "kwynn1@umbc.edu",
  "createdOn": ISODate("2014-08-29T19:39:14.110Z"),
  "email": "wiggs@umbc.edu",
  "endTime": "7:00 PM",
  "enrolledCount": NumberInt(37),
  "exam": [
    {
      "dueDate": ISODate("2014-10-09T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "Personal Statement Outline 1"
    },
    {
      "dueDate": ISODate("2014-10-30T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "Personal Statement 2"
    },
    {
      "dueDate": ISODate("2014-12-04T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "Personal Statement 3"
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946a975ab33153700293"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Thu",
  "quiz": [
    {
      "dueDate": ISODate("2014-09-04T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "Journal 1"
    },
    {
      "dueDate": ISODate("2014-09-25T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "Journal 2"
    },
    {
      "dueDate": ISODate("2014-10-02T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "Journal 3"
    },
    {
      "dueDate": ISODate("2014-10-23T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "Journal 4"
    },
    {
      "dueDate": ISODate("2014-11-20T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "Journal 5"
    }
  ],
  "section": NumberInt(5),
  "startTime": "5:30 PM",
  "version": NumberLong(51),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:56:20.194Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5400da56975a76b7173fe722"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-25T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Self Reflection I"
    },
    {
      "dueDate": ISODate("2014-10-21T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Group Text Presentations"
    },
    {
      "dueDate": ISODate("2014-10-23T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Group Text Presentation"
    },
    {
      "dueDate": ISODate("2014-10-28T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "\"Nora\" Performance Response"
    },
    {
      "dueDate": ISODate("2014-11-04T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "1st Scene Presentation"
    },
    {
      "dueDate": ISODate("2014-11-25T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "\"GOL&C\" Performance Response"
    },
    {
      "dueDate": ISODate("2014-12-09T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Self-Reflection II"
    }
  ],
  "catalogId": "THTR110",
  "classRoom": "PAHB 102",
  "courseCredit": NumberInt(3),
  "courseName": "Intro to Acting",
  "createdBy": "dmorris3@umbc.edu",
  "createdOn": ISODate("2014-08-29T19:53:58.256Z"),
  "email": "rhirshorn@umbc.edu",
  "endTime": "11:15 AM",
  "enrolledCount": NumberInt(3),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946a975ab33153700293"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "misc": [
    {
      "dueDate": ISODate("2014-10-23T00:00:00.0Z"),
      "dueTime": "6:00 PM",
      "name": "\"Nora\"  @ Black Box"
    },
    {
      "dueDate": ISODate("2014-10-24T00:00:00.0Z"),
      "dueTime": "6:00 PM",
      "name": "\"Nora\" @ Black Box"
    },
    {
      "dueDate": ISODate("2014-10-25T00:00:00.0Z"),
      "dueTime": "6:00 PM",
      "name": "\"Nora\" @ Black Box"
    },
    {
      "dueDate": ISODate("2014-10-26T00:00:00.0Z"),
      "dueTime": "6:00 PM",
      "name": "\"Nora\" @ Black Box"
    },
    {
      "dueDate": ISODate("2014-11-20T00:00:00.0Z"),
      "dueTime": "6:00 PM",
      "name": "\"GOL&C\" @ Proscenium"
    },
    {
      "dueDate": ISODate("2014-11-21T00:00:00.0Z"),
      "dueTime": "6:00 PM",
      "name": "\"GOL&C\" @ Proscenium"
    },
    {
      "dueDate": ISODate("2014-11-22T00:00:00.0Z"),
      "dueTime": "6:00 PM",
      "name": "\"GOL&C\" @ Proscenium"
    },
    {
      "dueDate": ISODate("2014-11-23T00:00:00.0Z"),
      "dueTime": "6:00 PM",
      "name": "\"GOL&C\" @ Proscenium"
    }
  ],
  "section": NumberInt(2),
  "startTime": "10:00 AM",
  "version": NumberLong(6),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:56:16.782Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5400dcd9975a76b7173fe723"),
  "catalogId": "MATH151",
  "classRoom": "Sherman Hall 003",
  "courseCredit": NumberInt(3),
  "courseName": "Calculus and Analytic Geometry 1",
  "createdBy": "kwynn1@umbc.edu",
  "createdOn": ISODate("2014-08-29T20:04:41.231Z"),
  "email": "tighe@umbc.edu",
  "endTime": "11:00 AM",
  "enrolledCount": NumberInt(68),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9474975ab3315370054e"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed,Fri",
  "section": NumberInt(1),
  "startTime": "10:00 AM",
  "version": NumberLong(79),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:55:16.339Z"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-07T00:00:00.0Z"),
      "dueTime": "12:00 AM",
      "name": "HW #1"
    },
    {
      "dueDate": ISODate("2014-09-14T00:00:00.0Z"),
      "dueTime": "12:00 AM",
      "name": "HW #2"
    },
    {
      "dueDate": ISODate("2014-09-21T00:00:00.0Z"),
      "dueTime": "12:00 AM",
      "name": "HW #3"
    },
    {
      "dueDate": ISODate("2014-10-05T00:00:00.0Z"),
      "dueTime": "12:00 AM",
      "name": "HW #4"
    },
    {
      "dueDate": ISODate("2014-10-12T00:00:00.0Z"),
      "dueTime": "12:00 AM",
      "name": "HW #5"
    },
    {
      "dueDate": ISODate("2014-10-19T00:00:00.0Z"),
      "dueTime": "12:00 AM",
      "name": "HW #6"
    },
    {
      "dueDate": ISODate("2014-11-02T00:00:00.0Z"),
      "dueTime": "12:00 AM",
      "name": "HW #7"
    },
    {
      "dueDate": ISODate("2014-11-09T00:00:00.0Z"),
      "dueTime": "12:00 AM",
      "name": "HW #8"
    },
    {
      "dueDate": ISODate("2014-11-16T00:00:00.0Z"),
      "dueTime": "12:00 AM",
      "name": "HW #9"
    },
    {
      "dueDate": ISODate("2014-11-23T00:00:00.0Z"),
      "dueTime": "12:00 AM",
      "name": "HW #10"
    },
    {
      "dueDate": ISODate("2014-12-07T00:00:00.0Z"),
      "dueTime": "12:00 AM",
      "name": "HW #11"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5400e3d7975a76b7173fe726"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-03T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Ch. 2.1-2.6"
    },
    {
      "dueDate": ISODate("2014-09-03T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Video Lecture 4 Pt. 1"
    },
    {
      "dueDate": ISODate("2014-09-05T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Ch. 3.1-3.4"
    },
    {
      "dueDate": ISODate("2014-09-05T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "HW1: 1.15,1.23,1.81,1.87,2.35"
    },
    {
      "dueDate": ISODate("2014-09-08T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Ch. 3.5"
    },
    {
      "dueDate": ISODate("2014-09-08T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Video Lecture 7 Pt. 2"
    },
    {
      "dueDate": ISODate("2014-09-10T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Ch. 3.6"
    },
    {
      "dueDate": ISODate("2014-09-10T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Video Lecture 9 Pt. 1"
    },
    {
      "dueDate": ISODate("2014-09-12T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Ch. 3.7"
    },
    {
      "dueDate": ISODate("2014-09-12T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Video Lecture 8 Pt. 2"
    },
    {
      "dueDate": ISODate("2014-09-12T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "HW2: 2.73,3.5,3.19,3.31,3.48"
    },
    {
      "dueDate": ISODate("2014-09-15T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Ch. 3.8"
    },
    {
      "dueDate": ISODate("2014-09-15T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Video Lecture 9 Pt. 2"
    },
    {
      "dueDate": ISODate("2014-09-17T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Video Lecture 10 Pt. 1"
    },
    {
      "dueDate": ISODate("2014-09-19T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Video Lecture 11 Pt. 2"
    },
    {
      "dueDate": ISODate("2014-09-19T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "HW3: 3.45,3.46,3.92,3.103"
    },
    {
      "dueDate": ISODate("2014-09-24T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Ch. 4.1-4.2"
    },
    {
      "dueDate": ISODate("2014-09-26T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Ch. 4.3-4.4"
    },
    {
      "dueDate": ISODate("2014-09-26T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "HW4: 4.10,4.20,4.46"
    },
    {
      "dueDate": ISODate("2014-09-29T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Ch. 5.1-5.2"
    },
    {
      "dueDate": ISODate("2014-10-03T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "HW5: 4.72,5.20,5.23,5.32"
    },
    {
      "dueDate": ISODate("2014-10-06T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Ch. 5.3"
    },
    {
      "dueDate": ISODate("2014-10-08T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Video Lecture 12 Pt. 1"
    },
    {
      "dueDate": ISODate("2014-10-10T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "HW6: 5.40,5.55,5.59,5.65"
    },
    {
      "dueDate": ISODate("2014-10-14T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Ch. 5.4"
    },
    {
      "dueDate": ISODate("2014-10-17T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "HW7: 5.36,5.74,5.83,5.88"
    }
  ],
  "catalogId": "ENME320",
  "classRoom": "Performing Arts 132",
  "courseCredit": NumberInt(3),
  "courseName": "Fluid Mechanics",
  "createdBy": "Abrow1@umbc.edu",
  "createdOn": ISODate("2014-08-29T20:34:31.657Z"),
  "email": "eggleton@umbc.edu",
  "endTime": "11:50 AM",
  "enrolledCount": NumberInt(2),
  "exam": [
    {
      "dueDate": ISODate("2014-09-22T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Midterm1: Ch. 1-3"
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9474975ab33153700552"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed,Fri",
  "section": NumberInt(1),
  "startTime": "11:00 AM",
  "version": NumberLong(3),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:55:10.766Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5400e9cc975a76b7173fe728"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-15T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "HW1"
    },
    {
      "dueDate": ISODate("2014-09-25T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "HW2"
    },
    {
      "dueDate": ISODate("2014-10-08T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "HW3"
    },
    {
      "dueDate": ISODate("2014-10-16T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "HW4"
    },
    {
      "dueDate": ISODate("2014-10-27T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "HW5"
    },
    {
      "dueDate": ISODate("2014-11-06T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "HW6"
    },
    {
      "dueDate": ISODate("2014-11-24T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "HW7"
    },
    {
      "dueDate": ISODate("2014-12-04T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "HW8"
    }
  ],
  "catalogId": "ENME303",
  "classRoom": "ITE 102",
  "courseCredit": NumberInt(3),
  "courseName": "Topics in Engineering Mathematics",
  "createdBy": "Abrow1@umbc.edu",
  "createdOn": ISODate("2014-08-29T20:59:56.372Z"),
  "email": "msanchez@umbc.edu",
  "endTime": "10:00 AM",
  "enrolledCount": NumberInt(2),
  "exam": [
    {
      "dueDate": ISODate("2014-09-25T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Test1: Ch. 2.1-2.5,3.1-3.4,4.1-4.4"
    },
    {
      "dueDate": ISODate("2014-10-16T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Test2: Ch. 5.1-5.4,6.1-6.3,9.1-9.4"
    },
    {
      "dueDate": ISODate("2014-11-06T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Test3: Ch. 11.1-11.2,17.1-17.4,18.1-18.2,18.6"
    },
    {
      "dueDate": ISODate("2014-12-04T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Test4: Ch. 21.1-21.2, 23.1-23.2, 25.1-25.5, 27.1"
    },
    {
      "dueDate": ISODate("2014-12-15T00:00:00.0Z"),
      "dueTime": "10:30 AM",
      "name": "Final"
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946a975ab33153700293"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed",
  "misc": [
    {
      "dueDate": ISODate("2014-09-10T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Ch. 2.1-2.5"
    },
    {
      "dueDate": ISODate("2014-09-22T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Ch. 3.1-3.4"
    },
    {
      "dueDate": ISODate("2014-09-24T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Ch. 4.1-4.4"
    },
    {
      "dueDate": ISODate("2014-09-29T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Ch. 5.1-5.4"
    },
    {
      "dueDate": ISODate("2014-10-01T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Ch. 6.1-6.2"
    },
    {
      "dueDate": ISODate("2014-10-06T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Ch. 6.3"
    },
    {
      "dueDate": ISODate("2014-10-08T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Ch. 9.1-9.3"
    },
    {
      "dueDate": ISODate("2014-10-13T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Ch. 9.4"
    },
    {
      "dueDate": ISODate("2014-10-20T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Ch. 11.1-11.2"
    },
    {
      "dueDate": ISODate("2014-10-22T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Ch. 17.1-17.4"
    },
    {
      "dueDate": ISODate("2014-10-27T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Ch. 18.1"
    },
    {
      "dueDate": ISODate("2014-10-29T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Ch. 18.2"
    },
    {
      "dueDate": ISODate("2014-11-03T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Ch. 18.6"
    },
    {
      "dueDate": ISODate("2014-11-10T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Ch. 21.1"
    },
    {
      "dueDate": ISODate("2014-11-12T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Ch. 21.2"
    },
    {
      "dueDate": ISODate("2014-11-17T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Ch. 23.1-23.2"
    },
    {
      "dueDate": ISODate("2014-11-19T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Ch. 25.1-25.2"
    },
    {
      "dueDate": ISODate("2014-11-24T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Ch. 25.3-25.5"
    },
    {
      "dueDate": ISODate("2014-11-26T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Ch. 27.1"
    },
    {
      "dueDate": ISODate("2014-12-01T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Ch. 27.1"
    },
    {
      "dueDate": ISODate("2014-12-03T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Ch. 27.1"
    }
  ],
  "section": NumberInt(1),
  "startTime": "10:00 AM",
  "version": NumberLong(3),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:55:08.921Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5400ff6e975a76b7173fe72b"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-03T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Participation Assignment 1"
    },
    {
      "dueDate": ISODate("2014-09-08T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Participation Assignment 2"
    },
    {
      "dueDate": ISODate("2014-09-10T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Read Articles in BB"
    },
    {
      "dueDate": ISODate("2014-09-15T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Read Articles in BB"
    },
    {
      "dueDate": ISODate("2014-09-17T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Participation Assignment 3"
    },
    {
      "dueDate": ISODate("2014-09-22T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Participant Assignment 4"
    },
    {
      "dueDate": ISODate("2014-09-24T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Read Articles in BB"
    },
    {
      "dueDate": ISODate("2014-09-29T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Read Articles in BB"
    },
    {
      "dueDate": ISODate("2014-10-01T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Participation Assignment 5"
    },
    {
      "dueDate": ISODate("2014-10-01T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Essay #1 Rethinking the Melting Pot"
    },
    {
      "dueDate": ISODate("2014-10-06T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Read Articles in BB"
    },
    {
      "dueDate": ISODate("2014-10-13T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Group Work Essay 2"
    },
    {
      "dueDate": ISODate("2014-10-22T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Brainstorming Assignment"
    },
    {
      "dueDate": ISODate("2014-10-27T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Read RF book #1-92"
    },
    {
      "dueDate": ISODate("2014-10-29T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Read RF book #93-138"
    },
    {
      "dueDate": ISODate("2014-11-03T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Participation Assignment 6"
    },
    {
      "dueDate": ISODate("2014-11-03T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Read RF book #138-end"
    },
    {
      "dueDate": ISODate("2014-11-12T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Participation Assignment 7"
    },
    {
      "dueDate": ISODate("2014-11-26T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Take Home Final"
    },
    {
      "dueDate": ISODate("2014-12-12T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Final Project Due"
    }
  ],
  "catalogId": "AMST200",
  "classRoom": "Phys 201",
  "courseCredit": NumberInt(3),
  "courseName": "What is an American?",
  "createdBy": "sascott1@umbc.edu",
  "createdOn": ISODate("2014-08-29T22:32:14.888Z"),
  "email": "tbhalla@umbc.edu",
  "endTime": "2:15 PM",
  "enrolledCount": NumberInt(1),
  "exam": [
    {
      "dueDate": ISODate("2014-10-20T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Midterm"
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946a975ab3315370029b"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed",
  "section": NumberInt(1),
  "startTime": "1:00 PM",
  "version": NumberLong(4),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:55:07.285Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("54011425975a76b7173fe730"),
  "catalogId": "SOCY101",
  "classRoom": "ITE104",
  "courseCredit": NumberInt(3),
  "courseName": "Basic Concepts in Sociology",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-30T00:00:37.231Z"),
  "email": "mcozar1@umbc.edu",
  "endTime": "12:45 PM",
  "enrolledCount": NumberInt(28),
  "exam": [
    {
      "dueDate": ISODate("2014-10-02T00:00:00.0Z"),
      "dueTime": "11:30 AM",
      "name": "Exam 1"
    },
    {
      "dueDate": ISODate("2014-10-30T00:00:00.0Z"),
      "dueTime": "11:30 AM",
      "name": "Exam 2"
    },
    {
      "dueDate": ISODate("2014-12-04T00:00:00.0Z"),
      "dueTime": "11:30 AM",
      "name": "Exam 3"
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9477975ab3315370062e"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "section": NumberInt(1),
  "startTime": "11:30 AM",
  "version": NumberLong(31),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:55:05.511Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("54011729975a76b7173fe731"),
  "catalogId": "MATH150",
  "classRoom": "Lecture Hall 1",
  "courseCredit": NumberInt(3),
  "courseName": "Precalculus Mathematics",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-30T00:13:29.557Z"),
  "email": "raji@umbc.edu",
  "endTime": "9:50 AM",
  "enrolledCount": NumberInt(13),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9473975ab33153700524"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Wed,Fri",
  "misc": [
    {
      "dueDate": ISODate("2014-09-29T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Quiz 0 Make Up"
    }
  ],
  "section": NumberInt(1),
  "startTime": "9:00 AM",
  "version": NumberLong(19),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:53:59.211Z"),
  "exam": [
    {
      "dueDate": ISODate("2014-09-26T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "TEST 1 - 1.7, 1.8, 1.10, Ch 2, 3.1, 3.2"
    },
    {
      "dueDate": ISODate("2014-10-24T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "TEST 2 - 3.3, 3.7, Ch 4, 5.1, 5.2, 6.1, 6.3"
    },
    {
      "dueDate": ISODate("2014-11-26T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "TEST 3 - 5.3 - 5.5, 6.2, 6.4-6.6, 7.1 - 7.5"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5401183b3219e0bb07ceeb4d"),
  "catalogId": "MATH150",
  "classRoom": "Lecture Hall 1",
  "courseCredit": NumberLong(3),
  "courseName": "Precalculus Mathematics",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-30T00:13:29.557Z"),
  "email": "raji@umbc.edu",
  "endTime": "9:50 AM",
  "enrolledCount": NumberInt(1),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9473975ab33153700524"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Wed,Fri",
  "misc": [
    {
      "dueDate": ISODate("2014-09-29T00:00:00.0Z"),
      "dueTime": "8:30 PM",
      "name": "Quiz 0 Make Up"
    }
  ],
  "section": NumberLong(5),
  "startTime": "9:00 AM",
  "version": NumberLong(9),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:54:07.225Z"),
  "exam": [
    {
      "dueDate": ISODate("2014-09-26T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "TEST 1 - 1.7, 1.8, 1.10, Ch 2, 3.1, 3.2"
    },
    {
      "dueDate": ISODate("2014-10-24T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "TEST 2 - 3.3, 3.7, Ch 4, 5.1, 5.2, 6.1, 6.3"
    },
    {
      "dueDate": ISODate("2014-11-26T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "TEST 3 - 5.3 - 5.5, 6.2, 6.4-6.6, 7.1 - 7.5"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53fbc5e3975a76b7173fe605"),
  "catalogId": "Poli230",
  "classRoom": "Public Policy 206",
  "courseCredit": NumberInt(3),
  "courseName": "Introduction to Constitutional Law",
  "createdBy": "jonellm1@umbc.edu",
  "createdOn": ISODate("2014-08-25T23:25:23.668Z"),
  "email": "davisj@umbc.edu",
  "endTime": "2:15 PM",
  "enrolledCount": NumberInt(2),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9476975ab331537005d6"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "section": NumberInt(2),
  "startTime": "1:00 PM",
  "version": NumberLong(4),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:58:49.992Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53fa3728975abef61562015f"),
  "catalogId": "PHYS122",
  "classRoom": "ENG027",
  "courseCredit": NumberInt(3),
  "courseName": "Introductory Physics II",
  "createdBy": "sasha@umbc.edu",
  "createdOn": ISODate("2014-08-24T19:04:08.141Z"),
  "email": "andersoe@umbc.edu",
  "endTime": "1:50 PM",
  "enrolledCount": NumberInt(13),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9475975ab331537005c3"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed,Fri",
  "section": NumberInt(1),
  "startTime": "1:00 PM",
  "version": NumberLong(30),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:59:32.28Z"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-02T00:00:00.0Z"),
      "dueTime": "12:50 PM",
      "name": "Reading Quiz (Chapter 14)"
    },
    {
      "dueDate": ISODate("2014-09-08T00:00:00.0Z"),
      "dueTime": "12:50 PM",
      "name": "Reading Quiz (Chapter 15)"
    },
    {
      "dueDate": ISODate("2014-09-15T00:00:00.0Z"),
      "dueTime": "12:50 PM",
      "name": "Reading Quiz (Chapter 16.1 - 16.9)"
    },
    {
      "dueDate": ISODate("2014-09-22T00:00:00.0Z"),
      "dueTime": "12:50 PM",
      "name": "Reading Quiz (Chapter 17.1 - 17.7)"
    },
    {
      "dueDate": ISODate("2014-09-29T00:00:00.0Z"),
      "dueTime": "12:50 PM",
      "name": "Reading Quiz (Chapter 17.8 - 17.9)"
    },
    {
      "dueDate": ISODate("2014-09-04T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "Webassign #2"
    },
    {
      "dueDate": ISODate("2014-08-28T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "Webassign #1"
    },
    {
      "dueDate": ISODate("2014-10-06T00:00:00.0Z"),
      "dueTime": "12:50 PM",
      "name": "Reading Quiz"
    },
    {
      "dueDate": ISODate("2014-10-13T00:00:00.0Z"),
      "dueTime": "12:50 PM",
      "name": "Reading Quiz"
    },
    {
      "dueDate": ISODate("2014-10-20T00:00:00.0Z"),
      "dueTime": "12:50 PM",
      "name": "Reading Quiz"
    },
    {
      "dueDate": ISODate("2014-10-27T00:00:00.0Z"),
      "dueTime": "12:50 PM",
      "name": "Reading Quiz"
    },
    {
      "dueDate": ISODate("2014-11-03T00:00:00.0Z"),
      "dueTime": "12:50 PM",
      "name": "Reading Quiz"
    },
    {
      "dueDate": ISODate("2014-11-10T00:00:00.0Z"),
      "dueTime": "12:50 PM",
      "name": "Reading Quiz"
    },
    {
      "dueDate": ISODate("2014-11-17T00:00:00.0Z"),
      "dueTime": "12:50 PM",
      "name": "Reading Quiz"
    },
    {
      "dueDate": ISODate("2014-11-24T00:00:00.0Z"),
      "dueTime": "12:50 PM",
      "name": "Reading Quiz"
    },
    {
      "dueDate": ISODate("2014-09-09T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "Webassign #3"
    },
    {
      "dueDate": ISODate("2014-09-11T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "Webassign #4"
    },
    {
      "dueDate": ISODate("2014-09-16T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "Webassign #5"
    },
    {
      "dueDate": ISODate("2014-09-18T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "Webassign #6"
    },
    {
      "dueDate": ISODate("2014-09-23T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "Webassign #7"
    },
    {
      "dueDate": ISODate("2014-09-25T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "Webassign #8"
    },
    {
      "dueDate": ISODate("2014-09-30T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "Webassign #9"
    }
  ],
  "exam": [
    {
      "dueDate": ISODate("2014-10-03T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Exam 1 (Chapter 14 - 17)"
    },
    {
      "dueDate": ISODate("2014-11-07T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Exam 2 (Chapter 18 - 21)"
    },
    {
      "dueDate": ISODate("2014-12-05T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Exam 3 (Chapter 22 - 24)"
    },
    {
      "dueDate": ISODate("2014-12-17T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Comprehensive Final"
    }
  ],
  "quiz": [
    {
      "dueDate": ISODate("2014-09-05T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Quiz 1 (Chapter 14.1 - 14.6)"
    },
    {
      "dueDate": ISODate("2014-09-12T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Quiz 2 (Chapter 15.1 - 15.6)"
    },
    {
      "dueDate": ISODate("2014-09-19T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Quiz 3 (Chapter 16.1 - 16.5)"
    },
    {
      "dueDate": ISODate("2014-09-26T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Quiz 4 (Chapter 17.1 - 17.4)"
    },
    {
      "dueDate": ISODate("2014-10-10T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Quiz 5 (Chapter 18.1 - 18.3)"
    },
    {
      "dueDate": ISODate("2014-10-17T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Quiz 6 (Chapter 19.1 - 19.4)"
    },
    {
      "dueDate": ISODate("2014-10-24T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Quiz 7"
    },
    {
      "dueDate": ISODate("2014-10-31T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Quiz 8"
    },
    {
      "dueDate": ISODate("2014-11-14T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Quiz 9"
    },
    {
      "dueDate": ISODate("2014-11-21T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Quiz 10"
    },
    {
      "dueDate": ISODate("2014-12-01T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Quiz 11"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5401e18c975ace6ec741761b"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-03T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "Response to Fish Story"
    },
    {
      "dueDate": ISODate("2014-09-10T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "Post to Journal #1"
    },
    {
      "dueDate": ISODate("2014-09-26T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "Cultural Bubble Assignment #1"
    },
    {
      "dueDate": ISODate("2014-09-24T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "Post to Journal #2"
    },
    {
      "dueDate": ISODate("2014-10-17T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Writing Assignment"
    },
    {
      "dueDate": ISODate("2014-10-17T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "Cultural Bubble Assignment #2"
    },
    {
      "dueDate": ISODate("2014-10-08T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "Post to Journal #3"
    },
    {
      "dueDate": ISODate("2014-10-31T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Information Seeking Project"
    },
    {
      "dueDate": ISODate("2014-10-29T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "Post to Journal #4"
    },
    {
      "dueDate": ISODate("2014-11-14T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Faculty Interview Paper"
    },
    {
      "dueDate": ISODate("2014-11-19T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "Post to Journal #5"
    },
    {
      "dueDate": ISODate("2014-11-21T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "Cultural Bubble Assignment #3"
    },
    {
      "dueDate": ISODate("2014-12-05T00:00:00.0Z"),
      "dueTime": "2:15 PM",
      "name": "Post-Assessment"
    },
    {
      "dueDate": ISODate("2014-09-03T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "Pre-Assessment Survey"
    }
  ],
  "catalogId": "ENGL100Y",
  "classRoom": "Math And Psychology 105",
  "courseCredit": NumberInt(3),
  "courseName": "Introduction to an Honors University",
  "createdBy": "Bamin1@umbc.edu",
  "createdOn": ISODate("2014-08-30T14:37:00.940Z"),
  "email": "Fallin@umbc.edu",
  "endTime": "2:15 PM",
  "enrolledCount": NumberInt(3),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946a975ab33153700293"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Fri",
  "section": NumberLong(4),
  "startTime": "1:00 PM",
  "version": NumberLong(9),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:53:51.765Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("54011a7b3219e0bb07ceeb4e"),
  "catalogId": "MATH150",
  "classRoom": "Sherman 145",
  "courseCredit": NumberLong(3),
  "courseName": "Pre-Calculus Discussion",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-30T00:21:49.647Z"),
  "email": "raji@umbc.edu",
  "endTime": "10:50 AM",
  "enrolledCount": NumberInt(4),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9473975ab33153700524"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Wed",
  "section": NumberLong(4),
  "startTime": "10:00 AM",
  "version": NumberLong(12),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:53:55.268Z"),
  "quiz": [
    {
      "dueDate": ISODate("2014-09-10T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Quiz 1 Ch 2.1-2.4"
    },
    {
      "dueDate": ISODate("2014-09-17T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Quiz 2 Ch 2.5-2.7"
    },
    {
      "dueDate": ISODate("2014-10-01T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Quiz 3 Ch 3.3, 3.7"
    },
    {
      "dueDate": ISODate("2014-10-08T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Quiz 4 Ch 4.1-4.3"
    },
    {
      "dueDate": ISODate("2014-10-15T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Quiz 5 Ch 4.4 - 4.6"
    },
    {
      "dueDate": ISODate("2014-11-05T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Quiz 6 Ch 5.3, 5.4"
    },
    {
      "dueDate": ISODate("2014-11-12T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Quiz 7 Ch 5.5,6.2,6.4,6.5,6.6"
    },
    {
      "dueDate": ISODate("2014-11-19T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Quiz 8 Ch 7.1 - 7.3"
    },
    {
      "dueDate": ISODate("2014-12-03T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Quiz 9 Ch8.1 and Completing Square"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5401191d975a76b7173fe732"),
  "catalogId": "MATH150",
  "classRoom": "Math Pysc 104",
  "courseCredit": NumberInt(3),
  "courseName": "Pre-Calculus Discussion",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-30T00:21:49.647Z"),
  "email": "raji@umbc.edu",
  "endTime": "11:50 AM",
  "enrolledCount": NumberInt(5),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9473975ab33153700524"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Wed",
  "section": NumberInt(3),
  "startTime": "11:00 AM",
  "version": NumberLong(16),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:53:57.92Z"),
  "quiz": [
    {
      "dueDate": ISODate("2014-09-10T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Quiz 1 Ch 2.1-2.4"
    },
    {
      "dueDate": ISODate("2014-09-17T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Quiz 2 Ch 2.5-2.7"
    },
    {
      "dueDate": ISODate("2014-10-01T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Quiz 3 Ch 3.3, 3.7"
    },
    {
      "dueDate": ISODate("2014-10-08T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Quiz 4 Ch 4.1-4.3"
    },
    {
      "dueDate": ISODate("2014-10-15T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Quiz 5 Ch 4.4 - 4.6"
    },
    {
      "dueDate": ISODate("2014-11-05T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Quiz 6 Ch 5.3, 5.4"
    },
    {
      "dueDate": ISODate("2014-11-12T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Quiz 7 Ch 5.5,6.2,6.4,6.5,6.6"
    },
    {
      "dueDate": ISODate("2014-11-19T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Quiz 8 Ch 7.1 - 7.3"
    },
    {
      "dueDate": ISODate("2014-12-03T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Quiz 9 Ch8.1 and Completing Square"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5401fc0b975ace6ec741761f"),
  "catalogId": "PSYC100",
  "classRoom": "ITE104",
  "courseCredit": NumberInt(3),
  "courseName": "Intro to Psychology",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-30T16:30:03.311Z"),
  "email": "laurose1@umbc.edu",
  "endTime": "6:45 PM",
  "enrolledCount": NumberInt(14),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946a975ab33153700293"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed",
  "section": NumberInt(3),
  "startTime": "5:30 PM",
  "version": NumberLong(20),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:53:45.166Z"),
  "exam": [
    {
      "dueDate": ISODate("2014-09-13T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "FAQ Test due Online"
    },
    {
      "dueDate": ISODate("2014-09-24T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "Unit Exam 1"
    },
    {
      "dueDate": ISODate("2014-10-15T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "Unit Exam 2"
    },
    {
      "dueDate": ISODate("2014-11-10T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "Unit Exam 3"
    },
    {
      "dueDate": ISODate("2014-12-08T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "Unit Exam 4"
    },
    {
      "dueDate": ISODate("2014-12-15T00:00:00.0Z"),
      "dueTime": "6:00 PM",
      "name": "Final Exam Lecture Hall 7"
    }
  ],
  "misc": [
    {
      "dueDate": ISODate("2014-09-13T00:00:00.0Z"),
      "dueTime": "10:00 PM",
      "name": "Lab Registrations"
    },
    {
      "dueDate": ISODate("2014-09-23T00:00:00.0Z"),
      "dueTime": "10:00 PM",
      "name": "Lab on Ch 1,2,11,12"
    },
    {
      "dueDate": ISODate("2014-10-14T00:00:00.0Z"),
      "dueTime": "10:00 PM",
      "name": "Lab on Ch 3,4,5"
    },
    {
      "dueDate": ISODate("2014-11-06T00:00:00.0Z"),
      "dueTime": "10:00 PM",
      "name": "Lab on 10,6,7,8"
    },
    {
      "dueDate": ISODate("2014-12-04T00:00:00.0Z"),
      "dueTime": "10:00 PM",
      "name": "Lab on Ch 9,13,14,15"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("540201d1975ace6ec7417621"),
  "catalogId": "BIOL141",
  "classRoom": "MEYR030",
  "courseCredit": NumberInt(3),
  "courseName": "Foundations of Biology",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-30T16:54:41.974Z"),
  "email": "sokolove@umbc.edu",
  "endTime": "5:15 PM",
  "enrolledCount": NumberInt(37),
  "exam": [
    {
      "dueDate": ISODate("2014-09-30T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Exam 1 (Lectures Aug. 28 – Sept. 25)"
    },
    {
      "dueDate": ISODate("2014-11-04T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Exam 2  (Lectures Oct. 2 - Oct. 30)"
    },
    {
      "dueDate": ISODate("2014-12-04T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Exam 3 (Lectures Nov. 6 – Dec. 2)"
    },
    {
      "dueDate": ISODate("2014-12-16T00:00:00.0Z"),
      "dueTime": "8:00 AM",
      "name": "Cumulative Final Exam"
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946c975ab331537002d9"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "section": NumberInt(1),
  "startTime": "4:00 PM",
  "version": NumberLong(43),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:53:40.726Z"),
  "quiz": [
    {
      "dueDate": ISODate("2014-09-04T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "RQ1"
    },
    {
      "dueDate": ISODate("2014-09-09T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "RQ2"
    },
    {
      "dueDate": ISODate("2014-09-02T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "Mastering Biology"
    },
    {
      "dueDate": ISODate("2014-09-11T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "RQ3"
    },
    {
      "dueDate": ISODate("2014-09-16T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "RQ4"
    },
    {
      "dueDate": ISODate("2014-09-18T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "RQ5"
    },
    {
      "dueDate": ISODate("2014-09-25T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "RQ6"
    },
    {
      "dueDate": ISODate("2014-10-02T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "RQ7"
    },
    {
      "dueDate": ISODate("2014-10-09T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "RQ8"
    },
    {
      "dueDate": ISODate("2014-10-16T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "RQ9"
    },
    {
      "dueDate": ISODate("2014-10-21T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "RQ10"
    },
    {
      "dueDate": ISODate("2014-11-06T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "RQ11"
    },
    {
      "dueDate": ISODate("2014-11-11T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "RQ12"
    },
    {
      "dueDate": ISODate("2014-11-18T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "RQ13"
    },
    {
      "dueDate": ISODate("2014-11-25T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "RQ14"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("540215e13219e0310fceeb53"),
  "catalogId": "BIOL141H",
  "classRoom": "MEYR030",
  "courseCredit": NumberLong(3),
  "courseName": "Foundations of Biology Honors",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-30T16:54:41.974Z"),
  "email": "sokolove@umbc.edu",
  "endTime": "5:15 PM",
  "enrolledCount": NumberInt(10),
  "exam": [
    {
      "dueDate": ISODate("2014-09-30T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Exam 1 (Lectures Aug. 28 – Sept. 25)"
    },
    {
      "dueDate": ISODate("2014-11-04T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Exam 2  (Lectures Oct. 2 - Oct. 30)"
    },
    {
      "dueDate": ISODate("2014-12-04T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Exam 3 (Lectures Nov. 6 – Dec. 2)"
    },
    {
      "dueDate": ISODate("2014-12-16T00:00:00.0Z"),
      "dueTime": "8:00 AM",
      "name": "Cumulative Final Exam"
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946c975ab331537002d9"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "section": NumberLong(1),
  "startTime": "4:00 PM",
  "version": NumberLong(19),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:53:43.416Z"),
  "quiz": [
    {
      "dueDate": ISODate("2014-09-04T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "RQ1"
    },
    {
      "dueDate": ISODate("2014-09-09T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "RQ2"
    },
    {
      "dueDate": ISODate("2014-09-02T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "Mastering Biology"
    },
    {
      "dueDate": ISODate("2014-09-11T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "RQ3"
    },
    {
      "dueDate": ISODate("2014-09-16T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "RQ4"
    },
    {
      "dueDate": ISODate("2014-09-18T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "RQ5"
    },
    {
      "dueDate": ISODate("2014-09-25T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "RQ6"
    },
    {
      "dueDate": ISODate("2014-10-02T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "RQ7"
    },
    {
      "dueDate": ISODate("2014-10-09T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "RQ8"
    },
    {
      "dueDate": ISODate("2014-10-16T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "RQ9"
    },
    {
      "dueDate": ISODate("2014-10-21T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "RQ10"
    },
    {
      "dueDate": ISODate("2014-11-06T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "RQ11"
    },
    {
      "dueDate": ISODate("2014-11-11T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "RQ12"
    },
    {
      "dueDate": ISODate("2014-11-18T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "RQ13"
    },
    {
      "dueDate": ISODate("2014-11-25T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "RQ14"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("540216883219e07f21ceeb52"),
  "catalogId": "BIOL141H",
  "classRoom": "Bio Sciences 461",
  "courseCredit": NumberLong(3),
  "courseName": "Biology 141 Honors Discussion",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-30T17:12:28.782Z"),
  "email": "wolf@umbc.edu",
  "endTime": "11:50 AM",
  "enrolledCount": NumberInt(6),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946c975ab331537002df"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Fri",
  "section": NumberLong(10),
  "startTime": "11:00 AM",
  "version": NumberLong(11),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:53:38.866Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("54021e15975ace6ec7417628"),
  "catalogId": "PHIL152",
  "classRoom": "Performing Arts 234",
  "courseCredit": NumberInt(3),
  "courseName": "Intro to Moral Theory",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-30T18:55:17.369Z"),
  "email": "thor@umbc.edu",
  "endTime": "2:15 PM",
  "enrolledCount": NumberInt(4),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("5402abd03219e0542cea6884"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "section": NumberInt(5),
  "startTime": "1:00 PM",
  "version": NumberLong(10),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:53:10.930Z"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-04T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Homework 1"
    },
    {
      "dueDate": ISODate("2014-09-11T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Homework 2"
    },
    {
      "dueDate": ISODate("2014-09-18T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Homework 3"
    },
    {
      "dueDate": ISODate("2014-09-23T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Homework 4"
    },
    {
      "dueDate": ISODate("2014-10-14T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Homework 5"
    },
    {
      "dueDate": ISODate("2014-10-21T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Homework 6"
    },
    {
      "dueDate": ISODate("2014-10-23T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Homework 7"
    },
    {
      "dueDate": ISODate("2014-10-28T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Homework 8"
    },
    {
      "dueDate": ISODate("2014-11-04T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Homework 9"
    },
    {
      "dueDate": ISODate("2014-12-09T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Homework 10"
    }
  ],
  "misc": [
    {
      "dueDate": ISODate("2014-10-02T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Paper 1"
    },
    {
      "dueDate": ISODate("2014-11-11T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Paper 2"
    },
    {
      "dueDate": ISODate("2014-12-02T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Paper 3"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("54023623975ace6ec741762b"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-03T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "Sec 1.1 - 1.4"
    },
    {
      "dueDate": ISODate("2014-09-08T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "Sec 2.1 - 2.4"
    },
    {
      "dueDate": ISODate("2014-09-10T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "Sec 3.1 - 3.3"
    },
    {
      "dueDate": ISODate("2014-09-16T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "Sec 4.1 - 4.2"
    },
    {
      "dueDate": ISODate("2014-09-21T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "Sec 4.3 - 4.5"
    },
    {
      "dueDate": ISODate("2014-09-23T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "Sec 5.1 - 5.2"
    },
    {
      "dueDate": ISODate("2014-09-28T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "Sec 6.1 - 6.2"
    },
    {
      "dueDate": ISODate("2014-09-30T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "Sec 6.3 - 6.4"
    },
    {
      "dueDate": ISODate("2014-10-05T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "Sec 6.5"
    },
    {
      "dueDate": ISODate("2014-10-07T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "Sec 7.1 - 7.2"
    },
    {
      "dueDate": ISODate("2014-10-14T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "Sec 7.3 - 7.4"
    },
    {
      "dueDate": ISODate("2014-10-19T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "Sec 8.1"
    },
    {
      "dueDate": ISODate("2014-10-21T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "Sec 8.2"
    },
    {
      "dueDate": ISODate("2014-10-26T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "Sec 8.3"
    },
    {
      "dueDate": ISODate("2014-10-28T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "Sec 8.4 - 8.5"
    },
    {
      "dueDate": ISODate("2014-11-02T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "Sec 9.1"
    },
    {
      "dueDate": ISODate("2014-11-04T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "Sec 9.2"
    },
    {
      "dueDate": ISODate("2014-11-09T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "Sec 9.3"
    },
    {
      "dueDate": ISODate("2014-11-18T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "Sec 10.1"
    },
    {
      "dueDate": ISODate("2014-11-23T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "Sec 10.2"
    },
    {
      "dueDate": ISODate("2014-11-25T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "Sec 11.1"
    },
    {
      "dueDate": ISODate("2014-11-30T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "Sec 11.2"
    }
  ],
  "catalogId": "STAT121",
  "classRoom": "Sherman Hall 003",
  "courseCredit": NumberInt(3),
  "courseName": "Statistics 121",
  "createdBy": "Bamin1@umbc.edu",
  "createdOn": ISODate("2014-08-30T20:37:55.336Z"),
  "email": "slowikow@umbc.edu",
  "endTime": "3:45 PM",
  "enrolledCount": NumberInt(4),
  "exam": [
    {
      "dueDate": ISODate("2014-10-13T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Test #1 Ch. 1-6"
    },
    {
      "dueDate": ISODate("2014-11-17T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Test #2 Ch. 7-9"
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9474975ab3315370054a"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed",
  "misc": [
    {
      "dueDate": ISODate("2014-09-15T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Review Ch. 1-3"
    },
    {
      "dueDate": ISODate("2014-11-12T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Review"
    },
    {
      "dueDate": ISODate("2014-12-03T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Review Ch. 1-7"
    },
    {
      "dueDate": ISODate("2014-12-08T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Review Ch. 8-11"
    }
  ],
  "section": NumberInt(1),
  "startTime": "2:30 PM",
  "version": NumberLong(7),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:53:09.52Z"),
  "quiz": [
    {
      "dueDate": ISODate("2014-09-09T00:00:00.0Z"),
      "dueTime": "12:00 AM",
      "name": "Quiz 1"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("54024184975ace6ec741762f"),
  "catalogId": "STAT351",
  "classRoom": "ITE 002",
  "courseCredit": NumberInt(3),
  "courseName": "Applied Statistics for Business and Economics",
  "createdBy": "birring1@umbc.edu",
  "createdOn": ISODate("2014-08-30T21:26:28.450Z"),
  "email": "nandita@umbc.edu",
  "endTime": "11:50 AM",
  "enrolledCount": NumberInt(3),
  "exam": [
    {
      "dueDate": ISODate("2014-10-29T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Mid Term 1"
    },
    {
      "dueDate": ISODate("2014-12-05T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Mid Term 2"
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946e975ab3315370036e"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed,Fri",
  "quiz": [
    {
      "dueDate": ISODate("2014-09-10T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "1"
    },
    {
      "dueDate": ISODate("2014-10-01T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "2"
    },
    {
      "dueDate": ISODate("2014-08-15T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "3"
    },
    {
      "dueDate": ISODate("2014-11-12T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "4"
    },
    {
      "dueDate": ISODate("2014-11-26T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "5"
    }
  ],
  "section": NumberInt(1),
  "startTime": "11:00 AM",
  "version": NumberLong(4),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:53:07.408Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("54029bfe975a4dc5a81e8acb"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-08T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "HW #0"
    },
    {
      "dueDate": ISODate("2014-09-15T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "HW #1"
    },
    {
      "dueDate": ISODate("2014-09-22T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "HW #2"
    },
    {
      "dueDate": ISODate("2014-09-29T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "HW #3"
    },
    {
      "dueDate": ISODate("2014-10-06T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "HW #4"
    },
    {
      "dueDate": ISODate("2014-10-13T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "HW #5"
    },
    {
      "dueDate": ISODate("2014-10-20T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "HW #6"
    },
    {
      "dueDate": ISODate("2014-10-27T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "HW #7"
    },
    {
      "dueDate": ISODate("2014-11-03T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "HW #8"
    }
  ],
  "catalogId": "ENES101",
  "classRoom": "ITE238",
  "courseCredit": NumberInt(3),
  "courseName": "Intro to Engineering Discussion",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-31T03:52:30.737Z"),
  "email": "aspence@umbc.edu",
  "endTime": "4:20 PM",
  "enrolledCount": NumberInt(12),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9474975ab33153700556"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon",
  "quiz": [
    {
      "dueDate": ISODate("2014-09-15T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Quiz #1"
    },
    {
      "dueDate": ISODate("2014-09-22T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Quiz #2"
    },
    {
      "dueDate": ISODate("2014-09-29T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Quiz #3"
    },
    {
      "dueDate": ISODate("2014-10-06T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Quiz #4"
    },
    {
      "dueDate": ISODate("2014-10-13T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Quiz #5"
    },
    {
      "dueDate": ISODate("2014-10-20T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Quiz #6"
    },
    {
      "dueDate": ISODate("2014-11-10T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Quiz #8"
    },
    {
      "dueDate": ISODate("2014-11-17T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Quiz #9"
    }
  ],
  "section": NumberInt(2),
  "startTime": "2:30 PM",
  "version": NumberLong(27),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:52:48.422Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("54029f263219e0622bea6883"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-11T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "HW #0"
    },
    {
      "dueDate": ISODate("2014-09-18T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "HW #1"
    },
    {
      "dueDate": ISODate("2014-09-25T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "HW #2"
    },
    {
      "dueDate": ISODate("2014-10-02T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "HW #3"
    },
    {
      "dueDate": ISODate("2014-10-09T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "HW #4"
    },
    {
      "dueDate": ISODate("2014-10-16T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "HW #5"
    },
    {
      "dueDate": ISODate("2014-10-23T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "HW #6"
    },
    {
      "dueDate": ISODate("2014-10-30T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "HW #7"
    },
    {
      "dueDate": ISODate("2014-11-06T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "HW #8"
    }
  ],
  "catalogId": "ENES101",
  "classRoom": "ITE238",
  "courseCredit": NumberLong(3),
  "courseName": "Intro to Engineering Discussion",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-31T03:52:30.737Z"),
  "email": "aspence@umbc.edu",
  "endTime": "11:50 AM",
  "enrolledCount": NumberInt(19),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9474975ab33153700556"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Thu",
  "quiz": [
    {
      "dueDate": ISODate("2014-09-18T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Quiz #1"
    },
    {
      "dueDate": ISODate("2014-09-25T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Quiz #2"
    },
    {
      "dueDate": ISODate("2014-10-02T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Quiz #3"
    },
    {
      "dueDate": ISODate("2014-10-09T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Quiz #4"
    },
    {
      "dueDate": ISODate("2014-10-16T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Quiz #5"
    },
    {
      "dueDate": ISODate("2014-10-23T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Quiz #6"
    },
    {
      "dueDate": ISODate("2014-11-13T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Quiz #8"
    },
    {
      "dueDate": ISODate("2014-11-20T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Quiz #9"
    }
  ],
  "section": NumberLong(3),
  "startTime": "10:00 AM",
  "version": NumberLong(31),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:52:50.323Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5402a1973219e07a2bea6883"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-11T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "HW #0"
    },
    {
      "dueDate": ISODate("2014-09-18T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "HW #1"
    },
    {
      "dueDate": ISODate("2014-09-25T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "HW #2"
    },
    {
      "dueDate": ISODate("2014-10-02T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "HW #3"
    },
    {
      "dueDate": ISODate("2014-10-09T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "HW #4"
    },
    {
      "dueDate": ISODate("2014-10-16T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "HW #5"
    },
    {
      "dueDate": ISODate("2014-10-23T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "HW #6"
    },
    {
      "dueDate": ISODate("2014-10-30T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "HW #7"
    },
    {
      "dueDate": ISODate("2014-11-06T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "HW #8"
    }
  ],
  "catalogId": "ENES101",
  "classRoom": "ITE238",
  "courseCredit": NumberLong(3),
  "courseName": "Intro to Engineering Discussion",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-31T03:52:30.737Z"),
  "email": "aspence@umbc.edu",
  "endTime": "1:50 PM",
  "enrolledCount": NumberInt(8),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9474975ab33153700556"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Thu",
  "quiz": [
    {
      "dueDate": ISODate("2014-09-18T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "Quiz #1"
    },
    {
      "dueDate": ISODate("2014-09-25T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "Quiz #2"
    },
    {
      "dueDate": ISODate("2014-10-02T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "Quiz #3"
    },
    {
      "dueDate": ISODate("2014-10-09T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "Quiz #4"
    },
    {
      "dueDate": ISODate("2014-10-16T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "Quiz #5"
    },
    {
      "dueDate": ISODate("2014-10-23T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "Quiz #6"
    },
    {
      "dueDate": ISODate("2014-11-13T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "Quiz #8"
    },
    {
      "dueDate": ISODate("2014-11-20T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "Quiz #9"
    }
  ],
  "section": NumberLong(4),
  "startTime": "12:00 PM",
  "version": NumberLong(17),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:52:53.399Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5402a1ff3219e0622bea6884"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-11T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "HW #0"
    },
    {
      "dueDate": ISODate("2014-09-18T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "HW #1"
    },
    {
      "dueDate": ISODate("2014-09-25T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "HW #2"
    },
    {
      "dueDate": ISODate("2014-10-02T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "HW #3"
    },
    {
      "dueDate": ISODate("2014-10-09T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "HW #4"
    },
    {
      "dueDate": ISODate("2014-10-16T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "HW #5"
    },
    {
      "dueDate": ISODate("2014-10-23T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "HW #6"
    },
    {
      "dueDate": ISODate("2014-10-30T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "HW #7"
    },
    {
      "dueDate": ISODate("2014-11-06T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "HW #8"
    }
  ],
  "catalogId": "ENES101",
  "classRoom": "ITE238",
  "courseCredit": NumberLong(3),
  "courseName": "Intro to Engineering Discussion",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-31T03:52:30.737Z"),
  "email": "aspence@umbc.edu",
  "endTime": "3:50 PM",
  "enrolledCount": NumberInt(9),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9474975ab33153700556"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Thu",
  "quiz": [
    {
      "dueDate": ISODate("2014-09-18T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "Quiz #1"
    },
    {
      "dueDate": ISODate("2014-09-25T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "Quiz #2"
    },
    {
      "dueDate": ISODate("2014-10-02T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "Quiz #3"
    },
    {
      "dueDate": ISODate("2014-10-09T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "Quiz #4"
    },
    {
      "dueDate": ISODate("2014-10-16T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "Quiz #5"
    },
    {
      "dueDate": ISODate("2014-10-23T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "Quiz #6"
    },
    {
      "dueDate": ISODate("2014-11-13T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "Quiz #8"
    },
    {
      "dueDate": ISODate("2014-11-20T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "Quiz #9"
    }
  ],
  "section": NumberLong(9),
  "startTime": "2:00 PM",
  "version": NumberLong(20),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:52:55.495Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5402a3693219e0622bea6885"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-09T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "HW #0"
    },
    {
      "dueDate": ISODate("2014-09-16T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "HW #1"
    },
    {
      "dueDate": ISODate("2014-09-23T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "HW #2"
    },
    {
      "dueDate": ISODate("2014-09-30T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "HW #3"
    },
    {
      "dueDate": ISODate("2014-10-07T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "HW #4"
    },
    {
      "dueDate": ISODate("2014-10-14T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "HW #5"
    },
    {
      "dueDate": ISODate("2014-10-21T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "HW #6"
    },
    {
      "dueDate": ISODate("2014-10-28T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "HW #7"
    },
    {
      "dueDate": ISODate("2014-11-04T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "HW #8"
    }
  ],
  "catalogId": "ENES101",
  "classRoom": "ITE238",
  "courseCredit": NumberLong(3),
  "courseName": "Intro to Engineering Discussion",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-31T03:51:00.0Z"),
  "email": "aspence@umbc.edu",
  "endTime": "1:50 PM",
  "enrolledCount": NumberInt(8),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9474975ab33153700556"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue",
  "quiz": [
    {
      "dueDate": ISODate("2014-09-16T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "Quiz #1"
    },
    {
      "dueDate": ISODate("2014-09-23T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "Quiz #2"
    },
    {
      "dueDate": ISODate("2014-09-30T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "Quiz #3"
    },
    {
      "dueDate": ISODate("2014-10-07T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "Quiz #4"
    },
    {
      "dueDate": ISODate("2014-10-14T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "Quiz #5"
    },
    {
      "dueDate": ISODate("2014-10-21T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "Quiz #6"
    },
    {
      "dueDate": ISODate("2014-11-11T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "Quiz #8"
    },
    {
      "dueDate": ISODate("2014-11-18T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "Quiz #9"
    }
  ],
  "section": NumberLong(5),
  "startTime": "12:00 PM",
  "version": NumberLong(21),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:52:57.321Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5402a67b3219e07a2bea6884"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-09T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "HW #0"
    },
    {
      "dueDate": ISODate("2014-09-16T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "HW #1"
    },
    {
      "dueDate": ISODate("2014-09-23T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "HW #2"
    },
    {
      "dueDate": ISODate("2014-09-30T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "HW #3"
    },
    {
      "dueDate": ISODate("2014-10-07T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "HW #4"
    },
    {
      "dueDate": ISODate("2014-10-14T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "HW #5"
    },
    {
      "dueDate": ISODate("2014-10-21T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "HW #6"
    },
    {
      "dueDate": ISODate("2014-10-28T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "HW #7"
    },
    {
      "dueDate": ISODate("2014-11-04T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "HW #8"
    }
  ],
  "catalogId": "ENES101",
  "classRoom": "ITE238",
  "courseCredit": NumberLong(3),
  "courseName": "Intro to Engineering Discussion",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-31T03:51:00.0Z"),
  "email": "aspence@umbc.edu",
  "endTime": "11:50 PM",
  "enrolledCount": NumberInt(22),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9474975ab33153700556"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue",
  "quiz": [
    {
      "dueDate": ISODate("2014-09-16T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Quiz #1"
    },
    {
      "dueDate": ISODate("2014-09-23T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Quiz #2"
    },
    {
      "dueDate": ISODate("2014-09-30T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Quiz #3"
    },
    {
      "dueDate": ISODate("2014-10-07T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Quiz #4"
    },
    {
      "dueDate": ISODate("2014-10-14T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Quiz #5"
    },
    {
      "dueDate": ISODate("2014-10-21T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Quiz #6"
    },
    {
      "dueDate": ISODate("2014-11-11T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Quiz #8"
    },
    {
      "dueDate": ISODate("2014-11-18T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Quiz #9"
    }
  ],
  "section": NumberLong(7),
  "startTime": "10:00 AM",
  "version": NumberLong(29),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:52:59.78Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5402a6b33219e0622bea6886"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-09T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "HW #0"
    },
    {
      "dueDate": ISODate("2014-09-16T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "HW #1"
    },
    {
      "dueDate": ISODate("2014-09-23T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "HW #2"
    },
    {
      "dueDate": ISODate("2014-09-30T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "HW #3"
    },
    {
      "dueDate": ISODate("2014-10-07T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "HW #4"
    },
    {
      "dueDate": ISODate("2014-10-14T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "HW #5"
    },
    {
      "dueDate": ISODate("2014-10-21T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "HW #6"
    },
    {
      "dueDate": ISODate("2014-10-28T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "HW #7"
    },
    {
      "dueDate": ISODate("2014-11-04T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "HW #8"
    }
  ],
  "catalogId": "ENES101",
  "classRoom": "ITE238",
  "courseCredit": NumberLong(3),
  "courseName": "Intro to Engineering Discussion",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-31T03:51:00.0Z"),
  "email": "aspence@umbc.edu",
  "endTime": "3:50 PM",
  "enrolledCount": NumberInt(7),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9474975ab33153700556"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue",
  "quiz": [
    {
      "dueDate": ISODate("2014-09-16T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "Quiz #1"
    },
    {
      "dueDate": ISODate("2014-09-23T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "Quiz #2"
    },
    {
      "dueDate": ISODate("2014-09-30T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "Quiz #3"
    },
    {
      "dueDate": ISODate("2014-10-07T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "Quiz #4"
    },
    {
      "dueDate": ISODate("2014-10-14T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "Quiz #5"
    },
    {
      "dueDate": ISODate("2014-10-21T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "Quiz #6"
    },
    {
      "dueDate": ISODate("2014-11-11T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "Quiz #8"
    },
    {
      "dueDate": ISODate("2014-11-18T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "Quiz #9"
    }
  ],
  "section": NumberLong(8),
  "startTime": "2:00 PM",
  "version": NumberLong(18),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:53:00.960Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5402aa963219e0542cea6883"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-10T00:00:00.0Z"),
      "dueTime": "3:00 PM",
      "name": "HW #0"
    },
    {
      "dueDate": ISODate("2014-09-17T00:00:00.0Z"),
      "dueTime": "3:00 PM",
      "name": "HW #1"
    },
    {
      "dueDate": ISODate("2014-09-24T00:00:00.0Z"),
      "dueTime": "3:00 PM",
      "name": "HW #2"
    },
    {
      "dueDate": ISODate("2014-10-01T00:00:00.0Z"),
      "dueTime": "3:00 PM",
      "name": "HW #3"
    },
    {
      "dueDate": ISODate("2014-10-08T00:00:00.0Z"),
      "dueTime": "3:00 PM",
      "name": "HW #4"
    },
    {
      "dueDate": ISODate("2014-10-15T00:00:00.0Z"),
      "dueTime": "3:00 PM",
      "name": "HW #5"
    },
    {
      "dueDate": ISODate("2014-10-22T00:00:00.0Z"),
      "dueTime": "3:00 PM",
      "name": "HW #6"
    },
    {
      "dueDate": ISODate("2014-10-29T00:00:00.0Z"),
      "dueTime": "3:00 PM",
      "name": "HW #7"
    },
    {
      "dueDate": ISODate("2014-11-05T00:00:00.0Z"),
      "dueTime": "3:00 PM",
      "name": "HW #8"
    }
  ],
  "catalogId": "ENES101",
  "classRoom": "ITE238",
  "courseCredit": NumberLong(3),
  "courseName": "Intro to Engineering Discussion",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-31T03:51:00.0Z"),
  "email": "aspence@umbc.edu",
  "endTime": "4:50 PM",
  "enrolledCount": NumberInt(9),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9474975ab33153700556"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Wed",
  "quiz": [
    {
      "dueDate": ISODate("2014-09-17T00:00:00.0Z"),
      "dueTime": "3:00 PM",
      "name": "Quiz #1"
    },
    {
      "dueDate": ISODate("2014-09-24T00:00:00.0Z"),
      "dueTime": "3:00 PM",
      "name": "Quiz #2"
    },
    {
      "dueDate": ISODate("2014-10-01T00:00:00.0Z"),
      "dueTime": "3:00 PM",
      "name": "Quiz #3"
    },
    {
      "dueDate": ISODate("2014-10-08T00:00:00.0Z"),
      "dueTime": "3:00 PM",
      "name": "Quiz #4"
    },
    {
      "dueDate": ISODate("2014-10-15T00:00:00.0Z"),
      "dueTime": "3:00 PM",
      "name": "Quiz #5"
    },
    {
      "dueDate": ISODate("2014-10-22T00:00:00.0Z"),
      "dueTime": "3:00 PM",
      "name": "Quiz #6"
    },
    {
      "dueDate": ISODate("2014-11-12T00:00:00.0Z"),
      "dueTime": "3:00 PM",
      "name": "Quiz #8"
    },
    {
      "dueDate": ISODate("2014-11-19T00:00:00.0Z"),
      "dueTime": "3:00 PM",
      "name": "Quiz #9"
    }
  ],
  "section": NumberLong(6),
  "startTime": "3:00 PM",
  "version": NumberLong(33),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:53:03.98Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5402b099975a4dc5a81e8acd"),
  "catalogId": "ENGL100",
  "classRoom": "Performing Arts 314",
  "courseCredit": NumberInt(3),
  "courseName": "English Composition",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-31T05:20:25.985Z"),
  "email": "e.macdougall@umbc.edu",
  "endTime": "5:15 PM",
  "enrolledCount": NumberInt(9),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9471975ab33153700464"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed",
  "misc": [
    {
      "dueDate": ISODate("2014-11-24T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Portfolio"
    },
    {
      "dueDate": ISODate("2014-11-24T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Final Draft Essay #3"
    },
    {
      "dueDate": ISODate("2014-11-24T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Presentations for Essay #3"
    },
    {
      "dueDate": ISODate("2014-12-08T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Presentations for Essay #3"
    },
    {
      "dueDate": ISODate("2014-10-22T00:00:00.0Z"),
      "dueTime": "4:00 AM",
      "name": "Final Draft Essay #2"
    },
    {
      "dueDate": ISODate("2014-10-01T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Final Draft Narrative Essay"
    }
  ],
  "quiz": [
    {
      "dueDate": ISODate("2014-08-27T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "ENGL 100 Policies Quiz"
    }
  ],
  "section": NumberInt(16),
  "startTime": "4:00 PM",
  "version": NumberLong(15),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:52:46.357Z"),
  "assignment": [
    {
      "dueDate": ISODate("2014-11-17T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Annotated Bibliography"
    },
    {
      "dueDate": ISODate("2014-11-17T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Stuart Greene Essay Summary"
    },
    {
      "dueDate": ISODate("2014-11-12T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Dr. King Letter Response"
    },
    {
      "dueDate": ISODate("2014-10-29T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Library Literacy"
    },
    {
      "dueDate": ISODate("2014-10-08T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Article for Essay #2"
    },
    {
      "dueDate": ISODate("2014-10-06T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Technological World Summary"
    },
    {
      "dueDate": ISODate("2014-09-29T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Straub Summary of Helpful Ideas"
    },
    {
      "dueDate": ISODate("2014-09-17T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Sonia Nazario Article Summary"
    }
  ],
  "exam": [
    {
      "dueDate": ISODate("2014-09-23T00:00:00.0Z"),
      "dueTime": "7:00 PM",
      "name": "SONIA NAZARIO"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5402b77b975a4dc5a81e8ace"),
  "catalogId": "MATH152",
  "classRoom": "Sherman 003",
  "courseCredit": NumberInt(3),
  "courseName": "Calculus II",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-31T05:49:47.652Z"),
  "email": "bdean@umbc.edu",
  "endTime": "11:15 AM",
  "enrolledCount": NumberInt(11),
  "exam": [
    {
      "dueDate": ISODate("2014-09-23T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Exam 1 6.1-6.3, 6.5, 7.1-7.3"
    },
    {
      "dueDate": ISODate("2014-10-23T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Exam 2 7.4-7.8, 8.1-8.2, 11.1-11.3"
    },
    {
      "dueDate": ISODate("2014-11-20T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Exam 3 11.4-11.11"
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fe6f603219e0982eceeb4e"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "section": NumberInt(6),
  "startTime": "10:00 AM",
  "version": NumberLong(19),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-02T00:00:00.0Z"),
      "dueTime": "11:15 PM",
      "name": "Webassign 1"
    },
    {
      "dueDate": ISODate("2014-09-09T00:00:00.0Z"),
      "dueTime": "11:15 PM",
      "name": "Webassign 2"
    },
    {
      "dueDate": ISODate("2014-09-16T00:00:00.0Z"),
      "dueTime": "11:15 PM",
      "name": "Webassign 3"
    },
    {
      "dueDate": ISODate("2014-09-23T00:00:00.0Z"),
      "dueTime": "11:15 PM",
      "name": "Webassign 4"
    },
    {
      "dueDate": ISODate("2014-09-30T00:00:00.0Z"),
      "dueTime": "11:15 PM",
      "name": "Webassign 5"
    },
    {
      "dueDate": ISODate("2014-10-07T00:00:00.0Z"),
      "dueTime": "11:15 PM",
      "name": "Webassign 6"
    },
    {
      "dueDate": ISODate("2014-10-14T00:00:00.0Z"),
      "dueTime": "11:15 PM",
      "name": "Webassign 7"
    },
    {
      "dueDate": ISODate("2014-10-21T00:00:00.0Z"),
      "dueTime": "11:15 PM",
      "name": "Webassign 8"
    },
    {
      "dueDate": ISODate("2014-10-28T00:00:00.0Z"),
      "dueTime": "11:15 PM",
      "name": "Webassign 9"
    },
    {
      "dueDate": ISODate("2014-11-04T00:00:00.0Z"),
      "dueTime": "11:15 PM",
      "name": "Webassign 10"
    },
    {
      "dueDate": ISODate("2014-11-11T00:00:00.0Z"),
      "dueTime": "11:15 PM",
      "name": "Webassign 11"
    },
    {
      "dueDate": ISODate("2014-11-18T00:00:00.0Z"),
      "dueTime": "11:15 PM",
      "name": "Webassign 12"
    },
    {
      "dueDate": ISODate("2014-11-25T00:00:00.0Z"),
      "dueTime": "11:15 PM",
      "name": "Webassign 13"
    },
    {
      "dueDate": ISODate("2014-12-02T00:00:00.0Z"),
      "dueTime": "11:15 PM",
      "name": "Webassign 14"
    }
  ],
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:52:44.460Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5402c296975a4dc5a81e8acf"),
  "catalogId": "MATH152",
  "classRoom": "Sondheim 114",
  "courseCredit": NumberInt(3),
  "courseName": "Calculus II Discussion",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-31T06:37:10.406Z"),
  "email": "bdean@umbc.edu",
  "endTime": "12:20 PM",
  "enrolledCount": NumberInt(1),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fe6f603219e0982eceeb4e"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "quiz": [
    {
      "dueDate": ISODate("2014-09-04T00:00:00.0Z"),
      "dueTime": "11:30 AM",
      "name": "Quiz 1 on 6.1-6.2"
    },
    {
      "dueDate": ISODate("2014-09-11T00:00:00.0Z"),
      "dueTime": "11:30 AM",
      "name": "Quiz 2 on 6.3, 6.5"
    },
    {
      "dueDate": ISODate("2014-09-18T00:00:00.0Z"),
      "dueTime": "11:30 AM",
      "name": "Quiz 3 on 7.1-7.2"
    },
    {
      "dueDate": ISODate("2014-10-02T00:00:00.0Z"),
      "dueTime": "11:30 AM",
      "name": "Quiz 4 on 7.4"
    },
    {
      "dueDate": ISODate("2014-10-09T00:00:00.0Z"),
      "dueTime": "11:30 AM",
      "name": "Quiz 5 on 7.7"
    },
    {
      "dueDate": ISODate("2014-10-16T00:00:00.0Z"),
      "dueTime": "11:30 AM",
      "name": "Quiz 6 on 7.8, 8.1-8.2"
    },
    {
      "dueDate": ISODate("2014-10-30T00:00:00.0Z"),
      "dueTime": "11:30 AM",
      "name": "Quiz 7 on 11.4-11.5"
    },
    {
      "dueDate": ISODate("2014-11-06T00:00:00.0Z"),
      "dueTime": "11:30 AM",
      "name": "Quiz 8 on 11.6-11.7"
    },
    {
      "dueDate": ISODate("2014-11-13T00:00:00.0Z"),
      "dueTime": "11:30 AM",
      "name": "Quiz 9 on 11.8-11.9"
    },
    {
      "dueDate": ISODate("2014-11-25T00:00:00.0Z"),
      "dueTime": "11:30 AM",
      "name": "Quiz 10 on 10.5"
    },
    {
      "dueDate": ISODate("2014-12-04T00:00:00.0Z"),
      "dueTime": "11:30 AM",
      "name": "Quiz 11 on 10.1-10.2"
    }
  ],
  "section": NumberInt(7),
  "startTime": "11:30 AM",
  "version": NumberLong(7),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:52:35.406Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5402c2e83219e0542cea6885"),
  "catalogId": "MATH152",
  "classRoom": "Sondheim 113",
  "courseCredit": NumberLong(3),
  "courseName": "Calculus II Discussion",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-31T06:37:10.406Z"),
  "email": "bdean@umbc.edu",
  "endTime": "12:20 PM",
  "enrolledCount": NumberInt(5),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fe6f603219e0982eceeb4e"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "quiz": [
    {
      "dueDate": ISODate("2014-09-04T00:00:00.0Z"),
      "dueTime": "11:30 AM",
      "name": "Quiz 1 on 6.1-6.2"
    },
    {
      "dueDate": ISODate("2014-09-11T00:00:00.0Z"),
      "dueTime": "11:30 AM",
      "name": "Quiz 2 on 6.3, 6.5"
    },
    {
      "dueDate": ISODate("2014-09-18T00:00:00.0Z"),
      "dueTime": "11:30 AM",
      "name": "Quiz 3 on 7.1-7.2"
    },
    {
      "dueDate": ISODate("2014-10-02T00:00:00.0Z"),
      "dueTime": "11:30 AM",
      "name": "Quiz 4 on 7.4"
    },
    {
      "dueDate": ISODate("2014-10-09T00:00:00.0Z"),
      "dueTime": "11:30 AM",
      "name": "Quiz 5 on 7.7"
    },
    {
      "dueDate": ISODate("2014-10-16T00:00:00.0Z"),
      "dueTime": "11:30 AM",
      "name": "Quiz 6 on 7.8, 8.1-8.2"
    },
    {
      "dueDate": ISODate("2014-10-30T00:00:00.0Z"),
      "dueTime": "11:30 AM",
      "name": "Quiz 7 on 11.4-11.5"
    },
    {
      "dueDate": ISODate("2014-11-06T00:00:00.0Z"),
      "dueTime": "11:30 AM",
      "name": "Quiz 8 on 11.6-11.7"
    },
    {
      "dueDate": ISODate("2014-11-13T00:00:00.0Z"),
      "dueTime": "11:30 AM",
      "name": "Quiz 9 on 11.8-11.9"
    },
    {
      "dueDate": ISODate("2014-11-25T00:00:00.0Z"),
      "dueTime": "11:30 AM",
      "name": "Quiz 10 on 10.5"
    },
    {
      "dueDate": ISODate("2014-12-04T00:00:00.0Z"),
      "dueTime": "11:30 AM",
      "name": "Quiz 11 on 10.1-10.2"
    }
  ],
  "section": NumberLong(8),
  "startTime": "11:30 AM",
  "version": NumberLong(10),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:52:37.537Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5402c32d3219e0622bea6887"),
  "catalogId": "MATH152",
  "classRoom": "Sondheim 110",
  "courseCredit": NumberLong(3),
  "courseName": "Calculus II Discussion",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-31T06:37:10.406Z"),
  "email": "bdean@umbc.edu",
  "endTime": "9:50 AM",
  "enrolledCount": NumberInt(4),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fe6f603219e0982eceeb4e"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "quiz": [
    {
      "dueDate": ISODate("2014-09-04T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Quiz 1 on 6.1-6.2"
    },
    {
      "dueDate": ISODate("2014-09-11T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Quiz 2 on 6.3, 6.5"
    },
    {
      "dueDate": ISODate("2014-09-18T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Quiz 3 on 7.1-7.2"
    },
    {
      "dueDate": ISODate("2014-10-02T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Quiz 4 on 7.4"
    },
    {
      "dueDate": ISODate("2014-10-09T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Quiz 5 on 7.7"
    },
    {
      "dueDate": ISODate("2014-10-16T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Quiz 6 on 7.8, 8.1-8.2"
    },
    {
      "dueDate": ISODate("2014-10-30T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Quiz 7 on 11.4-11.5"
    },
    {
      "dueDate": ISODate("2014-11-06T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Quiz 8 on 11.6-11.7"
    },
    {
      "dueDate": ISODate("2014-11-13T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Quiz 9 on 11.8-11.9"
    },
    {
      "dueDate": ISODate("2014-11-25T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Quiz 10 on 10.5"
    },
    {
      "dueDate": ISODate("2014-12-04T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Quiz 11 on 10.1-10.2"
    }
  ],
  "section": NumberLong(9),
  "startTime": "9:00 AM",
  "version": NumberLong(9),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:52:39.414Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5402c33e3219e0542cea6886"),
  "catalogId": "MATH152",
  "classRoom": "Sondheim 114",
  "courseCredit": NumberLong(3),
  "courseName": "Calculus II Discussion",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-31T06:37:10.406Z"),
  "email": "bdean@umbc.edu",
  "endTime": "9:50 AM",
  "enrolledCount": NumberInt(3),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fe6f603219e0982eceeb4e"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "quiz": [
    {
      "dueDate": ISODate("2014-09-04T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Quiz 1 on 6.1-6.2"
    },
    {
      "dueDate": ISODate("2014-09-11T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Quiz 2 on 6.3, 6.5"
    },
    {
      "dueDate": ISODate("2014-09-18T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Quiz 3 on 7.1-7.2"
    },
    {
      "dueDate": ISODate("2014-10-02T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Quiz 4 on 7.4"
    },
    {
      "dueDate": ISODate("2014-10-09T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Quiz 5 on 7.7"
    },
    {
      "dueDate": ISODate("2014-10-16T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Quiz 6 on 7.8, 8.1-8.2"
    },
    {
      "dueDate": ISODate("2014-10-30T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Quiz 7 on 11.4-11.5"
    },
    {
      "dueDate": ISODate("2014-11-06T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Quiz 8 on 11.6-11.7"
    },
    {
      "dueDate": ISODate("2014-11-13T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Quiz 9 on 11.8-11.9"
    },
    {
      "dueDate": ISODate("2014-11-25T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Quiz 10 on 10.5"
    },
    {
      "dueDate": ISODate("2014-12-04T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Quiz 11 on 10.1-10.2"
    }
  ],
  "section": NumberLong(10),
  "startTime": "9:00 AM",
  "version": NumberLong(6),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:52:41.342Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5402963c975a4dc5a81e8ac7"),
  "catalogId": "ENES101",
  "classRoom": "ENGR027",
  "courseCredit": NumberInt(3),
  "courseName": "Intro to Engineering",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-31T03:27:56.192Z"),
  "email": "chuck.laberge@umbc.edu",
  "endTime": "11:50 AM",
  "enrolledCount": NumberInt(99),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946d975ab33153700329"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Fri",
  "section": NumberInt(1),
  "startTime": "11:00 AM",
  "version": NumberLong(113),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:53:05.596Z"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-19T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "CATME Surveys"
    },
    {
      "dueDate": ISODate("2014-11-07T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "CATME Eval #1"
    },
    {
      "dueDate": ISODate("2014-12-01T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Student Questions"
    },
    {
      "dueDate": ISODate("2014-12-08T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "CATME Eval #2"
    }
  ],
  "misc": [
    {
      "dueDate": ISODate("2014-12-18T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "UROS Report Due"
    },
    {
      "dueDate": ISODate("2014-09-26T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "UROS Teams Posted"
    },
    {
      "dueDate": ISODate("2014-10-24T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Vex Store Open"
    }
  ],
  "quiz": [
    {
      "dueDate": ISODate("2014-11-07T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Quiz #7: UROS\/Propulsion\/test"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("540389e13219e09438ea6883"),
  "catalogId": "MATH151",
  "classRoom": "Sondheim  110",
  "courseCredit": NumberLong(3),
  "courseName": "Calculus I Discussion",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-29T20:04:41.231Z"),
  "email": "tighe@umbc.edu",
  "endTime": "11:50 AM",
  "enrolledCount": NumberInt(19),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9474975ab3315370054e"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Fri",
  "section": NumberInt(4),
  "startTime": "11:00 AM",
  "version": NumberLong(30),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "quiz": [
    {
      "dueDate": ISODate("2014-09-08T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Quiz 1"
    },
    {
      "dueDate": ISODate("2014-09-15T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Quiz 2"
    },
    {
      "dueDate": ISODate("2014-09-22T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Quiz 3"
    },
    {
      "dueDate": ISODate("2014-10-06T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Quiz 4"
    },
    {
      "dueDate": ISODate("2014-10-13T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Quiz 5"
    },
    {
      "dueDate": ISODate("2014-10-20T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Quiz 6"
    },
    {
      "dueDate": ISODate("2014-11-03T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Quiz 7"
    },
    {
      "dueDate": ISODate("2014-11-10T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Quiz 8"
    },
    {
      "dueDate": ISODate("2014-11-17T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Quiz 9"
    },
    {
      "dueDate": ISODate("2014-11-24T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Quiz 10"
    },
    {
      "dueDate": ISODate("2014-12-08T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Quiz 11"
    }
  ],
  "lastUpdatedOn": ISODate("2014-09-26T23:55:55.258Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("54038a69975a4dc5a81e8ae5"),
  "catalogId": "BIOL430",
  "classRoom": "Lecture Hall 1 101",
  "courseCredit": NumberInt(3),
  "courseName": "Biological Chemistry",
  "createdBy": "chadb1@umbc.edu",
  "createdOn": ISODate("2014-08-31T20:49:45.251Z"),
  "email": "aschech@umbc.edu",
  "endTime": "9:00 PM",
  "enrolledCount": NumberInt(2),
  "exam": [
    {
      "dueDate": ISODate("2014-09-29T00:00:00.0Z"),
      "dueTime": "7:00 PM",
      "name": "Exam 1"
    },
    {
      "dueDate": ISODate("2014-10-27T00:00:00.0Z"),
      "dueTime": "7:00 PM",
      "name": "Exam 2"
    },
    {
      "dueDate": ISODate("2014-11-24T00:00:00.0Z"),
      "dueTime": "7:00 PM",
      "name": "Exam 3"
    },
    {
      "dueDate": ISODate("2014-12-17T00:00:00.0Z"),
      "dueTime": "6:00 PM",
      "name": "Final Exam"
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("54038ddf3219e0dc3aea6883"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed",
  "section": NumberInt(1),
  "startTime": "7:00 PM",
  "version": NumberLong(5),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:52:33.311Z"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-15T00:00:00.0Z"),
      "dueTime": "7:00 PM",
      "name": "Problem Set #1"
    },
    {
      "dueDate": ISODate("2014-09-22T00:00:00.0Z"),
      "dueTime": "7:00 PM",
      "name": "Problem Set #2"
    },
    {
      "dueDate": ISODate("2014-10-06T00:00:00.0Z"),
      "dueTime": "7:00 PM",
      "name": "Problem Set #3"
    },
    {
      "dueDate": ISODate("2014-10-13T00:00:00.0Z"),
      "dueTime": "7:00 PM",
      "name": "Problem Set #4"
    },
    {
      "dueDate": ISODate("2014-10-20T00:00:00.0Z"),
      "dueTime": "7:00 PM",
      "name": "Problem Set #5"
    },
    {
      "dueDate": ISODate("2014-11-03T00:00:00.0Z"),
      "dueTime": "7:00 PM",
      "name": "Problem Set #6"
    },
    {
      "dueDate": ISODate("2014-11-10T00:00:00.0Z"),
      "dueTime": "7:00 PM",
      "name": "Problem Set #7"
    },
    {
      "dueDate": ISODate("2014-11-17T00:00:00.0Z"),
      "dueTime": "7:00 PM",
      "name": "Problem Set #8"
    },
    {
      "dueDate": ISODate("2014-12-08T00:00:00.0Z"),
      "dueTime": "7:00 PM",
      "name": "Problem Set #9"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("54038e9a3219e09438ea6884"),
  "catalogId": "MATH151",
  "classRoom": "ITE231",
  "courseCredit": NumberLong(3),
  "courseName": "Calculus I Discussion",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-29T20:04:41.231Z"),
  "email": "tighe@umbc.edu",
  "endTime": "9:50 AM",
  "enrolledCount": NumberInt(27),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9474975ab3315370054e"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Fri",
  "section": NumberLong(2),
  "startTime": "9:00 AM",
  "version": NumberLong(37),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "quiz": [
    {
      "dueDate": ISODate("2014-09-08T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Quiz 1"
    },
    {
      "dueDate": ISODate("2014-09-15T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Quiz 2"
    },
    {
      "dueDate": ISODate("2014-09-22T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Quiz 3"
    },
    {
      "dueDate": ISODate("2014-10-06T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Quiz 4"
    },
    {
      "dueDate": ISODate("2014-10-13T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Quiz 5"
    },
    {
      "dueDate": ISODate("2014-10-20T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Quiz 6"
    },
    {
      "dueDate": ISODate("2014-11-03T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Quiz 7"
    },
    {
      "dueDate": ISODate("2014-11-10T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Quiz 8"
    },
    {
      "dueDate": ISODate("2014-11-17T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Quiz 9"
    },
    {
      "dueDate": ISODate("2014-11-24T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Quiz 10"
    },
    {
      "dueDate": ISODate("2014-12-08T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Quiz 11"
    }
  ],
  "lastUpdatedOn": ISODate("2014-09-26T23:56:12.285Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("540390783219e09438ea6885"),
  "catalogId": "MATH151",
  "classRoom": "ITE233",
  "courseCredit": NumberLong(3),
  "courseName": "Calculus I Discussion",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-29T20:04:41.231Z"),
  "email": "tighe@umbc.edu",
  "endTime": "9:50 AM",
  "enrolledCount": NumberInt(21),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9474975ab3315370054e"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Fri",
  "section": NumberLong(3),
  "startTime": "9:00 AM",
  "version": NumberLong(31),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "quiz": [
    {
      "dueDate": ISODate("2014-09-08T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Quiz 1"
    },
    {
      "dueDate": ISODate("2014-09-15T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Quiz 2"
    },
    {
      "dueDate": ISODate("2014-09-22T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Quiz 3"
    },
    {
      "dueDate": ISODate("2014-10-06T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Quiz 4"
    },
    {
      "dueDate": ISODate("2014-10-13T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Quiz 5"
    },
    {
      "dueDate": ISODate("2014-10-20T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Quiz 6"
    },
    {
      "dueDate": ISODate("2014-11-03T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Quiz 7"
    },
    {
      "dueDate": ISODate("2014-11-10T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Quiz 8"
    },
    {
      "dueDate": ISODate("2014-11-17T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Quiz 9"
    },
    {
      "dueDate": ISODate("2014-11-24T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Quiz 10"
    },
    {
      "dueDate": ISODate("2014-12-08T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Quiz 11"
    }
  ],
  "lastUpdatedOn": ISODate("2014-09-26T23:56:14.311Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("54039104975a4dc5a81e8ae6"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-08T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Paper #1"
    },
    {
      "dueDate": ISODate("2014-10-06T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Paper #2"
    },
    {
      "dueDate": ISODate("2014-10-17T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Paper #3"
    },
    {
      "dueDate": ISODate("2014-11-03T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Paper #4"
    },
    {
      "dueDate": ISODate("2014-12-05T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Pioneer Essay"
    }
  ],
  "catalogId": "HIST103",
  "classRoom": "ITE104",
  "courseCredit": NumberInt(3),
  "courseName": "East Asian Civilizations",
  "createdBy": "abanne1@umbc.edu",
  "createdOn": ISODate("2014-08-31T21:17:56.258Z"),
  "email": "juloakes@umbc.edu",
  "endTime": "10:50 AM",
  "enrolledCount": NumberInt(2),
  "exam": [
    {
      "dueDate": ISODate("2014-10-01T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Exam #1"
    },
    {
      "dueDate": ISODate("2014-10-31T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Exam #2"
    },
    {
      "dueDate": ISODate("2014-12-15T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Final Exam"
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9472975ab331537004b7"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed,Fri",
  "quiz": [
    {
      "dueDate": ISODate("2014-09-15T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Quiz 1"
    }
  ],
  "section": NumberInt(1),
  "startTime": "10:00 AM",
  "version": NumberLong(3),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:52:31.449Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5403f406975a4dc5a81e8af4"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-02T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "Reading Chapter 1 page 407-409"
    },
    {
      "dueDate": ISODate("2014-09-04T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "Reading Chapter 2"
    },
    {
      "dueDate": ISODate("2014-09-09T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "Reading Chapter 3 page 55-66 (end before Psychological Viewpoints)"
    },
    {
      "dueDate": ISODate("2014-09-11T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "Reading Chapter 3 page 75-97"
    },
    {
      "dueDate": ISODate("2014-09-16T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "Reading Chapter 4 page 101-110 (end at psychological tests)"
    },
    {
      "dueDate": ISODate("2014-09-18T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "Reading Chapter 4 page 110-120, 122-126"
    },
    {
      "dueDate": ISODate("2014-09-23T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "Reading Chapter 5 page 129-133, 137-144"
    },
    {
      "dueDate": ISODate("2014-09-25T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "Reading Chapter 5 page 144-160"
    },
    {
      "dueDate": ISODate("2014-09-30T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "Reading Chapter 6 page 166-173, 178-188"
    },
    {
      "dueDate": ISODate("2014-10-02T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "Reading Chapter 6 page 188-202"
    },
    {
      "dueDate": ISODate("2014-10-07T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "Reading Chapter 7 page 212-237"
    },
    {
      "dueDate": ISODate("2014-10-07T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "First Extra Credit Assignment"
    },
    {
      "dueDate": ISODate("2014-10-09T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "Reading Chapter 7 page 239-260"
    },
    {
      "dueDate": ISODate("2014-10-16T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "Reading Chapter 9 page 294-315"
    },
    {
      "dueDate": ISODate("2014-10-21T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "Reading Chapter 10 page 328-330, 336-345, 348-352"
    },
    {
      "dueDate": ISODate("2014-10-23T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "Reading Chapter 10 page 353-364"
    },
    {
      "dueDate": ISODate("2014-10-28T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "Reading Chapter 11 page 368-386"
    },
    {
      "dueDate": ISODate("2014-10-30T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "Reading Chapter 11"
    },
    {
      "dueDate": ISODate("2014-11-04T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "Reading Chapter 13 page 444-451, 453-462"
    },
    {
      "dueDate": ISODate("2014-11-16T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "Reading Chapter 13 page 470-480"
    },
    {
      "dueDate": ISODate("2014-11-11T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "Online Stigma Assignment"
    },
    {
      "dueDate": ISODate("2014-11-13T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "Extra Credit Option 2"
    },
    {
      "dueDate": ISODate("2014-11-18T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "NAMI Reflection Assignment"
    },
    {
      "dueDate": ISODate("2014-11-18T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "Online Autism Assignment"
    },
    {
      "dueDate": ISODate("2014-11-18T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "Reading Chapter 15 page 527-532"
    },
    {
      "dueDate": ISODate("2014-11-20T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "Reading Chapter 15 page 509-524"
    },
    {
      "dueDate": ISODate("2014-11-24T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "Reading Chapter 14 page 488-505"
    },
    {
      "dueDate": ISODate("2014-12-02T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "Reading Chapter 16 page 549-552, 554-563"
    },
    {
      "dueDate": ISODate("2014-12-04T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "Reading Chapter 16 page 569-577"
    },
    {
      "dueDate": ISODate("2014-12-09T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "Technology Supports Reflection Assignment"
    },
    {
      "dueDate": ISODate("2014-12-09T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "Extra Credit Option 3"
    }
  ],
  "catalogId": "PSYC285",
  "classRoom": "Public Policy 105",
  "courseCredit": NumberInt(3),
  "courseName": "Abnormal Psychology",
  "createdBy": "noob1@umbc.edu",
  "createdOn": ISODate("2014-09-01T04:20:22.672Z"),
  "email": "KLNugent@umbc.edu",
  "endTime": "2:15 PM",
  "enrolledCount": NumberInt(6),
  "exam": [
    {
      "dueDate": ISODate("2014-10-14T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Midterm Exam"
    },
    {
      "dueDate": ISODate("2014-12-16T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Final Exam"
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946a975ab33153700293"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "quiz": [
    {
      "dueDate": ISODate("2014-09-02T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "Syllabus Quiz"
    },
    {
      "dueDate": ISODate("2014-09-02T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "Chapter 1 Quiz"
    },
    {
      "dueDate": ISODate("2014-09-04T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "Chapter 2 Quiz"
    },
    {
      "dueDate": ISODate("2014-09-11T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "Chapter 3 Quiz"
    },
    {
      "dueDate": ISODate("2014-09-18T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "Chapter 4 Quiz"
    },
    {
      "dueDate": ISODate("2014-09-25T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "Chapter 5 Quiz"
    },
    {
      "dueDate": ISODate("2014-10-02T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "Chapter 6 Quiz"
    },
    {
      "dueDate": ISODate("2014-10-09T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "Chapter 7 Quiz"
    },
    {
      "dueDate": ISODate("2014-10-16T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "Chapter 9 Quiz"
    },
    {
      "dueDate": ISODate("2014-10-23T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "Chapter 10 Quiz"
    },
    {
      "dueDate": ISODate("2014-10-30T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "Chapter 11 Quiz"
    },
    {
      "dueDate": ISODate("2014-11-06T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "Chapter 13 Quiz"
    },
    {
      "dueDate": ISODate("2014-11-20T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "Chapter 15 Quiz"
    },
    {
      "dueDate": ISODate("2014-11-25T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "Chapter 14 Quiz"
    },
    {
      "dueDate": ISODate("2014-12-04T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "Chapter 16 Quiz"
    }
  ],
  "section": NumberInt(2),
  "startTime": "1:00 PM",
  "version": NumberLong(10),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:52:29.367Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5403f742975a4dc5a81e8af5"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-07T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "Webassign HW 1"
    },
    {
      "dueDate": ISODate("2014-09-14T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "Webassign HW 2"
    },
    {
      "dueDate": ISODate("2014-09-21T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "Webassign HW 3"
    },
    {
      "dueDate": ISODate("2014-09-28T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "Webassign HW 4"
    },
    {
      "dueDate": ISODate("2014-10-05T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "Webassign HW 5"
    },
    {
      "dueDate": ISODate("2014-10-12T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "Webassign HW 6"
    },
    {
      "dueDate": ISODate("2014-10-19T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "Webassign HW 7"
    },
    {
      "dueDate": ISODate("2014-10-26T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "Webassign HW 8"
    },
    {
      "dueDate": ISODate("2014-11-02T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "Webassign HW 9"
    },
    {
      "dueDate": ISODate("2014-11-09T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "Webassign HW 10"
    },
    {
      "dueDate": ISODate("2014-11-16T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "Webassign HW 11"
    },
    {
      "dueDate": ISODate("2014-11-23T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "Webassign HW 12"
    },
    {
      "dueDate": ISODate("2014-11-30T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "Webassign HW 13"
    }
  ],
  "catalogId": "MATH151",
  "classRoom": "Lecture Hall 1",
  "courseCredit": NumberInt(3),
  "courseName": "Calculus I",
  "createdBy": "noob1@umbc.edu",
  "createdOn": ISODate("2014-09-01T04:34:10.156Z"),
  "email": "knanes@umbc.edu",
  "endTime": "1:50 PM",
  "enrolledCount": NumberInt(32),
  "exam": [
    {
      "dueDate": ISODate("2014-09-29T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Exam 1 on 2.1-3.3"
    },
    {
      "dueDate": ISODate("2014-10-27T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Exam 2 on 3.4-4.3"
    },
    {
      "dueDate": ISODate("2014-12-01T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Exam 3 on 4.4-5.4"
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9474975ab3315370053c"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed,Fri",
  "section": NumberInt(11),
  "startTime": "1:00 PM",
  "version": NumberLong(34),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:52:24.511Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("54040534975a43d59cba842e"),
  "catalogId": "PHYS122",
  "classRoom": "UC115D",
  "courseCredit": NumberInt(3),
  "courseName": "Introductory Physics II Discussion",
  "createdBy": "nasif1@umbc.edu",
  "createdOn": ISODate("2014-09-01T05:33:41.16Z"),
  "email": "andersoe@umbc.edu",
  "endTime": "4:20 PM",
  "enrolledCount": NumberInt(2),
  "exam": [
    {
      "dueDate": ISODate("2014-10-14T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Computational modeling  exam"
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9475975ab331537005c3"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue",
  "section": NumberInt(5),
  "startTime": "2:30 PM",
  "version": NumberLong(4),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:52:22.702Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("54041328975a43d59cba842f"),
  "catalogId": "STAT355",
  "classRoom": "Physics 101",
  "courseCredit": NumberInt(3),
  "courseName": "Intro to Prob and Stat for Sci\/Eng",
  "createdBy": "nasif1@umbc.edu",
  "createdOn": ISODate("2014-09-01T06:33:12.888Z"),
  "email": "danaher1@umbc.edu",
  "endTime": "6:45 PM",
  "enrolledCount": NumberInt(2),
  "exam": [
    {
      "dueDate": ISODate("2014-10-01T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "Exam 1 Chapters 1 - 4"
    },
    {
      "dueDate": ISODate("2014-11-05T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "Exam 2 Chapters 1 - 6"
    },
    {
      "dueDate": ISODate("2014-12-15T00:00:00.0Z"),
      "dueTime": "6:00 PM",
      "name": "Final Exam"
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9474975ab33153700526"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed",
  "section": NumberInt(1),
  "startTime": "5:30 PM",
  "version": NumberLong(14),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:52:21.156Z"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-03T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "Sections 1.1 - 1.3"
    },
    {
      "dueDate": ISODate("2014-09-10T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "Sections 2.1 - 2.3"
    },
    {
      "dueDate": ISODate("2014-09-17T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "Sections 2.4 - 2.6 and 3.1"
    },
    {
      "dueDate": ISODate("2014-09-24T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "Sections 4.1 - 4.3 and 4.5 - 4.7"
    },
    {
      "dueDate": ISODate("2014-10-01T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "Sections 4.9 - 4.12"
    },
    {
      "dueDate": ISODate("2014-10-15T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "Sections 5.1 - 5.7"
    },
    {
      "dueDate": ISODate("2014-10-22T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "Sections 5.8 - 5.10 and 6.1 - 6.4"
    },
    {
      "dueDate": ISODate("2014-10-29T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "Sections 6.5 - 6.11"
    },
    {
      "dueDate": ISODate("2014-11-05T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "Sections 6.13 - 6.15 and 7.1 - 7.2"
    },
    {
      "dueDate": ISODate("2014-11-19T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "Sections 7.3 - 7.4 and 8.1 - 8.2"
    },
    {
      "dueDate": ISODate("2014-11-26T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "Sections 8.3 and 9.1 - 9.2"
    },
    {
      "dueDate": ISODate("2014-12-03T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "Sections 9.3 - 9.5"
    },
    {
      "dueDate": ISODate("2014-12-08T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "Sections 10.1 - 10.4"
    }
  ],
  "quiz": [
    {
      "dueDate": ISODate("2014-09-02T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "Sections 2.1 - 2.3"
    },
    {
      "dueDate": ISODate("2014-09-07T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "Sections 2.4 - 2.5"
    },
    {
      "dueDate": ISODate("2014-09-09T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "Sections 2.6 and 3.1"
    },
    {
      "dueDate": ISODate("2014-09-14T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "Sections 4.1 - 4.3"
    },
    {
      "dueDate": ISODate("2014-09-16T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "Sections 4.5 - 4.7"
    },
    {
      "dueDate": ISODate("2014-09-21T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "Sections 4.9 - 4.11"
    },
    {
      "dueDate": ISODate("2014-09-23T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "Sections 4.12"
    },
    {
      "dueDate": ISODate("2014-10-05T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "Sections 5.1 - 5.3"
    },
    {
      "dueDate": ISODate("2014-10-07T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "Sections 5.4 - 5.7"
    },
    {
      "dueDate": ISODate("2014-10-12T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "Sections 5.8 - 5.10"
    },
    {
      "dueDate": ISODate("2014-10-14T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "Sections 6.1 - 6.4"
    },
    {
      "dueDate": ISODate("2014-10-19T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "Sections 6.5 - 6.8"
    },
    {
      "dueDate": ISODate("2014-10-21T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "Sections 6.9 - 6.11"
    },
    {
      "dueDate": ISODate("2014-10-26T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "Sections 6.13 - 6.15"
    },
    {
      "dueDate": ISODate("2014-10-28T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "Sections 7.1 - 7.2"
    },
    {
      "dueDate": ISODate("2014-11-09T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "Sections 7.3 - 7.4"
    },
    {
      "dueDate": ISODate("2014-11-11T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "Sections 8.1 - 8.2"
    },
    {
      "dueDate": ISODate("2014-11-16T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "Sections 8.3"
    },
    {
      "dueDate": ISODate("2014-11-18T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "Sections 9.1 - 9.2"
    },
    {
      "dueDate": ISODate("2014-11-23T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "Sections 9.3"
    },
    {
      "dueDate": ISODate("2014-11-25T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "Sections 9.4 - 9.5"
    },
    {
      "dueDate": ISODate("2014-11-30T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "Sections 10.1 - 10.2"
    },
    {
      "dueDate": ISODate("2014-12-02T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "Sections 10.3 - 10.4"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("54041825975a43d59cba8430"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-02T00:00:00.0Z"),
      "dueTime": "11:30 AM",
      "name": "ch. 1 and 2"
    }
  ],
  "catalogId": "CMSC313",
  "classRoom": "Sherman Hall 013",
  "courseCredit": NumberInt(3),
  "courseName": "Computer Organization and Assembly Language",
  "createdBy": "nasif1@umbc.edu",
  "createdOn": ISODate("2014-09-01T06:54:29.85Z"),
  "email": "pedram@umbc.edu",
  "endTime": "12:45 PM",
  "enrolledCount": NumberInt(3),
  "exam": [
    {
      "dueDate": ISODate("2014-10-21T00:00:00.0Z"),
      "dueTime": "11:30 AM",
      "name": "Midterm"
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("5400bef73219e0982eceeb55"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "section": NumberInt(3),
  "startTime": "11:30 AM",
  "version": NumberLong(5),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:52:19.65Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("54041c9c975a43d59cba8431"),
  "catalogId": "CMSC331",
  "classRoom": "ITE233",
  "courseCredit": NumberInt(3),
  "courseName": "Principles of Programming Languages",
  "createdBy": "nasif1@umbc.edu",
  "createdOn": ISODate("2014-09-01T07:13:32.300Z"),
  "email": "slupoli@cs.umbc.edu",
  "endTime": "2:15 PM",
  "enrolledCount": NumberInt(4),
  "exam": [
    {
      "dueDate": ISODate("2014-10-23T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Midterm"
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946d975ab3315370032b"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "section": NumberInt(1),
  "startTime": "1:00 PM",
  "version": NumberLong(6),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:52:17.298Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("54041d03975a43d59cba8432"),
  "catalogId": "STAT355",
  "classRoom": "Math Psyc 103",
  "courseCredit": NumberInt(3),
  "courseName": "Intro to Prob\/Stat for Sci\/Eng Discussion",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-09-01T07:15:15.973Z"),
  "email": "danaher1@umbc.edu",
  "endTime": "7:50 PM",
  "enrolledCount": NumberInt(1),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9474975ab33153700526"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon",
  "quiz": [
    {
      "dueDate": ISODate("2014-09-08T00:00:00.0Z"),
      "dueTime": "7:00 PM",
      "name": "Sections 1.1 - 1.3"
    },
    {
      "dueDate": ISODate("2014-09-15T00:00:00.0Z"),
      "dueTime": "7:00 PM",
      "name": "Sections 2.1 - 2.3"
    },
    {
      "dueDate": ISODate("2014-09-22T00:00:00.0Z"),
      "dueTime": "7:00 PM",
      "name": "Sections 2.4 - 2.6 and 3.1"
    },
    {
      "dueDate": ISODate("2014-09-29T00:00:00.0Z"),
      "dueTime": "7:00 PM",
      "name": "Sections 4.1 - 4.3 and 4.5 - 4.7"
    },
    {
      "dueDate": ISODate("2014-10-20T00:00:00.0Z"),
      "dueTime": "7:00 PM",
      "name": "Sections 5.1 - 5.7"
    },
    {
      "dueDate": ISODate("2014-10-27T00:00:00.0Z"),
      "dueTime": "7:00 PM",
      "name": "Sections 5.8 - 5.10 and 6.1 - 6.4"
    },
    {
      "dueDate": ISODate("2014-11-03T00:00:00.0Z"),
      "dueTime": "7:00 PM",
      "name": "Sections 6.5 - 6.11"
    },
    {
      "dueDate": ISODate("2014-11-24T00:00:00.0Z"),
      "dueTime": "7:00 PM",
      "name": "Sections 7.3 - 7.4 and 8.1 - 8.2"
    },
    {
      "dueDate": ISODate("2014-12-01T00:00:00.0Z"),
      "dueTime": "7:00 PM",
      "name": "Sections 8.3 and 9.1 - 9.2"
    },
    {
      "dueDate": ISODate("2014-12-08T00:00:00.0Z"),
      "dueTime": "7:00 PM",
      "name": "Sections 9.3 and 9.4 - 9.5"
    }
  ],
  "section": NumberInt(2),
  "startTime": "7:00 PM",
  "version": NumberLong(6),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:52:13.837Z"),
  "misc": [
    {
      "dueDate": ISODate("2014-10-13T00:00:00.0Z"),
      "dueTime": "7:00 PM",
      "name": "Project 1"
    },
    {
      "dueDate": ISODate("2014-11-17T00:00:00.0Z"),
      "dueTime": "7:00 PM",
      "name": "Project 2"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("54041e093219e08441ea6883"),
  "catalogId": "STAT355",
  "classRoom": "Math Psyc 101",
  "courseCredit": NumberLong(3),
  "courseName": "Intro to Prob\/Stat for Sci\/Eng Discussion",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-09-01T07:15:15.973Z"),
  "email": "danaher1@umbc.edu",
  "endTime": "7:50 PM",
  "enrolledCount": NumberInt(3),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9474975ab33153700526"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Wed",
  "quiz": [
    {
      "dueDate": ISODate("2014-09-03T00:00:00.0Z"),
      "dueTime": "7:00 PM",
      "name": "Sections 1.1 - 1.3"
    },
    {
      "dueDate": ISODate("2014-09-10T00:00:00.0Z"),
      "dueTime": "7:00 PM",
      "name": "Sections 2.1 - 2.3"
    },
    {
      "dueDate": ISODate("2014-09-17T00:00:00.0Z"),
      "dueTime": "7:00 PM",
      "name": "Sections 2.4 - 2.6 and 3.1"
    },
    {
      "dueDate": ISODate("2014-09-24T00:00:00.0Z"),
      "dueTime": "7:00 PM",
      "name": "Sections 4.1 - 4.3 and 4.5 - 4.7"
    },
    {
      "dueDate": ISODate("2014-10-15T00:00:00.0Z"),
      "dueTime": "7:00 PM",
      "name": "Sections 5.1 - 5.7"
    },
    {
      "dueDate": ISODate("2014-10-22T00:00:00.0Z"),
      "dueTime": "7:00 PM",
      "name": "Sections 5.8 - 5.10 and 6.1 - 6.4"
    },
    {
      "dueDate": ISODate("2014-10-29T00:00:00.0Z"),
      "dueTime": "7:00 PM",
      "name": "Sections 6.5 - 6.11"
    },
    {
      "dueDate": ISODate("2014-11-19T00:00:00.0Z"),
      "dueTime": "7:00 PM",
      "name": "Sections 7.3 - 7.4 and 8.1 - 8.2"
    },
    {
      "dueDate": ISODate("2014-11-26T00:00:00.0Z"),
      "dueTime": "7:00 PM",
      "name": "Sections 8.3 and 9.1 - 9.2"
    },
    {
      "dueDate": ISODate("2014-12-03T00:00:00.0Z"),
      "dueTime": "7:00 PM",
      "name": "Sections 9.3 and 9.4 - 9.5"
    }
  ],
  "section": NumberLong(3),
  "startTime": "7:00 PM",
  "version": NumberLong(6),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:52:15.508Z"),
  "misc": [
    {
      "dueDate": ISODate("2014-10-08T00:00:00.0Z"),
      "dueTime": "7:00 PM",
      "name": "Project 1"
    },
    {
      "dueDate": ISODate("2014-11-12T00:00:00.0Z"),
      "dueTime": "7:00 PM",
      "name": "Project 2"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("54046c22975a43d59cba8434"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-03T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Homework 1"
    }
  ],
  "catalogId": "MATH301",
  "classRoom": "SOND206",
  "courseCredit": NumberInt(3),
  "courseName": "Introduction to Mathematical Analysis",
  "createdBy": "shahir1@umbc.edu",
  "createdOn": ISODate("2014-09-01T12:52:50.526Z"),
  "email": "abiswas@umbc.edu",
  "endTime": "2:45 PM",
  "enrolledCount": NumberInt(3),
  "exam": [
    {
      "dueDate": ISODate("2014-10-15T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Exam-1"
    },
    {
      "dueDate": ISODate("2014-11-19T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Exam-2"
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("54046f823219e09438ea6886"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed",
  "section": NumberInt(1),
  "startTime": "1:00 PM",
  "version": NumberLong(5),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:51:22.275Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5404af81975a43d59cba8443"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-03T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Register Clickers for Class"
    }
  ],
  "catalogId": "PSYC210",
  "classRoom": "PHYS101",
  "courseCredit": NumberInt(3),
  "courseName": "Psyc of Learning",
  "createdBy": "mhusain3@umbc.edu",
  "createdOn": ISODate("2014-09-01T17:40:17.139Z"),
  "email": "jsy@umbc.edu",
  "endTime": "3:45 PM",
  "enrolledCount": NumberInt(3),
  "exam": [
    {
      "dueDate": ISODate("2014-09-17T00:00:00.0Z"),
      "dueTime": "3:45 PM",
      "name": "Exam 1 (Ch 1-4)"
    },
    {
      "dueDate": ISODate("2014-09-22T00:00:00.0Z"),
      "dueTime": "3:45 PM",
      "name": "Remedial Exam 1 (Ch 1-4)"
    },
    {
      "dueDate": ISODate("2014-10-08T00:00:00.0Z"),
      "dueTime": "3:45 PM",
      "name": "Exam 2 (Ch 5-10)"
    },
    {
      "dueDate": ISODate("2014-10-13T00:00:00.0Z"),
      "dueTime": "3:45 PM",
      "name": "Remedial Exam 2 (Ch 5-10)"
    },
    {
      "dueDate": ISODate("2014-11-05T00:00:00.0Z"),
      "dueTime": "3:45 PM",
      "name": "Exam 3 (Ch 12-16)"
    },
    {
      "dueDate": ISODate("2014-11-10T00:00:00.0Z"),
      "dueTime": "3:45 PM",
      "name": "Remedial Exam 3 (Ch 12-16)"
    },
    {
      "dueDate": ISODate("2014-12-03T00:00:00.0Z"),
      "dueTime": "3:45 PM",
      "name": "Exam 4 (Ch 17-18, 20-24, 28-29)"
    },
    {
      "dueDate": ISODate("2014-12-08T00:00:00.0Z"),
      "dueTime": "3:45 PM",
      "name": "Remedial Exam 4 (Ch 17-18, 20-24, 28-29)"
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946a975ab33153700293"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed",
  "misc": [
    {
      "dueDate": ISODate("2014-10-15T00:00:00.0Z"),
      "dueTime": "3:45 PM",
      "name": "Bonus Point Opportunity 1"
    },
    {
      "dueDate": ISODate("2014-11-24T00:00:00.0Z"),
      "dueTime": "3:45 PM",
      "name": "Bonus Point Opportunity 2"
    }
  ],
  "quiz": [
    {
      "dueDate": ISODate("2014-09-08T00:00:00.0Z"),
      "dueTime": "11:45 PM",
      "name": "Syllabus Quiz 1"
    },
    {
      "dueDate": ISODate("2014-09-08T00:00:00.0Z"),
      "dueTime": "11:45 PM",
      "name": "Course Quiz 1 (Ch1-2)"
    },
    {
      "dueDate": ISODate("2014-09-10T00:00:00.0Z"),
      "dueTime": "11:45 PM",
      "name": "Course Quiz 2 (Ch 3)"
    },
    {
      "dueDate": ISODate("2014-09-15T00:00:00.0Z"),
      "dueTime": "11:45 PM",
      "name": "Course Quiz 3 (Ch 4)"
    },
    {
      "dueDate": ISODate("2014-09-24T00:00:00.0Z"),
      "dueTime": "11:45 PM",
      "name": "Course Quiz 4 (Ch 5-6)"
    },
    {
      "dueDate": ISODate("2014-09-29T00:00:00.0Z"),
      "dueTime": "11:45 PM",
      "name": "Course Quiz 5 (Ch 7-8)"
    },
    {
      "dueDate": ISODate("2014-10-01T00:00:00.0Z"),
      "dueTime": "11:45 PM",
      "name": "Course Quiz 6 (Ch 9-10)"
    },
    {
      "dueDate": ISODate("2014-10-15T00:00:00.0Z"),
      "dueTime": "11:45 PM",
      "name": "Course Quiz 7 (Ch 12-13)"
    },
    {
      "dueDate": ISODate("2014-10-20T00:00:00.0Z"),
      "dueTime": "11:45 PM",
      "name": "Course Quiz 8 (Ch 15)"
    },
    {
      "dueDate": ISODate("2014-10-29T00:00:00.0Z"),
      "dueTime": "11:45 PM",
      "name": "Course Quiz 9 (Ch 14, 16)"
    },
    {
      "dueDate": ISODate("2014-11-17T00:00:00.0Z"),
      "dueTime": "11:45 PM",
      "name": "Course Quiz 10 (Ch 17-18)"
    },
    {
      "dueDate": ISODate("2014-11-19T00:00:00.0Z"),
      "dueTime": "11:45 PM",
      "name": "Course Quiz 11 (Ch 20-22)"
    },
    {
      "dueDate": ISODate("2014-11-24T00:00:00.0Z"),
      "dueTime": "11:45 PM",
      "name": "Course Quiz 12 (Ch 23-24)"
    },
    {
      "dueDate": ISODate("2014-10-22T00:00:00.0Z"),
      "dueTime": "11:45 PM",
      "name": "Syllabus Quiz 2"
    }
  ],
  "section": NumberInt(1),
  "startTime": "2:30 PM",
  "version": NumberLong(6),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:51:09.82Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5404c360975a43d59cba844a"),
  "catalogId": "CMSC341",
  "classRoom": "Sondheim 108",
  "courseCredit": NumberInt(3),
  "courseName": "Data Structures",
  "createdBy": "nasif1@umbc.edu",
  "createdOn": ISODate("2014-09-01T19:05:04.781Z"),
  "email": "slupoli@cs.umbc.edu",
  "endTime": "3:45 PM",
  "enrolledCount": NumberInt(4),
  "exam": [
    {
      "dueDate": ISODate("2014-10-06T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Exam 1"
    },
    {
      "dueDate": ISODate("2014-11-10T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Exam 2"
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946d975ab3315370032b"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed",
  "misc": [
    {
      "dueDate": ISODate("2014-09-09T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "Project 0"
    },
    {
      "dueDate": ISODate("2014-09-30T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "Project 1"
    }
  ],
  "section": NumberInt(5),
  "startTime": "2:30 PM",
  "version": NumberLong(8),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:51:00.444Z"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-09T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "HW A"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5404f51b975a1c6f198fc7ca"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-02T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Chapter 4, pg 49"
    }
  ],
  "catalogId": "ENGL382",
  "classRoom": "PAHB428",
  "courseCredit": NumberInt(3),
  "courseName": "Feature Writing",
  "createdBy": "fhusain1@umbc.edu",
  "createdOn": ISODate("2014-09-01T22:37:15.508Z"),
  "email": "corbett@umbc.edu",
  "endTime": "11:15 AM",
  "enrolledCount": NumberInt(1),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9471975ab33153700454"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "misc": [
    {
      "dueDate": ISODate("2014-09-02T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Nameless, Tenn. in Course Docs in BB"
    },
    {
      "dueDate": ISODate("2014-09-02T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Vermillion in Course Docs in BB"
    },
    {
      "dueDate": ISODate("2014-09-02T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Liberace in Course Docs in BB"
    },
    {
      "dueDate": ISODate("2014-09-02T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Living at the Chelsea 1 & 2 in Course Docs in BB"
    },
    {
      "dueDate": ISODate("2014-09-02T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Subway in Course Docs in BB"
    },
    {
      "dueDate": ISODate("2014-09-02T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Drinks in Course Docs in BB"
    },
    {
      "dueDate": ISODate("2014-09-11T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "First Writing Assignment (750 word description)"
    }
  ],
  "section": NumberInt(1),
  "startTime": "10:00 AM",
  "version": NumberLong(2),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:50:55.165Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5404f5c8975a1c6f198fc7cb"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-03T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Me(dia) PowerPoint"
    }
  ],
  "catalogId": "MCS222",
  "classRoom": "Sherman Hall 006",
  "courseCredit": NumberInt(3),
  "courseName": "Media and Communication Studies",
  "createdBy": "fhusain1@umbc.edu",
  "createdOn": ISODate("2014-09-01T22:40:08.445Z"),
  "email": "dsnyder@umbc.edu",
  "endTime": "2:15 PM",
  "enrolledCount": NumberInt(1),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9474975ab33153700562"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed",
  "section": NumberInt(2),
  "startTime": "1:00 PM",
  "version": NumberLong(2),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:50:52.357Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("54058634975a978274e518d1"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-04T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Chapter 2, p. 14-20"
    },
    {
      "dueDate": ISODate("2014-09-04T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "“The Modern Public and Photography” from The Salon of 1859, by Charles Baudelaire, (See Blackboard)"
    },
    {
      "dueDate": ISODate("2014-09-11T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Chapter 3, pp. 42-50"
    },
    {
      "dueDate": ISODate("2014-09-18T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Chapter 3, pp. 50-67"
    },
    {
      "dueDate": ISODate("2014-09-18T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Study the information on the following website: http:\/\/www.moma.org\/interactives\/exhibitions\/2014\/gauguin\/about"
    },
    {
      "dueDate": ISODate("2014-09-25T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Chapter 3, pp. 67-69"
    },
    {
      "dueDate": ISODate("2014-09-25T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Chapter 4, pp. 70-89"
    },
    {
      "dueDate": ISODate("2014-10-02T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Chapter 4, pp. 84-89"
    },
    {
      "dueDate": ISODate("2014-10-09T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Chapter 5, pp. 90-110"
    },
    {
      "dueDate": ISODate("2014-10-09T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Chapter 11, pp. 246-250"
    },
    {
      "dueDate": ISODate("2014-10-09T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "“An Odd  Bird,” by Stéphanie Giry"
    },
    {
      "dueDate": ISODate("2014-10-16T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Chapter 6, pp. 111-135"
    },
    {
      "dueDate": ISODate("2014-10-16T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "“The Psychological Working of Colour” from  Kandinsky’s Concerning the Spiritual in Art"
    },
    {
      "dueDate": ISODate("2014-10-23T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Chapter 7, pp. 136-159"
    },
    {
      "dueDate": ISODate("2014-10-23T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Chapter 11, pp. 250-258"
    },
    {
      "dueDate": ISODate("2014-10-30T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Chapter 7, pp. 163-168"
    },
    {
      "dueDate": ISODate("2014-10-30T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Chapter 9, pp. 186-207"
    },
    {
      "dueDate": ISODate("2014-10-30T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Chapter 11, pp. 259-261"
    },
    {
      "dueDate": ISODate("2014-10-30T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Chapter 12, 262-274"
    },
    {
      "dueDate": ISODate("2014-10-30T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Excerpt from the Futurist Manifesto, by Filippo Tomasso Marinetti"
    },
    {
      "dueDate": ISODate("2014-11-06T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Chapter 8, pp. 169-185"
    },
    {
      "dueDate": ISODate("2014-11-13T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Chapter 10, pp. 213-233"
    },
    {
      "dueDate": ISODate("2014-11-13T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Excerpt from the Tristan Tzara’s 1918   Dada Manifesto"
    },
    {
      "dueDate": ISODate("2014-11-20T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Chapter 14, pp. 297-337"
    },
    {
      "dueDate": ISODate("2014-11-20T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Chapter 15, p. 367"
    },
    {
      "dueDate": ISODate("2014-11-20T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Excerpt from André  Breton’s 1924 Surrealist Manifesto"
    },
    {
      "dueDate": ISODate("2014-12-04T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Chapter 15, pp. 338-363"
    },
    {
      "dueDate": ISODate("2014-12-04T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Watch The Harlem Renaissance (UMDVD   5616) and take notes"
    }
  ],
  "catalogId": "ART323",
  "classRoom": "ITE233",
  "courseCredit": NumberInt(3),
  "courseName": "Modernism (1880-1960)",
  "createdBy": "jw15@umbc.edu",
  "createdOn": ISODate("2014-09-02T08:56:20.381Z"),
  "email": "akimber@umbc.edu",
  "endTime": "7:00 PM",
  "enrolledCount": NumberInt(1),
  "exam": [
    {
      "dueDate": ISODate("2014-10-02T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Test I"
    },
    {
      "dueDate": ISODate("2014-11-06T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Test II"
    },
    {
      "dueDate": ISODate("2014-12-11T00:00:00.0Z"),
      "dueTime": "6:00 PM",
      "name": "Final Exam"
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946a975ab33153700293"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Thu",
  "misc": [
    {
      "dueDate": ISODate("2014-10-23T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Research Planning Sheet, Outline and Annotated Bibliography"
    },
    {
      "dueDate": ISODate("2014-12-04T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Research Paper"
    }
  ],
  "quiz": [
    {
      "dueDate": ISODate("2014-09-04T00:00:00.0Z"),
      "dueTime": "4:40 PM",
      "name": "Take-10: Do Not Arrive Late!"
    },
    {
      "dueDate": ISODate("2014-09-11T00:00:00.0Z"),
      "dueTime": "4:40 PM",
      "name": "Take-10: Do Not Arrive Late!"
    },
    {
      "dueDate": ISODate("2014-09-18T00:00:00.0Z"),
      "dueTime": "4:40 PM",
      "name": "Take-10: Do Not Arrive Late!"
    },
    {
      "dueDate": ISODate("2014-09-25T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Take-10: Do Not Arrive Late!"
    },
    {
      "dueDate": ISODate("2014-10-09T00:00:00.0Z"),
      "dueTime": "4:40 PM",
      "name": "Take-10: Do Not Arrive Late!"
    },
    {
      "dueDate": ISODate("2014-10-16T00:00:00.0Z"),
      "dueTime": "4:40 PM",
      "name": "Take-10: Do Not Arrive Late!"
    },
    {
      "dueDate": ISODate("2014-10-23T00:00:00.0Z"),
      "dueTime": "4:40 PM",
      "name": "Take-10: Do Not Arrive Late!"
    },
    {
      "dueDate": ISODate("2014-10-23T00:00:00.0Z"),
      "dueTime": "4:40 PM",
      "name": "Take-10: Do Not Arrive Late!"
    },
    {
      "dueDate": ISODate("2014-10-30T00:00:00.0Z"),
      "dueTime": "4:40 PM",
      "name": "Take-10: Do Not Arrive Late!"
    },
    {
      "dueDate": ISODate("2014-11-13T00:00:00.0Z"),
      "dueTime": "4:40 PM",
      "name": "Take-10: Do Not Arrive Late!"
    },
    {
      "dueDate": ISODate("2014-11-20T00:00:00.0Z"),
      "dueTime": "4:40 PM",
      "name": "Take-10: Do Not Arrive Late!"
    }
  ],
  "section": NumberInt(1),
  "startTime": "4:30 PM",
  "version": NumberLong(3),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:50:50.9Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("54063c5c975aee280970456a"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-03T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Read “The Communicative Functions”  and “What is a sign?” on Bb."
    },
    {
      "dueDate": ISODate("2014-09-03T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Keep a literacy log for one full day this  week to bring to our next class for reflection. On paper, write down  each time you read or write something; for your journal, sort those  activities into two tables, “Types of Uses of Reading” and “Types of  Uses of Writing.” Consider what and how you read and write."
    },
    {
      "dueDate": ISODate("2014-09-08T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Read the Mark Twain piece on Bb,  answering the questions in your notes. Do the travel guide exercise."
    },
    {
      "dueDate": ISODate("2014-09-08T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Review course material to date in preparation for Monday’s quiz."
    },
    {
      "dueDate": ISODate("2014-09-10T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Read Obama’s 2014 State of the Union  address"
    },
    {
      "dueDate": ISODate("2014-09-10T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Complete “Obama Address I”, “Style Registers,” and  “Deixis” on Bb"
    },
    {
      "dueDate": ISODate("2014-09-17T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Read “Directive or Persuasive  Language” and re-read Obama’s 2014 State of the Union Address on  Bb"
    },
    {
      "dueDate": ISODate("2014-09-17T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Complete “Obama Address II”"
    },
    {
      "dueDate": ISODate("2014-09-22T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Read “Challenging the Literal” (pg.s  123-145) from Semiotics: the Basics, on Bb"
    },
    {
      "dueDate": ISODate("2014-09-24T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Review the readings and lectures covered  to date (Unit I) in preparation for the Wednesday’s exam"
    },
    {
      "dueDate": ISODate("2014-09-29T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Read the following from Bb: “Pragmatics  and Conversation,” “Politeness,” and “Metamessages.”"
    },
    {
      "dueDate": ISODate("2014-10-01T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Read the chapter “Text and context:  spoken discourse” from Working with Texts: A Core Introduction to  Language Analysis, on Bb"
    }
  ],
  "catalogId": "MLL301",
  "classRoom": "SHER011",
  "courseCredit": NumberInt(3),
  "courseName": "Textual Analysis: Words, Images, Music",
  "createdBy": "jw15@umbc.edu",
  "createdOn": ISODate("2014-09-02T21:53:32.156Z"),
  "email": "ekhogan@umbc.edu",
  "endTime": "3:45 PM",
  "enrolledCount": NumberInt(1),
  "exam": [
    {
      "dueDate": ISODate("2014-09-24T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Exam #1 on Unit 1"
    },
    {
      "dueDate": ISODate("2014-10-29T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Exam #2 on Unit 2"
    },
    {
      "dueDate": ISODate("2014-12-08T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Exam #3 on Units III, IV, V (2:30-3:45)"
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946a975ab33153700293"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed",
  "misc": [
    {
      "dueDate": ISODate("2014-09-05T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Analytical Journal Assignment"
    },
    {
      "dueDate": ISODate("2014-09-12T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Analytical Journal Assignment"
    },
    {
      "dueDate": ISODate("2014-09-22T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Analysis #1 (Verbal texts)"
    },
    {
      "dueDate": ISODate("2014-09-19T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Analytical Journal Assignment"
    },
    {
      "dueDate": ISODate("2014-10-03T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Analytical Journal Assignment"
    }
  ],
  "quiz": [
    {
      "dueDate": ISODate("2014-09-08T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "QUIZ on fundamental course vocabulary and concepts to date.  (During first 15-20 minutes of class. Please arrive to class on time to  benefit from the full time allotment.)"
    }
  ],
  "section": NumberInt(1),
  "startTime": "2:30 PM",
  "version": NumberLong(2),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:50:29.502Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("540640b6975aee280970456c"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-03T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Stephen Kinzer, Overthrow, 1-77"
    },
    {
      "dueDate": ISODate("2014-09-03T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Emily S. Rosenberg, Spreading the American Dream, 3-62"
    },
    {
      "dueDate": ISODate("2014-09-08T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Academic Integrity tutorial due"
    },
    {
      "dueDate": ISODate("2014-09-08T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Wilson’s Fourteen Points (1918) http:\/\/avalon.law.yale.edu\/20th_century\/wilson14.asp"
    },
    {
      "dueDate": ISODate("2014-09-15T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "The Palestine Mandate (1922) http:\/\/avalon.law.yale.edu\/20th_century\/palmanda.asp"
    },
    {
      "dueDate": ISODate("2014-09-17T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Emily S. Rosenberg, Spreading the American Dream, 108-160"
    },
    {
      "dueDate": ISODate("2014-09-17T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Joyce Blackwell-Johnson, “American Activists in the Women’s International League for  Peace and Freedom, 1920s-1950s,” Peace and Change 23.4 (Oct. 1998): 466-482"
    },
    {
      "dueDate": ISODate("2014-09-17T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Mona L. Siegel, “Western Feminism and Anti-Imperialism: The Women’s International  League for Peace and Freedom’s Anti-Opium Campaign,” Peace and Change 36.1 (Jan.  2011): 34-61"
    },
    {
      "dueDate": ISODate("2014-09-17T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Neil Earle, “Public Opinion for Peace: Tactics of Peace Activists at the Washington  Conference on Naval Armament,” Journal of Church and State 40.1 (Winter 1998): 149- 169"
    },
    {
      "dueDate": ISODate("2014-09-22T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Jerry Siegel and Joe Schuster, Superman Archives, Vol. 1 (DC Comics: 2006), 27-39  (pdf on Blackboard)"
    },
    {
      "dueDate": ISODate("2014-09-24T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Emily S. Rosenberg, Spreading the American Dream, 161-234"
    },
    {
      "dueDate": ISODate("2014-09-24T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "John A. Thompson, “Conceptions of National Security and American Entry into  World War II,” Diplomacy & Statecraft 16.4 (Dec. 2005): 671-697"
    },
    {
      "dueDate": ISODate("2014-09-24T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Paul S. Burtness and Warren U. Ober, “Communication Lapses Leading to the Pearl  Harbor Disaster,” The Historian 75.4 (Winter 2013): 740-759"
    },
    {
      "dueDate": ISODate("2014-09-29T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Browse the following in preparation for this week’s debates on nuclear policy: o http:\/\/www.dannen.com\/decision\/ o https:\/\/www.mtholyoke.edu\/acad\/intrel\/hiroshim.htm"
    }
  ],
  "catalogId": "HIST635",
  "classRoom": "MATH-PSYCH104",
  "courseCredit": NumberInt(3),
  "courseName": "Twentieth-Century American Foreign Policy",
  "createdBy": "jw15@umbc.edu",
  "createdOn": ISODate("2014-09-02T22:12:06.707Z"),
  "email": "oyen@umbc.edu",
  "endTime": "5:15 PM",
  "enrolledCount": NumberInt(1),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9472975ab331537004b9"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed",
  "quiz": [
    {
      "dueDate": ISODate("2014-09-15T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Map Quiz"
    }
  ],
  "section": NumberInt(1),
  "startTime": "4:00 PM",
  "version": NumberLong(2),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:50:10.783Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("54068ae6975aee2809704570"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-02T00:00:00.0Z"),
      "dueTime": "3:30 PM",
      "name": "pre-RQ2A"
    },
    {
      "dueDate": ISODate("2014-09-04T00:00:00.0Z"),
      "dueTime": "3:30 PM",
      "name": "Pre-RQ2B"
    },
    {
      "dueDate": ISODate("2014-09-09T00:00:00.0Z"),
      "dueTime": "3:30 PM",
      "name": "Pre-RQ3A"
    },
    {
      "dueDate": ISODate("2014-09-11T00:00:00.0Z"),
      "dueTime": "3:30 PM",
      "name": "Pre-RQ3B"
    },
    {
      "dueDate": ISODate("2014-09-16T00:00:00.0Z"),
      "dueTime": "3:30 PM",
      "name": "Pre-RQ4A"
    },
    {
      "dueDate": ISODate("2014-09-18T00:00:00.0Z"),
      "dueTime": "3:30 PM",
      "name": "Pre-RQ4B"
    },
    {
      "dueDate": ISODate("2014-09-30T00:00:00.0Z"),
      "dueTime": "3:30 PM",
      "name": "Pre-RQ5A"
    },
    {
      "dueDate": ISODate("2014-10-02T00:00:00.0Z"),
      "dueTime": "3:30 PM",
      "name": "Pre-RQ5B"
    },
    {
      "dueDate": ISODate("2014-10-07T00:00:00.0Z"),
      "dueTime": "3:30 PM",
      "name": "Pre-RQ6A"
    },
    {
      "dueDate": ISODate("2014-10-09T00:00:00.0Z"),
      "dueTime": "3:30 PM",
      "name": "Pre-RQ6B"
    },
    {
      "dueDate": ISODate("2014-10-14T00:00:00.0Z"),
      "dueTime": "3:30 PM",
      "name": "Pre-RQ7A"
    },
    {
      "dueDate": ISODate("2014-10-16T00:00:00.0Z"),
      "dueTime": "3:30 PM",
      "name": "Pre-RQ7B"
    },
    {
      "dueDate": ISODate("2014-10-28T00:00:00.0Z"),
      "dueTime": "3:30 PM",
      "name": "Pre-RQ8A"
    },
    {
      "dueDate": ISODate("2014-10-30T00:00:00.0Z"),
      "dueTime": "3:30 PM",
      "name": "Pre-RQ8B"
    },
    {
      "dueDate": ISODate("2014-11-04T00:00:00.0Z"),
      "dueTime": "3:30 PM",
      "name": "Pre-RQ9A"
    },
    {
      "dueDate": ISODate("2014-11-06T00:00:00.0Z"),
      "dueTime": "3:30 PM",
      "name": "Pre-RQ9B"
    },
    {
      "dueDate": ISODate("2014-11-11T00:00:00.0Z"),
      "dueTime": "3:30 PM",
      "name": "Pre-RQ10A"
    },
    {
      "dueDate": ISODate("2014-11-13T00:00:00.0Z"),
      "dueTime": "3:30 PM",
      "name": "Pre-RQ10B"
    },
    {
      "dueDate": ISODate("2014-11-18T00:00:00.0Z"),
      "dueTime": "3:30 PM",
      "name": "Pre-RQ11A"
    },
    {
      "dueDate": ISODate("2014-11-20T00:00:00.0Z"),
      "dueTime": "3:30 PM",
      "name": "Pre-RQ11B"
    },
    {
      "dueDate": ISODate("2014-12-02T00:00:00.0Z"),
      "dueTime": "3:30 PM",
      "name": "Pre-RQ12A"
    },
    {
      "dueDate": ISODate("2014-12-04T00:00:00.0Z"),
      "dueTime": "3:30 PM",
      "name": "Pre-RQ12B"
    },
    {
      "dueDate": ISODate("2014-09-02T00:00:00.0Z"),
      "dueTime": "11:45 PM",
      "name": "Webassign HW#, 1"
    },
    {
      "dueDate": ISODate("2014-09-07T00:00:00.0Z"),
      "dueTime": "11:45 PM",
      "name": "Webassign HW#, 2"
    },
    {
      "dueDate": ISODate("2014-09-09T00:00:00.0Z"),
      "dueTime": "11:45 PM",
      "name": "Webassign HW#, 3"
    },
    {
      "dueDate": ISODate("2014-09-16T00:00:00.0Z"),
      "dueTime": "11:45 PM",
      "name": "Webassign HW#, 4"
    },
    {
      "dueDate": ISODate("2014-09-16T00:00:00.0Z"),
      "dueTime": "11:45 PM",
      "name": "Webassign HW#, 4a"
    },
    {
      "dueDate": ISODate("2014-09-23T00:00:00.0Z"),
      "dueTime": "11:45 PM",
      "name": "Webassign HW#, 5"
    },
    {
      "dueDate": ISODate("2014-09-30T00:00:00.0Z"),
      "dueTime": "11:45 PM",
      "name": "Webassign HW#, 6"
    },
    {
      "dueDate": ISODate("2014-10-07T00:00:00.0Z"),
      "dueTime": "11:45 PM",
      "name": "Webassign HW#, 7"
    },
    {
      "dueDate": ISODate("2014-10-14T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "Webassign HW#, 8"
    },
    {
      "dueDate": ISODate("2014-10-21T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "Webassign HW#, 9"
    },
    {
      "dueDate": ISODate("2014-10-28T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "Webassign HW#, 10"
    },
    {
      "dueDate": ISODate("2014-11-04T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "Webassign HW#, 11"
    },
    {
      "dueDate": ISODate("2014-11-11T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "Webassign HW#, 12"
    },
    {
      "dueDate": ISODate("2014-11-20T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "Webassign HW#, 13"
    },
    {
      "dueDate": ISODate("2014-11-25T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "Webassign HW#, 14"
    },
    {
      "dueDate": ISODate("2014-12-07T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "Webassign HW#, 15"
    }
  ],
  "catalogId": "MATH150",
  "classRoom": "sherman hall 003",
  "courseCredit": NumberInt(3),
  "courseName": "Precalculus Mathematics",
  "createdBy": "NO46811@umbc.edu",
  "createdOn": ISODate("2014-09-03T03:28:38.411Z"),
  "email": "bdean@umbc.edu",
  "endTime": "4:50 PM",
  "enrolledCount": NumberInt(5),
  "exam": [
    {
      "dueDate": ISODate("2014-09-25T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "test 1"
    },
    {
      "dueDate": ISODate("2014-10-23T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "test 2"
    },
    {
      "dueDate": ISODate("2014-11-25T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "test 3"
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fe6f603219e0982eceeb4e"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "quiz": [
    {
      "dueDate": ISODate("2014-09-11T00:00:00.0Z"),
      "dueTime": "6:30 PM",
      "name": "Quiz 1, 2.1-2.4"
    },
    {
      "dueDate": ISODate("2014-09-18T00:00:00.0Z"),
      "dueTime": "6:30 PM",
      "name": "Quiz 2, 2.5-2.7"
    },
    {
      "dueDate": ISODate("2014-10-02T00:00:00.0Z"),
      "dueTime": "6:30 PM",
      "name": "Quiz 3,  3.3 & 3.7"
    },
    {
      "dueDate": ISODate("2014-10-09T00:00:00.0Z"),
      "dueTime": "6:30 PM",
      "name": "Quiz 4, (4.1-4.3)"
    },
    {
      "dueDate": ISODate("2014-10-16T00:00:00.0Z"),
      "dueTime": "6:30 PM",
      "name": "Quiz 5,(4.4-4.6)"
    },
    {
      "dueDate": ISODate("2014-10-30T00:00:00.0Z"),
      "dueTime": "6:30 PM",
      "name": "Quiz 6, (5.3 &  5.4)"
    },
    {
      "dueDate": ISODate("2014-11-13T00:00:00.0Z"),
      "dueTime": "6:30 PM",
      "name": "Quiz 7, (5.5,6.2,6.4,6.5,6.6)"
    },
    {
      "dueDate": ISODate("2014-11-20T00:00:00.0Z"),
      "dueTime": "6:30 PM",
      "name": "Quiz 8, (7.1-7.3)"
    },
    {
      "dueDate": ISODate("2014-12-04T00:00:00.0Z"),
      "dueTime": "6:30 PM",
      "name": "Quiz 9(8.1 and completing the square)"
    },
    {
      "dueDate": ISODate("2014-09-04T00:00:00.0Z"),
      "dueTime": "6:30 PM",
      "name": "post RQ #1"
    },
    {
      "dueDate": ISODate("2014-09-09T00:00:00.0Z"),
      "dueTime": "6:30 PM",
      "name": "post RQ #2"
    },
    {
      "dueDate": ISODate("2014-09-16T00:00:00.0Z"),
      "dueTime": "6:30 PM",
      "name": "post RQ #3"
    },
    {
      "dueDate": ISODate("2014-09-23T00:00:00.0Z"),
      "dueTime": "6:30 PM",
      "name": "post RQ #4"
    },
    {
      "dueDate": ISODate("2014-10-07T00:00:00.0Z"),
      "dueTime": "6:30 PM",
      "name": "post RQ #5"
    },
    {
      "dueDate": ISODate("2014-10-14T00:00:00.0Z"),
      "dueTime": "6:30 PM",
      "name": "post RQ #6"
    },
    {
      "dueDate": ISODate("2014-10-21T00:00:00.0Z"),
      "dueTime": "6:30 PM",
      "name": "post RQ #7"
    },
    {
      "dueDate": ISODate("2014-11-04T00:00:00.0Z"),
      "dueTime": "6:30 PM",
      "name": "post RQ #8"
    },
    {
      "dueDate": ISODate("2014-11-11T00:00:00.0Z"),
      "dueTime": "6:30 PM",
      "name": "post RQ #9"
    },
    {
      "dueDate": ISODate("2014-11-18T00:00:00.0Z"),
      "dueTime": "6:30 PM",
      "name": "post RQ #10"
    },
    {
      "dueDate": ISODate("2014-11-25T00:00:00.0Z"),
      "dueTime": "6:30 PM",
      "name": "post RQ #11"
    },
    {
      "dueDate": ISODate("2014-12-09T00:00:00.0Z"),
      "dueTime": "6:30 PM",
      "name": "post RQ #12"
    }
  ],
  "section": NumberInt(9),
  "startTime": "4:00 PM",
  "version": NumberLong(6),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:50:08.963Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5407342b975aee2809704578"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-16T00:00:00.0Z"),
      "dueTime": "5:00 PM",
      "name": "HW 1"
    },
    {
      "dueDate": ISODate("2014-09-25T00:00:00.0Z"),
      "dueTime": "5:00 PM",
      "name": "HW 2"
    },
    {
      "dueDate": ISODate("2014-10-02T00:00:00.0Z"),
      "dueTime": "5:00 PM",
      "name": "HW 3"
    },
    {
      "dueDate": ISODate("2014-10-09T00:00:00.0Z"),
      "dueTime": "5:00 PM",
      "name": "HW 4"
    },
    {
      "dueDate": ISODate("2014-10-16T00:00:00.0Z"),
      "dueTime": "5:00 PM",
      "name": "HW 6"
    },
    {
      "dueDate": ISODate("2014-11-06T00:00:00.0Z"),
      "dueTime": "5:00 PM",
      "name": "HW 7"
    },
    {
      "dueDate": ISODate("2014-11-13T00:00:00.0Z"),
      "dueTime": "5:00 PM",
      "name": "HW 8"
    },
    {
      "dueDate": ISODate("2014-11-20T00:00:00.0Z"),
      "dueTime": "5:00 PM",
      "name": "Project 1"
    },
    {
      "dueDate": ISODate("2014-12-09T00:00:00.0Z"),
      "dueTime": "5:00 PM",
      "name": "Project 2"
    }
  ],
  "catalogId": "CMSC201",
  "classRoom": "ITE102",
  "courseCredit": NumberInt(3),
  "courseName": "Computer Science I",
  "createdBy": "hafeez1@umbc.edu",
  "createdOn": ISODate("2014-09-03T15:30:51.951Z"),
  "email": "pedram@umbc.edu",
  "endTime": "5:15 PM",
  "enrolledCount": NumberInt(6),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("5400bef73219e0982eceeb55"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed",
  "section": NumberInt(19),
  "startTime": "4:00 PM",
  "version": NumberLong(9),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:50:06.476Z"),
  "exam": [
    {
      "dueDate": ISODate("2014-10-22T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Midterm"
    },
    {
      "dueDate": ISODate("2014-12-12T00:00:00.0Z"),
      "dueTime": "3:30 PM",
      "name": "Final"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5407500a975aee280970457b"),
  "catalogId": "MATH251",
  "classRoom": "Lecture Hall 1",
  "courseCredit": NumberInt(3),
  "courseName": "Multivariable Calculus",
  "createdBy": "hafeez1@umbc.edu",
  "createdOn": ISODate("2014-09-03T17:29:46.365Z"),
  "email": "knanes@umbc.edu",
  "endTime": "11:15 AM",
  "enrolledCount": NumberInt(5),
  "exam": [
    {
      "dueDate": ISODate("2014-09-22T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Exam 1"
    },
    {
      "dueDate": ISODate("2014-10-20T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Exam 2"
    },
    {
      "dueDate": ISODate("2014-11-17T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Exam 3"
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9474975ab3315370053c"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed,Fri",
  "section": NumberInt(1),
  "startTime": "10:00 AM",
  "version": NumberLong(9),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:50:04.603Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("540751dc975aee280970457c"),
  "catalogId": "MATH221",
  "classRoom": "MP 104",
  "courseCredit": NumberInt(3),
  "courseName": "Introduction to Linear Algebra",
  "createdBy": "hafeez1@umbc.edu",
  "createdOn": ISODate("2014-09-03T17:37:32.448Z"),
  "email": "seidman@math.umbc.edu",
  "endTime": "5:15 PM",
  "enrolledCount": NumberInt(3),
  "exam": [
    {
      "dueDate": ISODate("2014-12-16T00:00:00.0Z"),
      "dueTime": "3:30 PM",
      "name": "Final"
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9474975ab33153700546"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "section": NumberInt(4),
  "startTime": "4:00 PM",
  "version": NumberLong(5),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:50:02.966Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("540754bc975aee280970457d"),
  "catalogId": "THTR202",
  "classRoom": "SOND 208",
  "courseCredit": NumberInt(3),
  "courseName": "Introduction to Dramatic Literature",
  "createdBy": "hafeez1@umbc.edu",
  "createdOn": ISODate("2014-09-03T17:49:48.777Z"),
  "email": "csearls@umbc.edu",
  "endTime": "11:15 AM",
  "enrolledCount": NumberInt(1),
  "exam": [
    {
      "dueDate": ISODate("2014-12-16T00:00:00.0Z"),
      "dueTime": "10:30 AM",
      "name": "Final Exam"
    },
    {
      "dueDate": ISODate("2014-09-30T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Essay 1"
    },
    {
      "dueDate": ISODate("2014-10-28T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Essay 2"
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9477975ab33153700642"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "section": NumberInt(1),
  "startTime": "10:00 AM",
  "version": NumberLong(4),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:50:01.257Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53fc1071975a76b7173fe62d"),
  "assignment": [
    {
      "dueDate": ISODate("2014-08-27T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Read Sharp, et al. - Chapter 1"
    },
    {
      "dueDate": ISODate("2014-09-03T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Dix et al. - Chapter 1"
    },
    {
      "dueDate": ISODate("2014-09-08T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Norman - Chapter 1 and 4"
    },
    {
      "dueDate": ISODate("2014-09-15T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Dix et al- Chapter 7"
    },
    {
      "dueDate": ISODate("2014-09-22T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Sharp, et-all Chapter 10"
    }
  ],
  "catalogId": "IS303",
  "classRoom": "ITE468",
  "courseCredit": NumberInt(3),
  "courseName": "Fundamentals of HCI",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-26T04:43:29.603Z"),
  "email": "saulyn1@umbc.edu",
  "endTime": "3:45 PM",
  "enrolledCount": NumberInt(2),
  "exam": [
    {
      "dueDate": ISODate("2014-09-15T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Exam 1"
    },
    {
      "dueDate": ISODate("2014-12-08T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Exam 2"
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fdfc043219e07946ceeb4d"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed",
  "section": NumberInt(1),
  "startTime": "2:30 PM",
  "version": NumberLong(18),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:58:40.920Z"),
  "misc": [
    {
      "dueDate": ISODate("2014-09-14T00:00:00.0Z"),
      "dueTime": "11:15 PM",
      "name": "Extra Credit BlackBoard"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5407b8a6975a24f94117728a"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-08T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Personal Statement"
    },
    {
      "dueDate": ISODate("2014-09-22T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Essay and Reading"
    },
    {
      "dueDate": ISODate("2014-09-15T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Reading"
    }
  ],
  "catalogId": "HONR100",
  "classRoom": "Sherman Hall 003",
  "courseCredit": NumberInt(3),
  "courseName": "Honors Forum",
  "createdBy": "jvaden1@umbc.edu",
  "createdOn": ISODate("2014-09-04T00:56:06.737Z"),
  "email": "jodik@umbc.edu",
  "endTime": "7:00 PM",
  "enrolledCount": NumberInt(16),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946a975ab33153700293"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon",
  "section": NumberInt(1),
  "startTime": "4:00 PM",
  "version": NumberLong(20),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:48:18.752Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("54093ccc975a843d5c768d7e"),
  "catalogId": "ARCH100",
  "classRoom": "PUP 105",
  "courseCredit": NumberInt(3),
  "courseName": "Intro to Archaeology",
  "createdBy": "swath1@umbc.edu",
  "createdOn": ISODate("2014-09-05T04:32:12.608Z"),
  "email": "mflane@umbc.edu",
  "endTime": "3:45 PM",
  "enrolledCount": NumberInt(7),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946f975ab33153700398"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "section": NumberInt(1),
  "startTime": "2:30 PM",
  "version": NumberLong(12),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:48:12.600Z"),
  "exam": [
    {
      "dueDate": ISODate("2014-09-18T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Test 1"
    },
    {
      "dueDate": ISODate("2014-10-16T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Test 2"
    },
    {
      "dueDate": ISODate("2014-11-13T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Test 3"
    },
    {
      "dueDate": ISODate("2014-12-11T00:00:00.0Z"),
      "dueTime": "3:00 PM",
      "name": "Cumulative Final Exam"
    }
  ],
  "assignment": [
    {
      "dueDate": ISODate("2014-09-04T00:00:00.0Z"),
      "dueTime": "2:45 PM",
      "name": "Methods and Techniques HW"
    },
    {
      "dueDate": ISODate("2014-09-11T00:00:00.0Z"),
      "dueTime": "2:45 PM",
      "name": "Theory HW"
    },
    {
      "dueDate": ISODate("2014-09-04T00:00:00.0Z"),
      "dueTime": "2:45 PM",
      "name": "Chapter 2 Scarre and Fagan"
    },
    {
      "dueDate": ISODate("2014-09-09T00:00:00.0Z"),
      "dueTime": "2:45 PM",
      "name": "Video Watkins"
    },
    {
      "dueDate": ISODate("2014-09-11T00:00:00.0Z"),
      "dueTime": "2:45 PM",
      "name": "Video Watkins"
    },
    {
      "dueDate": ISODate("2014-09-16T00:00:00.0Z"),
      "dueTime": "2:45 PM",
      "name": "Chapter 3 Scarre and Fagan"
    },
    {
      "dueDate": ISODate("2014-09-23T00:00:00.0Z"),
      "dueTime": "2:45 PM",
      "name": "Chapter to p 133 Scarre and Fagan"
    },
    {
      "dueDate": ISODate("2014-09-25T00:00:00.0Z"),
      "dueTime": "2:45 PM",
      "name": "Wilkinson Reading"
    },
    {
      "dueDate": ISODate("2014-09-30T00:00:00.0Z"),
      "dueTime": "2:45 PM",
      "name": "Scott Reading"
    },
    {
      "dueDate": ISODate("2014-10-07T00:00:00.0Z"),
      "dueTime": "2:45 PM",
      "name": "Chapter 5 Scarre and Fagan"
    },
    {
      "dueDate": ISODate("2014-10-09T00:00:00.0Z"),
      "dueTime": "2:45 PM",
      "name": "Shank Reading"
    },
    {
      "dueDate": ISODate("2014-10-14T00:00:00.0Z"),
      "dueTime": "2:45 PM",
      "name": "Chapter 7 Scarre and Fagan"
    },
    {
      "dueDate": ISODate("2014-10-21T00:00:00.0Z"),
      "dueTime": "2:45 PM",
      "name": "Chapter 4 p 133-145 Scarre and Fagan"
    },
    {
      "dueDate": ISODate("2014-10-23T00:00:00.0Z"),
      "dueTime": "2:45 PM",
      "name": "Redford Chapter 7 Reading"
    },
    {
      "dueDate": ISODate("2014-10-28T00:00:00.0Z"),
      "dueTime": "2:45 PM",
      "name": "Runnels  and Murray Reading"
    },
    {
      "dueDate": ISODate("2014-11-04T00:00:00.0Z"),
      "dueTime": "2:45 PM",
      "name": "Chapter 9 Scarre and Fagan"
    },
    {
      "dueDate": ISODate("2014-11-06T00:00:00.0Z"),
      "dueTime": "2:45 AM",
      "name": "Chadwick Reading"
    },
    {
      "dueDate": ISODate("2014-11-11T00:00:00.0Z"),
      "dueTime": "2:45 PM",
      "name": "Chapter 8 Scarre and Fagan"
    },
    {
      "dueDate": ISODate("2014-11-18T00:00:00.0Z"),
      "dueTime": "2:45 PM",
      "name": "Chapter 10 to p284 Scarre and Fagan"
    },
    {
      "dueDate": ISODate("2014-11-20T00:00:00.0Z"),
      "dueTime": "2:45 PM",
      "name": "Chapter 10 p 284-302"
    },
    {
      "dueDate": ISODate("2014-11-25T00:00:00.0Z"),
      "dueTime": "2:45 PM",
      "name": "Samons Reading"
    },
    {
      "dueDate": ISODate("2014-12-02T00:00:00.0Z"),
      "dueTime": "2:45 PM",
      "name": "Chapter 12 Scarre and Fagan"
    },
    {
      "dueDate": ISODate("2014-12-04T00:00:00.0Z"),
      "dueTime": "2:45 PM",
      "name": "Chapter 13 Divine Kings"
    }
  ],
  "misc": [
    {
      "dueDate": ISODate("2014-09-30T00:00:00.0Z"),
      "dueTime": "3:45 PM",
      "name": "IN-CLASS GEOGRAPHY EXERCISE"
    },
    {
      "dueDate": ISODate("2014-10-09T00:00:00.0Z"),
      "dueTime": "3:45 PM",
      "name": "IN-CLASS CHRONOLOGY EXERCISE"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5405fa75975a285fbb6994f2"),
  "catalogId": "STAT351",
  "classRoom": "Performing Arts 132",
  "courseCredit": NumberInt(3),
  "courseName": "Stat Biz\/Econ Thursday Discussion",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-09-02T17:12:21.814Z"),
  "email": "estanwy1@umbc.edu",
  "endTime": "3:15 PM",
  "enrolledCount": NumberInt(0),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9474975ab3315370054c"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Thu",
  "section": NumberInt(6),
  "startTime": "2:00 PM",
  "version": NumberLong(4),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:50:32.748Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5409f19b975a843d5c768db8"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-15T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Pg. 10"
    }
  ],
  "catalogId": "PSYC324",
  "classRoom": "USG, III, 2226",
  "courseCredit": NumberInt(3),
  "courseName": "Intro to Interview Techniques",
  "createdBy": "eliz11@umbc.edu",
  "createdOn": ISODate("2014-09-05T17:23:39.667Z"),
  "email": "erudow@umbc.edu",
  "endTime": "12:15 AM",
  "enrolledCount": NumberInt(1),
  "exam": [
    {
      "dueDate": ISODate("2014-10-27T00:00:00.0Z"),
      "dueTime": "9:30 AM",
      "name": "Midterm Ch. #1-6"
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946f975ab331537003bc"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon",
  "quiz": [
    {
      "dueDate": ISODate("2014-09-15T00:00:00.0Z"),
      "dueTime": "9:30 AM",
      "name": "1"
    }
  ],
  "section": NumberInt(1),
  "startTime": "9:30 AM",
  "version": NumberLong(7),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:48:10.833Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5409f2ca975a843d5c768dba"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-15T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Ch. 1 & 2"
    },
    {
      "dueDate": ISODate("2014-12-08T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Business Plan Group Project"
    }
  ],
  "catalogId": "MGMT210",
  "classRoom": "PAH132",
  "courseCredit": NumberInt(3),
  "courseName": "The Practice of Management",
  "createdBy": "eliz11@umbc.edu",
  "createdOn": ISODate("2014-09-05T17:28:42.196Z"),
  "email": "sfrock@toad.net",
  "endTime": "7:00 PM",
  "enrolledCount": NumberInt(2),
  "exam": [
    {
      "dueDate": ISODate("2014-10-06T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Test #1 Ch. 1-6"
    },
    {
      "dueDate": ISODate("2014-11-03T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Test #2 Ch. 7-12"
    },
    {
      "dueDate": ISODate("2014-12-08T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Test #3 Ch. 13-19, Appdx."
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946a975ab33153700293"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon",
  "section": NumberInt(5),
  "startTime": "4:30 PM",
  "version": NumberLong(5),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:48:07.151Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("540a18a1975a843d5c768dcd"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-19T00:00:00.0Z"),
      "dueTime": "10:00 PM",
      "name": "Unit 1 Labs"
    },
    {
      "dueDate": ISODate("2014-10-15T00:00:00.0Z"),
      "dueTime": "10:00 PM",
      "name": "Unit 2 Labs"
    },
    {
      "dueDate": ISODate("2014-11-07T00:00:00.0Z"),
      "dueTime": "10:00 PM",
      "name": "Unit 3 Labs"
    },
    {
      "dueDate": ISODate("2014-12-05T00:00:00.0Z"),
      "dueTime": "10:00 PM",
      "name": "Unit 4 Labs"
    }
  ],
  "catalogId": "PSYC100",
  "classRoom": "ITE104",
  "courseCredit": NumberInt(3),
  "courseName": "Introduction to Psychology",
  "createdBy": "nzharic1@umbc.edu",
  "createdOn": ISODate("2014-09-05T20:10:09.16Z"),
  "email": "dknigh1@umbc.edu",
  "endTime": "9:45 AM",
  "enrolledCount": NumberInt(12),
  "exam": [
    {
      "dueDate": ISODate("2014-09-23T00:00:00.0Z"),
      "dueTime": "8:30 AM",
      "name": "Unit 1 Exam"
    },
    {
      "dueDate": ISODate("2014-10-16T00:00:00.0Z"),
      "dueTime": "8:30 AM",
      "name": "Unit 2 Exam"
    },
    {
      "dueDate": ISODate("2014-11-11T00:00:00.0Z"),
      "dueTime": "8:30 AM",
      "name": "Unit 3 Exam"
    },
    {
      "dueDate": ISODate("2014-12-09T00:00:00.0Z"),
      "dueTime": "8:30 AM",
      "name": "Unit 4 Exam"
    },
    {
      "dueDate": ISODate("2014-12-11T00:00:00.0Z"),
      "dueTime": "8:00 AM",
      "name": "Final Exam"
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9476975ab331537005fc"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "section": NumberInt(1),
  "startTime": "8:30 AM",
  "version": NumberLong(14),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:48:01.70Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("540a468a975a843d5c768ddc"),
  "catalogId": "ENGL100",
  "classRoom": "Performing Arts 314",
  "courseCredit": NumberInt(3),
  "courseName": "English Composition",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-09-05T23:26:02.658Z"),
  "email": "awalthers@umbc.edu",
  "endTime": "5:15 PM",
  "enrolledCount": NumberInt(2),
  "exam": [
    {
      "dueDate": ISODate("2014-12-15T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Take Home Exam"
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9472975ab33153700475"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "section": NumberInt(25),
  "startTime": "4:00 PM",
  "version": NumberLong(12),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:47:59.239Z"),
  "misc": [
    {
      "dueDate": ISODate("2014-09-09T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Reading Lab Journal 1"
    },
    {
      "dueDate": ISODate("2014-09-09T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Radio Lab Draft"
    },
    {
      "dueDate": ISODate("2014-09-16T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Reading Journal 2"
    },
    {
      "dueDate": ISODate("2014-09-16T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "RadioLab Final"
    },
    {
      "dueDate": ISODate("2014-09-30T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Reading Journal 4"
    },
    {
      "dueDate": ISODate("2014-09-30T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Library Adventure"
    },
    {
      "dueDate": ISODate("2014-09-23T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Reading Journal 3"
    },
    {
      "dueDate": ISODate("2014-09-23T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Research Proposal"
    },
    {
      "dueDate": ISODate("2014-09-25T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Research Proposal + notes on progress so far, plan for completion"
    },
    {
      "dueDate": ISODate("2014-10-02T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Annotated Bibliography"
    },
    {
      "dueDate": ISODate("2014-10-07T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Reading Journal 5"
    },
    {
      "dueDate": ISODate("2014-10-07T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Research History\/Context Subpaper Draft 1.0"
    },
    {
      "dueDate": ISODate("2014-10-09T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Research History\/Context Subpaper - Draft 1.5 + changelog"
    },
    {
      "dueDate": ISODate("2014-10-14T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Reading Journal 6"
    },
    {
      "dueDate": ISODate("2014-10-14T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Research History\/Context Subpaper - Final Draft + changelog"
    },
    {
      "dueDate": ISODate("2014-10-16T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Research Paper - Outline"
    },
    {
      "dueDate": ISODate("2014-10-21T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Reading Journal 7"
    },
    {
      "dueDate": ISODate("2014-10-21T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Research Paper - Draft 1.0"
    },
    {
      "dueDate": ISODate("2014-10-23T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Research Paper - Draft 1.5 + changelog"
    },
    {
      "dueDate": ISODate("2014-10-28T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Reading Journal 8"
    },
    {
      "dueDate": ISODate("2014-11-04T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Reading Journal 9"
    },
    {
      "dueDate": ISODate("2014-11-11T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Reading Journal 10 (optional)"
    },
    {
      "dueDate": ISODate("2014-12-04T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Write-O-Rama Final Project"
    },
    {
      "dueDate": ISODate("2014-12-06T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Write-O-Rama Proposal"
    },
    {
      "dueDate": ISODate("2014-11-25T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "WriteCeption Team Paper"
    },
    {
      "dueDate": ISODate("2014-11-04T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Research Paper - FINAL  + changelog"
    }
  ],
  "assignment": [
    {
      "dueDate": ISODate("2014-11-11T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "W-O-R Status Report 1"
    },
    {
      "dueDate": ISODate("2014-11-18T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "W-O-R Status Report 2"
    },
    {
      "dueDate": ISODate("2014-11-25T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "W-O-R Status Report 3"
    },
    {
      "dueDate": ISODate("2014-12-02T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "W-O-R Status Report 4"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("540a01e8975a843d5c768dc1"),
  "catalogId": "SPAN201",
  "classRoom": "ITE239",
  "courseCredit": NumberInt(3),
  "courseName": "Intermediate Spanish",
  "createdBy": "saif3@umbc.edu",
  "createdOn": ISODate("2014-09-05T18:33:12.207Z"),
  "email": "carm3@umbc.edu",
  "endTime": "6:45 PM",
  "enrolledCount": NumberInt(2),
  "exam": [
    {
      "dueDate": ISODate("2014-10-08T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "Examen 1 – cap. 1 & 2"
    },
    {
      "dueDate": ISODate("2014-10-27T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "Examen Oral 1"
    },
    {
      "dueDate": ISODate("2014-11-10T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "Exam 2 –ch. 3 & 4"
    },
    {
      "dueDate": ISODate("2014-12-11T00:00:00.0Z"),
      "dueTime": "3:30 PM",
      "name": "Examen Final"
    },
    {
      "dueDate": ISODate("2014-12-08T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "Examen Oral 2"
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9474975ab3315370056b"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed",
  "quiz": [
    {
      "dueDate": ISODate("2014-09-15T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "Quiz 1: Pronombres & gustar"
    },
    {
      "dueDate": ISODate("2014-09-29T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "Quiz 2 mandatos formales & informales"
    },
    {
      "dueDate": ISODate("2014-10-22T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "Quiz 3 vocabulario del capitulo"
    },
    {
      "dueDate": ISODate("2014-11-19T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "Quiz 5 vocabulario los viajes & vacaciones"
    }
  ],
  "section": NumberInt(8),
  "startTime": "5:30 PM",
  "version": NumberLong(11),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:48:03.162Z"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-14T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "MSL: SAM 01-01;- 04;-06;-07."
    },
    {
      "dueDate": ISODate("2014-09-07T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "MSL:  SAM PA-23;-28;-29;-32;-33-36;-38 and  watch selected grammar tutorial videos."
    },
    {
      "dueDate": ISODate("2014-09-14T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "MSL: SAM 01-12;- 08"
    },
    {
      "dueDate": ISODate("2014-09-21T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "MSL: SAM 01-25;- 26;-27"
    },
    {
      "dueDate": ISODate("2014-09-21T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "MSL: SAM 01-28;- 29;-35;-36. Watch selected grammar tutorial  videos."
    },
    {
      "dueDate": ISODate("2014-09-28T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "MSL:  SAM 02-03;-04;-05. Watch selected grammar tutorial  videos."
    },
    {
      "dueDate": ISODate("2014-09-28T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "MSL: SAM 02-07;-11;-12."
    },
    {
      "dueDate": ISODate("2014-10-05T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "MSL: Watch selected grammar tutorial  videos."
    },
    {
      "dueDate": ISODate("2014-10-05T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "MSL: SAM 02-22;-23;-24;-27"
    },
    {
      "dueDate": ISODate("2014-10-12T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "MSL:  SAM 02-28;- 32. Due Oct 12. Recommendation: practice test 1& 2"
    },
    {
      "dueDate": ISODate("2014-10-12T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "MSL: Watch selected grammar tutorial videos"
    },
    {
      "dueDate": ISODate("2014-10-19T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "MSL: SAM 03-01;-03;-05;-12. Watch selected grammar tutorial videos"
    },
    {
      "dueDate": ISODate("2014-10-19T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "MSL: SAM 03-08;-09;-10. Watch selected grammar tutorial videos."
    },
    {
      "dueDate": ISODate("2014-10-26T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "MSL:  SAM 03-17;-19;-21;-24"
    },
    {
      "dueDate": ISODate("2014-10-26T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "MSL:  SAM 03-26;- 25;-28. Watch selected grammar tutorial videos"
    },
    {
      "dueDate": ISODate("2014-11-02T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "MSL: Watch selected grammar tutorial videos."
    },
    {
      "dueDate": ISODate("2014-11-02T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "MSL:  SAM 04-1;-02;-04;-05."
    },
    {
      "dueDate": ISODate("2014-11-09T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "MSL: Watch selected grammar tutorial videos."
    },
    {
      "dueDate": ISODate("2014-11-09T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "MSL:  SAM 04-1;-02;-04;-05."
    },
    {
      "dueDate": ISODate("2014-11-16T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "MSL: Watch selected grammar tutorial videos."
    },
    {
      "dueDate": ISODate("2014-11-16T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "MSL:  SAM 04-1;-02;-04;-05."
    },
    {
      "dueDate": ISODate("2014-11-23T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "MSL:  SAM 05-10;-11;-13;-14. Watch selected grammar tutorial videos."
    },
    {
      "dueDate": ISODate("2014-11-23T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "MSL: SAM 05-22;- 23;-24. Watch selected grammar tutorial videos."
    },
    {
      "dueDate": ISODate("2014-11-30T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "MSL: SAM 05-27;-28. Watch selected grammar tutorial videos."
    },
    {
      "dueDate": ISODate("2014-12-03T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "MSL: SAM 05-30;-31"
    },
    {
      "dueDate": ISODate("2014-12-10T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "MSL: SAM 06-02;-10;-13;-14;-15;-19;-22;-26;-27;-28."
    }
  ],
  "misc": [
    {
      "dueDate": ISODate("2014-09-08T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "Chat 1, continue working  -Read doc. Wiki > Rationale & guidelines,  and instructions to Access"
    },
    {
      "dueDate": ISODate("2014-09-10T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "Chat 1, continue working -Wiki 1, créate your page and start -Study for quiz 1 -Read pg. 49, 50"
    },
    {
      "dueDate": ISODate("2014-09-15T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "Chat 1, meet online and print one script -Wiki 1, continue adding info"
    },
    {
      "dueDate": ISODate("2014-09-17T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "Chat 1, continue working -Wiki 1, créate your page and start -Study for quiz 1 -Read pg. 49, 50"
    },
    {
      "dueDate": ISODate("2014-09-22T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "Print doc. Chat 2- Nuestras actividades del fin de semana"
    },
    {
      "dueDate": ISODate("2014-09-24T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "-Study for quiz 2 -Chat 2, start working"
    },
    {
      "dueDate": ISODate("2014-09-29T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "Read Vocab. pgs 86, 91, 92 -Chat 2, continue working"
    },
    {
      "dueDate": ISODate("2014-10-01T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "Chat 2, continue working"
    },
    {
      "dueDate": ISODate("2014-10-06T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "-Study for exam 1 -Chat 2, meet online before next class and print one script"
    },
    {
      "dueDate": ISODate("2014-10-08T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "Read vocab. pgs.110, 111 -Read nota cultural pg. 117"
    },
    {
      "dueDate": ISODate("2014-10-13T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "Read, pg. 115, 116 -Wiki 2, print docum."
    },
    {
      "dueDate": ISODate("2014-10-15T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "Wiki 2, créate your page and start adding info. -Read Vocab. pgs 122, 123"
    },
    {
      "dueDate": ISODate("2014-10-20T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "Wiki 2, continue adding info. -Study for quiz 3 -Read pg. 130"
    },
    {
      "dueDate": ISODate("2014-10-23T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "Prepapre for oral 1 -Wiki 2, continue adding info. -Chat 3, start working"
    },
    {
      "dueDate": ISODate("2014-10-27T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "Wiki 2, complete PASO 3 & 4 -Read Vocab. pgs. 148, 149 -Chat 3, continue working"
    },
    {
      "dueDate": ISODate("2014-10-29T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "Read Vocab. pg. 159 -Chat 3, meet online and print one script"
    },
    {
      "dueDate": ISODate("2014-11-03T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "Study for exam 2 -Chat 4, print docum."
    },
    {
      "dueDate": ISODate("2014-11-05T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "-Study for exam 2 -Chat 4, print docum"
    },
    {
      "dueDate": ISODate("2014-11-10T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "-Chat 4, start working -Read vocab. pg. 188"
    },
    {
      "dueDate": ISODate("2014-11-12T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "Chat 4, continue working -Read pg. 196 -Read vocab. 199"
    },
    {
      "dueDate": ISODate("2014-11-17T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "Chat 4, set up day and time to meet online -Study for quiz 5"
    },
    {
      "dueDate": ISODate("2014-11-19T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "Chat 4, meet online and print one script -Read vocab. pg. 204"
    },
    {
      "dueDate": ISODate("2014-11-24T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "Read vocab. pg. 211"
    },
    {
      "dueDate": ISODate("2014-12-01T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "Revise your grades in BB. If you need to talk to your professor, send an email and make an appointment."
    },
    {
      "dueDate": ISODate("2014-12-03T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "prepare for the oral 2"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("540a672e975a843d5c768de6"),
  "catalogId": "LRC100",
  "classRoom": "Sondheim 107",
  "courseCredit": NumberInt(3),
  "courseName": "Introduction to College Reading",
  "createdBy": "mhughes2@umbc.edu",
  "createdOn": ISODate("2014-09-06T01:45:18.906Z"),
  "email": "fallin@umbc.edu",
  "endTime": "11:15 AM",
  "enrolledCount": NumberInt(1),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("5401e4fe3219e0bb07ceeb50"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "section": NumberInt(1),
  "startTime": "10:00 AM",
  "version": NumberLong(10),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:47:57.573Z"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-08T00:00:00.0Z"),
      "dueTime": "11:00 PM",
      "name": "Mind Tap"
    },
    {
      "dueDate": ISODate("2014-09-15T00:00:00.0Z"),
      "dueTime": "11:00 PM",
      "name": "Mind Tap"
    },
    {
      "dueDate": ISODate("2014-09-22T00:00:00.0Z"),
      "dueTime": "11:00 PM",
      "name": "Mind Tap"
    },
    {
      "dueDate": ISODate("2014-09-29T00:00:00.0Z"),
      "dueTime": "11:00 PM",
      "name": "Mind Tap"
    },
    {
      "dueDate": ISODate("2014-10-06T00:00:00.0Z"),
      "dueTime": "11:00 PM",
      "name": "Mind Tap"
    },
    {
      "dueDate": ISODate("2014-10-13T00:00:00.0Z"),
      "dueTime": "11:00 PM",
      "name": "Mind Tap"
    },
    {
      "dueDate": ISODate("2014-10-17T00:00:00.0Z"),
      "dueTime": "11:00 PM",
      "name": "Mind Tap"
    },
    {
      "dueDate": ISODate("2014-10-27T00:00:00.0Z"),
      "dueTime": "11:00 PM",
      "name": "Mind Tap"
    },
    {
      "dueDate": ISODate("2014-11-03T00:00:00.0Z"),
      "dueTime": "11:00 PM",
      "name": "Mind Tap"
    },
    {
      "dueDate": ISODate("2014-11-10T00:00:00.0Z"),
      "dueTime": "11:00 PM",
      "name": "Mind Tap"
    },
    {
      "dueDate": ISODate("2014-11-17T00:00:00.0Z"),
      "dueTime": "11:00 PM",
      "name": "Mind Tap"
    },
    {
      "dueDate": ISODate("2014-11-24T00:00:00.0Z"),
      "dueTime": "11:00 PM",
      "name": "Mind Tap"
    },
    {
      "dueDate": ISODate("2014-12-01T00:00:00.0Z"),
      "dueTime": "11:00 PM",
      "name": "Mind Tap"
    }
  ],
  "exam": [
    {
      "dueDate": ISODate("2014-10-14T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Midterm Exam"
    }
  ],
  "misc": [
    {
      "dueDate": ISODate("2014-09-09T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Journal #3"
    },
    {
      "dueDate": ISODate("2014-09-11T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Journal #4"
    },
    {
      "dueDate": ISODate("2014-09-18T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Journal #5"
    },
    {
      "dueDate": ISODate("2014-09-25T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Journal #6"
    },
    {
      "dueDate": ISODate("2014-10-02T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Journal #7"
    },
    {
      "dueDate": ISODate("2014-10-07T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Journal #8"
    },
    {
      "dueDate": ISODate("2014-10-09T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Journal #9"
    },
    {
      "dueDate": ISODate("2014-10-21T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Journal #10"
    },
    {
      "dueDate": ISODate("2014-10-23T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Journal #11"
    },
    {
      "dueDate": ISODate("2014-10-30T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Journal #12"
    },
    {
      "dueDate": ISODate("2014-11-06T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Journal #13"
    },
    {
      "dueDate": ISODate("2014-11-13T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Journal #14"
    },
    {
      "dueDate": ISODate("2014-11-18T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Journal #15"
    },
    {
      "dueDate": ISODate("2014-11-20T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Journal #16"
    },
    {
      "dueDate": ISODate("2014-11-25T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Journal #17"
    },
    {
      "dueDate": ISODate("2014-11-27T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Journal #18"
    },
    {
      "dueDate": ISODate("2014-12-02T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Journal #19"
    },
    {
      "dueDate": ISODate("2014-12-02T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Journal #20"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("540a6e2c975a843d5c768de7"),
  "catalogId": "MATH151",
  "classRoom": "Sherman 014",
  "courseCredit": NumberInt(3),
  "courseName": "Calculus I Discussion",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-09-06T02:15:08.324Z"),
  "email": "knanes@umbc.edu",
  "endTime": "3:50 PM",
  "enrolledCount": NumberInt(5),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9474975ab3315370053c"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed",
  "section": NumberLong(12),
  "startTime": "3:00 PM",
  "version": NumberLong(10),
  "quiz": [
    {
      "dueDate": ISODate("2014-09-10T00:00:00.0Z"),
      "dueTime": "3:00 PM",
      "name": "Quiz 1 on 2.1-2.3"
    },
    {
      "dueDate": ISODate("2014-09-17T00:00:00.0Z"),
      "dueTime": "3:00 PM",
      "name": "Quiz 2 on 2.4-2.6"
    },
    {
      "dueDate": ISODate("2014-09-24T00:00:00.0Z"),
      "dueTime": "3:00 PM",
      "name": "Quiz 3 on 2.7-3.1"
    },
    {
      "dueDate": ISODate("2014-10-08T00:00:00.0Z"),
      "dueTime": "3:00 PM",
      "name": "Quiz 4 on 3.4-3.5"
    },
    {
      "dueDate": ISODate("2014-10-15T00:00:00.0Z"),
      "dueTime": "3:00 PM",
      "name": "Quiz 5 on 3.6-3.9"
    },
    {
      "dueDate": ISODate("2014-10-22T00:00:00.0Z"),
      "dueTime": "3:00 PM",
      "name": "Quiz 6 on 3.10-4.1"
    },
    {
      "dueDate": ISODate("2014-11-05T00:00:00.0Z"),
      "dueTime": "3:00 PM",
      "name": "Quiz 7 on 4.4"
    },
    {
      "dueDate": ISODate("2014-11-12T00:00:00.0Z"),
      "dueTime": "3:00 PM",
      "name": "Quiz 8 on 4.5-4.7"
    },
    {
      "dueDate": ISODate("2014-11-19T00:00:00.0Z"),
      "dueTime": "3:00 PM",
      "name": "Quiz 9 on 4.8-5.1"
    },
    {
      "dueDate": ISODate("2014-11-26T00:00:00.0Z"),
      "dueTime": "3:00 PM",
      "name": "Quiz 10 on 5.2-5.3"
    }
  ],
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:47:50.550Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("540a6e963219e08a16ea6883"),
  "catalogId": "MATH151",
  "classRoom": "Sherman 013",
  "courseCredit": NumberLong(3),
  "courseName": "Calculus I Discussion",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-09-06T02:15:08.324Z"),
  "email": "knanes@umbc.edu",
  "endTime": "3:50 PM",
  "enrolledCount": NumberInt(6),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9474975ab3315370053c"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed",
  "section": NumberLong(13),
  "startTime": "3:00 PM",
  "version": NumberLong(10),
  "quiz": [
    {
      "dueDate": ISODate("2014-09-10T00:00:00.0Z"),
      "dueTime": "3:00 PM",
      "name": "Quiz 1 on 2.1-2.3"
    },
    {
      "dueDate": ISODate("2014-09-17T00:00:00.0Z"),
      "dueTime": "3:00 PM",
      "name": "Quiz 2 on 2.4-2.6"
    },
    {
      "dueDate": ISODate("2014-09-24T00:00:00.0Z"),
      "dueTime": "3:00 PM",
      "name": "Quiz 3 on 2.7-3.1"
    },
    {
      "dueDate": ISODate("2014-10-08T00:00:00.0Z"),
      "dueTime": "3:00 PM",
      "name": "Quiz 4 on 3.4-3.5"
    },
    {
      "dueDate": ISODate("2014-10-15T00:00:00.0Z"),
      "dueTime": "3:00 PM",
      "name": "Quiz 5 on 3.6-3.9"
    },
    {
      "dueDate": ISODate("2014-10-22T00:00:00.0Z"),
      "dueTime": "3:00 PM",
      "name": "Quiz 6 on 3.10-4.1"
    },
    {
      "dueDate": ISODate("2014-11-05T00:00:00.0Z"),
      "dueTime": "3:00 PM",
      "name": "Quiz 7 on 4.4"
    },
    {
      "dueDate": ISODate("2014-11-12T00:00:00.0Z"),
      "dueTime": "3:00 PM",
      "name": "Quiz 8 on 4.5-4.7"
    },
    {
      "dueDate": ISODate("2014-11-19T00:00:00.0Z"),
      "dueTime": "3:00 PM",
      "name": "Quiz 9 on 4.8-5.1"
    },
    {
      "dueDate": ISODate("2014-11-26T00:00:00.0Z"),
      "dueTime": "3:00 PM",
      "name": "Quiz 10 on 5.2-5.3"
    }
  ],
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:47:52.180Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("540a6fcb3219e02522ea6883"),
  "catalogId": "MATH151",
  "classRoom": "Physics 101",
  "courseCredit": NumberLong(3),
  "courseName": "Calculus I Discussion",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-09-06T02:15:08.324Z"),
  "email": "knanes@umbc.edu",
  "endTime": "4:50 PM",
  "enrolledCount": NumberInt(2),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9474975ab3315370053c"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed",
  "section": NumberLong(14),
  "startTime": "4:00 PM",
  "version": NumberLong(4),
  "quiz": [
    {
      "dueDate": ISODate("2014-09-10T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Quiz 1 on 2.1-2.3"
    },
    {
      "dueDate": ISODate("2014-09-17T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Quiz 2 on 2.4-2.6"
    },
    {
      "dueDate": ISODate("2014-09-24T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Quiz 3 on 2.7-3.1"
    },
    {
      "dueDate": ISODate("2014-10-08T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Quiz 4 on 3.4-3.5"
    },
    {
      "dueDate": ISODate("2014-10-15T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Quiz 5 on 3.6-3.9"
    },
    {
      "dueDate": ISODate("2014-10-22T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Quiz 6 on 3.10-4.1"
    },
    {
      "dueDate": ISODate("2014-11-05T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Quiz 7 on 4.4"
    },
    {
      "dueDate": ISODate("2014-11-12T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Quiz 8 on 4.5-4.7"
    },
    {
      "dueDate": ISODate("2014-11-19T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Quiz 9 on 4.8-5.1"
    },
    {
      "dueDate": ISODate("2014-11-26T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Quiz 10 on 5.2-5.3"
    }
  ],
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:47:53.862Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("540a6fda3219e08a16ea6884"),
  "catalogId": "MATH151",
  "classRoom": "Physics 201",
  "courseCredit": NumberLong(3),
  "courseName": "Calculus I Discussion",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-09-06T02:15:08.324Z"),
  "email": "knanes@umbc.edu",
  "endTime": "4:50 PM",
  "enrolledCount": NumberInt(4),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9474975ab3315370053c"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed",
  "section": NumberLong(15),
  "startTime": "4:00 PM",
  "version": NumberLong(6),
  "quiz": [
    {
      "dueDate": ISODate("2014-09-10T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Quiz 1 on 2.1-2.3"
    },
    {
      "dueDate": ISODate("2014-09-17T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Quiz 2 on 2.4-2.6"
    },
    {
      "dueDate": ISODate("2014-09-24T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Quiz 3 on 2.7-3.1"
    },
    {
      "dueDate": ISODate("2014-10-08T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Quiz 4 on 3.4-3.5"
    },
    {
      "dueDate": ISODate("2014-10-15T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Quiz 5 on 3.6-3.9"
    },
    {
      "dueDate": ISODate("2014-10-22T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Quiz 6 on 3.10-4.1"
    },
    {
      "dueDate": ISODate("2014-11-05T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Quiz 7 on 4.4"
    },
    {
      "dueDate": ISODate("2014-11-12T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Quiz 8 on 4.5-4.7"
    },
    {
      "dueDate": ISODate("2014-11-19T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Quiz 9 on 4.8-5.1"
    },
    {
      "dueDate": ISODate("2014-11-26T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Quiz 10 on 5.2-5.3"
    }
  ],
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:47:55.809Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("540a81a4975a843d5c768dec"),
  "catalogId": "CMSC",
  "classRoom": "Engineering 231",
  "courseCredit": NumberInt(3),
  "courseName": "Comp Thinking and Design",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-09-06T03:38:12.200Z"),
  "email": "cseaman@umbc.edu",
  "endTime": "2:15 PM",
  "enrolledCount": NumberInt(1),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9473975ab331537004f3"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "section": NumberInt(4),
  "startTime": "1:00 PM",
  "version": NumberLong(15),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:47:47.137Z"),
  "misc": [
    {
      "dueDate": ISODate("2014-10-21T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Project Phase 1: Design"
    },
    {
      "dueDate": ISODate("2014-11-06T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Project Phase 2: Prototype"
    },
    {
      "dueDate": ISODate("2014-11-13T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Project Phase 3: Evaluation"
    },
    {
      "dueDate": ISODate("2014-11-20T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Project Phase 4: Poster"
    },
    {
      "dueDate": ISODate("2014-12-09T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Project Phase 5: Presentation"
    }
  ],
  "exam": [
    {
      "dueDate": ISODate("2014-12-16T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Final Exam"
    }
  ],
  "assignment": [
    {
      "dueDate": ISODate("2014-09-04T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "PA1"
    },
    {
      "dueDate": ISODate("2014-09-25T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "PA2"
    },
    {
      "dueDate": ISODate("2014-10-09T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "PA3"
    },
    {
      "dueDate": ISODate("2014-09-25T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "JE2-Strengths Quest Reflection"
    },
    {
      "dueDate": ISODate("2014-09-25T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Resume and Cover Letter Drafts"
    },
    {
      "dueDate": ISODate("2014-10-09T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "JE3-Working with Others"
    },
    {
      "dueDate": ISODate("2014-09-25T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Final Resume & Cover Letter Due"
    },
    {
      "dueDate": ISODate("2014-10-09T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "JE4-Academic Questionnaire & Study Habits"
    },
    {
      "dueDate": ISODate("2014-09-25T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "JE5 - Career Fair"
    },
    {
      "dueDate": ISODate("2014-10-09T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "JE6: Study Habits and Final Grades"
    },
    {
      "dueDate": ISODate("2014-09-25T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "JE7: Semester Self Reflection and Career Options; End of Semester Survey"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("540a899d3219e08a16ea6886"),
  "catalogId": "CMSC",
  "classRoom": "Engineering 231",
  "courseCredit": NumberLong(3),
  "courseName": "Comp Thinking and Design Discussion",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-09-06T03:38:12.200Z"),
  "email": "cseaman@umbc.edu",
  "endTime": "1:50 PM",
  "enrolledCount": NumberInt(2),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9473975ab331537004f3"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Fri",
  "section": NumberLong(2),
  "startTime": "1:00 PM",
  "version": NumberLong(12),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:47:48.680Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("540b2718975a61da5f1c2bd6"),
  "catalogId": "MATH151",
  "classRoom": "Admin 101",
  "courseCredit": NumberInt(3),
  "courseName": "Calculus I",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-09-06T15:24:08.573Z"),
  "email": "jongraf1@umbc.edu",
  "endTime": "6:45 PM",
  "enrolledCount": NumberInt(16),
  "exam": [
    {
      "dueDate": ISODate("2014-09-25T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "EXAM I on 2.1-3.3"
    },
    {
      "dueDate": ISODate("2014-10-23T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "EXAM II on 3.4 -4.3"
    },
    {
      "dueDate": ISODate("2014-12-02T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "EXAM III on 4.4 -5.4"
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("540f59c73219e05717a849b2"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "section": NumberInt(16),
  "startTime": "5:30 PM",
  "version": NumberLong(20),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:47:45.476Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("540b5d64975a851354fb213a"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-09T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Reading: Conley Chapter 1 Mills, C.W., “The Promise”- available on Blackboard (Bb)"
    },
    {
      "dueDate": ISODate("2014-09-16T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Reading: Conley Chapter 2"
    },
    {
      "dueDate": ISODate("2014-09-23T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Reading: Conley Chapter 3"
    },
    {
      "dueDate": ISODate("2014-10-07T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Reading: Conley Chapter 4"
    },
    {
      "dueDate": ISODate("2014-10-14T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Reading: Conley Chapter 5"
    },
    {
      "dueDate": ISODate("2014-10-21T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Reading: Conley Chapter 6"
    },
    {
      "dueDate": ISODate("2014-11-04T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Reading: Conley Chapter 7"
    },
    {
      "dueDate": ISODate("2014-11-11T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Reading: Conley Chapter 8"
    },
    {
      "dueDate": ISODate("2014-11-20T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Reading: Conley Chapter 9"
    }
  ],
  "catalogId": "SOCY101",
  "classRoom": "Engineering 027",
  "courseCredit": NumberInt(3),
  "courseName": "Basic Concepts in Sociology",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-09-06T19:15:48.985Z"),
  "email": "mcozar1@umbc.edu",
  "endTime": "3:45 PM",
  "enrolledCount": NumberInt(8),
  "exam": [
    {
      "dueDate": ISODate("2014-12-09T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Exam 3"
    },
    {
      "dueDate": ISODate("2014-10-30T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Exam 2"
    },
    {
      "dueDate": ISODate("2014-10-02T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Exam 1"
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9477975ab3315370062e"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "section": NumberInt(2),
  "startTime": "2:30 PM",
  "version": NumberLong(15),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:47:43.970Z"),
  "misc": [
    {
      "dueDate": ISODate("2014-09-09T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "BlackBoard"
    },
    {
      "dueDate": ISODate("2014-09-16T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "BlackBoard"
    },
    {
      "dueDate": ISODate("2014-09-23T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "BlackBoard"
    },
    {
      "dueDate": ISODate("2014-10-07T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "BlackBoard"
    },
    {
      "dueDate": ISODate("2014-10-14T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "BlackBoard"
    },
    {
      "dueDate": ISODate("2014-10-21T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "BlackBoard"
    },
    {
      "dueDate": ISODate("2014-11-04T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "BlackBoard"
    },
    {
      "dueDate": ISODate("2014-11-11T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "BlackBoard"
    },
    {
      "dueDate": ISODate("2014-11-18T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "BlackBoard"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("540b67273219e0a92eea6883"),
  "catalogId": "MATH155",
  "classRoom": "Math Pysc 106",
  "courseCredit": NumberLong(3),
  "courseName": "Applied Calculus Discussion",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-09-06T19:48:13.696Z"),
  "email": "raji@umbc.edu",
  "endTime": "2:50 PM",
  "enrolledCount": NumberInt(1),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9473975ab33153700524"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Wed",
  "section": NumberLong(7),
  "startTime": "2:00 PM",
  "version": NumberLong(9),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:47:37.591Z"),
  "quiz": [
    {
      "dueDate": ISODate("2014-09-10T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "Quiz 1 - 1.2, 1.3"
    },
    {
      "dueDate": ISODate("2014-09-17T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "Quiz 2 - 1.5, 1.6, 2.1"
    },
    {
      "dueDate": ISODate("2014-10-01T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "Quiz 3 - 2.2 - 2.5"
    },
    {
      "dueDate": ISODate("2014-10-22T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "Quiz 4 - Sec 3.3 - 3.5"
    },
    {
      "dueDate": ISODate("2014-10-29T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "Quiz 5 - Sec 4.1 - 4.2"
    },
    {
      "dueDate": ISODate("2014-11-05T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "Quiz 6 - Sec 4.3"
    },
    {
      "dueDate": ISODate("2014-11-12T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "Quiz 7 - 4.4"
    },
    {
      "dueDate": ISODate("2014-12-03T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "Quiz 8 - Sec 5.1 , 5.2"
    }
  ],
  "misc": [
    {
      "dueDate": ISODate("2014-10-01T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "Lab 1"
    },
    {
      "dueDate": ISODate("2014-12-03T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "Lab 2"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("540b67373219e08a16ea6888"),
  "catalogId": "MATH155",
  "classRoom": "Math Pysc 104",
  "courseCredit": NumberLong(3),
  "courseName": "Applied Calculus Discussion",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-09-06T19:48:13.696Z"),
  "email": "raji@umbc.edu",
  "endTime": "2:50 PM",
  "enrolledCount": NumberInt(2),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9473975ab33153700524"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Wed",
  "section": NumberLong(7),
  "startTime": "2:00 PM",
  "version": NumberLong(5),
  "quiz": [
    {
      "dueDate": ISODate("2014-09-10T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "Quiz 1 - 1.2, 1.3"
    },
    {
      "dueDate": ISODate("2014-09-17T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "Quiz 2 - 1.5, 1.6, 2.1"
    },
    {
      "dueDate": ISODate("2014-10-01T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "Quiz 3 - 2.2 - 2.5"
    },
    {
      "dueDate": ISODate("2014-10-22T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "Quiz 4 - Sec 3.3 - 3.5"
    },
    {
      "dueDate": ISODate("2014-10-29T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "Quiz 5 - Sec 4.1 - 4.2"
    },
    {
      "dueDate": ISODate("2014-11-05T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "Quiz 6 - Sec 4.3"
    },
    {
      "dueDate": ISODate("2014-11-12T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "Quiz 7 - 4.4"
    },
    {
      "dueDate": ISODate("2014-12-03T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "Quiz 8 - Sec 5.1 , 5.2"
    }
  ],
  "misc": [
    {
      "dueDate": ISODate("2014-10-01T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "Lab 1"
    },
    {
      "dueDate": ISODate("2014-12-03T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "Lab 2"
    }
  ],
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:47:39.477Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("540b7657975a851354fb2140"),
  "catalogId": "ENGL100",
  "classRoom": "Performing Arts 318",
  "courseCredit": NumberInt(3),
  "courseName": "First-Year Composition",
  "createdBy": "davey1@umbc.edu",
  "createdOn": ISODate("2014-09-06T21:02:15.614Z"),
  "email": "cvarlack@umbc.edu",
  "endTime": "9:45 AM",
  "enrolledCount": NumberInt(8),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("540b9c7f3219e08a16ea6889"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "misc": [
    {
      "dueDate": ISODate("2014-12-09T00:00:00.0Z"),
      "dueTime": "8:30 AM",
      "name": "Annotated Bibliography"
    },
    {
      "dueDate": ISODate("2014-12-09T00:00:00.0Z"),
      "dueTime": "8:30 AM",
      "name": "Essay #3: Research Paper"
    },
    {
      "dueDate": ISODate("2014-11-25T00:00:00.0Z"),
      "dueTime": "8:30 AM",
      "name": "Proposal Abstract"
    },
    {
      "dueDate": ISODate("2014-11-11T00:00:00.0Z"),
      "dueTime": "8:30 AM",
      "name": "Revised Research Question"
    },
    {
      "dueDate": ISODate("2014-11-11T00:00:00.0Z"),
      "dueTime": "8:30 AM",
      "name": "Revised Thesis Statement"
    },
    {
      "dueDate": ISODate("2014-10-30T00:00:00.0Z"),
      "dueTime": "8:30 AM",
      "name": "Essay #2: Argumentative Essay"
    },
    {
      "dueDate": ISODate("2014-10-09T00:00:00.0Z"),
      "dueTime": "8:30 AM",
      "name": "Essay #1: Critical Response Essay"
    },
    {
      "dueDate": ISODate("2014-09-11T00:00:00.0Z"),
      "dueTime": "8:30 AM",
      "name": "Library Literacy"
    }
  ],
  "section": NumberInt(5),
  "startTime": "8:30 AM",
  "version": NumberLong(19),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:47:33.968Z"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-09T00:00:00.0Z"),
      "dueTime": "8:30 AM",
      "name": "read chapter one of Enrique’s Journey, pgs. 3-44 - complete the writing journal assignment (see Blackboard)"
    },
    {
      "dueDate": ISODate("2014-09-11T00:00:00.0Z"),
      "dueTime": "8:30 AM",
      "name": "read chapter two of Enrique’s Journey, pgs. 45-60 - read an excerpt from chapter three of Enrique’s Journey,    pgs. 61-88 - complete the Library Literacy Assignment"
    },
    {
      "dueDate": ISODate("2014-09-16T00:00:00.0Z"),
      "dueTime": "8:30 AM",
      "name": "read an excerpt from chapter four of Enrique’s Journey,    pgs. 126-135 - read an excerpt from chapter five of Enrique’s Journey,   pgs. 137-161 - complete the writing journal assignment (see Blackboard)"
    },
    {
      "dueDate": ISODate("2014-09-18T00:00:00.0Z"),
      "dueTime": "8:30 AM",
      "name": "read the Afterword of Enrique’s Journey, pgs. 273-295"
    },
    {
      "dueDate": ISODate("2014-09-23T00:00:00.0Z"),
      "dueTime": "8:30 AM",
      "name": "complete the writing journal assignment (see Blackboard) - compose the thesis statement for Essay #1"
    },
    {
      "dueDate": ISODate("2014-09-25T00:00:00.0Z"),
      "dueTime": "8:30 AM",
      "name": "revise your thesis statement based upon group feedback"
    },
    {
      "dueDate": ISODate("2014-09-30T00:00:00.0Z"),
      "dueTime": "8:30 AM",
      "name": "read “How to Tame a Wild Tongue” (see Blackboard) - read Writing About Writing, pgs. 27-31 - complete the writing journal assignment (see Blackboard)"
    },
    {
      "dueDate": ISODate("2014-10-02T00:00:00.0Z"),
      "dueTime": "8:30 AM",
      "name": "read “Memoir of a Bilingual Childhood” (see Blackboard) - read Writing About Writing, pgs. 12-15"
    },
    {
      "dueDate": ISODate("2014-10-07T00:00:00.0Z"),
      "dueTime": "8:30 AM",
      "name": "read “The Myth of the Latin Woman . . .” (see Blackboard) - complete the writing journal assignment (see Blackboard)"
    },
    {
      "dueDate": ISODate("2014-10-09T00:00:00.0Z"),
      "dueTime": "8:30 AM",
      "name": "read “Evaluating Sources” in the Little Seagull Handbook,   pgs. 92-95 - read “Integrating Sources . . .” in the Little Seagull   Handbook, pgs. 97-108 - upload Essay #1 to SafeAssign\/print one hard copy"
    },
    {
      "dueDate": ISODate("2014-10-14T00:00:00.0Z"),
      "dueTime": "8:30 AM",
      "name": "compose the thesis statement for Essay #2"
    },
    {
      "dueDate": ISODate("2014-10-16T00:00:00.0Z"),
      "dueTime": "8:30 AM",
      "name": "revise your thesis statement based upon group feedback"
    },
    {
      "dueDate": ISODate("2014-10-21T00:00:00.0Z"),
      "dueTime": "8:30 AM",
      "name": "read “Humiliating Jim Crow Experience” (see Blackboard) - read “Doing Research” in the Little Seagull Handbook,   pgs. 80-92"
    },
    {
      "dueDate": ISODate("2014-10-23T00:00:00.0Z"),
      "dueTime": "8:30 AM",
      "name": "read “The Ethics of Living Jim Crow” (see Blackboard)"
    },
    {
      "dueDate": ISODate("2014-10-28T00:00:00.0Z"),
      "dueTime": "8:30 AM",
      "name": "read Writing About Writing, pgs. 47-64 - complete the writing journal assignment (see Blackboard)"
    },
    {
      "dueDate": ISODate("2014-10-30T00:00:00.0Z"),
      "dueTime": "8:30 AM",
      "name": "upload Essay #2 to SafeAssign\/print one hard copy"
    },
    {
      "dueDate": ISODate("2014-11-04T00:00:00.0Z"),
      "dueTime": "8:30 AM",
      "name": "compose the research question for Essay #3"
    },
    {
      "dueDate": ISODate("2014-11-06T00:00:00.0Z"),
      "dueTime": "8:30 AM",
      "name": "compose the thesis statement for Essay #3"
    },
    {
      "dueDate": ISODate("2014-11-11T00:00:00.0Z"),
      "dueTime": "8:30 AM",
      "name": "read “Stranger in the Village” (see Blackboard) - skim “MLA Style” in the Little Seagull Handbook, pgs.     109-148"
    },
    {
      "dueDate": ISODate("2014-11-13T00:00:00.0Z"),
      "dueTime": "8:30 AM",
      "name": "read “Just Walk on By . . .” (see Blackboard)"
    },
    {
      "dueDate": ISODate("2014-11-18T00:00:00.0Z"),
      "dueTime": "8:30 AM",
      "name": "read “How it Feels to Be Colored Me” (see Blackboard) - read “Abstracts” in the Little Seagull Handbook, pgs. 71-74 - complete the writing journal assignment (see Blackboard)"
    },
    {
      "dueDate": ISODate("2014-11-20T00:00:00.0Z"),
      "dueTime": "8:30 AM",
      "name": "read “The Search for Our Mothers’ Gardens” (see    Blackboard)"
    },
    {
      "dueDate": ISODate("2014-11-25T00:00:00.0Z"),
      "dueTime": "8:30 AM",
      "name": "complete the writing journal assignment (see Blackboard) - upload the Proposal Abstract to SafeAssign\/print one hard   copy"
    },
    {
      "dueDate": ISODate("2014-12-02T00:00:00.0Z"),
      "dueTime": "8:30 AM",
      "name": "compose the conclusion for Essay #3"
    },
    {
      "dueDate": ISODate("2014-12-04T00:00:00.0Z"),
      "dueTime": "8:30 AM",
      "name": "revise the conclusion based upon group feedback"
    },
    {
      "dueDate": ISODate("2014-12-09T00:00:00.0Z"),
      "dueTime": "8:30 AM",
      "name": "upload Essay #3 to SafeAssign\/print one hard copy"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("540ba433975a851354fb2146"),
  "catalogId": "PSYC210",
  "classRoom": "PUB105",
  "courseCredit": NumberInt(3),
  "courseName": "Psychology of Learning",
  "createdBy": "jgoomer1@umbc.edu",
  "createdOn": ISODate("2014-09-07T00:17:55.812Z"),
  "email": "aemendres@umbc.edu",
  "endTime": "8:00 PM",
  "enrolledCount": NumberInt(4),
  "exam": [
    {
      "dueDate": ISODate("2014-09-23T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "Exam 1: Reinforcement"
    },
    {
      "dueDate": ISODate("2014-10-21T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "Exam 2: Basic Reinforcement Schedules (When to  go fast and when to go slow)"
    },
    {
      "dueDate": ISODate("2014-11-11T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "Exam 3: ABA and Early Intervention for Children  with Autism (Guest Lecturer)"
    },
    {
      "dueDate": ISODate("2014-12-09T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "Exam 4"
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946a975ab33153700293"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue",
  "misc": [
    {
      "dueDate": ISODate("2014-09-09T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "Register Clicker"
    },
    {
      "dueDate": ISODate("2014-10-28T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "Bonus Point #1"
    },
    {
      "dueDate": ISODate("2014-11-25T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "Bonus Point #2"
    }
  ],
  "quiz": [
    {
      "dueDate": ISODate("2014-09-09T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "Quiz 1 (Ch. 1-2)"
    },
    {
      "dueDate": ISODate("2014-09-09T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "Quiz 2 (Ch. 3)"
    },
    {
      "dueDate": ISODate("2014-09-16T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "Quiz 3 (Ch. 4)"
    },
    {
      "dueDate": ISODate("2014-09-30T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "Quiz 4 (Ch. 5-6)"
    },
    {
      "dueDate": ISODate("2014-09-30T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "Quiz 5 (Ch. 7-8)"
    },
    {
      "dueDate": ISODate("2014-10-07T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "Quiz 6 (Ch. 9-10)"
    },
    {
      "dueDate": ISODate("2014-10-21T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "Quiz 7 (Ch. 12-13)"
    },
    {
      "dueDate": ISODate("2014-10-28T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "Quiz 8 (Ch. 14, 15, 16)"
    },
    {
      "dueDate": ISODate("2014-11-04T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "Quiz 9 (Ch. 20, 21, 22)"
    },
    {
      "dueDate": ISODate("2014-11-18T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "Quiz 10 (Lovaas article and  Green chapter)"
    },
    {
      "dueDate": ISODate("2014-11-25T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "Quiz 11 (Wilder et al.  article)"
    },
    {
      "dueDate": ISODate("2014-11-25T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "Quiz 12 (Ch. 17-18)"
    },
    {
      "dueDate": ISODate("2014-12-02T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "Quiz 13 (Epstein et al. and Demore et al.  articles)"
    }
  ],
  "section": NumberInt(1),
  "startTime": "5:30 PM",
  "version": NumberLong(11),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:47:32.107Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("540bb1f9975a851354fb214c"),
  "catalogId": "ENGL100Y",
  "classRoom": "Performing Arts 318",
  "courseCredit": NumberInt(3),
  "courseName": "English Composition-Y",
  "createdBy": "jgoomer1@umbc.edu",
  "createdOn": ISODate("2014-09-07T01:16:41.884Z"),
  "email": "mabe@umbc.edu",
  "endTime": "3:45 PM",
  "enrolledCount": NumberInt(1),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9471975ab33153700463"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "section": NumberInt(1),
  "startTime": "2:30 PM",
  "version": NumberLong(8),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:47:25.548Z"),
  "misc": [
    {
      "dueDate": ISODate("2014-11-25T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Final Draft Essay 5"
    },
    {
      "dueDate": ISODate("2014-11-18T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Final Draft Essay 4"
    },
    {
      "dueDate": ISODate("2014-11-04T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Final Draft Essay 3"
    },
    {
      "dueDate": ISODate("2014-10-21T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Final Draft Essay 2 AND LETTER"
    },
    {
      "dueDate": ISODate("2014-09-30T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Final Draft Essay 1"
    }
  ],
  "assignment": [
    {
      "dueDate": ISODate("2014-11-11T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Rough Draft Collab Review"
    }
  ],
  "exam": [
    {
      "dueDate": ISODate("2014-12-02T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "AW's Take-Home Essay Exam"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("540b64fd975a851354fb213c"),
  "catalogId": "MATH155",
  "classRoom": "Admin 101",
  "courseCredit": NumberInt(3),
  "courseName": "Applied Calculus",
  "createdBy": "sophias1@umbc.edu",
  "createdOn": ISODate("2014-09-06T19:48:13.696Z"),
  "email": "raji@umbc.edu",
  "endTime": "11:50 AM",
  "enrolledCount": NumberInt(6),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9473975ab33153700524"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Wed,Fri",
  "section": NumberInt(5),
  "startTime": "11:00 AM",
  "version": NumberLong(14),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:47:41.766Z"),
  "exam": [
    {
      "dueDate": ISODate("2014-10-10T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Exam 1 Sec 1.1 - 3.2"
    },
    {
      "dueDate": ISODate("2014-11-21T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Exam 2- Sec 3.3 - 4.4"
    }
  ],
  "assignment": [
    {
      "dueDate": ISODate("2014-09-05T00:00:00.0Z"),
      "dueTime": "10:30 AM",
      "name": "Connect HW"
    },
    {
      "dueDate": ISODate("2014-09-07T00:00:00.0Z"),
      "dueTime": "10:30 AM",
      "name": "Connect HW"
    },
    {
      "dueDate": ISODate("2014-09-14T00:00:00.0Z"),
      "dueTime": "10:30 AM",
      "name": "Connect HW"
    },
    {
      "dueDate": ISODate("2014-09-19T00:00:00.0Z"),
      "dueTime": "10:30 AM",
      "name": "Connect HW"
    },
    {
      "dueDate": ISODate("2014-09-21T00:00:00.0Z"),
      "dueTime": "10:30 AM",
      "name": "Connect HW"
    },
    {
      "dueDate": ISODate("2014-09-26T00:00:00.0Z"),
      "dueTime": "10:30 AM",
      "name": "Connect HW"
    },
    {
      "dueDate": ISODate("2014-09-28T00:00:00.0Z"),
      "dueTime": "10:30 AM",
      "name": "Connect HW"
    },
    {
      "dueDate": ISODate("2014-10-03T00:00:00.0Z"),
      "dueTime": "10:30 AM",
      "name": "Connect HW"
    },
    {
      "dueDate": ISODate("2014-10-05T00:00:00.0Z"),
      "dueTime": "10:30 AM",
      "name": "Connect HW"
    },
    {
      "dueDate": ISODate("2014-10-10T00:00:00.0Z"),
      "dueTime": "10:30 AM",
      "name": "Connect HW"
    },
    {
      "dueDate": ISODate("2014-10-12T00:00:00.0Z"),
      "dueTime": "10:30 AM",
      "name": "Connect HW"
    },
    {
      "dueDate": ISODate("2014-10-17T00:00:00.0Z"),
      "dueTime": "10:30 AM",
      "name": "Connect HW"
    },
    {
      "dueDate": ISODate("2014-10-19T00:00:00.0Z"),
      "dueTime": "10:30 AM",
      "name": "Connect HW"
    },
    {
      "dueDate": ISODate("2014-10-24T00:00:00.0Z"),
      "dueTime": "10:30 AM",
      "name": "Connect HW"
    },
    {
      "dueDate": ISODate("2014-10-26T00:00:00.0Z"),
      "dueTime": "10:30 AM",
      "name": "Connect HW"
    },
    {
      "dueDate": ISODate("2014-10-31T00:00:00.0Z"),
      "dueTime": "10:30 AM",
      "name": "Connect HW"
    },
    {
      "dueDate": ISODate("2014-11-02T00:00:00.0Z"),
      "dueTime": "10:30 AM",
      "name": "Connect HW"
    },
    {
      "dueDate": ISODate("2014-11-07T00:00:00.0Z"),
      "dueTime": "10:30 AM",
      "name": "Connect HW"
    },
    {
      "dueDate": ISODate("2014-11-09T00:00:00.0Z"),
      "dueTime": "10:30 AM",
      "name": "Connect HW"
    },
    {
      "dueDate": ISODate("2014-11-14T00:00:00.0Z"),
      "dueTime": "10:30 AM",
      "name": "Connect HW"
    },
    {
      "dueDate": ISODate("2014-11-16T00:00:00.0Z"),
      "dueTime": "10:30 AM",
      "name": "Connect HW"
    },
    {
      "dueDate": ISODate("2014-11-21T00:00:00.0Z"),
      "dueTime": "10:30 AM",
      "name": "Connect HW"
    },
    {
      "dueDate": ISODate("2014-11-23T00:00:00.0Z"),
      "dueTime": "10:30 AM",
      "name": "Connect HW"
    },
    {
      "dueDate": ISODate("2014-11-28T00:00:00.0Z"),
      "dueTime": "10:30 AM",
      "name": "Connect HW"
    },
    {
      "dueDate": ISODate("2014-11-30T00:00:00.0Z"),
      "dueTime": "10:30 AM",
      "name": "Connect HW"
    },
    {
      "dueDate": ISODate("2014-12-05T00:00:00.0Z"),
      "dueTime": "10:30 AM",
      "name": "Connect HW"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("540dc6b2975a56036b8280dc"),
  "catalogId": "FREN103",
  "classRoom": "Sherman 011",
  "courseCredit": NumberInt(3),
  "courseName": "Intensive Review of Elementary French",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-09-08T15:09:38.755Z"),
  "email": "samir1@umbc.edu",
  "endTime": "10:50 AM",
  "enrolledCount": NumberInt(3),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9474975ab3315370056e"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed,Fri",
  "section": NumberInt(1),
  "startTime": "10:00 AM",
  "version": NumberLong(19),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:47:20.556Z"),
  "quiz": [
    {
      "dueDate": ISODate("2014-09-10T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Quiz 1 on chap préliminaire et ch 1."
    },
    {
      "dueDate": ISODate("2014-09-19T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Quiz 2"
    },
    {
      "dueDate": ISODate("2014-09-29T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Quiz 3"
    },
    {
      "dueDate": ISODate("2014-10-29T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Quiz 4"
    },
    {
      "dueDate": ISODate("2014-11-12T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Quiz 5"
    },
    {
      "dueDate": ISODate("2014-12-01T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Quiz 6"
    }
  ],
  "exam": [
    {
      "dueDate": ISODate("2014-10-13T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Exam 1"
    },
    {
      "dueDate": ISODate("2014-11-17T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Exam 2"
    },
    {
      "dueDate": ISODate("2014-12-15T00:00:00.0Z"),
      "dueTime": "10:30 AM",
      "name": "Final Exam"
    }
  ],
  "assignment": [
    {
      "dueDate": ISODate("2014-09-10T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Homework 1: See online assignment Go to your Z’y va unit 1 into the grammar section and vocab section to access your tutorials which will help you review for the quiz. Please, read in Debuts pp. 36-37"
    },
    {
      "dueDate": ISODate("2014-09-12T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Homework 2: See online assignment Please, read in Debuts pp.42-44"
    },
    {
      "dueDate": ISODate("2014-09-15T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Homework 3: See online assignment Please, read in Debuts pp.47-49"
    },
    {
      "dueDate": ISODate("2014-09-17T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Homework 4: See online assignment Please, read in Debuts pp. 50-51"
    },
    {
      "dueDate": ISODate("2014-09-19T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Homework 5: See online assignment Go to your Z’y va unit 2 into the grammar section and vocab section to access your tutorials which will help you review for the quiz. Please, read in Debuts pp.57-58"
    },
    {
      "dueDate": ISODate("2014-09-22T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Homework 6: See online assignment Please, read in Debuts pp.59-63"
    },
    {
      "dueDate": ISODate("2014-09-24T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Homework 7: See online assignment Please, read in Debuts pp.64-68"
    },
    {
      "dueDate": ISODate("2014-09-26T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Homework 8: See online assignment"
    },
    {
      "dueDate": ISODate("2014-09-29T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Homework 9: See online assignment Go to your Z’y va unit 3 into the grammar section and vocab section to access your tutorials which will help you review for the quiz."
    },
    {
      "dueDate": ISODate("2014-10-01T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Homework 10: See online assignment Please, read in Debuts pp.77-79"
    },
    {
      "dueDate": ISODate("2014-10-03T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Homework 11: See online assignment Please, read in Debuts pp.83-85"
    },
    {
      "dueDate": ISODate("2014-10-06T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Homework 12: See online assignment Please, read in Debuts pp. 86-90"
    },
    {
      "dueDate": ISODate("2014-10-08T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Homework 13: See online assignment Please, read in Debuts pp.90-93"
    },
    {
      "dueDate": ISODate("2014-10-10T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Homework 14: See online assignment"
    },
    {
      "dueDate": ISODate("2014-10-17T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Homework 15: See online assignment Please, read in Debuts pp.99-105"
    },
    {
      "dueDate": ISODate("2014-10-20T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Homework 16: Online assignment Please, read in Debuts pp.106-108 Et 110- 111"
    },
    {
      "dueDate": ISODate("2014-10-22T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Homework 17: See online assignment Please, read in Debuts pp. 119-124"
    },
    {
      "dueDate": ISODate("2014-10-24T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Homework 18: See online assignment Please, read in Debuts pp.130-131"
    },
    {
      "dueDate": ISODate("2014-10-27T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Homework 19: See online assignment Please, read in Debuts pp. 137-144"
    },
    {
      "dueDate": ISODate("2014-10-29T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Homework 20: See online assignment Go to Z”y va unit 5 and unit 6 grammar and vocab to review for quiz 4. Please, read in Debuts pp.146-151"
    },
    {
      "dueDate": ISODate("2014-11-03T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Homework 21: See online assignment Please, read in Debuts pp.157-163"
    },
    {
      "dueDate": ISODate("2014-11-05T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Homework 22: See online assignment Please, read in Debuts pp.165-166, p. 169-170"
    },
    {
      "dueDate": ISODate("2014-11-07T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Homework 23: See online assignment Please, read in ch 9 176-178 et p. 181-182"
    },
    {
      "dueDate": ISODate("2014-11-10T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Homework 24: See online assignment Please, read in Debuts pp.182-184 et p. 185- 186"
    },
    {
      "dueDate": ISODate("2014-11-12T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Homework 25: See online assignment See Z”y va unit 8 and 9 grammar and vocab to prepare for quiz Please, read in Debuts pp. 189"
    },
    {
      "dueDate": ISODate("2014-11-14T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Homework 26: See online assignment"
    },
    {
      "dueDate": ISODate("2014-11-21T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Homework 27: See online assignment Please, read in Debuts pp.205-207"
    },
    {
      "dueDate": ISODate("2014-11-24T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Homework 28:  See online assignment Please, read in Debuts pp.209-210"
    },
    {
      "dueDate": ISODate("2014-11-26T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Homework 29: Go to Z’y va unit 10  grammar to review"
    },
    {
      "dueDate": ISODate("2014-12-01T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Homework 30: See online assignment Please, read in Debuts pp.216-218"
    },
    {
      "dueDate": ISODate("2014-12-03T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Homework 31: See online assignment Please, read in Debuts pp.221-225"
    },
    {
      "dueDate": ISODate("2014-12-05T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Homework 32: See online assignment"
    },
    {
      "dueDate": ISODate("2014-12-08T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Homework 33:See online assignment Please, read in Debuts pp.227-228"
    }
  ],
  "misc": [
    {
      "dueDate": ISODate("2014-12-08T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Your Z’y va folder is due"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("540df4d5975a56036b8280e3"),
  "catalogId": "MATH152",
  "classRoom": "Lecture Hall 1",
  "courseCredit": NumberInt(3),
  "courseName": "Calculus II",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-09-08T18:26:29.253Z"),
  "email": "tbudimir@umbc.edu",
  "endTime": "6:45 PM",
  "enrolledCount": NumberInt(6),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("540e2f753219e05717a849b0"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed",
  "section": NumberInt(11),
  "startTime": "5:30 PM",
  "version": NumberLong(12),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:47:18.546Z"),
  "exam": [
    {
      "dueDate": ISODate("2014-09-22T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "Exam 1 on 6.1-7.3"
    },
    {
      "dueDate": ISODate("2014-10-20T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "Exam 2 on 7.4-11.3"
    },
    {
      "dueDate": ISODate("2014-11-17T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "Exam 3 on 11.4-11.11"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("540e14ab975a56036b8280ea"),
  "catalogId": "MATH131",
  "classRoom": "SOND204",
  "courseCredit": NumberInt(3),
  "courseName": "Math For Elementary School Teachers",
  "createdBy": "gsuh1@umbc.edu",
  "createdOn": ISODate("2014-09-08T20:42:19.176Z"),
  "email": "tighe@umbc.edu",
  "endTime": "3:45 PM",
  "enrolledCount": NumberInt(1),
  "exam": [
    {
      "dueDate": ISODate("2014-09-29T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "EXAM 1 (1.1 - 3.2)"
    },
    {
      "dueDate": ISODate("2014-11-03T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "EXAM 2 (3.3 - 6.2)"
    },
    {
      "dueDate": ISODate("2014-12-08T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "EXAM 3 (6.3 - 8.5)"
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9474975ab3315370054e"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed",
  "quiz": [
    {
      "dueDate": ISODate("2014-09-08T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "Quiz 1 on 1.1"
    },
    {
      "dueDate": ISODate("2014-09-15T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "Quiz 2 on 1.2, 1.3"
    },
    {
      "dueDate": ISODate("2014-09-22T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "Quiz 3 on 2.1, 2.2"
    },
    {
      "dueDate": ISODate("2014-10-06T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "Quiz 4 on 3.3"
    },
    {
      "dueDate": ISODate("2014-10-13T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "Quiz 5 on 3.4, 3.5"
    },
    {
      "dueDate": ISODate("2014-10-20T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "Quiz 6 on 4.1, 4.2"
    },
    {
      "dueDate": ISODate("2014-10-27T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "Quiz 7 on 4.3 - 5.2"
    },
    {
      "dueDate": ISODate("2014-11-10T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "Quiz 8 on 6.3"
    },
    {
      "dueDate": ISODate("2014-11-17T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "Quiz 9 on 6.4"
    },
    {
      "dueDate": ISODate("2014-11-24T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "Quiz 10 on 7.1 - 7.4"
    },
    {
      "dueDate": ISODate("2014-12-01T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "Quiz 11 on 8.1 - 8.3"
    }
  ],
  "section": NumberInt(1),
  "startTime": "2:00 PM",
  "version": NumberLong(5),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:47:15.248Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("540e17f5975a56036b8280eb"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-09T00:00:00.0Z"),
      "dueTime": "11:45 AM",
      "name": "WKBK p4"
    },
    {
      "dueDate": ISODate("2014-09-11T00:00:00.0Z"),
      "dueTime": "11:45 AM",
      "name": "WKBK p5-7"
    },
    {
      "dueDate": ISODate("2014-09-16T00:00:00.0Z"),
      "dueTime": "11:45 AM",
      "name": "WKBK p11-15 (E to I)"
    }
  ],
  "catalogId": "KORE301",
  "classRoom": "PHYS101",
  "courseCredit": NumberInt(3),
  "courseName": "Advanced Korean 1",
  "createdBy": "gsuh1@umbc.edu",
  "createdOn": ISODate("2014-09-08T20:56:21.806Z"),
  "email": "kyoon@umbc.edu",
  "endTime": "12:45 PM",
  "enrolledCount": NumberInt(1),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9475975ab33153700592"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "misc": [
    {
      "dueDate": ISODate("2014-09-18T00:00:00.0Z"),
      "dueTime": "11:45 AM",
      "name": "Writing 1"
    }
  ],
  "quiz": [
    {
      "dueDate": ISODate("2014-09-09T00:00:00.0Z"),
      "dueTime": "11:30 AM",
      "name": "Vocab Quiz 1"
    },
    {
      "dueDate": ISODate("2014-09-16T00:00:00.0Z"),
      "dueTime": "11:30 AM",
      "name": "Chapter Quiz 1"
    }
  ],
  "section": NumberInt(1),
  "startTime": "11:30 AM",
  "version": NumberLong(3),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:47:13.532Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("540e192d975a56036b8280ec"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-12T00:00:00.0Z"),
      "dueTime": "5:00 PM",
      "name": "SIMBIO - snails"
    },
    {
      "dueDate": ISODate("2014-09-15T00:00:00.0Z"),
      "dueTime": "12:00 AM",
      "name": "WWJ postings start"
    }
  ],
  "catalogId": "SCI100",
  "classRoom": "PHYS101",
  "courseCredit": NumberInt(3),
  "courseName": "Water; An Interdisciplinary Study",
  "createdBy": "gsuh1@umbc.edu",
  "createdOn": ISODate("2014-09-08T21:01:33.115Z"),
  "email": "sschreier@umbc.edu",
  "endTime": "2:15 PM",
  "enrolledCount": NumberInt(2),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9473975ab3315370050e"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Fri",
  "section": NumberInt(1),
  "startTime": "1:00 PM",
  "version": NumberLong(4),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:47:11.880Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("540e1c1d975a56036b8280ef"),
  "assignment": [
    {
      "dueDate": ISODate("2014-10-14T00:00:00.0Z"),
      "dueTime": "3:00 PM",
      "name": "Osmosis WKBK"
    },
    {
      "dueDate": ISODate("2014-09-30T00:00:00.0Z"),
      "dueTime": "3:00 PM",
      "name": "Estuary Lab Report"
    },
    {
      "dueDate": ISODate("2014-10-28T00:00:00.0Z"),
      "dueTime": "3:00 PM",
      "name": "Osmosis Lab Report"
    },
    {
      "dueDate": ISODate("2014-11-04T00:00:00.0Z"),
      "dueTime": "3:00 PM",
      "name": "Keystone Predator WKBK"
    },
    {
      "dueDate": ISODate("2014-11-18T00:00:00.0Z"),
      "dueTime": "3:00 PM",
      "name": "Darwinian Snails WKBK"
    }
  ],
  "catalogId": "SCI100",
  "classRoom": "PHYS111",
  "courseCredit": NumberInt(3),
  "courseName": "SCI100 LAB",
  "createdBy": "gsuh1@umbc.edu",
  "createdOn": ISODate("2014-09-08T21:14:05.783Z"),
  "email": "voelker1@umbc.edu",
  "endTime": "4:50 PM",
  "enrolledCount": NumberInt(1),
  "exam": [
    {
      "dueDate": ISODate("2014-10-17T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "MIDTERM"
    },
    {
      "dueDate": ISODate("2014-12-11T00:00:00.0Z"),
      "dueTime": "3:30 PM",
      "name": "FINAL"
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946a975ab33153700293"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue",
  "misc": [
    {
      "dueDate": ISODate("2014-10-21T00:00:00.0Z"),
      "dueTime": "3:00 PM",
      "name": "Group Project Proposal"
    },
    {
      "dueDate": ISODate("2014-11-11T00:00:00.0Z"),
      "dueTime": "3:00 PM",
      "name": "Indiv Group Project Lab Report"
    },
    {
      "dueDate": ISODate("2014-12-02T00:00:00.0Z"),
      "dueTime": "3:00 PM",
      "name": "Final Group Presentations"
    },
    {
      "dueDate": ISODate("2014-12-07T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "WWJ ENDS"
    }
  ],
  "quiz": [
    {
      "dueDate": ISODate("2014-09-12T00:00:00.0Z"),
      "dueTime": "12:00 AM",
      "name": "Course Quiz"
    },
    {
      "dueDate": ISODate("2014-09-16T00:00:00.0Z"),
      "dueTime": "2:45 PM",
      "name": "Quiz #1"
    },
    {
      "dueDate": ISODate("2014-09-23T00:00:00.0Z"),
      "dueTime": "2:45 PM",
      "name": "Quiz #2"
    },
    {
      "dueDate": ISODate("2014-10-07T00:00:00.0Z"),
      "dueTime": "2:45 PM",
      "name": "Quiz #3"
    },
    {
      "dueDate": ISODate("2014-10-21T00:00:00.0Z"),
      "dueTime": "2:45 PM",
      "name": "Quiz #4"
    },
    {
      "dueDate": ISODate("2014-11-04T00:00:00.0Z"),
      "dueTime": "2:45 PM",
      "name": "Quiz #5"
    },
    {
      "dueDate": ISODate("2014-11-18T00:00:00.0Z"),
      "dueTime": "2:45 PM",
      "name": "Quiz #6"
    }
  ],
  "section": NumberInt(1),
  "startTime": "3:00 PM",
  "version": NumberLong(2),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:47:10.332Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("540e2e94975a56036b8280f5"),
  "catalogId": "MATH152",
  "classRoom": "Sondheim 204",
  "courseCredit": NumberInt(3),
  "courseName": "Calculus II Discussion",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-09-08T22:32:52.639Z"),
  "email": "tbudimir@umbc.edu",
  "endTime": "4:50 PM",
  "enrolledCount": NumberInt(2),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("540e2f753219e05717a849b0"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed",
  "quiz": [
    {
      "dueDate": ISODate("2014-09-03T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "QUIZ 1 on 6.1-6.2"
    },
    {
      "dueDate": ISODate("2014-09-08T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "QUIZ 2 on 6.3-6.5"
    },
    {
      "dueDate": ISODate("2014-09-15T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "QUIZ 3 on 7.1-7.2"
    },
    {
      "dueDate": ISODate("2014-10-01T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "QUIZ 4 on 7.4"
    },
    {
      "dueDate": ISODate("2014-10-06T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "QUIZ 5 on 7.7"
    },
    {
      "dueDate": ISODate("2014-10-15T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "QUIZ 6 on 7.8.-8.2"
    },
    {
      "dueDate": ISODate("2014-10-29T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "QUIZ 7 on 11.4-11. 5"
    },
    {
      "dueDate": ISODate("2014-11-05T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "QUIZ 8 on 11.6-11.7"
    },
    {
      "dueDate": ISODate("2014-11-10T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "QUIZ 9 on 11.8-11.9"
    },
    {
      "dueDate": ISODate("2014-11-26T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "QUIZ 10 on 10.5"
    },
    {
      "dueDate": ISODate("2014-12-03T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "QUIZ 11 on 10.1-10.2"
    }
  ],
  "section": NumberInt(12),
  "startTime": "4:00 PM",
  "version": NumberLong(6),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:46:16.122Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("540e31043219e0a012a849b0"),
  "catalogId": "MATH152",
  "classRoom": "Sondheim 203",
  "courseCredit": NumberLong(3),
  "courseName": "Calculus II Discussion",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-09-08T22:32:52.639Z"),
  "email": "tbudimir@umbc.edu",
  "endTime": "4:50 PM",
  "enrolledCount": NumberInt(3),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("540e2f753219e05717a849b0"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed",
  "quiz": [
    {
      "dueDate": ISODate("2014-09-03T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "QUIZ 1 on 6.1-6.2"
    },
    {
      "dueDate": ISODate("2014-09-08T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "QUIZ 2 on 6.3-6.5"
    },
    {
      "dueDate": ISODate("2014-09-15T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "QUIZ 3 on 7.1-7.2"
    },
    {
      "dueDate": ISODate("2014-10-01T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "QUIZ 4 on 7.4"
    },
    {
      "dueDate": ISODate("2014-10-06T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "QUIZ 5 on 7.7"
    },
    {
      "dueDate": ISODate("2014-10-15T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "QUIZ 6 on 7.8.-8.2"
    },
    {
      "dueDate": ISODate("2014-10-29T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "QUIZ 7 on 11.4-11. 5"
    },
    {
      "dueDate": ISODate("2014-11-05T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "QUIZ 8 on 11.6-11.7"
    },
    {
      "dueDate": ISODate("2014-11-10T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "QUIZ 9 on 11.8-11.9"
    },
    {
      "dueDate": ISODate("2014-11-26T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "QUIZ 10 on 10.5"
    },
    {
      "dueDate": ISODate("2014-12-03T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "QUIZ 11 on 10.1-10.2"
    }
  ],
  "section": NumberLong(13),
  "startTime": "4:00 PM",
  "version": NumberLong(5),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:46:17.899Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("540e314e3219e05717a849b1"),
  "catalogId": "MATH152",
  "classRoom": "Sondheim 114",
  "courseCredit": NumberLong(3),
  "courseName": "Calculus II Discussion",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-09-08T22:32:52.639Z"),
  "email": "tbudimir@umbc.edu",
  "endTime": "8:00 PM",
  "enrolledCount": NumberInt(3),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("540e2f753219e05717a849b0"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed",
  "quiz": [
    {
      "dueDate": ISODate("2014-09-03T00:00:00.0Z"),
      "dueTime": "7:10 PM",
      "name": "QUIZ 1 on 6.1-6.2"
    },
    {
      "dueDate": ISODate("2014-09-08T00:00:00.0Z"),
      "dueTime": "7:10 PM",
      "name": "QUIZ 2 on 6.3-6.5"
    },
    {
      "dueDate": ISODate("2014-09-15T00:00:00.0Z"),
      "dueTime": "7:10 PM",
      "name": "QUIZ 3 on 7.1-7.2"
    },
    {
      "dueDate": ISODate("2014-10-01T00:00:00.0Z"),
      "dueTime": "7:10 PM",
      "name": "QUIZ 4 on 7.4"
    },
    {
      "dueDate": ISODate("2014-10-06T00:00:00.0Z"),
      "dueTime": "7:10 PM",
      "name": "QUIZ 5 on 7.7"
    },
    {
      "dueDate": ISODate("2014-10-15T00:00:00.0Z"),
      "dueTime": "7:10 PM",
      "name": "QUIZ 6 on 7.8.-8.2"
    },
    {
      "dueDate": ISODate("2014-10-29T00:00:00.0Z"),
      "dueTime": "7:10 PM",
      "name": "QUIZ 7 on 11.4-11. 5"
    },
    {
      "dueDate": ISODate("2014-11-05T00:00:00.0Z"),
      "dueTime": "7:10 PM",
      "name": "QUIZ 8 on 11.6-11.7"
    },
    {
      "dueDate": ISODate("2014-11-10T00:00:00.0Z"),
      "dueTime": "7:10 PM",
      "name": "QUIZ 9 on 11.8-11.9"
    },
    {
      "dueDate": ISODate("2014-11-26T00:00:00.0Z"),
      "dueTime": "7:10 PM",
      "name": "QUIZ 10 on 10.5"
    },
    {
      "dueDate": ISODate("2014-12-03T00:00:00.0Z"),
      "dueTime": "7:10 PM",
      "name": "QUIZ 11 on 10.1-10.2"
    }
  ],
  "section": NumberLong(14),
  "startTime": "7:10 PM",
  "version": NumberLong(6),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:47:07.5Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("540e31b73219e0a012a849b1"),
  "catalogId": "MATH152",
  "classRoom": "Sondheim 202",
  "courseCredit": NumberLong(3),
  "courseName": "Calculus II Discussion",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-09-08T22:32:52.639Z"),
  "email": "tbudimir@umbc.edu",
  "endTime": "8:00 PM",
  "enrolledCount": NumberLong(1),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("540e2f753219e05717a849b0"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed",
  "quiz": [
    {
      "dueDate": ISODate("2014-09-03T00:00:00.0Z"),
      "dueTime": "7:10 PM",
      "name": "QUIZ 1 on 6.1-6.2"
    },
    {
      "dueDate": ISODate("2014-09-08T00:00:00.0Z"),
      "dueTime": "7:10 PM",
      "name": "QUIZ 2 on 6.3-6.5"
    },
    {
      "dueDate": ISODate("2014-09-15T00:00:00.0Z"),
      "dueTime": "7:10 PM",
      "name": "QUIZ 3 on 7.1-7.2"
    },
    {
      "dueDate": ISODate("2014-10-01T00:00:00.0Z"),
      "dueTime": "7:10 PM",
      "name": "QUIZ 4 on 7.4"
    },
    {
      "dueDate": ISODate("2014-10-06T00:00:00.0Z"),
      "dueTime": "7:10 PM",
      "name": "QUIZ 5 on 7.7"
    },
    {
      "dueDate": ISODate("2014-10-15T00:00:00.0Z"),
      "dueTime": "7:10 PM",
      "name": "QUIZ 6 on 7.8.-8.2"
    },
    {
      "dueDate": ISODate("2014-10-29T00:00:00.0Z"),
      "dueTime": "7:10 PM",
      "name": "QUIZ 7 on 11.4-11. 5"
    },
    {
      "dueDate": ISODate("2014-11-05T00:00:00.0Z"),
      "dueTime": "7:10 PM",
      "name": "QUIZ 8 on 11.6-11.7"
    },
    {
      "dueDate": ISODate("2014-11-10T00:00:00.0Z"),
      "dueTime": "7:10 PM",
      "name": "QUIZ 9 on 11.8-11.9"
    },
    {
      "dueDate": ISODate("2014-11-26T00:00:00.0Z"),
      "dueTime": "7:10 PM",
      "name": "QUIZ 10 on 10.5"
    },
    {
      "dueDate": ISODate("2014-12-03T00:00:00.0Z"),
      "dueTime": "7:10 PM",
      "name": "QUIZ 11 on 10.1-10.2"
    }
  ],
  "section": NumberLong(15),
  "startTime": "7:10 PM",
  "version": NumberLong(4),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:47:08.676Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("540e342d975a56036b8280f9"),
  "catalogId": "FYE101",
  "classRoom": "Sherman 011",
  "courseCredit": NumberInt(3),
  "courseName": "Intro to an Honors University",
  "createdBy": "ew70779@umbc.edu",
  "createdOn": ISODate("2014-09-08T22:56:45.999Z"),
  "email": "crystal@umbc.edu",
  "endTime": "5:15 PM",
  "enrolledCount": NumberInt(5),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("540e34153219e0a012a849b2"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue",
  "section": NumberInt(1),
  "startTime": "4:00 PM",
  "version": NumberLong(16),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:46:14.69Z"),
  "misc": [
    {
      "dueDate": ISODate("2014-09-09T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "JE #1"
    },
    {
      "dueDate": ISODate("2014-09-23T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "JE #2"
    },
    {
      "dueDate": ISODate("2014-10-14T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "JE #3"
    },
    {
      "dueDate": ISODate("2014-10-21T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "JE #4"
    },
    {
      "dueDate": ISODate("2014-11-04T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "JE #5"
    },
    {
      "dueDate": ISODate("2014-11-11T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "JE #6"
    },
    {
      "dueDate": ISODate("2014-12-01T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "JE #7"
    }
  ],
  "assignment": [
    {
      "dueDate": ISODate("2014-09-16T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Bring your planner to class with all of  your Fall 2014 due dates, exams, quizzes, and  homework assignments written"
    },
    {
      "dueDate": ISODate("2014-09-30T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Bring a hard copy draft of resume to class"
    },
    {
      "dueDate": ISODate("2014-09-30T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Email cover letter draft to Crystal by  beginning of class (in a Word doc)"
    },
    {
      "dueDate": ISODate("2014-10-07T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Submit an edited copy of your resume & cover  letter to Crystal by beginning of class via email"
    },
    {
      "dueDate": ISODate("2014-10-08T00:00:00.0Z"),
      "dueTime": "11:30 AM",
      "name": "Attend UMBC Career Fair"
    },
    {
      "dueDate": ISODate("2014-10-14T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Submit the final copy of your resume &  cover letter on Blackboard (PDF format)"
    },
    {
      "dueDate": ISODate("2014-10-28T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Extra credit for bringing a non-Scholar to Pick  Your Classes Extravaganza"
    },
    {
      "dueDate": ISODate("2014-12-01T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Faculty Informational Interview  Assignment (Bring hard copy to class and  upload to Blackboard)"
    },
    {
      "dueDate": ISODate("2014-12-01T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Two UMBC Community Activity  Reflections"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("540e4044975a56036b8280fc"),
  "catalogId": "GWST100",
  "classRoom": "Performing Arts 108",
  "courseCredit": NumberInt(3),
  "courseName": "Intro to Gender Women's Studies",
  "createdBy": "ew70779@umbc.edu",
  "createdOn": ISODate("2014-09-08T23:48:20.871Z"),
  "email": "macmanus@umbc.edu",
  "endTime": "10:50 AM",
  "enrolledCount": NumberInt(2),
  "exam": [
    {
      "dueDate": ISODate("2014-10-06T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Midterm Exam"
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("540e3f003219e0a012a849b3"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed,Fri",
  "misc": [
    {
      "dueDate": ISODate("2014-12-15T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "Final Paper"
    },
    {
      "dueDate": ISODate("2014-09-12T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Group 2 Essay Due"
    },
    {
      "dueDate": ISODate("2014-09-15T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Group 1 Essay Due"
    },
    {
      "dueDate": ISODate("2014-09-17T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Group 2 Essay Due"
    },
    {
      "dueDate": ISODate("2014-09-29T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Group 1 Essay Due"
    },
    {
      "dueDate": ISODate("2014-10-01T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Group 2 Essay Due"
    },
    {
      "dueDate": ISODate("2014-10-13T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Group 2 Essay Due"
    },
    {
      "dueDate": ISODate("2014-10-15T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Group 1 Essay Due"
    },
    {
      "dueDate": ISODate("2014-10-22T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Group 1 Essay Due"
    },
    {
      "dueDate": ISODate("2014-10-24T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Group 2 Essay Due"
    },
    {
      "dueDate": ISODate("2014-10-27T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Group 1 Essay Due"
    },
    {
      "dueDate": ISODate("2014-10-29T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Group 2 Essay Due"
    },
    {
      "dueDate": ISODate("2014-11-03T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Group 1 Essay Due"
    },
    {
      "dueDate": ISODate("2014-11-05T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Group 2 Essay Due"
    },
    {
      "dueDate": ISODate("2014-11-17T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Group 1 Essay Due"
    },
    {
      "dueDate": ISODate("2014-11-21T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Group 2 Essay Due"
    },
    {
      "dueDate": ISODate("2014-12-03T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Group 1 Essay Due"
    },
    {
      "dueDate": ISODate("2014-12-08T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Group 2 Essay Due"
    }
  ],
  "section": NumberInt(1),
  "startTime": "10:00 AM",
  "version": NumberLong(10),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:46:08.632Z"),
  "assignment": [
    {
      "dueDate": ISODate("2014-11-14T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "WATCH Robin Thicke’s Blurred Lines music video (and lyrics)"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("540e45123219e0a012a849b4"),
  "catalogId": "GWST100",
  "classRoom": "Performing Arts 108",
  "courseCredit": NumberLong(3),
  "courseName": "Intro to Gender Women's Studies",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-09-08T23:48:20.871Z"),
  "email": "macmanus@umbc.edu",
  "endTime": "11:50 AM",
  "enrolledCount": NumberLong(1),
  "exam": [
    {
      "dueDate": ISODate("2014-10-06T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Midterm Exam"
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("540e3f003219e0a012a849b3"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed,Fri",
  "misc": [
    {
      "dueDate": ISODate("2014-12-15T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "Final Paper"
    },
    {
      "dueDate": ISODate("2014-09-12T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Group 2 Essay Due"
    },
    {
      "dueDate": ISODate("2014-09-15T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Group 1 Essay Due"
    },
    {
      "dueDate": ISODate("2014-09-17T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Group 2 Essay Due"
    },
    {
      "dueDate": ISODate("2014-09-29T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Group 1 Essay Due"
    },
    {
      "dueDate": ISODate("2014-10-01T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Group 2 Essay Due"
    },
    {
      "dueDate": ISODate("2014-10-13T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Group 2 Essay Due"
    },
    {
      "dueDate": ISODate("2014-10-15T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Group 1 Essay Due"
    },
    {
      "dueDate": ISODate("2014-10-22T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Group 1 Essay Due"
    },
    {
      "dueDate": ISODate("2014-10-24T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Group 2 Essay Due"
    },
    {
      "dueDate": ISODate("2014-10-27T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Group 1 Essay Due"
    },
    {
      "dueDate": ISODate("2014-10-29T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Group 2 Essay Due"
    },
    {
      "dueDate": ISODate("2014-11-03T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Group 1 Essay Due"
    },
    {
      "dueDate": ISODate("2014-11-05T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Group 2 Essay Due"
    },
    {
      "dueDate": ISODate("2014-11-17T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Group 1 Essay Due"
    },
    {
      "dueDate": ISODate("2014-11-21T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Group 2 Essay Due"
    },
    {
      "dueDate": ISODate("2014-12-03T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Group 1 Essay Due"
    },
    {
      "dueDate": ISODate("2014-12-08T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Group 2 Essay Due"
    }
  ],
  "section": NumberLong(2),
  "startTime": "11:00 AM",
  "version": NumberLong(7),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:46:10.653Z"),
  "assignment": [
    {
      "dueDate": ISODate("2014-11-14T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "WATCH Robin Thicke’s Blurred Lines music video (and lyrics)"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("540f23ff975a780e5387ae13"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-18T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "Quiz 1"
    },
    {
      "dueDate": ISODate("2014-09-30T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "Quiz 2"
    },
    {
      "dueDate": ISODate("2014-10-14T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "Midterm due"
    },
    {
      "dueDate": ISODate("2014-10-16T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "Quiz 3"
    },
    {
      "dueDate": ISODate("2014-11-06T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "Quiz 4"
    },
    {
      "dueDate": ISODate("2014-12-04T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "Quiz 5"
    },
    {
      "dueDate": ISODate("2014-12-09T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "Final"
    }
  ],
  "catalogId": "AGNG200",
  "classRoom": "Sherman Hall 003",
  "courseCredit": NumberInt(3),
  "courseName": "Aging People",
  "createdBy": "Cagab1@umbc.edu",
  "createdOn": ISODate("2014-09-09T15:59:59.960Z"),
  "email": "galinamadjaroff@umbc.edu",
  "endTime": "2:15 PM",
  "enrolledCount": NumberInt(4),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9472975ab3315370047e"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "section": NumberInt(1),
  "startTime": "1:00 PM",
  "version": NumberLong(6),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:46:05.321Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("540f3817975a780e5387ae17"),
  "catalogId": "MATH151",
  "classRoom": "ADMIN101",
  "courseCredit": NumberInt(3),
  "courseName": "Calculus I",
  "createdBy": "wd73852@umbc.edu",
  "createdOn": ISODate("2014-09-09T17:25:43.978Z"),
  "email": "tbudimir@umbc.edu",
  "endTime": "12:45 PM",
  "enrolledCount": NumberInt(8),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("540e2f753219e05717a849b0"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "section": NumberInt(6),
  "startTime": "11:30 AM",
  "version": NumberLong(11),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:46:03.699Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("540f4b2d975ad24cda81ea4c"),
  "catalogId": "MATH151",
  "classRoom": "Sherman 013",
  "courseCredit": NumberInt(3),
  "courseName": "Calculus I Discussion",
  "createdBy": "c130@umbc.edu",
  "createdOn": ISODate("2014-09-09T18:47:09.912Z"),
  "email": "jongrafl@umbc.edu",
  "endTime": "4:50 PM",
  "enrolledCount": NumberInt(1),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946a975ab33153700293"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "quiz": [
    {
      "dueDate": ISODate("2014-09-11T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "quiz 2"
    },
    {
      "dueDate": ISODate("2014-09-18T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Quiz 3"
    },
    {
      "dueDate": ISODate("2014-10-02T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Quiz 4"
    },
    {
      "dueDate": ISODate("2014-10-09T00:00:00.0Z"),
      "dueTime": "4:00 PM"
    },
    {
      "dueDate": ISODate("2014-10-16T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Quiz 6"
    },
    {
      "dueDate": ISODate("2014-10-30T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Quiz 7"
    },
    {
      "dueDate": ISODate("2014-11-06T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Quiz 8"
    },
    {
      "dueDate": ISODate("2014-11-13T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Quiz 9"
    },
    {
      "dueDate": ISODate("2014-11-20T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Quiz 10"
    },
    {
      "dueDate": ISODate("2014-12-09T00:00:00.0Z"),
      "dueTime": "4:45 PM",
      "name": "quiz 11"
    }
  ],
  "section": NumberLong(17),
  "startTime": "4:00 PM",
  "version": NumberLong(3),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:45:54.450Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("540f4111975ad24cda81ea4b"),
  "catalogId": "PSYC285",
  "classRoom": "Sherman 151",
  "courseCredit": NumberInt(3),
  "courseName": "Abnormal Psychology",
  "createdBy": "khaseeb1@umbc.edu",
  "createdOn": ISODate("2014-09-09T18:04:01.575Z"),
  "email": "reyjac1@umbc.edu",
  "endTime": "9:45 AM",
  "enrolledCount": NumberInt(1),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946a975ab33153700293"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "section": NumberInt(1),
  "startTime": "8:30 AM",
  "version": NumberLong(12),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:46:01.771Z"),
  "exam": [
    {
      "dueDate": ISODate("2014-09-18T00:00:00.0Z"),
      "dueTime": "8:30 AM",
      "name": "Exam 1 Ch 1, 2, 3, 9"
    },
    {
      "dueDate": ISODate("2014-10-16T00:00:00.0Z"),
      "dueTime": "8:30 AM",
      "name": "Exam 2 Ch 5, 6, 7"
    },
    {
      "dueDate": ISODate("2014-11-11T00:00:00.0Z"),
      "dueTime": "8:30 AM",
      "name": "Exam 3"
    }
  ],
  "misc": [
    {
      "dueDate": ISODate("2014-12-04T00:00:00.0Z"),
      "dueTime": "8:30 AM",
      "name": "Extra Credit"
    }
  ],
  "assignment": [
    {
      "dueDate": ISODate("2014-10-30T00:00:00.0Z"),
      "dueTime": "5:00 PM",
      "name": "Personality Disorders (online)"
    },
    {
      "dueDate": ISODate("2014-10-02T00:00:00.0Z"),
      "dueTime": "5:00 PM",
      "name": "Mood Disorders (online)"
    },
    {
      "dueDate": ISODate("2014-09-16T00:00:00.0Z"),
      "dueTime": "8:30 AM",
      "name": "Chapter 9 (skip pages 335 – 340)"
    },
    {
      "dueDate": ISODate("2014-09-23T00:00:00.0Z"),
      "dueTime": "8:30 AM",
      "name": "Chapter 5: pp. 155 - 163"
    },
    {
      "dueDate": ISODate("2014-09-25T00:00:00.0Z"),
      "dueTime": "8:30 AM",
      "name": "Chapter 7"
    },
    {
      "dueDate": ISODate("2014-10-07T00:00:00.0Z"),
      "dueTime": "8:30 AM",
      "name": "Chapter 5 (pp 123 – 155 & 163 – 177)"
    },
    {
      "dueDate": ISODate("2014-10-14T00:00:00.0Z"),
      "dueTime": "8:30 AM",
      "name": "Chapter 6"
    },
    {
      "dueDate": ISODate("2014-10-21T00:00:00.0Z"),
      "dueTime": "8:30 AM",
      "name": "Chapter 11"
    },
    {
      "dueDate": ISODate("2014-10-28T00:00:00.0Z"),
      "dueTime": "8:30 AM",
      "name": "Chapter 12"
    },
    {
      "dueDate": ISODate("2014-11-04T00:00:00.0Z"),
      "dueTime": "8:30 AM",
      "name": "Chapter 8 (pp 268 – 292)"
    },
    {
      "dueDate": ISODate("2014-11-06T00:00:00.0Z"),
      "dueTime": "8:30 AM",
      "name": "Chapter 8 (pp. 293 – 309)"
    },
    {
      "dueDate": ISODate("2014-11-13T00:00:00.0Z"),
      "dueTime": "8:30 AM",
      "name": "Chapter 13"
    },
    {
      "dueDate": ISODate("2014-11-20T00:00:00.0Z"),
      "dueTime": "8:30 AM",
      "name": "Chapter 15"
    },
    {
      "dueDate": ISODate("2014-11-25T00:00:00.0Z"),
      "dueTime": "8:30 AM",
      "name": "Chapter 10"
    },
    {
      "dueDate": ISODate("2014-12-02T00:00:00.0Z"),
      "dueTime": "8:30 AM",
      "name": "Chapter 14 (pp. 510 – 530 only)."
    },
    {
      "dueDate": ISODate("2014-12-09T00:00:00.0Z"),
      "dueTime": "8:30 AM",
      "name": "Chapter 16"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("540f5c2b3219e0402ea849b0"),
  "catalogId": "MATH151",
  "classRoom": "Physics 201",
  "courseCredit": NumberLong(3),
  "courseName": "Calculus I Discussion",
  "createdBy": "c130@umbc.edu",
  "createdOn": ISODate("2014-09-09T18:47:09.912Z"),
  "email": "jongrafl@umbc.edu",
  "endTime": "4:50 PM",
  "enrolledCount": NumberInt(2),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946a975ab33153700293"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "quiz": [
    {
      "dueDate": ISODate("2014-09-11T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "quiz 2"
    },
    {
      "dueDate": ISODate("2014-09-18T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Quiz 3"
    },
    {
      "dueDate": ISODate("2014-10-02T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Quiz 4"
    },
    {
      "dueDate": ISODate("2014-10-09T00:00:00.0Z"),
      "dueTime": "4:00 PM"
    },
    {
      "dueDate": ISODate("2014-10-16T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Quiz 6"
    },
    {
      "dueDate": ISODate("2014-10-30T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Quiz 7"
    },
    {
      "dueDate": ISODate("2014-11-06T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Quiz 8"
    },
    {
      "dueDate": ISODate("2014-11-13T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Quiz 9"
    },
    {
      "dueDate": ISODate("2014-11-20T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Quiz 10"
    },
    {
      "dueDate": ISODate("2014-12-09T00:00:00.0Z"),
      "dueTime": "4:45 PM",
      "name": "quiz 11"
    }
  ],
  "section": NumberLong(18),
  "startTime": "4:00 PM",
  "version": NumberLong(4),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:45:58.11Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("540f5e143219e0402ea849b1"),
  "catalogId": "MATH151",
  "classRoom": "Engineering 023",
  "courseCredit": NumberLong(3),
  "courseName": "Calculus I Discussion",
  "createdBy": "c130@umbc.edu",
  "createdOn": ISODate("2014-09-09T18:47:09.912Z"),
  "email": "jongrafl@umbc.edu",
  "endTime": "7:50 PM",
  "enrolledCount": NumberInt(3),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946a975ab33153700293"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "quiz": [
    {
      "dueDate": ISODate("2014-09-11T00:00:00.0Z"),
      "dueTime": "7:00 PM",
      "name": "quiz 2"
    },
    {
      "dueDate": ISODate("2014-09-18T00:00:00.0Z"),
      "dueTime": "7:00 PM",
      "name": "Quiz 3"
    },
    {
      "dueDate": ISODate("2014-10-02T00:00:00.0Z"),
      "dueTime": "7:00 PM",
      "name": "Quiz 4"
    },
    {
      "dueDate": ISODate("2014-10-09T00:00:00.0Z"),
      "dueTime": "7:00 PM"
    },
    {
      "dueDate": ISODate("2014-10-16T00:00:00.0Z"),
      "dueTime": "7:00 PM",
      "name": "Quiz 6"
    },
    {
      "dueDate": ISODate("2014-10-30T00:00:00.0Z"),
      "dueTime": "7:00 PM",
      "name": "Quiz 7"
    },
    {
      "dueDate": ISODate("2014-11-06T00:00:00.0Z"),
      "dueTime": "7:00 PM",
      "name": "Quiz 8"
    },
    {
      "dueDate": ISODate("2014-11-13T00:00:00.0Z"),
      "dueTime": "7:00 PM",
      "name": "Quiz 9"
    },
    {
      "dueDate": ISODate("2014-11-20T00:00:00.0Z"),
      "dueTime": "7:00 PM",
      "name": "Quiz 10"
    },
    {
      "dueDate": ISODate("2014-12-09T00:00:00.0Z"),
      "dueTime": "7:00 PM",
      "name": "quiz 11"
    }
  ],
  "section": NumberLong(19),
  "startTime": "7:00 PM",
  "version": NumberLong(5),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:45:56.476Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("540f5e593219e05717a849b3"),
  "catalogId": "MATH151",
  "classRoom": "Sondheim 113",
  "courseCredit": NumberLong(3),
  "courseName": "Calculus I Discussion",
  "createdBy": "c130@umbc.edu",
  "createdOn": ISODate("2014-09-09T18:47:09.912Z"),
  "email": "jongrafl@umbc.edu",
  "endTime": "8:00 PM",
  "enrolledCount": NumberLong(1),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946a975ab33153700293"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "quiz": [
    {
      "dueDate": ISODate("2014-09-11T00:00:00.0Z"),
      "dueTime": "7:10 PM",
      "name": "quiz 2"
    },
    {
      "dueDate": ISODate("2014-09-18T00:00:00.0Z"),
      "dueTime": "7:10 PM",
      "name": "Quiz 3"
    },
    {
      "dueDate": ISODate("2014-10-02T00:00:00.0Z"),
      "dueTime": "7:10 PM",
      "name": "Quiz 4"
    },
    {
      "dueDate": ISODate("2014-10-09T00:00:00.0Z"),
      "dueTime": "7:00 PM"
    },
    {
      "dueDate": ISODate("2014-10-16T00:00:00.0Z"),
      "dueTime": "7:10 PM",
      "name": "Quiz 6"
    },
    {
      "dueDate": ISODate("2014-10-30T00:00:00.0Z"),
      "dueTime": "7:10 PM",
      "name": "Quiz 7"
    },
    {
      "dueDate": ISODate("2014-11-06T00:00:00.0Z"),
      "dueTime": "7:10 PM",
      "name": "Quiz 8"
    },
    {
      "dueDate": ISODate("2014-11-13T00:00:00.0Z"),
      "dueTime": "7:10 PM",
      "name": "Quiz 9"
    },
    {
      "dueDate": ISODate("2014-11-20T00:00:00.0Z"),
      "dueTime": "7:10 PM",
      "name": "Quiz 10"
    },
    {
      "dueDate": ISODate("2014-12-09T00:00:00.0Z"),
      "dueTime": "7:10 PM",
      "name": "quiz 11"
    }
  ],
  "section": NumberLong(20),
  "startTime": "7:10 PM",
  "version": NumberLong(3),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:45:59.659Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("540f84c5975a44efd1cd1427"),
  "catalogId": "GES120",
  "classRoom": "ENGR027",
  "courseCredit": NumberInt(3),
  "courseName": "Environmental Science and Conservation",
  "createdBy": "dylwhich@umbc.edu",
  "createdOn": ISODate("2014-09-09T22:52:53.678Z"),
  "email": "mholland@umbc.edu",
  "endTime": "12:45 PM",
  "enrolledCount": NumberInt(3),
  "exam": [
    {
      "dueDate": ISODate("2014-10-07T00:00:00.0Z"),
      "dueTime": "11:30 AM",
      "name": "Exam 1"
    },
    {
      "dueDate": ISODate("2014-11-04T00:00:00.0Z"),
      "dueTime": "11:30 AM",
      "name": "Exam 2"
    },
    {
      "dueDate": ISODate("2014-12-11T00:00:00.0Z"),
      "dueTime": "10:30 AM",
      "name": "Exam 3 (Final)"
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9472975ab33153700493"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "section": NumberInt(1),
  "startTime": "11:30 AM",
  "version": NumberLong(6),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:45:51.287Z"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-09T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "Discussion Board 1"
    },
    {
      "dueDate": ISODate("2014-09-30T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "Discussion Board 2"
    },
    {
      "dueDate": ISODate("2014-10-16T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "Discussion Board 3"
    },
    {
      "dueDate": ISODate("2014-10-28T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "Discussion Board 4"
    },
    {
      "dueDate": ISODate("2014-11-06T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "Discussion Board 5"
    },
    {
      "dueDate": ISODate("2014-12-04T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "Discussion Board 6"
    }
  ],
  "quiz": [
    {
      "dueDate": ISODate("2014-09-18T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "Quiz 1"
    },
    {
      "dueDate": ISODate("2014-10-02T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "Quiz 2"
    },
    {
      "dueDate": ISODate("2014-10-23T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "Quiz 3"
    },
    {
      "dueDate": ISODate("2014-11-18T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "Quiz 4"
    },
    {
      "dueDate": ISODate("2014-12-02T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "Quiz 5"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("540f80aa975a44efd1cd1426"),
  "catalogId": "CMSC433",
  "classRoom": "SOND112",
  "courseCredit": NumberInt(3),
  "courseName": "Scripting Languages",
  "createdBy": "dylwhich@umbc.edu",
  "createdOn": ISODate("2014-09-09T22:35:22.521Z"),
  "email": "damas1@umbc.edu",
  "endTime": "6:45 PM",
  "enrolledCount": NumberInt(1),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946a975ab33153700293"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed",
  "section": NumberInt(1),
  "startTime": "5:30 PM",
  "version": NumberLong(3),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:45:52.845Z"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-26T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "Regex Project"
    },
    {
      "dueDate": ISODate("2014-10-15T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "Shell Project"
    },
    {
      "dueDate": ISODate("2014-11-01T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "Ruby Project"
    },
    {
      "dueDate": ISODate("2014-11-23T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "JavaScript Project"
    },
    {
      "dueDate": ISODate("2014-12-14T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "PHP Project"
    }
  ],
  "exam": [
    {
      "dueDate": ISODate("2014-12-15T00:00:00.0Z"),
      "dueTime": "6:00 PM",
      "name": "Final Exam"
    }
  ],
  "quiz": [
    {
      "dueDate": ISODate("2014-09-17T00:00:00.0Z"),
      "dueTime": "6:00 PM",
      "name": "Regex Quiz"
    },
    {
      "dueDate": ISODate("2014-10-06T00:00:00.0Z"),
      "dueTime": "6:00 PM",
      "name": "Shell Quiz"
    },
    {
      "dueDate": ISODate("2014-10-22T00:00:00.0Z"),
      "dueTime": "6:00 PM",
      "name": "Ruby Quiz"
    },
    {
      "dueDate": ISODate("2014-11-12T00:00:00.0Z"),
      "dueTime": "6:00 PM",
      "name": "JavaScript Quiz"
    },
    {
      "dueDate": ISODate("2014-12-01T00:00:00.0Z"),
      "dueTime": "6:00 PM",
      "name": "PHP Quiz"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("540f8996975a44efd1cd1428"),
  "catalogId": "CMSC421",
  "classRoom": "ITE 229",
  "courseCredit": NumberInt(3),
  "courseName": "Principles of Operating Systems",
  "createdBy": "dylwhich@umbc.edu",
  "createdOn": ISODate("2014-09-09T23:13:26.711Z"),
  "email": "kalpakis@umbc.edu",
  "endTime": "3:45 PM",
  "enrolledCount": NumberInt(1),
  "exam": [
    {
      "dueDate": ISODate("2014-12-12T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Final"
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946d975ab33153700327"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed",
  "section": NumberInt(1),
  "startTime": "2:30 PM",
  "version": NumberLong(4),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:45:49.499Z"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-22T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "1.6, 1.19, 1.21, and 1.27 on pages 50-52 of OSC"
    },
    {
      "dueDate": ISODate("2014-09-26T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Project 0"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("541078d5975a44efd1cd1441"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-08T00:00:00.0Z"),
      "dueTime": "7:10 PM",
      "name": "WAW 155-165"
    },
    {
      "dueDate": ISODate("2014-09-10T00:00:00.0Z"),
      "dueTime": "7:10 PM",
      "name": "WAW 12-14"
    },
    {
      "dueDate": ISODate("2014-09-10T00:00:00.0Z"),
      "dueTime": "7:10 PM",
      "name": "LS 17-19(w4a), 28-29(w4e)"
    },
    {
      "dueDate": ISODate("2014-09-15T00:00:00.0Z"),
      "dueTime": "7:10 PM",
      "name": "WAW 16-25"
    },
    {
      "dueDate": ISODate("2014-09-17T00:00:00.0Z"),
      "dueTime": "7:10 PM",
      "name": "LS 102-3 (r4d) 95-7 (r3a r3b)"
    },
    {
      "dueDate": ISODate("2014-10-01T00:00:00.0Z"),
      "dueTime": "7:10 PM",
      "name": "WAW 69 - 70"
    },
    {
      "dueDate": ISODate("2014-10-06T00:00:00.0Z"),
      "dueTime": "7:10 PM",
      "name": "LS 19 -25 (w4b)"
    },
    {
      "dueDate": ISODate("2014-10-20T00:00:00.0Z"),
      "dueTime": "7:10 PM",
      "name": "WAW 27 - 37"
    },
    {
      "dueDate": ISODate("2014-10-29T00:00:00.0Z"),
      "dueTime": "7:10 PM",
      "name": "LS 80-6 (r1a-r1d) 88 (r1h) 66-9 (w12a - b)"
    },
    {
      "dueDate": ISODate("2014-11-12T00:00:00.0Z"),
      "dueTime": "7:10 PM",
      "name": "WAW 122-128"
    }
  ],
  "catalogId": "ENGL100",
  "classRoom": "PAHB 318",
  "courseCredit": NumberInt(3),
  "courseName": "English and Composition",
  "createdBy": "pattay1@umbc.edu",
  "createdOn": ISODate("2014-09-10T16:14:13.888Z"),
  "email": "info@edupal.co",
  "endTime": "8:25 PM",
  "enrolledCount": NumberInt(1),
  "exam": [
    {
      "dueDate": ISODate("2014-09-29T00:00:00.0Z"),
      "dueTime": "5:00 PM",
      "name": "Essay #1"
    },
    {
      "dueDate": ISODate("2014-10-22T00:00:00.0Z"),
      "dueTime": "5:00 PM",
      "name": "Essay #2"
    },
    {
      "dueDate": ISODate("2014-11-24T00:00:00.0Z"),
      "dueTime": "5:00 PM",
      "name": "Essay #3"
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946a975ab33153700293"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed",
  "misc": [
    {
      "dueDate": ISODate("2014-09-16T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "Library Literacy"
    },
    {
      "dueDate": ISODate("2014-09-26T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "Summary Due Online"
    },
    {
      "dueDate": ISODate("2014-12-08T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "Portfolio"
    }
  ],
  "quiz": [
    {
      "dueDate": ISODate("2014-09-17T00:00:00.0Z"),
      "dueTime": "5:00 PM",
      "name": "Draft Essay #1"
    },
    {
      "dueDate": ISODate("2014-10-15T00:00:00.0Z"),
      "dueTime": "5:00 PM",
      "name": "Draft Essay #2"
    },
    {
      "dueDate": ISODate("2014-11-17T00:00:00.0Z"),
      "dueTime": "5:00 PM",
      "name": "Draft Essay #3"
    }
  ],
  "section": NumberInt(3),
  "startTime": "7:10 PM",
  "version": NumberLong(1),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:45:37.282Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("54107cc2975a44efd1cd1442"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-16T00:00:00.0Z"),
      "dueTime": "5:00 PM",
      "name": "HW1"
    },
    {
      "dueDate": ISODate("2014-09-18T00:00:00.0Z"),
      "dueTime": "5:00 PM",
      "name": "HW2"
    },
    {
      "dueDate": ISODate("2014-10-02T00:00:00.0Z"),
      "dueTime": "5:00 PM",
      "name": "HW3"
    },
    {
      "dueDate": ISODate("2014-10-09T00:00:00.0Z"),
      "dueTime": "5:00 PM",
      "name": "HW4"
    },
    {
      "dueDate": ISODate("2014-10-16T00:00:00.0Z"),
      "dueTime": "5:00 PM",
      "name": "HW5"
    },
    {
      "dueDate": ISODate("2014-10-28T00:00:00.0Z"),
      "dueTime": "5:00 PM",
      "name": "HW6"
    },
    {
      "dueDate": ISODate("2014-11-06T00:00:00.0Z"),
      "dueTime": "5:00 PM",
      "name": "HW7"
    },
    {
      "dueDate": ISODate("2014-10-13T00:00:00.0Z"),
      "dueTime": "5:00 PM",
      "name": "HW8"
    }
  ],
  "catalogId": "CMSC201",
  "classRoom": "ITE 355",
  "courseCredit": NumberInt(3),
  "courseName": "Computer Science 1",
  "createdBy": "pattay1@umbc.edu",
  "createdOn": ISODate("2014-09-10T16:30:58.63Z"),
  "email": "rheingan@umbc.edu",
  "endTime": "11:15 AM",
  "enrolledCount": NumberInt(8),
  "exam": [
    {
      "dueDate": ISODate("2014-10-23T00:00:00.0Z"),
      "dueTime": "10:00 PM",
      "name": "Midterm"
    },
    {
      "dueDate": ISODate("2014-12-08T00:00:00.0Z"),
      "dueTime": "10:00 PM",
      "name": "Final"
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946d975ab3315370033e"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "misc": [
    {
      "dueDate": ISODate("2014-11-20T00:00:00.0Z"),
      "dueTime": "5:00 PM",
      "name": "Proj 1"
    },
    {
      "dueDate": ISODate("2014-12-09T00:00:00.0Z"),
      "dueTime": "5:00 PM",
      "name": "Proj 2"
    }
  ],
  "section": NumberInt(13),
  "startTime": "10:00 AM",
  "version": NumberLong(8),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:44:31.716Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5410a77e975a44efd1cd1446"),
  "catalogId": "PSYCH302",
  "classRoom": "PUP 208",
  "courseCredit": NumberInt(3),
  "courseName": "Child Maltreatment",
  "createdBy": "jhamm2@umbc.edu",
  "createdOn": ISODate("2014-09-10T19:33:18.604Z"),
  "email": "eobrien@umbc.edu",
  "endTime": "7:00 PM",
  "enrolledCount": NumberInt(1),
  "exam": [
    {
      "dueDate": ISODate("2014-09-24T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Exam 1"
    },
    {
      "dueDate": ISODate("2014-10-22T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Exam 2"
    },
    {
      "dueDate": ISODate("2014-12-15T00:00:00.0Z"),
      "dueTime": "3:30 PM",
      "name": "Final Exam"
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9476975ab33153700601"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Wed",
  "misc": [
    {
      "dueDate": ISODate("2014-11-05T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Group Projects PP due"
    }
  ],
  "section": NumberInt(1),
  "startTime": "4:30 PM",
  "version": NumberLong(2),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:44:11.512Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5410c16b975a44efd1cd144a"),
  "catalogId": "CMSC202",
  "classRoom": "Admin 101",
  "courseCredit": NumberInt(3),
  "courseName": "Intro Computer Science for Majors II",
  "createdBy": "shahir1@umbc.edu",
  "createdOn": ISODate("2014-09-10T21:23:55.250Z"),
  "email": "cmarron@umbc.edu",
  "endTime": "9:45 AM",
  "enrolledCount": NumberInt(1),
  "exam": [
    {
      "dueDate": ISODate("2014-10-22T00:00:00.0Z"),
      "dueTime": "9:45 AM",
      "name": "Midterm Exam"
    },
    {
      "dueDate": ISODate("2014-12-12T00:00:00.0Z"),
      "dueTime": "8:00 PM",
      "name": "Final Exam"
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946d975ab3315370032d"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed",
  "section": NumberInt(1),
  "startTime": "8:30 AM",
  "version": NumberLong(1),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:44:05.919Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5410c317975a44efd1cd144b"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-10T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Lab 1"
    },
    {
      "dueDate": ISODate("2014-09-17T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Lab 2"
    },
    {
      "dueDate": ISODate("2014-09-24T00:00:00.0Z"),
      "dueTime": "11:00 PM",
      "name": "Lab 3"
    },
    {
      "dueDate": ISODate("2014-10-01T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Lab 4"
    },
    {
      "dueDate": ISODate("2014-10-08T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Lab 5"
    },
    {
      "dueDate": ISODate("2014-10-15T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Lab 6"
    },
    {
      "dueDate": ISODate("2014-10-22T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Lab 7"
    },
    {
      "dueDate": ISODate("2014-10-29T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Lab 8"
    },
    {
      "dueDate": ISODate("2014-11-05T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Lab 9"
    },
    {
      "dueDate": ISODate("2014-11-12T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Lab 10"
    },
    {
      "dueDate": ISODate("2014-11-19T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Lab 11"
    },
    {
      "dueDate": ISODate("2014-12-03T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Lab 12"
    }
  ],
  "catalogId": "CMSC202",
  "classRoom": "ENGR 104A",
  "courseCredit": NumberInt(3),
  "courseName": "Computer Science 2 for Majors Discussion",
  "createdBy": "shahir1@umbc.edu",
  "createdOn": ISODate("2014-09-10T21:31:03.201Z"),
  "email": "cmarron@umbc.edu",
  "endTime": "11:00 AM",
  "enrolledCount": NumberInt(1),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946d975ab3315370032d"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Wed",
  "section": NumberInt(3),
  "startTime": "10:00 AM",
  "version": NumberLong(1),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:44:03.956Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53fbc3f8975a76b7173fe600"),
  "catalogId": "ECON101",
  "classRoom": "ITE227",
  "courseCredit": NumberInt(3),
  "courseName": "Principles of Microeconomics",
  "createdBy": "cooldan1@umbc.edu",
  "createdOn": ISODate("2014-08-25T23:17:12.993Z"),
  "email": "cbondi1@umbc.edu",
  "endTime": "11:50 AM",
  "enrolledCount": NumberInt(2),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9470975ab331537003ee"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed,Fri",
  "section": NumberInt(3),
  "startTime": "11:00 AM",
  "version": NumberLong(11),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:58:55.88Z"),
  "exam": [
    {
      "dueDate": ISODate("2014-09-29T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Exam 1: chapters 1 - 7"
    },
    {
      "dueDate": ISODate("2014-10-27T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Exam 2: Chapters 8 - 12, 14"
    },
    {
      "dueDate": ISODate("2014-11-26T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Exam 3: Chapters 15, 16, 18, 19, 20, 22"
    },
    {
      "dueDate": ISODate("2014-12-12T00:00:00.0Z"),
      "dueTime": "10:30 AM",
      "name": "Final Exam"
    }
  ],
  "assignment": [
    {
      "dueDate": ISODate("2014-09-10T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Chapter 1 - #5.  Chapter 3 - #1 (show work), #2 (if so, how?), #3 change 2011 to 2012, and answer why? and  #4."
    },
    {
      "dueDate": ISODate("2014-09-17T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Chap 4 – #5, #6, and #7. Chap 5 – #4, #5, and #6."
    },
    {
      "dueDate": ISODate("2014-09-24T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Chap 6 – #5 and #6. On both problems, use both the midpoint and “order matters”  formulas."
    },
    {
      "dueDate": ISODate("2014-10-08T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Chapter 7 #7, #8, and #9.  Chapter 8 #6 #7, and #8."
    },
    {
      "dueDate": ISODate("2014-10-15T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Chapter 10, #2, #3, #4 and #5."
    },
    {
      "dueDate": ISODate("2014-10-22T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Chapter 11 #2 and #3."
    },
    {
      "dueDate": ISODate("2014-11-05T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Chapter 15, #4 and #5."
    },
    {
      "dueDate": ISODate("2014-11-12T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Chapter 17, #3 and #4."
    },
    {
      "dueDate": ISODate("2014-11-19T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Problems 2, and 5, and also problems 1 and 2 from Appendix"
    },
    {
      "dueDate": ISODate("2014-12-03T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Chapter 22 #1; Chapter 22 Appendix #1"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5410ed7b975a44efd1cd144e"),
  "catalogId": "HIST111",
  "classRoom": "Biology 122",
  "courseCredit": NumberInt(3),
  "courseName": "Western Civilization II",
  "createdBy": "kalo3@umbc.edu",
  "createdOn": ISODate("2014-09-11T00:31:55.466Z"),
  "email": "grubb@umbc.edu",
  "endTime": "9:50 AM",
  "enrolledCount": NumberInt(2),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9472975ab331537004ae"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed,Fri",
  "misc": [
    {
      "dueDate": ISODate("2014-12-01T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Research Paper"
    },
    {
      "dueDate": ISODate("2014-10-08T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Signed Academic Integrity Sheet"
    }
  ],
  "section": NumberInt(1),
  "startTime": "9:00 AM",
  "version": NumberLong(6),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:44:02.118Z"),
  "exam": [
    {
      "dueDate": ISODate("2014-12-08T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Third Midterm"
    },
    {
      "dueDate": ISODate("2014-11-03T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Second Midterm"
    },
    {
      "dueDate": ISODate("2014-10-01T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "First Midterm"
    }
  ],
  "assignment": [
    {
      "dueDate": ISODate("2014-08-29T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Spielvogel, Ch. 13-14"
    },
    {
      "dueDate": ISODate("2014-09-05T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Spielvogel, Ch. 15"
    },
    {
      "dueDate": ISODate("2014-09-10T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Spielvogel, Ch. 16"
    },
    {
      "dueDate": ISODate("2014-09-17T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Spielvogel, Ch. 17-18"
    },
    {
      "dueDate": ISODate("2014-09-24T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Spielvogel, Ch. 19"
    },
    {
      "dueDate": ISODate("2014-10-06T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Spielvogel, Ch. 20"
    },
    {
      "dueDate": ISODate("2014-10-10T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Spielvogel, Ch. 21"
    },
    {
      "dueDate": ISODate("2014-10-17T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Spielvogel, Ch. 22-23"
    },
    {
      "dueDate": ISODate("2014-10-27T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Spielvogel, Ch. 24"
    },
    {
      "dueDate": ISODate("2014-11-05T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Spielvogel, Ch. 25"
    },
    {
      "dueDate": ISODate("2014-11-10T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Spielvogel, Ch. 26"
    },
    {
      "dueDate": ISODate("2014-11-14T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Spielvogel, Ch. 27"
    },
    {
      "dueDate": ISODate("2014-11-19T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Spielvogel, Ch. 28"
    },
    {
      "dueDate": ISODate("2014-12-01T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Spielvogel, Ch. 29-30"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5410fb14975a44efd1cd1450"),
  "assignment": [
    {
      "dueDate": ISODate("2014-08-27T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Jordan, Barry. Contemporary Spanish Cultural Studies. “How Spanish is it? Spanish cinema and National Identity” pg.s 68-78 Un chien andalou  (Luis Buñuel 1929)  Study the Membrez Film Grammar video on Blackboard"
    },
    {
      "dueDate": ISODate("2014-09-03T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Un chien andalou (Luis Buñuel 1929) Pavlović pg.s 1-8 & 21-30 Jordan, Barry and Mark Allinson. Spanish Cinema: A Student’s Guide. “Chapter 2 Film Studies Basics: technique, narrative and style”"
    },
    {
      "dueDate": ISODate("2014-09-10T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Tierra sin pan (Luis Buñuel 1933)  Pavlović pg.s 30-38 Nichols, Bill. Introduction to Documentary. “Chapter 2 Why Are Ethical Issues Central to Documentary Filmmaking?” pg.s 42-50 Mendelson, Jordana. “Contested Territory: The Politics of Geography in Luis Buñuel’s Las Hurdes: Tierra sin pan”"
    },
    {
      "dueDate": ISODate("2014-09-17T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "La niña de tus ojos (Fernando Trueba 1998) Pavlović pg.s 39-46 Mira, Alberto. The A to Z of Spanish Cinema. “españolada” & “Trueba, Fernando” D’Lugo, Marvin. Guide to the Cinema of Spain. “Trueba, Fernando” Optional: Hardcastle, Anne E. “Representing Spanish identity through españolada in Fernando Trueba's The Girl of Your Dreams (La niña de tus ojos)”"
    },
    {
      "dueDate": ISODate("2014-09-24T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "El cochecito (Marco Ferreri 1960) Presentations begin - today’s is on El cochecito Pavlović pg.s 61-66 & 81-95 Kinder, Marsha. Blood Cinema. El cochecito pg.s 113-126"
    },
    {
      "dueDate": ISODate("2014-10-01T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Viridiana (Luis Buñuel 1961) Pavlović pg.s 96-103 Berger, John. Ways of Seeing. Chapter 1."
    },
    {
      "dueDate": ISODate("2014-10-08T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Cría cuervos (Carlos Saura 1976)  Pavlović pg.s 127-139 ✪D’Lugo, Marvin. The Films of Carlos Saura: The Practice of Seeing. Cría cuervos pg.s 127-138  Receive prompt and instructions for the take-home midterm"
    },
    {
      "dueDate": ISODate("2014-10-15T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "take-home essay"
    },
    {
      "dueDate": ISODate("2014-10-22T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Pepi, Luci, Bom y otras chicas del montón (Pedro Almodóvar 1980)   Pavlović pg.s 152-169 & 178-179 Smith, Paul Julian. Desire Unlimited. “Pepi, Luci... Rhetoric and Reference” pg.s 9-21 Jameson, Frederic. “Postmodernism and Consumer Society” (pg.s 111-125) ✪D’Lugo, Marvin. Pedro Almodóvar. “Low-level melodrama.” pg.s 1-26  **DUE: Death of a Cyclist write-up to Bb and in hard copy in       class"
    },
    {
      "dueDate": ISODate("2014-10-29T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Choose and research a film (Pepi, Luci or later) for your final paper. View the film. ¿Qué he hecho yo para merecer esto! (Pedro Almodóvar 1984) Pavlović pg.s 169-177 ✪Smith, Paul Julian. Desire Unlimited. “Qué he hecho yo... gender, space, representation” pg.s 51-64"
    },
    {
      "dueDate": ISODate("2014-11-05T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Vacas (Julio Medem 1992)  Pavlović pg.s 180-202 ✪Stone, Rob. “Chapter 3: The other side of the hole: Vacas (1992)” (pg.s 36-67)  **DUE: Topic + Thesis + Evidence + Bibliography + Film Synopsis for final research paper (follow the template on Bb)"
    },
    {
      "dueDate": ISODate("2014-11-12T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Caricies (Ventura Pons 1997)  Pavlović pg.s 203-211 Jordan, Barry & Morgan-Tamosunas, Rikki. Contemporary Spanish Cinema.  ✪ “Chapter 4: Recuperating nationalist identities: film in the autonomous regions.” (pg.s 156-204)"
    },
    {
      "dueDate": ISODate("2014-11-19T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Flores de otro mundo (Icíar Bollaín 1999) Pavlović pg.s 211-218 ✪Martín-Cabrera, Luis. “Postcolonial Memories and Racial Violence in Flores de otro mundo.”  **DUE: Black Bread write-up to Bb and in hard copy in class"
    },
    {
      "dueDate": ISODate("2014-12-03T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "The Secret Life of Words (Isabel Coixet 2005) Pavlović pg.s 218-225 Graham, Helen. “Introduction.” In War and its Shadow: Spain's Civil War in Europe's Long Twentieth Century. (pg.s 1-10) ✪Evans, Jo. “Almodóvar’s ‘Others’: Spanish Women Film-makers, Masquerade, and  Modernity.”"
    },
    {
      "dueDate": ISODate("2014-12-11T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "**DUE: Final Research Paper by 4:30 to Bb and in hard copy in class"
    }
  ],
  "catalogId": "MLL213",
  "classRoom": "Sondheim 113",
  "courseCredit": NumberInt(3),
  "courseName": "Film and Society in Spain",
  "createdBy": "canim1@umbc.edu",
  "createdOn": ISODate("2014-09-11T01:29:56.878Z"),
  "email": "ekhogan@umbc.edu",
  "endTime": "7:00 PM",
  "enrolledCount": NumberInt(1),
  "exam": [
    {
      "dueDate": ISODate("2014-09-17T00:00:00.0Z"),
      "dueTime": "7:00 PM",
      "name": "Film terms with Un chien andalou & Tierra sin pan (during first hour)"
    },
    {
      "dueDate": ISODate("2014-10-15T00:00:00.0Z"),
      "dueTime": "7:00 PM",
      "name": "MIDTERM"
    },
    {
      "dueDate": ISODate("2014-12-15T00:00:00.0Z"),
      "dueTime": "5:30 PM",
      "name": "Final exam (Bollaín, Coixet, course panorama)"
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946a975ab33153700293"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Wed",
  "misc": [
    {
      "dueDate": ISODate("2014-10-22T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Presentation- D’Lugo, Marvin. Pedro Almodóvar. “Low-level melodrama.” pg.s 1-26"
    },
    {
      "dueDate": ISODate("2014-10-01T00:00:00.0Z"),
      "dueTime": "7:15 PM",
      "name": "Screening- Death of a Cyclist"
    },
    {
      "dueDate": ISODate("2014-10-22T00:00:00.0Z"),
      "dueTime": "7:15 PM",
      "name": "Screening- Black Bread"
    }
  ],
  "quiz": [
    {
      "dueDate": ISODate("2014-10-01T00:00:00.0Z"),
      "dueTime": "7:00 PM",
      "name": "Neorealism (El cochecito & Viridiana)"
    },
    {
      "dueDate": ISODate("2014-10-29T00:00:00.0Z"),
      "dueTime": "7:00 PM",
      "name": "Almodóvar"
    },
    {
      "dueDate": ISODate("2014-11-12T00:00:00.0Z"),
      "dueTime": "7:00 PM",
      "name": "Film in the autonomous regions (Vacas & Caricies)"
    }
  ],
  "section": NumberInt(1),
  "startTime": "4:30 PM",
  "version": NumberLong(1),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:44:00.253Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("541115b0975a44efd1cd1456"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-17T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Essay #1"
    },
    {
      "dueDate": ISODate("2014-09-15T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "CRL #1"
    },
    {
      "dueDate": ISODate("2014-10-06T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Essay #2"
    },
    {
      "dueDate": ISODate("2014-10-01T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "CRL #2"
    },
    {
      "dueDate": ISODate("2014-11-05T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Essay #3"
    },
    {
      "dueDate": ISODate("2014-11-03T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "CRL #3"
    },
    {
      "dueDate": ISODate("2014-11-19T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Essay #4"
    },
    {
      "dueDate": ISODate("2014-09-17T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "CRL #4"
    },
    {
      "dueDate": ISODate("2014-12-08T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Essay #5"
    },
    {
      "dueDate": ISODate("2014-12-03T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "CRL #5"
    }
  ],
  "catalogId": "ENGL100H",
  "classRoom": "Performing Arts 428",
  "courseCredit": NumberInt(3),
  "courseName": "English 100 Honors",
  "createdBy": "kwame3@umbc.edu",
  "createdOn": ISODate("2014-09-11T03:23:28.865Z"),
  "email": "mccarthy@umbc.edu",
  "endTime": "3:45 PM",
  "enrolledCount": NumberInt(1),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9471975ab33153700467"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed",
  "section": NumberInt(1),
  "startTime": "2:30 PM",
  "version": NumberLong(1),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:43:58.388Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5411bb76975a44efd1cd146b"),
  "catalogId": "MATH221",
  "classRoom": "Math Psyc 103",
  "courseCredit": NumberInt(3),
  "courseName": "Intro to Linear Algebra",
  "createdBy": "adiaz1@umbc.edu",
  "createdOn": ISODate("2014-09-11T15:10:46.840Z"),
  "email": "knanes@umbc.edu",
  "endTime": "3:45 PM",
  "enrolledCount": NumberInt(2),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9474975ab3315370053c"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed",
  "section": NumberInt(3),
  "startTime": "2:30 PM",
  "version": NumberLong(10),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:43:56.441Z"),
  "exam": [
    {
      "dueDate": ISODate("2014-09-29T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Exam 1 on Ch. 1"
    },
    {
      "dueDate": ISODate("2014-10-27T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Exam II on Ch. 2, 4.1 – 4.4"
    },
    {
      "dueDate": ISODate("2014-11-24T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Exam III on 4.5 – 6.1 and Ch. 3"
    },
    {
      "dueDate": ISODate("2014-12-12T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Final Exam"
    }
  ],
  "quiz": [
    {
      "dueDate": ISODate("2014-09-15T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Quiz 1 on 1.1 – 1.4"
    },
    {
      "dueDate": ISODate("2014-10-13T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Quiz 2 on Ch. 2 and Section 4.1"
    },
    {
      "dueDate": ISODate("2014-11-10T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Quiz 3 on 4.5 – 5.1 and Ch. 3"
    },
    {
      "dueDate": ISODate("2014-12-03T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Quiz 4 on 6.2 – 6.3"
    }
  ],
  "assignment": [
    {
      "dueDate": ISODate("2014-09-08T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "HW 1 due on 1.1 – 1.2"
    },
    {
      "dueDate": ISODate("2014-09-15T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "HW 2 due on 1.3 – 1.4"
    },
    {
      "dueDate": ISODate("2014-09-22T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "HW 3  due on 1.5 – 1.7"
    },
    {
      "dueDate": ISODate("2014-09-29T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "HW 4 due on 1.8 – 1.9"
    },
    {
      "dueDate": ISODate("2014-10-06T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "HW 5  due on 2.1 – 2.2"
    },
    {
      "dueDate": ISODate("2014-10-13T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "HW 6 due on 2.3, 4.1"
    },
    {
      "dueDate": ISODate("2014-10-20T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "HW 7 due on 4.2"
    },
    {
      "dueDate": ISODate("2014-10-27T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "HW 8 due on 4.3 – 4.4"
    },
    {
      "dueDate": ISODate("2014-11-03T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "HW 9 due on 4.5 – 4.6"
    },
    {
      "dueDate": ISODate("2014-11-10T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "HW 10 due on 3.1 – 3.2, 5.1"
    },
    {
      "dueDate": ISODate("2014-11-17T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "HW 11 due on 5.2"
    },
    {
      "dueDate": ISODate("2014-11-24T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "HW 12 due on 5.3, 6.1"
    },
    {
      "dueDate": ISODate("2014-12-01T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "HW 13 due on 6.2"
    },
    {
      "dueDate": ISODate("2014-12-08T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "HW 14 due on 6.3"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5411bfb0975a44efd1cd1475"),
  "catalogId": "CMSC313",
  "classRoom": "Sherman 015",
  "courseCredit": NumberInt(3),
  "courseName": "Computer Organization and Assembly Language",
  "createdBy": "adiaz1@umbc.edu",
  "createdOn": ISODate("2014-09-11T15:28:48.870Z"),
  "email": "tsimo1@umbc.edu",
  "endTime": "5:15 PM",
  "enrolledCount": NumberInt(3),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946d975ab33153700348"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "section": NumberInt(2),
  "startTime": "4:00 PM",
  "version": NumberLong(10),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:43:54.312Z"),
  "exam": [
    {
      "dueDate": ISODate("2014-10-15T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Midterm Exam"
    },
    {
      "dueDate": ISODate("2014-12-15T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Final Exam"
    }
  ],
  "assignment": [
    {
      "dueDate": ISODate("2014-09-08T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "HW 1"
    },
    {
      "dueDate": ISODate("2014-09-15T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "HW 2"
    },
    {
      "dueDate": ISODate("2014-11-24T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "HW 3"
    },
    {
      "dueDate": ISODate("2014-12-01T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "HW 4"
    },
    {
      "dueDate": ISODate("2014-12-08T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "HW 5"
    }
  ],
  "misc": [
    {
      "dueDate": ISODate("2014-09-22T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Project 1"
    },
    {
      "dueDate": ISODate("2014-09-29T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Project 2"
    },
    {
      "dueDate": ISODate("2014-10-06T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Project 3"
    },
    {
      "dueDate": ISODate("2014-10-13T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Project 4"
    },
    {
      "dueDate": ISODate("2014-10-27T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Project 5"
    },
    {
      "dueDate": ISODate("2014-11-03T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Project 6"
    },
    {
      "dueDate": ISODate("2014-11-10T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Project 7"
    },
    {
      "dueDate": ISODate("2014-11-17T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Project 8"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5412421c975a44efd1cd1489"),
  "catalogId": "BIOL142",
  "classRoom": "MEYR030",
  "courseCredit": NumberInt(3),
  "courseName": "Evolution and Ecology",
  "createdBy": "mishap1@umbc.edu",
  "createdOn": ISODate("2014-09-12T00:45:16.410Z"),
  "email": "tsmith6@umbc.edu",
  "endTime": "12:45 PM",
  "enrolledCount": NumberInt(10),
  "exam": [
    {
      "dueDate": ISODate("2014-09-18T00:00:00.0Z"),
      "dueTime": "12:45 PM",
      "name": "Exam 1"
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946a975ab33153700293"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "section": NumberInt(1),
  "startTime": "11:30 AM",
  "version": NumberLong(11),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:43:52.546Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("54124f74975a44efd1cd148a"),
  "catalogId": "CMSC101",
  "classRoom": "ENG231",
  "courseCredit": NumberInt(3),
  "courseName": "Computational Thinking and Design",
  "createdBy": "masseyj1@umbc.edu",
  "createdOn": ISODate("2014-09-12T01:42:12.486Z"),
  "email": "cseaman@umbc.edu",
  "endTime": "2:15 PM",
  "enrolledCount": NumberInt(4),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9473975ab331537004f3"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "section": NumberInt(4),
  "startTime": "1:00 PM",
  "version": NumberLong(10),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:43:50.762Z"),
  "exam": [
    {
      "dueDate": ISODate("2014-12-16T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Final Exam"
    }
  ],
  "misc": [
    {
      "dueDate": ISODate("2014-09-25T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "PA2"
    },
    {
      "dueDate": ISODate("2014-10-09T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "PA3"
    },
    {
      "dueDate": ISODate("2014-10-21T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Project Phase 1: Design"
    },
    {
      "dueDate": ISODate("2014-11-06T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Project Phase 2: Prototype"
    },
    {
      "dueDate": ISODate("2014-11-13T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Project Phase 3: Evaluation"
    },
    {
      "dueDate": ISODate("2014-11-20T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Project Phase 4: Poster"
    },
    {
      "dueDate": ISODate("2014-12-09T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Project Phase 5: Presentation"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("54124fea975a44efd1cd148b"),
  "catalogId": "CMSC",
  "classRoom": "ENG231",
  "courseCredit": NumberInt(3),
  "courseName": "Comp Thinking and Design Discussion",
  "createdBy": "masseyj1@umbc.edu",
  "createdOn": ISODate("2014-09-12T01:44:10.421Z"),
  "email": "susan@umbc.edu",
  "endTime": "2:00 PM",
  "enrolledCount": NumberInt(2),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("541252713219e0e56aa849b0"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Fri",
  "section": NumberInt(2),
  "startTime": "1:00 PM",
  "version": NumberLong(7),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:43:48.938Z"),
  "misc": [
    {
      "dueDate": ISODate("2014-09-12T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "JE2-StrengthsQuest  Reflection"
    },
    {
      "dueDate": ISODate("2014-09-19T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Resume and Cover Letter Drafts"
    },
    {
      "dueDate": ISODate("2014-09-26T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "JE3-Working with  Others"
    },
    {
      "dueDate": ISODate("2014-10-03T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Final Resume & Cover  Letter Due"
    },
    {
      "dueDate": ISODate("2014-10-10T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "JE4-Academic Questionnaire & Study  Habits"
    },
    {
      "dueDate": ISODate("2014-10-17T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "JE5-Career Fair"
    },
    {
      "dueDate": ISODate("2014-11-14T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "JE6: Study Habits and  Final Grades"
    },
    {
      "dueDate": ISODate("2014-12-05T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "JE6: Study Habits and  Final Grades"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("54129535975a44efd1cd148e"),
  "catalogId": "MATH221H",
  "classRoom": "MEYR256",
  "courseCredit": NumberInt(3),
  "courseName": "Intro to Linear Algebra Honors",
  "createdBy": "alsuar1@umbc.edu",
  "createdOn": ISODate("2014-09-12T06:39:49.128Z"),
  "email": "suri@umbc.edu",
  "endTime": "2:15 PM",
  "enrolledCount": NumberInt(1),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9474975ab3315370054d"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed",
  "section": NumberInt(1),
  "startTime": "1:00 PM",
  "version": NumberLong(9),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:43:47.26Z"),
  "exam": [
    {
      "dueDate": ISODate("2014-12-17T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Final Exam"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5413ae38975a44efd1cd14a2"),
  "catalogId": "CHEM102",
  "classRoom": "Information Technology\/Engr 104",
  "courseCredit": NumberInt(3),
  "courseName": "Principles of Chemistry II",
  "createdBy": "kerria1@umbc.edu",
  "createdOn": ISODate("2014-09-13T02:38:48.171Z"),
  "email": "bush@umbc.edu",
  "endTime": "11:45 AM",
  "enrolledCount": NumberInt(5),
  "exam": [
    {
      "dueDate": ISODate("2014-09-26T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Exam 1"
    },
    {
      "dueDate": ISODate("2014-10-24T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Exam 2"
    },
    {
      "dueDate": ISODate("2014-12-05T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Exam 3"
    },
    {
      "dueDate": ISODate("2014-12-12T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Final Exam"
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946c975ab331537002e3"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed,Fri",
  "section": NumberInt(2),
  "startTime": "11:00 AM",
  "version": NumberLong(5),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:43:44.766Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("54152af8975a44efd1cd14c3"),
  "catalogId": "ECON101",
  "classRoom": "Math Psyc 010",
  "courseCredit": NumberInt(3),
  "courseName": "Microeconomics",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-09-14T05:43:20.347Z"),
  "email": "ahonsowe@umbc.edu",
  "endTime": "11:15 AM",
  "enrolledCount": NumberInt(0),
  "exam": [
    {
      "dueDate": ISODate("2014-10-09T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Exam 1"
    },
    {
      "dueDate": ISODate("2014-11-25T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Exam 2"
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946a975ab33153700293"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "section": NumberInt(7),
  "startTime": "10:00 AM",
  "version": NumberLong(4),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:42:20.140Z"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-25T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "Homework 2"
    },
    {
      "dueDate": ISODate("2014-10-23T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "Homework 3"
    },
    {
      "dueDate": ISODate("2014-11-11T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "Homework 4"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("54152bc23219e0bd300cc195"),
  "catalogId": "ECON101",
  "classRoom": "Math Psyc 010",
  "courseCredit": NumberLong(3),
  "courseName": "Microeconomics",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-09-14T05:43:20.347Z"),
  "email": "ahonsowe@umbc.edu",
  "endTime": "12:45 PM",
  "enrolledCount": NumberLong(1),
  "exam": [
    {
      "dueDate": ISODate("2014-10-09T00:00:00.0Z"),
      "dueTime": "11:30 AM",
      "name": "Exam 1"
    },
    {
      "dueDate": ISODate("2014-11-25T00:00:00.0Z"),
      "dueTime": "11:30 AM",
      "name": "Exam 2"
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946a975ab33153700293"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "section": NumberLong(8),
  "startTime": "11:30 AM",
  "version": NumberLong(3),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:42:24.816Z"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-25T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "Homework 2"
    },
    {
      "dueDate": ISODate("2014-10-23T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "Homework 3"
    },
    {
      "dueDate": ISODate("2014-11-11T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "Homework 4"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5415c953975a44efd1cd14cb"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-23T00:00:00.0Z"),
      "dueTime": "12:00 AM",
      "name": "Ch2b, Ch2c, Ch3a, p. 59 2A-4, 2A-5, 2A-6, 2A-7, 2A-10, 2A-15.  p. 90 2B-3, 2B-4, 2B-5, 2B-6, 2B-8, 2B-11, 2B-15, 2B-20."
    },
    {
      "dueDate": ISODate("2014-09-23T00:00:00.0Z"),
      "dueTime": "12:00 AM",
      "name": "Group Project Deliverable 1"
    },
    {
      "dueDate": ISODate("2014-09-30T00:00:00.0Z"),
      "dueTime": "5:00 PM",
      "name": "In-Class assignment 1"
    },
    {
      "dueDate": ISODate("2014-10-07T00:00:00.0Z"),
      "dueTime": "12:00 AM",
      "name": "Homework 2"
    }
  ],
  "catalogId": "IS420",
  "classRoom": "nformation Technology 469",
  "courseCredit": NumberInt(3),
  "courseName": "Database Application Development",
  "createdBy": "kf05813@umbc.edu",
  "createdOn": ISODate("2014-09-14T16:58:59.459Z"),
  "email": "kirsten5@umbc.edu",
  "endTime": "7:00 PM",
  "enrolledCount": NumberInt(2),
  "exam": [
    {
      "dueDate": ISODate("2014-10-14T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Midterm Exam"
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946a975ab33153700293"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue",
  "misc": [
    {
      "dueDate": ISODate("2014-09-13T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Read Chapter 2c, 3a&c"
    },
    {
      "dueDate": ISODate("2014-09-27T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Read Chapter 3b"
    },
    {
      "dueDate": ISODate("2014-10-04T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Read Chapter 4a, 5a"
    },
    {
      "dueDate": ISODate("2014-10-11T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Review For 420 exam"
    }
  ],
  "section": NumberInt(3),
  "startTime": "4:30 PM",
  "version": NumberLong(3),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:42:16.573Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5415d198975a44efd1cd14ce"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-15T00:00:00.0Z"),
      "dueTime": "11:45 PM",
      "name": "3.\tWrite the article citation in APA format and email it to the professor for approval.  [*Note: All Request for APA Citation approvals for Article Review 1 are due by Monday 9\/15\/2014 by 11:59pm.  Any Requests for APA Citation approvals, for Article Review 1 , sent after 9\/15\/2014 will not be accepted]"
    },
    {
      "dueDate": ISODate("2014-10-02T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "ASSIGNMENT: (Article Review 1 & Presentation 1)) Due Date: 10\/02\/2014 by 1:00pm"
    },
    {
      "dueDate": ISODate("2014-09-23T00:00:00.0Z"),
      "dueTime": "11:45 PM",
      "name": "ASSIGNMENT: (Definitions): Due Date: 9\/23\/2014 by 11:59pm."
    },
    {
      "dueDate": ISODate("2014-10-23T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "PREPARATION for (Article Review 2):"
    }
  ],
  "catalogId": "IS369",
  "classRoom": "Information Technology 458",
  "courseCredit": NumberInt(3),
  "courseName": "Research: Writings In IS",
  "createdBy": "kf05813@umbc.edu",
  "createdOn": ISODate("2014-09-14T17:34:16.363Z"),
  "email": "je09498@umbc.edu",
  "endTime": "2:15 PM",
  "enrolledCount": NumberInt(1),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946a975ab33153700293"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "quiz": [
    {
      "dueDate": ISODate("2014-10-16T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "quiz 1"
    },
    {
      "dueDate": ISODate("2014-11-04T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "quiz 2"
    }
  ],
  "section": NumberInt(1),
  "startTime": "1:00 PM",
  "version": NumberLong(2),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:41:39.342Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5415c5af975a44efd1cd14ca"),
  "catalogId": "IS451",
  "classRoom": "Performing Arts & Humanities 107",
  "courseCredit": NumberInt(3),
  "courseName": "Network Design & Mgmt",
  "createdBy": "kf05813@umbc.edu",
  "createdOn": ISODate("2014-09-14T16:43:27.982Z"),
  "email": "dgorin1@umbc.edu",
  "endTime": "12:45 PM",
  "enrolledCount": NumberInt(1),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946a975ab33153700293"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "section": NumberInt(1),
  "startTime": "11:30 AM",
  "version": NumberLong(4),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:42:18.298Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5415d316975a44efd1cd14cf"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-17T00:00:00.0Z"),
      "dueTime": "1:45 PM",
      "name": "Weekly Journal, (10 submissions)"
    },
    {
      "dueDate": ISODate("2014-09-20T00:00:00.0Z"),
      "dueTime": "1:45 PM",
      "name": "Required Reading (3 periodical Articles)"
    },
    {
      "dueDate": ISODate("2014-10-10T00:00:00.0Z"),
      "dueTime": "1:45 PM",
      "name": "10-15 page summary paper"
    }
  ],
  "catalogId": "IS399",
  "classRoom": "myer30",
  "courseCredit": NumberInt(3),
  "courseName": "Internship",
  "createdBy": "kf05813@umbc.edu",
  "createdOn": ISODate("2014-09-14T17:40:38.27Z"),
  "email": "sampath@umbc.edu",
  "endTime": "1:45 PM",
  "enrolledCount": NumberInt(1),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9473975ab331537004f2"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Sat,Sun",
  "misc": [
    {
      "dueDate": ISODate("2014-09-27T00:00:00.0Z"),
      "dueTime": "1:45 PM",
      "name": "do summary paper part 1"
    },
    {
      "dueDate": ISODate("2014-09-28T00:00:00.0Z"),
      "dueTime": "1:45 PM",
      "name": "do summary paper part 2"
    }
  ],
  "section": NumberInt(1),
  "startTime": "1:45 PM",
  "version": NumberLong(2),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:41:36.870Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5415e109975a44efd1cd14d1"),
  "catalogId": "IS101",
  "classRoom": "Sherman 150",
  "courseCredit": NumberInt(3),
  "courseName": "Intro to Computer Based Systems",
  "createdBy": "jipark3@umbc.edu",
  "createdOn": ISODate("2014-09-14T18:40:09.504Z"),
  "email": "ozok@umbc.edu",
  "endTime": "2:15 PM",
  "enrolledCount": NumberInt(0),
  "exam": [
    {
      "dueDate": ISODate("2014-11-06T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Exam 2 Chapters 5-8"
    },
    {
      "dueDate": ISODate("2014-12-02T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Exam 3 Chapters 9-12"
    },
    {
      "dueDate": ISODate("2014-10-07T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Exam 1"
    },
    {
      "dueDate": ISODate("2014-12-16T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Final Exam"
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9473975ab331537004e5"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "section": NumberInt(1),
  "startTime": "1:00 PM",
  "version": NumberLong(4),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:41:35.36Z"),
  "misc": [
    {
      "dueDate": ISODate("2014-12-16T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Final Project (paper copy due in class and electronic before class)"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5415ec6e975a44efd1cd14d4"),
  "catalogId": "CHIN101",
  "classRoom": "Physics 107",
  "courseCredit": NumberInt(3),
  "courseName": "Elementary Chinese I",
  "createdBy": "jipark3@umbc.edu",
  "createdOn": ISODate("2014-09-14T19:28:46.409Z"),
  "email": "zhouc1@umbc.edu",
  "endTime": "3:45 PM",
  "enrolledCount": NumberInt(2),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9475975ab33153700594"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed",
  "section": NumberInt(2),
  "startTime": "2:30 PM",
  "version": NumberLong(8),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:41:31.479Z"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-22T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Workbook and Character Exercises"
    },
    {
      "dueDate": ISODate("2014-10-09T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Workbook and Character Exercises"
    },
    {
      "dueDate": ISODate("2014-10-23T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Workbook and Character Exercises"
    },
    {
      "dueDate": ISODate("2014-11-13T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Workbook and Character Exercises"
    },
    {
      "dueDate": ISODate("2014-11-26T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Workbook and Character Exercises"
    }
  ],
  "exam": [
    {
      "dueDate": ISODate("2014-09-29T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Exam 1"
    },
    {
      "dueDate": ISODate("2014-10-27T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Exam 2"
    },
    {
      "dueDate": ISODate("2014-12-12T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Final Exam"
    }
  ],
  "misc": [
    {
      "dueDate": ISODate("2014-09-08T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Dictation #1"
    },
    {
      "dueDate": ISODate("2014-09-22T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Dictation #2"
    },
    {
      "dueDate": ISODate("2014-10-09T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Dictation #3"
    },
    {
      "dueDate": ISODate("2014-10-23T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Dictation #4"
    },
    {
      "dueDate": ISODate("2014-11-13T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Dictation #5"
    },
    {
      "dueDate": ISODate("2014-11-26T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Dictation #6"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5414e408975a44efd1cd14be"),
  "catalogId": "CMSC202",
  "classRoom": "ITE104",
  "courseCredit": NumberInt(3),
  "courseName": "Computer Science 2 for Majors",
  "createdBy": "sav3@umbc.edu",
  "createdOn": ISODate("2014-09-14T00:40:40.593Z"),
  "email": "park@umbc.edu",
  "endTime": "2:15 PM",
  "enrolledCount": NumberInt(2),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946d975ab33153700338"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "section": NumberInt(6),
  "startTime": "1:00 PM",
  "version": NumberLong(6),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:43:26.606Z"),
  "exam": [
    {
      "dueDate": ISODate("2014-10-23T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "MidTerm"
    },
    {
      "dueDate": ISODate("2014-12-12T00:00:00.0Z"),
      "dueTime": "6:00 PM",
      "name": "Final Exam"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("54164f2c975a44efd1cd14e1"),
  "catalogId": "MATH151",
  "classRoom": "Admin101",
  "courseCredit": NumberInt(3),
  "courseName": "Calculus 1",
  "createdBy": "dakota2@umbc.edu",
  "createdOn": ISODate("2014-09-15T02:30:04.209Z"),
  "email": "tbudimir@umbc.edu",
  "endTime": "12:45 PM",
  "enrolledCount": NumberInt(0),
  "exam": [
    {
      "dueDate": ISODate("2014-09-30T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "2.1-3.3"
    },
    {
      "dueDate": ISODate("2014-10-28T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "3.4-4.3"
    },
    {
      "dueDate": ISODate("2014-12-02T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "4.4-5.4"
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("540e2f753219e05717a849b0"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "quiz": [
    {
      "dueDate": ISODate("2014-09-16T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "2.4-2.5"
    },
    {
      "dueDate": ISODate("2014-09-23T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "2.6-2.8"
    },
    {
      "dueDate": ISODate("2014-10-07T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "3.4"
    },
    {
      "dueDate": ISODate("2014-10-07T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "3.5-3.9"
    },
    {
      "dueDate": ISODate("2014-11-04T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "4.4"
    },
    {
      "dueDate": ISODate("2014-11-11T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "4.5-4.7"
    },
    {
      "dueDate": ISODate("2014-11-18T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "4.8-4.9"
    },
    {
      "dueDate": ISODate("2014-11-25T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "5.1-5.2"
    },
    {
      "dueDate": ISODate("2014-12-09T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "5.5"
    }
  ],
  "section": NumberInt(1),
  "startTime": "11:15 AM",
  "version": NumberLong(5),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:41:29.656Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("54165591975a44efd1cd14e2"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-15T00:00:00.0Z"),
      "dueTime": "10:30 AM",
      "name": "EJ p. 147-158 & p.169-196"
    },
    {
      "dueDate": ISODate("2014-09-17T00:00:00.0Z"),
      "dueTime": "10:30 AM",
      "name": "EJ p.216-224 and WaW p.16-25"
    },
    {
      "dueDate": ISODate("2014-09-22T00:00:00.0Z"),
      "dueTime": "10:30 AM",
      "name": "EJ p.237-250 and 257-271"
    },
    {
      "dueDate": ISODate("2014-09-22T00:00:00.0Z"),
      "dueTime": "10:30 AM",
      "name": "full draft of Essay #1—submit to Box and at Bb Discussion Board—bring 1 printed copy"
    },
    {
      "dueDate": ISODate("2014-09-24T00:00:00.0Z"),
      "dueTime": "10:30 AM",
      "name": "revise your draft of Essay #1, based on feedback from 9\/22—bring 1 printed copy"
    },
    {
      "dueDate": ISODate("2014-09-29T00:00:00.0Z"),
      "dueTime": "10:30 AM",
      "name": "finish Bb peer review and WaW p.1-11"
    },
    {
      "dueDate": ISODate("2014-10-01T00:00:00.0Z"),
      "dueTime": "10:30 AM",
      "name": "final draft of Essay #1, including your one-paragraph summary of instructor comments done on 9\/29—submit to Box and at Bb Discussion Board"
    },
    {
      "dueDate": ISODate("2014-10-06T00:00:00.0Z"),
      "dueTime": "10:30 AM",
      "name": "TS\/IS p.1-14 and WaW p. 27-31 (stop at “Framing…”)"
    },
    {
      "dueDate": ISODate("2014-10-08T00:00:00.0Z"),
      "dueTime": "10:30 AM",
      "name": "Library assignment—videos, quiz, and library visit must be completed"
    },
    {
      "dueDate": ISODate("2014-09-08T00:00:00.0Z"),
      "dueTime": "10:30 AM",
      "name": "LSH p.82-86 (section R-1d) and 92-95 (section R-2)"
    },
    {
      "dueDate": ISODate("2014-10-13T00:00:00.0Z"),
      "dueTime": "10:30 AM",
      "name": "TS\/IS p.19-28 and LSH p.10-11 (section W-3b) and 28-29 (section W-4e)"
    },
    {
      "dueDate": ISODate("2014-10-15T00:00:00.0Z"),
      "dueTime": "10:30 AM",
      "name": "Decide: your choice of one research question for Essay #2"
    },
    {
      "dueDate": ISODate("2014-10-15T00:00:00.0Z"),
      "dueTime": "10:30 AM",
      "name": "TS\/IS p.30-40 and 42-50, and LSH p.106-108"
    },
    {
      "dueDate": ISODate("2014-10-15T00:00:00.0Z"),
      "dueTime": "10:30 AM",
      "name": "BbQuizzes & Resources Videos & Helpful LinksUNC’s Planning & Revision handouts and videos“Why We Cite” and “How We Cite”"
    },
    {
      "dueDate": ISODate("2014-10-20T00:00:00.0Z"),
      "dueTime": "10:30 AM",
      "name": "first full page of Essay #2 draft—bring 5 printed copies"
    },
    {
      "dueDate": ISODate("2014-10-22T00:00:00.0Z"),
      "dueTime": "10:30 AM",
      "name": "revise your first full page of Essay #2 based on feedback from 10\/20, and write at least one more full page—bring 5 printed copies"
    },
    {
      "dueDate": ISODate("2014-10-27T00:00:00.0Z"),
      "dueTime": "10:30 AM",
      "name": "annotated bibliography and TS\/IS p.55-75"
    },
    {
      "dueDate": ISODate("2014-10-29T00:00:00.0Z"),
      "dueTime": "10:30 AM",
      "name": "“Plagiarism Lines Blur…” at Bb Quizzes and ResourcesResearch and Documentation, and Avoiding PlagiarismPlagiarism article"
    },
    {
      "dueDate": ISODate("2014-11-03T00:00:00.0Z"),
      "dueTime": "10:30 AM",
      "name": "full draft of Essay #2—submit to Box and at Bb Discussion Board—bring 1 printed copy"
    },
    {
      "dueDate": ISODate("2014-11-05T00:00:00.0Z"),
      "dueTime": "10:30 AM",
      "name": "revise your draft of Essay #2, based on feedback from 11\/3—bring 1 printed copy"
    },
    {
      "dueDate": ISODate("2014-11-10T00:00:00.0Z"),
      "dueTime": "10:30 AM",
      "name": "finish Bb peer review and video at BbQuizzes and Resources Videos and Helpful Links“Click HERE: UNC’s Planning and Revision Handouts and Videos” “Reverse Outlining”"
    },
    {
      "dueDate": ISODate("2014-11-12T00:00:00.0Z"),
      "dueTime": "10:30 AM",
      "name": "final draft of Essay #2, including your one-paragraph summary of instructor comments done on 9\/29—submit to Box and at Bb Discussion Board"
    },
    {
      "dueDate": ISODate("2014-11-17T00:00:00.0Z"),
      "dueTime": "10:45 AM",
      "name": "rhetorical analysis Step 5 and WaW p.111-116"
    },
    {
      "dueDate": ISODate("2014-11-19T00:00:00.0Z"),
      "dueTime": "10:45 AM",
      "name": "rhetorical analysis Step 8—secretary for each group brings 1 printed copy and WaW p.100-107"
    },
    {
      "dueDate": ISODate("2014-11-26T00:00:00.0Z"),
      "dueTime": "10:30 AM",
      "name": "plan for Essay #3 (1 paper copy), also at least two samples of writing in different media"
    },
    {
      "dueDate": ISODate("2014-12-01T00:00:00.0Z"),
      "dueTime": "10:30 AM",
      "name": "plan for Essay #3 (1 paper copy), also at least two samples of writing in different media"
    },
    {
      "dueDate": ISODate("2014-12-03T00:00:00.0Z"),
      "dueTime": "10:30 AM",
      "name": "revise your draft of Essay #3, based on feedback from 12\/3—submit to Bb Discussion Board"
    },
    {
      "dueDate": ISODate("2014-12-08T00:00:00.0Z"),
      "dueTime": "10:30 AM",
      "name": "Final draft Essay #3 due, including analysis\/reflection assignment"
    }
  ],
  "catalogId": "ENGL101",
  "classRoom": "Performing Arts 314",
  "courseCredit": NumberInt(3),
  "courseName": "Intro into composition",
  "createdBy": "dakota2@umbc.edu",
  "createdOn": ISODate("2014-09-15T02:57:21.155Z"),
  "email": "shivnan@umbc.edu",
  "endTime": "11:45 AM",
  "enrolledCount": NumberInt(1),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9472975ab33153700470"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed",
  "misc": [
    {
      "dueDate": ISODate("2014-09-23T00:00:00.0Z"),
      "dueTime": "10:30 AM",
      "name": "Enrique’s Journey author Sonia Nazario 7:00 pm in the UC Ballroom —ATTENDANCE MANDATORY unless you have a class\/work conflict"
    }
  ],
  "section": NumberInt(1),
  "startTime": "10:30 AM",
  "version": NumberLong(3),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:41:27.841Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("54169534975a44efd1cd14e6"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-03T00:00:00.0Z"),
      "dueTime": "1:30 PM",
      "name": "aa"
    },
    {
      "dueDate": ISODate("2014-09-02T00:00:00.0Z"),
      "dueTime": "1:30 PM",
      "name": "a"
    }
  ],
  "catalogId": "AA",
  "classRoom": "aa",
  "courseCredit": NumberInt(3),
  "courseName": "aa",
  "createdBy": "student@test.edu",
  "createdOn": ISODate("2014-09-15T07:28:52.875Z"),
  "email": "oates@umbc.edu",
  "endTime": "1:30 PM",
  "enrolledCount": NumberInt(0),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946d975ab33153700335"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Tue,Wed,Thu",
  "quiz": [
    {
      "dueDate": ISODate("2014-09-02T00:00:00.0Z"),
      "dueTime": "1:30 PM",
      "name": "a"
    }
  ],
  "section": NumberInt(1),
  "startTime": "1:30 PM",
  "version": NumberLong(4),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:41:26.75Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("54174c7c975a44efd1cd14fb"),
  "catalogId": "ENME220",
  "classRoom": "Engineering 027",
  "courseCredit": NumberInt(3),
  "courseName": "Mechanics of Materials",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-09-15T20:30:52.694Z"),
  "email": "panos@umbc.edu",
  "endTime": "11:15 AM",
  "enrolledCount": NumberInt(1),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9474975ab33153700551"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "section": NumberInt(1),
  "startTime": "10:00 AM",
  "version": NumberLong(8),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:41:22.544Z"),
  "exam": [
    {
      "dueDate": ISODate("2014-10-16T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Exam 1 (Chapters 1 - 5)"
    },
    {
      "dueDate": ISODate("2014-12-02T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Exam 2 (Chapters 5 - 8)"
    },
    {
      "dueDate": ISODate("2014-12-19T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Final Exam"
    }
  ],
  "quiz": [
    {
      "dueDate": ISODate("2014-09-25T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Q - KK & NG"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("541777c3975a44efd1cd1500"),
  "catalogId": "ENTR201",
  "classRoom": "Meyerhoff 272",
  "courseCredit": NumberInt(3),
  "courseName": "The Entrepreneurial Mindset",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-09-15T23:35:31.857Z"),
  "email": "gibmason@umbc.edu",
  "endTime": "7:00 PM",
  "enrolledCount": NumberInt(2),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946d975ab331537002f5"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon",
  "section": NumberInt(1),
  "startTime": "4:30 PM",
  "version": NumberLong(21),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:41:20.721Z"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-22T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "Infusion 2 DUE 3AM"
    },
    {
      "dueDate": ISODate("2014-09-29T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "Infusion 3 DUE 3AM"
    },
    {
      "dueDate": ISODate("2014-10-13T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "Infusion 4 DUE 3AM"
    },
    {
      "dueDate": ISODate("2014-10-20T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "Infusion 5 DUE 3AM"
    },
    {
      "dueDate": ISODate("2014-10-27T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "Infusion 6 DUE 3AM"
    },
    {
      "dueDate": ISODate("2014-11-03T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "Infusion 7 DUE 3AM"
    },
    {
      "dueDate": ISODate("2014-11-17T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "Infusion 8 DUE 3AM"
    },
    {
      "dueDate": ISODate("2014-12-01T00:00:00.0Z"),
      "dueTime": "11:30 PM",
      "name": "Infusion 9 DUE 3AM"
    }
  ],
  "misc": [
    {
      "dueDate": ISODate("2014-10-06T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Field Trip"
    },
    {
      "dueDate": ISODate("2014-09-22T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Team C Pink (Chpt. 2) &  Team D Pink (Chpt. 3)"
    },
    {
      "dueDate": ISODate("2014-09-29T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Team E Pink (Chpt. 4)  & Team F Pink (Chpt. 5)"
    },
    {
      "dueDate": ISODate("2014-10-13T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Team A Pink (Chpt. 6)  & Team B Pink (Chpt. 7)"
    },
    {
      "dueDate": ISODate("2014-10-20T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Team C Pink (Chpt. 8)  & Team D Pink (Chpt. 9)"
    },
    {
      "dueDate": ISODate("2014-10-27T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Team E McGrath (Chpt. 1-2)"
    },
    {
      "dueDate": ISODate("2014-10-20T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Term Paper Outline  All Teams"
    },
    {
      "dueDate": ISODate("2014-11-03T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Team F McGrath (Chpt. 3) & Team A McGrath (Chpt. 4)"
    },
    {
      "dueDate": ISODate("2014-11-10T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Team B McGrath (Chpt. 5-6) & Team C & F Interviews"
    },
    {
      "dueDate": ISODate("2014-11-17T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Team C McGrath (Chpt. 7-8) & Team D & E Interviews"
    },
    {
      "dueDate": ISODate("2014-11-24T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Team D McGrath (Ch. 9-10) & Team A & B Interviews"
    },
    {
      "dueDate": ISODate("2014-12-01T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Team E McGrath (Ch. 11) & Team F McGrath (Ch 12-13)"
    },
    {
      "dueDate": ISODate("2014-12-08T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Presentations, Term Paper, Peer Evaluations: ALL TEAMS"
    },
    {
      "dueDate": ISODate("2014-11-10T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Term Paper All"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5417928c975a44efd1cd1501"),
  "catalogId": "ECON102",
  "classRoom": "ITE456",
  "courseCredit": NumberInt(3),
  "courseName": "Macroeconomics",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-09-16T01:29:48.247Z"),
  "email": "nandita@umbc.edu",
  "endTime": "8:50 AM",
  "enrolledCount": NumberInt(0),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946e975ab3315370036e"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed,Fri",
  "section": NumberInt(1),
  "startTime": "8:00 AM",
  "version": NumberLong(4),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:41:17.22Z"),
  "exam": [
    {
      "dueDate": ISODate("2014-09-08T00:00:00.0Z"),
      "dueTime": "8:00 AM",
      "name": "Examination 1"
    },
    {
      "dueDate": ISODate("2014-09-22T00:00:00.0Z"),
      "dueTime": "8:00 AM",
      "name": "Examination 2"
    },
    {
      "dueDate": ISODate("2014-10-06T00:00:00.0Z"),
      "dueTime": "8:00 AM",
      "name": "Examination 3"
    },
    {
      "dueDate": ISODate("2014-10-20T00:00:00.0Z"),
      "dueTime": "8:00 AM",
      "name": "Examination 4"
    },
    {
      "dueDate": ISODate("2014-11-03T00:00:00.0Z"),
      "dueTime": "8:00 AM",
      "name": "Examination 5"
    },
    {
      "dueDate": ISODate("2014-11-24T00:00:00.0Z"),
      "dueTime": "8:00 AM",
      "name": "Examination 6"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5417961c3219e018430cc195"),
  "catalogId": "ECON102",
  "classRoom": "ITE456",
  "courseCredit": NumberLong(3),
  "courseName": "Macroeconomics",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-09-16T01:29:48.247Z"),
  "email": "nandita@umbc.edu",
  "endTime": "9:50 AM",
  "enrolledCount": NumberLong(1),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946e975ab3315370036e"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed,Fri",
  "section": NumberLong(2),
  "startTime": "9:00 AM",
  "version": NumberLong(3),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:41:18.895Z"),
  "exam": [
    {
      "dueDate": ISODate("2014-09-08T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Examination 1"
    },
    {
      "dueDate": ISODate("2014-09-22T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Examination 2"
    },
    {
      "dueDate": ISODate("2014-10-06T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Examination 3"
    },
    {
      "dueDate": ISODate("2014-10-20T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Examination 4"
    },
    {
      "dueDate": ISODate("2014-11-03T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Examination 5"
    },
    {
      "dueDate": ISODate("2014-11-24T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Examination 6"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5417977a975a44efd1cd1503"),
  "catalogId": "ENES101Y",
  "classRoom": "ITE237",
  "courseCredit": NumberInt(3),
  "courseName": "Intro to Engineering Y Section",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-09-16T01:50:50.112Z"),
  "email": "eastephe@umbc.edu",
  "endTime": "11:50 AM",
  "enrolledCount": NumberInt(1),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("541798963219e018430cc196"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Wed",
  "section": NumberInt(1),
  "startTime": "11:00 AM",
  "version": NumberLong(5),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:41:14.852Z"),
  "misc": [
    {
      "dueDate": ISODate("2014-09-17T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Paper number 1 due Paragraph about your  engineering discipline"
    },
    {
      "dueDate": ISODate("2014-09-24T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Journal Schedule grid"
    },
    {
      "dueDate": ISODate("2014-10-01T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Ideal schedule, Schedule grid  #2, and journal response"
    },
    {
      "dueDate": ISODate("2014-10-15T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Resume and Cover Letter  Due Please have the name of the  person you will be interviewing  for Assignment #4 and at least  eight interview questions  prepared"
    },
    {
      "dueDate": ISODate("2014-10-22T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Chapter 7, question 7 due"
    },
    {
      "dueDate": ISODate("2014-10-29T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Chapter 8, question 10 due"
    },
    {
      "dueDate": ISODate("2014-11-05T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Assignment #4: Professional"
    },
    {
      "dueDate": ISODate("2014-11-19T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Presentation Day"
    },
    {
      "dueDate": ISODate("2014-12-03T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Reflection paper Campus Events Due"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("54174b5f975a44efd1cd14fa"),
  "catalogId": "STAT355",
  "classRoom": "Physics 101",
  "courseCredit": NumberInt(3),
  "courseName": "Intro to Probability and Stat for Sci\/Eng",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-09-15T20:26:07.925Z"),
  "email": "anindya@umbc.edu",
  "endTime": "6:45 PM",
  "enrolledCount": NumberInt(2),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9474975ab33153700545"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "section": NumberInt(4),
  "startTime": "5:30 PM",
  "version": NumberLong(7),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:41:24.286Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("541890e6975a44efd1cd150f"),
  "assignment": [
    {
      "dueDate": ISODate("2014-10-01T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Paper 5"
    }
  ],
  "catalogId": "POLI471",
  "classRoom": "Engineering",
  "courseCredit": NumberInt(3),
  "courseName": "Transitional Justice",
  "createdBy": "hl55170@umbc.edu",
  "createdOn": ISODate("2014-09-16T19:35:02.213Z"),
  "email": "bgrodsky@umbc.edu",
  "endTime": "7:00 PM",
  "enrolledCount": NumberInt(1),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9476975ab331537005d9"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Wed",
  "section": NumberInt(1),
  "startTime": "4:30 PM",
  "version": NumberLong(6),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:41:12.838Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5418c3a9975a44efd1cd1513"),
  "assignment": [
    {
      "dueDate": ISODate("2014-10-02T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Online Assignment"
    }
  ],
  "catalogId": "POLI395",
  "classRoom": "Sondheim 207",
  "courseCredit": NumberInt(3),
  "courseName": "US national Security Policy",
  "createdBy": "hl55170@umbc.edu",
  "createdOn": ISODate("2014-09-16T23:11:37.558Z"),
  "email": "bstarkey@umbc.edu",
  "endTime": "2:15 PM",
  "enrolledCount": NumberInt(1),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9476975ab331537005e7"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "section": NumberInt(1),
  "startTime": "1:00 PM",
  "version": NumberLong(4),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:41:11.173Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5418c4f0975a44efd1cd1514"),
  "assignment": [
    {
      "dueDate": ISODate("2014-10-02T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Middle Power Paper"
    }
  ],
  "catalogId": "POLI467",
  "classRoom": "PUP 304",
  "courseCredit": NumberInt(3),
  "courseName": "Comparative Foreign Policy",
  "createdBy": "hl55170@umbc.edu",
  "createdOn": ISODate("2014-09-16T23:17:04.850Z"),
  "email": "bstarkey@umbc.edu",
  "endTime": "7:00 PM",
  "enrolledCount": NumberInt(1),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9476975ab331537005e7"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Thu",
  "section": NumberInt(1),
  "startTime": "4:30 PM",
  "version": NumberLong(3),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:41:09.147Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5418edeb975a44efd1cd151b"),
  "catalogId": "ENGL100",
  "classRoom": "PAHB318",
  "courseCredit": NumberInt(3),
  "courseName": "First Year Composition",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-09-17T02:11:55.65Z"),
  "email": "afiore@umbc.edu",
  "endTime": "5:15 PM",
  "enrolledCount": NumberInt(1),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946a975ab33153700293"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed",
  "section": NumberInt(22),
  "startTime": "4:00 PM",
  "version": NumberLong(9),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:41:03.926Z"),
  "misc": [
    {
      "dueDate": ISODate("2014-12-07T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Argument Essay Due in Box  Folder & on SafeAssign."
    },
    {
      "dueDate": ISODate("2014-12-01T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Argument Essay:  Full Draft Due. Rewrites."
    },
    {
      "dueDate": ISODate("2014-11-24T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Possible thesis  ideas and 2  Sources."
    },
    {
      "dueDate": ISODate("2014-11-16T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Essay # 3 : Final Drafts Due in  Box Folder & on SafeAssign."
    },
    {
      "dueDate": ISODate("2014-11-10T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Essay #3: Full  Draft due in Box  Folder."
    },
    {
      "dueDate": ISODate("2014-11-05T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Revised Proposal;  Essay #3: Intro &  First Body  Paragraphs"
    },
    {
      "dueDate": ISODate("2014-11-03T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Research  Proposals Due"
    },
    {
      "dueDate": ISODate("2014-10-27T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Groups 3&4:  Summary &  Discussion  Questions."
    },
    {
      "dueDate": ISODate("2014-10-23T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Groups 1&2:  Summary &  Discussion  Questions. ."
    },
    {
      "dueDate": ISODate("2014-10-19T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Essay #2 (final) Due in Box  Folder & SafeAssign by  11:59pm"
    },
    {
      "dueDate": ISODate("2014-10-13T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "First Draft Essay  #2"
    },
    {
      "dueDate": ISODate("2014-10-08T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Essay #2: Intro &  first body  paragraph"
    },
    {
      "dueDate": ISODate("2014-10-06T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Groups 3&4:  Summary &  Discussion  Questions."
    },
    {
      "dueDate": ISODate("2014-10-01T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Groups 1&2:  Summary &  Discussion  Questions."
    },
    {
      "dueDate": ISODate("2014-09-29T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Essay #1 Due in  Due in Box Folder  & on SafeAssign."
    },
    {
      "dueDate": ISODate("2014-09-24T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Reflection on  Sonia Nazario’s  Talk posted to Bb  Discussions."
    },
    {
      "dueDate": ISODate("2014-09-22T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "First Draft Essay  #1"
    },
    {
      "dueDate": ISODate("2014-09-17T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Possible thesis and  structure for Essay  #1. Bring Little  Seagull to Class."
    }
  ],
  "quiz": [
    {
      "dueDate": ISODate("2014-11-12T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Quiz #8 Due: TBA"
    },
    {
      "dueDate": ISODate("2014-11-03T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Quiz #7 Due: TBA"
    },
    {
      "dueDate": ISODate("2014-10-27T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Quiz #6 Due on Bb: Appropriate  Use of Quotations"
    },
    {
      "dueDate": ISODate("2014-10-15T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Quiz #5 on Bb: MLA Works  Cited"
    },
    {
      "dueDate": ISODate("2014-10-06T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Quiz #4 Due: TBA"
    },
    {
      "dueDate": ISODate("2014-09-24T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Quiz #2 Due on Bb: MLA Style  in Text."
    },
    {
      "dueDate": ISODate("2014-10-06T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Quiz #3: Library Assignment  Due on Bb."
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5418c56b975a44efd1cd1515"),
  "catalogId": "ECON102",
  "classRoom": "Performing Arts 204",
  "courseCredit": NumberInt(3),
  "courseName": "Principles of Economics",
  "createdBy": "hl55170@umbc.edu",
  "createdOn": ISODate("2014-09-16T23:19:07.232Z"),
  "email": "nandita@umbc.edu",
  "endTime": "9:50 AM",
  "enrolledCount": NumberInt(1),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946e975ab3315370036e"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed,Fri",
  "section": NumberInt(1),
  "startTime": "9:00 AM",
  "version": NumberLong(5),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:41:07.341Z"),
  "exam": [
    {
      "dueDate": ISODate("2014-10-01T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Chapter 11"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5418c5df975a44efd1cd1516"),
  "catalogId": "GBL386",
  "classRoom": "Sondheim",
  "courseCredit": NumberInt(3),
  "courseName": "Politics of Development",
  "createdBy": "hl55170@umbc.edu",
  "createdOn": ISODate("2014-09-16T23:21:03.459Z"),
  "email": "filomeno@umbc.edu",
  "endTime": "8:25 PM",
  "enrolledCount": NumberInt(1),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946a975ab33153700293"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue",
  "section": NumberInt(1),
  "startTime": "7:10 PM",
  "version": NumberLong(4),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:41:05.505Z"),
  "assignment": [
    {
      "dueDate": ISODate("2014-10-09T00:00:00.0Z"),
      "dueTime": "7:10 PM",
      "name": "1st report Case study"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("541a3af6975a44efd1cd152c"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-22T00:00:00.0Z"),
      "dueTime": "12:00 AM",
      "name": "HW1"
    }
  ],
  "catalogId": "CMSC471",
  "classRoom": "ENGR 221",
  "courseCredit": NumberInt(3),
  "courseName": "Artificial Intelligence",
  "createdBy": "tenji.tembo@umbc.edu",
  "createdOn": ISODate("2014-09-18T01:52:54.466Z"),
  "email": "mm11@umbc.edu",
  "endTime": "3:45 PM",
  "enrolledCount": NumberInt(1),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946d975ab33153700331"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "section": NumberInt(1),
  "startTime": "2:30 PM",
  "version": NumberLong(2),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:41:01.860Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("541a4102975a44efd1cd152d"),
  "catalogId": "PHIL100",
  "classRoom": "Sondheim 112",
  "courseCredit": NumberInt(3),
  "courseName": "Intro to Philosophy",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-09-18T02:18:42.574Z"),
  "email": "amypayne@umbc.edu",
  "endTime": "5:15 PM",
  "enrolledCount": NumberInt(1),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946a975ab33153700293"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed",
  "section": NumberInt(5),
  "startTime": "4:00 PM",
  "version": NumberLong(7),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:41:00.38Z"),
  "exam": [
    {
      "dueDate": ISODate("2014-10-01T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Exam 1"
    },
    {
      "dueDate": ISODate("2014-11-05T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Exam 2"
    },
    {
      "dueDate": ISODate("2014-12-08T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Exam 3"
    }
  ],
  "misc": [
    {
      "dueDate": ISODate("2014-11-10T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Paper Topic Due for In-Class review"
    },
    {
      "dueDate": ISODate("2014-11-26T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Paper Due"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("541a4283975a44efd1cd152e"),
  "catalogId": "HAPP402",
  "classRoom": "Sondheim 113",
  "courseCredit": NumberInt(3),
  "courseName": "Environ. Health Policy",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-09-18T02:25:07.86Z"),
  "email": "kkeenan@umbc.edu",
  "endTime": "7:00 PM",
  "enrolledCount": NumberInt(0),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9477975ab33153700633"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon",
  "section": NumberInt(1),
  "startTime": "4:30 PM",
  "version": NumberLong(4),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:40:57.693Z"),
  "exam": [
    {
      "dueDate": ISODate("2014-10-06T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Exam #1, covering Chapters 1 thru 4"
    },
    {
      "dueDate": ISODate("2014-11-03T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Exam #2, covering Chapters 5 thru 8"
    },
    {
      "dueDate": ISODate("2014-12-15T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Exam #3, covering Chapters 9 thru 13"
    }
  ],
  "misc": [
    {
      "dueDate": ISODate("2014-12-01T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "STUDENT PRESENTATIONS CONTINUE & PAPERS ARE DUE"
    }
  ],
  "quiz": [
    {
      "dueDate": ISODate("2014-09-29T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Quiz #1 on Chapters 1, 2, 3"
    },
    {
      "dueDate": ISODate("2014-10-27T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Quiz #2 on Chapters 5, 6, & 7"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("541b0012975a44efd1cd153a"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-24T00:00:00.0Z"),
      "dueTime": "3:00 PM",
      "name": "SQ Exam 1, 33-rest"
    },
    {
      "dueDate": ISODate("2014-10-08T00:00:00.0Z"),
      "dueTime": "3:00 PM",
      "name": "SQ Exam 2; 1-10"
    },
    {
      "dueDate": ISODate("2014-10-15T00:00:00.0Z"),
      "dueTime": "3:00 PM",
      "name": "SQ Exam 2 11-20"
    },
    {
      "dueDate": ISODate("2014-10-22T00:00:00.0Z"),
      "dueTime": "3:00 PM",
      "name": "SQ Exam 2 21-30"
    },
    {
      "dueDate": ISODate("2014-10-29T00:00:00.0Z"),
      "dueTime": "3:00 PM",
      "name": "SQ Exam 2 31-end"
    },
    {
      "dueDate": ISODate("2014-11-12T00:00:00.0Z"),
      "dueTime": "3:00 PM",
      "name": "SQ Exam 3 1-10"
    },
    {
      "dueDate": ISODate("2014-11-19T00:00:00.0Z"),
      "dueTime": "3:00 PM",
      "name": "SQ Exam 3 11-20"
    },
    {
      "dueDate": ISODate("2014-11-26T00:00:00.0Z"),
      "dueTime": "3:00 PM",
      "name": "TBD"
    },
    {
      "dueDate": ISODate("2014-12-03T00:00:00.0Z"),
      "dueTime": "3:00 PM",
      "name": "TBD"
    }
  ],
  "catalogId": "BIO141",
  "classRoom": "MP 106",
  "courseCredit": NumberInt(3),
  "courseName": "Biology 141 Discussion",
  "createdBy": "ablanch1@umbc.edu",
  "createdOn": ISODate("2014-09-18T15:53:54.783Z"),
  "email": "sokolove@umbc.edu",
  "endTime": "4:00 PM",
  "enrolledCount": NumberInt(1),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946c975ab331537002d9"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Wed",
  "section": NumberInt(7),
  "startTime": "3:00 PM",
  "version": NumberLong(2),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:39:54.895Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("541b2b3e975a44efd1cd153f"),
  "catalogId": "GES110",
  "classRoom": "Admin 101",
  "courseCredit": NumberInt(3),
  "courseName": "Physical Geography",
  "createdBy": "jfuchs1@umbc.edu",
  "createdOn": ISODate("2014-09-18T18:58:06.482Z"),
  "email": "studdsc@umbc.edu",
  "endTime": "2:15 PM",
  "enrolledCount": NumberInt(1),
  "exam": [
    {
      "dueDate": ISODate("2014-09-30T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Exam I"
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946a975ab33153700293"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "section": NumberInt(2),
  "startTime": "1:00 PM",
  "version": NumberLong(4),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:39:52.638Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5407b65d975a24f941177288"),
  "catalogId": "DANC116",
  "classRoom": "Performing Arts & Humanities 337",
  "courseCredit": NumberInt(3),
  "courseName": "Ballet I--Elementary Ballet",
  "createdBy": "jvaden1@umbc.edu",
  "createdOn": ISODate("2014-09-04T00:46:21.460Z"),
  "email": "abelc@umbc.edu",
  "endTime": "9:45 PM",
  "enrolledCount": NumberInt(2),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946e975ab33153700353"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed",
  "section": NumberInt(1),
  "startTime": "8:30 PM",
  "version": NumberLong(4),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:49:57.216Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5400b8b7975a76b7173fe710"),
  "catalogId": "MATH301",
  "classRoom": "Janet & Walter Sondheim  204",
  "courseCredit": NumberInt(3),
  "courseName": "Intro to Mathematical Analysis I",
  "createdBy": "khareli1@umbc.edu",
  "createdOn": ISODate("2014-08-29T17:30:31.410Z"),
  "email": "suri@umbc.edu",
  "endTime": "7:15 PM",
  "enrolledCount": NumberInt(2),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9474975ab3315370054d"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed",
  "section": NumberInt(3),
  "startTime": "5:30 PM",
  "version": NumberLong(4),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:56:28.820Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("541b8cc2975a44efd1cd1549"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-02T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Charlip and Burns Chapter 1"
    },
    {
      "dueDate": ISODate("2014-09-04T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Carlos Funetes Bio, Carlos Fuentes Material, KH Chapter 1"
    },
    {
      "dueDate": ISODate("2014-09-09T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "KH Chapter 3"
    },
    {
      "dueDate": ISODate("2014-09-16T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "KH Chapter 4"
    },
    {
      "dueDate": ISODate("2014-09-25T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "KH Chapter 5"
    },
    {
      "dueDate": ISODate("2014-10-07T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "KH Chapter 7"
    },
    {
      "dueDate": ISODate("2014-10-02T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "STUDY"
    },
    {
      "dueDate": ISODate("2014-10-09T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "KH Part 2 (187-200), KH Part 3 (283-298), KH Chapter 22"
    },
    {
      "dueDate": ISODate("2014-10-14T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "KH Chapter 22"
    },
    {
      "dueDate": ISODate("2014-10-16T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "KH Chapter 12 (326-345)"
    },
    {
      "dueDate": ISODate("2014-10-21T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Mexican Revolution and Culture"
    },
    {
      "dueDate": ISODate("2014-10-23T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "KH Chapter 11"
    },
    {
      "dueDate": ISODate("2014-10-28T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Honduras material, KH Chapter 18 (452-474), (469-479)"
    },
    {
      "dueDate": ISODate("2014-10-30T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Chapter 14 Blackboard"
    },
    {
      "dueDate": ISODate("2014-11-04T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "STUDY"
    },
    {
      "dueDate": ISODate("2014-11-11T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "KH Chapter 15"
    },
    {
      "dueDate": ISODate("2014-11-11T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Review KH Chapter 22 (575-580)"
    },
    {
      "dueDate": ISODate("2014-11-13T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "KH Chapter 16 (419-421), The Case of Bolivia"
    },
    {
      "dueDate": ISODate("2014-11-18T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "KH Chapter 21 (543-546), (567-569)"
    },
    {
      "dueDate": ISODate("2014-11-20T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "KH Chapter 20 (520-525)"
    },
    {
      "dueDate": ISODate("2014-10-04T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "KH Chapter 21"
    }
  ],
  "catalogId": "MLL280",
  "classRoom": "ITE102",
  "courseCredit": NumberInt(3),
  "courseName": "Intro to the Spanish Speaking World",
  "createdBy": "TR09334@umbc.edu",
  "createdOn": ISODate("2014-09-19T01:54:10.112Z"),
  "email": "poggio@umbc.edu",
  "endTime": "2:15 PM",
  "enrolledCount": NumberInt(1),
  "exam": [
    {
      "dueDate": ISODate("2014-10-02T00:00:00.0Z"),
      "dueTime": "2:15 PM",
      "name": "Test 1"
    },
    {
      "dueDate": ISODate("2014-11-04T00:00:00.0Z"),
      "dueTime": "2:15 PM",
      "name": "Test 2"
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9474975ab33153700582"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "misc": [
    {
      "dueDate": ISODate("2014-12-09T00:00:00.0Z"),
      "dueTime": "2:15 PM",
      "name": "Research Report"
    },
    {
      "dueDate": ISODate("2014-11-11T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Research Project First Draft"
    }
  ],
  "section": NumberInt(1),
  "startTime": "1:00 PM",
  "version": NumberLong(3),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:39:50.881Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("541badde975a44efd1cd1552"),
  "catalogId": "GLBL101",
  "classRoom": "PAHB107",
  "courseCredit": NumberInt(3),
  "courseName": "Intro to Global Studies",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-09-19T04:15:26.254Z"),
  "email": "bstarkey@umbc.edu",
  "endTime": "7:00 PM",
  "enrolledCount": NumberInt(1),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9476975ab331537005e7"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue",
  "section": NumberInt(1),
  "startTime": "4:30 PM",
  "version": NumberLong(6),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:39:48.771Z"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-23T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Online Assignment#1 due (submit via Blackboard by 4:00 pm)"
    }
  ],
  "exam": [
    {
      "dueDate": ISODate("2014-10-21T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Exam 1"
    }
  ],
  "misc": [
    {
      "dueDate": ISODate("2014-09-30T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Class Project:  How do the Sustainable Development Goals (SDGs) improve upon the weaknesses of the Millennium Development Goals (MDGs)? Key concepts: colonialism, world systems theory, aid, trade, and migration flows"
    },
    {
      "dueDate": ISODate("2014-11-25T00:00:00.0Z"),
      "dueTime": "12:00 PM",
      "name": "Press Release briefings due via Bb"
    },
    {
      "dueDate": ISODate("2014-12-09T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Unit 2 Final Reflection Essays in Class"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("54203b28975a44efd1cd155f"),
  "catalogId": "PHIL100",
  "classRoom": "MP 110",
  "courseCredit": NumberInt(3),
  "courseName": "Intro to Philosophy",
  "createdBy": "markya1@umbc.edu",
  "createdOn": ISODate("2014-09-22T15:07:20.741Z"),
  "email": "jathomas@umbc.edu",
  "endTime": "9:50 AM",
  "enrolledCount": NumberInt(2),
  "exam": [
    {
      "dueDate": ISODate("2014-10-08T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Exam #1"
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9475975ab331537005bf"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed,Fri",
  "section": NumberInt(1),
  "startTime": "9:00 AM",
  "version": NumberLong(3),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:39:46.823Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53f8505d975ac9dcd58cea1c"),
  "catalogId": "MATH225",
  "classRoom": "Math & Psych 103",
  "courseCredit": NumberInt(3),
  "courseName": "Introduction to Differential Equations",
  "createdBy": "sasha@umbc.edu",
  "createdOn": ISODate("2014-08-23T08:27:09.961Z"),
  "email": "jameslo@math.umbc.edu",
  "endTime": "5:15 PM",
  "enrolledCount": NumberInt(2),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9474975ab33153700536"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed",
  "section": NumberInt(3),
  "startTime": "4:00 PM",
  "version": NumberLong(20),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-27T00:05:48.302Z"),
  "exam": [
    {
      "dueDate": ISODate("2014-09-29T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Exam 1"
    },
    {
      "dueDate": ISODate("2014-11-03T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Exam 2"
    },
    {
      "dueDate": ISODate("2014-12-15T00:00:00.0Z"),
      "dueTime": "3:30 PM",
      "name": "Final Exam"
    }
  ],
  "assignment": [
    {
      "dueDate": ISODate("2014-09-08T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Homework #1, 1.1"
    },
    {
      "dueDate": ISODate("2014-09-15T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Homework #2, 1.2 2.1 2.2"
    },
    {
      "dueDate": ISODate("2014-09-22T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Homework #3 2.3"
    },
    {
      "dueDate": ISODate("2014-09-29T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Homework #4 2.4, 2.7"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53fa3d7b975abef615620162"),
  "catalogId": "MATH221",
  "classRoom": "Math & Psyc 104",
  "courseCredit": NumberInt(3),
  "courseName": "Introduction to Linear Algebra",
  "createdBy": "sasha@umbc.edu",
  "createdOn": ISODate("2014-08-24T19:31:07.584Z"),
  "email": "kogan@math.umbc.edu",
  "endTime": "2:15 PM",
  "enrolledCount": NumberInt(2),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9474975ab33153700534"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "section": NumberInt(2),
  "startTime": "1:00 PM",
  "version": NumberLong(10),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:59:26.591Z"),
  "exam": [
    {
      "dueDate": ISODate("2014-12-16T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Comprehensive Final"
    }
  ],
  "quiz": [
    {
      "dueDate": ISODate("2014-09-23T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Quiz 1"
    },
    {
      "dueDate": ISODate("2014-10-14T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Quiz 2"
    },
    {
      "dueDate": ISODate("2014-11-13T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Quiz 3"
    },
    {
      "dueDate": ISODate("2014-12-02T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Quiz 4"
    }
  ],
  "assignment": [
    {
      "dueDate": ISODate("2014-09-11T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Homework #1"
    },
    {
      "dueDate": ISODate("2014-09-18T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Homework #2"
    },
    {
      "dueDate": ISODate("2014-10-02T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Homework #3"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("54217dc7975a3e66f29b58b3"),
  "catalogId": "MATH225",
  "classRoom": "MP103",
  "courseCredit": NumberInt(3),
  "courseName": "Differential Equations",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-09-23T14:03:51.550Z"),
  "email": "khoffman@math.umbc.edu",
  "endTime": "10:50 AM",
  "enrolledCount": NumberInt(1),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9474975ab3315370052d"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed,Fri",
  "section": NumberInt(1),
  "startTime": "10:00 AM",
  "version": NumberLong(10),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:39:45.223Z"),
  "exam": [
    {
      "dueDate": ISODate("2014-09-29T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Exam 1"
    },
    {
      "dueDate": ISODate("2014-11-10T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Exam 2 5.5-6 Step funcs and Disc. Forcing"
    },
    {
      "dueDate": ISODate("2014-12-15T00:00:00.0Z"),
      "dueTime": "10:30 AM",
      "name": "Final Exam"
    }
  ],
  "assignment": [
    {
      "dueDate": ISODate("2014-09-29T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "3.1: 1-10, 11, 12, 14, 18, 19, 39-45 3.2: 1-20, 23, 25"
    },
    {
      "dueDate": ISODate("2014-10-06T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "3.3: 1-17"
    },
    {
      "dueDate": ISODate("2014-10-13T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "3.4 1-19, 20 , 3.5: 1 -15, 18"
    },
    {
      "dueDate": ISODate("2014-10-20T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "3.7: 1-38 3.8: 1-17, 24"
    },
    {
      "dueDate": ISODate("2014-10-27T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "3.10: 1-13, 14 (δL = 8in), 15, 16, 20 3.11: 1-6, 9, 11"
    },
    {
      "dueDate": ISODate("2014-11-03T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "5.1: 1-49, 5.2: 1-18"
    },
    {
      "dueDate": ISODate("2014-11-10T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "5.3: 1-20, 5.4, 1-14"
    },
    {
      "dueDate": ISODate("2014-11-17T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "5.5:1-23, 5.6 1-12"
    },
    {
      "dueDate": ISODate("2014-11-24T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "5.7 5,8,13,18, 5.8: 13, 17, 19, 42, 43"
    },
    {
      "dueDate": ISODate("2014-12-01T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "6.1: 1-6, 24, 6.2: 34, 35 6.3: 1, 2, 4-7, 8,9,12, 13, 14, 16, 17"
    },
    {
      "dueDate": ISODate("2014-12-08T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "6.4: 1-4, 9-12, 16-19, 24, 25 6.5 1-3, 6,8, 6.6: 5-8"
    }
  ],
  "quiz": [
    {
      "dueDate": ISODate("2014-09-24T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Quiz"
    },
    {
      "dueDate": ISODate("2014-10-01T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Quiz"
    },
    {
      "dueDate": ISODate("2014-10-08T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Quiz"
    },
    {
      "dueDate": ISODate("2014-10-15T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Quiz"
    },
    {
      "dueDate": ISODate("2014-10-22T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Quiz"
    },
    {
      "dueDate": ISODate("2014-10-29T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Quiz"
    },
    {
      "dueDate": ISODate("2014-11-05T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Quiz"
    },
    {
      "dueDate": ISODate("2014-11-12T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Quiz"
    },
    {
      "dueDate": ISODate("2014-11-19T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Quiz"
    },
    {
      "dueDate": ISODate("2014-12-03T00:00:00.0Z"),
      "dueTime": "10:00 AM",
      "name": "Quiz"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5421872d975a3e66f29b5aaa"),
  "catalogId": "MCS222",
  "classRoom": "Sondheim 207",
  "courseCredit": NumberInt(3),
  "courseName": "Intro to Media &Communication Studies",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-09-23T14:43:57.850Z"),
  "email": "eberry3@umbc.edu",
  "endTime": "3:45 PM",
  "enrolledCount": NumberInt(0),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946a975ab33153700293"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "section": NumberInt(1),
  "startTime": "2:30 PM",
  "version": NumberLong(4),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:39:42.791Z"),
  "misc": [
    {
      "dueDate": ISODate("2014-10-07T00:00:00.0Z"),
      "dueTime": "11:00 PM",
      "name": "In Class Assignment DUE via BB by"
    },
    {
      "dueDate": ISODate("2014-10-21T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Read\/Watch & React Assignment DUE in  CLASS"
    },
    {
      "dueDate": ISODate("2014-11-13T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Media Analysis Outline"
    }
  ],
  "quiz": [
    {
      "dueDate": ISODate("2014-10-01T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Quiz 1"
    }
  ],
  "assignment": [
    {
      "dueDate": ISODate("2014-09-25T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Read CIH Chapter 11 “Aspects of the Printing Revolution”"
    },
    {
      "dueDate": ISODate("2014-10-16T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Read CIH Chapter 15 “The New Journalism”"
    },
    {
      "dueDate": ISODate("2014-10-21T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Read CIH Chapter 17 “Time, Space, & The Telegraph”"
    },
    {
      "dueDate": ISODate("2014-10-28T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Read CIH Chapter 18 “Dream Worlds of Consumption”"
    },
    {
      "dueDate": ISODate("2014-10-30T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Read CIH Chapter 23 “Movies Talk”"
    },
    {
      "dueDate": ISODate("2014-11-04T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Read CIH Chapter 30 “Radio in the TV Age”"
    },
    {
      "dueDate": ISODate("2014-11-06T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Read CIH Chapter 34 “TV Transforms the News” AND Read CIH Chapter 36 “ TV in the Net-age"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5401e7903219e0310fceeb4d"),
  "catalogId": "STAT351",
  "classRoom": "Sherman 145",
  "courseCredit": NumberLong(3),
  "courseName": "Stat for Biz\/Econ Discussion",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-30T14:44:52.719Z"),
  "email": "estanwy1@umbc.edu",
  "endTime": "2:50 PM",
  "enrolledCount": NumberInt(1),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9474975ab3315370054c"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue",
  "section": NumberLong(6),
  "startTime": "2:00 PM",
  "version": NumberLong(9),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:53:49.960Z"),
  "quiz": [
    {
      "dueDate": ISODate("2014-09-23T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "equiz"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("540e10f5975a56036b8280e6"),
  "catalogId": "CMSC481",
  "classRoom": "SHER013",
  "courseCredit": NumberInt(3),
  "courseName": "Computer Networks",
  "createdBy": "dylwhich@umbc.edu",
  "createdOn": ISODate("2014-09-08T20:26:29.821Z"),
  "email": "sidhu@umbc.edu",
  "endTime": "5:15 PM",
  "enrolledCount": NumberInt(4),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946d975ab33153700347"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed",
  "section": NumberInt(2),
  "startTime": "4:00 PM",
  "version": NumberLong(9),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:47:16.844Z"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-15T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "Lab Assignment 1"
    },
    {
      "dueDate": ISODate("2014-09-17T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "Homework 1"
    },
    {
      "dueDate": ISODate("2014-09-29T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "Homework 2"
    },
    {
      "dueDate": ISODate("2014-10-01T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "Lab Assignment 2"
    },
    {
      "dueDate": ISODate("2014-10-01T00:00:00.0Z"),
      "dueTime": "11:59 PM",
      "name": "Lab Assignment 3"
    }
  ],
  "exam": [
    {
      "dueDate": ISODate("2014-10-08T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Exam 1"
    },
    {
      "dueDate": ISODate("2014-11-12T00:00:00.0Z"),
      "dueTime": "4:00 PM",
      "name": "Exam 2"
    },
    {
      "dueDate": ISODate("2014-12-15T00:00:00.0Z"),
      "dueTime": "3:30 PM",
      "name": "Final Exam"
    }
  ],
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5425c981975a8386e89ac503"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-27T00:00:00.0Z"),
      "dueTime": "6:15 AM",
      "name": "assignment 01"
    }
  ],
  "catalogId": "TEST01",
  "classRoom": "R001",
  "courseCredit": NumberInt(3),
  "courseName": "testCourse",
  "createdBy": "eduAdmin@test.edu",
  "createdOn": ISODate("2014-09-26T20:16:01.231Z"),
  "email": "info@edupal.co",
  "endTime": "4:15 AM",
  "enrolledCount": NumberInt(1),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946a975ab33153700293"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Sat",
  "section": NumberInt(1),
  "startTime": "2:28 AM",
  "syllabusStatus": "ACTIVE",
  "version": NumberLong(2),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:39:29.863Z")
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("541afdbf975a44efd1cd1539"),
  "catalogId": "MATH151",
  "classRoom": "Enigeering 233",
  "courseCredit": NumberInt(3),
  "courseName": "Math Discussion",
  "createdBy": "ablanch1@umbc.edu",
  "createdOn": ISODate("2014-09-18T15:43:59.360Z"),
  "email": "tighe@umbc.edu",
  "endTime": "10:00 AM",
  "enrolledCount": NumberInt(1),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9474975ab3315370054e"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Fri",
  "quiz": [
    {
      "dueDate": ISODate("2014-09-22T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "Quiz 3"
    },
    {
      "dueDate": ISODate("2014-10-06T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "4"
    },
    {
      "dueDate": ISODate("2014-10-13T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "5"
    },
    {
      "dueDate": ISODate("2014-10-20T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "6"
    },
    {
      "dueDate": ISODate("2014-11-03T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "7"
    },
    {
      "dueDate": ISODate("2014-11-10T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "8"
    },
    {
      "dueDate": ISODate("2014-10-20T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "9"
    },
    {
      "dueDate": ISODate("2014-11-24T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "10"
    },
    {
      "dueDate": ISODate("2014-12-08T00:00:00.0Z"),
      "dueTime": "9:00 AM",
      "name": "11"
    }
  ],
  "section": NumberInt(3),
  "startTime": "9:00 AM",
  "version": NumberLong(2),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:40:53.435Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5415eba5975a44efd1cd14d3"),
  "catalogId": "ENGL100",
  "classRoom": "PAHB 317",
  "courseCredit": NumberInt(3),
  "courseName": "English Composition",
  "createdBy": "mjipark3@umbc.edu",
  "createdOn": ISODate("2014-09-14T19:25:25.852Z"),
  "email": "nicolep@umbc.edu",
  "endTime": "5:15 PM",
  "enrolledCount": NumberInt(1),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9471975ab3315370046b"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "section": NumberInt(12),
  "startTime": "4:00 PM",
  "version": NumberLong(4),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:41:33.227Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5415cf0e975a44efd1cd14cd"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-09T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "BWD Ch2 Hands-On Practice 2.1-2.11, 2.13-2.14,"
    },
    {
      "dueDate": ISODate("2014-09-16T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "BWD Ch4 Hands-On Practice 4.1-4.7"
    },
    {
      "dueDate": ISODate("2014-09-30T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "BWD Ch6 Hands-On Practice 6.1-6.5"
    },
    {
      "dueDate": ISODate("2014-10-07T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "BWD Ch6 Hands-On Practice 6.6-6.11"
    },
    {
      "dueDate": ISODate("2014-10-14T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "BWD Ch7 Hands-On Practice 7.1-7.5"
    },
    {
      "dueDate": ISODate("2014-10-02T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "Web critique assignment due"
    },
    {
      "dueDate": ISODate("2014-10-21T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "BWD Ch7 Hands-On Practice 7.6-7.8"
    },
    {
      "dueDate": ISODate("2014-10-28T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "BWD Ch8 Hands-On Practice 8.1-8.9"
    },
    {
      "dueDate": ISODate("2014-10-30T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "Site scope due"
    },
    {
      "dueDate": ISODate("2014-11-04T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "BWD Ch9 Hands-On Practice 9.1-9.4"
    },
    {
      "dueDate": ISODate("2014-11-11T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "BWD Ch10 Hands-On Practice 10.1-10.3"
    },
    {
      "dueDate": ISODate("2014-11-13T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "Blueprint\/Sitemap due"
    },
    {
      "dueDate": ISODate("2014-11-18T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "BWD Ch10 Hands-On Practice 10.3-10.5"
    },
    {
      "dueDate": ISODate("2014-11-25T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "BWD Ch10 Hands-On Practice 11.1-11.8"
    },
    {
      "dueDate": ISODate("2014-12-04T00:00:00.0Z"),
      "dueTime": "2:00 PM",
      "name": "Term Project: Wireframes due"
    }
  ],
  "catalogId": "IS387",
  "classRoom": "Information Technology 458",
  "courseCredit": NumberInt(3),
  "courseName": "Info. Arch. for Web",
  "createdBy": "kf05813@umbc.edu",
  "createdOn": ISODate("2014-09-14T17:23:26.559Z"),
  "email": "komlodi@umbc.edu",
  "endTime": "3:45 PM",
  "enrolledCount": NumberInt(1),
  "exam": [
    {
      "dueDate": ISODate("2014-10-16T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Exam 1"
    },
    {
      "dueDate": ISODate("2014-12-11T00:00:00.0Z"),
      "dueTime": "2:30 PM",
      "name": "Exam 2"
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9473975ab331537004dc"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "misc": [
    {
      "dueDate": ISODate("2014-09-03T00:00:00.0Z"),
      "dueTime": "1:15 PM",
      "name": "DMMT Ch 1, 2 User behavior DMMT Ch 3 Homepage design"
    },
    {
      "dueDate": ISODate("2014-09-06T00:00:00.0Z"),
      "dueTime": "1:15 PM",
      "name": "BWD Ch1 Internet and Web Basics  BWD Ch2 HTML Basics"
    },
    {
      "dueDate": ISODate("2014-09-10T00:00:00.0Z"),
      "dueTime": "1:15 PM",
      "name": "BWD Ch 3 Web Design Basics DMMT Ch 12 Accessibility"
    },
    {
      "dueDate": ISODate("2014-09-13T00:00:00.0Z"),
      "dueTime": "1:15 PM",
      "name": "BWD Ch4 Cascading Style Sheets Basics"
    },
    {
      "dueDate": ISODate("2014-09-17T00:00:00.0Z"),
      "dueTime": "1:15 PM",
      "name": "DMMT Ch 4, 5, 7 Web Design Basics"
    },
    {
      "dueDate": ISODate("2014-09-20T00:00:00.0Z"),
      "dueTime": "1:15 PM",
      "name": "BWD Ch5 Web Graphics Styling"
    },
    {
      "dueDate": ISODate("2014-09-24T00:00:00.0Z"),
      "dueTime": "1:15 PM",
      "name": "IA Ch 5 & 6 Information Organization and Labeling"
    },
    {
      "dueDate": ISODate("2014-09-27T00:00:00.0Z"),
      "dueTime": "1:15 PM",
      "name": "BWD Ch6 More CSS"
    },
    {
      "dueDate": ISODate("2014-10-01T00:00:00.0Z"),
      "dueTime": "1:15 PM",
      "name": "IA Ch7 Navigation Systems  DMMT Ch 6 Navigation Design"
    },
    {
      "dueDate": ISODate("2014-10-04T00:00:00.0Z"),
      "dueTime": "1:15 PM",
      "name": "BWD Ch6 More CSS"
    },
    {
      "dueDate": ISODate("2014-10-08T00:00:00.0Z"),
      "dueTime": "1:15 PM",
      "name": "IA Ch 10 & 11 Research & Strategy"
    },
    {
      "dueDate": ISODate("2014-10-11T00:00:00.0Z"),
      "dueTime": "1:15 PM",
      "name": "BWD Ch7- Layout Basics"
    },
    {
      "dueDate": ISODate("2014-10-18T00:00:00.0Z"),
      "dueTime": "1:15 PM",
      "name": "BWD Ch7- Layout Basics"
    },
    {
      "dueDate": ISODate("2014-10-25T00:00:00.0Z"),
      "dueTime": "1:15 PM",
      "name": "BWD Ch8 Links, Layout, Mobile Design"
    },
    {
      "dueDate": ISODate("2014-10-29T00:00:00.0Z"),
      "dueTime": "1:15 PM",
      "name": "DMMT Ch10 Mobile Design"
    },
    {
      "dueDate": ISODate("2014-11-01T00:00:00.0Z"),
      "dueTime": "1:15 PM",
      "name": "BWD Ch9 Tables"
    },
    {
      "dueDate": ISODate("2014-11-05T00:00:00.0Z"),
      "dueTime": "1:30 PM",
      "name": "IA Ch 12 Design and Documentation"
    },
    {
      "dueDate": ISODate("2014-11-08T00:00:00.0Z"),
      "dueTime": "1:30 PM",
      "name": "BWD Ch10 Forms"
    },
    {
      "dueDate": ISODate("2014-11-12T00:00:00.0Z"),
      "dueTime": "1:30 PM",
      "name": "IA Ch 8 Search Systems IA Ch 9 Thesauri, Controlled Vocabularies, and Metadata"
    },
    {
      "dueDate": ISODate("2014-11-15T00:00:00.0Z"),
      "dueTime": "1:30 PM",
      "name": "BWD Ch10 Forms"
    },
    {
      "dueDate": ISODate("2014-11-19T00:00:00.0Z"),
      "dueTime": "1:30 PM",
      "name": "DMMT Ch 8, 13 Web design in the organization"
    },
    {
      "dueDate": ISODate("2014-11-22T00:00:00.0Z"),
      "dueTime": "1:30 PM",
      "name": "BWD Ch11- Media and interactivity"
    },
    {
      "dueDate": ISODate("2014-11-26T00:00:00.0Z"),
      "dueTime": "1:30 PM",
      "name": "BWD Ch12- Web Publishing"
    }
  ],
  "section": NumberInt(1),
  "startTime": "2:30 PM",
  "version": NumberLong(2),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:42:13.587Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5414e537975a44efd1cd14bf"),
  "catalogId": "CMSC203",
  "classRoom": "Sherman Hall 145",
  "courseCredit": NumberInt(3),
  "courseName": "Discrete Structures",
  "createdBy": "ru2@umbc.edu",
  "createdOn": ISODate("2014-09-14T00:45:43.842Z"),
  "email": "mnovey1@umbc.edu",
  "endTime": "3:45 PM",
  "enrolledCount": NumberInt(1),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946d975ab33153700334"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed",
  "section": NumberInt(3),
  "startTime": "2:30 PM",
  "version": NumberLong(2),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:42:27.78Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5410ae44975a44efd1cd1447"),
  "catalogId": "UMBC",
  "classRoom": "Library 1st Floor",
  "courseCredit": NumberInt(3),
  "courseName": "Writing Center",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-09-10T20:02:12.210Z"),
  "email": "lrc_comments@umbc.edu",
  "endTime": "7:00 PM",
  "enrolledCount": NumberInt(0),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("541076ec3219e05717a849b4"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Tue,Wed,Thu",
  "section": NumberInt(2),
  "startTime": "10:00 AM",
  "version": NumberLong(2),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:44:07.862Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5410af1f3219e05717a849b6"),
  "catalogId": "UMBC",
  "classRoom": "Library 1st Floor",
  "courseCredit": NumberLong(3),
  "courseName": "Writing Center",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-09-10T20:02:12.210Z"),
  "email": "lrc_comments@umbc.edu",
  "endTime": "2:00 PM",
  "enrolledCount": NumberInt(1),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("541076ec3219e05717a849b4"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Fri",
  "section": NumberLong(5),
  "startTime": "10:00 AM",
  "version": NumberLong(3),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:44:09.618Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("54107e98975a44efd1cd1444"),
  "catalogId": "PHYS121",
  "classRoom": "CASTLE",
  "courseCredit": NumberInt(3),
  "courseName": "Physics I Discussion",
  "createdBy": "pattay1@umbc.edu",
  "createdOn": ISODate("2014-09-10T16:38:48.609Z"),
  "email": "Dr.Worchesky@umbc.edu",
  "endTime": "10:00 AM",
  "enrolledCount": NumberInt(2),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9476975ab331537005d3"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Thu",
  "section": NumberInt(1),
  "startTime": "8:00 AM",
  "version": NumberLong(3),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:44:13.397Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("54107e1e975a44efd1cd1443"),
  "catalogId": "CMSC201DI",
  "classRoom": "ENG104A",
  "courseCredit": NumberInt(3),
  "courseName": "Computer Science Discussion",
  "createdBy": "pattay1@umbc.edu",
  "createdOn": ISODate("2014-09-10T16:36:46.630Z"),
  "email": "rheingan@umbc.edu",
  "endTime": "1:20 PM",
  "enrolledCount": NumberInt(1),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946d975ab3315370033e"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue",
  "section": NumberInt(1),
  "startTime": "12:30 PM",
  "version": NumberLong(2),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:44:15.280Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("54107679975a44efd1cd1440"),
  "catalogId": "UMBC",
  "classRoom": "RLC in Library",
  "courseCredit": NumberInt(3),
  "courseName": "Math Lab",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-09-10T16:04:09.109Z"),
  "email": "lrc_comments@umbc.edu",
  "endTime": "6:00 PM",
  "enrolledCount": NumberInt(1),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("541076ec3219e05717a849b4"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Tue,Wed",
  "section": NumberInt(1),
  "startTime": "9:00 AM",
  "version": NumberLong(11),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:45:41.539Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5410aeca3219e02846a849b0"),
  "catalogId": "UMBC",
  "classRoom": "RLC in Library",
  "courseCredit": NumberLong(3),
  "courseName": "Math Lab",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-09-10T16:04:09.109Z"),
  "email": "lrc_comments@umbc.edu",
  "endTime": "5:00 PM",
  "enrolledCount": NumberInt(1),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("541076ec3219e05717a849b4"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Thu",
  "section": NumberLong(3),
  "startTime": "9:00 AM",
  "version": NumberLong(9),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:45:45.491Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5410aedf3219e05717a849b5"),
  "catalogId": "UMBC",
  "classRoom": "RLC in Library",
  "courseCredit": NumberLong(3),
  "courseName": "Math Lab",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-09-10T16:04:09.109Z"),
  "email": "lrc_comments@umbc.edu",
  "endTime": "2:00 PM",
  "enrolledCount": NumberLong(1),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("541076ec3219e05717a849b4"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Fri",
  "section": NumberLong(4),
  "startTime": "9:00 AM",
  "version": NumberLong(4),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:45:48.6Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("540e4a58975a56036b828104"),
  "catalogId": "ENGL100",
  "classRoom": "Performing Arts 318",
  "courseCredit": NumberInt(3),
  "courseName": "English Composition",
  "createdBy": "jtaylo3@umbc.edu",
  "createdOn": ISODate("2014-09-09T00:31:20.575Z"),
  "email": "ablumb@umbc.edu",
  "endTime": "5:15 PM",
  "enrolledCount": NumberInt(5),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946a975ab33153700293"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "section": NumberInt(6),
  "startTime": "4:00 PM",
  "version": NumberLong(10),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:46:07.75Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("540e3853975a56036b8280fa"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-09T00:00:00.0Z"),
      "dueTime": "11:45 PM",
      "name": "Homework 1"
    },
    {
      "dueDate": ISODate("2014-09-23T00:00:00.0Z"),
      "dueTime": "11:45 PM",
      "name": "Homework 2"
    },
    {
      "dueDate": ISODate("2014-10-07T00:00:00.0Z"),
      "dueTime": "11:45 PM",
      "name": "Homework 3"
    },
    {
      "dueDate": ISODate("2014-10-21T00:00:00.0Z"),
      "dueTime": "11:45 PM",
      "name": "Homework 4"
    },
    {
      "dueDate": ISODate("2014-11-18T00:00:00.0Z"),
      "dueTime": "11:45 PM",
      "name": "Homework 5"
    },
    {
      "dueDate": ISODate("2014-12-09T00:00:00.0Z"),
      "dueTime": "11:45 PM",
      "name": "Homework 6"
    }
  ],
  "catalogId": "CMSC331",
  "classRoom": "ITE 102",
  "courseCredit": NumberInt(3),
  "courseName": "Principles of Programming Languages",
  "createdBy": "sadieb1@umbc.edu",
  "createdOn": ISODate("2014-09-08T23:14:27.875Z"),
  "email": "cdowd1@umbc.edu",
  "endTime": "6:45 PM",
  "enrolledCount": NumberInt(1),
  "exam": [
    {
      "dueDate": ISODate("2014-10-28T00:00:00.0Z"),
      "dueTime": "4:30 PM",
      "name": "Midterm"
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946a975ab33153700293"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "section": NumberInt(2),
  "startTime": "4:30 PM",
  "version": NumberLong(2),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:46:12.371Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("540c7c08975a228d7ebbacca"),
  "catalogId": "ENGL100Y",
  "classRoom": "Performing Arts 317",
  "courseCredit": NumberInt(3),
  "courseName": "English Composition",
  "createdBy": "tstine1@umbc.edu",
  "createdOn": ISODate("2014-09-07T15:38:48.180Z"),
  "email": "awalthers@umbc.edu",
  "endTime": "11:15 AM",
  "enrolledCount": NumberInt(5),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9472975ab33153700475"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "section": NumberInt(7),
  "startTime": "10:00 AM",
  "version": NumberLong(9),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:47:23.773Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("540bab91975a851354fb2149"),
  "catalogId": "PHIL150",
  "classRoom": "Sondheim  103",
  "courseCredit": NumberInt(3),
  "courseName": "Contemporary Moral Issues",
  "createdBy": "jgoomer1@umbc.edu",
  "createdOn": ISODate("2014-09-07T00:49:21.808Z"),
  "email": "ealick@umbc.edu",
  "endTime": "10:50 AM",
  "enrolledCount": NumberInt(3),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9475975ab331537005bc"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed",
  "section": NumberInt(1),
  "startTime": "10:00 AM",
  "version": NumberLong(7),
  "lastUpdatedBy": "ldonato1@umbc.edu",
  "lastUpdatedOn": ISODate("2014-09-27T02:30:13.820Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("540baa9c975a851354fb2148"),
  "catalogId": "PHIL152",
  "classRoom": "Sondheim 114",
  "courseCredit": NumberInt(3),
  "courseName": "Intro to Moral Theory",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-09-07T00:45:16.254Z"),
  "email": "jgoomer1@umbc.edu",
  "endTime": "2:15 PM",
  "enrolledCount": NumberInt(2),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946a975ab33153700293"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed",
  "section": NumberInt(3),
  "startTime": "1:00 PM",
  "version": NumberLong(7),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:47:30.210Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("540b66d53219e08a16ea6887"),
  "catalogId": "MATH155",
  "classRoom": "UC115D",
  "courseCredit": NumberLong(3),
  "courseName": "Applied Calculus Seminar",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-09-06T19:48:13.696Z"),
  "email": "raji@umbc.edu",
  "endTime": "2:50 PM",
  "enrolledCount": NumberInt(3),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9473975ab33153700524"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Fri",
  "section": NumberLong(6),
  "startTime": "2:00 PM",
  "version": NumberLong(7),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:47:35.798Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5409f37d975a843d5c768dbb"),
  "catalogId": "ECON101",
  "classRoom": "ITE229",
  "courseCredit": NumberInt(3),
  "courseName": "Microeconomics",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-09-05T17:31:41.255Z"),
  "email": "jasonp@umbc.edu",
  "endTime": "9:50 AM",
  "enrolledCount": NumberInt(2),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9470975ab33153700406"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed,Fri",
  "section": NumberInt(1),
  "startTime": "9:00 AM",
  "version": NumberLong(6),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:48:05.422Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5409f236975a843d5c768db9"),
  "catalogId": "MATH106",
  "classRoom": "MEYR030",
  "courseCredit": NumberInt(3),
  "courseName": "Algebra and Elementary Functions",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-09-05T17:26:14.960Z"),
  "email": "sriley4@umbc.edu",
  "endTime": "1:50 PM",
  "enrolledCount": NumberInt(4),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("540a82173219e08a16ea6885"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Wed",
  "section": NumberInt(9),
  "startTime": "1:00 PM",
  "version": NumberLong(9),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:48:09.39Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5407c50d975a24f94117728d"),
  "catalogId": "IS304",
  "classRoom": "BIO120",
  "courseCredit": NumberInt(3),
  "courseName": "Ethical Issues in Information Systems",
  "createdBy": "joshuaj1@umbc.edu",
  "createdOn": ISODate("2014-09-04T01:49:01.957Z"),
  "email": "sponaugle@umbc.edu",
  "endTime": "2:15 PM",
  "enrolledCount": NumberInt(1),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946a975ab33153700293"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "section": NumberInt(2),
  "startTime": "1:00 PM",
  "version": NumberLong(3),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:48:14.457Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5407c3fb975a24f94117728c"),
  "catalogId": "ENGL393",
  "classRoom": "ENG021",
  "courseCredit": NumberInt(3),
  "courseName": "Technical Communication",
  "createdBy": "joshuaj1@umbc.edu",
  "createdOn": ISODate("2014-09-04T01:44:27.831Z"),
  "email": "jharrison@umbc.edu",
  "endTime": "12:45 PM",
  "enrolledCount": NumberInt(1),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946a975ab33153700293"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "section": NumberInt(1),
  "startTime": "11:30 AM",
  "version": NumberLong(3),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:48:16.781Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5405fa20975a285fbb6994f1"),
  "catalogId": "STAT351",
  "classRoom": "Sherman 145",
  "courseCredit": NumberInt(3),
  "courseName": "Stat Biz\/Econ Tuesday Discussion",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-09-02T17:10:56.635Z"),
  "email": "estanwy1@umbc.edu",
  "endTime": "2:50 PM",
  "enrolledCount": NumberInt(0),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9474975ab3315370054c"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue",
  "section": NumberInt(6),
  "startTime": "2:00 PM",
  "version": NumberLong(4),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:50:35.656Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5405a5f3975a978274e518d2"),
  "catalogId": "IS147",
  "classRoom": "ITE468",
  "courseCredit": NumberInt(3),
  "courseName": "Intro to Comp Programming",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-09-02T11:11:47.219Z"),
  "email": "redding@umbc.edu",
  "endTime": "12:45 PM",
  "enrolledCount": NumberInt(0),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9473975ab331537004ec"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "section": NumberInt(1),
  "startTime": "11:30 AM",
  "version": NumberLong(6),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:50:38.996Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5404f259975a1c6f198fc7c9"),
  "catalogId": "CHEM123",
  "classRoom": "IT\/E 104",
  "courseCredit": NumberInt(3),
  "courseName": "General, Organic, and Biochem I",
  "createdBy": "fhusain1@umbc.edu",
  "createdOn": ISODate("2014-09-01T22:25:29.553Z"),
  "email": "atracy@umbc.edu",
  "endTime": "9:50 AM",
  "enrolledCount": NumberInt(4),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946d975ab33153700313"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed,Fri",
  "section": NumberInt(1),
  "startTime": "8:45 AM",
  "version": NumberLong(5),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:50:57.886Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5404b4cb975a43d59cba8445"),
  "catalogId": "ECON101",
  "classRoom": "Sondheim 105",
  "courseCredit": NumberInt(3),
  "courseName": "Microeconomics",
  "createdBy": "husain5@umbc.edu",
  "createdOn": ISODate("2014-09-01T18:02:51.818Z"),
  "email": "ldickson@umbc.edu",
  "endTime": "2:15 PM",
  "enrolledCount": NumberInt(4),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9470975ab331537003f7"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed",
  "section": NumberInt(4),
  "startTime": "1:00 PM",
  "version": NumberLong(5),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:51:06.523Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("540205fc975ace6ec7417623"),
  "catalogId": "BIOL141",
  "classRoom": "Math Psyc 106",
  "courseCredit": NumberInt(3),
  "courseName": "Biology 141 Discussion",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-30T17:12:28.782Z"),
  "email": "efeeser@umbc.edu",
  "endTime": "2:50 PM",
  "enrolledCount": NumberInt(4),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("540206a83219e0310fceeb4e"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon",
  "section": NumberInt(2),
  "startTime": "2:00 PM",
  "version": NumberLong(7),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:53:12.674Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("54020b193219e07f21ceeb4d"),
  "catalogId": "BIOL141",
  "classRoom": "Math Psyc 104",
  "courseCredit": NumberLong(3),
  "courseName": "Biology 141 Discussion",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-30T17:12:28.782Z"),
  "email": "efeeser@umbc.edu",
  "endTime": "3:50 PM",
  "enrolledCount": NumberLong(1),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("540206a83219e0310fceeb4e"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon",
  "section": NumberLong(3),
  "startTime": "3:00 PM",
  "version": NumberLong(2),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:53:14.445Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("54020b453219e0310fceeb4f"),
  "catalogId": "BIOL141",
  "classRoom": "Math Psyc 012",
  "courseCredit": NumberLong(3),
  "courseName": "Biology 141 Discussion",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-30T17:12:28.782Z"),
  "email": "efeeser@umbc.edu",
  "endTime": "1:50 PM",
  "enrolledCount": NumberInt(5),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("540206a83219e0310fceeb4e"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue",
  "section": NumberLong(4),
  "startTime": "1:00 PM",
  "version": NumberLong(6),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:53:19.285Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("54020b6d3219e07f21ceeb4e"),
  "catalogId": "BIOL141",
  "classRoom": "Fine Arts 006",
  "courseCredit": NumberLong(3),
  "courseName": "Biology 141 Discussion",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-30T17:12:28.782Z"),
  "email": "efeeser@umbc.edu",
  "endTime": "3:20 PM",
  "enrolledCount": NumberInt(3),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("540206a83219e0310fceeb4e"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue",
  "section": NumberLong(5),
  "startTime": "2:30 PM",
  "version": NumberLong(4),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:53:21.188Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("54020bae3219e0310fceeb50"),
  "catalogId": "BIOL141",
  "classRoom": "Sondheim 207",
  "courseCredit": NumberLong(3),
  "courseName": "Biology 141 Discussion",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-30T17:12:28.782Z"),
  "email": "efeeser@umbc.edu",
  "endTime": "2:50 PM",
  "enrolledCount": NumberInt(5),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("540206a83219e0310fceeb4e"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Wed",
  "section": NumberLong(6),
  "startTime": "2:00 PM",
  "version": NumberLong(8),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:53:22.891Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("54020bcd3219e07f21ceeb4f"),
  "catalogId": "BIOL141",
  "classRoom": "Math Psyc 106",
  "courseCredit": NumberLong(3),
  "courseName": "Biology 141 Discussion",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-30T17:12:28.782Z"),
  "email": "efeeser@umbc.edu",
  "endTime": "3:50 PM",
  "enrolledCount": NumberInt(3),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("540206a83219e0310fceeb4e"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Wed",
  "section": NumberLong(7),
  "startTime": "3:00 PM",
  "version": NumberLong(4),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:53:24.649Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("54020c073219e0310fceeb51"),
  "catalogId": "BIOL141",
  "classRoom": "Fine Arts 006",
  "courseCredit": NumberLong(3),
  "courseName": "Biology 141 Discussion",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-30T17:12:28.782Z"),
  "email": "efeeser@umbc.edu",
  "endTime": "1:50 PM",
  "enrolledCount": NumberInt(6),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("540206a83219e0310fceeb4e"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Thu",
  "section": NumberLong(8),
  "startTime": "1:00 PM",
  "version": NumberLong(7),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:53:26.351Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("54020c2a3219e07f21ceeb50"),
  "catalogId": "BIOL141",
  "classRoom": "Sondheim 209",
  "courseCredit": NumberLong(3),
  "courseName": "Biology 141 Discussion",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-30T17:12:28.782Z"),
  "email": "efeeser@umbc.edu",
  "endTime": "3:20 PM",
  "enrolledCount": NumberInt(4),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("540206a83219e0310fceeb4e"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Thu",
  "section": NumberLong(9),
  "startTime": "2:30 PM",
  "version": NumberLong(5),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:53:28.189Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("54020c603219e0310fceeb52"),
  "catalogId": "BIOL141",
  "classRoom": "Engineering 022",
  "courseCredit": NumberLong(3),
  "courseName": "Biology 141 Discussion",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-30T17:12:28.782Z"),
  "email": "efeeser@umbc.edu",
  "endTime": "11:50 AM",
  "enrolledCount": NumberInt(5),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("540206a83219e0310fceeb4e"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Fri",
  "section": NumberLong(10),
  "startTime": "11:00 AM",
  "version": NumberLong(6),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:53:29.921Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("54020c9a3219e07f21ceeb51"),
  "catalogId": "BIOL141",
  "classRoom": "Fine Arts 006",
  "courseCredit": NumberLong(3),
  "courseName": "Biology 141 Discussion",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-30T17:12:28.782Z"),
  "email": "efeeser@umbc.edu",
  "endTime": "2:50 PM",
  "enrolledCount": NumberInt(2),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("540206a83219e0310fceeb4e"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Fri",
  "section": NumberLong(11),
  "startTime": "2:00 PM",
  "version": NumberLong(3),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:53:31.791Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5401e364975ace6ec741761c"),
  "catalogId": "STAT351",
  "classRoom": "Sherman 015",
  "courseCredit": NumberInt(3),
  "courseName": "Stat for Biz\/Econ Discussion",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-30T14:44:52.719Z"),
  "email": "estanwy1@umbc.edu",
  "endTime": "1:50 PM",
  "enrolledCount": NumberInt(1),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9474975ab3315370054c"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue",
  "section": NumberInt(5),
  "startTime": "1:00 PM",
  "version": NumberLong(5),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:53:47.437Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("54011b963219e0bb07ceeb4f"),
  "catalogId": "MATH150",
  "classRoom": "UC115D",
  "courseCredit": NumberLong(3),
  "courseName": "Precalculus Seminar",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-30T00:13:29.557Z"),
  "email": "raji@umbc.edu",
  "endTime": "9:50 AM",
  "enrolledCount": NumberInt(6),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9473975ab33153700524"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon",
  "section": NumberLong(2),
  "startTime": "9:00 AM",
  "version": NumberLong(12),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:55:03.942Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5400a1b1975a76b7173fe70a"),
  "catalogId": "GERM201",
  "classRoom": "Sherman 219E",
  "courseCredit": NumberInt(3),
  "courseName": "Intermediate German I",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-29T15:52:17.280Z"),
  "email": "bayerl@umbc.edu",
  "endTime": "10:50 AM",
  "enrolledCount": NumberInt(0),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9474975ab33153700567"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Wed",
  "section": NumberInt(3),
  "startTime": "10:00 AM",
  "version": NumberLong(4),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:56:33.197Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5400a1fd3219e0c869ceeb4e"),
  "catalogId": "GERM201",
  "classRoom": "Math Pysc 012",
  "courseCredit": NumberLong(3),
  "courseName": "Intermediate German I",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-29T15:52:17.280Z"),
  "email": "ssantora@umbc.edu",
  "endTime": "1:50 PM",
  "enrolledCount": NumberInt(1),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9474975ab33153700587"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Thu",
  "section": NumberLong(4),
  "startTime": "1:00 PM",
  "version": NumberLong(6),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:56:35.581Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("5400a2553219e0982eceeb54"),
  "catalogId": "GERM201",
  "classRoom": "Math Pysc 104",
  "courseCredit": NumberLong(3),
  "courseName": "Intermediate German I",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-29T15:52:17.280Z"),
  "email": "ssantora@umbc.edu",
  "endTime": "3:20 PM",
  "enrolledCount": NumberInt(4),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9474975ab33153700587"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Thu",
  "section": NumberLong(5),
  "startTime": "2:30 PM",
  "version": NumberLong(9),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:56:37.954Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53ff71723219e0982eceeb52"),
  "catalogId": "BIOL303",
  "classRoom": "ITE229",
  "courseCredit": NumberLong(3),
  "courseName": "Cell Biology Discussion",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-28T18:06:06.142Z"),
  "email": "starz@umbc.edu",
  "endTime": "4:50 PM",
  "enrolledCount": NumberInt(3),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946c975ab331537002da"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue",
  "section": NumberLong(3),
  "startTime": "4:00 PM",
  "version": NumberLong(7),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:56:54.803Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53ff6f8e975a76b7173fe6e5"),
  "catalogId": "BIOL303",
  "classRoom": "Math Pysc 106",
  "courseCredit": NumberInt(3),
  "courseName": "Cell Biology Discussion",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-28T18:06:06.142Z"),
  "email": "starz@umbc.edu",
  "endTime": "3:50 PM",
  "enrolledCount": NumberInt(1),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946c975ab331537002da"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon",
  "section": NumberInt(2),
  "startTime": "3:00 PM",
  "version": NumberLong(5),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:56:56.894Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53ff723a3219e0982eceeb53"),
  "catalogId": "BIOL303",
  "classRoom": "Bio Sciences 004",
  "courseCredit": NumberLong(3),
  "courseName": "Cell Biology Discussion",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-28T18:06:06.142Z"),
  "email": "starz@umbc.edu",
  "endTime": "2:50 PM",
  "enrolledCount": NumberInt(2),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946c975ab331537002da"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Fri",
  "section": NumberLong(4),
  "startTime": "2:00 PM",
  "version": NumberLong(4),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:56:58.995Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53fe7a0d975a76b7173fe6c0"),
  "catalogId": "ENME304",
  "classRoom": "Performing Arts 132",
  "courseCredit": NumberInt(3),
  "courseName": "Machine Design",
  "createdBy": "feldman3@umbc.edu",
  "createdOn": ISODate("2014-08-28T00:38:37.280Z"),
  "email": "info@edupal.co",
  "endTime": "9:50 AM",
  "enrolledCount": NumberInt(2),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946a975ab33153700293"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed,Fri",
  "section": NumberInt(1),
  "startTime": "9:00 AM",
  "version": NumberLong(6),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:57:17.675Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53fe76d3975a76b7173fe6bf"),
  "catalogId": "ENME321",
  "classRoom": "ITE233",
  "courseCredit": NumberInt(3),
  "courseName": "Transfer Processes",
  "createdBy": "feldman3@umbc.edu",
  "createdOn": ISODate("2014-08-28T00:24:51.147Z"),
  "email": "roma@umbc.edu",
  "endTime": "12:15 PM",
  "enrolledCount": NumberInt(1),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fe763d3219e0054dceeb4e"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed",
  "section": NumberInt(1),
  "startTime": "11:00 AM",
  "version": NumberLong(7),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:57:19.685Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53fd2e01975a76b7173fe677"),
  "catalogId": "MLL498H",
  "classRoom": "Sherman Hall 148C",
  "courseCredit": NumberInt(3),
  "courseName": "Honors Seminar",
  "createdBy": "sifra1@umbc.edu",
  "createdOn": ISODate("2014-08-27T01:01:53.649Z"),
  "email": "ashields@umbc.edu",
  "endTime": "7:00 PM",
  "enrolledCount": NumberInt(1),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9475975ab3315370058a"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Thu",
  "section": NumberInt(1),
  "startTime": "4:30 PM",
  "version": NumberLong(3),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:57:28.336Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53fd2bbb975a76b7173fe673"),
  "catalogId": "LING320",
  "classRoom": "Meyerhoff Chemistry 256",
  "courseCredit": NumberInt(3),
  "courseName": "Syntax",
  "createdBy": "sifra1@umbc.edu",
  "createdOn": ISODate("2014-08-27T00:52:11.743Z"),
  "email": "westphal@umbc.edu",
  "endTime": "6:45 PM",
  "enrolledCount": NumberInt(1),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9475975ab33153700590"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed",
  "section": NumberInt(1),
  "startTime": "5:30 PM",
  "version": NumberLong(3),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:57:36.486Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53fd0d8a975a76b7173fe66a"),
  "catalogId": "PHED123",
  "classRoom": "Sherman Hall 210",
  "courseCredit": NumberInt(3),
  "courseName": "Officiating",
  "createdBy": "em20@umbc.edu",
  "createdOn": ISODate("2014-08-26T22:43:22.567Z"),
  "email": "erical@umbc.edu",
  "endTime": "10:50 AM",
  "enrolledCount": NumberInt(0),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946a975ab33153700293"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed",
  "section": NumberInt(1),
  "startTime": "10:00 AM",
  "version": NumberLong(4),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:57:40.316Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53fc8fc7975a76b7173fe63a"),
  "catalogId": "IS448",
  "classRoom": "ITE468",
  "courseCredit": NumberInt(3),
  "courseName": "Markup and Scripting Languages",
  "createdBy": "sam30@umbc.edu",
  "createdOn": ISODate("2014-08-26T13:46:47.358Z"),
  "email": "sampath@umbc.edu",
  "endTime": "7:00 PM",
  "enrolledCount": NumberInt(2),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9473975ab331537004f2"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon",
  "section": NumberInt(2),
  "startTime": "4:30 PM",
  "version": NumberLong(4),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:57:43.51Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53fc8f4d975a76b7173fe638"),
  "catalogId": "IS450",
  "classRoom": "PAB 107",
  "courseCredit": NumberInt(3),
  "courseName": "Data Communications and Networks",
  "createdBy": "sam30@umbc.edu",
  "createdOn": ISODate("2014-08-26T13:44:45.505Z"),
  "email": "jmartens@umbc.edu",
  "endTime": "9:45 AM",
  "enrolledCount": NumberInt(1),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9473975ab331537004e1"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "section": NumberInt(1),
  "startTime": "8:30 AM",
  "version": NumberLong(3),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:57:57.115Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53fc8edc975a76b7173fe637"),
  "catalogId": "JPNS201",
  "classRoom": "Sondheim 208",
  "courseCredit": NumberInt(3),
  "courseName": "Japanese 201",
  "createdBy": "sam30@umbc.edu",
  "createdOn": ISODate("2014-08-26T13:42:52.495Z"),
  "email": "tmkhgnbm@umbc.edu",
  "endTime": "10:50 AM",
  "enrolledCount": NumberInt(1),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9474975ab33153700573"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed,Fri",
  "section": NumberInt(1),
  "startTime": "10:00 AM",
  "version": NumberLong(4),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:58:39.256Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53fbc676975a76b7173fe607"),
  "catalogId": "PSYC100",
  "classRoom": "ITE104",
  "courseCredit": NumberInt(3),
  "courseName": "Introduction to Psychology",
  "createdBy": "jonellm1@umbc.edu",
  "createdOn": ISODate("2014-08-25T23:27:50.956Z"),
  "email": "eobrien@umbc.edu",
  "endTime": "3:45 PM",
  "enrolledCount": NumberInt(16),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9476975ab33153700601"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed",
  "section": NumberInt(2),
  "startTime": "2:30 PM",
  "version": NumberLong(26),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:58:46.532Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53fbc633975a76b7173fe606"),
  "catalogId": "Poli233",
  "classRoom": "Public Policy 206",
  "courseCredit": NumberInt(3),
  "courseName": "Common Law and Legal Analysis",
  "createdBy": "jonellm1@umbc.edu",
  "createdOn": ISODate("2014-08-25T23:26:43.730Z"),
  "email": "kxmiller@umbc.edu",
  "endTime": "9:40 PM",
  "enrolledCount": NumberInt(3),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9476975ab331537005e3"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Wed",
  "section": NumberInt(1),
  "startTime": "7:10 PM",
  "version": NumberLong(5),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:58:48.240Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53fbc584975a76b7173fe603"),
  "catalogId": "Phil100",
  "classRoom": "Sondheim 204",
  "courseCredit": NumberInt(3),
  "courseName": "Introduction to Philosophy",
  "createdBy": "jonellm1@umbc.edu",
  "createdOn": ISODate("2014-08-25T23:23:48.626Z"),
  "email": "eby@umbc.edu",
  "endTime": "11:15 AM",
  "enrolledCount": NumberInt(3),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fbd2043219e0ca15ceeb4e"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "section": NumberInt(6),
  "startTime": "10:00 AM",
  "version": NumberLong(9),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:58:51.651Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53fbc4a3975a76b7173fe602"),
  "catalogId": "Musc170",
  "classRoom": "PAHB140",
  "courseCredit": NumberInt(3),
  "courseName": "Beginning Voice Class",
  "createdBy": "jonellm1@umbc.edu",
  "createdOn": ISODate("2014-08-25T23:20:03.504Z"),
  "email": "jackson@umbc.edu",
  "endTime": "3:20 PM",
  "enrolledCount": NumberInt(1),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946a975ab33153700293"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue",
  "section": NumberInt(1),
  "startTime": "2:30 PM",
  "version": NumberLong(3),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:58:53.251Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53fa3a3f975abef615620161"),
  "catalogId": "PHYS122",
  "classRoom": "UC115D",
  "courseCredit": NumberInt(3),
  "courseName": "Introductory Physics II Discussion",
  "createdBy": "sasha@umbc.edu",
  "createdOn": ISODate("2014-08-24T19:17:19.215Z"),
  "email": "andersoe@umbc.edu",
  "endTime": "9:00 PM",
  "enrolledCount": NumberInt(4),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9475975ab331537005c3"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon",
  "section": NumberInt(2),
  "startTime": "7:10 PM",
  "version": NumberLong(17),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-26T23:59:28.539Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53f8bf40975ac9dcd58cea20"),
  "catalogId": "PHIL251",
  "classRoom": "Math and psychology 106",
  "courseCredit": NumberInt(3),
  "courseName": "philosophy",
  "createdBy": "abhij1@umbc.edu",
  "createdOn": ISODate("2014-08-23T16:20:16.994Z"),
  "email": "zhuang@umbc.edu",
  "endTime": "10:50 AM",
  "enrolledCount": NumberInt(3),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9473975ab331537004d5"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Tue",
  "section": NumberInt(1),
  "startTime": "10:00 AM",
  "version": NumberLong(12),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-27T00:05:43.465Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53f847813219e0be6a59662b"),
  "catalogId": "BIOL302",
  "classRoom": "BS004",
  "courseCredit": NumberLong(3),
  "courseName": "Molecular and General Genetics",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-23T07:42:10.855Z"),
  "email": "cwagner@umbc.edu",
  "endTime": "5:50 PM",
  "enrolledCount": NumberLong(1),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946c975ab331537002dd"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Wed",
  "section": NumberLong(4),
  "startTime": "5:00 PM",
  "version": NumberLong(4),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-27T00:02:33.215Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53f4d584975a134d535d1769"),
  "catalogId": "BIOL410",
  "classRoom": "ENG104A",
  "courseCredit": NumberInt(3),
  "courseName": "Modeling in the Life Sciences",
  "createdBy": "bustos@umbc.edu",
  "createdOn": ISODate("2014-08-20T17:06:12.450Z"),
  "email": "bustos@umbc.edu",
  "endTime": "10:00 PM",
  "enrolledCount": NumberInt(2),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946b975ab331537002b2"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed",
  "section": NumberInt(1),
  "startTime": "8:00 AM",
  "version": NumberLong(3),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-27T00:03:25.404Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53f600803219e02840596630"),
  "catalogId": "CHEM101H",
  "classRoom": "UC201",
  "courseCredit": NumberLong(3),
  "courseName": "Chemistry I Honors",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-21T00:57:53.327Z"),
  "email": "hamilton@umbc.edu",
  "endTime": "9:50 AM",
  "enrolledCount": NumberInt(7),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946d975ab33153700305"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue",
  "section": NumberLong(5),
  "startTime": "8:00 AM",
  "version": NumberLong(18),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-27T00:03:40.511Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53f5fdd23219e0f33f596630"),
  "catalogId": "CHEM101H",
  "classRoom": "UC201",
  "courseCredit": NumberLong(3),
  "courseName": "Chemistry I Honors",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-21T00:57:53.327Z"),
  "email": "hamilton@umbc.edu",
  "endTime": "2:50 PM",
  "enrolledCount": NumberInt(4),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946d975ab33153700305"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Wed",
  "section": NumberLong(2),
  "startTime": "1:00 PM",
  "version": NumberLong(29),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-27T00:03:42.344Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53f5f59f3219e0284059662d"),
  "catalogId": "CHEM101",
  "classRoom": "UC201",
  "courseCredit": NumberLong(3),
  "courseName": "Chemistry I",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-21T00:57:53.327Z"),
  "email": "hamilton@umbc.edu",
  "endTime": "9:50 AM",
  "enrolledCount": NumberInt(13),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946d975ab33153700305"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Thu",
  "section": NumberLong(16),
  "startTime": "8:00 AM",
  "version": NumberLong(21),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-27T00:03:44.740Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53f5f5723219e0f33f59662f"),
  "catalogId": "CHEM101",
  "classRoom": "UC201",
  "courseCredit": NumberLong(3),
  "courseName": "Chemistry I",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-21T00:57:53.327Z"),
  "email": "hamilton@umbc.edu",
  "endTime": "11:50 AM",
  "enrolledCount": NumberInt(4),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946d975ab33153700305"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Wed",
  "section": NumberLong(15),
  "startTime": "10:00 AM",
  "version": NumberLong(10),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-27T00:03:46.624Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53f5f51d3219e0284059662c"),
  "catalogId": "CHEM101",
  "classRoom": "UC201",
  "courseCredit": NumberLong(3),
  "courseName": "Chemistry I",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-21T00:57:53.327Z"),
  "email": "hamilton@umbc.edu",
  "endTime": "2:50 PM",
  "enrolledCount": NumberInt(11),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946d975ab33153700305"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue",
  "section": NumberLong(14),
  "startTime": "1:00 PM",
  "version": NumberLong(18),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-27T00:03:48.843Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53f5f4d33219e0f33f59662e"),
  "catalogId": "CHEM101",
  "classRoom": "UC201",
  "courseCredit": NumberLong(3),
  "courseName": "Chemistry I",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-21T00:57:53.327Z"),
  "email": "hamilton@umbc.edu",
  "endTime": "6:50 PM",
  "enrolledCount": NumberInt(7),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946d975ab33153700305"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon",
  "section": NumberLong(13),
  "startTime": "5:00 PM",
  "version": NumberLong(13),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-27T00:03:50.774Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53f5f4a23219e0f33f59662d"),
  "catalogId": "CHEM101",
  "classRoom": "UC201",
  "courseCredit": NumberLong(3),
  "courseName": "Chemistry I",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-21T00:57:53.327Z"),
  "email": "hamilton@umbc.edu",
  "endTime": "2:50 PM",
  "enrolledCount": NumberInt(11),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946d975ab33153700305"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon",
  "section": NumberLong(12),
  "startTime": "1:00 PM",
  "version": NumberLong(19),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-27T00:03:54.499Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53f5f4703219e0284059662b"),
  "catalogId": "CHEM101",
  "classRoom": "UC201",
  "courseCredit": NumberLong(3),
  "courseName": "Chemistry I",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-21T00:57:53.327Z"),
  "email": "hamilton@umbc.edu",
  "endTime": "4:50 PM",
  "enrolledCount": NumberInt(13),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946d975ab33153700305"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue",
  "section": NumberLong(10),
  "startTime": "3:00 PM",
  "version": NumberLong(25),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-27T00:03:56.407Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53f5f44b3219e0f33f59662c"),
  "catalogId": "CHEM101",
  "classRoom": "UC201",
  "courseCredit": NumberLong(3),
  "courseName": "Chemistry I",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-21T00:57:53.327Z"),
  "email": "hamilton@umbc.edu",
  "endTime": "9:50 AM",
  "enrolledCount": NumberInt(19),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946d975ab33153700305"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue",
  "section": NumberLong(9),
  "startTime": "8:00 AM",
  "version": NumberLong(36),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-27T00:03:58.294Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53f5f3f03219e0f33f59662b"),
  "catalogId": "CHEM101",
  "classRoom": "UC201",
  "courseCredit": NumberLong(3),
  "courseName": "Chemistry I",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-21T00:57:53.327Z"),
  "email": "hamilton@umbc.edu",
  "endTime": "4:50 PM",
  "enrolledCount": NumberInt(11),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946d975ab33153700305"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon",
  "section": NumberLong(8),
  "startTime": "3:00 PM",
  "version": NumberLong(19),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-27T00:04:00.258Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53f5f39e3219e0284059662a"),
  "catalogId": "CHEM101",
  "classRoom": "UC201",
  "courseCredit": NumberLong(3),
  "courseName": "Chemistry I",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-21T00:57:53.327Z"),
  "email": "hamilton@umbc.edu",
  "endTime": "11:50 AM",
  "enrolledCount": NumberInt(7),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946d975ab33153700305"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon",
  "section": NumberLong(7),
  "startTime": "10:00 AM",
  "version": NumberLong(21),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-27T00:04:02.129Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53f5f3513219e0f33f59662a"),
  "catalogId": "CHEM101",
  "classRoom": "UC201",
  "courseCredit": NumberLong(3),
  "courseName": "Chemistry I",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-21T00:57:53.327Z"),
  "email": "hamilton@umbc.edu",
  "endTime": "4:50 PM",
  "enrolledCount": NumberInt(9),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946d975ab33153700305"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Thu",
  "section": NumberLong(5),
  "startTime": "3:00 PM",
  "version": NumberLong(19),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-27T00:04:05.872Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53f5f2d63219e02840596629"),
  "catalogId": "CHEM101",
  "classRoom": "UC201",
  "courseCredit": NumberLong(3),
  "courseName": "Chemistry I",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-21T00:57:53.327Z"),
  "email": "hamilton@umbc.edu",
  "endTime": "2:50 PM",
  "enrolledCount": NumberInt(9),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946d975ab33153700305"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Thu",
  "section": NumberLong(4),
  "startTime": "1:00 PM",
  "version": NumberLong(18),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-27T00:04:07.520Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53f5f20d3219e0f33f596629"),
  "catalogId": "CHEM101",
  "classRoom": "UC201",
  "courseCredit": NumberLong(3),
  "courseName": "Chemistry I",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-21T00:57:53.327Z"),
  "email": "hamilton@umbc.edu",
  "endTime": "4:50 PM",
  "enrolledCount": NumberInt(8),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946d975ab33153700305"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Wed",
  "section": NumberLong(3),
  "startTime": "3:00 PM",
  "version": NumberLong(22),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-27T00:04:09.577Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53f6011b975ad90e1e0c2573"),
  "catalogId": "CHEM101H",
  "classRoom": "MEYR120",
  "courseCredit": NumberInt(3),
  "courseName": "Chemistry I Honors Seminar",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-21T14:24:27.645Z"),
  "email": "pjsmith@umbc.edu",
  "endTime": "12:50 PM",
  "enrolledCount": NumberInt(8),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946d975ab331537002fd"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Thu",
  "section": NumberInt(3),
  "startTime": "12:00 PM",
  "version": NumberLong(27),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-27T00:04:13.133Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53f820c23219e0004559662a"),
  "catalogId": "PHYS111",
  "classRoom": "Physics 108",
  "courseCredit": NumberLong(3),
  "courseName": "Basic Physics I Lab",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-23T04:51:26.331Z"),
  "email": "andersoe@umbc.edu",
  "endTime": "4:50 PM",
  "enrolledCount": NumberInt(1),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9475975ab331537005c3"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon",
  "section": NumberLong(5),
  "startTime": "3:00 PM",
  "version": NumberLong(11),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-27T00:04:29.967Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53f81ff43219e00045596629"),
  "catalogId": "PHYS111",
  "classRoom": "Physics 108",
  "courseCredit": NumberLong(3),
  "courseName": "Basic Physics I Lab",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-23T04:51:26.331Z"),
  "email": "andersoe@umbc.edu",
  "endTime": "7:20 PM",
  "enrolledCount": NumberInt(1),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9475975ab331537005c3"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon",
  "section": NumberLong(4),
  "startTime": "5:30 PM",
  "version": NumberLong(8),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-27T00:04:33.496Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53f81dce975a321c016eda94"),
  "catalogId": "PHYS111",
  "classRoom": "Physics 108",
  "courseCredit": NumberInt(3),
  "courseName": "Basic Physics I Lab",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-23T04:51:26.331Z"),
  "email": "andersoe@umbc.edu",
  "endTime": "10:50 AM",
  "enrolledCount": NumberInt(1),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9475975ab331537005c3"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon",
  "section": NumberInt(2),
  "startTime": "9:00 AM",
  "version": NumberLong(10),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-27T00:04:39.451Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53f8208f975a177f6994a8d8"),
  "catalogId": "PHYS111",
  "classRoom": "Physics 108",
  "courseCredit": NumberInt(3),
  "courseName": "Basic Physics I Lab",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-23T05:03:11.446Z"),
  "email": "andersoe@umbc.edu",
  "endTime": "9:50 AM",
  "enrolledCount": NumberInt(1),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9475975ab331537005c3"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Wed",
  "section": NumberInt(3),
  "startTime": "8:00 AM",
  "version": NumberLong(9),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-27T00:04:41.978Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53f8273d975ac9dcd58cea19"),
  "catalogId": "CHEM351L",
  "classRoom": "MEYR030",
  "courseCredit": NumberInt(3),
  "courseName": "Organic Chemistry Laboratory I",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-23T05:31:41.218Z"),
  "email": "mptaszek@umbc.edu",
  "endTime": "1:50 PM",
  "enrolledCount": NumberInt(10),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946d975ab33153700310"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Fri",
  "section": NumberInt(1),
  "startTime": "1:00 PM",
  "version": NumberLong(24),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-27T00:04:48.64Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53f829323219e0be6a59662a"),
  "catalogId": "CHEM351L",
  "classRoom": "MEYR371",
  "courseCredit": NumberLong(3),
  "courseName": "Organic Chemistry Laboratory I",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-23T05:31:41.218Z"),
  "email": "mptaszek@umbc.edu",
  "endTime": "5:00 PM",
  "enrolledCount": NumberLong(1),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946d975ab33153700310"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon",
  "section": NumberLong(5),
  "startTime": "1:00 PM",
  "version": NumberLong(8),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-27T00:04:50.92Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53f8291c3219e0004559662e"),
  "catalogId": "CHEM351L",
  "classRoom": "MEYR371",
  "courseCredit": NumberLong(3),
  "courseName": "Organic Chemistry Laboratory I",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-23T05:31:41.218Z"),
  "email": "mptaszek@umbc.edu",
  "endTime": "5:00 PM",
  "enrolledCount": NumberInt(3),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946d975ab33153700310"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon",
  "section": NumberLong(4),
  "startTime": "1:00 PM",
  "version": NumberLong(7),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-27T00:04:53.165Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53f829143219e0be6a596629"),
  "catalogId": "CHEM351L",
  "classRoom": "MEYR371",
  "courseCredit": NumberLong(3),
  "courseName": "Organic Chemistry Laboratory I",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-23T05:31:41.218Z"),
  "email": "mptaszek@umbc.edu",
  "endTime": "5:00 PM",
  "enrolledCount": NumberLong(1),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946d975ab33153700310"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon",
  "section": NumberLong(3),
  "startTime": "1:00 PM",
  "version": NumberLong(5),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-27T00:04:56.769Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53f8290a3219e0004559662d"),
  "catalogId": "CHEM351L",
  "classRoom": "MEYR371",
  "courseCredit": NumberLong(3),
  "courseName": "Organic Chemistry Laboratory I",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-23T05:31:41.218Z"),
  "email": "mptaszek@umbc.edu",
  "endTime": "5:00 PM",
  "enrolledCount": NumberInt(3),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946d975ab33153700310"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon",
  "section": NumberLong(2),
  "startTime": "1:00 PM",
  "version": NumberLong(8),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-27T00:04:58.797Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53f8474e3219e09170596629"),
  "catalogId": "BIOL302",
  "classRoom": "Sondheim 207",
  "courseCredit": NumberLong(3),
  "courseName": "Molecular and General Genetics",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-23T07:42:10.855Z"),
  "email": "cwagner@umbc.edu",
  "endTime": "9:50 AM",
  "enrolledCount": NumberInt(4),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946c975ab331537002dd"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Wed",
  "section": NumberLong(3),
  "startTime": "9:00 AM",
  "version": NumberLong(8),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-27T00:05:07.938Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53f845d2975ac9dcd58cea1b"),
  "catalogId": "BIOL302",
  "classRoom": "BS004",
  "courseCredit": NumberInt(3),
  "courseName": "Molecular and General Genetics",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-23T07:42:10.855Z"),
  "email": "cwagner@umbc.edu",
  "endTime": "4:50 PM",
  "enrolledCount": NumberInt(1),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946c975ab331537002dd"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue",
  "section": NumberInt(2),
  "startTime": "4:00 PM",
  "version": NumberLong(7),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-27T00:05:10.523Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("53f847aa3219e0917059662a"),
  "catalogId": "BIOL302",
  "classRoom": "BS004",
  "courseCredit": NumberLong(3),
  "courseName": "Molecular and General Genetics",
  "createdBy": "mprocto1@umbc.edu",
  "createdOn": ISODate("2014-08-23T07:42:10.855Z"),
  "email": "cwagner@umbc.edu",
  "endTime": "4:50 PM",
  "enrolledCount": NumberInt(3),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946c975ab331537002dd"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Thu",
  "section": NumberLong(5),
  "startTime": "4:00 PM",
  "version": NumberLong(12),
  "lastUpdatedBy": "eduAdmin@test.edu",
  "lastUpdatedOn": ISODate("2014-09-27T00:05:32.231Z"),
  "syllabusStatus": "ACTIVE"
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("54261ef3975a8386e89b038a"),
  "catalogId": "PHYS122",
  "classRoom": "ENG027",
  "courseCredit": NumberInt(3),
  "courseName": "Physics",
  "createdBy": "ldonato1@umbc.edu",
  "createdOn": ISODate("2014-09-27T02:20:35.311Z"),
  "email": "andersoe@umbc.edu",
  "endTime": "1:50 PM",
  "enrolledCount": NumberInt(1),
  "exam": [
    {
      "dueDate": ISODate("2014-10-03T00:00:00.0Z"),
      "dueTime": "1:00 PM",
      "name": "Exam 1"
    }
  ],
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9475975ab331537005c3"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Mon,Wed,Fri",
  "section": NumberInt(1),
  "startTime": "1:00 PM",
  "syllabusStatus": "ACTIVE",
  "version": NumberLong(1),
  "lastUpdatedBy": "ldonato1@umbc.edu",
  "lastUpdatedOn": ISODate("2014-09-27T02:29:43.572Z")
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("542620d0975a8386e89b03b8"),
  "assignment": [
    {
      "dueDate": ISODate("2014-09-30T00:00:00.0Z"),
      "dueTime": "11:00 AM",
      "name": "Finish Drawing"
    }
  ],
  "catalogId": "ART114",
  "classRoom": "FINE ARTS 110C",
  "courseCredit": NumberInt(3),
  "courseName": "Drawing",
  "createdBy": "ldonato1@umbc.edu",
  "createdOn": ISODate("2014-09-27T02:28:32.264Z"),
  "email": "kissack@umbc.edu",
  "endTime": "12:50 PM",
  "enrolledCount": NumberInt(1),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb946a975ab33153700293"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "section": NumberInt(1),
  "startTime": "11:00 AM",
  "syllabusStatus": "ACTIVE",
  "version": NumberLong(0)
});
db.getCollection("syllabus").insert({
  "_id": ObjectId("54262191975a8386e89b0405"),
  "catalogId": "MATH221",
  "classRoom": "MATH 104",
  "courseCredit": NumberInt(3),
  "courseName": "Linear Algebra",
  "createdBy": "ldonato1@umbc.edu",
  "createdOn": ISODate("2014-09-27T02:31:45.883Z"),
  "email": "kogan@math.umbc.edu",
  "endTime": "2:15 PM",
  "enrolledCount": NumberInt(1),
  "firstDate": ISODate("2014-08-28T00:00:00.0Z"),
  "institute": "UMBC",
  "instructor": ObjectId("53fb9474975ab33153700534"),
  "isVerified": false,
  "lastDate": ISODate("2014-12-09T00:00:00.0Z"),
  "meetingDates": "Tue,Thu",
  "section": NumberInt(1),
  "startTime": "1:00 PM",
  "syllabusStatus": "ACTIVE",
  "version": NumberLong(1),
  "lastUpdatedBy": "ldonato1@umbc.edu",
  "lastUpdatedOn": ISODate("2014-09-27T02:32:44.655Z")
});
