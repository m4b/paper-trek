function indexOfEpisodeTitle(series, title){
  var i = 0;
  for (var index in series){
    if (title == series[index].title){
      return i;
    }
    i++;
  }
  console.log("not found, returning null");
  return null;
}

function seriesPrettyLookup(key){
    if (key == "tng")
        return "The Next Generation";
    if (key == "ds9")
        return "Deep Space Nine";
    if (key == "voyager")
        return "Voyager";
    if (key == "enterprise")
        return "Enterpise";
    if (key == "original")
        return "Original";
    console.log("warning: series Lookup received case larger than 4: ", key);
    return "The Next Generation";
}

function seriesLookup(index){
      switch (index){
        case 0:
          return "tng";
        case 1:
          return "ds9";
        case 2:
          return "voyager";
        case 3:
          return "enterprise";
        case 4:
          return "original";
        default:
          console.log("warning: seasonLookup received case larger than 4")
          return "tng";
      }
}

var seasonColors = [
    {"backgroundColor": "#69F0AE", "color":"#000"},// green
    {"backgroundColor": "#FFAB40", "color":"#000"}, // orangish
    {"backgroundColor": "#18FFFF", "color":"#000"}, // aquamarine
    {"backgroundColor": "#FF4081", "color":"#FFF"}, // pinkish
    {"backgroundColor": "#E040FB", "color":"#FFF"}, // purple
    {"backgroundColor": "#FFFF00", "color":"#000"}, // gold/yellow
    {"backgroundColor": "#FF6E40", "color":"#000"}  // orange-red
    ];

var series = [{"title" : "original"},
        {"title" : "tng"},
        {"title" : "ds9"},
        {"title" : "voyager"},
        {"title" : "enterprise"}];

var groups = {
    "ds9": [
        {
            "data": {
                "divider": "Season 1"
            },
            "length": 19
        },
        {
            "data": {
                "divider": "Season 2"
            },
            "length": 26
        },
        {
            "data": {
                "divider": "Season 3"
            },
            "length": 26
        },
        {
            "data": {
                "divider": "Season 4"
            },
            "length": 25
        },
        {
            "data": {
                "divider": "Season 5"
            },
            "length": 26
        },
        {
            "data": {
                "divider": "Season 6"
            },
            "length": 26
        },
        {
            "data": {
                "divider": "Season 7"
            },
            "length": 25
        }
    ],
    "enterprise": [
        {
            "data": {
                "divider": "Season 1"
            },
            "length": 25
        },
        {
            "data": {
                "divider": "Season 2"
            },
            "length": 26
        },
        {
            "data": {
                "divider": "Season 3"
            },
            "length": 24
        },
        {
            "data": {
                "divider": "Season 4"
            },
            "length": 22
        }
    ],
    "original": [
        {
            "data": {
                "divider": "Season 1"
            },
            "length": 30 // hack because of +1 zero season
        },
        {
            "data": {
                "divider": "Season 2"
            },
            "length": 26
        },
        {
            "data": {
                "divider": "Season 3"
            },
            "length": 24
        }
    ],
    "tng": [
        {
            "data": {
                "divider": "Season 1"
            },
            "length": 25
        },
        {
            "data": {
                "divider": "Season 2"
            },
            "length": 22
        },
        {
            "data": {
                "divider": "Season 3"
            },
            "length": 26
        },
        {
            "data": {
                "divider": "Season 4"
            },
            "length": 26
        },
        {
            "data": {
                "divider": "Season 5"
            },
            "length": 26
        },
        {
            "data": {
                "divider": "Season 6"
            },
            "length": 26
        },
        {
            "data": {
                "divider": "Season 7"
            },
            "length": 25
        }
    ],
    "voyager": [
        {
            "data": {
                "divider": "Season 1"
            },
            "length": 15
        },
        {
            "data": {
                "divider": "Season 2"
            },
            "length": 26
        },
        {
            "data": {
                "divider": "Season 3"
            },
            "length": 26
        },
        {
            "data": {
                "divider": "Season 4"
            },
            "length": 26
        },
        {
            "data": {
                "divider": "Season 5"
            },
            "length": 25
        },
        {
            "data": {
                "divider": "Season 6"
            },
            "length": 26
        },
        {
            "data": {
                "divider": "Season 7"
            },
            "length": 24
        }
    ]
};

var data =
    {
    "ds9": [
        {
            "airdate": "1993-01-03",
            "episode": "01/02",
            "href": "http://en.memory-alpha.org/wiki/Emissary_%28episode%29",
            "number": "1x01/02",
            "prodno": "40511-721",
            "season": "1",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "46379.1",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/1/19/Sisko_and_Locutus_in_Prophet_Vision.jpg/revision/latest/scale-to-width/292?cb=20121114003252&path-prefix=en",
                "name": "Sisko_and_Locutus_in_Prophet_Vision.jpg"
            },
            "title": "Emissary"
        },
        {
            "airdate": "1993-01-09",
            "episode": "03",
            "href": "http://en.memory-alpha.org/wiki/Past_Prologue_%28episode%29",
            "number": "1x03",
            "prodno": "40511-404",
            "season": "1",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/8/8e/Tahna_Los_with_Lursa_and_B%27Etor.jpg/revision/latest/scale-to-width/292?cb=20050922081225&path-prefix=en",
                "name": "Tahna_Los_with_Lursa_and_BEtor.jpg"
            },
            "title": "Past Prologue"
        },
        {
            "airdate": "1993-01-17",
            "episode": "04",
            "href": "http://en.memory-alpha.org/wiki/A_Man_Alone_%28episode%29",
            "number": "1x04",
            "prodno": "40511-403",
            "season": "1",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "46421.5",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/1/16/Ibudans_second_clone.jpg/revision/latest/scale-to-width/292?cb=20070513153901&path-prefix=en",
                "name": "Ibudans_second_clone.jpg"
            },
            "title": "A Man Alone"
        },
        {
            "airdate": "1993-01-24",
            "episode": "05",
            "href": "http://en.memory-alpha.org/wiki/Babel_%28episode%29",
            "number": "1x05",
            "prodno": "40511-405",
            "season": "1",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "46423.7",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/f/fc/Babel_virus.jpg/revision/latest/scale-to-width/292?cb=20050922083718&path-prefix=en",
                "name": "Babel_virus.jpg"
            },
            "title": "Babel"
        },
        {
            "airdate": "1993-01-30",
            "episode": "06",
            "href": "http://en.memory-alpha.org/wiki/Captive_Pursuit_%28episode%29",
            "number": "1x06",
            "prodno": "40511-406",
            "season": "1",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "46477.5",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/0/01/Quark_Obrien_Tosk.jpg/revision/latest/scale-to-width/292?cb=20050921045528&path-prefix=en",
                "name": "Quark_Obrien_Tosk.jpg"
            },
            "title": "Captive Pursuit"
        },
        {
            "airdate": "1993-02-06",
            "episode": "07",
            "href": "http://en.memory-alpha.org/wiki/Q-Less_%28episode%29",
            "number": "1x07",
            "prodno": "40511-407",
            "season": "1",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "46531.2",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/b/b2/Q_and_Vash_DS9.jpg/revision/latest/scale-to-width/292?cb=20050910113449&path-prefix=en",
                "name": "Q_and_Vash_DS9.jpg"
            },
            "title": "Q-Less"
        },
        {
            "airdate": "1993-02-13",
            "episode": "08",
            "href": "http://en.memory-alpha.org/wiki/Dax_%28episode%29",
            "number": "1x08",
            "prodno": "40511-408",
            "season": "1",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "46910.1",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/e/e2/Dax_on_trial.jpg/revision/latest/scale-to-width/292?cb=20050922081355&path-prefix=en",
                "name": "Dax_on_trial.jpg"
            },
            "title": "Dax"
        },
        {
            "airdate": "1993-02-20",
            "episode": "09",
            "href": "http://en.memory-alpha.org/wiki/The_Passenger_%28episode%29",
            "number": "1x09",
            "prodno": "40511-409",
            "season": "1",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/2/2b/Rao_Vantika.jpg/revision/latest/scale-to-width/292?cb=20050922081542&path-prefix=en",
                "name": "Rao_Vantika.jpg"
            },
            "title": "The Passenger"
        },
        {
            "airdate": "1993-03-14",
            "episode": "10",
            "href": "http://en.memory-alpha.org/wiki/Move_Along_Home_%28episode%29",
            "number": "1x10",
            "prodno": "40511-410",
            "season": "1",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/3/31/Wadi.jpg/revision/latest/scale-to-width/292?cb=20050921033749&path-prefix=en",
                "name": "Wadi.jpg"
            },
            "title": "Move Along Home"
        },
        {
            "airdate": "1993-03-21",
            "episode": "11",
            "href": "http://en.memory-alpha.org/wiki/The_Nagus_%28episode%29",
            "number": "1x11",
            "prodno": "40511-411",
            "season": "1",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/4/45/Quark_tells_Odo_to_kiss_it.jpg/revision/latest/scale-to-width/292?cb=20050920134438&path-prefix=en",
                "name": "Quark_tells_Odo_to_kiss_it.jpg"
            },
            "title": "The Nagus"
        },
        {
            "airdate": "1993-04-18",
            "episode": "12",
            "href": "http://en.memory-alpha.org/wiki/Vortex_%28episode%29",
            "number": "1x12",
            "prodno": "40511-412",
            "season": "1",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/e/ed/Miradorn_twins.jpg/revision/latest/scale-to-width/292?cb=20090730201233&path-prefix=en",
                "name": "Miradorn_twins.jpg"
            },
            "title": "Vortex"
        },
        {
            "airdate": "1993-04-25",
            "episode": "13",
            "href": "http://en.memory-alpha.org/wiki/Battle_Lines_%28episode%29",
            "number": "1x13",
            "prodno": "40511-413",
            "season": "1",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/1/18/Sisko_with_Ennis_and_Nol-Ennis.jpg/revision/latest/scale-to-width/292?cb=20090822174229&path-prefix=en",
                "name": "Sisko_with_Ennis_and_Nol-Ennis.jpg"
            },
            "title": "Battle Lines"
        },
        {
            "airdate": "1993-05-02",
            "episode": "14",
            "href": "http://en.memory-alpha.org/wiki/The_Storyteller_%28episode%29",
            "number": "1x14",
            "prodno": "40511-414",
            "season": "1",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "46729.1",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/1/1d/Sirah_tells_the_story.jpg/revision/latest/scale-to-width/292?cb=20050921044939&path-prefix=en",
                "name": "Sirah_tells_the_story.jpg"
            },
            "title": "The Storyteller"
        },
        {
            "airdate": "1993-05-09",
            "episode": "15",
            "href": "http://en.memory-alpha.org/wiki/Progress_%28episode%29",
            "number": "1x15",
            "prodno": "40511-415",
            "season": "1",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "46844.3",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/7/7a/Nerys_and_Mullibok_%282369%29.jpg/revision/latest/scale-to-width/292?cb=20090901175110&path-prefix=en",
                "name": "Nerys_and_Mullibok_2369.jpg"
            },
            "title": "Progress"
        },
        {
            "airdate": "1993-05-16",
            "episode": "16",
            "href": "http://en.memory-alpha.org/wiki/If_Wishes_Were_Horses_%28episode%29",
            "number": "1x16",
            "prodno": "40511-416",
            "season": "1",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "46853.2",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/3/33/Rumpelstiltskin.jpg/revision/latest/scale-to-width/292?cb=20050920135744&path-prefix=en",
                "name": "Rumpelstiltskin.jpg"
            },
            "title": "If Wishes Were Horses"
        },
        {
            "airdate": "1993-05-23",
            "episode": "17",
            "href": "http://en.memory-alpha.org/wiki/The_Forsaken_%28episode%29",
            "number": "1x17",
            "prodno": "40511-417",
            "season": "1",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "46925.1",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/9/91/Lwaxana_in_love.jpg/revision/latest/scale-to-width/292?cb=20090906135849&path-prefix=en",
                "name": "Lwaxana_in_love.jpg"
            },
            "title": "The Forsaken"
        },
        {
            "airdate": "1993-05-30",
            "episode": "18",
            "href": "http://en.memory-alpha.org/wiki/Dramatis_Personae_%28episode%29",
            "number": "1x18",
            "prodno": "40511-418",
            "season": "1",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "46922.3",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/9/99/Mutiny_on_DS9.jpg/revision/latest/scale-to-width/292?cb=20090908114818&path-prefix=en",
                "name": "Mutiny_on_DS9.jpg"
            },
            "title": "Dramatis Personae"
        },
        {
            "airdate": "1993-06-13",
            "episode": "19",
            "href": "http://en.memory-alpha.org/wiki/Duet_%28episode%29",
            "number": "1x19",
            "prodno": "40511-419",
            "season": "1",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/e/e0/Aamin_Marritza_2369.jpg/revision/latest/scale-to-width/292?cb=20090914160104&path-prefix=en",
                "name": "Aamin_Marritza_2369.jpg"
            },
            "title": "Duet"
        },
        {
            "airdate": "1993-06-20",
            "episode": "20",
            "href": "http://en.memory-alpha.org/wiki/In_the_Hands_of_the_Prophets_%28episode%29",
            "number": "1x20",
            "prodno": "40511-420",
            "season": "1",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/d/d4/Winn_and_Neela.jpg/revision/latest/scale-to-width/292?cb=20090920112215&path-prefix=en",
                "name": "Winn_and_Neela.jpg"
            },
            "title": "In the Hands of the Prophets"
        },
        {
            "airdate": "1993-09-26",
            "episode": "01",
            "href": "http://en.memory-alpha.org/wiki/The_Homecoming_%28episode%29",
            "number": "2x01",
            "prodno": "40512-421",
            "season": "2",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/e/eb/Li_Nalas.jpg/revision/latest/scale-to-width/292?cb=20080906025115&path-prefix=en",
                "name": "Li_Nalas.jpg"
            },
            "title": "The Homecoming"
        },
        {
            "airdate": "1993-10-03",
            "episode": "02",
            "href": "http://en.memory-alpha.org/wiki/The_Circle_%28episode%29",
            "number": "2x02",
            "prodno": "40512-422",
            "season": "2",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/a/a9/The_Circle_holds_Kira_hostage.jpg/revision/latest/scale-to-width/292?cb=20050927065047&path-prefix=en",
                "name": "The_Circle_holds_Kira_hostage.jpg"
            },
            "title": "The Circle"
        },
        {
            "airdate": "1993-10-10",
            "episode": "03",
            "href": "http://en.memory-alpha.org/wiki/The_Siege_%28episode%29",
            "number": "2x03",
            "prodno": "40512-423",
            "season": "2",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/6/65/Bajoran_officers_holosuite.jpg/revision/latest/scale-to-width/292?cb=20050918204935&path-prefix=en",
                "name": "Bajoran_officers_holosuite.jpg"
            },
            "title": "The Siege"
        },
        {
            "airdate": "1993-10-17",
            "episode": "04",
            "href": "http://en.memory-alpha.org/wiki/Invasive_Procedures_%28episode%29",
            "number": "2x04",
            "prodno": "40512-424",
            "season": "2",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "47182.1",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/5/54/Verad_and_Sisko.jpg/revision/latest/scale-to-width/292?cb=20050923205845&path-prefix=en",
                "name": "Verad_and_Sisko.jpg"
            },
            "title": "Invasive Procedures"
        },
        {
            "airdate": "1993-10-24",
            "episode": "05",
            "href": "http://en.memory-alpha.org/wiki/Cardassians_%28episode%29",
            "number": "2x05",
            "prodno": "40512-425",
            "season": "2",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "47177.2",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/3/34/Rugal_and_dad.jpg/revision/latest/scale-to-width/292?cb=20050923170021&path-prefix=en",
                "name": "Rugal_and_dad.jpg"
            },
            "title": "Cardassians"
        },
        {
            "airdate": "1993-10-31",
            "episode": "06",
            "href": "http://en.memory-alpha.org/wiki/Melora_%28episode%29",
            "number": "2x06",
            "prodno": "40512-426",
            "season": "2",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "47229.1",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/8/89/Bashir_watches_Melora_in_zero_gravity.jpg/revision/latest/scale-to-width/292?cb=20110213021119&path-prefix=en",
                "name": "Bashir_watches_Melora_in_zero_gravity.jpg"
            },
            "title": "Melora"
        },
        {
            "airdate": "1993-11-06",
            "episode": "07",
            "href": "http://en.memory-alpha.org/wiki/Rules_of_Acquisition_%28episode%29",
            "number": "2x07",
            "prodno": "40512-427",
            "season": "2",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/6/66/Pel_Dosi_Quark.jpg/revision/latest/scale-to-width/292?cb=20050921044549&path-prefix=en",
                "name": "Pel_Dosi_Quark.jpg"
            },
            "title": "Rules of Acquisition"
        },
        {
            "airdate": "1993-11-14",
            "episode": "08",
            "href": "http://en.memory-alpha.org/wiki/Necessary_Evil_%28episode%29",
            "number": "2x08",
            "prodno": "40512-428",
            "season": "2",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "47282.5-47284.1",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/9/9f/Vaatrik_and_Odo.jpg/revision/latest/scale-to-width/292?cb=20050923210110&path-prefix=en",
                "name": "Vaatrik_and_Odo.jpg"
            },
            "title": "Necessary Evil"
        },
        {
            "airdate": "1993-11-20",
            "episode": "09",
            "href": "http://en.memory-alpha.org/wiki/Second_Sight_%28episode%29",
            "number": "2x09",
            "prodno": "40512-429",
            "season": "2",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "47329.4",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/6/69/Fenna_says_goodbye.jpg/revision/latest/scale-to-width/292?cb=20080412021831&path-prefix=en",
                "name": "Fenna_says_goodbye.jpg"
            },
            "title": "Second Sight"
        },
        {
            "airdate": "1993-11-28",
            "episode": "10",
            "href": "http://en.memory-alpha.org/wiki/Sanctuary_%28episode%29",
            "number": "2x10",
            "prodno": "40512-430",
            "season": "2",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "47391.2",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/e/eb/Haneek_and_Kira.jpg/revision/latest/scale-to-width/292?cb=20081026052802&path-prefix=en",
                "name": "Haneek_and_Kira.jpg"
            },
            "title": "Sanctuary"
        },
        {
            "airdate": "1994-01-02",
            "episode": "11",
            "href": "http://en.memory-alpha.org/wiki/Rivals_%28episode%29",
            "number": "2x11",
            "prodno": "40512-431",
            "season": "2",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/8/84/MartusMazur.jpg/revision/latest/scale-to-width/292?cb=20050309225850&path-prefix=en",
                "name": "MartusMazur.jpg"
            },
            "title": "Rivals"
        },
        {
            "airdate": "1994-01-09",
            "episode": "12",
            "href": "http://en.memory-alpha.org/wiki/The_Alternate_%28episode%29",
            "number": "2x12",
            "prodno": "40512-432",
            "season": "2",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "47391.7",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/0/0a/Odo_attacks_Mora.jpg/revision/latest/scale-to-width/292?cb=20100123090517&path-prefix=en",
                "name": "Odo_attacks_Mora.jpg"
            },
            "title": "The Alternate"
        },
        {
            "airdate": "1994-01-30",
            "episode": "13",
            "href": "http://en.memory-alpha.org/wiki/Armageddon_Game_%28episode%29",
            "number": "2x13",
            "prodno": "40512-433",
            "season": "2",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/c/c1/Bashir_and_O%27Brien_survive_attack.jpg/revision/latest/scale-to-width/292?cb=20080412023222&path-prefix=en",
                "name": "Bashir_and_OBrien_survive_attack.jpg"
            },
            "title": "Armageddon Game"
        },
        {
            "airdate": "1994-02-06",
            "episode": "14",
            "href": "http://en.memory-alpha.org/wiki/Whispers_%28episode%29",
            "number": "2x14",
            "prodno": "40512-434",
            "season": "2",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "47581.2",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/a/ac/Miles_OBrien_%28replicant%29.jpg/revision/latest/scale-to-width/292?cb=20080320191652&path-prefix=en",
                "name": "Miles_OBrien_replicant.jpg"
            },
            "title": "Whispers"
        },
        {
            "airdate": "1994-02-13",
            "episode": "15",
            "href": "http://en.memory-alpha.org/wiki/Paradise_%28episode%29",
            "number": "2x15",
            "prodno": "40512-435",
            "season": "2",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "47573.1",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/9/94/Vinod_and_alixus.jpg/revision/latest/scale-to-width/292?cb=20050801070049&path-prefix=en",
                "name": "Vinod_and_alixus.jpg"
            },
            "title": "Paradise"
        },
        {
            "airdate": "1994-02-20",
            "episode": "16",
            "href": "http://en.memory-alpha.org/wiki/Shadowplay_%28episode%29",
            "number": "2x16",
            "prodno": "40512-436",
            "season": "2",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "47603.3",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/3/34/Rurigan_and_taya.jpg/revision/latest/scale-to-width/292?cb=20050803054647&path-prefix=en",
                "name": "Rurigan_and_taya.jpg"
            },
            "title": "Shadowplay"
        },
        {
            "airdate": "1994-02-27",
            "episode": "17",
            "href": "http://en.memory-alpha.org/wiki/Playing_God_%28episode%29",
            "number": "2x17",
            "prodno": "40512-437",
            "season": "2",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/7/70/Arjin_and_Dax.jpg/revision/latest/scale-to-width/292?cb=20071216103902&path-prefix=en",
                "name": "Arjin_and_Dax.jpg"
            },
            "title": "Playing God"
        },
        {
            "airdate": "1994-03-20",
            "episode": "18",
            "href": "http://en.memory-alpha.org/wiki/Profit_and_Loss_%28episode%29",
            "number": "2x18",
            "prodno": "40512-438",
            "season": "2",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/a/a1/Natima_hogue_rekelen.jpg/revision/latest/scale-to-width/292?cb=20050803052101&path-prefix=en",
                "name": "Natima_hogue_rekelen.jpg"
            },
            "title": "Profit and Loss"
        },
        {
            "airdate": "1994-03-27",
            "episode": "19",
            "href": "http://en.memory-alpha.org/wiki/Blood_Oath_%28episode%29",
            "number": "2x19",
            "prodno": "40512-439",
            "season": "2",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/1/1e/Kang2370.jpg/revision/latest/scale-to-width/292?cb=20061110162650&path-prefix=en",
                "name": "Kang2370.jpg"
            },
            "title": "Blood Oath"
        },
        {
            "airdate": "1994-04-24",
            "episode": "20",
            "href": "http://en.memory-alpha.org/wiki/The_Maquis,_Part_I_%28episode%29",
            "number": "2x20",
            "prodno": "40512-440",
            "season": "2",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/d/d6/Maquis_colonists.jpg/revision/latest/scale-to-width/292?cb=20050803051831&path-prefix=en",
                "name": "Maquis_colonists.jpg"
            },
            "title": "The Maquis, Part I"
        },
        {
            "airdate": "1994-05-01",
            "episode": "21",
            "href": "http://en.memory-alpha.org/wiki/The_Maquis,_Part_II_%28episode%29",
            "number": "2x21",
            "prodno": "40512-441",
            "season": "2",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/4/48/Cal_hudson_maquis.jpg/revision/latest/scale-to-width/292?cb=20050803215047&path-prefix=en",
                "name": "Cal_hudson_maquis.jpg"
            },
            "title": "The Maquis, Part II"
        },
        {
            "airdate": "1994-05-08",
            "episode": "22",
            "href": "http://en.memory-alpha.org/wiki/The_Wire_%28episode%29",
            "number": "2x22",
            "prodno": "40512-442",
            "season": "2",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/9/99/Garak_hospital.jpg/revision/latest/scale-to-width/292?cb=20050822055700&path-prefix=en",
                "name": "Garak_hospital.jpg"
            },
            "title": "The Wire"
        },
        {
            "airdate": "1994-05-15",
            "episode": "23",
            "href": "http://en.memory-alpha.org/wiki/Crossover_%28episode%29",
            "number": "2x23",
            "prodno": "40512-443",
            "season": "2",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/6/67/Kira_and_Kira.jpg/revision/latest/scale-to-width/292?cb=20050805214609&path-prefix=en",
                "name": "Kira_and_Kira.jpg"
            },
            "title": "Crossover"
        },
        {
            "airdate": "1994-05-22",
            "episode": "24",
            "href": "http://en.memory-alpha.org/wiki/The_Collaborator_%28episode%29",
            "number": "2x24",
            "prodno": "40512-444",
            "season": "2",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/f/f4/Opaka_and_Bareil.jpg/revision/latest/scale-to-width/292?cb=20050817220352&path-prefix=en",
                "name": "Opaka_and_Bareil.jpg"
            },
            "title": "The Collaborator"
        },
        {
            "airdate": "1994-06-05",
            "episode": "25",
            "href": "http://en.memory-alpha.org/wiki/Tribunal_%28episode%29",
            "number": "2x25",
            "prodno": "40512-445",
            "season": "2",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "47944.2",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/9/9d/Obrien_breaks_down.jpg/revision/latest/scale-to-width/292?cb=20101003194923&path-prefix=en",
                "name": "Obrien_breaks_down.jpg"
            },
            "title": "Tribunal"
        },
        {
            "airdate": "1994-06-12",
            "episode": "26",
            "href": "http://en.memory-alpha.org/wiki/The_Jem%27Hadar_%28episode%29",
            "number": "2x26",
            "prodno": "40512-446",
            "season": "2",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/0/04/USS_Odyssey_critically_damaged.jpg/revision/latest/scale-to-width/292?cb=20080425234715&path-prefix=en",
                "name": "USS_Odyssey_critically_damaged.jpg"
            },
            "title": "The Jem'Hadar"
        },
        {
            "airdate": "1994-09-26",
            "episode": "01",
            "href": "http://en.memory-alpha.org/wiki/The_Search,_Part_I_%28episode%29",
            "number": "3x01",
            "prodno": "40512-447",
            "season": "3",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "48213.1",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/a/ae/JemHadar_board_Defiant.jpg/revision/latest/scale-to-width/292?cb=20080810144217&path-prefix=en",
                "name": "JemHadar_board_Defiant.jpg"
            },
            "title": "The Search, Part I"
        },
        {
            "airdate": "1994-10-03",
            "episode": "02",
            "href": "http://en.memory-alpha.org/wiki/The_Search,_Part_II_%28episode%29",
            "number": "3x02",
            "prodno": "40512-447",
            "season": "3",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "48217.7",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/1/19/Alynna_Nechayev_and_Borath.jpg/revision/latest/scale-to-width/292?cb=20050920192923&path-prefix=en",
                "name": "Alynna_Nechayev_and_Borath.jpg"
            },
            "title": "The Search, Part II"
        },
        {
            "airdate": "1994-10-10",
            "episode": "03",
            "href": "http://en.memory-alpha.org/wiki/The_House_of_Quark_%28episode%29",
            "number": "3x03",
            "prodno": "40513-449",
            "season": "3",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "48224.2",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/8/89/Grilka_Quark_wedding.jpg/revision/latest/scale-to-width/292?cb=20080810143933&path-prefix=en",
                "name": "Grilka_Quark_wedding.jpg"
            },
            "title": "The House of Quark"
        },
        {
            "airdate": "1994-10-17",
            "episode": "04",
            "href": "http://en.memory-alpha.org/wiki/Equilibrium_%28episode%29",
            "number": "3x04",
            "prodno": "40513-450",
            "season": "3",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/6/6b/Caves_of_Makala.jpg/revision/latest/scale-to-width/292?cb=20060120000508&path-prefix=en",
                "name": "Caves_of_Makala.jpg"
            },
            "title": "Equilibrium"
        },
        {
            "airdate": "1994-10-24",
            "episode": "05",
            "href": "http://en.memory-alpha.org/wiki/Second_Skin_%28episode%29",
            "number": "3x05",
            "prodno": "40513-451",
            "season": "3",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "48244.5",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/c/c4/Kira_as_Iliana.jpg/revision/latest/scale-to-width/292?cb=20050923170148&path-prefix=en",
                "name": "Kira_as_Iliana.jpg"
            },
            "title": "Second Skin"
        },
        {
            "airdate": "1994-10-31",
            "episode": "06",
            "href": "http://en.memory-alpha.org/wiki/The_Abandoned_%28episode%29",
            "number": "3x06",
            "prodno": "40513-452",
            "season": "3",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "48301.1",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/e/e1/JemHadarAdult.jpg/revision/latest/scale-to-width/292?cb=20050318144814&path-prefix=en",
                "name": "JemHadarAdult.jpg"
            },
            "title": "The Abandoned"
        },
        {
            "airdate": "1994-11-07",
            "episode": "07",
            "href": "http://en.memory-alpha.org/wiki/Civil_Defense_%28episode%29",
            "number": "3x07",
            "prodno": "40513-453",
            "season": "3",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "48388.8",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/d/da/Dukat_insurgency_program.jpg/revision/latest/scale-to-width/292?cb=20100120201036&path-prefix=en",
                "name": "Dukat_insurgency_program.jpg"
            },
            "title": "Civil Defense"
        },
        {
            "airdate": "1994-11-14",
            "episode": "08",
            "href": "http://en.memory-alpha.org/wiki/Meridian_%28episode%29",
            "number": "3x08",
            "prodno": "40513-454",
            "season": "3",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "48423.2",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/7/7a/Deral_and_Jadzia.jpg/revision/latest/scale-to-width/292?cb=20140517175054&path-prefix=en",
                "name": "Deral_and_Jadzia.jpg"
            },
            "title": "Meridian"
        },
        {
            "airdate": "1994-11-21",
            "episode": "09",
            "href": "http://en.memory-alpha.org/wiki/Defiant_%28episode%29",
            "number": "3x09",
            "prodno": "40513-455",
            "season": "3",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "48467.3",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/9/9f/Thomas_Riker_2371.jpg/revision/latest/scale-to-width/292?cb=20100207125648&path-prefix=en",
                "name": "Thomas_Riker_2371.jpg"
            },
            "title": "Defiant"
        },
        {
            "airdate": "1994-11-28",
            "episode": "10",
            "href": "http://en.memory-alpha.org/wiki/Fascination_%28episode%29",
            "number": "3x10",
            "prodno": "40513-456",
            "season": "3",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/0/0c/Quark_and_Keiko.jpg/revision/latest/scale-to-width/292?cb=20050909194648&path-prefix=en",
                "name": "Quark_and_Keiko.jpg"
            },
            "title": "Fascination"
        },
        {
            "airdate": "1995-01-08",
            "episode": "11",
            "href": "http://en.memory-alpha.org/wiki/Past_Tense,_Part_I_%28episode%29",
            "number": "3x11",
            "prodno": "40513-457",
            "season": "3",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "48481.2",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/4/45/Sisko_and_Bashir_homeless.jpg/revision/latest/scale-to-width/292?cb=20050827060533&path-prefix=en",
                "name": "Sisko_and_Bashir_homeless.jpg"
            },
            "title": "Past Tense, Part I"
        },
        {
            "airdate": "1995-01-15",
            "episode": "12",
            "href": "http://en.memory-alpha.org/wiki/Past_Tense,_Part_II_%28episode%29",
            "number": "3x12",
            "prodno": "40513-458",
            "season": "3",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "48481.2",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/4/46/Sisko_with_shotgun%2C_Past_Tense_II.jpg/revision/latest/scale-to-width/292?cb=20070207234743&path-prefix=en",
                "name": "Sisko_with_shotgun_Past_Tense_II.jpg"
            },
            "title": "Past Tense, Part II"
        },
        {
            "airdate": "1995-01-31",
            "episode": "13",
            "href": "http://en.memory-alpha.org/wiki/Life_Support_%28episode%29",
            "number": "3x13",
            "prodno": "40513-459",
            "season": "3",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "48498.4",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/e/e9/Bareil_burned_life_support.jpg/revision/latest/scale-to-width/292?cb=20060908031935&path-prefix=en",
                "name": "Bareil_burned_life_support.jpg"
            },
            "title": "Life Support"
        },
        {
            "airdate": "1995-02-06",
            "episode": "14",
            "href": "http://en.memory-alpha.org/wiki/Heart_of_Stone_%28episode%29",
            "number": "3x14",
            "prodno": "40513-460",
            "season": "3",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "48521.5",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/d/d9/She_loves_me_not.jpg/revision/latest/scale-to-width/292?cb=20050920192623&path-prefix=en",
                "name": "She_loves_me_not.jpg"
            },
            "title": "Heart of Stone"
        },
        {
            "airdate": "1995-02-13",
            "episode": "15",
            "href": "http://en.memory-alpha.org/wiki/Destiny_%28episode%29",
            "number": "3x15",
            "prodno": "40513-461",
            "season": "3",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "48543.2",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/2/26/USS_Defiant_and_wormhole_relay_station.jpg/revision/latest/scale-to-width/292?cb=20110317041454&path-prefix=en",
                "name": "USS_Defiant_and_wormhole_relay_station.jpg"
            },
            "title": "Destiny"
        },
        {
            "airdate": "1995-02-20",
            "episode": "16",
            "href": "http://en.memory-alpha.org/wiki/Prophet_Motive_%28episode%29",
            "number": "3x16",
            "prodno": "40513-462",
            "season": "3",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/5/56/Zek_inside_orb.jpg/revision/latest/scale-to-width/292?cb=20051112192915&path-prefix=en",
                "name": "Zek_inside_orb.jpg"
            },
            "title": "Prophet Motive"
        },
        {
            "airdate": "1995-02-27",
            "episode": "17",
            "href": "http://en.memory-alpha.org/wiki/Visionary_%28episode%29",
            "number": "3x17",
            "prodno": "40513-463",
            "season": "3",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "48576.7",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/d/d2/Two_obriens.jpg/revision/latest/scale-to-width/292?cb=20051204194037&path-prefix=en",
                "name": "Two_obriens.jpg"
            },
            "title": "Visionary"
        },
        {
            "airdate": "1995-04-10",
            "episode": "18",
            "href": "http://en.memory-alpha.org/wiki/Distant_Voices_%28episode%29",
            "number": "3x18",
            "prodno": "40513-464",
            "season": "3",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "48592.2",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/b/be/Lethean_and_Bashir.jpg/revision/latest/scale-to-width/292?cb=20051201162517&path-prefix=en",
                "name": "Lethean_and_Bashir.jpg"
            },
            "title": "Distant Voices"
        },
        {
            "airdate": "1995-04-17",
            "episode": "19",
            "href": "http://en.memory-alpha.org/wiki/Through_the_Looking_Glass_%28episode%29",
            "number": "3x19",
            "prodno": "40513-466",
            "season": "3",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/f/fa/Smiley_draws_phaser_sisko_looking_glass.jpg/revision/latest/scale-to-width/292?cb=20060910212058&path-prefix=en",
                "name": "Smiley_draws_phaser_sisko_looking_glass.jpg"
            },
            "title": "Through the Looking Glass"
        },
        {
            "airdate": "1995-04-24",
            "episode": "20",
            "href": "http://en.memory-alpha.org/wiki/Improbable_Cause_%28episode%29",
            "number": "3x20",
            "prodno": "40513-465",
            "season": "3",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/b/bd/Tain_and_garak.jpg/revision/latest/scale-to-width/292?cb=20051114081038&path-prefix=en",
                "name": "Tain_and_garak.jpg"
            },
            "title": "Improbable Cause"
        },
        {
            "airdate": "1995-05-01",
            "episode": "21",
            "href": "http://en.memory-alpha.org/wiki/The_Die_is_Cast_%28episode%29",
            "number": "3x21",
            "prodno": "40513-467",
            "season": "3",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/a/a0/Lovok_and_tain.jpg/revision/latest/scale-to-width/292?cb=20060622134841&path-prefix=en",
                "name": "Lovok_and_tain.jpg"
            },
            "title": "The Die is Cast"
        },
        {
            "airdate": "1995-05-08",
            "episode": "22",
            "href": "http://en.memory-alpha.org/wiki/Explorers_%28episode%29",
            "number": "3x22",
            "prodno": "40513-468",
            "season": "3",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/5/5f/Bajoran_lightship_%28aft%29.jpg/revision/latest/scale-to-width/292?cb=20080425014649&path-prefix=en",
                "name": "Bajoran_lightship_aft.jpg"
            },
            "title": "Explorers"
        },
        {
            "airdate": "1995-05-15",
            "episode": "23",
            "href": "http://en.memory-alpha.org/wiki/Family_Business_%28episode%29",
            "number": "3x23",
            "prodno": "40513-469",
            "season": "3",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/7/76/Awkward_Ferengi_moment.jpg/revision/latest/scale-to-width/292?cb=20080320030135&path-prefix=en",
                "name": "Awkward_Ferengi_moment.jpg"
            },
            "title": "Family Business"
        },
        {
            "airdate": "1995-05-22",
            "episode": "24",
            "href": "http://en.memory-alpha.org/wiki/Shakaar_%28episode%29",
            "number": "3x24",
            "prodno": "40513-470",
            "season": "3",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/0/06/Bajoran_farm%2C_Shakaar.jpg/revision/latest/scale-to-width/292?cb=20050926083628&path-prefix=en",
                "name": "Bajoran_farm_Shakaar.jpg"
            },
            "title": "Shakaar"
        },
        {
            "airdate": "1995-06-12",
            "episode": "25",
            "href": "http://en.memory-alpha.org/wiki/Facets_%28episode%29",
            "number": "3x25",
            "prodno": "40513-471",
            "season": "3",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "48876.3",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/a/ad/Odo_as_Curzon.jpg/revision/latest/scale-to-width/292?cb=20100119084011&path-prefix=en",
                "name": "Odo_as_Curzon.jpg"
            },
            "title": "Facets"
        },
        {
            "airdate": "1995-06-25",
            "episode": "26",
            "href": "http://en.memory-alpha.org/wiki/The_Adversary_%28episode%29",
            "number": "3x26",
            "prodno": "40513-472",
            "season": "3",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "48959.1",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/a/ab/Krajensky_and_Odo.jpg/revision/latest/scale-to-width/292?cb=20050921044220&path-prefix=en",
                "name": "Krajensky_and_Odo.jpg"
            },
            "title": "The Adversary"
        },
        {
            "airdate": "1995-10-02",
            "episode": "01/02",
            "href": "http://en.memory-alpha.org/wiki/The_Way_of_the_Warrior_%28episode%29",
            "number": "4x01/02",
            "prodno": "40514-473",
            "season": "4",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "49011.4",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/1/15/WorfaboardDS9.jpg/revision/latest/scale-to-width/292?cb=20061126025328&path-prefix=en",
                "name": "WorfaboardDS9.jpg"
            },
            "title": "The Way of the Warrior"
        },
        {
            "airdate": "1995-10-09",
            "episode": "03",
            "href": "http://en.memory-alpha.org/wiki/The_Visitor_%28episode%29",
            "number": "4x03",
            "prodno": "40510-476",
            "season": "4",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "49034.7",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/4/47/Jake_Sisko%2C_2450.jpg/revision/latest/scale-to-width/292?cb=20050825182914&path-prefix=en",
                "name": "Jake_Sisko_2450.jpg"
            },
            "title": "The Visitor"
        },
        {
            "airdate": "1995-10-16",
            "episode": "04",
            "href": "http://en.memory-alpha.org/wiki/Hippocratic_Oath_%28episode%29",
            "number": "4x04",
            "prodno": "40510-475",
            "season": "4",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "49066.5",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/8/8b/Goranagar.jpg/revision/latest/scale-to-width/292?cb=20050902084801&path-prefix=en",
                "name": "Goranagar.jpg"
            },
            "title": "Hippocratic Oath"
        },
        {
            "airdate": "1995-10-23",
            "episode": "05",
            "href": "http://en.memory-alpha.org/wiki/Indiscretion_%28episode%29",
            "number": "4x05",
            "prodno": "40510-477",
            "season": "4",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/6/60/Kira_and_Dukat_look_for_wreckage.jpg/revision/latest/scale-to-width/292?cb=20050921051056&path-prefix=en",
                "name": "Kira_and_Dukat_look_for_wreckage.jpg"
            },
            "title": "Indiscretion"
        },
        {
            "airdate": "1995-10-30",
            "episode": "06",
            "href": "http://en.memory-alpha.org/wiki/Rejoined_%28episode%29",
            "number": "4x06",
            "prodno": "40510-478",
            "season": "4",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "49195.5",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/7/75/Lenara_Kahn_and_Jadzia_Dax_kiss.jpg/revision/latest/scale-to-width/292?cb=20120323153019&path-prefix=en",
                "name": "Lenara_Kahn_and_Jadzia_Dax_kiss.jpg"
            },
            "title": "Rejoined"
        },
        {
            "airdate": "1995-11-13",
            "episode": "07",
            "href": "http://en.memory-alpha.org/wiki/Starship_Down_%28episode%29",
            "number": "4x07",
            "prodno": "40510-480",
            "season": "4",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "49263.5",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/7/79/Defiant_Starship_Down.jpg/revision/latest/scale-to-width/292?cb=20050504205533&path-prefix=en",
                "name": "Defiant_Starship_Down.jpg"
            },
            "title": "Starship Down"
        },
        {
            "airdate": "1995-11-15",
            "episode": "08",
            "href": "http://en.memory-alpha.org/wiki/Little_Green_Men_%28episode%29",
            "number": "4x08",
            "prodno": "40510-479",
            "season": "4",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/8/87/Garland_Carlson_Quark.jpg/revision/latest/scale-to-width/292?cb=20050921051734&path-prefix=en",
                "name": "Garland_Carlson_Quark.jpg"
            },
            "title": "Little Green Men"
        },
        {
            "airdate": "1995-11-20",
            "episode": "09",
            "href": "http://en.memory-alpha.org/wiki/The_Sword_of_Kahless_%28episode%29",
            "number": "4x09",
            "prodno": "40510-481",
            "season": "4",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "49289.1",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/6/66/Korworf.jpg/revision/latest/scale-to-width/292?cb=20061126025103&path-prefix=en",
                "name": "Korworf.jpg"
            },
            "title": "The Sword of Kahless"
        },
        {
            "airdate": "1995-11-27",
            "episode": "10",
            "href": "http://en.memory-alpha.org/wiki/Our_Man_Bashir_%28episode%29",
            "number": "4x10",
            "prodno": "40510-482",
            "season": "4",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "49300.7",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/e/e3/Julian_Bashir%2C_secret_agent.jpg/revision/latest/scale-to-width/292?cb=20120401230425&path-prefix=en",
                "name": "Julian_Bashir_secret_agent.jpg"
            },
            "title": "Our Man Bashir"
        },
        {
            "airdate": "1996-01-01",
            "episode": "11",
            "href": "http://en.memory-alpha.org/wiki/Homefront_%28episode%29",
            "number": "4x11",
            "prodno": "40510-483",
            "season": "4",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "49170.65",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/0/02/Benteen_and_Leyton.jpg/revision/latest/scale-to-width/292?cb=20050921052620&path-prefix=en",
                "name": "Benteen_and_Leyton.jpg"
            },
            "title": "Homefront"
        },
        {
            "airdate": "1996-01-08",
            "episode": "12",
            "href": "http://en.memory-alpha.org/wiki/Paradise_Lost_%28episode%29",
            "number": "4x12",
            "prodno": "40510-484",
            "season": "4",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/5/50/USS_Lakota_fires_on_the_Defiant-3.jpg/revision/latest/scale-to-width/292?cb=20080919220604&path-prefix=en",
                "name": "USS_Lakota_fires_on_the_Defiant-3.jpg"
            },
            "title": "Paradise Lost"
        },
        {
            "airdate": "1996-01-29",
            "episode": "13",
            "href": "http://en.memory-alpha.org/wiki/Crossfire_%28episode%29",
            "number": "4x13",
            "prodno": "40510-485",
            "season": "4",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/a/a2/Kira%2C_Shakaar%2C_Odo.jpg/revision/latest/scale-to-width/292?cb=20050922225149&path-prefix=en",
                "name": "Kira_Shakaar_Odo.jpg"
            },
            "title": "Crossfire"
        },
        {
            "airdate": "1996-02-05",
            "episode": "14",
            "href": "http://en.memory-alpha.org/wiki/Return_to_Grace_%28episode%29",
            "number": "4x14",
            "prodno": "40510-486",
            "season": "4",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/8/8e/Dukat_Kira_cargo_exercise.jpg/revision/latest/scale-to-width/292?cb=20090406102342&path-prefix=en",
                "name": "Dukat_Kira_cargo_exercise.jpg"
            },
            "title": "Return to Grace"
        },
        {
            "airdate": "1996-02-12",
            "episode": "15",
            "href": "http://en.memory-alpha.org/wiki/Sons_of_Mogh_%28episode%29",
            "number": "4x15",
            "prodno": "40510-487",
            "season": "4",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "49556.2",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/e/e6/Sons_of_Mogh.jpg/revision/latest/scale-to-width/292?cb=20060902041049&path-prefix=en",
                "name": "Sons_of_Mogh.jpg"
            },
            "title": "Sons of Mogh"
        },
        {
            "airdate": "1996-02-19",
            "episode": "16",
            "href": "http://en.memory-alpha.org/wiki/Bar_Association_%28episode%29",
            "number": "4x16",
            "prodno": "40510-488",
            "season": "4",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/0/0a/Rom_and_his_union.jpg/revision/latest/scale-to-width/292?cb=20050929043401&path-prefix=en",
                "name": "Rom_and_his_union.jpg"
            },
            "title": "Bar Association"
        },
        {
            "airdate": "1996-02-24",
            "episode": "17",
            "href": "http://en.memory-alpha.org/wiki/Accession_%28episode%29",
            "number": "4x17",
            "prodno": "40510-489",
            "season": "4",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/d/d8/Akorem_Laan.jpg/revision/latest/scale-to-width/292?cb=20110206223200&path-prefix=en",
                "name": "Akorem_Laan.jpg"
            },
            "title": "Accession"
        },
        {
            "airdate": "1996-04-08",
            "episode": "18",
            "href": "http://en.memory-alpha.org/wiki/Rules_of_Engagement_%28episode%29",
            "number": "4x18",
            "prodno": "40510-490",
            "season": "4",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "49665.3",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/3/35/Worf_at_his_hearing.jpg/revision/latest/scale-to-width/292?cb=20120412214606&path-prefix=en",
                "name": "Worf_at_his_hearing.jpg"
            },
            "title": "Rules of Engagement"
        },
        {
            "airdate": "1996-04-15",
            "episode": "19",
            "href": "http://en.memory-alpha.org/wiki/Hard_Time_%28episode%29",
            "number": "4x19",
            "prodno": "40510-491",
            "season": "4",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/3/3b/Miles_O%27Brien_after_20_yrs.jpg/revision/latest/scale-to-width/292?cb=20100123093708&path-prefix=en",
                "name": "Miles_OBrien_after_20_yrs.jpg"
            },
            "title": "Hard Time"
        },
        {
            "airdate": "1996-04-22",
            "episode": "20",
            "href": "http://en.memory-alpha.org/wiki/Shattered_Mirror_%28episode%29",
            "number": "4x20",
            "prodno": "40510-492",
            "season": "4",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/b/bc/Garak_and_Worf%2C_Shattered_Mirror.jpg/revision/latest/scale-to-width/292?cb=20080906014518&path-prefix=en",
                "name": "Garak_and_Worf_Shattered_Mirror.jpg"
            },
            "title": "Shattered Mirror"
        },
        {
            "airdate": "1996-04-29",
            "episode": "21",
            "href": "http://en.memory-alpha.org/wiki/The_Muse_%28episode%29",
            "number": "4x21",
            "prodno": "40510-493",
            "season": "4",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/b/ba/Jake_and_Onaya.jpg/revision/latest/scale-to-width/292?cb=20071217082554&path-prefix=en",
                "name": "Jake_and_Onaya.jpg"
            },
            "title": "The Muse"
        },
        {
            "airdate": "1996-05-06",
            "episode": "22",
            "href": "http://en.memory-alpha.org/wiki/For_the_Cause_%28episode%29",
            "number": "4x22",
            "prodno": "40510-494",
            "season": "4",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/a/a1/EddingtonStarfleet.jpg/revision/latest/scale-to-width/292?cb=20060726180651&path-prefix=en",
                "name": "EddingtonStarfleet.jpg"
            },
            "title": "For the Cause"
        },
        {
            "airdate": "1996-05-13",
            "episode": "23",
            "href": "http://en.memory-alpha.org/wiki/To_the_Death_%28episode%29",
            "number": "4x23",
            "prodno": "40510-496",
            "season": "4",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "49904.2",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/9/98/Gateway_vandros4.jpg/revision/latest/scale-to-width/292?cb=20100123094217&path-prefix=en",
                "name": "Gateway_vandros4.jpg"
            },
            "title": "To the Death"
        },
        {
            "airdate": "1996-05-20",
            "episode": "24",
            "href": "http://en.memory-alpha.org/wiki/The_Quickening_%28episode%29",
            "number": "4x24",
            "prodno": "40510-495",
            "season": "4",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/9/9c/Teplan_Quickening.jpg/revision/latest/scale-to-width/292?cb=20050921053149&path-prefix=en",
                "name": "Teplan_Quickening.jpg"
            },
            "title": "The Quickening"
        },
        {
            "airdate": "1996-06-10",
            "episode": "25",
            "href": "http://en.memory-alpha.org/wiki/Body_Parts_%28episode%29",
            "number": "4x25",
            "prodno": "40510-497",
            "season": "4",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "49930.3",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/d/d5/Brunt_chokes_Quark.jpg/revision/latest/scale-to-width/292?cb=20050921041833&path-prefix=en",
                "name": "Brunt_chokes_Quark.jpg"
            },
            "title": "Body Parts"
        },
        {
            "airdate": "1996-06-17",
            "episode": "26",
            "href": "http://en.memory-alpha.org/wiki/Broken_Link_%28episode%29",
            "number": "4x26",
            "prodno": "40510-498",
            "season": "4",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "49962.4",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/5/5c/Odo_melting%2C_Broken_Link.jpg/revision/latest/scale-to-width/292?cb=20080327224411&path-prefix=en",
                "name": "Odo_melting_Broken_Link.jpg"
            },
            "title": "Broken Link"
        },
        {
            "airdate": "1996-09-30",
            "episode": "01",
            "href": "http://en.memory-alpha.org/wiki/Apocalypse_Rising_%28episode%29",
            "number": "5x01",
            "prodno": "40510-499",
            "season": "5",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/1/1b/Sisko_as_a_Klingon.jpg/revision/latest/scale-to-width/292?cb=20050921220750&path-prefix=en",
                "name": "Sisko_as_a_Klingon.jpg"
            },
            "title": "Apocalypse Rising"
        },
        {
            "airdate": "1996-10-07",
            "episode": "02",
            "href": "http://en.memory-alpha.org/wiki/The_Ship_%28episode%29",
            "number": "5x02",
            "prodno": "40510-500",
            "season": "5",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "50049.3",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/9/94/Sisko_and_Kilana.jpg/revision/latest/scale-to-width/292?cb=20080412034955&path-prefix=en",
                "name": "Sisko_and_Kilana.jpg"
            },
            "title": "The Ship"
        },
        {
            "airdate": "1996-10-14",
            "episode": "03",
            "href": "http://en.memory-alpha.org/wiki/Looking_for_par%27Mach_in_All_the_Wrong_Places_%28episode%29",
            "number": "5x03",
            "prodno": "40510-501",
            "season": "5",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "50061.2",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/a/a2/Quark_with_batleth.jpg/revision/latest/scale-to-width/292?cb=20050921221952&path-prefix=en",
                "name": "Quark_with_batleth.jpg"
            },
            "title": "Looking for par'Mach in All the Wrong Places"
        },
        {
            "airdate": "1996-10-21",
            "episode": "04",
            "href": "http://en.memory-alpha.org/wiki/Nor_the_Battle_to_the_Strong_%28episode%29",
            "number": "5x04",
            "prodno": "40510-502",
            "season": "5",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/0/08/Jake_Sisko_and_Burke.jpg/revision/latest/scale-to-width/292?cb=20050921221507&path-prefix=en",
                "name": "Jake_Sisko_and_Burke.jpg"
            },
            "title": "Nor the Battle to the Strong"
        },
        {
            "airdate": "1996-10-28",
            "episode": "05",
            "href": "http://en.memory-alpha.org/wiki/The_Assignment_%28episode%29",
            "number": "5x05",
            "prodno": "40510-504",
            "season": "5",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/3/36/Keiko_O%27Brien_possessed_by_Pah-wraith.jpg/revision/latest/scale-to-width/292?cb=20070110024736&path-prefix=en",
                "name": "Keiko_OBrien_possessed_by_Pah-wraith.jpg"
            },
            "title": "The Assignment"
        },
        {
            "airdate": "1996-11-04",
            "episode": "06",
            "href": "http://en.memory-alpha.org/wiki/Trials_and_Tribble-ations_%28episode%29",
            "number": "5x06",
            "prodno": "40510-503",
            "season": "5",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "4523.7",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/6/66/Sisko_meets_Kirk.jpg/revision/latest/scale-to-width/292?cb=20090223051501&path-prefix=en",
                "name": "Sisko_meets_Kirk.jpg"
            },
            "title": "Trials and Tribble-ations"
        },
        {
            "airdate": "1996-11-11",
            "episode": "07",
            "href": "http://en.memory-alpha.org/wiki/Let_He_Who_Is_Without_Sin..._%28episode%29",
            "number": "5x07",
            "prodno": "40510-505",
            "season": "5",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/9/98/New_Essentialists.jpg/revision/latest/scale-to-width/292?cb=20050921221026&path-prefix=en",
                "name": "New_Essentialists.jpg"
            },
            "title": "Let He Who Is Without Sin..."
        },
        {
            "airdate": "1996-11-18",
            "episode": "08",
            "href": "http://en.memory-alpha.org/wiki/Things_Past_%28episode%29",
            "number": "5x08",
            "prodno": "40510-506",
            "season": "5",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/0/06/Quark_Garak_Odo_Sisko.jpg/revision/latest/scale-to-width/292?cb=20060121194542&path-prefix=en",
                "name": "Quark_Garak_Odo_Sisko.jpg"
            },
            "title": "Things Past"
        },
        {
            "airdate": "1996-11-25",
            "episode": "09",
            "href": "http://en.memory-alpha.org/wiki/The_Ascent_%28episode%29",
            "number": "5x09",
            "prodno": "40510-507",
            "season": "5",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/4/4c/Odo_and_Quark_climbing_mountain.jpg/revision/latest/scale-to-width/292?cb=20050921223538&path-prefix=en",
                "name": "Odo_and_Quark_climbing_mountain.jpg"
            },
            "title": "The Ascent"
        },
        {
            "airdate": "1996-12-30",
            "episode": "10",
            "href": "http://en.memory-alpha.org/wiki/Rapture_%28episode%29",
            "number": "5x10",
            "prodno": "40510-508",
            "season": "5",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/6/6e/Sisko_pagh%27tem%27far.jpg/revision/latest/scale-to-width/292?cb=20060829204557&path-prefix=en",
                "name": "Sisko_paghtemfar.jpg"
            },
            "title": "Rapture"
        },
        {
            "airdate": "1997-01-06",
            "episode": "11",
            "href": "http://en.memory-alpha.org/wiki/The_Darkness_and_the_Light_%28episode%29",
            "number": "5x11",
            "prodno": "40510-509",
            "season": "5",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "50416.2",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/a/ac/Silaran_Prin_2373.jpg/revision/latest/scale-to-width/292?cb=20050705161355&path-prefix=en",
                "name": "Silaran_Prin_2373.jpg"
            },
            "title": "The Darkness and the Light"
        },
        {
            "airdate": "1997-01-27",
            "episode": "12",
            "href": "http://en.memory-alpha.org/wiki/The_Begotten_%28episode%29",
            "number": "5x12",
            "prodno": "40510-510",
            "season": "5",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/6/6a/Changeling_infant_mimics_Odo.jpg/revision/latest/scale-to-width/292?cb=20060203062638&path-prefix=en",
                "name": "Changeling_infant_mimics_Odo.jpg"
            },
            "title": "The Begotten"
        },
        {
            "airdate": "1997-02-03",
            "episode": "13",
            "href": "http://en.memory-alpha.org/wiki/For_the_Uniform_%28episode%29",
            "number": "5x13",
            "prodno": "40510-511",
            "season": "5",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "50485.2",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/6/6e/EddingtonMaquis.jpg/revision/latest/scale-to-width/292?cb=20060726180647&path-prefix=en",
                "name": "EddingtonMaquis.jpg"
            },
            "title": "For the Uniform"
        },
        {
            "airdate": "1997-02-10",
            "episode": "14",
            "href": "http://en.memory-alpha.org/wiki/In_Purgatory%27s_Shadow_%28episode%29",
            "number": "5x14",
            "prodno": "40510-512",
            "season": "5",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/8/8d/Martok_found_alive.jpg/revision/latest/scale-to-width/292?cb=20080424001609&path-prefix=en",
                "name": "Martok_found_alive.jpg"
            },
            "title": "In Purgatory's Shadow"
        },
        {
            "airdate": "1997-02-17",
            "episode": "15",
            "href": "http://en.memory-alpha.org/wiki/By_Inferno%27s_Light_%28episode%29",
            "number": "5x15",
            "prodno": "40510-513",
            "season": "5",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "50564.2",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/8/83/Dukat_announces_joining_the_Dominion.jpg/revision/latest/scale-to-width/292?cb=20140329121523&path-prefix=en",
                "name": "Dukat_announces_joining_the_Dominion.jpg"
            },
            "title": "By Inferno's Light"
        },
        {
            "airdate": "1997-02-24",
            "episode": "16",
            "href": "http://en.memory-alpha.org/wiki/Doctor_Bashir,_I_Presume_%28episode%29",
            "number": "5x16",
            "prodno": "40510-514",
            "season": "5",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/4/4b/Bashir_and_parents.jpg/revision/latest/scale-to-width/292?cb=20050921215908&path-prefix=en",
                "name": "Bashir_and_parents.jpg"
            },
            "title": "Doctor Bashir, I Presume"
        },
        {
            "airdate": "1997-03-31",
            "episode": "17",
            "href": "http://en.memory-alpha.org/wiki/A_Simple_Investigation_%28episode%29",
            "number": "5x17",
            "prodno": "40510-515",
            "season": "5",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/2/20/Odo_and_Arissa.jpg/revision/latest/scale-to-width/292?cb=20100123100605&path-prefix=en",
                "name": "Odo_and_Arissa.jpg"
            },
            "title": "A Simple Investigation"
        },
        {
            "airdate": "1997-04-05",
            "episode": "18",
            "href": "http://en.memory-alpha.org/wiki/Business_as_Usual_%28episode%29",
            "number": "5x18",
            "prodno": "40510-516",
            "season": "5",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/e/ee/Quark_Gaila_Hagath.jpg/revision/latest/scale-to-width/292?cb=20050922034118&path-prefix=en",
                "name": "Quark_Gaila_Hagath.jpg"
            },
            "title": "Business as Usual"
        },
        {
            "airdate": "1997-04-14",
            "episode": "19",
            "href": "http://en.memory-alpha.org/wiki/Ties_of_Blood_and_Water_%28episode%29",
            "number": "5x19",
            "prodno": "40510-517",
            "season": "5",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "50712.5",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/f/f5/Kira_watches_over_Ghemor.jpg/revision/latest/scale-to-width/292?cb=20081014085204&path-prefix=en",
                "name": "Kira_watches_over_Ghemor.jpg"
            },
            "title": "Ties of Blood and Water"
        },
        {
            "airdate": "1997-04-21",
            "episode": "20",
            "href": "http://en.memory-alpha.org/wiki/Ferengi_Love_Songs_%28episode%29",
            "number": "5x20",
            "prodno": "40510-518",
            "season": "5",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/6/6a/Zek_in_closet.jpg/revision/latest/scale-to-width/292?cb=20050923061848&path-prefix=en",
                "name": "Zek_in_closet.jpg"
            },
            "title": "Ferengi Love Songs"
        },
        {
            "airdate": "1997-04-29",
            "episode": "21",
            "href": "http://en.memory-alpha.org/wiki/Soldiers_of_the_Empire_%28episode%29",
            "number": "5x21",
            "prodno": "40510-519",
            "season": "5",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/a/a6/IKS_Rotarran.jpg/revision/latest/scale-to-width/292?cb=20080818024135&path-prefix=en",
                "name": "IKS_Rotarran.jpg"
            },
            "title": "Soldiers of the Empire"
        },
        {
            "airdate": "1997-05-05",
            "episode": "22",
            "href": "http://en.memory-alpha.org/wiki/Children_of_Time_%28episode%29",
            "number": "5x22",
            "prodno": "40510-520",
            "season": "5",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "50814.2",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/f/f9/Odo%2C_aged.jpg/revision/latest/scale-to-width/292?cb=20050104160548&path-prefix=en",
                "name": "Odo_aged.jpg"
            },
            "title": "Children of Time"
        },
        {
            "airdate": "1997-05-12",
            "episode": "23",
            "href": "http://en.memory-alpha.org/wiki/Blaze_of_Glory_%28episode%29",
            "number": "5x23",
            "prodno": "40510-521",
            "season": "5",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/1/1f/Sisko_and_Edington_talking_on_a_Runabout_%28DS9%29.jpg/revision/latest/scale-to-width/292?cb=20100123100845&path-prefix=en",
                "name": "Sisko_and_Edington_talking_on_a_Runabout_DS9.jpg"
            },
            "title": "Blaze of Glory"
        },
        {
            "airdate": "1997-05-19",
            "episode": "24",
            "href": "http://en.memory-alpha.org/wiki/Empok_Nor_%28episode%29",
            "number": "5x24",
            "prodno": "40510-522",
            "season": "5",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "50901.7",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/a/af/Empok_Nor%2C_Empok_Nor.jpg/revision/latest/scale-to-width/292?cb=20080813223220&path-prefix=en",
                "name": "Empok_Nor_Empok_Nor.jpg"
            },
            "title": "Empok Nor"
        },
        {
            "airdate": "1997-06-09",
            "episode": "25",
            "href": "http://en.memory-alpha.org/wiki/In_the_Cards_%28episode%29",
            "number": "5x25",
            "prodno": "40510-523",
            "season": "5",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "50929.4",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/8/8d/Willie_Mays_baseball_card.jpg/revision/latest/scale-to-width/292?cb=20060602060439&path-prefix=en",
                "name": "Willie_Mays_baseball_card.jpg"
            },
            "title": "In the Cards"
        },
        {
            "airdate": "1997-06-16",
            "episode": "26",
            "href": "http://en.memory-alpha.org/wiki/Call_to_Arms_%28episode%29",
            "number": "5x26",
            "prodno": "40510-524",
            "season": "5",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "50975.2",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/3/39/DS9_under_attack_2.jpg/revision/latest/scale-to-width/292?cb=20041218054025&path-prefix=en",
                "name": "DS9_under_attack_2.jpg"
            },
            "title": "Call to Arms"
        },
        {
            "airdate": "1997-09-29",
            "episode": "01",
            "href": "http://en.memory-alpha.org/wiki/A_Time_to_Stand_%28episode%29",
            "number": "6x01",
            "prodno": "40510-525",
            "season": "6",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/a/ae/Jemhadar_hud.jpg/revision/latest/scale-to-width/292?cb=20080812122000&path-prefix=en",
                "name": "Jemhadar_hud.jpg"
            },
            "title": "A Time to Stand"
        },
        {
            "airdate": "1997-10-06",
            "episode": "02",
            "href": "http://en.memory-alpha.org/wiki/Rocks_and_Shoals_%28episode%29",
            "number": "6x02",
            "prodno": "40510-527",
            "season": "6",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "51096.2",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/6/62/Jem%27Hadar_fighter_sinking.jpg/revision/latest/scale-to-width/292?cb=20060928103054&path-prefix=en",
                "name": "JemHadar_fighter_sinking.jpg"
            },
            "title": "Rocks and Shoals"
        },
        {
            "airdate": "1997-10-16",
            "episode": "03",
            "href": "http://en.memory-alpha.org/wiki/Sons_and_Daughters_%28episode%29",
            "number": "6x03",
            "prodno": "40510-526",
            "season": "6",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/2/2a/Alexander_Rozhenko%2C_2374.jpg/revision/latest/scale-to-width/292?cb=20040920155145&path-prefix=en",
                "name": "Alexander_Rozhenko_2374.jpg"
            },
            "title": "Sons and Daughters"
        },
        {
            "airdate": "1997-10-20",
            "episode": "04",
            "href": "http://en.memory-alpha.org/wiki/Behind_the_Lines_%28episode%29",
            "number": "6x04",
            "prodno": "40510-528",
            "season": "6",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "51145.3",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/2/2b/Odo_and_female_changeling.jpg/revision/latest/scale-to-width/292?cb=20051031112355&path-prefix=en",
                "name": "Odo_and_female_changeling.jpg"
            },
            "title": "Behind the Lines"
        },
        {
            "airdate": "1997-10-27",
            "episode": "05",
            "href": "http://en.memory-alpha.org/wiki/Favor_the_Bold_%28episode%29",
            "number": "6x05",
            "prodno": "40510-529",
            "season": "6",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/6/6e/Sisko_outlines_operation_return.jpg/revision/latest/scale-to-width/292?cb=20090530203721&path-prefix=en",
                "name": "Sisko_outlines_operation_return.jpg"
            },
            "title": "Favor the Bold"
        },
        {
            "airdate": "1997-11-03",
            "episode": "06",
            "href": "http://en.memory-alpha.org/wiki/Sacrifice_of_Angels_%28episode%29",
            "number": "6x06",
            "prodno": "40510-530",
            "season": "6",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/d/d9/Dominion_and_Federation_fleets_meet.jpg/revision/latest/scale-to-width/292?cb=20060901233047&path-prefix=en",
                "name": "Dominion_and_Federation_fleets_meet.jpg"
            },
            "title": "Sacrifice of Angels"
        },
        {
            "airdate": "1997-11-10",
            "episode": "07",
            "href": "http://en.memory-alpha.org/wiki/You_Are_Cordially_Invited_%28episode%29",
            "number": "6x07",
            "prodno": "40510-531",
            "season": "6",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "51247.5",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/3/3c/Worf_and_Dax%27s_wedding.jpg/revision/latest/scale-to-width/292?cb=20061126025001&path-prefix=en",
                "name": "Worf_and_Daxs_wedding.jpg"
            },
            "title": "You Are Cordially Invited"
        },
        {
            "airdate": "1997-11-17",
            "episode": "08",
            "href": "http://en.memory-alpha.org/wiki/Resurrection_%28episode%29",
            "number": "6x08",
            "prodno": "40510-532",
            "season": "6",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/c/cd/Kira%2C_Kira_and_Bareil.jpg/revision/latest/scale-to-width/292?cb=20060510194813&path-prefix=en",
                "name": "Kira_Kira_and_Bareil.jpg"
            },
            "title": "Resurrection"
        },
        {
            "airdate": "1997-11-22",
            "episode": "09",
            "href": "http://en.memory-alpha.org/wiki/Statistical_Probabilities_%28episode%29",
            "number": "6x09",
            "prodno": "40510-533",
            "season": "6",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/7/75/Mutants.jpg/revision/latest/scale-to-width/292?cb=20050320164434&path-prefix=en",
                "name": "Mutants.jpg"
            },
            "title": "Statistical Probabilities"
        },
        {
            "airdate": "1997-12-17",
            "episode": "10",
            "href": "http://en.memory-alpha.org/wiki/The_Magnificent_Ferengi_%28episode%29",
            "number": "6x10",
            "prodno": "40510-534",
            "season": "6",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/3/31/Ishka_and_Yelgrun.jpg/revision/latest/scale-to-width/292?cb=20060226222330&path-prefix=en",
                "name": "Ishka_and_Yelgrun.jpg"
            },
            "title": "The Magnificent Ferengi"
        },
        {
            "airdate": "1998-01-03",
            "episode": "11",
            "href": "http://en.memory-alpha.org/wiki/Waltz_%28episode%29",
            "number": "6x11",
            "prodno": "40510-535",
            "season": "6",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "51408.6-51413.6",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/3/3c/Sisko_Dukat_Waltz.jpg/revision/latest/scale-to-width/292?cb=20061115013304&path-prefix=en",
                "name": "Sisko_Dukat_Waltz.jpg"
            },
            "title": "Waltz"
        },
        {
            "airdate": "1998-02-04",
            "episode": "12",
            "href": "http://en.memory-alpha.org/wiki/Who_Mourns_for_Morn%3F_%28episode%29",
            "number": "6x12",
            "prodno": "40510-536",
            "season": "6",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/1/1a/Morn_art_and_Bajoran_mourner.jpg/revision/latest/scale-to-width/292?cb=20050412041838&path-prefix=en",
                "name": "Morn_art_and_Bajoran_mourner.jpg"
            },
            "title": "Who Mourns for Morn?"
        },
        {
            "airdate": "1998-02-11",
            "episode": "13",
            "href": "http://en.memory-alpha.org/wiki/Far_Beyond_the_Stars_%28episode%29",
            "number": "6x13",
            "prodno": "40510-538",
            "season": "6",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/9/99/Benny_Russell.jpg/revision/latest/scale-to-width/292?cb=20130213095753&path-prefix=en",
                "name": "Benny_Russell.jpg"
            },
            "title": "Far Beyond the Stars"
        },
        {
            "airdate": "1998-02-14",
            "episode": "14",
            "href": "http://en.memory-alpha.org/wiki/One_Little_Ship_%28episode%29",
            "number": "6x14",
            "prodno": "40510-537",
            "season": "6",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "51474.2",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/5/56/USS_Rubicon_at_control_panel.jpg/revision/latest/scale-to-width/292?cb=20080328040655&path-prefix=en",
                "name": "USS_Rubicon_at_control_panel.jpg"
            },
            "title": "One Little Ship"
        },
        {
            "airdate": "1998-02-21",
            "episode": "15",
            "href": "http://en.memory-alpha.org/wiki/Honor_Among_Thieves_%28episode%29",
            "number": "6x15",
            "prodno": "40510-539",
            "season": "6",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/c/c8/FariusPrime2374.jpg/revision/latest/scale-to-width/292?cb=20101104204333&path-prefix=en",
                "name": "FariusPrime2374.jpg"
            },
            "title": "Honor Among Thieves"
        },
        {
            "airdate": "1998-02-28",
            "episode": "16",
            "href": "http://en.memory-alpha.org/wiki/Change_of_Heart_%28episode%29",
            "number": "6x16",
            "prodno": "40510-540",
            "season": "6",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "51597.2",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/9/9b/Worf_carries_Dax_on_Soukara.jpg/revision/latest/scale-to-width/292?cb=20060712221211&path-prefix=en",
                "name": "Worf_carries_Dax_on_Soukara.jpg"
            },
            "title": "Change of Heart"
        },
        {
            "airdate": "1998-03-28",
            "episode": "17",
            "href": "http://en.memory-alpha.org/wiki/Wrongs_Darker_Than_Death_or_Night_%28episode%29",
            "number": "6x17",
            "prodno": "40510-541",
            "season": "6",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/2/2c/Dukat_and_Meru.jpg/revision/latest/scale-to-width/292?cb=20101009075744&path-prefix=en",
                "name": "Dukat_and_Meru.jpg"
            },
            "title": "Wrongs Darker Than Death or Night"
        },
        {
            "airdate": "1998-04-08",
            "episode": "18",
            "href": "http://en.memory-alpha.org/wiki/Inquisition_%28episode%29",
            "number": "6x18",
            "prodno": "40510-542",
            "season": "6",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/6/65/Section_31_operatives.jpg/revision/latest/scale-to-width/292?cb=20050603220600&path-prefix=en",
                "name": "Section_31_operatives.jpg"
            },
            "title": "Inquisition"
        },
        {
            "airdate": "1998-04-15",
            "episode": "19",
            "href": "http://en.memory-alpha.org/wiki/In_the_Pale_Moonlight_%28episode%29",
            "number": "6x19",
            "prodno": "40510-543",
            "season": "6",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "51721.3",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/2/28/Benjamin_Sisko_toasts_the_good_guys.jpg/revision/latest/scale-to-width/292?cb=20060321225334&path-prefix=en",
                "name": "Benjamin_Sisko_toasts_the_good_guys.jpg"
            },
            "title": "In the Pale Moonlight"
        },
        {
            "airdate": "1998-04-22",
            "episode": "20",
            "href": "http://en.memory-alpha.org/wiki/His_Way_%28episode%29",
            "number": "6x20",
            "prodno": "40510-544",
            "season": "6",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/4/44/Thekiss.jpg/revision/latest/scale-to-width/292?cb=20050925104606&path-prefix=en",
                "name": "Thekiss.jpg"
            },
            "title": "His Way"
        },
        {
            "airdate": "1998-04-29",
            "episode": "21",
            "href": "http://en.memory-alpha.org/wiki/The_Reckoning_%28episode%29",
            "number": "6x21",
            "prodno": "40510-545",
            "season": "6",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/e/e5/The_Reckoning_battle.jpg/revision/latest/scale-to-width/292?cb=20070222224142&path-prefix=en",
                "name": "The_Reckoning_battle.jpg"
            },
            "title": "The Reckoning"
        },
        {
            "airdate": "1998-05-06",
            "episode": "22",
            "href": "http://en.memory-alpha.org/wiki/Valiant_%28episode%29",
            "number": "6x22",
            "prodno": "40510-546",
            "season": "6",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "51825.4",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/9/9a/USS_Valiant_destroyed.jpg/revision/latest/scale-to-width/292?cb=20080908032342&path-prefix=en",
                "name": "USS_Valiant_destroyed.jpg"
            },
            "title": "Valiant"
        },
        {
            "airdate": "1998-05-13",
            "episode": "23",
            "href": "http://en.memory-alpha.org/wiki/Profit_and_Lace_%28episode%29",
            "number": "6x23",
            "prodno": "40510-547",
            "season": "6",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/d/d9/Quark_as_Lumba.jpg/revision/latest/scale-to-width/292?cb=20100106000630&path-prefix=en",
                "name": "Quark_as_Lumba.jpg"
            },
            "title": "Profit and Lace"
        },
        {
            "airdate": "1998-05-20",
            "episode": "24",
            "href": "http://en.memory-alpha.org/wiki/Time%27s_Orphan_%28episode%29",
            "number": "6x24",
            "prodno": "40510-548",
            "season": "6",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/2/23/Molly_O%27Brien%2C_age_18.jpg/revision/latest/scale-to-width/292?cb=20080812130347&path-prefix=en",
                "name": "Molly_OBrien_age_18.jpg"
            },
            "title": "Time's Orphan"
        },
        {
            "airdate": "1998-06-10",
            "episode": "25",
            "href": "http://en.memory-alpha.org/wiki/The_Sound_of_Her_Voice_%28episode%29",
            "number": "6x25",
            "prodno": "40510-549",
            "season": "6",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "51948.3",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/6/60/Lisa_Cusak_funeral.jpg/revision/latest/scale-to-width/292?cb=20081011131721&path-prefix=en",
                "name": "Lisa_Cusak_funeral.jpg"
            },
            "title": "The Sound of Her Voice"
        },
        {
            "airdate": "1998-06-17",
            "episode": "26",
            "href": "http://en.memory-alpha.org/wiki/Tears_of_the_Prophets_%28episode%29",
            "number": "6x26",
            "prodno": "40510-550",
            "season": "6",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/b/b6/Sisko_at_Jadzia%27s_coffin.jpg/revision/latest/scale-to-width/292?cb=20101012040744&path-prefix=en",
                "name": "Sisko_at_Jadzias_coffin.jpg"
            },
            "title": "Tears of the Prophets"
        },
        {
            "airdate": "1998-09-30",
            "episode": "01",
            "href": "http://en.memory-alpha.org/wiki/Image_in_the_Sand_%28episode%29",
            "number": "7x01",
            "prodno": "40510-551",
            "season": "7",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/3/37/The_Image_in_the_Sand.jpg/revision/latest/scale-to-width/292?cb=20050916194122&path-prefix=en",
                "name": "The_Image_in_the_Sand.jpg"
            },
            "title": "Image in the Sand"
        },
        {
            "airdate": "1998-10-07",
            "episode": "02",
            "href": "http://en.memory-alpha.org/wiki/Shadows_and_Symbols_%28episode%29",
            "number": "7x02",
            "prodno": "40510-552",
            "season": "7",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "52152.6",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/4/40/Ezri_dax_arrival.jpg/revision/latest/scale-to-width/292?cb=20070217010314&path-prefix=en",
                "name": "Ezri_dax_arrival.jpg"
            },
            "title": "Shadows and Symbols"
        },
        {
            "airdate": "1998-10-14",
            "episode": "03",
            "href": "http://en.memory-alpha.org/wiki/Afterimage_%28episode%29",
            "number": "7x03",
            "prodno": "40510-553",
            "season": "7",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/6/6a/Ezri_and_Garak.jpg/revision/latest/scale-to-width/292?cb=20060622133550&path-prefix=en",
                "name": "Ezri_and_Garak.jpg"
            },
            "title": "Afterimage"
        },
        {
            "airdate": "1998-10-21",
            "episode": "04",
            "href": "http://en.memory-alpha.org/wiki/Take_Me_Out_to_the_Holosuite_%28episode%29",
            "number": "7x04",
            "prodno": "40510-554",
            "season": "7",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/f/f9/Niners-hat.jpg/revision/latest/scale-to-width/292?cb=20070323011230&path-prefix=en",
                "name": "Niners-hat.jpg"
            },
            "title": "Take Me Out to the Holosuite"
        },
        {
            "airdate": "1998-10-28",
            "episode": "05",
            "href": "http://en.memory-alpha.org/wiki/Chrysalis_%28episode%29",
            "number": "7x05",
            "prodno": "40510-555",
            "season": "7",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/9/94/Mutants_%28starfleet_uniforms%29.jpg/revision/latest/scale-to-width/292?cb=20110630090136&path-prefix=en",
                "name": "Mutants_starfleet_uniforms.jpg"
            },
            "title": "Chrysalis"
        },
        {
            "airdate": "1998-11-04",
            "episode": "06",
            "href": "http://en.memory-alpha.org/wiki/Treachery,_Faith_and_the_Great_River_%28episode%29",
            "number": "7x06",
            "prodno": "40510-556",
            "season": "7",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/2/2b/Odo_and_weyoun1.jpg/revision/latest/scale-to-width/292?cb=20051028031128&path-prefix=en",
                "name": "Odo_and_weyoun1.jpg"
            },
            "title": "Treachery, Faith and the Great River"
        },
        {
            "airdate": "1998-11-11",
            "episode": "07",
            "href": "http://en.memory-alpha.org/wiki/Once_More_Unto_the_Breach_%28episode%29",
            "number": "7x07",
            "prodno": "40510-557",
            "season": "7",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/0/04/Kor%2C_2375.jpg/revision/latest/scale-to-width/292?cb=20090222191201&path-prefix=en",
                "name": "Kor_2375.jpg"
            },
            "title": "Once More Unto the Breach"
        },
        {
            "airdate": "1998-11-18",
            "episode": "08",
            "href": "http://en.memory-alpha.org/wiki/The_Siege_of_AR-558_%28episode%29",
            "number": "7x08",
            "prodno": "40510-558",
            "season": "7",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/e/e6/Quark_kills_a_Jem%27Hadar.jpg/revision/latest/scale-to-width/292?cb=20080320031221&path-prefix=en",
                "name": "Quark_kills_a_JemHadar.jpg"
            },
            "title": "The Siege of AR-558"
        },
        {
            "airdate": "1998-11-25",
            "episode": "09",
            "href": "http://en.memory-alpha.org/wiki/Covenant_%28episode%29",
            "number": "7x09",
            "prodno": "40510-559",
            "season": "7",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/4/41/Dukat.jpg/revision/latest/scale-to-width/292?cb=20120418042102&path-prefix=en",
                "name": "Dukat.jpg"
            },
            "title": "Covenant"
        },
        {
            "airdate": "1998-12-30",
            "episode": "10",
            "href": "http://en.memory-alpha.org/wiki/It%27s_Only_a_Paper_Moon_%28episode%29",
            "number": "7x10",
            "prodno": "40510-560",
            "season": "7",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/a/a5/Nog_leaves_the_cargo_bay.jpg/revision/latest/scale-to-width/292?cb=20060714144831&path-prefix=en",
                "name": "Nog_leaves_the_cargo_bay.jpg"
            },
            "title": "It's Only a Paper Moon"
        },
        {
            "airdate": "1999-01-06",
            "episode": "11",
            "href": "http://en.memory-alpha.org/wiki/Prodigal_Daughter_%28episode%29",
            "number": "7x11",
            "prodno": "40510-561",
            "season": "7",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/6/6d/Yanas_Tigan.jpg/revision/latest/scale-to-width/292?cb=20080510023744&path-prefix=en",
                "name": "Yanas_Tigan.jpg"
            },
            "title": "Prodigal Daughter"
        },
        {
            "airdate": "1999-02-03",
            "episode": "12",
            "href": "http://en.memory-alpha.org/wiki/The_Emperor%27s_New_Cloak_%28episode%29",
            "number": "7x12",
            "prodno": "40510-562",
            "season": "7",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/1/14/Mirror-vic.jpg/revision/latest/scale-to-width/292?cb=20080820022945&path-prefix=en",
                "name": "Mirror-vic.jpg"
            },
            "title": "The Emperor's New Cloak"
        },
        {
            "airdate": "1999-02-10",
            "episode": "13",
            "href": "http://en.memory-alpha.org/wiki/Field_of_Fire_%28episode%29",
            "number": "7x13",
            "prodno": "40510-563",
            "season": "7",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/6/65/Joran_tantalizes_Ezri.jpg/revision/latest/scale-to-width/292?cb=20101016030821&path-prefix=en",
                "name": "Joran_tantalizes_Ezri.jpg"
            },
            "title": "Field of Fire"
        },
        {
            "airdate": "1999-02-17",
            "episode": "14",
            "href": "http://en.memory-alpha.org/wiki/Chimera_%28episode%29",
            "number": "7x14",
            "prodno": "40510-564",
            "season": "7",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/5/51/Laas.jpg/revision/latest/scale-to-width/292?cb=20090125054019&path-prefix=en",
                "name": "Laas.jpg"
            },
            "title": "Chimera"
        },
        {
            "airdate": "1999-02-24",
            "episode": "15",
            "href": "http://en.memory-alpha.org/wiki/Badda-Bing,_Badda-Bang_%28episode%29",
            "number": "7x15",
            "prodno": "40510-566",
            "season": "7",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/8/87/Sisko_with_Fontaine.jpg/revision/latest/scale-to-width/292?cb=20100109181433&path-prefix=en",
                "name": "Sisko_with_Fontaine.jpg"
            },
            "title": "Badda-Bing, Badda-Bang"
        },
        {
            "airdate": "1999-03-03",
            "episode": "16",
            "href": "http://en.memory-alpha.org/wiki/Inter_Arma_Enim_Silent_Leges_%28episode%29",
            "number": "7x16",
            "prodno": "40510-565",
            "season": "7",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/5/53/Bashir%2C_Sloan_and_Cretak_in_front_of_Continuing_Committee.jpg/revision/latest/scale-to-width/292?cb=20110211164238&path-prefix=en",
                "name": "Bashir_Sloan_and_Cretak_in_front_of_Continuing_Committee.jpg"
            },
            "title": "Inter Arma Enim Silent Leges"
        },
        {
            "airdate": "1999-04-07",
            "episode": "17",
            "href": "http://en.memory-alpha.org/wiki/Penumbra_%28episode%29",
            "number": "7x17",
            "prodno": "40510-567",
            "season": "7",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "52576.2",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/a/a3/Sarah_Sisko_touches_Benjamin_Sisko.jpg/revision/latest/scale-to-width/292?cb=20080303180438&path-prefix=en",
                "name": "Sarah_Sisko_touches_Benjamin_Sisko.jpg"
            },
            "title": "Penumbra"
        },
        {
            "airdate": "1999-04-14",
            "episode": "18",
            "href": "http://en.memory-alpha.org/wiki/%27Til_Death_Do_Us_Part_%28episode%29",
            "number": "7x18",
            "prodno": "40510-568",
            "season": "7",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/6/6c/Sarah_and_Benjamin_hug.jpg/revision/latest/scale-to-width/292?cb=20060726141209&path-prefix=en",
                "name": "Sarah_and_Benjamin_hug.jpg"
            },
            "title": "'Til Death Do Us Part"
        },
        {
            "airdate": "1999-04-21",
            "episode": "19",
            "href": "http://en.memory-alpha.org/wiki/Strange_Bedfellows_%28episode%29",
            "number": "7x19",
            "prodno": "40510-569",
            "season": "7",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/c/c7/Ezri_and_Worf_hang.jpg/revision/latest/scale-to-width/292?cb=20060728222052&path-prefix=en",
                "name": "Ezri_and_Worf_hang.jpg"
            },
            "title": "Strange Bedfellows"
        },
        {
            "airdate": "1999-04-28",
            "episode": "20",
            "href": "http://en.memory-alpha.org/wiki/The_Changing_Face_of_Evil_%28episode%29",
            "number": "7x20",
            "prodno": "40510-570",
            "season": "7",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/5/5b/USS_Defiant_destroyed.jpg/revision/latest/scale-to-width/292?cb=20080329170718&path-prefix=en",
                "name": "USS_Defiant_destroyed.jpg"
            },
            "title": "The Changing Face of Evil"
        },
        {
            "airdate": "1999-05-05",
            "episode": "21",
            "href": "http://en.memory-alpha.org/wiki/When_It_Rains..._%28episode%29",
            "number": "7x21",
            "prodno": "40510-571",
            "season": "7",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/a/a5/Odo_receives_news.jpg/revision/latest/scale-to-width/292?cb=20090423045331&path-prefix=en",
                "name": "Odo_receives_news.jpg"
            },
            "title": "When It Rains..."
        },
        {
            "airdate": "1999-05-12",
            "episode": "22",
            "href": "http://en.memory-alpha.org/wiki/Tacking_Into_the_Wind_%28episode%29",
            "number": "7x22",
            "prodno": "40510-572",
            "season": "7",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/7/78/Martok_appointed_chancellor.jpg/revision/latest/scale-to-width/292?cb=20060810151513&path-prefix=en",
                "name": "Martok_appointed_chancellor.jpg"
            },
            "title": "Tacking Into the Wind"
        },
        {
            "airdate": "1999-05-19",
            "episode": "23",
            "href": "http://en.memory-alpha.org/wiki/Extreme_Measures_%28episode%29",
            "number": "7x23",
            "prodno": "40510-573",
            "season": "7",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "52645.7",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/b/b2/Sloan%2C_Bashir%2C_and_OBrien_-_Extreme_Measures.jpg/revision/latest/scale-to-width/292?cb=20060816052020&path-prefix=en",
                "name": "Sloan_Bashir_and_OBrien_-_Extreme_Measures.jpg"
            },
            "title": "Extreme Measures"
        },
        {
            "airdate": "1999-05-26",
            "episode": "24",
            "href": "http://en.memory-alpha.org/wiki/The_Dogs_of_War_%28episode%29",
            "number": "7x24",
            "prodno": "40510-574",
            "season": "7",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "52861.3",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/7/75/Damar_preaches_freedom.jpg/revision/latest/scale-to-width/292?cb=20061015225715&path-prefix=en",
                "name": "Damar_preaches_freedom.jpg"
            },
            "title": "The Dogs of War"
        },
        {
            "airdate": "1999-06-02",
            "episode": "25/26",
            "href": "http://en.memory-alpha.org/wiki/What_You_Leave_Behind_%28episode%29",
            "number": "7x25/26",
            "prodno": "40510-575",
            "season": "7",
            "series": "ds9",
            "seriesPretty": "Deep Space Nine",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/7/73/Deep_Space_9_CGI.jpg/revision/latest/scale-to-width/292?cb=20060331100433&path-prefix=en",
                "name": "Deep_Space_9_CGI.jpg"
            },
            "title": "What You Leave Behind"
        }
    ],
    "enterprise": [
        {
            "airdate": "2001-09-26",
            "episode": "01/02",
            "href": "http://en.memory-alpha.org/wiki/Broken_Bow_%28episode%29",
            "number": "1x01/02",
            "prodno": "001",
            "season": "1",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "04-16",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/f/f1/Enterprise_%28NX-01%29_leaving_drydock.jpg/revision/latest/scale-to-width/292?cb=20130314122809&path-prefix=en",
                "name": "Enterprise_NX-01_leaving_drydock.jpg"
            },
            "title": "Broken Bow"
        },
        {
            "airdate": "2001-10-03",
            "episode": "03",
            "href": "http://en.memory-alpha.org/wiki/Fight_or_Flight_%28episode%29",
            "number": "1x03",
            "prodno": "003",
            "season": "1",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "05-06",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/f/f3/Archer_with_an_alien_corpse.jpg/revision/latest/scale-to-width/292?cb=20130403040615&path-prefix=en",
                "name": "Archer_with_an_alien_corpse.jpg"
            },
            "title": "Fight or Flight"
        },
        {
            "airdate": "2001-10-10",
            "episode": "04",
            "href": "http://en.memory-alpha.org/wiki/Strange_New_World_%28episode%29",
            "number": "1x04",
            "prodno": "004",
            "season": "1",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/1/15/Archer_IV_away_team.jpg/revision/latest/scale-to-width/292?cb=20130403022501&path-prefix=en",
                "name": "Archer_IV_away_team.jpg"
            },
            "title": "Strange New World"
        },
        {
            "airdate": "2001-10-17",
            "episode": "05",
            "href": "http://en.memory-alpha.org/wiki/Unexpected_%28episode%29",
            "number": "1x05",
            "prodno": "005",
            "season": "1",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/f/fb/Ahlen_examines_Trip.jpg/revision/latest/scale-to-width/292?cb=20080429031923&path-prefix=en",
                "name": "Ahlen_examines_Trip.jpg"
            },
            "title": "Unexpected"
        },
        {
            "airdate": "2001-10-24",
            "episode": "06",
            "href": "http://en.memory-alpha.org/wiki/Terra_Nova_%28episode%29",
            "number": "1x06",
            "prodno": "006",
            "season": "1",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/7/7a/Terranovans.jpg/revision/latest/scale-to-width/292?cb=20110118042638&path-prefix=en",
                "name": "Terranovans.jpg"
            },
            "title": "Terra Nova"
        },
        {
            "airdate": "2001-10-31",
            "episode": "07",
            "href": "http://en.memory-alpha.org/wiki/The_Andorian_Incident_%28episode%29",
            "number": "1x07",
            "prodno": "007",
            "season": "1",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/c/c9/Andorians_pjem.jpg/revision/latest/scale-to-width/292?cb=20060131070917&path-prefix=en",
                "name": "Andorians_pjem.jpg"
            },
            "title": "The Andorian Incident"
        },
        {
            "airdate": "2001-11-07",
            "episode": "08",
            "href": "http://en.memory-alpha.org/wiki/Breaking_the_Ice_%28episode%29",
            "number": "1x08",
            "prodno": "008",
            "season": "1",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/d/d8/Archers_comet_Ent_TiMur.jpg/revision/latest/scale-to-width/292?cb=20050725011752&path-prefix=en",
                "name": "Archers_comet_Ent_TiMur.jpg"
            },
            "title": "Breaking the Ice"
        },
        {
            "airdate": "2001-11-14",
            "episode": "09",
            "href": "http://en.memory-alpha.org/wiki/Civilization_%28episode%29",
            "number": "1x09",
            "prodno": "009",
            "season": "1",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "07-31",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/7/7e/Riann_Archer_Akaali.jpg/revision/latest/scale-to-width/292?cb=20110118050808&path-prefix=en",
                "name": "Riann_Archer_Akaali.jpg"
            },
            "title": "Civilization"
        },
        {
            "airdate": "2001-11-21",
            "episode": "10",
            "href": "http://en.memory-alpha.org/wiki/Fortunate_Son_%28episode%29",
            "number": "1x10",
            "prodno": "010",
            "season": "1",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/6/65/Nausicaan_pirates.jpg/revision/latest/scale-to-width/292?cb=20051011073444&path-prefix=en",
                "name": "Nausicaan_pirates.jpg"
            },
            "title": "Fortunate Son"
        },
        {
            "airdate": "2001-11-28",
            "episode": "11",
            "href": "http://en.memory-alpha.org/wiki/Cold_Front_%28episode%29",
            "number": "1x11",
            "prodno": "011",
            "season": "1",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "09-09",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/d/d5/Archer_and_Daniels_in_the_Temporal_Observatory_%28ENT_Cold_Front%29.jpg/revision/latest/scale-to-width/292?cb=20101219024834&path-prefix=en",
                "name": "Archer_and_Daniels_in_the_Temporal_Observatory_ENT_Cold_Front.jpg"
            },
            "title": "Cold Front"
        },
        {
            "airdate": "2002-01-16",
            "episode": "12",
            "href": "http://en.memory-alpha.org/wiki/Silent_Enemy_%28episode%29",
            "number": "1x12",
            "prodno": "012",
            "season": "1",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "09-01",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/4/4c/Phase_cannons2.jpg/revision/latest/scale-to-width/292?cb=20060805052031&path-prefix=en",
                "name": "Phase_cannons2.jpg"
            },
            "title": "Silent Enemy"
        },
        {
            "airdate": "2002-01-23",
            "episode": "13",
            "href": "http://en.memory-alpha.org/wiki/Dear_Doctor_%28episode%29",
            "number": "1x13",
            "prodno": "013",
            "season": "1",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/5/55/Dear_doctor_Phlox_Alien.jpg/revision/latest/scale-to-width/292?cb=20110118054015&path-prefix=en",
                "name": "Dear_doctor_Phlox_Alien.jpg"
            },
            "title": "Dear Doctor"
        },
        {
            "airdate": "2002-01-30",
            "episode": "14",
            "href": "http://en.memory-alpha.org/wiki/Sleeping_Dogs_%28episode%29",
            "number": "1x14",
            "prodno": "015",
            "season": "1",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/b/b4/IKS_Somraw.jpg/revision/latest/scale-to-width/292?cb=20130314164010&path-prefix=en",
                "name": "IKS_Somraw.jpg"
            },
            "title": "Sleeping Dogs"
        },
        {
            "airdate": "2002-02-06",
            "episode": "15",
            "href": "http://en.memory-alpha.org/wiki/Shadows_of_P%27Jem_%28episode%29",
            "number": "1x15",
            "prodno": "014",
            "season": "1",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/7/7e/EnterpriseOverCoridan2151.jpg/revision/latest/scale-to-width/292?cb=20100124211353&path-prefix=en",
                "name": "EnterpriseOverCoridan2151.jpg"
            },
            "title": "Shadows of P'Jem"
        },
        {
            "airdate": "2002-02-13",
            "episode": "16",
            "href": "http://en.memory-alpha.org/wiki/Shuttlepod_One_%28episode%29",
            "number": "1x16",
            "prodno": "016",
            "season": "1",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "11-09",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/a/ab/Trip_and_Reed_in_Shuttlepod_1.jpg/revision/latest/scale-to-width/292?cb=20110118171418&path-prefix=en",
                "name": "Trip_and_Reed_in_Shuttlepod_1.jpg"
            },
            "title": "Shuttlepod One"
        },
        {
            "airdate": "2002-02-27",
            "episode": "17",
            "href": "http://en.memory-alpha.org/wiki/Fusion_%28episode%29",
            "number": "1x17",
            "prodno": "017",
            "season": "1",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/b/b6/Vahklas_T%27Pol_and_Tolaris.jpg/revision/latest/scale-to-width/292?cb=20070319074603&path-prefix=en",
                "name": "Vahklas_TPol_and_Tolaris.jpg"
            },
            "title": "Fusion"
        },
        {
            "airdate": "2002-03-20",
            "episode": "18",
            "href": "http://en.memory-alpha.org/wiki/Rogue_Planet_%28episode%29",
            "number": "1x18",
            "prodno": "018",
            "season": "1",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/3/36/Dakalan_centipede.jpg/revision/latest/scale-to-width/292?cb=20080525165622&path-prefix=en",
                "name": "Dakalan_centipede.jpg"
            },
            "title": "Rogue Planet"
        },
        {
            "airdate": "2002-03-27",
            "episode": "19",
            "href": "http://en.memory-alpha.org/wiki/Acquisition_%28episode%29",
            "number": "1x19",
            "prodno": "019",
            "season": "1",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/6/69/PorthosAndMuk.jpg/revision/latest/scale-to-width/292?cb=20130314164255&path-prefix=en",
                "name": "PorthosAndMuk.jpg"
            },
            "title": "Acquisition"
        },
        {
            "airdate": "2002-04-03",
            "episode": "20",
            "href": "http://en.memory-alpha.org/wiki/Oasis_%28episode%29",
            "number": "1x20",
            "prodno": "020",
            "season": "1",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/4/47/Kantare_supply_ship_%28profile%29.jpg/revision/latest/scale-to-width/292?cb=20110118233013&path-prefix=en",
                "name": "Kantare_supply_ship_profile.jpg"
            },
            "title": "Oasis"
        },
        {
            "airdate": "2002-04-24",
            "episode": "21",
            "href": "http://en.memory-alpha.org/wiki/Detained_%28episode%29",
            "number": "1x21",
            "prodno": "021",
            "season": "1",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/2/26/DetentionComplex26.jpg/revision/latest/scale-to-width/292?cb=20050704111224&path-prefix=en",
                "name": "DetentionComplex26.jpg"
            },
            "title": "Detained"
        },
        {
            "airdate": "2002-05-01",
            "episode": "22",
            "href": "http://en.memory-alpha.org/wiki/Vox_Sola_%28episode%29",
            "number": "1x22",
            "prodno": "022",
            "season": "1",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/f/f2/Voxsola_Tucker_Caught.png/revision/latest/scale-to-width/292?cb=20110119025850&path-prefix=en",
                "name": "Voxsola_Tucker_Caught.png"
            },
            "title": "Vox Sola"
        },
        {
            "airdate": "2002-05-08",
            "episode": "23",
            "href": "http://en.memory-alpha.org/wiki/Fallen_Hero_%28episode%29",
            "number": "1x23",
            "prodno": "023",
            "season": "1",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "02-09",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/d/dc/VLar_%28Ambassador%29.jpg/revision/latest/scale-to-width/292?cb=20110119033840&path-prefix=en",
                "name": "VLar_Ambassador.jpg"
            },
            "title": "Fallen Hero"
        },
        {
            "airdate": "2002-05-08",
            "episode": "24",
            "href": "http://en.memory-alpha.org/wiki/Desert_Crossing_%28episode%29",
            "number": "1x24",
            "prodno": "024",
            "season": "1",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "02-12",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/4/41/DesertCrossing.jpg/revision/latest/scale-to-width/292?cb=20130206235214&path-prefix=en",
                "name": "DesertCrossing.jpg"
            },
            "title": "Desert Crossing"
        },
        {
            "airdate": "2002-05-15",
            "episode": "25",
            "href": "http://en.memory-alpha.org/wiki/Two_Days_and_Two_Nights_%28episode%29",
            "number": "1x25",
            "prodno": "025",
            "season": "1",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "02-18",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/5/5a/Suraya_Bay.jpg/revision/latest/scale-to-width/292?cb=20050314224457&path-prefix=en",
                "name": "Suraya_Bay.jpg"
            },
            "title": "Two Days and Two Nights"
        },
        {
            "airdate": "2002-05-22",
            "episode": "26",
            "href": "http://en.memory-alpha.org/wiki/Shockwave_%28episode%29",
            "number": "1x26",
            "prodno": "026",
            "season": "1",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/0/01/Archer_and_Daniels_look_at_a_destroyed_Earth.jpg/revision/latest/scale-to-width/292?cb=20110119060411&path-prefix=en",
                "name": "Archer_and_Daniels_look_at_a_destroyed_Earth.jpg"
            },
            "title": "Shockwave"
        },
        {
            "airdate": "2002-09-18",
            "episode": "01",
            "href": "http://en.memory-alpha.org/wiki/Shockwave,_Part_II_%28episode%29",
            "number": "2x01",
            "prodno": "028",
            "season": "2",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/a/aa/Archer_on_ceiling.jpg/revision/latest/scale-to-width/292?cb=20050905175729&path-prefix=en",
                "name": "Archer_on_ceiling.jpg"
            },
            "title": "Shockwave, Part II"
        },
        {
            "airdate": "2002-09-25",
            "episode": "02",
            "href": "http://en.memory-alpha.org/wiki/Carbon_Creek_%28episode%29",
            "number": "2x02",
            "prodno": "027",
            "season": "2",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "04-12",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/4/4d/ENT_carboncreek_vulcans.jpg/revision/latest/scale-to-width/292?cb=20110120232847&path-prefix=en",
                "name": "ENT_carboncreek_vulcans.jpg"
            },
            "title": "Carbon Creek"
        },
        {
            "airdate": "2002-10-02",
            "episode": "03",
            "href": "http://en.memory-alpha.org/wiki/Minefield_%28episode%29",
            "number": "2x03",
            "prodno": "029",
            "season": "2",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/8/88/Romulan_bird-of-prey%2C_ENT-aft.jpg/revision/latest/scale-to-width/292?cb=20060205111736&path-prefix=en",
                "name": "Romulan_bird-of-prey_ENT-aft.jpg"
            },
            "title": "Minefield"
        },
        {
            "airdate": "2002-10-09",
            "episode": "04",
            "href": "http://en.memory-alpha.org/wiki/Dead_Stop_%28episode%29",
            "number": "2x04",
            "prodno": "031",
            "season": "2",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/7/79/Auto_repair_station_opens.jpg/revision/latest/scale-to-width/292?cb=20060715031547&path-prefix=en",
                "name": "Auto_repair_station_opens.jpg"
            },
            "title": "Dead Stop"
        },
        {
            "airdate": "2002-10-16",
            "episode": "05",
            "href": "http://en.memory-alpha.org/wiki/A_Night_in_Sickbay_%28episode%29",
            "number": "2x05",
            "prodno": "030",
            "season": "2",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/8/80/Porthos_in_surgery_super-hydrated.jpg/revision/latest/scale-to-width/292?cb=20060805152957&path-prefix=en",
                "name": "Porthos_in_surgery_super-hydrated.jpg"
            },
            "title": "A Night in Sickbay"
        },
        {
            "airdate": "2002-10-30",
            "episode": "06",
            "href": "http://en.memory-alpha.org/wiki/Marauders_%28episode%29",
            "number": "2x06",
            "prodno": "032",
            "season": "2",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/2/2d/Tessics_species_deuterium_mining_colony.jpg/revision/latest/scale-to-width/292?cb=20060219011938&path-prefix=en",
                "name": "Tessics_species_deuterium_mining_colony.jpg"
            },
            "title": "Marauders"
        },
        {
            "airdate": "2002-11-06",
            "episode": "07",
            "href": "http://en.memory-alpha.org/wiki/The_Seventh_%28episode%29",
            "number": "2x07",
            "prodno": "033",
            "season": "2",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/3/3a/T%27Pol_shoots_Menos.jpg/revision/latest/scale-to-width/292?cb=20080405225334&path-prefix=en",
                "name": "TPol_shoots_Menos.jpg"
            },
            "title": "The Seventh"
        },
        {
            "airdate": "2002-11-13",
            "episode": "08",
            "href": "http://en.memory-alpha.org/wiki/The_Communicator_%28episode%29",
            "number": "2x08",
            "prodno": "034",
            "season": "2",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/1/1b/Suliban_cell_ship_open.jpg/revision/latest/scale-to-width/292?cb=20060428103633&path-prefix=en",
                "name": "Suliban_cell_ship_open.jpg"
            },
            "title": "The Communicator"
        },
        {
            "airdate": "2002-11-20",
            "episode": "09",
            "href": "http://en.memory-alpha.org/wiki/Singularity_%28episode%29",
            "number": "2x09",
            "prodno": "035",
            "season": "2",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "08-14",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/c/c1/EnterpriseSingularity.jpg/revision/latest/scale-to-width/292?cb=20120416212159&path-prefix=en",
                "name": "EnterpriseSingularity.jpg"
            },
            "title": "Singularity"
        },
        {
            "airdate": "2002-11-27",
            "episode": "10",
            "href": "http://en.memory-alpha.org/wiki/Vanishing_Point_%28episode%29",
            "number": "2x10",
            "prodno": "036",
            "season": "2",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/b/bb/Illusory_aliens.jpg/revision/latest/scale-to-width/292?cb=20060901155724&path-prefix=en",
                "name": "Illusory_aliens.jpg"
            },
            "title": "Vanishing Point"
        },
        {
            "airdate": "2002-12-11",
            "episode": "11",
            "href": "http://en.memory-alpha.org/wiki/Precious_Cargo_%28episode%29",
            "number": "2x11",
            "prodno": "037",
            "season": "2",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "09-12",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/7/7b/Kaitaama_in_stasis_pod.jpg/revision/latest/scale-to-width/292?cb=20110122011226&path-prefix=en",
                "name": "Kaitaama_in_stasis_pod.jpg"
            },
            "title": "Precious Cargo"
        },
        {
            "airdate": "2002-12-18",
            "episode": "12",
            "href": "http://en.memory-alpha.org/wiki/The_Catwalk_%28episode%29",
            "number": "2x12",
            "prodno": "038",
            "season": "2",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "09-18",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/e/e1/NX01_in_neutronic_storm.jpg/revision/latest/scale-to-width/292?cb=20130321003721&path-prefix=en",
                "name": "NX01_in_neutronic_storm.jpg"
            },
            "title": "The Catwalk"
        },
        {
            "airdate": "2003-01-08",
            "episode": "13",
            "href": "http://en.memory-alpha.org/wiki/Dawn_%28episode%29",
            "number": "2x13",
            "prodno": "039",
            "season": "2",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/c/c1/TuckerAndZhoKaanSweat.jpg/revision/latest/scale-to-width/292?cb=20070916203518&path-prefix=en",
                "name": "TuckerAndZhoKaanSweat.jpg"
            },
            "title": "Dawn"
        },
        {
            "airdate": "2003-02-05",
            "episode": "14",
            "href": "http://en.memory-alpha.org/wiki/Stigma_%28episode%29",
            "number": "2x14",
            "prodno": "040",
            "season": "2",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/4/43/Tucker_and_Feezal.jpg/revision/latest/scale-to-width/292?cb=20110126015635&path-prefix=en",
                "name": "Tucker_and_Feezal.jpg"
            },
            "title": "Stigma"
        },
        {
            "airdate": "2003-02-12",
            "episode": "15",
            "href": "http://en.memory-alpha.org/wiki/Cease_Fire_%28episode%29",
            "number": "2x15",
            "prodno": "041",
            "season": "2",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/5/5c/Andorian_warship-Enterprise-Vulcan_cruiser_standoff.jpg/revision/latest/scale-to-width/292?cb=20060302035441&path-prefix=en",
                "name": "Andorian_warship-Enterprise-Vulcan_cruiser_standoff.jpg"
            },
            "title": "Cease Fire"
        },
        {
            "airdate": "2003-02-19",
            "episode": "16",
            "href": "http://en.memory-alpha.org/wiki/Future_Tense_%28episode%29",
            "number": "2x16",
            "prodno": "042",
            "season": "2",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/7/7f/Time_travel_pod_%2831st_century%29_launch_bay.jpg/revision/latest/scale-to-width/292?cb=20051222072926&path-prefix=en",
                "name": "Time_travel_pod_31st_century_launch_bay.jpg"
            },
            "title": "Future Tense"
        },
        {
            "airdate": "2003-02-26",
            "episode": "17",
            "href": "http://en.memory-alpha.org/wiki/Canamar_%28episode%29",
            "number": "2x17",
            "prodno": "043",
            "season": "2",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/4/42/Kuroda_Lor-ehn.jpg/revision/latest/scale-to-width/292?cb=20100119204223&path-prefix=en",
                "name": "Kuroda_Lor-ehn.jpg"
            },
            "title": "Canamar"
        },
        {
            "airdate": "2003-04-02",
            "episode": "18",
            "href": "http://en.memory-alpha.org/wiki/The_Crossing_%28episode%29",
            "number": "2x18",
            "prodno": "044",
            "season": "2",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/6/63/TuckerPossessed.jpg/revision/latest/scale-to-width/292?cb=20080314205610&path-prefix=en",
                "name": "TuckerPossessed.jpg"
            },
            "title": "The Crossing"
        },
        {
            "airdate": "2003-04-09",
            "episode": "19",
            "href": "http://en.memory-alpha.org/wiki/Judgment_%28episode%29",
            "number": "2x19",
            "prodno": "045",
            "season": "2",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/4/46/KlingonTrialArcher.jpg/revision/latest/scale-to-width/292?cb=20070319083749&path-prefix=en",
                "name": "KlingonTrialArcher.jpg"
            },
            "title": "Judgment"
        },
        {
            "airdate": "2003-04-16",
            "episode": "20",
            "href": "http://en.memory-alpha.org/wiki/Horizon_%28episode%29",
            "number": "2x20",
            "prodno": "046",
            "season": "2",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "01-10",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/4/4a/Ecs_horizon.jpg/revision/latest/scale-to-width/292?cb=20060224051144&path-prefix=en",
                "name": "Ecs_horizon.jpg"
            },
            "title": "Horizon"
        },
        {
            "airdate": "2003-04-23",
            "episode": "21",
            "href": "http://en.memory-alpha.org/wiki/The_Breach_%28episode%29",
            "number": "2x21",
            "prodno": "047",
            "season": "2",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/0/0b/Hudak.jpg/revision/latest/scale-to-width/292?cb=20080810063447&path-prefix=en",
                "name": "Hudak.jpg"
            },
            "title": "The Breach"
        },
        {
            "airdate": "2003-04-30",
            "episode": "22",
            "href": "http://en.memory-alpha.org/wiki/Cogenitor_%28episode%29",
            "number": "2x22",
            "prodno": "048",
            "season": "2",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/0/07/Cogenitor.jpg/revision/latest/scale-to-width/292?cb=20051007161220&path-prefix=en",
                "name": "Cogenitor.jpg"
            },
            "title": "Cogenitor"
        },
        {
            "airdate": "2003-05-07",
            "episode": "23",
            "href": "http://en.memory-alpha.org/wiki/Regeneration_%28episode%29",
            "number": "2x23",
            "prodno": "049",
            "season": "2",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "03-01",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/5/58/Borg_aboard_Enterprise_%28NX-01%29.jpg/revision/latest/scale-to-width/292?cb=20121021135910&path-prefix=en",
                "name": "Borg_aboard_Enterprise_NX-01.jpg"
            },
            "title": "Regeneration"
        },
        {
            "airdate": "2003-05-14",
            "episode": "24",
            "href": "http://en.memory-alpha.org/wiki/First_Flight_%28episode%29",
            "number": "2x24",
            "prodno": "050",
            "season": "2",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/3/3c/NX_alpha.jpg/revision/latest/scale-to-width/292?cb=20060225040226&path-prefix=en",
                "name": "NX_alpha.jpg"
            },
            "title": "First Flight"
        },
        {
            "airdate": "2003-05-14",
            "episode": "25",
            "href": "http://en.memory-alpha.org/wiki/Bounty_%28episode%29",
            "number": "2x25",
            "prodno": "051",
            "season": "2",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "03-21",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/a/ac/Skalaar.jpg/revision/latest/scale-to-width/292?cb=20080809210817&path-prefix=en",
                "name": "Skalaar.jpg"
            },
            "title": "Bounty"
        },
        {
            "airdate": "2003-05-21",
            "episode": "26",
            "href": "http://en.memory-alpha.org/wiki/The_Expanse_%28episode%29",
            "number": "2x26",
            "prodno": "052",
            "season": "2",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "04-24",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/f/f2/Xindi_weapon_beam.jpg/revision/latest/scale-to-width/292?cb=20060729002901&path-prefix=en",
                "name": "Xindi_weapon_beam.jpg"
            },
            "title": "The Expanse"
        },
        {
            "airdate": "2003-09-10",
            "episode": "01",
            "href": "http://en.memory-alpha.org/wiki/The_Xindi_%28episode%29",
            "number": "3x01",
            "prodno": "053",
            "season": "3",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/b/b1/Archer_tucker_meet_kessick.jpg/revision/latest/scale-to-width/292?cb=20080812191958&path-prefix=en",
                "name": "Archer_tucker_meet_kessick.jpg"
            },
            "title": "The Xindi"
        },
        {
            "airdate": "2003-09-17",
            "episode": "02",
            "href": "http://en.memory-alpha.org/wiki/Anomaly_%28episode%29",
            "number": "3x02",
            "prodno": "054",
            "season": "3",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/9/96/Archer_and_his_coffee_face_anomalies.jpg/revision/latest/scale-to-width/292?cb=20080813140621&path-prefix=en",
                "name": "Archer_and_his_coffee_face_anomalies.jpg"
            },
            "title": "Anomaly"
        },
        {
            "airdate": "2003-09-24",
            "episode": "03",
            "href": "http://en.memory-alpha.org/wiki/Extinction_%28episode%29",
            "number": "3x03",
            "prodno": "055",
            "season": "3",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/f/f7/Archer_as_Loque-eque.jpg/revision/latest/scale-to-width/292?cb=20060803015952&path-prefix=en",
                "name": "Archer_as_Loque-eque.jpg"
            },
            "title": "Extinction"
        },
        {
            "airdate": "2003-10-01",
            "episode": "04",
            "href": "http://en.memory-alpha.org/wiki/Rajiin_%28episode%29",
            "number": "3x04",
            "prodno": "056",
            "season": "3",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/a/ad/Rajiin_for_sale.jpg/revision/latest/scale-to-width/292?cb=20070707113949&path-prefix=en",
                "name": "Rajiin_for_sale.jpg"
            },
            "title": "Rajiin"
        },
        {
            "airdate": "2003-10-08",
            "episode": "05",
            "href": "http://en.memory-alpha.org/wiki/Impulse_%28episode%29",
            "number": "3x05",
            "prodno": "057",
            "season": "3",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/4/43/Seleya.jpg/revision/latest/scale-to-width/292?cb=20070707044457&path-prefix=en",
                "name": "Seleya.jpg"
            },
            "title": "Impulse"
        },
        {
            "airdate": "2003-10-15",
            "episode": "06",
            "href": "http://en.memory-alpha.org/wiki/Exile_%28episode%29",
            "number": "3x06",
            "prodno": "058",
            "season": "3",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/7/7a/Delphic_Expanse_sphere.jpg/revision/latest/scale-to-width/292?cb=20070321204845&path-prefix=en",
                "name": "Delphic_Expanse_sphere.jpg"
            },
            "title": "Exile"
        },
        {
            "airdate": "2003-10-29",
            "episode": "07",
            "href": "http://en.memory-alpha.org/wiki/The_Shipment_%28episode%29",
            "number": "3x07",
            "prodno": "059",
            "season": "3",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/9/99/Gralik_Durr.jpg/revision/latest/scale-to-width/292?cb=20070707080545&path-prefix=en",
                "name": "Gralik_Durr.jpg"
            },
            "title": "The Shipment"
        },
        {
            "airdate": "2003-11-05",
            "episode": "08",
            "href": "http://en.memory-alpha.org/wiki/Twilight_%28episode%29",
            "number": "3x08",
            "prodno": "060",
            "season": "3",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/b/b3/Ceti_Alpha_V_surface%2C_2156.jpg/revision/latest/scale-to-width/292?cb=20070707183221&path-prefix=en",
                "name": "Ceti_Alpha_V_surface_2156.jpg"
            },
            "title": "Twilight"
        },
        {
            "airdate": "2003-11-12",
            "episode": "09",
            "href": "http://en.memory-alpha.org/wiki/North_Star_%28episode%29",
            "number": "3x09",
            "prodno": "061",
            "season": "3",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/3/34/Archer_north_star.jpg/revision/latest/scale-to-width/292?cb=20070319084836&path-prefix=en",
                "name": "Archer_north_star.jpg"
            },
            "title": "North Star"
        },
        {
            "airdate": "2003-11-19",
            "episode": "10",
            "href": "http://en.memory-alpha.org/wiki/Similitude_%28episode%29",
            "number": "3x10",
            "prodno": "062",
            "season": "3",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/0/0b/Charles_Tucker_17.jpg/revision/latest/scale-to-width/292?cb=20050122155622&path-prefix=en",
                "name": "Charles_Tucker_17.jpg"
            },
            "title": "Similitude"
        },
        {
            "airdate": "2003-11-26",
            "episode": "11",
            "href": "http://en.memory-alpha.org/wiki/Carpenter_Street_%28episode%29",
            "number": "3x11",
            "prodno": "063",
            "season": "3",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/2/26/Detroit_police_cars_loomis.jpg/revision/latest/scale-to-width/292?cb=20051007063729&path-prefix=en",
                "name": "Detroit_police_cars_loomis.jpg"
            },
            "title": "Carpenter Street"
        },
        {
            "airdate": "2004-01-14",
            "episode": "12",
            "href": "http://en.memory-alpha.org/wiki/Chosen_Realm_%28episode%29",
            "number": "3x12",
            "prodno": "064",
            "season": "3",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/5/56/DJamat.jpg/revision/latest/scale-to-width/292?cb=20060203191229&path-prefix=en",
                "name": "DJamat.jpg"
            },
            "title": "Chosen Realm"
        },
        {
            "airdate": "2004-01-21",
            "episode": "13",
            "href": "http://en.memory-alpha.org/wiki/Proving_Ground_%28episode%29",
            "number": "3x13",
            "prodno": "065",
            "season": "3",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "12-06",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/3/35/Calindra_System.jpg/revision/latest/scale-to-width/292?cb=20070708202226&path-prefix=en",
                "name": "Calindra_System.jpg"
            },
            "title": "Proving Ground"
        },
        {
            "airdate": "2004-02-04",
            "episode": "14",
            "href": "http://en.memory-alpha.org/wiki/Stratagem_%28episode%29",
            "number": "3x14",
            "prodno": "066",
            "season": "3",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "12-12",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/c/cc/Degra_aged%2C_Stratagem.jpg/revision/latest/scale-to-width/292?cb=20070710235100&path-prefix=en",
                "name": "Degra_aged_Stratagem.jpg"
            },
            "title": "Stratagem"
        },
        {
            "airdate": "2004-02-11",
            "episode": "15",
            "href": "http://en.memory-alpha.org/wiki/Harbinger_%28episode%29",
            "number": "3x15",
            "prodno": "067",
            "season": "3",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "12-27",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/4/4f/Sphere_Builder_Test_Subject.jpg/revision/latest/scale-to-width/292?cb=20070710032701&path-prefix=en",
                "name": "Sphere_Builder_Test_Subject.jpg"
            },
            "title": "Harbinger"
        },
        {
            "airdate": "2004-02-18",
            "episode": "16",
            "href": "http://en.memory-alpha.org/wiki/Doctor%27s_Orders_%28episode%29",
            "number": "3x16",
            "prodno": "068",
            "season": "3",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/d/df/T%27PolPhloxEngineering.jpg/revision/latest/scale-to-width/292?cb=20070922041822&path-prefix=en",
                "name": "TPolPhloxEngineering.jpg"
            },
            "title": "Doctor's Orders"
        },
        {
            "airdate": "2004-02-25",
            "episode": "17",
            "href": "http://en.memory-alpha.org/wiki/Hatchery_%28episode%29",
            "number": "3x17",
            "prodno": "069",
            "season": "3",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "01-08",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/c/ca/Archerinhatchery.jpg/revision/latest/scale-to-width/292?cb=20070319073426&path-prefix=en",
                "name": "Archerinhatchery.jpg"
            },
            "title": "Hatchery"
        },
        {
            "airdate": "2004-03-03",
            "episode": "18",
            "href": "http://en.memory-alpha.org/wiki/Azati_Prime_%28episode%29",
            "number": "3x18",
            "prodno": "070",
            "season": "3",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "01",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/c/c1/Azati_Prime_underwater_weapon.jpg/revision/latest/scale-to-width/292?cb=20070711002125&path-prefix=en",
                "name": "Azati_Prime_underwater_weapon.jpg"
            },
            "title": "Azati Prime"
        },
        {
            "airdate": "2004-04-21",
            "episode": "19",
            "href": "http://en.memory-alpha.org/wiki/Damage_%28episode%29",
            "number": "3x19",
            "prodno": "071",
            "season": "3",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/e/e4/Illyrian_captain.jpg/revision/latest/scale-to-width/292?cb=20080317031139&path-prefix=en",
                "name": "Illyrian_captain.jpg"
            },
            "title": "Damage"
        },
        {
            "airdate": "2004-04-28",
            "episode": "20",
            "href": "http://en.memory-alpha.org/wiki/The_Forgotten_%28episode%29",
            "number": "3x20",
            "prodno": "072",
            "season": "3",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/7/7e/Plasma_fire.jpg/revision/latest/scale-to-width/292?cb=20080317030132&path-prefix=en",
                "name": "Plasma_fire.jpg"
            },
            "title": "The Forgotten"
        },
        {
            "airdate": "2004-05-05",
            "episode": "21",
            "href": "http://en.memory-alpha.org/wiki/E%C2%B2_%28episode%29",
            "number": "3x21",
            "prodno": "073",
            "season": "3",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/7/74/Enterprise_%28NX-01%29_alternate%2C_E2.jpg/revision/latest/scale-to-width/292?cb=20080530223530&path-prefix=en",
                "name": "Enterprise_NX-01_alternate_E2.jpg"
            },
            "title": "E\u00b2"
        },
        {
            "airdate": "2004-05-12",
            "episode": "22",
            "href": "http://en.memory-alpha.org/wiki/The_Council_%28episode%29",
            "number": "3x22",
            "prodno": "074",
            "season": "3",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "02-12",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/8/8d/Archer_confronts_Xindi-Primates.jpg/revision/latest/scale-to-width/292?cb=20070319084453&path-prefix=en",
                "name": "Archer_confronts_Xindi-Primates.jpg"
            },
            "title": "The Council"
        },
        {
            "airdate": "2004-05-19",
            "episode": "23",
            "href": "http://en.memory-alpha.org/wiki/Countdown_%28episode%29",
            "number": "3x23",
            "prodno": "075",
            "season": "3",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "02-13",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/a/ae/Xindi_weapon_fires_on_the_Insectoids.jpg/revision/latest/scale-to-width/292?cb=20070712052329&path-prefix=en",
                "name": "Xindi_weapon_fires_on_the_Insectoids.jpg"
            },
            "title": "Countdown"
        },
        {
            "airdate": "2004-05-26",
            "episode": "24",
            "href": "http://en.memory-alpha.org/wiki/Zero_Hour_%28episode%29",
            "number": "3x24",
            "prodno": "076",
            "season": "3",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "02-14",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/b/b0/Xindi_weapon_moments_before_destruction.jpg/revision/latest/scale-to-width/292?cb=20080316234055&path-prefix=en",
                "name": "Xindi_weapon_moments_before_destruction.jpg"
            },
            "title": "Zero Hour"
        },
        {
            "airdate": "2004-10-08",
            "episode": "01",
            "href": "http://en.memory-alpha.org/wiki/Storm_Front_%28episode%29",
            "number": "4x01",
            "prodno": "077",
            "season": "4",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/8/85/Temporal_conduit_creation.jpg/revision/latest/scale-to-width/292?cb=20050327172537&path-prefix=en",
                "name": "Temporal_conduit_creation.jpg"
            },
            "title": "Storm Front"
        },
        {
            "airdate": "2004-10-15",
            "episode": "02",
            "href": "http://en.memory-alpha.org/wiki/Storm_Front,_Part_II_%28episode%29",
            "number": "4x02",
            "prodno": "078",
            "season": "4",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/f/fe/AdolfHitler1944.jpg/revision/latest/scale-to-width/292?cb=20041026152230&path-prefix=en",
                "name": "AdolfHitler1944.jpg"
            },
            "title": "Storm Front, Part II"
        },
        {
            "airdate": "2004-10-22",
            "episode": "03",
            "href": "http://en.memory-alpha.org/wiki/Home_%28episode%29",
            "number": "4x03",
            "prodno": "079",
            "season": "4",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/e/ee/Fire_plains.jpg/revision/latest/scale-to-width/292?cb=20120415192803&path-prefix=en",
                "name": "Fire_plains.jpg"
            },
            "title": "Home"
        },
        {
            "airdate": "2004-10-29",
            "episode": "04",
            "href": "http://en.memory-alpha.org/wiki/Borderland_%28episode%29",
            "number": "4x04",
            "prodno": "080",
            "season": "4",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "05-17",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/c/ca/Orion_slavegirl_ENT.jpg/revision/latest?cb=20041031181901&path-prefix=en",
                "name": "Orion_slavegirl_ENT.jpg"
            },
            "title": "Borderland"
        },
        {
            "airdate": "2004-11-05",
            "episode": "05",
            "href": "http://en.memory-alpha.org/wiki/Cold_Station_12_%28episode%29",
            "number": "4x05",
            "prodno": "081",
            "season": "4",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/9/9e/Augment_embryos.jpg/revision/latest/scale-to-width/292?cb=20060223093936&path-prefix=en",
                "name": "Augment_embryos.jpg"
            },
            "title": "Cold Station 12"
        },
        {
            "airdate": "2004-11-12",
            "episode": "06",
            "href": "http://en.memory-alpha.org/wiki/The_Augments_%28episode%29",
            "number": "4x06",
            "prodno": "082",
            "season": "4",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "05-27",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/6/65/Malik2154.jpg/revision/latest/scale-to-width/292?cb=20070920020607&path-prefix=en",
                "name": "Malik2154.jpg"
            },
            "title": "The Augments"
        },
        {
            "airdate": "2004-11-19",
            "episode": "07",
            "href": "http://en.memory-alpha.org/wiki/The_Forge_%28episode%29",
            "number": "4x07",
            "prodno": "083",
            "season": "4",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/2/25/Vulcans_Forge.jpg/revision/latest/scale-to-width/292?cb=20120330002322&path-prefix=en",
                "name": "Vulcans_Forge.jpg"
            },
            "title": "The Forge"
        },
        {
            "airdate": "2004-11-26",
            "episode": "08",
            "href": "http://en.memory-alpha.org/wiki/Awakening_%28episode%29",
            "number": "4x08",
            "prodno": "084",
            "season": "4",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/1/1b/Surak.jpg/revision/latest?cb=20041202000652&path-prefix=en",
                "name": "Surak.jpg"
            },
            "title": "Awakening"
        },
        {
            "airdate": "2004-12-03",
            "episode": "09",
            "href": "http://en.memory-alpha.org/wiki/Kir%27Shara_%28episode%29",
            "number": "4x09",
            "prodno": "085",
            "season": "4",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/0/0a/KirSharaActivation.jpg/revision/latest/scale-to-width/292?cb=20120330005726&path-prefix=en",
                "name": "KirSharaActivation.jpg"
            },
            "title": "Kir'Shara"
        },
        {
            "airdate": "2005-01-14",
            "episode": "10",
            "href": "http://en.memory-alpha.org/wiki/Daedalus_%28episode%29",
            "number": "4x10",
            "prodno": "086",
            "season": "4",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/1/1b/Emory_and_Danica_Erickson.jpg/revision/latest/scale-to-width/292?cb=20080528204401&path-prefix=en",
                "name": "Emory_and_Danica_Erickson.jpg"
            },
            "title": "Daedalus"
        },
        {
            "airdate": "2005-01-21",
            "episode": "11",
            "href": "http://en.memory-alpha.org/wiki/Observer_Effect_%28episode%29",
            "number": "4x11",
            "prodno": "087",
            "season": "4",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/b/b2/Sato_and_Tucker_under_Organian_control.jpg/revision/latest/scale-to-width/292?cb=20100124215820&path-prefix=en",
                "name": "Sato_and_Tucker_under_Organian_control.jpg"
            },
            "title": "Observer Effect"
        },
        {
            "airdate": "2005-01-28",
            "episode": "12",
            "href": "http://en.memory-alpha.org/wiki/Babel_One_%28episode%29",
            "number": "4x12",
            "prodno": "088",
            "season": "4",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "11-12",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/a/a9/Gral_archer.jpg/revision/latest/scale-to-width/292?cb=20120403011414&path-prefix=en",
                "name": "Gral_archer.jpg"
            },
            "title": "Babel One"
        },
        {
            "airdate": "2005-02-04",
            "episode": "13",
            "href": "http://en.memory-alpha.org/wiki/United_%28episode%29",
            "number": "4x13",
            "prodno": "089",
            "season": "4",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "11-15",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/6/6e/Gral_and_Shran_call_a_truce.jpg/revision/latest/scale-to-width/292?cb=20120328200325&path-prefix=en",
                "name": "Gral_and_Shran_call_a_truce.jpg"
            },
            "title": "United"
        },
        {
            "airdate": "2005-02-11",
            "episode": "14",
            "href": "http://en.memory-alpha.org/wiki/The_Aenar_%28episode%29",
            "number": "4x14",
            "prodno": "090",
            "season": "4",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/3/36/Archer_meets_the_Aenar.jpg/revision/latest/scale-to-width/292?cb=20050305145824&path-prefix=en",
                "name": "Archer_meets_the_Aenar.jpg"
            },
            "title": "The Aenar"
        },
        {
            "airdate": "2005-02-18",
            "episode": "15",
            "href": "http://en.memory-alpha.org/wiki/Affliction_%28episode%29",
            "number": "4x15",
            "prodno": "091",
            "season": "4",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "11-27",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/8/81/Klingon_cranial_ridges_dissolve.jpg/revision/latest/scale-to-width/292?cb=20050307124248&path-prefix=en",
                "name": "Klingon_cranial_ridges_dissolve.jpg"
            },
            "title": "Affliction"
        },
        {
            "airdate": "2005-02-25",
            "episode": "16",
            "href": "http://en.memory-alpha.org/wiki/Divergence_%28episode%29",
            "number": "4x16",
            "prodno": "092",
            "season": "4",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "12",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/e/ed/Jonathan_Archer_with_Klingon_ridges.jpg/revision/latest/scale-to-width/292?cb=20050424073746&path-prefix=en",
                "name": "Jonathan_Archer_with_Klingon_ridges.jpg"
            },
            "title": "Divergence"
        },
        {
            "airdate": "2005-04-15",
            "episode": "17",
            "href": "http://en.memory-alpha.org/wiki/Bound_%28episode%29",
            "number": "4x17",
            "prodno": "093",
            "season": "4",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "12-27",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/a/a1/Orion_slave_girls.jpg/revision/latest/scale-to-width/292?cb=20061217113023&path-prefix=en",
                "name": "Orion_slave_girls.jpg"
            },
            "title": "Bound"
        },
        {
            "airdate": "2005-04-22",
            "episode": "18",
            "href": "http://en.memory-alpha.org/wiki/In_a_Mirror,_Darkly_%28episode%29",
            "number": "4x18",
            "prodno": "094",
            "season": "4",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "01-13",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/d/da/USS_Defiant_in_Tholian_drydock%2C_2155.jpg/revision/latest/scale-to-width/292?cb=20120318190606&path-prefix=en",
                "name": "USS_Defiant_in_Tholian_drydock_2155.jpg"
            },
            "title": "In a Mirror, Darkly"
        },
        {
            "airdate": "2005-04-29",
            "episode": "19",
            "href": "http://en.memory-alpha.org/wiki/In_a_Mirror,_Darkly,_Part_II_%28episode%29",
            "number": "4x19",
            "prodno": "095",
            "season": "4",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "01-18",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/e/eb/ISS_Avenger_and_USS_Defiant_at_warp.jpg/revision/latest/scale-to-width/292?cb=20070523234909&path-prefix=en",
                "name": "ISS_Avenger_and_USS_Defiant_at_warp.jpg"
            },
            "title": "In a Mirror, Darkly, Part II"
        },
        {
            "airdate": "2005-05-06",
            "episode": "20",
            "href": "http://en.memory-alpha.org/wiki/Demons_%28episode%29",
            "number": "4x20",
            "prodno": "096",
            "season": "4",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "01-19",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/a/a6/T%27Pol%2C_Tucker_and_Paxton.jpg/revision/latest/scale-to-width/292?cb=20100124194017&path-prefix=en",
                "name": "TPol_Tucker_and_Paxton.jpg"
            },
            "title": "Demons"
        },
        {
            "airdate": "2005-05-13",
            "episode": "21",
            "href": "http://en.memory-alpha.org/wiki/Terra_Prime_%28episode%29",
            "number": "4x21",
            "prodno": "097",
            "season": "4",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/1/18/Verteron_array.jpg/revision/latest/scale-to-width/292?cb=20130620155734&path-prefix=en",
                "name": "Verteron_array.jpg"
            },
            "title": "Terra Prime"
        },
        {
            "airdate": "2005-05-13",
            "episode": "22",
            "href": "http://en.memory-alpha.org/wiki/These_Are_the_Voyages..._%28episode%29",
            "number": "4x22",
            "prodno": "098",
            "season": "4",
            "series": "enterprise",
            "seriesPretty": "Enterpise",
            "stardate": "47457.1",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/5/51/Riker_and_Mayweather.jpg/revision/latest/scale-to-width/292?cb=20070316094408&path-prefix=en",
                "name": "Riker_and_Mayweather.jpg"
            },
            "title": "These Are the Voyages..."
        }
    ],
    "original": [
        {
            "airdate": "1988-10-04",
            "episode": "01",
            "href": "http://en.memory-alpha.org/wiki/The_Cage_%28episode%29",
            "number": "0x01",
            "prodno": "6149-01",
            "season": "0",
            "series": "original",
            "seriesPretty": "Original",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/2/24/Talosians_3.jpg/revision/latest/scale-to-width/292?cb=20081206044328&path-prefix=en",
                "name": "Talosians_3.jpg"
            },
            "title": "The Cage"
        },
        {
            "airdate": "1966-09-22",
            "episode": "01",
            "href": "http://en.memory-alpha.org/wiki/Where_No_Man_Has_Gone_Before_%28episode%29",
            "number": "1x01",
            "prodno": "6149-02",
            "season": "1",
            "series": "original",
            "seriesPretty": "Original",
            "stardate": "1312.4 - 1313.8",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/c/c9/Mitchell-and-Dehner.jpg/revision/latest/scale-to-width/292?cb=20110407162722&path-prefix=en",
                "name": "Mitchell-and-Dehner.jpg"
            },
            "title": "Where No Man Has Gone Before"
        },
        {
            "airdate": "1966-11-10",
            "episode": "02",
            "href": "http://en.memory-alpha.org/wiki/The_Corbomite_Maneuver_%28episode%29",
            "number": "1x02",
            "prodno": "6149-03",
            "season": "1",
            "series": "original",
            "seriesPretty": "Original",
            "stardate": "1512.2 - 1514.1",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/b/b3/Balok_puppet.jpg/revision/latest/scale-to-width/292?cb=20110331033507&path-prefix=en",
                "name": "Balok_puppet.jpg"
            },
            "title": "The Corbomite Maneuver"
        },
        {
            "airdate": "1966-10-13",
            "episode": "03",
            "href": "http://en.memory-alpha.org/wiki/Mudd%27s_Women_%28episode%29",
            "number": "1x03",
            "prodno": "6149-04",
            "season": "1",
            "series": "original",
            "seriesPretty": "Original",
            "stardate": "1329.8 - 1330.1",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/4/46/Harcourt_Fenton_Mudd_2266.jpg/revision/latest/scale-to-width/292?cb=20130221170711&path-prefix=en",
                "name": "Harcourt_Fenton_Mudd_2266.jpg"
            },
            "title": "Mudd's Women"
        },
        {
            "airdate": "1966-10-06",
            "episode": "04",
            "href": "http://en.memory-alpha.org/wiki/The_Enemy_Within_%28episode%29",
            "number": "1x04",
            "prodno": "6149-05",
            "season": "1",
            "series": "original",
            "seriesPretty": "Original",
            "stardate": "1672.1 - 1673.1",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/c/c2/James_Kirk%27s_evil_counterpart.jpg/revision/latest/scale-to-width/292?cb=20110413183816&path-prefix=en",
                "name": "James_Kirks_evil_counterpart.jpg"
            },
            "title": "The Enemy Within"
        },
        {
            "airdate": "1966-09-08",
            "episode": "05",
            "href": "http://en.memory-alpha.org/wiki/The_Man_Trap_%28episode%29",
            "number": "1x05",
            "prodno": "6149-06",
            "season": "1",
            "series": "original",
            "seriesPretty": "Original",
            "stardate": "1513.1 - 1513.8",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/7/7a/M_113_Creature.jpg/revision/latest/scale-to-width/292?cb=20061220174649&path-prefix=en",
                "name": "M_113_Creature.jpg"
            },
            "title": "The Man Trap"
        },
        {
            "airdate": "1966-09-29",
            "episode": "06",
            "href": "http://en.memory-alpha.org/wiki/The_Naked_Time_%28episode%29",
            "number": "1x06",
            "prodno": "6149-07",
            "season": "1",
            "series": "original",
            "seriesPretty": "Original",
            "stardate": "1704.2 - 1704.4",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/2/26/Sulu-confronts-BridgeCrew.jpg/revision/latest/scale-to-width/292?cb=20110330175455&path-prefix=en",
                "name": "Sulu-confronts-BridgeCrew.jpg"
            },
            "title": "The Naked Time"
        },
        {
            "airdate": "1966-09-15",
            "episode": "07",
            "href": "http://en.memory-alpha.org/wiki/Charlie_X_%28episode%29",
            "number": "1x07",
            "prodno": "6149-08",
            "season": "1",
            "series": "original",
            "seriesPretty": "Original",
            "stardate": "1533.6 - 1535.8",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/7/72/Charles_Evans.jpg/revision/latest/scale-to-width/292?cb=20090227044348&path-prefix=en",
                "name": "Charles_Evans.jpg"
            },
            "title": "Charlie X"
        },
        {
            "airdate": "1966-12-13",
            "episode": "08",
            "href": "http://en.memory-alpha.org/wiki/Balance_of_Terror_%28episode%29",
            "number": "1x08",
            "prodno": "6149-09",
            "season": "1",
            "series": "original",
            "seriesPretty": "Original",
            "stardate": "1709.2 - 1709.6",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/1/16/Romulan_Commander_on_Enterprise_Viewer.jpg/revision/latest/scale-to-width/292?cb=20121020232724&path-prefix=en",
                "name": "Romulan_Commander_on_Enterprise_Viewer.jpg"
            },
            "title": "Balance of Terror"
        },
        {
            "airdate": "1966-10-20",
            "episode": "09",
            "href": "http://en.memory-alpha.org/wiki/What_Are_Little_Girls_Made_Of%3F_%28episode%29",
            "number": "1x09",
            "prodno": "6149-10",
            "season": "1",
            "series": "original",
            "seriesPretty": "Original",
            "stardate": "2712.4",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/8/85/Android_duplicator%2C_overview.jpg/revision/latest/scale-to-width/292?cb=20040822024817&path-prefix=en",
                "name": "Android_duplicator_overview.jpg"
            },
            "title": "What Are Little Girls Made Of?"
        },
        {
            "airdate": "1966-11-03",
            "episode": "10",
            "href": "http://en.memory-alpha.org/wiki/Dagger_of_the_Mind_%28episode%29",
            "number": "1x10",
            "prodno": "6149-11",
            "season": "1",
            "series": "original",
            "seriesPretty": "Original",
            "stardate": "2715.1 - 2715.2",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/b/b0/Kirk_Adams_Chair_2266.jpg/revision/latest/scale-to-width/292?cb=20110416235029&path-prefix=en",
                "name": "Kirk_Adams_Chair_2266.jpg"
            },
            "title": "Dagger of the Mind"
        },
        {
            "airdate": "1966-10-27",
            "episode": "11",
            "href": "http://en.memory-alpha.org/wiki/Miri_%28episode%29",
            "number": "1x11",
            "prodno": "6149-12",
            "season": "1",
            "series": "original",
            "seriesPretty": "Original",
            "stardate": "2713.5 - 2713.3",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/4/45/Miri_disease_advanced.jpg/revision/latest/scale-to-width/292?cb=20110421212229&path-prefix=en",
                "name": "Miri_disease_advanced.jpg"
            },
            "title": "Miri"
        },
        {
            "airdate": "1966-12-08",
            "episode": "12",
            "href": "http://en.memory-alpha.org/wiki/The_Conscience_of_the_King_%28episode%29",
            "number": "1x12",
            "prodno": "6149-13",
            "season": "1",
            "series": "original",
            "seriesPretty": "Original",
            "stardate": "2817.6 - 2819.8",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/b/bf/Anton_Karidian_performs_Macbeth.jpg/revision/latest/scale-to-width/292?cb=20081207182658&path-prefix=en",
                "name": "Anton_Karidian_performs_Macbeth.jpg"
            },
            "title": "The Conscience of the King"
        },
        {
            "airdate": "1967-01-05",
            "episode": "13",
            "href": "http://en.memory-alpha.org/wiki/The_Galileo_Seven_%28episode%29",
            "number": "1x13",
            "prodno": "6149-14",
            "season": "1",
            "series": "original",
            "seriesPretty": "Original",
            "stardate": "2821.5 - 2823.8",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/f/f0/Galileo_approaches_Murasaki_312.jpg/revision/latest/scale-to-width/292?cb=20081207041314&path-prefix=en",
                "name": "Galileo_approaches_Murasaki_312.jpg"
            },
            "title": "The Galileo Seven"
        },
        {
            "airdate": "1967-02-02",
            "episode": "14",
            "href": "http://en.memory-alpha.org/wiki/Court_Martial_%28episode%29",
            "number": "1x14",
            "prodno": "6149-15",
            "season": "1",
            "series": "original",
            "seriesPretty": "Original",
            "stardate": "2947.3 - 2950.1",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/0/0b/Kirk_on_trial.jpg/revision/latest/scale-to-width/292?cb=20110214014006&path-prefix=en",
                "name": "Kirk_on_trial.jpg"
            },
            "title": "Court Martial"
        },
        {
            "airdate": "1966-11-17",
            "episode": "15",
            "href": "http://en.memory-alpha.org/wiki/The_Menagerie,_Part_I_%28episode%29",
            "number": "1x15",
            "prodno": "6149-16A",
            "season": "1",
            "series": "original",
            "seriesPretty": "Original",
            "stardate": "3012.4 - 3012.6",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/7/7b/Christopher_Pike%2C_The_Menagerie.jpg/revision/latest/scale-to-width/292?cb=20110706235444&path-prefix=en",
                "name": "Christopher_Pike_The_Menagerie.jpg"
            },
            "title": "The Menagerie, Part I"
        },
        {
            "airdate": "1966-11-24",
            "episode": "16",
            "href": "http://en.memory-alpha.org/wiki/The_Menagerie,_Part_II_%28episode%29",
            "number": "1x16",
            "prodno": "6149-16B",
            "season": "1",
            "series": "original",
            "seriesPretty": "Original",
            "stardate": "3013.1 - 3013.2",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/2/2c/Laser_cannon.jpg/revision/latest/scale-to-width/292?cb=20070421074559&path-prefix=en",
                "name": "Laser_cannon.jpg"
            },
            "title": "The Menagerie, Part II"
        },
        {
            "airdate": "1966-12-29",
            "episode": "17",
            "href": "http://en.memory-alpha.org/wiki/Shore_Leave_%28episode%29",
            "number": "1x17",
            "prodno": "6149-17",
            "season": "1",
            "series": "original",
            "seriesPretty": "Original",
            "stardate": "3025.3 - 3025.8",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/3/3d/McCoyDeath.jpg/revision/latest/scale-to-width/292?cb=20050129153556&path-prefix=en",
                "name": "McCoyDeath.jpg"
            },
            "title": "Shore Leave"
        },
        {
            "airdate": "1967-01-12",
            "episode": "18",
            "href": "http://en.memory-alpha.org/wiki/The_Squire_of_Gothos_%28episode%29",
            "number": "1x18",
            "prodno": "6149-18",
            "season": "1",
            "series": "original",
            "seriesPretty": "Original",
            "stardate": "2124.5 - 2126.3",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/6/65/Trelane.jpg/revision/latest/scale-to-width/292?cb=20060228154239&path-prefix=en",
                "name": "Trelane.jpg"
            },
            "title": "The Squire of Gothos"
        },
        {
            "airdate": "1967-01-19",
            "episode": "19",
            "href": "http://en.memory-alpha.org/wiki/Arena_%28episode%29",
            "number": "1x19",
            "prodno": "6149-19",
            "season": "1",
            "series": "original",
            "seriesPretty": "Original",
            "stardate": "3045.6 - 3046.2",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/9/9b/Gorn.jpg/revision/latest/scale-to-width/292?cb=20090425224550&path-prefix=en",
                "name": "Gorn.jpg"
            },
            "title": "Arena"
        },
        {
            "airdate": "1967-03-30",
            "episode": "20",
            "href": "http://en.memory-alpha.org/wiki/The_Alternative_Factor_%28episode%29",
            "number": "1x20",
            "prodno": "6149-20",
            "season": "1",
            "series": "original",
            "seriesPretty": "Original",
            "stardate": "3087.6 - 3088.7",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/c/c5/Alternative_warp.jpg/revision/latest/scale-to-width/292?cb=20041016022159&path-prefix=en",
                "name": "Alternative_warp.jpg"
            },
            "title": "The Alternative Factor"
        },
        {
            "airdate": "1967-01-26",
            "episode": "21",
            "href": "http://en.memory-alpha.org/wiki/Tomorrow_is_Yesterday_%28episode%29",
            "number": "1x21",
            "prodno": "6149-21",
            "season": "1",
            "series": "original",
            "seriesPretty": "Original",
            "stardate": "3113.2 - 3114.1",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/f/fa/JohnChristopher.jpg/revision/latest/scale-to-width/292?cb=20100614154700&path-prefix=en",
                "name": "JohnChristopher.jpg"
            },
            "title": "Tomorrow is Yesterday"
        },
        {
            "airdate": "1967-02-09",
            "episode": "22",
            "href": "http://en.memory-alpha.org/wiki/The_Return_of_the_Archons_%28episode%29",
            "number": "1x22",
            "prodno": "6149-22",
            "season": "1",
            "series": "original",
            "seriesPretty": "Original",
            "stardate": "3156.2 - 3158.7",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/0/01/LandruRevealed.jpg/revision/latest/scale-to-width/292?cb=20041209230337&path-prefix=en",
                "name": "LandruRevealed.jpg"
            },
            "title": "The Return of the Archons"
        },
        {
            "airdate": "1967-02-23",
            "episode": "23",
            "href": "http://en.memory-alpha.org/wiki/A_Taste_of_Armageddon_%28episode%29",
            "number": "1x23",
            "prodno": "6149-23",
            "season": "1",
            "series": "original",
            "seriesPretty": "Original",
            "stardate": "3192.1 - 3193.0",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/2/24/EminiarWarRoom.jpg/revision/latest/scale-to-width/292?cb=20060315225710&path-prefix=en",
                "name": "EminiarWarRoom.jpg"
            },
            "title": "A Taste of Armageddon"
        },
        {
            "airdate": "1967-02-16",
            "episode": "24",
            "href": "http://en.memory-alpha.org/wiki/Space_Seed_%28episode%29",
            "number": "1x24",
            "prodno": "6149-24",
            "season": "1",
            "series": "original",
            "seriesPretty": "Original",
            "stardate": "3141.9 - 3143.3",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/7/72/Khan_Noonien_Singh%2C_2267.jpg/revision/latest/scale-to-width/292?cb=20090604045431&path-prefix=en",
                "name": "Khan_Noonien_Singh_2267.jpg"
            },
            "title": "Space Seed"
        },
        {
            "airdate": "1967-03-02",
            "episode": "25",
            "href": "http://en.memory-alpha.org/wiki/This_Side_of_Paradise_%28episode%29",
            "number": "1x25",
            "prodno": "6149-25",
            "season": "1",
            "series": "original",
            "seriesPretty": "Original",
            "stardate": "3417.3 - 3417.7",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/e/e3/Spock_and_Leila_Kalomi.jpg/revision/latest/scale-to-width/292?cb=20080830024515&path-prefix=en",
                "name": "Spock_and_Leila_Kalomi.jpg"
            },
            "title": "This Side of Paradise"
        },
        {
            "airdate": "1967-03-09",
            "episode": "26",
            "href": "http://en.memory-alpha.org/wiki/The_Devil_in_the_Dark_%28episode%29",
            "number": "1x26",
            "prodno": "6149-26",
            "season": "1",
            "series": "original",
            "seriesPretty": "Original",
            "stardate": "3196.1",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/6/61/Spock_and_Kirk_inspect_Horta_tunnel.jpg/revision/latest/scale-to-width/292?cb=20110626045253&path-prefix=en",
                "name": "Spock_and_Kirk_inspect_Horta_tunnel.jpg"
            },
            "title": "The Devil in the Dark"
        },
        {
            "airdate": "1967-03-23",
            "episode": "27",
            "href": "http://en.memory-alpha.org/wiki/Errand_of_Mercy_%28episode%29",
            "number": "1x27",
            "prodno": "6149-27",
            "season": "1",
            "series": "original",
            "seriesPretty": "Original",
            "stardate": "3198.4 - 3201.7",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/8/8b/USS_Enterprise-D7_face_off.jpg/revision/latest/scale-to-width/292?cb=20081224103249&path-prefix=en",
                "name": "USS_Enterprise-D7_face_off.jpg"
            },
            "title": "Errand of Mercy"
        },
        {
            "airdate": "1967-04-06",
            "episode": "28",
            "href": "http://en.memory-alpha.org/wiki/The_City_on_the_Edge_of_Forever_%28episode%29",
            "number": "1x28",
            "prodno": "6149-28",
            "season": "1",
            "series": "original",
            "seriesPretty": "Original",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/c/c2/Guardian_of_Forever%2C_2267.jpg/revision/latest/scale-to-width/292?cb=20061201034354&path-prefix=en",
                "name": "Guardian_of_Forever_2267.jpg"
            },
            "title": "The City on the Edge of Forever"
        },
        {
            "airdate": "1967-04-13",
            "episode": "29",
            "href": "http://en.memory-alpha.org/wiki/Operation_--_Annihilate%21_%28episode%29",
            "number": "1x29",
            "prodno": "6149-29",
            "season": "1",
            "series": "original",
            "seriesPretty": "Original",
            "stardate": "3287.2 - 3289.8",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/3/3b/Deneva_surface.jpg/revision/latest/scale-to-width/292?cb=20100130213311&path-prefix=en",
                "name": "Deneva_surface.jpg"
            },
            "title": "Operation -- Annihilate!"
        },
        {
            "airdate": "1967-10-27",
            "episode": "01",
            "href": "http://en.memory-alpha.org/wiki/Catspaw_%28episode%29",
            "number": "2x01",
            "prodno": "60330",
            "season": "2",
            "series": "original",
            "seriesPretty": "Original",
            "stardate": "3018.2",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/6/62/Sylvia_as_black_cat.jpg/revision/latest/scale-to-width/292?cb=20090327201558&path-prefix=en",
                "name": "Sylvia_as_black_cat.jpg"
            },
            "title": "Catspaw"
        },
        {
            "airdate": "1967-11-10",
            "episode": "02",
            "href": "http://en.memory-alpha.org/wiki/Metamorphosis_%28episode%29",
            "number": "2x02",
            "prodno": "60331",
            "season": "2",
            "series": "original",
            "seriesPretty": "Original",
            "stardate": "3219.8 - 3220.3",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/f/fb/ZeframCochrane2267.jpg/revision/latest/scale-to-width/292?cb=20120318015411&path-prefix=en",
                "name": "ZeframCochrane2267.jpg"
            },
            "title": "Metamorphosis"
        },
        {
            "airdate": "1967-12-01",
            "episode": "03",
            "href": "http://en.memory-alpha.org/wiki/Friday%27s_Child_%28episode%29",
            "number": "2x03",
            "prodno": "60332",
            "season": "2",
            "series": "original",
            "seriesPretty": "Original",
            "stardate": "3497.2 - 3499.1",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/8/88/CapellanWarriors.jpg/revision/latest/scale-to-width/292?cb=20070409184147&path-prefix=en",
                "name": "CapellanWarriors.jpg"
            },
            "title": "Friday's Child"
        },
        {
            "airdate": "1967-09-22",
            "episode": "04",
            "href": "http://en.memory-alpha.org/wiki/Who_Mourns_for_Adonais%3F_%28episode%29",
            "number": "2x04",
            "prodno": "60333",
            "season": "2",
            "series": "original",
            "seriesPretty": "Original",
            "stardate": "3468.1",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/2/2e/Apollo_meets_Carolyn.jpg/revision/latest/scale-to-width/292?cb=20090326193050&path-prefix=en",
                "name": "Apollo_meets_Carolyn.jpg"
            },
            "title": "Who Mourns for Adonais?"
        },
        {
            "airdate": "1967-09-15",
            "episode": "05",
            "href": "http://en.memory-alpha.org/wiki/Amok_Time_%28episode%29",
            "number": "2x05",
            "prodno": "60334",
            "season": "2",
            "series": "original",
            "seriesPretty": "Original",
            "stardate": "3372.7",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/d/d4/Kal-if-fee.jpg/revision/latest/scale-to-width/292?cb=20081213210848&path-prefix=en",
                "name": "Kal-if-fee.jpg"
            },
            "title": "Amok Time"
        },
        {
            "airdate": "1967-10-20",
            "episode": "06",
            "href": "http://en.memory-alpha.org/wiki/The_Doomsday_Machine_%28episode%29",
            "number": "2x06",
            "prodno": "60335",
            "season": "2",
            "series": "original",
            "seriesPretty": "Original",
            "stardate": "4202.9",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/5/5e/USS_Enterprise_tractored_into_planet_killer%2C_remastered.jpg/revision/latest/scale-to-width/292?cb=20110323010217&path-prefix=en",
                "name": "USS_Enterprise_tractored_into_planet_killer_remastered.jpg"
            },
            "title": "The Doomsday Machine"
        },
        {
            "airdate": "1967-12-22",
            "episode": "07",
            "href": "http://en.memory-alpha.org/wiki/Wolf_in_the_Fold_%28episode%29",
            "number": "2x07",
            "prodno": "60336",
            "season": "2",
            "series": "original",
            "seriesPretty": "Original",
            "stardate": "3614.9 - 3615.4",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/d/dc/Scotty_and_the_bloody_knife.jpg/revision/latest/scale-to-width/292?cb=20060103070331&path-prefix=en",
                "name": "Scotty_and_the_bloody_knife.jpg"
            },
            "title": "Wolf in the Fold"
        },
        {
            "airdate": "1967-09-29",
            "episode": "08",
            "href": "http://en.memory-alpha.org/wiki/The_Changeling_%28episode%29",
            "number": "2x08",
            "prodno": "60337",
            "season": "2",
            "series": "original",
            "seriesPretty": "Original",
            "stardate": "3541.9",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/9/90/Nomad_wipes_Uhuras_memory.jpg/revision/latest/scale-to-width/292?cb=20081221215536&path-prefix=en",
                "name": "Nomad_wipes_Uhuras_memory.jpg"
            },
            "title": "The Changeling"
        },
        {
            "airdate": "1967-10-13",
            "episode": "09",
            "href": "http://en.memory-alpha.org/wiki/The_Apple_%28episode%29",
            "number": "2x09",
            "prodno": "60338",
            "season": "2",
            "series": "original",
            "seriesPretty": "Original",
            "stardate": "3715.0 - 3715.6",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/1/1a/Vaal.jpg/revision/latest/scale-to-width/292?cb=20090220034234&path-prefix=en",
                "name": "Vaal.jpg"
            },
            "title": "The Apple"
        },
        {
            "airdate": "1967-10-06",
            "episode": "10",
            "href": "http://en.memory-alpha.org/wiki/Mirror,_Mirror_%28episode%29",
            "number": "2x10",
            "prodno": "60339",
            "season": "2",
            "series": "original",
            "seriesPretty": "Original",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/2/2e/Kirk_salutes_to_his_crew.jpg/revision/latest/scale-to-width/292?cb=20090221172858&path-prefix=en",
                "name": "Kirk_salutes_to_his_crew.jpg"
            },
            "title": "Mirror, Mirror"
        },
        {
            "airdate": "1967-12-08",
            "episode": "11",
            "href": "http://en.memory-alpha.org/wiki/The_Deadly_Years_%28episode%29",
            "number": "2x11",
            "prodno": "60340",
            "season": "2",
            "series": "original",
            "seriesPretty": "Original",
            "stardate": "3478.2 - 3479.4",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/3/39/James_Kirk_prematurely_aged.jpg/revision/latest/scale-to-width/292?cb=20070731184755&path-prefix=en",
                "name": "James_Kirk_prematurely_aged.jpg"
            },
            "title": "The Deadly Years"
        },
        {
            "airdate": "1967-11-03",
            "episode": "12",
            "href": "http://en.memory-alpha.org/wiki/I,_Mudd_%28episode%29",
            "number": "2x12",
            "prodno": "60341",
            "season": "2",
            "series": "original",
            "seriesPretty": "Original",
            "stardate": "4513.3",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/1/13/Stella_Mudd.jpg/revision/latest/scale-to-width/292?cb=20090222015334&path-prefix=en",
                "name": "Stella_Mudd.jpg"
            },
            "title": "I, Mudd"
        },
        {
            "airdate": "1967-12-29",
            "episode": "13",
            "href": "http://en.memory-alpha.org/wiki/The_Trouble_with_Tribbles_%28episode%29",
            "number": "2x13",
            "prodno": "60342",
            "season": "2",
            "series": "original",
            "seriesPretty": "Original",
            "stardate": "4523.3 - 4525.6",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/f/fa/Kirk_surrounded_by_Tribbles.jpg/revision/latest/scale-to-width/292?cb=20090530212257&path-prefix=en",
                "name": "Kirk_surrounded_by_Tribbles.jpg"
            },
            "title": "The Trouble with Tribbles"
        },
        {
            "airdate": "1968-03-15",
            "episode": "14",
            "href": "http://en.memory-alpha.org/wiki/Bread_and_Circuses_%28episode%29",
            "number": "2x14",
            "prodno": "60343",
            "season": "2",
            "series": "original",
            "seriesPretty": "Original",
            "stardate": "4040.7 - 4041.7",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/a/a9/Notagladiator.jpg/revision/latest/scale-to-width/292?cb=20060228170120&path-prefix=en",
                "name": "Notagladiator.jpg"
            },
            "title": "Bread and Circuses"
        },
        {
            "airdate": "1967-11-17",
            "episode": "15",
            "href": "http://en.memory-alpha.org/wiki/Journey_to_Babel_%28episode%29",
            "number": "2x15",
            "prodno": "60344",
            "season": "2",
            "series": "original",
            "seriesPretty": "Original",
            "stardate": "3842.3 - 3843.4",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/f/f3/Babel_reception.jpg/revision/latest/scale-to-width/292?cb=20081209023533&path-prefix=en",
                "name": "Babel_reception.jpg"
            },
            "title": "Journey to Babel"
        },
        {
            "airdate": "1968-02-02",
            "episode": "16",
            "href": "http://en.memory-alpha.org/wiki/A_Private_Little_War_%28episode%29",
            "number": "2x16",
            "prodno": "60345",
            "season": "2",
            "series": "original",
            "seriesPretty": "Original",
            "stardate": "4211.4 - 4211.8",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/8/88/Kirk_and_Tyree.jpg/revision/latest/scale-to-width/292?cb=20110322194341&path-prefix=en",
                "name": "Kirk_and_Tyree.jpg"
            },
            "title": "A Private Little War"
        },
        {
            "airdate": "1968-01-05",
            "episode": "17",
            "href": "http://en.memory-alpha.org/wiki/The_Gamesters_of_Triskelion_%28episode%29",
            "number": "2x17",
            "prodno": "60346",
            "season": "2",
            "series": "original",
            "seriesPretty": "Original",
            "stardate": "3211.7 - 3259.2",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/2/20/Galt.jpg/revision/latest/scale-to-width/292?cb=20110321214847&path-prefix=en",
                "name": "Galt.jpg"
            },
            "title": "The Gamesters of Triskelion"
        },
        {
            "airdate": "1967-12-15",
            "episode": "18",
            "href": "http://en.memory-alpha.org/wiki/Obsession_%28episode%29",
            "number": "2x18",
            "prodno": "60347",
            "season": "2",
            "series": "original",
            "seriesPretty": "Original",
            "stardate": "3619.2 - 3620.7",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/5/5b/Kirk_and_Rizzo.jpg/revision/latest/scale-to-width/292?cb=20090222230412&path-prefix=en",
                "name": "Kirk_and_Rizzo.jpg"
            },
            "title": "Obsession"
        },
        {
            "airdate": "1968-01-19",
            "episode": "19",
            "href": "http://en.memory-alpha.org/wiki/The_Immunity_Syndrome_%28episode%29",
            "number": "2x19",
            "prodno": "60348",
            "season": "2",
            "series": "original",
            "seriesPretty": "Original",
            "stardate": "4307.1 - 4309.4",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/9/91/USS_Enterprise_approaches_space_amoeba%2C_remastered.jpg/revision/latest/scale-to-width/292?cb=20090130013119&path-prefix=en",
                "name": "USS_Enterprise_approaches_space_amoeba_remastered.jpg"
            },
            "title": "The Immunity Syndrome"
        },
        {
            "airdate": "1968-01-12",
            "episode": "20",
            "href": "http://en.memory-alpha.org/wiki/A_Piece_of_the_Action_%28episode%29",
            "number": "2x20",
            "prodno": "60349",
            "season": "2",
            "series": "original",
            "seriesPretty": "Original",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/e/e0/Kirk_offers_a_piece_of_the_action.jpg/revision/latest/scale-to-width/292?cb=20090226045605&path-prefix=en",
                "name": "Kirk_offers_a_piece_of_the_action.jpg"
            },
            "title": "A Piece of the Action"
        },
        {
            "airdate": "1968-02-23",
            "episode": "21",
            "href": "http://en.memory-alpha.org/wiki/By_Any_Other_Name_%28episode%29",
            "number": "2x21",
            "prodno": "60350",
            "season": "2",
            "series": "original",
            "seriesPretty": "Original",
            "stardate": "4657.5 - 4658.9",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/d/da/Rojan_and_Kelinda.jpg/revision/latest/scale-to-width/292?cb=20110327194014&path-prefix=en",
                "name": "Rojan_and_Kelinda.jpg"
            },
            "title": "By Any Other Name"
        },
        {
            "airdate": "1968-02-09",
            "episode": "22",
            "href": "http://en.memory-alpha.org/wiki/Return_to_Tomorrow_%28episode%29",
            "number": "2x22",
            "prodno": "60351",
            "season": "2",
            "series": "original",
            "seriesPretty": "Original",
            "stardate": "4768.3 - 4770.3",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/4/41/SargonSaysHello.jpg/revision/latest/scale-to-width/292?cb=20120222222937&path-prefix=en",
                "name": "SargonSaysHello.jpg"
            },
            "title": "Return to Tomorrow"
        },
        {
            "airdate": "1968-02-16",
            "episode": "23",
            "href": "http://en.memory-alpha.org/wiki/Patterns_of_Force_%28episode%29",
            "number": "2x23",
            "prodno": "60352",
            "season": "2",
            "series": "original",
            "seriesPretty": "Original",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/3/39/Spock_and_Kirk_are_discovered_by_the_Nazis.jpg/revision/latest/scale-to-width/292?cb=20110327185814&path-prefix=en",
                "name": "Spock_and_Kirk_are_discovered_by_the_Nazis.jpg"
            },
            "title": "Patterns of Force"
        },
        {
            "airdate": "1968-03-08",
            "episode": "24",
            "href": "http://en.memory-alpha.org/wiki/The_Ultimate_Computer_%28episode%29",
            "number": "2x24",
            "prodno": "60353",
            "season": "2",
            "series": "original",
            "seriesPretty": "Original",
            "stardate": "4729.4 - 4731.3",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/4/48/USS_Lexington_remastered.jpg/revision/latest/scale-to-width/292?cb=20110321231319&path-prefix=en",
                "name": "USS_Lexington_remastered.jpg"
            },
            "title": "The Ultimate Computer"
        },
        {
            "airdate": "1968-03-01",
            "episode": "25",
            "href": "http://en.memory-alpha.org/wiki/The_Omega_Glory_%28episode%29",
            "number": "2x25",
            "prodno": "60354",
            "season": "2",
            "series": "original",
            "seriesPretty": "Original",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/f/f0/Tracey_and_Wu.jpg/revision/latest/scale-to-width/292?cb=20110327221511&path-prefix=en",
                "name": "Tracey_and_Wu.jpg"
            },
            "title": "The Omega Glory"
        },
        {
            "airdate": "1968-03-29",
            "episode": "26",
            "href": "http://en.memory-alpha.org/wiki/Assignment:_Earth_%28episode%29",
            "number": "2x26",
            "prodno": "60355",
            "season": "2",
            "series": "original",
            "seriesPretty": "Original",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/b/b8/Garyseven-isis.jpg/revision/latest/scale-to-width/292?cb=20110328221230&path-prefix=en",
                "name": "Garyseven-isis.jpg"
            },
            "title": "Assignment: Earth"
        },
        {
            "airdate": "1968-10-25",
            "episode": "01",
            "href": "http://en.memory-alpha.org/wiki/Spectre_of_the_Gun_%28episode%29",
            "number": "3x01",
            "prodno": "60043-56",
            "season": "3",
            "series": "original",
            "seriesPretty": "Original",
            "stardate": "4385.3",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/3/36/Kirk_and_landing_party_in_Tombstone.jpg/revision/latest/scale-to-width/292?cb=20120113145335&path-prefix=en",
                "name": "Kirk_and_landing_party_in_Tombstone.jpg"
            },
            "title": "Spectre of the Gun"
        },
        {
            "airdate": "1968-12-20",
            "episode": "02",
            "href": "http://en.memory-alpha.org/wiki/Elaan_of_Troyius_%28episode%29",
            "number": "3x02",
            "prodno": "60043-57",
            "season": "3",
            "series": "original",
            "seriesPretty": "Original",
            "stardate": "4372.5",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/7/79/Elaan.jpg/revision/latest/scale-to-width/292?cb=20081217225750&path-prefix=en",
                "name": "Elaan.jpg"
            },
            "title": "Elaan of Troyius"
        },
        {
            "airdate": "1968-10-04",
            "episode": "03",
            "href": "http://en.memory-alpha.org/wiki/The_Paradise_Syndrome_%28episode%29",
            "number": "3x03",
            "prodno": "60043-58",
            "season": "3",
            "series": "original",
            "seriesPretty": "Original",
            "stardate": "4842.6 - 4843.6",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/7/75/Amerind_obelisk.jpg/revision/latest/scale-to-width/292?cb=20050506214110&path-prefix=en",
                "name": "Amerind_obelisk.jpg"
            },
            "title": "The Paradise Syndrome"
        },
        {
            "airdate": "1968-09-27",
            "episode": "04",
            "href": "http://en.memory-alpha.org/wiki/The_Enterprise_Incident_%28episode%29",
            "number": "3x04",
            "prodno": "60043-59",
            "season": "3",
            "series": "original",
            "seriesPretty": "Original",
            "stardate": "5027.3 - 5027.4",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/2/2e/Spock_and_the_Romulan_commander.jpg/revision/latest/scale-to-width/292?cb=20090219042704&path-prefix=en",
                "name": "Spock_and_the_Romulan_commander.jpg"
            },
            "title": "The Enterprise Incident"
        },
        {
            "airdate": "1968-10-11",
            "episode": "05",
            "href": "http://en.memory-alpha.org/wiki/And_the_Children_Shall_Lead_%28episode%29",
            "number": "3x05",
            "prodno": "60043-60",
            "season": "3",
            "series": "original",
            "seriesPretty": "Original",
            "stardate": "5029.5",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/7/7a/Tommy_Starnes_in_command.jpg/revision/latest/scale-to-width/292?cb=20090306214610&path-prefix=en",
                "name": "Tommy_Starnes_in_command.jpg"
            },
            "title": "And the Children Shall Lead"
        },
        {
            "airdate": "1968-09-20",
            "episode": "06",
            "href": "http://en.memory-alpha.org/wiki/Spock%27s_Brain_%28episode%29",
            "number": "3x06",
            "prodno": "60043-61",
            "season": "3",
            "series": "original",
            "seriesPretty": "Original",
            "stardate": "5431.4 - 5432.3",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/f/f4/Spock_wearing_neural_stimulator_2.jpg/revision/latest/scale-to-width/292?cb=20110329025318&path-prefix=en",
                "name": "Spock_wearing_neural_stimulator_2.jpg"
            },
            "title": "Spock's Brain"
        },
        {
            "airdate": "1968-10-18",
            "episode": "07",
            "href": "http://en.memory-alpha.org/wiki/Is_There_in_Truth_No_Beauty%3F_%28episode%29",
            "number": "3x07",
            "prodno": "60043-62",
            "season": "3",
            "series": "original",
            "seriesPretty": "Original",
            "stardate": "5630.7 - 5630.8",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/2/2a/Spock_and_Kollos_on_the_bridge.jpg/revision/latest/scale-to-width/292?cb=20061217162452&path-prefix=en",
                "name": "Spock_and_Kollos_on_the_bridge.jpg"
            },
            "title": "Is There in Truth No Beauty?"
        },
        {
            "airdate": "1968-12-06",
            "episode": "08",
            "href": "http://en.memory-alpha.org/wiki/The_Empath_%28episode%29",
            "number": "3x08",
            "prodno": "60043-63",
            "season": "3",
            "series": "original",
            "seriesPretty": "Original",
            "stardate": "5121.5",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/c/c6/Gem.jpg/revision/latest/scale-to-width/292?cb=20090213213940&path-prefix=en",
                "name": "Gem.jpg"
            },
            "title": "The Empath"
        },
        {
            "airdate": "1968-11-15",
            "episode": "09",
            "href": "http://en.memory-alpha.org/wiki/The_Tholian_Web_%28episode%29",
            "number": "3x09",
            "prodno": "60043-64",
            "season": "3",
            "series": "original",
            "seriesPretty": "Original",
            "stardate": "5693.2",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/f/f2/USS_Enterprise_and_Tholian_web_-_overhead%2C_remastered.jpg/revision/latest/scale-to-width/292?cb=20090320061611&path-prefix=en",
                "name": "USS_Enterprise_and_Tholian_web_-_overhead_remastered.jpg"
            },
            "title": "The Tholian Web"
        },
        {
            "airdate": "1968-11-08",
            "episode": "10",
            "href": "http://en.memory-alpha.org/wiki/For_the_World_is_Hollow_and_I_Have_Touched_the_Sky_%28episode%29",
            "number": "3x10",
            "prodno": "60043-65",
            "season": "3",
            "series": "original",
            "seriesPretty": "Original",
            "stardate": "5476.3 - 5476.4",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/4/4b/Fabrini_old_man.jpg/revision/latest/scale-to-width/292?cb=20120111120241&path-prefix=en",
                "name": "Fabrini_old_man.jpg"
            },
            "title": "For the World is Hollow and I Have Touched the Sky"
        },
        {
            "airdate": "1968-11-01",
            "episode": "11",
            "href": "http://en.memory-alpha.org/wiki/Day_of_the_Dove_%28episode%29",
            "number": "3x11",
            "prodno": "60043-66",
            "season": "3",
            "series": "original",
            "seriesPretty": "Original",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/a/ab/Beta_XII-A_entity.jpg/revision/latest/scale-to-width/292?cb=20081225213130&path-prefix=en",
                "name": "Beta_XII-A_entity.jpg"
            },
            "title": "Day of the Dove"
        },
        {
            "airdate": "1968-11-22",
            "episode": "12",
            "href": "http://en.memory-alpha.org/wiki/Plato%27s_Stepchildren_%28episode%29",
            "number": "3x12",
            "prodno": "60043-67",
            "season": "3",
            "series": "original",
            "seriesPretty": "Original",
            "stardate": "5784.2 - 5784.3",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/a/a0/Uhura_and_Kirk_kiss.jpg/revision/latest/scale-to-width/292?cb=20080510040957&path-prefix=en",
                "name": "Uhura_and_Kirk_kiss.jpg"
            },
            "title": "Plato's Stepchildren"
        },
        {
            "airdate": "1968-11-29",
            "episode": "13",
            "href": "http://en.memory-alpha.org/wiki/Wink_of_an_Eye_%28episode%29",
            "number": "3x13",
            "prodno": "60043-68",
            "season": "3",
            "series": "original",
            "seriesPretty": "Original",
            "stardate": "5710.5 - 5710.9",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/7/7e/Deela_dodges_a_phaser_beam.jpg/revision/latest/scale-to-width/292?cb=20090206233129&path-prefix=en",
                "name": "Deela_dodges_a_phaser_beam.jpg"
            },
            "title": "Wink of an Eye"
        },
        {
            "airdate": "1969-01-24",
            "episode": "14",
            "href": "http://en.memory-alpha.org/wiki/That_Which_Survives_%28episode%29",
            "number": "3x14",
            "prodno": "60043-69",
            "season": "3",
            "series": "original",
            "seriesPretty": "Original",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/b/b7/Losira.jpg/revision/latest/scale-to-width/292?cb=20090208072619&path-prefix=en",
                "name": "Losira.jpg"
            },
            "title": "That Which Survives"
        },
        {
            "airdate": "1969-01-10",
            "episode": "15",
            "href": "http://en.memory-alpha.org/wiki/Let_That_Be_Your_Last_Battlefield_%28episode%29",
            "number": "3x15",
            "prodno": "60043-70",
            "season": "3",
            "series": "original",
            "seriesPretty": "Original",
            "stardate": "5730.2 - 5730.7",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/4/4d/Bele_and_Lokai.jpg/revision/latest/scale-to-width/292?cb=20081215234656&path-prefix=en",
                "name": "Bele_and_Lokai.jpg"
            },
            "title": "Let That Be Your Last Battlefield"
        },
        {
            "airdate": "1969-01-03",
            "episode": "16",
            "href": "http://en.memory-alpha.org/wiki/Whom_Gods_Destroy_%28episode%29",
            "number": "3x16",
            "prodno": "60043-71",
            "season": "3",
            "series": "original",
            "seriesPretty": "Original",
            "stardate": "5718.3",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/5/59/Garth_and_Marta.jpg/revision/latest/scale-to-width/292?cb=20090207070802&path-prefix=en",
                "name": "Garth_and_Marta.jpg"
            },
            "title": "Whom Gods Destroy"
        },
        {
            "airdate": "1969-01-17",
            "episode": "17",
            "href": "http://en.memory-alpha.org/wiki/The_Mark_of_Gideon_%28episode%29",
            "number": "3x17",
            "prodno": "60043-72",
            "season": "3",
            "series": "original",
            "seriesPretty": "Original",
            "stardate": "5423.4 - 5423.8",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/d/d8/Gideon_inhabitants.jpg/revision/latest/scale-to-width/292?cb=20090211050508&path-prefix=en",
                "name": "Gideon_inhabitants.jpg"
            },
            "title": "The Mark of Gideon"
        },
        {
            "airdate": "1969-01-31",
            "episode": "18",
            "href": "http://en.memory-alpha.org/wiki/The_Lights_of_Zetar_%28episode%29",
            "number": "3x18",
            "prodno": "60043-73",
            "season": "3",
            "series": "original",
            "seriesPretty": "Original",
            "stardate": "5725.3 - 5725.6",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/1/14/Memory_Alpha_technicians_and_landing_party.jpg/revision/latest/scale-to-width/292?cb=20120828225043&path-prefix=en",
                "name": "Memory_Alpha_technicians_and_landing_party.jpg"
            },
            "title": "The Lights of Zetar"
        },
        {
            "airdate": "1969-02-28",
            "episode": "19",
            "href": "http://en.memory-alpha.org/wiki/The_Cloud_Minders_%28episode%29",
            "number": "3x19",
            "prodno": "60043-74",
            "season": "3",
            "series": "original",
            "seriesPretty": "Original",
            "stardate": "5818.4 - 5819.3",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/d/d2/Kirk_and_Spock_view_Stratos_from_surface.jpg/revision/latest/scale-to-width/292?cb=20090204050616&path-prefix=en",
                "name": "Kirk_and_Spock_view_Stratos_from_surface.jpg"
            },
            "title": "The Cloud Minders"
        },
        {
            "airdate": "1969-02-21",
            "episode": "20",
            "href": "http://en.memory-alpha.org/wiki/The_Way_to_Eden_%28episode%29",
            "number": "3x20",
            "prodno": "60043-75",
            "season": "3",
            "series": "original",
            "seriesPretty": "Original",
            "stardate": "5832.3 - 5832.6",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/d/dc/Sevrin_and_Adam.jpg/revision/latest/scale-to-width/292?cb=20070409185250&path-prefix=en",
                "name": "Sevrin_and_Adam.jpg"
            },
            "title": "The Way to Eden"
        },
        {
            "airdate": "1969-02-14",
            "episode": "21",
            "href": "http://en.memory-alpha.org/wiki/Requiem_for_Methuselah_%28episode%29",
            "number": "3x21",
            "prodno": "60043-76",
            "season": "3",
            "series": "original",
            "seriesPretty": "Original",
            "stardate": "5843.7 - 5843.8",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/6/69/Rayna_Kapec.jpg/revision/latest/scale-to-width/292?cb=20060101003626&path-prefix=en",
                "name": "Rayna_Kapec.jpg"
            },
            "title": "Requiem for Methuselah"
        },
        {
            "airdate": "1969-03-07",
            "episode": "22",
            "href": "http://en.memory-alpha.org/wiki/The_Savage_Curtain_%28episode%29",
            "number": "3x22",
            "prodno": "60043-77",
            "season": "3",
            "series": "original",
            "seriesPretty": "Original",
            "stardate": "5906.4 - 5906.5",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/2/2f/Surak_TOS.jpg/revision/latest/scale-to-width/292?cb=20081213044908&path-prefix=en",
                "name": "Surak_TOS.jpg"
            },
            "title": "The Savage Curtain"
        },
        {
            "airdate": "1969-03-14",
            "episode": "23",
            "href": "http://en.memory-alpha.org/wiki/All_Our_Yesterdays_%28episode%29",
            "number": "3x23",
            "prodno": "60043-78",
            "season": "3",
            "series": "original",
            "seriesPretty": "Original",
            "stardate": "5943.7 - 5943.9",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/8/81/Zarabeth.jpg/revision/latest/scale-to-width/292?cb=20050806071418&path-prefix=en",
                "name": "Zarabeth.jpg"
            },
            "title": "All Our Yesterdays"
        },
        {
            "airdate": "1969-06-03",
            "episode": "24",
            "href": "http://en.memory-alpha.org/wiki/Turnabout_Intruder_%28episode%29",
            "number": "3x24",
            "prodno": "60043-79",
            "season": "3",
            "series": "original",
            "seriesPretty": "Original",
            "stardate": "5928.5 - 5930.3",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/4/46/Life-energy_transfer-Camus_II.jpg/revision/latest/scale-to-width/292?cb=20100630170355&path-prefix=en",
                "name": "Life-energy_transfer-Camus_II.jpg"
            },
            "title": "Turnabout Intruder"
        }
    ],
    "tng": [
        {
            "airdate": "1987-09-28",
            "episode": "01/02",
            "href": "http://en.memory-alpha.org/wiki/Encounter_at_Farpoint_%28episode%29",
            "number": "1x01/02",
            "prodno": "?????-721",
            "season": "1",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "41153.7",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/8/88/Farpoint_station.jpg/revision/latest/scale-to-width/292?cb=20120201031049&path-prefix=en",
                "name": "Farpoint_station.jpg"
            },
            "title": "Encounter at Farpoint"
        },
        {
            "airdate": "1987-10-05",
            "episode": "03",
            "href": "http://en.memory-alpha.org/wiki/The_Naked_Now_%28episode%29",
            "number": "1x03",
            "prodno": "40271-103",
            "season": "1",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "41209.2",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/1/15/Tasha_Yar%2C_polywater_intoxication.jpg/revision/latest/scale-to-width/292?cb=20120903204438&path-prefix=en",
                "name": "Tasha_Yar_polywater_intoxication.jpg"
            },
            "title": "The Naked Now"
        },
        {
            "airdate": "1987-10-12",
            "episode": "04",
            "href": "http://en.memory-alpha.org/wiki/Code_of_Honor_%28episode%29",
            "number": "1x04",
            "prodno": "40271-104",
            "season": "1",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "41235.25",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/b/b7/Yar_vs._Yareena.jpg/revision/latest/scale-to-width/292?cb=20120802101510&path-prefix=en",
                "name": "Yar_vs._Yareena.jpg"
            },
            "title": "Code of Honor"
        },
        {
            "airdate": "1987-10-19",
            "episode": "05",
            "href": "http://en.memory-alpha.org/wiki/The_Last_Outpost_%28episode%29",
            "number": "1x05",
            "prodno": "40271-107",
            "season": "1",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "41386.4",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/9/9d/Tarr.jpg/revision/latest/scale-to-width/292?cb=20120829020352&path-prefix=en",
                "name": "Tarr.jpg"
            },
            "title": "The Last Outpost"
        },
        {
            "airdate": "1987-10-26",
            "episode": "06",
            "href": "http://en.memory-alpha.org/wiki/Where_No_One_Has_Gone_Before_%28episode%29",
            "number": "1x06",
            "prodno": "40271-106",
            "season": "1",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "41263.1",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/3/35/USS_Enterprise_in_distant_galaxy%2C_remastered.jpg/revision/latest/scale-to-width/292?cb=20120714191028&path-prefix=en",
                "name": "USS_Enterprise_in_distant_galaxy_remastered.jpg"
            },
            "title": "Where No One Has Gone Before"
        },
        {
            "airdate": "1987-11-02",
            "episode": "07",
            "href": "http://en.memory-alpha.org/wiki/Lonely_Among_Us_%28episode%29",
            "number": "1x07",
            "prodno": "40271-108",
            "season": "1",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "41249.3",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/d/d1/Beta_Renner_cloud_electrocutes_bridge_crew.jpg/revision/latest/scale-to-width/292?cb=20120823011624&path-prefix=en",
                "name": "Beta_Renner_cloud_electrocutes_bridge_crew.jpg"
            },
            "title": "Lonely Among Us"
        },
        {
            "airdate": "1987-11-09",
            "episode": "08",
            "href": "http://en.memory-alpha.org/wiki/Justice_%28episode%29",
            "number": "1x08",
            "prodno": "40271-109",
            "season": "1",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "41255.6",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/2/2a/Edo%2C_female_and_male.jpg/revision/latest/scale-to-width/292?cb=20120822001625&path-prefix=en",
                "name": "Edo_female_and_male.jpg"
            },
            "title": "Justice"
        },
        {
            "airdate": "1987-11-16",
            "episode": "09",
            "href": "http://en.memory-alpha.org/wiki/The_Battle_%28episode%29",
            "number": "1x09",
            "prodno": "40271-110",
            "season": "1",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "41723.9",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/2/2c/Picard_hallucinates_the_Battle_of_Maxia.jpg/revision/latest/scale-to-width/292?cb=20120821032844&path-prefix=en",
                "name": "Picard_hallucinates_the_Battle_of_Maxia.jpg"
            },
            "title": "The Battle"
        },
        {
            "airdate": "1987-11-23",
            "episode": "10",
            "href": "http://en.memory-alpha.org/wiki/Hide_and_Q_%28episode%29",
            "number": "1x10",
            "prodno": "40271-111",
            "season": "1",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "41590.5",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/8/81/Riker_laughs_at_Q%27s_plan.jpg/revision/latest/scale-to-width/292?cb=20120820141311&path-prefix=en",
                "name": "Riker_laughs_at_Qs_plan.jpg"
            },
            "title": "Hide and Q"
        },
        {
            "airdate": "1987-11-30",
            "episode": "11",
            "href": "http://en.memory-alpha.org/wiki/Haven_%28episode%29",
            "number": "1x11",
            "prodno": "40271-105",
            "season": "1",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "41294.5",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/2/2c/Troi_and_Miller_kiss.jpg/revision/latest/scale-to-width/292?cb=20120819203532&path-prefix=en",
                "name": "Troi_and_Miller_kiss.jpg"
            },
            "title": "Haven"
        },
        {
            "airdate": "1988-01-11",
            "episode": "12",
            "href": "http://en.memory-alpha.org/wiki/The_Big_Goodbye_%28episode%29",
            "number": "1x12",
            "prodno": "40271-113",
            "season": "1",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "41997.7",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/6/6f/Picard_and_Data_%282364%29.jpg/revision/latest/scale-to-width/292?cb=20120819163635&path-prefix=en",
                "name": "Picard_and_Data_2364.jpg"
            },
            "title": "The Big Goodbye"
        },
        {
            "airdate": "1988-01-18",
            "episode": "13",
            "href": "http://en.memory-alpha.org/wiki/Datalore_%28episode%29",
            "number": "1x13",
            "prodno": "40271-114",
            "season": "1",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "41242.4",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/d/d4/Data_and_Lore_%282364%29.jpg/revision/latest/scale-to-width/292?cb=20120501005518&path-prefix=en",
                "name": "Data_and_Lore_2364.jpg"
            },
            "title": "Datalore"
        },
        {
            "airdate": "1988-01-25",
            "episode": "14",
            "href": "http://en.memory-alpha.org/wiki/Angel_One_%28episode%29",
            "number": "1x14",
            "prodno": "40271-115",
            "season": "1",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "41636.9",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/b/bc/Angel_I-Starbase_515-Klaestron_IV-Banea_surface.jpg/revision/latest/scale-to-width/292?cb=20120808034651&path-prefix=en",
                "name": "Angel_I-Starbase_515-Klaestron_IV-Banea_surface.jpg"
            },
            "title": "Angel One"
        },
        {
            "airdate": "1988-02-01",
            "episode": "15",
            "href": "http://en.memory-alpha.org/wiki/11001001_%28episode%29",
            "number": "1x15",
            "prodno": "40271-116",
            "season": "1",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "41365.9",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/c/c8/Bynars.jpg/revision/latest/scale-to-width/292?cb=20120805112752&path-prefix=en",
                "name": "Bynars.jpg"
            },
            "title": "11001001"
        },
        {
            "airdate": "1988-02-08",
            "episode": "16",
            "href": "http://en.memory-alpha.org/wiki/Too_Short_a_Season_%28episode%29",
            "number": "1x16",
            "prodno": "40271-112",
            "season": "1",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "41309.5",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/0/0c/Jameson_and_Karnas.jpg/revision/latest/scale-to-width/292?cb=20120804220726&path-prefix=en",
                "name": "Jameson_and_Karnas.jpg"
            },
            "title": "Too Short a Season"
        },
        {
            "airdate": "1988-02-15",
            "episode": "17",
            "href": "http://en.memory-alpha.org/wiki/When_The_Bough_Breaks_%28episode%29",
            "number": "1x17",
            "prodno": "40271-118",
            "season": "1",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "41509.1",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/f/fb/Passive_resistance.jpg/revision/latest/scale-to-width/292?cb=20120802012942&path-prefix=en",
                "name": "Passive_resistance.jpg"
            },
            "title": "When The Bough Breaks"
        },
        {
            "airdate": "1988-02-22",
            "episode": "18",
            "href": "http://en.memory-alpha.org/wiki/Home_Soil_%28episode%29",
            "number": "1x18",
            "prodno": "40271-117",
            "season": "1",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "41463.9",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/a/a0/Microbrain_under_glass.jpg/revision/latest/scale-to-width/292?cb=20120801023914&path-prefix=en",
                "name": "Microbrain_under_glass.jpg"
            },
            "title": "Home Soil"
        },
        {
            "airdate": "1988-03-14",
            "episode": "19",
            "href": "http://en.memory-alpha.org/wiki/Coming_of_Age_%28episode%29",
            "number": "1x19",
            "prodno": "40271-119",
            "season": "1",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "41461.2",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/0/0e/Wesley_ponders_the_Psych_Test.jpg/revision/latest/scale-to-width/292?cb=20120730024322&path-prefix=en",
                "name": "Wesley_ponders_the_Psych_Test.jpg"
            },
            "title": "Coming of Age"
        },
        {
            "airdate": "1988-03-21",
            "episode": "20",
            "href": "http://en.memory-alpha.org/wiki/Heart_of_Glory_%28episode%29",
            "number": "1x20",
            "prodno": "40271-120",
            "season": "1",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "41503.7",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/a/ab/KlingonDeathRitual.jpg/revision/latest/scale-to-width/292?cb=20120729215821&path-prefix=en",
                "name": "KlingonDeathRitual.jpg"
            },
            "title": "Heart of Glory"
        },
        {
            "airdate": "1988-04-11",
            "episode": "21",
            "href": "http://en.memory-alpha.org/wiki/The_Arsenal_of_Freedom_%28episode%29",
            "number": "1x21",
            "prodno": "40271-121",
            "season": "1",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "41798.2",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/d/d3/Geordi_in_command.jpg/revision/latest/scale-to-width/292?cb=20120729173851&path-prefix=en",
                "name": "Geordi_in_command.jpg"
            },
            "title": "The Arsenal of Freedom"
        },
        {
            "airdate": "1988-04-18",
            "episode": "22",
            "href": "http://en.memory-alpha.org/wiki/Symbiosis_%28episode%29",
            "number": "1x22",
            "prodno": "40271-123",
            "season": "1",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/e/e3/Felicium_procurement.jpg/revision/latest/scale-to-width/292?cb=20120729012710&path-prefix=en",
                "name": "Felicium_procurement.jpg"
            },
            "title": "Symbiosis"
        },
        {
            "airdate": "1988-04-25",
            "episode": "23",
            "href": "http://en.memory-alpha.org/wiki/Skin_of_Evil_%28episode%29",
            "number": "1x23",
            "prodno": "40271-122",
            "season": "1",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "41601.3",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/d/dd/Yar%27s_funeral_hologram.jpg/revision/latest/scale-to-width/292?cb=20120728223405&path-prefix=en",
                "name": "Yars_funeral_hologram.jpg"
            },
            "title": "Skin of Evil"
        },
        {
            "airdate": "1988-05-02",
            "episode": "24",
            "href": "http://en.memory-alpha.org/wiki/We%27ll_Always_Have_Paris_%28episode%29",
            "number": "1x24",
            "prodno": "40271-124",
            "season": "1",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "41697.9",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/1/15/JeniceManheim.jpg/revision/latest/scale-to-width/292?cb=20120727025154&path-prefix=en",
                "name": "JeniceManheim.jpg"
            },
            "title": "We'll Always Have Paris"
        },
        {
            "airdate": "1988-05-09",
            "episode": "25",
            "href": "http://en.memory-alpha.org/wiki/Conspiracy_%28episode%29",
            "number": "1x25",
            "prodno": "40271-125",
            "season": "1",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "41775.5",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/f/f0/Remmick_aftermath.jpg/revision/latest/scale-to-width/292?cb=20120726031134&path-prefix=en",
                "name": "Remmick_aftermath.jpg"
            },
            "title": "Conspiracy"
        },
        {
            "airdate": "1988-05-16",
            "episode": "26",
            "href": "http://en.memory-alpha.org/wiki/The_Neutral_Zone_%28episode%29",
            "number": "1x26",
            "prodno": "40271-126",
            "season": "1",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "41986.0",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/5/58/Romulans_on_viewscreen.jpg/revision/latest/scale-to-width/292?cb=20120726004136&path-prefix=en",
                "name": "Romulans_on_viewscreen.jpg"
            },
            "title": "The Neutral Zone"
        },
        {
            "airdate": "1988-11-21",
            "episode": "01",
            "href": "http://en.memory-alpha.org/wiki/The_Child_%28episode%29",
            "number": "2x01",
            "prodno": "40272-127",
            "season": "2",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "42073.1",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/c/cf/Ian_Troi_reverts_to_energy.jpg/revision/latest/scale-to-width/292?cb=20121111210043&path-prefix=en",
                "name": "Ian_Troi_reverts_to_energy.jpg"
            },
            "title": "The Child"
        },
        {
            "airdate": "1988-11-28",
            "episode": "02",
            "href": "http://en.memory-alpha.org/wiki/Where_Silence_Has_Lease_%28episode%29",
            "number": "2x02",
            "prodno": "40272-128",
            "season": "2",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "42193.6",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/1/1e/Nagilum.jpg/revision/latest/scale-to-width/292?cb=20121216004711&path-prefix=en",
                "name": "Nagilum.jpg"
            },
            "title": "Where Silence Has Lease"
        },
        {
            "airdate": "1988-12-05",
            "episode": "03",
            "href": "http://en.memory-alpha.org/wiki/Elementary,_Dear_Data_%28episode%29",
            "number": "2x03",
            "prodno": "40272-129",
            "season": "2",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "42286.3",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/e/e2/Holmes_and_Watson.jpg/revision/latest/scale-to-width/292?cb=20121216035237&path-prefix=en",
                "name": "Holmes_and_Watson.jpg"
            },
            "title": "Elementary, Dear Data"
        },
        {
            "airdate": "1988-12-12",
            "episode": "04",
            "href": "http://en.memory-alpha.org/wiki/The_Outrageous_Okona_%28episode%29",
            "number": "2x04",
            "prodno": "40272-130",
            "season": "2",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "42402.7",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/2/2c/Thadiun_Okona.jpg/revision/latest/scale-to-width/292?cb=20121213031055&path-prefix=en",
                "name": "Thadiun_Okona.jpg"
            },
            "title": "The Outrageous Okona"
        },
        {
            "airdate": "1989-01-09",
            "episode": "05",
            "href": "http://en.memory-alpha.org/wiki/Loud_As_A_Whisper_%28episode%29",
            "number": "2x05",
            "prodno": "40272-132",
            "season": "2",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "42477.2",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/3/30/Riva_and_Chorus.jpg/revision/latest/scale-to-width/292?cb=20121212040241&path-prefix=en",
                "name": "Riva_and_Chorus.jpg"
            },
            "title": "Loud As A Whisper"
        },
        {
            "airdate": "1989-01-23",
            "episode": "06",
            "href": "http://en.memory-alpha.org/wiki/The_Schizoid_Man_%28episode%29",
            "number": "2x06",
            "prodno": "40272-131",
            "season": "2",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "42437.5",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/9/97/Data_with_Graves_capsule.jpg/revision/latest/scale-to-width/292?cb=20121212024616&path-prefix=en",
                "name": "Data_with_Graves_capsule.jpg"
            },
            "title": "The Schizoid Man"
        },
        {
            "airdate": "1989-01-30",
            "episode": "07",
            "href": "http://en.memory-alpha.org/wiki/Unnatural_Selection_%28episode%29",
            "number": "2x07",
            "prodno": "40272-133",
            "season": "2",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "42494.8",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/c/c0/Katherine_Pulaski%2C_prematurely_aged.jpg/revision/latest/scale-to-width/292?cb=20121212005143&path-prefix=en",
                "name": "Katherine_Pulaski_prematurely_aged.jpg"
            },
            "title": "Unnatural Selection"
        },
        {
            "airdate": "1989-02-06",
            "episode": "08",
            "href": "http://en.memory-alpha.org/wiki/A_Matter_Of_Honor_%28episode%29",
            "number": "2x08",
            "prodno": "40272-134",
            "season": "2",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "42506.5",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/7/7e/Kargan_faces_Riker.jpg/revision/latest/scale-to-width/292?cb=20121211045037&path-prefix=en",
                "name": "Kargan_faces_Riker.jpg"
            },
            "title": "A Matter Of Honor"
        },
        {
            "airdate": "1989-02-13",
            "episode": "09",
            "href": "http://en.memory-alpha.org/wiki/The_Measure_Of_A_Man_%28episode%29",
            "number": "2x09",
            "prodno": "40272-135",
            "season": "2",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "42523.7",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/b/bc/Data_takes_the_stand.jpg/revision/latest/scale-to-width/292?cb=20121210231711&path-prefix=en",
                "name": "Data_takes_the_stand.jpg"
            },
            "title": "The Measure Of A Man"
        },
        {
            "airdate": "1989-02-20",
            "episode": "10",
            "href": "http://en.memory-alpha.org/wiki/The_Dauphin_%28episode%29",
            "number": "2x10",
            "prodno": "40272-136",
            "season": "2",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "42568.8",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/b/b7/Salia_and_Wesley_on_Holodeck.jpg/revision/latest/scale-to-width/292?cb=20121210010350&path-prefix=en",
                "name": "Salia_and_Wesley_on_Holodeck.jpg"
            },
            "title": "The Dauphin"
        },
        {
            "airdate": "1989-03-20",
            "episode": "11",
            "href": "http://en.memory-alpha.org/wiki/Contagion_%28episode%29",
            "number": "2x11",
            "prodno": "40272-137",
            "season": "2",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "42609.1",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/6/68/Data_zapped_by_Iconian_probe.jpg/revision/latest/scale-to-width/292?cb=20121209220907&path-prefix=en",
                "name": "Data_zapped_by_Iconian_probe.jpg"
            },
            "title": "Contagion"
        },
        {
            "airdate": "1989-03-27",
            "episode": "12",
            "href": "http://en.memory-alpha.org/wiki/The_Royale_%28episode%29",
            "number": "2x12",
            "prodno": "40272-138",
            "season": "2",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "42625.4",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/4/47/Royale_Craps_Table.jpg/revision/latest/scale-to-width/292?cb=20121210192427&path-prefix=en",
                "name": "Royale_Craps_Table.jpg"
            },
            "title": "The Royale"
        },
        {
            "airdate": "1989-04-03",
            "episode": "13",
            "href": "http://en.memory-alpha.org/wiki/Time_Squared_%28episode%29",
            "number": "2x13",
            "prodno": "40272-139",
            "season": "2",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "42679.2",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/1/1d/USS_Enterprise-D_consumed_by_energy_vortex.jpg/revision/latest/scale-to-width/292?cb=20121209203142&path-prefix=en",
                "name": "USS_Enterprise-D_consumed_by_energy_vortex.jpg"
            },
            "title": "Time Squared"
        },
        {
            "airdate": "1989-04-24",
            "episode": "14",
            "href": "http://en.memory-alpha.org/wiki/The_Icarus_Factor_%28episode%29",
            "number": "2x14",
            "prodno": "40272-140",
            "season": "2",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "42686.4",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/0/0a/Age_of_ascension_pain_sticks.jpg/revision/latest/scale-to-width/292?cb=20121108235405&path-prefix=en",
                "name": "Age_of_ascension_pain_sticks.jpg"
            },
            "title": "The Icarus Factor"
        },
        {
            "airdate": "1989-05-01",
            "episode": "15",
            "href": "http://en.memory-alpha.org/wiki/Pen_Pals_%28episode%29",
            "number": "2x15",
            "prodno": "40272-141",
            "season": "2",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "42695.3",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/b/b1/Sarjenka_and_Data.jpg/revision/latest/scale-to-width/292?cb=20121209021638&path-prefix=en",
                "name": "Sarjenka_and_Data.jpg"
            },
            "title": "Pen Pals"
        },
        {
            "airdate": "1989-05-08",
            "episode": "16",
            "href": "http://en.memory-alpha.org/wiki/Q_Who_%28episode%29",
            "number": "2x16",
            "prodno": "40272-142",
            "season": "2",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "42761.3",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/7/7d/BorgFirstContact.jpg/revision/latest/scale-to-width/292?cb=20121209004530&path-prefix=en",
                "name": "BorgFirstContact.jpg"
            },
            "title": "Q Who"
        },
        {
            "airdate": "1989-05-15",
            "episode": "17",
            "href": "http://en.memory-alpha.org/wiki/Samaritan_Snare_%28episode%29",
            "number": "2x17",
            "prodno": "40272-143",
            "season": "2",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "42779.1",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/f/fc/Starfleet_surgical_scrubs.jpg/revision/latest/scale-to-width/292?cb=20121208050037&path-prefix=en",
                "name": "Starfleet_surgical_scrubs.jpg"
            },
            "title": "Samaritan Snare"
        },
        {
            "airdate": "1989-05-22",
            "episode": "18",
            "href": "http://en.memory-alpha.org/wiki/Up_The_Long_Ladder_%28episode%29",
            "number": "2x18",
            "prodno": "40272-144",
            "season": "2",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "42823.2",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/3/31/Bringloidi_on_transporter_platform.jpg/revision/latest/scale-to-width/292?cb=20121208030910&path-prefix=en",
                "name": "Bringloidi_on_transporter_platform.jpg"
            },
            "title": "Up The Long Ladder"
        },
        {
            "airdate": "1989-06-19",
            "episode": "19",
            "href": "http://en.memory-alpha.org/wiki/Manhunt_%28episode%29",
            "number": "2x19",
            "prodno": "40272-145",
            "season": "2",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "42859.2",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/1/19/Picard_and_Lwaxana_Troi.jpg/revision/latest/scale-to-width/292?cb=20121207032502&path-prefix=en",
                "name": "Picard_and_Lwaxana_Troi.jpg"
            },
            "title": "Manhunt"
        },
        {
            "airdate": "1989-06-29",
            "episode": "20",
            "href": "http://en.memory-alpha.org/wiki/The_Emissary_%28episode%29",
            "number": "2x20",
            "prodno": "40272-146",
            "season": "2",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "42901.3",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/b/b5/Worf_and_K%27Ehleyr_say_goodbye.jpg/revision/latest/scale-to-width/292?cb=20121204043259&path-prefix=en",
                "name": "Worf_and_KEhleyr_say_goodbye.jpg"
            },
            "title": "The Emissary"
        },
        {
            "airdate": "1989-07-10",
            "episode": "21",
            "href": "http://en.memory-alpha.org/wiki/Peak_Performance_%28episode%29",
            "number": "2x21",
            "prodno": "40272-147",
            "season": "2",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "42923.4",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/d/de/USS_Hathaway_attacks_the_Enterprise-D.jpg/revision/latest/scale-to-width/292?cb=20121204031153&path-prefix=en",
                "name": "USS_Hathaway_attacks_the_Enterprise-D.jpg"
            },
            "title": "Peak Performance"
        },
        {
            "airdate": "1989-07-17",
            "episode": "22",
            "href": "http://en.memory-alpha.org/wiki/Shades_of_Gray_%28episode%29",
            "number": "2x22",
            "prodno": "40272-148",
            "season": "2",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "42976.1",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/6/68/Riker_in_sickbay%2C_2365.jpg/revision/latest/scale-to-width/292?cb=20121123192737&path-prefix=en",
                "name": "Riker_in_sickbay_2365.jpg"
            },
            "title": "Shades of Gray"
        },
        {
            "airdate": "1989-09-25",
            "episode": "01",
            "href": "http://en.memory-alpha.org/wiki/Evolution_%28episode%29",
            "number": "3x01",
            "prodno": "40273-150",
            "season": "3",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "43125.8",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/2/23/Enterprise_drifts_towards_stellar_matter.jpg/revision/latest/scale-to-width/292?cb=20130210210438&path-prefix=en",
                "name": "Enterprise_drifts_towards_stellar_matter.jpg"
            },
            "title": "Evolution"
        },
        {
            "airdate": "1989-10-02",
            "episode": "02",
            "href": "http://en.memory-alpha.org/wiki/The_Ensigns_of_Command_%28episode%29",
            "number": "3x02",
            "prodno": "40273-149",
            "season": "3",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "43133.3",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/0/02/Tau_Cygna_V_surface.jpg/revision/latest/scale-to-width/292?cb=20130420203223&path-prefix=en",
                "name": "Tau_Cygna_V_surface.jpg"
            },
            "title": "The Ensigns of Command"
        },
        {
            "airdate": "1989-10-09",
            "episode": "03",
            "href": "http://en.memory-alpha.org/wiki/The_Survivors_%28episode%29",
            "number": "3x03",
            "prodno": "40273-151",
            "season": "3",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "43152.4",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/7/7b/Kevin_and_Rishon_Uxbridge.jpg/revision/latest/scale-to-width/292?cb=20130625195003&path-prefix=en",
                "name": "Kevin_and_Rishon_Uxbridge.jpg"
            },
            "title": "The Survivors"
        },
        {
            "airdate": "1989-10-16",
            "episode": "04",
            "href": "http://en.memory-alpha.org/wiki/Who_Watches_The_Watchers_%28episode%29",
            "number": "3x04",
            "prodno": "40273-152",
            "season": "3",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "43173.5",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/6/6a/Nuria_sees_Mintaka_III.jpg/revision/latest/scale-to-width/292?cb=20130404212901&path-prefix=en",
                "name": "Nuria_sees_Mintaka_III.jpg"
            },
            "title": "Who Watches The Watchers"
        },
        {
            "airdate": "1989-10-23",
            "episode": "05",
            "href": "http://en.memory-alpha.org/wiki/The_Bonding_%28episode%29",
            "number": "3x05",
            "prodno": "40273-153",
            "season": "3",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "43198.7",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/5/53/Ruustai.jpg/revision/latest/scale-to-width/292?cb=20130705171623&path-prefix=en",
                "name": "Ruustai.jpg"
            },
            "title": "The Bonding"
        },
        {
            "airdate": "1989-10-30",
            "episode": "06",
            "href": "http://en.memory-alpha.org/wiki/Booby_Trap_%28episode%29",
            "number": "3x06",
            "prodno": "40273-154",
            "season": "3",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "43205.6",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/8/8d/Enterprise_in_Orelious_IX_asteroid_field.jpg/revision/latest/scale-to-width/292?cb=20130705174020&path-prefix=en",
                "name": "Enterprise_in_Orelious_IX_asteroid_field.jpg"
            },
            "title": "Booby Trap"
        },
        {
            "airdate": "1989-11-06",
            "episode": "07",
            "href": "http://en.memory-alpha.org/wiki/The_Enemy_%28episode%29",
            "number": "3x07",
            "prodno": "40273-155",
            "season": "3",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "43349.2",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/1/1e/Bochra_and_La_Forge_on_Galorndon_Core.jpg/revision/latest/scale-to-width/292?cb=20130709233713&path-prefix=en",
                "name": "Bochra_and_La_Forge_on_Galorndon_Core.jpg"
            },
            "title": "The Enemy"
        },
        {
            "airdate": "1989-11-13",
            "episode": "08",
            "href": "http://en.memory-alpha.org/wiki/The_Price_%28episode%29",
            "number": "3x08",
            "prodno": "40273-156",
            "season": "3",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "43385.6",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/7/74/Barzan_Wormhole_from_Ten_Forward.jpg/revision/latest/scale-to-width/292?cb=20130714191923&path-prefix=en",
                "name": "Barzan_Wormhole_from_Ten_Forward.jpg"
            },
            "title": "The Price"
        },
        {
            "airdate": "1989-11-20",
            "episode": "09",
            "href": "http://en.memory-alpha.org/wiki/The_Vengeance_Factor_%28episode%29",
            "number": "3x09",
            "prodno": "40273-157",
            "season": "3",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "43421.9",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/5/5d/Yuta_revealed.jpg/revision/latest/scale-to-width/292?cb=20130124022344&path-prefix=en",
                "name": "Yuta_revealed.jpg"
            },
            "title": "The Vengeance Factor"
        },
        {
            "airdate": "1990-01-01",
            "episode": "10",
            "href": "http://en.memory-alpha.org/wiki/The_Defector_%28episode%29",
            "number": "3x10",
            "prodno": "40273-158",
            "season": "3",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "43462.5",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/4/4f/Alidar_Jarok.jpg/revision/latest/scale-to-width/292?cb=20110624163335&path-prefix=en",
                "name": "Alidar_Jarok.jpg"
            },
            "title": "The Defector"
        },
        {
            "airdate": "1990-01-08",
            "episode": "11",
            "href": "http://en.memory-alpha.org/wiki/The_Hunted_%28episode%29",
            "number": "3x11",
            "prodno": "40273-159",
            "season": "3",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "43489.2",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/2/27/Danar_tests_force_field.jpg/revision/latest/scale-to-width/292?cb=20130125021513&path-prefix=en",
                "name": "Danar_tests_force_field.jpg"
            },
            "title": "The Hunted"
        },
        {
            "airdate": "1990-01-29",
            "episode": "12",
            "href": "http://en.memory-alpha.org/wiki/The_High_Ground_%28episode%29",
            "number": "3x12",
            "prodno": "40273-160",
            "season": "3",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "43510.7",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/a/a2/Crusher_treats_Rutian.jpg/revision/latest/scale-to-width/292?cb=20130420205335&path-prefix=en",
                "name": "Crusher_treats_Rutian.jpg"
            },
            "title": "The High Ground"
        },
        {
            "airdate": "1990-02-05",
            "episode": "13",
            "href": "http://en.memory-alpha.org/wiki/Deja_Q_%28episode%29",
            "number": "3x13",
            "prodno": "40273-161",
            "season": "3",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "43539.1",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/e/ee/Guinan_and_Q_%282366%29.jpg/revision/latest/scale-to-width/292?cb=20110703014407&path-prefix=en",
                "name": "Guinan_and_Q_2366.jpg"
            },
            "title": "Deja Q"
        },
        {
            "airdate": "1990-02-12",
            "episode": "14",
            "href": "http://en.memory-alpha.org/wiki/A_Matter_of_Perspective_%28episode%29",
            "number": "3x14",
            "prodno": "40273-162",
            "season": "3",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "43610.4",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/4/41/Tanuga_IV.jpg/revision/latest/scale-to-width/292?cb=20110703212809&path-prefix=en",
                "name": "Tanuga_IV.jpg"
            },
            "title": "A Matter of Perspective"
        },
        {
            "airdate": "1990-02-19",
            "episode": "15",
            "href": "http://en.memory-alpha.org/wiki/Yesterday%27s_Enterprise_%28episode%29",
            "number": "3x15",
            "prodno": "40273-163",
            "season": "3",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "43625.2",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/e/e1/USS_Enterprise-C_emerges_from_temporal_rift.jpg/revision/latest/scale-to-width/292?cb=20130507010348&path-prefix=en",
                "name": "USS_Enterprise-C_emerges_from_temporal_rift.jpg"
            },
            "title": "Yesterday's Enterprise"
        },
        {
            "airdate": "1990-03-12",
            "episode": "16",
            "href": "http://en.memory-alpha.org/wiki/The_Offspring_%28episode%29",
            "number": "3x16",
            "prodno": "40273-164",
            "season": "3",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "43657.0",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/f/fb/Data_and_Lal_as_Lal_dies.jpg/revision/latest/scale-to-width/292?cb=20140612031016&path-prefix=en",
                "name": "Data_and_Lal_as_Lal_dies.jpg"
            },
            "title": "The Offspring"
        },
        {
            "airdate": "1990-03-19",
            "episode": "17",
            "href": "http://en.memory-alpha.org/wiki/Sins_of_the_Father_%28episode%29",
            "number": "3x17",
            "prodno": "40273-165",
            "season": "3",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "43685.2",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/f/fd/Worf_faces_the_high_council.jpg/revision/latest/scale-to-width/292?cb=20120205154039&path-prefix=en",
                "name": "Worf_faces_the_high_council.jpg"
            },
            "title": "Sins of the Father"
        },
        {
            "airdate": "1990-03-26",
            "episode": "18",
            "href": "http://en.memory-alpha.org/wiki/Allegiance_%28episode%29",
            "number": "3x18",
            "prodno": "40273-166",
            "season": "3",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "43714.1",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/e/e7/Abducting_aliens.jpg/revision/latest/scale-to-width/292?cb=20090301210441&path-prefix=en",
                "name": "Abducting_aliens.jpg"
            },
            "title": "Allegiance"
        },
        {
            "airdate": "1990-04-02",
            "episode": "19",
            "href": "http://en.memory-alpha.org/wiki/Captain%27s_Holiday_%28episode%29",
            "number": "3x19",
            "prodno": "40273-167",
            "season": "3",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "43745.2",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/8/81/Risa_tourist_resort.jpg/revision/latest/scale-to-width/292?cb=20130628224421&path-prefix=en",
                "name": "Risa_tourist_resort.jpg"
            },
            "title": "Captain's Holiday"
        },
        {
            "airdate": "1990-04-23",
            "episode": "20",
            "href": "http://en.memory-alpha.org/wiki/Tin_Man_%28episode%29",
            "number": "3x20",
            "prodno": "40273-168",
            "season": "3",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "43779.3",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/4/4f/Gomtuu.jpg/revision/latest/scale-to-width/292?cb=20130511003756&path-prefix=en",
                "name": "Gomtuu.jpg"
            },
            "title": "Tin Man"
        },
        {
            "airdate": "1990-04-30",
            "episode": "21",
            "href": "http://en.memory-alpha.org/wiki/Hollow_Pursuits_%28episode%29",
            "number": "3x21",
            "prodno": "40273-169",
            "season": "3",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "43807.4",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/3/3b/Reginald_Barclay%2C_2366.jpg/revision/latest/scale-to-width/292?cb=20110725184313&path-prefix=en",
                "name": "Reginald_Barclay_2366.jpg"
            },
            "title": "Hollow Pursuits"
        },
        {
            "airdate": "1990-05-07",
            "episode": "22",
            "href": "http://en.memory-alpha.org/wiki/The_Most_Toys_%28episode%29",
            "number": "3x22",
            "prodno": "40273-170",
            "season": "3",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "43872.2",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/0/08/Kivas_Fajo.jpg/revision/latest/scale-to-width/292?cb=20110726124254&path-prefix=en",
                "name": "Kivas_Fajo.jpg"
            },
            "title": "The Most Toys"
        },
        {
            "airdate": "1990-05-14",
            "episode": "23",
            "href": "http://en.memory-alpha.org/wiki/Sarek_%28episode%29",
            "number": "3x23",
            "prodno": "40273-171",
            "season": "3",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "43917.4",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/f/fd/Sarek%2C_2366.jpg/revision/latest/scale-to-width/292?cb=20130529102744&path-prefix=en",
                "name": "Sarek_2366.jpg"
            },
            "title": "Sarek"
        },
        {
            "airdate": "1990-05-28",
            "episode": "24",
            "href": "http://en.memory-alpha.org/wiki/M%C3%A9nage_%C3%A0_Troi_%28episode%29",
            "number": "3x24",
            "prodno": "40273-172",
            "season": "3",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "43930.7",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/4/41/Betazed_surface.jpg/revision/latest/scale-to-width/292?cb=20130703160921&path-prefix=en",
                "name": "Betazed_surface.jpg"
            },
            "title": "M\u00e9nage \u00e0 Troi"
        },
        {
            "airdate": "1990-06-04",
            "episode": "25",
            "href": "http://en.memory-alpha.org/wiki/Transfigurations_%28episode%29",
            "number": "3x25",
            "prodno": "40273-173",
            "season": "3",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "43957.2",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/e/e2/John_Doe_evolve.jpg/revision/latest/scale-to-width/292?cb=20130508014330&path-prefix=en",
                "name": "John_Doe_evolve.jpg"
            },
            "title": "Transfigurations"
        },
        {
            "airdate": "1990-06-18",
            "episode": "26",
            "href": "http://en.memory-alpha.org/wiki/The_Best_of_Both_Worlds_%28episode%29",
            "number": "3x26",
            "prodno": "40273-174",
            "season": "3",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "43989.1",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/6/6a/Picard_kidnapped_by_the_Borg.jpg/revision/latest/scale-to-width/292?cb=20130423000049&path-prefix=en",
                "name": "Picard_kidnapped_by_the_Borg.jpg"
            },
            "title": "The Best of Both Worlds"
        },
        {
            "airdate": "1990-09-24",
            "episode": "01",
            "href": "http://en.memory-alpha.org/wiki/The_Best_of_Both_Worlds,_Part_II_%28episode%29",
            "number": "4x01",
            "prodno": "40274-175",
            "season": "4",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "44001.4",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/5/51/LocutusOfBorg2367.jpg/revision/latest/scale-to-width/292?cb=20130424025031&path-prefix=en",
                "name": "LocutusOfBorg2367.jpg"
            },
            "title": "The Best of Both Worlds, Part II"
        },
        {
            "airdate": "1990-10-01",
            "episode": "02",
            "href": "http://en.memory-alpha.org/wiki/Family_%28episode%29",
            "number": "4x02",
            "prodno": "40274-178",
            "season": "4",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "44012.3",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/5/59/La_Barre.jpg/revision/latest/scale-to-width/292?cb=20130625191834&path-prefix=en",
                "name": "La_Barre.jpg"
            },
            "title": "Family"
        },
        {
            "airdate": "1990-10-08",
            "episode": "03",
            "href": "http://en.memory-alpha.org/wiki/Brothers_%28episode%29",
            "number": "4x03",
            "prodno": "40274-177",
            "season": "4",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "44085.7",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/4/43/Noonian_Soong%2C_2367.jpg/revision/latest/scale-to-width/292?cb=20130508195458&path-prefix=en",
                "name": "Noonian_Soong_2367.jpg"
            },
            "title": "Brothers"
        },
        {
            "airdate": "1990-10-15",
            "episode": "04",
            "href": "http://en.memory-alpha.org/wiki/Suddenly_Human_%28episode%29",
            "number": "4x04",
            "prodno": "40274-176",
            "season": "4",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "44143.7",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/3/34/Suddenly_Human.jpg/revision/latest/scale-to-width/292?cb=20140207120133&path-prefix=en",
                "name": "Suddenly_Human.jpg"
            },
            "title": "Suddenly Human"
        },
        {
            "airdate": "1990-10-22",
            "episode": "05",
            "href": "http://en.memory-alpha.org/wiki/Remember_Me_%28episode%29",
            "number": "4x05",
            "prodno": "40274-179",
            "season": "4",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "44161.2",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/f/f1/Crusher_implicated_into_vortex.jpg/revision/latest/scale-to-width/292?cb=20130508200133&path-prefix=en",
                "name": "Crusher_implicated_into_vortex.jpg"
            },
            "title": "Remember Me"
        },
        {
            "airdate": "1990-10-29",
            "episode": "06",
            "href": "http://en.memory-alpha.org/wiki/Legacy_%28episode%29",
            "number": "4x06",
            "prodno": "40274-180",
            "season": "4",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "44215.2",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/4/45/Ishara_Yar.jpg/revision/latest/scale-to-width/292?cb=20140218204004&path-prefix=en",
                "name": "Ishara_Yar.jpg"
            },
            "title": "Legacy"
        },
        {
            "airdate": "1990-11-05",
            "episode": "07",
            "href": "http://en.memory-alpha.org/wiki/Reunion_%28episode%29",
            "number": "4x07",
            "prodno": "40274-181",
            "season": "4",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "44246.3",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/5/5d/Alexander_Rozhenko%2C_2367.jpg/revision/latest/scale-to-width/292?cb=20140224131844&path-prefix=en",
                "name": "Alexander_Rozhenko_2367.jpg"
            },
            "title": "Reunion"
        },
        {
            "airdate": "1990-11-12",
            "episode": "08",
            "href": "http://en.memory-alpha.org/wiki/Future_Imperfect_%28episode%29",
            "number": "4x08",
            "prodno": "40274-182",
            "season": "4",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "44286.5",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/9/9f/William_Riker%2C_2383.jpg/revision/latest/scale-to-width/292?cb=20130508200234&path-prefix=en",
                "name": "William_Riker_2383.jpg"
            },
            "title": "Future Imperfect"
        },
        {
            "airdate": "1990-11-19",
            "episode": "09",
            "href": "http://en.memory-alpha.org/wiki/Final_Mission_%28episode%29",
            "number": "4x09",
            "prodno": "40274-183",
            "season": "4",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "44307.3",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/3/36/Lambda_Paz_surface.jpg/revision/latest/scale-to-width/292?cb=20140314232235&path-prefix=en",
                "name": "Lambda_Paz_surface.jpg"
            },
            "title": "Final Mission"
        },
        {
            "airdate": "1990-12-31",
            "episode": "10",
            "href": "http://en.memory-alpha.org/wiki/The_Loss_%28episode%29",
            "number": "4x10",
            "prodno": "40274-184",
            "season": "4",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "44356.9",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/c/cf/Cosmic_string.jpg/revision/latest/scale-to-width/292?cb=20111019012206&path-prefix=en",
                "name": "Cosmic_string.jpg"
            },
            "title": "The Loss"
        },
        {
            "airdate": "1991-01-07",
            "episode": "11",
            "href": "http://en.memory-alpha.org/wiki/Data%27s_Day_%28episode%29",
            "number": "4x11",
            "prodno": "40274-185",
            "season": "4",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "44390.1",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/5/55/OBriensWedding.jpg/revision/latest/scale-to-width/292?cb=20050427132217&path-prefix=en",
                "name": "OBriensWedding.jpg"
            },
            "title": "Data's Day"
        },
        {
            "airdate": "1991-01-28",
            "episode": "12",
            "href": "http://en.memory-alpha.org/wiki/The_Wounded_%28episode%29",
            "number": "4x12",
            "prodno": "40274-186",
            "season": "4",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "44429.6",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/9/92/Trager2.jpg/revision/latest/scale-to-width/292?cb=20080520204347&path-prefix=en",
                "name": "Trager2.jpg"
            },
            "title": "The Wounded"
        },
        {
            "airdate": "1991-02-04",
            "episode": "13",
            "href": "http://en.memory-alpha.org/wiki/Devil%27s_Due_%28episode%29",
            "number": "4x13",
            "prodno": "40274-187",
            "season": "4",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "44474.5",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/b/ba/Ardra.jpg/revision/latest/scale-to-width/292?cb=20111025143735&path-prefix=en",
                "name": "Ardra.jpg"
            },
            "title": "Devil's Due"
        },
        {
            "airdate": "1991-02-11",
            "episode": "14",
            "href": "http://en.memory-alpha.org/wiki/Clues_%28episode%29",
            "number": "4x14",
            "prodno": "40274-188",
            "season": "4",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "44502.7",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/7/7e/Tethys_III.jpg/revision/latest/scale-to-width/292?cb=20100130194126&path-prefix=en",
                "name": "Tethys_III.jpg"
            },
            "title": "Clues"
        },
        {
            "airdate": "1991-02-18",
            "episode": "15",
            "href": "http://en.memory-alpha.org/wiki/First_Contact_%28episode%29",
            "number": "4x15",
            "prodno": "40274-189",
            "season": "4",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/3/34/Rivas_Jakara.jpg/revision/latest/scale-to-width/292?cb=20111103201915&path-prefix=en",
                "name": "Rivas_Jakara.jpg"
            },
            "title": "First Contact"
        },
        {
            "airdate": "1991-03-11",
            "episode": "16",
            "href": "http://en.memory-alpha.org/wiki/Galaxy%27s_Child_%28episode%29",
            "number": "4x16",
            "prodno": "40274-190",
            "season": "4",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "44614.6",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/6/66/Junior_is_born.jpg/revision/latest/scale-to-width/292?cb=20111104145238&path-prefix=en",
                "name": "Junior_is_born.jpg"
            },
            "title": "Galaxy's Child"
        },
        {
            "airdate": "1991-03-18",
            "episode": "17",
            "href": "http://en.memory-alpha.org/wiki/Night_Terrors_%28episode%29",
            "number": "4x17",
            "prodno": "40274-191",
            "season": "4",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "44631.2",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/a/a7/Guinan_%282367%29.jpg/revision/latest/scale-to-width/292?cb=20130508200505&path-prefix=en",
                "name": "Guinan_2367.jpg"
            },
            "title": "Night Terrors"
        },
        {
            "airdate": "1991-03-25",
            "episode": "18",
            "href": "http://en.memory-alpha.org/wiki/Identity_Crisis_%28episode%29",
            "number": "4x18",
            "prodno": "40274-192",
            "season": "4",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "44664.5",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/8/8c/Geordi_La_Forge_investigates_vector_analysis_anomaly.jpg/revision/latest/scale-to-width/292?cb=20060522160838&path-prefix=en",
                "name": "Geordi_La_Forge_investigates_vector_analysis_anomaly.jpg"
            },
            "title": "Identity Crisis"
        },
        {
            "airdate": "1991-04-01",
            "episode": "19",
            "href": "http://en.memory-alpha.org/wiki/The_Nth_Degree_%28episode%29",
            "number": "4x19",
            "prodno": "40274-193",
            "season": "4",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "44704.2",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/2/2c/Cytherian.jpg/revision/latest/scale-to-width/292?cb=20070429135621&path-prefix=en",
                "name": "Cytherian.jpg"
            },
            "title": "The Nth Degree"
        },
        {
            "airdate": "1991-04-22",
            "episode": "20",
            "href": "http://en.memory-alpha.org/wiki/Qpid_%28episode%29",
            "number": "4x20",
            "prodno": "40274-194",
            "season": "4",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "44741.9",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/d/dd/Picard_and_Vash.jpg/revision/latest/scale-to-width/292?cb=20111109224049&path-prefix=en",
                "name": "Picard_and_Vash.jpg"
            },
            "title": "Qpid"
        },
        {
            "airdate": "1991-04-29",
            "episode": "21",
            "href": "http://en.memory-alpha.org/wiki/The_Drumhead_%28episode%29",
            "number": "4x21",
            "prodno": "40274-195",
            "season": "4",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "44769.2",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/f/f4/Picard_in_interrogation_room.jpg/revision/latest/scale-to-width/292?cb=20111112153952&path-prefix=en",
                "name": "Picard_in_interrogation_room.jpg"
            },
            "title": "The Drumhead"
        },
        {
            "airdate": "1991-05-06",
            "episode": "22",
            "href": "http://en.memory-alpha.org/wiki/Half_a_Life_%28episode%29",
            "number": "4x22",
            "prodno": "40274-196",
            "season": "4",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "44805.3",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/4/44/Lwaxana_and_Timicin.jpg/revision/latest/scale-to-width/292?cb=20111112232208&path-prefix=en",
                "name": "Lwaxana_and_Timicin.jpg"
            },
            "title": "Half a Life"
        },
        {
            "airdate": "1991-05-13",
            "episode": "23",
            "href": "http://en.memory-alpha.org/wiki/The_Host_%28episode%29",
            "number": "4x23",
            "prodno": "40274-197",
            "season": "4",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "44821.3",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/9/98/Odan_Symbiont.jpg/revision/latest/scale-to-width/292?cb=20111113192053&path-prefix=en",
                "name": "Odan_Symbiont.jpg"
            },
            "title": "The Host"
        },
        {
            "airdate": "1991-05-27",
            "episode": "24",
            "href": "http://en.memory-alpha.org/wiki/The_Mind%27s_Eye_%28episode%29",
            "number": "4x24",
            "prodno": "40274-198",
            "season": "4",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "44885.5",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/a/a9/Geordi_brainwashing.jpg/revision/latest/scale-to-width/292?cb=20130508201245&path-prefix=en",
                "name": "Geordi_brainwashing.jpg"
            },
            "title": "The Mind's Eye"
        },
        {
            "airdate": "1991-06-03",
            "episode": "25",
            "href": "http://en.memory-alpha.org/wiki/In_Theory_%28episode%29",
            "number": "4x25",
            "prodno": "40274-199",
            "season": "4",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "44932.3",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/9/94/You_are_not_my_mother.jpg/revision/latest/scale-to-width/292?cb=20111116232857&path-prefix=en",
                "name": "You_are_not_my_mother.jpg"
            },
            "title": "In Theory"
        },
        {
            "airdate": "1991-06-17",
            "episode": "26",
            "href": "http://en.memory-alpha.org/wiki/Redemption_%28episode%29",
            "number": "4x26",
            "prodno": "40274-200",
            "season": "4",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "44995.3",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/9/9e/IKS_Bortas_under_attack.jpg/revision/latest/scale-to-width/292?cb=20080312011507&path-prefix=en",
                "name": "IKS_Bortas_under_attack.jpg"
            },
            "title": "Redemption"
        },
        {
            "airdate": "1991-09-23",
            "episode": "01",
            "href": "http://en.memory-alpha.org/wiki/Redemption_II_%28episode%29",
            "number": "5x01",
            "prodno": "40275-201",
            "season": "5",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "45020.4",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/0/07/Qo%27noS_burns.jpg/revision/latest/scale-to-width/292?cb=20050517085124&path-prefix=en",
                "name": "QonoS_burns.jpg"
            },
            "title": "Redemption II"
        },
        {
            "airdate": "1991-09-30",
            "episode": "02",
            "href": "http://en.memory-alpha.org/wiki/Darmok_%28episode%29",
            "number": "5x02",
            "prodno": "40275-202",
            "season": "5",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "45047.2",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/2/20/Dathon.jpg/revision/latest/scale-to-width/292?cb=20101130045703&path-prefix=en",
                "name": "Dathon.jpg"
            },
            "title": "Darmok"
        },
        {
            "airdate": "1991-10-07",
            "episode": "03",
            "href": "http://en.memory-alpha.org/wiki/Ensign_Ro_%28episode%29",
            "number": "5x03",
            "prodno": "40275-203",
            "season": "5",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "45076.3",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/6/66/Guinan_and_Ro_Laren_%282368%29.jpg/revision/latest/scale-to-width/292?cb=20111218162525&path-prefix=en",
                "name": "Guinan_and_Ro_Laren_2368.jpg"
            },
            "title": "Ensign Ro"
        },
        {
            "airdate": "1991-10-14",
            "episode": "04",
            "href": "http://en.memory-alpha.org/wiki/Silicon_Avatar_%28episode%29",
            "number": "5x04",
            "prodno": "40275-204",
            "season": "5",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "45122.3",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/2/23/Crystalline_entity.jpg/revision/latest/scale-to-width/292?cb=20060619230431&path-prefix=en",
                "name": "Crystalline_entity.jpg"
            },
            "title": "Silicon Avatar"
        },
        {
            "airdate": "1991-10-21",
            "episode": "05",
            "href": "http://en.memory-alpha.org/wiki/Disaster_%28episode%29",
            "number": "5x05",
            "prodno": "40275-205",
            "season": "5",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "45156.1",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/8/89/USS_Enterprise-D_adrift.jpg/revision/latest/scale-to-width/292?cb=20131231042235&path-prefix=en",
                "name": "USS_Enterprise-D_adrift.jpg"
            },
            "title": "Disaster"
        },
        {
            "airdate": "1991-10-28",
            "episode": "06",
            "href": "http://en.memory-alpha.org/wiki/The_Game_%28episode%29",
            "number": "5x06",
            "prodno": "40275-206",
            "season": "5",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "45208.2",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/6/66/Ktarian_game_graphics.jpg/revision/latest/scale-to-width/292?cb=20140805154646&path-prefix=en",
                "name": "Ktarian_game_graphics.jpg"
            },
            "title": "The Game"
        },
        {
            "airdate": "1991-11-04",
            "episode": "07",
            "href": "http://en.memory-alpha.org/wiki/Unification_I_%28episode%29",
            "number": "5x07",
            "prodno": "40275-208",
            "season": "5",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "45236.4",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/a/ae/Picard_and_Data_on_Romulus.jpg/revision/latest/scale-to-width/292?cb=20111229213614&path-prefix=en",
                "name": "Picard_and_Data_on_Romulus.jpg"
            },
            "title": "Unification I"
        },
        {
            "airdate": "1991-11-11",
            "episode": "08",
            "href": "http://en.memory-alpha.org/wiki/Unification_II_%28episode%29",
            "number": "5x08",
            "prodno": "40275-207",
            "season": "5",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "45245.8",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/8/8f/Spock_and_Picard%27s_mind_meld.jpg/revision/latest/scale-to-width/292?cb=20140723153900&path-prefix=en",
                "name": "Spock_and_Picards_mind_meld.jpg"
            },
            "title": "Unification II"
        },
        {
            "airdate": "1991-11-18",
            "episode": "09",
            "href": "http://en.memory-alpha.org/wiki/A_Matter_of_Time_%28episode%29",
            "number": "5x09",
            "prodno": "40275-209",
            "season": "5",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "45349.1",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/1/19/Penthara_IV_frozen.jpg/revision/latest/scale-to-width/292?cb=20050817094140&path-prefix=en",
                "name": "Penthara_IV_frozen.jpg"
            },
            "title": "A Matter of Time"
        },
        {
            "airdate": "1992-01-06",
            "episode": "10",
            "href": "http://en.memory-alpha.org/wiki/New_Ground_%28episode%29",
            "number": "5x10",
            "prodno": "40275-210",
            "season": "5",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "45376.3",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/6/63/Soliton_wave.jpg/revision/latest/scale-to-width/292?cb=20120103201556&path-prefix=en",
                "name": "Soliton_wave.jpg"
            },
            "title": "New Ground"
        },
        {
            "airdate": "1992-01-27",
            "episode": "11",
            "href": "http://en.memory-alpha.org/wiki/Hero_Worship_%28episode%29",
            "number": "5x11",
            "prodno": "40275-211",
            "season": "5",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "45397.3",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/d/d4/Data_comforting_Timothy.jpg/revision/latest/scale-to-width/292?cb=20120109232238&path-prefix=en",
                "name": "Data_comforting_Timothy.jpg"
            },
            "title": "Hero Worship"
        },
        {
            "airdate": "1992-02-03",
            "episode": "12",
            "href": "http://en.memory-alpha.org/wiki/Violations_%28episode%29",
            "number": "5x12",
            "prodno": "40275-212",
            "season": "5",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "45429.3",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/3/3d/Jev.jpg/revision/latest/scale-to-width/292?cb=20120110215053&path-prefix=en",
                "name": "Jev.jpg"
            },
            "title": "Violations"
        },
        {
            "airdate": "1992-02-10",
            "episode": "13",
            "href": "http://en.memory-alpha.org/wiki/The_Masterpiece_Society_%28episode%29",
            "number": "5x13",
            "prodno": "40275-213",
            "season": "5",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "45470.1",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/9/94/Genome_Colony.jpg/revision/latest/scale-to-width/292?cb=20070315212523&path-prefix=en",
                "name": "Genome_Colony.jpg"
            },
            "title": "The Masterpiece Society"
        },
        {
            "airdate": "1992-02-17",
            "episode": "14",
            "href": "http://en.memory-alpha.org/wiki/Conundrum_%28episode%29",
            "number": "5x14",
            "prodno": "40275-214",
            "season": "5",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "45494.2",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/a/a6/Satarran.jpg/revision/latest/scale-to-width/292?cb=20120115181903&path-prefix=en",
                "name": "Satarran.jpg"
            },
            "title": "Conundrum"
        },
        {
            "airdate": "1992-02-24",
            "episode": "15",
            "href": "http://en.memory-alpha.org/wiki/Power_Play_%28episode%29",
            "number": "5x15",
            "prodno": "40275-215",
            "season": "5",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "45571.2",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/c/c8/Troi_and_Data_taken_over_my_Ux-Mal_criminals.jpg/revision/latest/scale-to-width/292?cb=20060616123304&path-prefix=en",
                "name": "Troi_and_Data_taken_over_my_Ux-Mal_criminals.jpg"
            },
            "title": "Power Play"
        },
        {
            "airdate": "1992-03-02",
            "episode": "16",
            "href": "http://en.memory-alpha.org/wiki/Ethics_%28episode%29",
            "number": "5x16",
            "prodno": "40275-216",
            "season": "5",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "45587.3",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/8/82/Worf%27s_death.jpg/revision/latest/scale-to-width/292?cb=20120128192101&path-prefix=en",
                "name": "Worfs_death.jpg"
            },
            "title": "Ethics"
        },
        {
            "airdate": "1992-03-16",
            "episode": "17",
            "href": "http://en.memory-alpha.org/wiki/The_Outcast_%28episode%29",
            "number": "5x17",
            "prodno": "40275-217",
            "season": "5",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "45614.6",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/a/a9/Soren.jpg/revision/latest/scale-to-width/292?cb=20120129124006&path-prefix=en",
                "name": "Soren.jpg"
            },
            "title": "The Outcast"
        },
        {
            "airdate": "1992-03-23",
            "episode": "18",
            "href": "http://en.memory-alpha.org/wiki/Cause_and_Effect_%28episode%29",
            "number": "5x18",
            "prodno": "40275-218",
            "season": "5",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "45652.1",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/b/b8/USS_Enterprise-D_explodes%2C_2368.jpg/revision/latest/scale-to-width/292?cb=20120131203321&path-prefix=en",
                "name": "USS_Enterprise-D_explodes_2368.jpg"
            },
            "title": "Cause and Effect"
        },
        {
            "airdate": "1992-03-30",
            "episode": "19",
            "href": "http://en.memory-alpha.org/wiki/The_First_Duty_%28episode%29",
            "number": "5x19",
            "prodno": "40275-219",
            "season": "5",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "45703.9",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/c/cf/Nova_Squadron.jpg/revision/latest/scale-to-width/292?cb=20100816184636&path-prefix=en",
                "name": "Nova_Squadron.jpg"
            },
            "title": "The First Duty"
        },
        {
            "airdate": "1992-04-20",
            "episode": "20",
            "href": "http://en.memory-alpha.org/wiki/Cost_of_Living_%28episode%29",
            "number": "5x20",
            "prodno": "40275-220",
            "season": "5",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "45733.6",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/c/c4/Parallax_colony_mud_bath.jpg/revision/latest/scale-to-width/292?cb=20120211125922&path-prefix=en",
                "name": "Parallax_colony_mud_bath.jpg"
            },
            "title": "Cost of Living"
        },
        {
            "airdate": "1992-04-27",
            "episode": "21",
            "href": "http://en.memory-alpha.org/wiki/The_Perfect_Mate_%28episode%29",
            "number": "5x21",
            "prodno": "40275-221",
            "season": "5",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "45761.3",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/2/21/Kamala.jpg/revision/latest/scale-to-width/292?cb=20120211172324&path-prefix=en",
                "name": "Kamala.jpg"
            },
            "title": "The Perfect Mate"
        },
        {
            "airdate": "1992-05-04",
            "episode": "22",
            "href": "http://en.memory-alpha.org/wiki/Imaginary_Friend_%28episode%29",
            "number": "5x22",
            "prodno": "40275-222",
            "season": "5",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "45832.1",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/8/8b/Isabella.jpg/revision/latest/scale-to-width/292?cb=20120213200244&path-prefix=en",
                "name": "Isabella.jpg"
            },
            "title": "Imaginary Friend"
        },
        {
            "airdate": "1992-05-11",
            "episode": "23",
            "href": "http://en.memory-alpha.org/wiki/I_Borg_%28episode%29",
            "number": "5x23",
            "prodno": "40275-223",
            "season": "5",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "45854.2",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/e/ed/Hugh_body.jpg/revision/latest/scale-to-width/292?cb=20120218232842&path-prefix=en",
                "name": "Hugh_body.jpg"
            },
            "title": "I Borg"
        },
        {
            "airdate": "1992-05-18",
            "episode": "24",
            "href": "http://en.memory-alpha.org/wiki/The_Next_Phase_%28episode%29",
            "number": "5x24",
            "prodno": "40275-224",
            "season": "5",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "45892.4",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/0/03/Ro_and_Geordi_connect.jpg/revision/latest/scale-to-width/292?cb=20120221202633&path-prefix=en",
                "name": "Ro_and_Geordi_connect.jpg"
            },
            "title": "The Next Phase"
        },
        {
            "airdate": "1992-06-01",
            "episode": "25",
            "href": "http://en.memory-alpha.org/wiki/The_Inner_Light_%28episode%29",
            "number": "5x25",
            "prodno": "40275-225",
            "season": "5",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "45944.1",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/5/5c/Picard_playing_Ressikan_Flute.jpg/revision/latest/scale-to-width/292?cb=20120208015651&path-prefix=en",
                "name": "Picard_playing_Ressikan_Flute.jpg"
            },
            "title": "The Inner Light"
        },
        {
            "airdate": "1992-06-15",
            "episode": "26",
            "href": "http://en.memory-alpha.org/wiki/Time%27s_Arrow_%28episode%29",
            "number": "5x26",
            "prodno": "40275-226",
            "season": "5",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "45959.1",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/9/91/Guinan_and_Data_%281893%29.jpg/revision/latest/scale-to-width/292?cb=20120302162700&path-prefix=en",
                "name": "Guinan_and_Data_1893.jpg"
            },
            "title": "Time's Arrow"
        },
        {
            "airdate": "1992-09-21",
            "episode": "01",
            "href": "http://en.memory-alpha.org/wiki/Time%27s_Arrow,_Part_II_%28episode%29",
            "number": "6x01",
            "prodno": "40276-227",
            "season": "6",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "46001.3",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/7/7d/Geordi_reattaches_Data%27s_head.jpg/revision/latest/scale-to-width/292?cb=20120428130248&path-prefix=en",
                "name": "Geordi_reattaches_Datas_head.jpg"
            },
            "title": "Time's Arrow, Part II"
        },
        {
            "airdate": "1992-09-28",
            "episode": "02",
            "href": "http://en.memory-alpha.org/wiki/Realm_of_Fear_%28episode%29",
            "number": "6x02",
            "prodno": "40276-228",
            "season": "6",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "46041.1",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/1/15/Transporter_matter_beam.jpg/revision/latest/scale-to-width/292?cb=20120428215617&path-prefix=en",
                "name": "Transporter_matter_beam.jpg"
            },
            "title": "Realm of Fear"
        },
        {
            "airdate": "1992-10-05",
            "episode": "03",
            "href": "http://en.memory-alpha.org/wiki/Man_of_the_People_%28episode%29",
            "number": "6x03",
            "prodno": "40276-229",
            "season": "6",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "46071.6",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/2/27/Deanna_Troi_rapidly_aged_HD.jpg/revision/latest/scale-to-width/292?cb=20140707122558&path-prefix=en",
                "name": "Deanna_Troi_rapidly_aged_HD.jpg"
            },
            "title": "Man of the People"
        },
        {
            "airdate": "1992-10-12",
            "episode": "04",
            "href": "http://en.memory-alpha.org/wiki/Relics_%28episode%29",
            "number": "6x04",
            "prodno": "40276-230",
            "season": "6",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "46125.3",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/e/e2/Montgomery_Scott%2C_2369.jpg/revision/latest/scale-to-width/292?cb=20141125013310&path-prefix=en",
                "name": "Montgomery_Scott_2369.jpg"
            },
            "title": "Relics"
        },
        {
            "airdate": "1992-10-19",
            "episode": "05",
            "href": "http://en.memory-alpha.org/wiki/Schisms_%28episode%29",
            "number": "6x05",
            "prodno": "40276-231",
            "season": "6",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "46154.2",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/2/27/Riker_abducted.jpg/revision/latest/scale-to-width/292?cb=20060617151651&path-prefix=en",
                "name": "Riker_abducted.jpg"
            },
            "title": "Schisms"
        },
        {
            "airdate": "1992-10-26",
            "episode": "06",
            "href": "http://en.memory-alpha.org/wiki/True_Q_%28episode%29",
            "number": "6x06",
            "prodno": "40276-232",
            "season": "6",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "46192.3",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/6/6d/Amanda_rogers.jpg/revision/latest/scale-to-width/292?cb=20140707221704&path-prefix=en",
                "name": "Amanda_rogers.jpg"
            },
            "title": "True Q"
        },
        {
            "airdate": "1992-11-02",
            "episode": "07",
            "href": "http://en.memory-alpha.org/wiki/Rascals_%28episode%29",
            "number": "6x07",
            "prodno": "40276-233",
            "season": "6",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "46235.7",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/f/f0/Youthened_Guinan_and_Ro_Laren_%282369%29.jpg/revision/latest/scale-to-width/292?cb=20140708173631&path-prefix=en",
                "name": "Youthened_Guinan_and_Ro_Laren_2369.jpg"
            },
            "title": "Rascals"
        },
        {
            "airdate": "1992-11-07",
            "episode": "08",
            "href": "http://en.memory-alpha.org/wiki/A_Fistful_of_Datas_%28episode%29",
            "number": "6x08",
            "prodno": "40276-234",
            "season": "6",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "46271.5",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/1/14/Sheriff_Worf.jpg/revision/latest/scale-to-width/292?cb=20140708205626&path-prefix=en",
                "name": "Sheriff_Worf.jpg"
            },
            "title": "A Fistful of Datas"
        },
        {
            "airdate": "1992-11-14",
            "episode": "09",
            "href": "http://en.memory-alpha.org/wiki/The_Quality_of_Life_%28episode%29",
            "number": "6x09",
            "prodno": "40276-235",
            "season": "6",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "46307.2",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/4/4b/Exocomp_with_tool.jpg/revision/latest/scale-to-width/292?cb=20140708234939&path-prefix=en",
                "name": "Exocomp_with_tool.jpg"
            },
            "title": "The Quality of Life"
        },
        {
            "airdate": "1992-12-14",
            "episode": "10",
            "href": "http://en.memory-alpha.org/wiki/Chain_of_Command,_Part_I_%28episode%29",
            "number": "6x10",
            "prodno": "40276-236",
            "season": "6",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "46357.4",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/8/88/Edward_Jellico.jpg/revision/latest/scale-to-width/292?cb=20140805213245&path-prefix=en",
                "name": "Edward_Jellico.jpg"
            },
            "title": "Chain of Command, Part I"
        },
        {
            "airdate": "1992-12-21",
            "episode": "11",
            "href": "http://en.memory-alpha.org/wiki/Chain_of_Command,_Part_II_%28episode%29",
            "number": "6x11",
            "prodno": "40276-237",
            "season": "6",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "46360.8",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/4/4f/Madred%2C_four_lights.jpg/revision/latest/scale-to-width/292?cb=20120523132634&path-prefix=en",
                "name": "Madred_four_lights.jpg"
            },
            "title": "Chain of Command, Part II"
        },
        {
            "airdate": "1993-01-25",
            "episode": "12",
            "href": "http://en.memory-alpha.org/wiki/Ship_in_a_Bottle_%28episode%29",
            "number": "6x12",
            "prodno": "40276-238",
            "season": "6",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "46424.1",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/4/41/James_Moriarty.jpg/revision/latest/scale-to-width/292?cb=20121216034417&path-prefix=en",
                "name": "James_Moriarty.jpg"
            },
            "title": "Ship in a Bottle"
        },
        {
            "airdate": "1993-02-01",
            "episode": "13",
            "href": "http://en.memory-alpha.org/wiki/Aquiel_%28episode%29",
            "number": "6x13",
            "prodno": "40276-239",
            "season": "6",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "46461.3",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/b/b6/Aquiel_Uhnari.jpg/revision/latest/scale-to-width/292?cb=20140703000655&path-prefix=en",
                "name": "Aquiel_Uhnari.jpg"
            },
            "title": "Aquiel"
        },
        {
            "airdate": "1993-02-08",
            "episode": "14",
            "href": "http://en.memory-alpha.org/wiki/Face_of_the_Enemy_%28episode%29",
            "number": "6x14",
            "prodno": "40276-240",
            "season": "6",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "46519.0",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/f/fb/Rakal_%28Major%29.jpg/revision/latest/scale-to-width/292?cb=20140713232022&path-prefix=en",
                "name": "Rakal_Major.jpg"
            },
            "title": "Face of the Enemy"
        },
        {
            "airdate": "1993-02-15",
            "episode": "15",
            "href": "http://en.memory-alpha.org/wiki/Tapestry_%28episode%29",
            "number": "6x15",
            "prodno": "40276-241",
            "season": "6",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/1/13/Picard%2C_lieutenant_junior_grade.jpg/revision/latest/scale-to-width/292?cb=20140805224238&path-prefix=en",
                "name": "Picard_lieutenant_junior_grade.jpg"
            },
            "title": "Tapestry"
        },
        {
            "airdate": "1993-02-22",
            "episode": "16",
            "href": "http://en.memory-alpha.org/wiki/Birthright,_Part_I_%28episode%29",
            "number": "6x16",
            "prodno": "40276-242",
            "season": "6",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "46578.4",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/6/66/Galaxy_class_docked_at_DS9.jpg/revision/latest/scale-to-width/292?cb=20140806221821&path-prefix=en",
                "name": "Galaxy_class_docked_at_DS9.jpg"
            },
            "title": "Birthright, Part I"
        },
        {
            "airdate": "1993-03-01",
            "episode": "17",
            "href": "http://en.memory-alpha.org/wiki/Birthright,_Part_II_%28episode%29",
            "number": "6x17",
            "prodno": "40276-243",
            "season": "6",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "46579.2",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/3/38/Carraya_IV_surface.jpg/revision/latest/scale-to-width/292?cb=20080517090422&path-prefix=en",
                "name": "Carraya_IV_surface.jpg"
            },
            "title": "Birthright, Part II"
        },
        {
            "airdate": "1993-03-29",
            "episode": "18",
            "href": "http://en.memory-alpha.org/wiki/Starship_Mine_%28episode%29",
            "number": "6x18",
            "prodno": "40276-244",
            "season": "6",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "46682.4",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/4/43/Remmler_array.jpg/revision/latest/scale-to-width/292?cb=20140914204903&path-prefix=en",
                "name": "Remmler_array.jpg"
            },
            "title": "Starship Mine"
        },
        {
            "airdate": "1993-04-05",
            "episode": "19",
            "href": "http://en.memory-alpha.org/wiki/Lessons_%28episode%29",
            "number": "6x19",
            "prodno": "40276-245",
            "season": "6",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "46693.1",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/c/ce/Picard_and_Daren_embrace.jpg/revision/latest/scale-to-width/292?cb=20140914220720&path-prefix=en",
                "name": "Picard_and_Daren_embrace.jpg"
            },
            "title": "Lessons"
        },
        {
            "airdate": "1993-04-26",
            "episode": "20",
            "href": "http://en.memory-alpha.org/wiki/The_Chase_%28episode%29",
            "number": "6x20",
            "prodno": "40276-246",
            "season": "6",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "46731.5",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/3/3c/Progenitor.jpg/revision/latest/scale-to-width/292?cb=20140915211801&path-prefix=en",
                "name": "Progenitor.jpg"
            },
            "title": "The Chase"
        },
        {
            "airdate": "1993-05-02",
            "episode": "21",
            "href": "http://en.memory-alpha.org/wiki/Frame_of_Mind_%28episode%29",
            "number": "6x21",
            "prodno": "40276-247",
            "season": "6",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "46778.1",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/3/34/Riker_experiences_a_schizophrenic_episode.jpg/revision/latest/scale-to-width/292?cb=20100624224829&path-prefix=en",
                "name": "Riker_experiences_a_schizophrenic_episode.jpg"
            },
            "title": "Frame of Mind"
        },
        {
            "airdate": "1993-05-10",
            "episode": "22",
            "href": "http://en.memory-alpha.org/wiki/Suspicions_%28episode%29",
            "number": "6x22",
            "prodno": "40276-248",
            "season": "6",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "46830.1",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/a/aa/Guinan_and_Beverly_Crusher%2C_2369.jpg/revision/latest/scale-to-width/292?cb=20120619190609&path-prefix=en",
                "name": "Guinan_and_Beverly_Crusher_2369.jpg"
            },
            "title": "Suspicions"
        },
        {
            "airdate": "1993-05-17",
            "episode": "23",
            "href": "http://en.memory-alpha.org/wiki/Rightful_Heir_%28episode%29",
            "number": "6x23",
            "prodno": "40276-249",
            "season": "6",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "46852.2",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/8/8e/Kahless.jpg/revision/latest/scale-to-width/292?cb=20140916161013&path-prefix=en",
                "name": "Kahless.jpg"
            },
            "title": "Rightful Heir"
        },
        {
            "airdate": "1993-05-24",
            "episode": "24",
            "href": "http://en.memory-alpha.org/wiki/Second_Chances_%28episode%29",
            "number": "6x24",
            "prodno": "40276-250",
            "season": "6",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "46915.2",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/8/89/Thomas_and_William_Riker.jpg/revision/latest/scale-to-width/292?cb=20120628094636&path-prefix=en",
                "name": "Thomas_and_William_Riker.jpg"
            },
            "title": "Second Chances"
        },
        {
            "airdate": "1993-06-12",
            "episode": "25",
            "href": "http://en.memory-alpha.org/wiki/Timescape_%28episode%29",
            "number": "6x25",
            "prodno": "40276-251",
            "season": "6",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "46944.2",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/7/7b/Picard_experiencing_temporal_narcosis.jpg/revision/latest/scale-to-width/292?cb=20120629132811&path-prefix=en",
                "name": "Picard_experiencing_temporal_narcosis.jpg"
            },
            "title": "Timescape"
        },
        {
            "airdate": "1993-06-21",
            "episode": "26",
            "href": "http://en.memory-alpha.org/wiki/Descent_%28episode%29",
            "number": "6x26",
            "prodno": "40276-252",
            "season": "6",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "46982.1",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/a/ad/Data%27s_poker_game%2C_2369.jpg/revision/latest/scale-to-width/292?cb=20120630180249&path-prefix=en",
                "name": "Datas_poker_game_2369.jpg"
            },
            "title": "Descent"
        },
        {
            "airdate": "1993-09-18",
            "episode": "01",
            "href": "http://en.memory-alpha.org/wiki/Descent,_Part_II_%28episode%29",
            "number": "7x01",
            "prodno": "40277-253",
            "season": "7",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "47025.4",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/1/1c/Lore%2C_2370.jpg/revision/latest/scale-to-width/292?cb=20141207193316&path-prefix=en",
                "name": "Lore_2370.jpg"
            },
            "title": "Descent, Part II"
        },
        {
            "airdate": "1993-09-25",
            "episode": "02",
            "href": "http://en.memory-alpha.org/wiki/Liaisons_%28episode%29",
            "number": "7x02",
            "prodno": "40277-254",
            "season": "7",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/e/e2/Anna.jpg/revision/latest/scale-to-width/292?cb=20141208010351&path-prefix=en",
                "name": "Anna.jpg"
            },
            "title": "Liaisons"
        },
        {
            "airdate": "1993-10-04",
            "episode": "03",
            "href": "http://en.memory-alpha.org/wiki/Interface_%28episode%29",
            "number": "7x03",
            "prodno": "40277-255",
            "season": "7",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "47215.5",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/e/eb/Geordi_reflects_as_interface_probe.jpg/revision/latest/scale-to-width/292?cb=20141213223619&path-prefix=en",
                "name": "Geordi_reflects_as_interface_probe.jpg"
            },
            "title": "Interface"
        },
        {
            "airdate": "1993-10-09",
            "episode": "04",
            "href": "http://en.memory-alpha.org/wiki/Gambit,_Part_I_%28episode%29",
            "number": "7x04",
            "prodno": "40277-256",
            "season": "7",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "47135.2",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/1/1c/Arctus_Baran.jpg/revision/latest/scale-to-width/292?cb=20141214013348&path-prefix=en",
                "name": "Arctus_Baran.jpg"
            },
            "title": "Gambit, Part I"
        },
        {
            "airdate": "1993-10-16",
            "episode": "05",
            "href": "http://en.memory-alpha.org/wiki/Gambit,_Part_II_%28episode%29",
            "number": "7x05",
            "prodno": "40277-257",
            "season": "7",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "47160.1",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/a/a0/Stone_of_gol.jpg/revision/latest/scale-to-width/292?cb=20141214030706&path-prefix=en",
                "name": "Stone_of_gol.jpg"
            },
            "title": "Gambit, Part II"
        },
        {
            "airdate": "1993-10-23",
            "episode": "06",
            "href": "http://en.memory-alpha.org/wiki/Phantasms_%28episode%29",
            "number": "7x06",
            "prodno": "40277-258",
            "season": "7",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "47225.7",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/d/d3/Data_arm.jpg/revision/latest/scale-to-width/292?cb=20141214212005&path-prefix=en",
                "name": "Data_arm.jpg"
            },
            "title": "Phantasms"
        },
        {
            "airdate": "1993-10-30",
            "episode": "07",
            "href": "http://en.memory-alpha.org/wiki/Dark_Page_%28episode%29",
            "number": "7x07",
            "prodno": "40277-259",
            "season": "7",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "47254.1",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/7/71/Deanna_and_Lwaxana_Troi%2C_2370.jpg/revision/latest/scale-to-width/292?cb=20141216011522&path-prefix=en",
                "name": "Deanna_and_Lwaxana_Troi_2370.jpg"
            },
            "title": "Dark Page"
        },
        {
            "airdate": "1993-11-06",
            "episode": "08",
            "href": "http://en.memory-alpha.org/wiki/Attached_%28episode%29",
            "number": "7x08",
            "prodno": "40277-260",
            "season": "7",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "47304.2",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/9/9a/Crusher_and_Picard_on_Kesprytt_III.jpg/revision/latest/scale-to-width/292?cb=20141217025713&path-prefix=en",
                "name": "Crusher_and_Picard_on_Kesprytt_III.jpg"
            },
            "title": "Attached"
        },
        {
            "airdate": "1993-11-15",
            "episode": "09",
            "href": "http://en.memory-alpha.org/wiki/Force_of_Nature_%28episode%29",
            "number": "7x09",
            "prodno": "40277-261",
            "season": "7",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "47310.2",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/8/86/Warp_core_maintenance.jpg/revision/latest/scale-to-width/292?cb=20141217041312&path-prefix=en",
                "name": "Warp_core_maintenance.jpg"
            },
            "title": "Force of Nature"
        },
        {
            "airdate": "1993-11-22",
            "episode": "10",
            "href": "http://en.memory-alpha.org/wiki/Inheritance_%28episode%29",
            "number": "7x10",
            "prodno": "40277-262",
            "season": "7",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "47410.2",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/c/c6/Juliana_Tainer.jpg/revision/latest/scale-to-width/292?cb=20141225182139&path-prefix=en",
                "name": "Juliana_Tainer.jpg"
            },
            "title": "Inheritance"
        },
        {
            "airdate": "1993-11-27",
            "episode": "11",
            "href": "http://en.memory-alpha.org/wiki/Parallels_%28episode%29",
            "number": "7x11",
            "prodno": "40277-263",
            "season": "7",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "47391.2",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/6/6d/Multiple_Worfs.jpg/revision/latest/scale-to-width/292?cb=20141225201757&path-prefix=en",
                "name": "Multiple_Worfs.jpg"
            },
            "title": "Parallels"
        },
        {
            "airdate": "1994-01-10",
            "episode": "12",
            "href": "http://en.memory-alpha.org/wiki/The_Pegasus_%28episode%29",
            "number": "7x12",
            "prodno": "40277-264",
            "season": "7",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "47457.1",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/6/64/Pressman_and_Riker.jpg/revision/latest/scale-to-width/292?cb=20150101042055&path-prefix=en",
                "name": "Pressman_and_Riker.jpg"
            },
            "title": "The Pegasus"
        },
        {
            "airdate": "1994-01-15",
            "episode": "13",
            "href": "http://en.memory-alpha.org/wiki/Homeward_%28episode%29",
            "number": "7x13",
            "prodno": "40277-265",
            "season": "7",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "47423.9",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/1/13/Worf_in_sickbay%2C_2370.jpg/revision/latest/scale-to-width/292?cb=20120911065248&path-prefix=en",
                "name": "Worf_in_sickbay_2370.jpg"
            },
            "title": "Homeward"
        },
        {
            "airdate": "1994-01-31",
            "episode": "14",
            "href": "http://en.memory-alpha.org/wiki/Sub_Rosa_%28episode%29",
            "number": "7x14",
            "prodno": "40277-266",
            "season": "7",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/f/f6/Ronin.jpg/revision/latest/scale-to-width/292?cb=20120911104000&path-prefix=en",
                "name": "Ronin.jpg"
            },
            "title": "Sub Rosa"
        },
        {
            "airdate": "1994-02-07",
            "episode": "15",
            "href": "http://en.memory-alpha.org/wiki/Lower_Decks_%28episode%29",
            "number": "7x15",
            "prodno": "40277-267",
            "season": "7",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "47566.7",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/d/df/Sito_jaxa.jpg/revision/latest/scale-to-width/292?cb=20141207024353&path-prefix=en",
                "name": "Sito_jaxa.jpg"
            },
            "title": "Lower Decks"
        },
        {
            "airdate": "1994-02-14",
            "episode": "16",
            "href": "http://en.memory-alpha.org/wiki/Thine_Own_Self_%28episode%29",
            "number": "7x16",
            "prodno": "40277-268",
            "season": "7",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "47611.2",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/c/c4/Data_injured.jpg/revision/latest/scale-to-width/292?cb=20120912094944&path-prefix=en",
                "name": "Data_injured.jpg"
            },
            "title": "Thine Own Self"
        },
        {
            "airdate": "1994-02-19",
            "episode": "17",
            "href": "http://en.memory-alpha.org/wiki/Masks_%28episode%29",
            "number": "7x17",
            "prodno": "40277-269",
            "season": "7",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "47615.2",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/1/11/Masaka.jpg/revision/latest/scale-to-width/292?cb=20120913104908&path-prefix=en",
                "name": "Masaka.jpg"
            },
            "title": "Masks"
        },
        {
            "airdate": "1994-02-26",
            "episode": "18",
            "href": "http://en.memory-alpha.org/wiki/Eye_of_the_Beholder_%28episode%29",
            "number": "7x18",
            "prodno": "40277-270",
            "season": "7",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "47622.1",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/6/60/Plasma_stream.jpg/revision/latest/scale-to-width/292?cb=20120914120028&path-prefix=en",
                "name": "Plasma_stream.jpg"
            },
            "title": "Eye of the Beholder"
        },
        {
            "airdate": "1994-03-19",
            "episode": "19",
            "href": "http://en.memory-alpha.org/wiki/Genesis_%28episode%29",
            "number": "7x19",
            "prodno": "40277-271",
            "season": "7",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "47653.2",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/1/1f/Reginald_Barclay_devolved.jpg/revision/latest/scale-to-width/292?cb=20120915081524&path-prefix=en",
                "name": "Reginald_Barclay_devolved.jpg"
            },
            "title": "Genesis"
        },
        {
            "airdate": "1994-03-26",
            "episode": "20",
            "href": "http://en.memory-alpha.org/wiki/Journey%27s_End_%28episode%29",
            "number": "7x20",
            "prodno": "40277-272",
            "season": "7",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "47751.2",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/7/75/Anthwara.jpg/revision/latest/scale-to-width/292?cb=20120915140408&path-prefix=en",
                "name": "Anthwara.jpg"
            },
            "title": "Journey's End"
        },
        {
            "airdate": "1994-04-23",
            "episode": "21",
            "href": "http://en.memory-alpha.org/wiki/Firstborn_%28episode%29",
            "number": "7x21",
            "prodno": "40277-273",
            "season": "7",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "47779.4",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/7/79/Alexander_at_the_kot%27baval_festival.jpg/revision/latest/scale-to-width/292?cb=20120916160330&path-prefix=en",
                "name": "Alexander_at_the_kotbaval_festival.jpg"
            },
            "title": "Firstborn"
        },
        {
            "airdate": "1994-04-30",
            "episode": "22",
            "href": "http://en.memory-alpha.org/wiki/Bloodlines_%28episode%29",
            "number": "7x22",
            "prodno": "40277-274",
            "season": "7",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "47829.1",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/4/4d/Jason_Vigo.jpg/revision/latest/scale-to-width/292?cb=20120917123423&path-prefix=en",
                "name": "Jason_Vigo.jpg"
            },
            "title": "Bloodlines"
        },
        {
            "airdate": "1994-05-07",
            "episode": "23",
            "href": "http://en.memory-alpha.org/wiki/Emergence_%28episode%29",
            "number": "7x23",
            "prodno": "40277-275",
            "season": "7",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "47869.2",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/f/fa/Emergence_circuit_node.jpg/revision/latest/scale-to-width/292?cb=20120918130336&path-prefix=en",
                "name": "Emergence_circuit_node.jpg"
            },
            "title": "Emergence"
        },
        {
            "airdate": "1994-05-14",
            "episode": "24",
            "href": "http://en.memory-alpha.org/wiki/Preemptive_Strike_%28episode%29",
            "number": "7x24",
            "prodno": "40277-276",
            "season": "7",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "47941.7",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/7/72/Maquis_attack_the_Vetar.jpg/revision/latest/scale-to-width/292?cb=20120919121201&path-prefix=en",
                "name": "Maquis_attack_the_Vetar.jpg"
            },
            "title": "Preemptive Strike"
        },
        {
            "airdate": "1994-05-23",
            "episode": "25/26",
            "href": "http://en.memory-alpha.org/wiki/All_Good_Things..._%28episode%29",
            "number": "7x25/26",
            "prodno": "40277-747",
            "season": "7",
            "series": "tng",
            "seriesPretty": "The Next Generation",
            "stardate": "47988.0",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/4/4a/Senior_staff_poker_game.jpg/revision/latest/scale-to-width/292?cb=20120921094148&path-prefix=en",
                "name": "Senior_staff_poker_game.jpg"
            },
            "title": "All Good Things..."
        }
    ],
    "voyager": [
        {
            "airdate": "1995-01-16",
            "episode": "01/02",
            "href": "http://en.memory-alpha.org/wiki/Caretaker_%28episode%29",
            "number": "1x01/02",
            "prodno": "101 (721)",
            "season": "1",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "48315.6",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/2/26/USS_Voyager_departing_Deep_Space_9.jpg/revision/latest/scale-to-width/292?cb=20090527023235&path-prefix=en",
                "name": "USS_Voyager_departing_Deep_Space_9.jpg"
            },
            "title": "Caretaker"
        },
        {
            "airdate": "1995-01-23",
            "episode": "03",
            "href": "http://en.memory-alpha.org/wiki/Parallax_%28episode%29",
            "number": "1x03",
            "prodno": "103",
            "season": "1",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "48439.7",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/d/de/Voyager_at_event_horizon.jpg/revision/latest/scale-to-width/292?cb=20050809035735&path-prefix=en",
                "name": "Voyager_at_event_horizon.jpg"
            },
            "title": "Parallax"
        },
        {
            "airdate": "1995-01-30",
            "episode": "04",
            "href": "http://en.memory-alpha.org/wiki/Time_and_Again_%28episode%29",
            "number": "1x04",
            "prodno": "104",
            "season": "1",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/0/01/Janeway_Time_and_Again.jpg/revision/latest/scale-to-width/292?cb=20060107195653&path-prefix=en",
                "name": "Janeway_Time_and_Again.jpg"
            },
            "title": "Time and Again"
        },
        {
            "airdate": "1995-02-06",
            "episode": "05",
            "href": "http://en.memory-alpha.org/wiki/Phage_%28episode%29",
            "number": "1x05",
            "prodno": "105",
            "season": "1",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "48532.4",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/5/5b/Neelix_isotropic_restraint.jpg/revision/latest/scale-to-width/292?cb=20070525193620&path-prefix=en",
                "name": "Neelix_isotropic_restraint.jpg"
            },
            "title": "Phage"
        },
        {
            "airdate": "1995-02-13",
            "episode": "06",
            "href": "http://en.memory-alpha.org/wiki/The_Cloud_%28episode%29",
            "number": "1x06",
            "prodno": "106",
            "season": "1",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "48546.2",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/6/67/Even_better_than_coffee_substitute_Neelix_invention.jpg/revision/latest/scale-to-width/292?cb=20070611075417&path-prefix=en",
                "name": "Even_better_than_coffee_substitute_Neelix_invention.jpg"
            },
            "title": "The Cloud"
        },
        {
            "airdate": "1995-02-20",
            "episode": "07",
            "href": "http://en.memory-alpha.org/wiki/Eye_of_the_Needle_%28episode%29",
            "number": "1x07",
            "prodno": "107",
            "season": "1",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "48579.4",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/f/fa/Telek_R%27Mor.jpg/revision/latest/scale-to-width/292?cb=20080505040915&path-prefix=en",
                "name": "Telek_RMor.jpg"
            },
            "title": "Eye of the Needle"
        },
        {
            "airdate": "1995-02-27",
            "episode": "08",
            "href": "http://en.memory-alpha.org/wiki/Ex_Post_Facto_%28episode%29",
            "number": "1x08",
            "prodno": "108",
            "season": "1",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/d/d6/LidellTomArboretum.jpg/revision/latest/scale-to-width/292?cb=20071103184132&path-prefix=en",
                "name": "LidellTomArboretum.jpg"
            },
            "title": "Ex Post Facto"
        },
        {
            "airdate": "1995-03-13",
            "episode": "09",
            "href": "http://en.memory-alpha.org/wiki/Emanations_%28episode%29",
            "number": "1x09",
            "prodno": "109",
            "season": "1",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "48623.5",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/4/4d/Chakotay_in_Vhnori_grave.jpg/revision/latest/scale-to-width/292?cb=20070108225049&path-prefix=en",
                "name": "Chakotay_in_Vhnori_grave.jpg"
            },
            "title": "Emanations"
        },
        {
            "airdate": "1995-03-20",
            "episode": "10",
            "href": "http://en.memory-alpha.org/wiki/Prime_Factors_%28episode%29",
            "number": "1x10",
            "prodno": "110",
            "season": "1",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "48642.5",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/0/00/Alastria_surface.jpg/revision/latest/scale-to-width/292?cb=20100213125450&path-prefix=en",
                "name": "Alastria_surface.jpg"
            },
            "title": "Prime Factors"
        },
        {
            "airdate": "1995-04-10",
            "episode": "11",
            "href": "http://en.memory-alpha.org/wiki/State_of_Flux_%28episode%29",
            "number": "1x11",
            "prodno": "111",
            "season": "1",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "48658.2",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/f/f2/Culluh.jpg/revision/latest/scale-to-width/292?cb=20081026043116&path-prefix=en",
                "name": "Culluh.jpg"
            },
            "title": "State of Flux"
        },
        {
            "airdate": "1995-04-24",
            "episode": "12",
            "href": "http://en.memory-alpha.org/wiki/Heroes_and_Demons_%28episode%29",
            "number": "1x12",
            "prodno": "112",
            "season": "1",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "48693.2",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/d/de/Sword.jpg/revision/latest/scale-to-width/292?cb=20080921160148&path-prefix=en",
                "name": "Sword.jpg"
            },
            "title": "Heroes and Demons"
        },
        {
            "airdate": "1995-05-01",
            "episode": "13",
            "href": "http://en.memory-alpha.org/wiki/Cathexis_%28episode%29",
            "number": "1x13",
            "prodno": "113",
            "season": "1",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "48734.2",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/1/19/Neelix_medicine_wheel_cathexis.jpg/revision/latest/scale-to-width/292?cb=20100213132946&path-prefix=en",
                "name": "Neelix_medicine_wheel_cathexis.jpg"
            },
            "title": "Cathexis"
        },
        {
            "airdate": "1995-05-08",
            "episode": "14",
            "href": "http://en.memory-alpha.org/wiki/Faces_%28episode%29",
            "number": "1x14",
            "prodno": "114",
            "season": "1",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "48784.2",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/3/3c/Belanna_human-klingon%2C_faces.jpg/revision/latest/scale-to-width/292?cb=20080612002034&path-prefix=en",
                "name": "Belanna_human-klingon_faces.jpg"
            },
            "title": "Faces"
        },
        {
            "airdate": "1995-05-15",
            "episode": "15",
            "href": "http://en.memory-alpha.org/wiki/Jetrel_%28episode%29",
            "number": "1x15",
            "prodno": "115",
            "season": "1",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "48832.1",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/8/82/Ma%27Bor_Jetrel_and_Neelix.jpg/revision/latest/scale-to-width/292?cb=20071010224041&path-prefix=en",
                "name": "MaBor_Jetrel_and_Neelix.jpg"
            },
            "title": "Jetrel"
        },
        {
            "airdate": "1995-05-22",
            "episode": "16",
            "href": "http://en.memory-alpha.org/wiki/Learning_Curve_%28episode%29",
            "number": "1x16",
            "prodno": "116",
            "season": "1",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "48846.5",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/7/70/Chell_explains_Kazleti_design.jpg/revision/latest/scale-to-width/292?cb=20080329162014&path-prefix=en",
                "name": "Chell_explains_Kazleti_design.jpg"
            },
            "title": "Learning Curve"
        },
        {
            "airdate": "1995-08-28",
            "episode": "01",
            "href": "http://en.memory-alpha.org/wiki/The_37%27s_%28episode%29",
            "number": "2x01",
            "prodno": "120",
            "season": "2",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "48975.1",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/1/18/Earhart_and_Janeway.jpg/revision/latest/scale-to-width/292?cb=20070611050450&path-prefix=en",
                "name": "Earhart_and_Janeway.jpg"
            },
            "title": "The 37's"
        },
        {
            "airdate": "1995-09-04",
            "episode": "02",
            "href": "http://en.memory-alpha.org/wiki/Initiations_%28episode%29",
            "number": "2x02",
            "prodno": "121",
            "season": "2",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "49005.3",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/7/76/Kar.jpg/revision/latest/scale-to-width/292?cb=20050902181851&path-prefix=en",
                "name": "Kar.jpg"
            },
            "title": "Initiations"
        },
        {
            "airdate": "1995-09-11",
            "episode": "03",
            "href": "http://en.memory-alpha.org/wiki/Projections_%28episode%29",
            "number": "2x03",
            "prodno": "117",
            "season": "2",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "48892.1",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/0/06/Barclay_3.jpg/revision/latest/scale-to-width/292?cb=20070303023921&path-prefix=en",
                "name": "Barclay_3.jpg"
            },
            "title": "Projections"
        },
        {
            "airdate": "1995-09-18",
            "episode": "04",
            "href": "http://en.memory-alpha.org/wiki/Elogium_%28episode%29",
            "number": "2x04",
            "prodno": "118",
            "season": "2",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "48921.3",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/1/16/Ipasaphor.jpg/revision/latest/scale-to-width/292?cb=20121022145248&path-prefix=en",
                "name": "Ipasaphor.jpg"
            },
            "title": "Elogium"
        },
        {
            "airdate": "1995-09-25",
            "episode": "05",
            "href": "http://en.memory-alpha.org/wiki/Non_Sequitur_%28episode%29",
            "number": "2x05",
            "prodno": "122",
            "season": "2",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "49011.0",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/0/0f/LibbyWatchesHarrySleep.jpg/revision/latest/scale-to-width/292?cb=20071008013817&path-prefix=en",
                "name": "LibbyWatchesHarrySleep.jpg"
            },
            "title": "Non Sequitur"
        },
        {
            "airdate": "1995-10-02",
            "episode": "06",
            "href": "http://en.memory-alpha.org/wiki/Twisted_%28episode%29",
            "number": "2x06",
            "prodno": "119",
            "season": "2",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/c/c1/Sandrines_twisted.jpg/revision/latest/scale-to-width/292?cb=20060108071216&path-prefix=en",
                "name": "Sandrines_twisted.jpg"
            },
            "title": "Twisted"
        },
        {
            "airdate": "1995-10-09",
            "episode": "07",
            "href": "http://en.memory-alpha.org/wiki/Parturition_%28episode%29",
            "number": "2x07",
            "prodno": "123",
            "season": "2",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "49068.5",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/2/25/Paris_and_hair_pasta.jpg/revision/latest/scale-to-width/292?cb=20100124100658&path-prefix=en",
                "name": "Paris_and_hair_pasta.jpg"
            },
            "title": "Parturition"
        },
        {
            "airdate": "1995-10-30",
            "episode": "08",
            "href": "http://en.memory-alpha.org/wiki/Persistence_of_Vision_%28episode%29",
            "number": "2x08",
            "prodno": "124",
            "season": "2",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/2/26/Little_Doctor.jpg/revision/latest/scale-to-width/292?cb=20051202160942&path-prefix=en",
                "name": "Little_Doctor.jpg"
            },
            "title": "Persistence of Vision"
        },
        {
            "airdate": "1995-11-06",
            "episode": "09",
            "href": "http://en.memory-alpha.org/wiki/Tattoo_%28episode%29",
            "number": "2x09",
            "prodno": "125",
            "season": "2",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/b/bb/Chahmoozee.jpg/revision/latest/scale-to-width/292?cb=20070605035403&path-prefix=en",
                "name": "Chahmoozee.jpg"
            },
            "title": "Tattoo"
        },
        {
            "airdate": "1995-11-13",
            "episode": "10",
            "href": "http://en.memory-alpha.org/wiki/Cold_Fire_%28episode%29",
            "number": "2x10",
            "prodno": "126",
            "season": "2",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "49164.8",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/3/32/Tuvok%27s_blood_boiling.jpg/revision/latest/scale-to-width/292?cb=20070516170625&path-prefix=en",
                "name": "Tuvoks_blood_boiling.jpg"
            },
            "title": "Cold Fire"
        },
        {
            "airdate": "1995-11-20",
            "episode": "11",
            "href": "http://en.memory-alpha.org/wiki/Maneuvers_%28episode%29",
            "number": "2x11",
            "prodno": "127",
            "season": "2",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "49208.5",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/f/fb/ChakotayUnderSeskaInterrogation.jpg/revision/latest/scale-to-width/292?cb=20100123114229&path-prefix=en",
                "name": "ChakotayUnderSeskaInterrogation.jpg"
            },
            "title": "Maneuvers"
        },
        {
            "airdate": "1995-11-27",
            "episode": "12",
            "href": "http://en.memory-alpha.org/wiki/Resistance_%28episode%29",
            "number": "2x12",
            "prodno": "128",
            "season": "2",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/2/23/Caylem.jpg/revision/latest/scale-to-width/292?cb=20060124003421&path-prefix=en",
                "name": "Caylem.jpg"
            },
            "title": "Resistance"
        },
        {
            "airdate": "1996-01-15",
            "episode": "13",
            "href": "http://en.memory-alpha.org/wiki/Prototype_%28episode%29",
            "number": "2x13",
            "prodno": "129",
            "season": "2",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/7/75/Pralor_3947_eng.jpg/revision/latest/scale-to-width/292?cb=20050827203901&path-prefix=en",
                "name": "Pralor_3947_eng.jpg"
            },
            "title": "Prototype"
        },
        {
            "airdate": "1996-01-22",
            "episode": "14",
            "href": "http://en.memory-alpha.org/wiki/Alliances_%28episode%29",
            "number": "2x14",
            "prodno": "131",
            "season": "2",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "49337.4",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/7/76/MabusJanewayKazons.jpg/revision/latest/scale-to-width/292?cb=20100123114758&path-prefix=en",
                "name": "MabusJanewayKazons.jpg"
            },
            "title": "Alliances"
        },
        {
            "airdate": "1996-01-29",
            "episode": "15",
            "href": "http://en.memory-alpha.org/wiki/Threshold_%28episode%29",
            "number": "2x15",
            "prodno": "132",
            "season": "2",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "49373.4",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/3/33/Transwarp_humans.jpg/revision/latest/scale-to-width/292?cb=20061210190440&path-prefix=en",
                "name": "Transwarp_humans.jpg"
            },
            "title": "Threshold"
        },
        {
            "airdate": "1996-02-05",
            "episode": "16",
            "href": "http://en.memory-alpha.org/wiki/Meld_%28episode%29",
            "number": "2x16",
            "prodno": "133",
            "season": "2",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/d/df/LonSuder.jpg/revision/latest/scale-to-width/292?cb=20080712162956&path-prefix=en",
                "name": "LonSuder.jpg"
            },
            "title": "Meld"
        },
        {
            "airdate": "1996-02-12",
            "episode": "17",
            "href": "http://en.memory-alpha.org/wiki/Dreadnought_%28episode%29",
            "number": "2x17",
            "prodno": "134",
            "season": "2",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "49447.0",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/d/da/Dreadnought_at_warp.jpg/revision/latest/scale-to-width/292?cb=20040907120445&path-prefix=en",
                "name": "Dreadnought_at_warp.jpg"
            },
            "title": "Dreadnought"
        },
        {
            "airdate": "1996-02-19",
            "episode": "18",
            "href": "http://en.memory-alpha.org/wiki/Death_Wish_%28episode%29",
            "number": "2x18",
            "prodno": "130",
            "season": "2",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "49301.2",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/a/a5/Quinn.jpg/revision/latest?cb=20050123132828&path-prefix=en",
                "name": "Quinn.jpg"
            },
            "title": "Death Wish"
        },
        {
            "airdate": "1996-02-26",
            "episode": "19",
            "href": "http://en.memory-alpha.org/wiki/Lifesigns_%28episode%29",
            "number": "2x19",
            "prodno": "136",
            "season": "2",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "49504.3",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/d/da/Vidiian_skeletal_system.jpg/revision/latest/scale-to-width/292?cb=20060122050449&path-prefix=en",
                "name": "Vidiian_skeletal_system.jpg"
            },
            "title": "Lifesigns"
        },
        {
            "airdate": "1996-03-13",
            "episode": "20",
            "href": "http://en.memory-alpha.org/wiki/Investigations_%28episode%29",
            "number": "2x20",
            "prodno": "135",
            "season": "2",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "49485.2",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/6/60/A_briefing_with_neelix.jpg/revision/latest/scale-to-width/292?cb=20050709182549&path-prefix=en",
                "name": "A_briefing_with_neelix.jpg"
            },
            "title": "Investigations"
        },
        {
            "airdate": "1996-03-18",
            "episode": "21",
            "href": "http://en.memory-alpha.org/wiki/Deadlock_%28episode%29",
            "number": "2x21",
            "prodno": "137",
            "season": "2",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "49548.7",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/8/86/Janeway_meets_Janeway.jpg/revision/latest/scale-to-width/292?cb=20070611051204&path-prefix=en",
                "name": "Janeway_meets_Janeway.jpg"
            },
            "title": "Deadlock"
        },
        {
            "airdate": "1996-04-08",
            "episode": "22",
            "href": "http://en.memory-alpha.org/wiki/Innocence_%28episode%29",
            "number": "2x22",
            "prodno": "138",
            "season": "2",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "49578.2",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/3/39/DrayanKids.jpg/revision/latest/scale-to-width/292?cb=20071012045512&path-prefix=en",
                "name": "DrayanKids.jpg"
            },
            "title": "Innocence"
        },
        {
            "airdate": "1996-04-29",
            "episode": "23",
            "href": "http://en.memory-alpha.org/wiki/The_Thaw_%28episode%29",
            "number": "2x23",
            "prodno": "139",
            "season": "2",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/2/27/The_Clown_and_company.jpg/revision/latest/scale-to-width/292?cb=20050827054226&path-prefix=en",
                "name": "The_Clown_and_company.jpg"
            },
            "title": "The Thaw"
        },
        {
            "airdate": "1996-05-06",
            "episode": "24",
            "href": "http://en.memory-alpha.org/wiki/Tuvix_%28episode%29",
            "number": "2x24",
            "prodno": "140",
            "season": "2",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "49655.2",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/a/a6/Tuvix.jpg/revision/latest/scale-to-width/292?cb=20060802000854&path-prefix=en",
                "name": "Tuvix.jpg"
            },
            "title": "Tuvix"
        },
        {
            "airdate": "1996-05-13",
            "episode": "25",
            "href": "http://en.memory-alpha.org/wiki/Resolutions_%28episode%29",
            "number": "2x25",
            "prodno": "141",
            "season": "2",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "49690.1",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/6/6d/Stasis_units%2C_Resolutions.jpg/revision/latest/scale-to-width/292?cb=20070201222042&path-prefix=en",
                "name": "Stasis_units_Resolutions.jpg"
            },
            "title": "Resolutions"
        },
        {
            "airdate": "1996-05-20",
            "episode": "26",
            "href": "http://en.memory-alpha.org/wiki/Basics,_Part_I_%28episode%29",
            "number": "2x26",
            "prodno": "142",
            "season": "2",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/d/d3/Voyager_landing.jpg/revision/latest/scale-to-width/292?cb=20051124195539&path-prefix=en",
                "name": "Voyager_landing.jpg"
            },
            "title": "Basics, Part I"
        },
        {
            "airdate": "1996-09-04",
            "episode": "01",
            "href": "http://en.memory-alpha.org/wiki/Basics,_Part_II_%28episode%29",
            "number": "3x01",
            "prodno": "146",
            "season": "3",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "50032.7",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/2/23/HanonIV_surface.jpg/revision/latest/scale-to-width/292?cb=20080813121806&path-prefix=en",
                "name": "HanonIV_surface.jpg"
            },
            "title": "Basics, Part II"
        },
        {
            "airdate": "1996-09-11",
            "episode": "02",
            "href": "http://en.memory-alpha.org/wiki/Flashback_%28episode%29",
            "number": "3x02",
            "prodno": "145",
            "season": "3",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "50126.4",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/0/09/SuluJaneway.jpg/revision/latest/scale-to-width/292?cb=20071103190227&path-prefix=en",
                "name": "SuluJaneway.jpg"
            },
            "title": "Flashback"
        },
        {
            "airdate": "1996-09-18",
            "episode": "03",
            "href": "http://en.memory-alpha.org/wiki/The_Chute_%28episode%29",
            "number": "3x03",
            "prodno": "147",
            "season": "3",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "50156.2",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/e/e8/Harry_and_Tom_in_Prison.jpg/revision/latest/scale-to-width/292?cb=20071025212721&path-prefix=en",
                "name": "Harry_and_Tom_in_Prison.jpg"
            },
            "title": "The Chute"
        },
        {
            "airdate": "1996-09-25",
            "episode": "04",
            "href": "http://en.memory-alpha.org/wiki/The_Swarm_%28episode%29",
            "number": "3x04",
            "prodno": "149",
            "season": "3",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "50252.3",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/e/e3/EMHDiagnosticProgram.jpg/revision/latest/scale-to-width/292?cb=20081019030942&path-prefix=en",
                "name": "EMHDiagnosticProgram.jpg"
            },
            "title": "The Swarm"
        },
        {
            "airdate": "1996-10-02",
            "episode": "05",
            "href": "http://en.memory-alpha.org/wiki/False_Profits_%28episode%29",
            "number": "3x05",
            "prodno": "144",
            "season": "3",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "50074.3",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/1/1e/Barzan_Wormhole_in_the_Delta_Quadrant.jpg/revision/latest/scale-to-width/292?cb=20050123102808&path-prefix=en",
                "name": "Barzan_Wormhole_in_the_Delta_Quadrant.jpg"
            },
            "title": "False Profits"
        },
        {
            "airdate": "1996-10-09",
            "episode": "06",
            "href": "http://en.memory-alpha.org/wiki/Remember_%28episode%29",
            "number": "3x06",
            "prodno": "148",
            "season": "3",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "50203.1",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/f/fd/Dathan_Alaris.jpg/revision/latest/scale-to-width/292?cb=20100119201940&path-prefix=en",
                "name": "Dathan_Alaris.jpg"
            },
            "title": "Remember"
        },
        {
            "airdate": "1996-10-30",
            "episode": "07",
            "href": "http://en.memory-alpha.org/wiki/Sacred_Ground_%28episode%29",
            "number": "3x07",
            "prodno": "143",
            "season": "3",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "50063.2",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/f/ff/Janeway_%26_kes_sacred_ground.jpg/revision/latest/scale-to-width/292?cb=20080813124224&path-prefix=en",
                "name": "Janeway__kes_sacred_ground.jpg"
            },
            "title": "Sacred Ground"
        },
        {
            "airdate": "1996-11-06",
            "episode": "08",
            "href": "http://en.memory-alpha.org/wiki/Future%27s_End_%28episode%29",
            "number": "3x08",
            "prodno": "150",
            "season": "3",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "50312.5",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/3/3b/Voyager_over_los_angeles.jpg/revision/latest/scale-to-width/292?cb=20060714083725&path-prefix=en",
                "name": "Voyager_over_los_angeles.jpg"
            },
            "title": "Future's End"
        },
        {
            "airdate": "1996-11-13",
            "episode": "09",
            "href": "http://en.memory-alpha.org/wiki/Future%27s_End,_Part_II_%28episode%29",
            "number": "3x09",
            "prodno": "151",
            "season": "3",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "50312.5",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/3/32/Chronowerx_building.jpg/revision/latest/scale-to-width/292?cb=20100806201531&path-prefix=en",
                "name": "Chronowerx_building.jpg"
            },
            "title": "Future's End, Part II"
        },
        {
            "airdate": "1996-11-20",
            "episode": "10",
            "href": "http://en.memory-alpha.org/wiki/Warlord_%28episode%29",
            "number": "3x10",
            "prodno": "152",
            "season": "3",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "50348.1",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/3/3e/Kes-Tieran.jpg/revision/latest/scale-to-width/292?cb=20071102013811&path-prefix=en",
                "name": "Kes-Tieran.jpg"
            },
            "title": "Warlord"
        },
        {
            "airdate": "1996-11-27",
            "episode": "11",
            "href": "http://en.memory-alpha.org/wiki/The_Q_and_the_Grey_%28episode%29",
            "number": "3x11",
            "prodno": "153",
            "season": "3",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "50384.2",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/6/69/Q_and_Q_mate.jpg/revision/latest/scale-to-width/292?cb=20050807065346&path-prefix=en",
                "name": "Q_and_Q_mate.jpg"
            },
            "title": "The Q and the Grey"
        },
        {
            "airdate": "1996-12-11",
            "episode": "12",
            "href": "http://en.memory-alpha.org/wiki/Macrocosm_%28episode%29",
            "number": "3x12",
            "prodno": "154",
            "season": "3",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "50425.1",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/f/f2/Gel_pack_in_messhall.jpg/revision/latest/scale-to-width/292?cb=20050813043800&path-prefix=en",
                "name": "Gel_pack_in_messhall.jpg"
            },
            "title": "Macrocosm"
        },
        {
            "airdate": "1997-01-08",
            "episode": "13",
            "href": "http://en.memory-alpha.org/wiki/Fair_Trade_%28episode%29",
            "number": "3x13",
            "prodno": "156",
            "season": "3",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/4/4b/Wixiban.jpg/revision/latest/scale-to-width/292?cb=20060119202503&path-prefix=en",
                "name": "Wixiban.jpg"
            },
            "title": "Fair Trade"
        },
        {
            "airdate": "1997-01-15",
            "episode": "14",
            "href": "http://en.memory-alpha.org/wiki/Alter_Ego_%28episode%29",
            "number": "3x14",
            "prodno": "155",
            "season": "3",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "50460.3",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/1/12/Marayna.jpg/revision/latest/scale-to-width/292?cb=20060114013022&path-prefix=en",
                "name": "Marayna.jpg"
            },
            "title": "Alter Ego"
        },
        {
            "airdate": "1997-01-29",
            "episode": "15",
            "href": "http://en.memory-alpha.org/wiki/Coda_%28episode%29",
            "number": "3x15",
            "prodno": "158",
            "season": "3",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "50518.6",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/5/5a/Janeway_%28Male_Admiral%29.jpg/revision/latest/scale-to-width/292?cb=20081109025430&path-prefix=en",
                "name": "Janeway_Male_Admiral.jpg"
            },
            "title": "Coda"
        },
        {
            "airdate": "1997-02-05",
            "episode": "16",
            "href": "http://en.memory-alpha.org/wiki/Blood_Fever_%28episode%29",
            "number": "3x16",
            "prodno": "157",
            "season": "3",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "50537.2",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/e/e1/Vorik-blood-fever.jpg/revision/latest/scale-to-width/292?cb=20100328085411&path-prefix=en",
                "name": "Vorik-blood-fever.jpg"
            },
            "title": "Blood Fever"
        },
        {
            "airdate": "1997-02-12",
            "episode": "17",
            "href": "http://en.memory-alpha.org/wiki/Unity_%28episode%29",
            "number": "3x17",
            "prodno": "159",
            "season": "3",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "50614.2",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/7/7f/Borg_corpse.jpg/revision/latest/scale-to-width/292?cb=20051008171057&path-prefix=en",
                "name": "Borg_corpse.jpg"
            },
            "title": "Unity"
        },
        {
            "airdate": "1997-02-19",
            "episode": "18",
            "href": "http://en.memory-alpha.org/wiki/Darkling_%28episode%29",
            "number": "3x18",
            "prodno": "161",
            "season": "3",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "50693.2",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/8/8c/Mikhal_Traveler_outpost.jpg/revision/latest/scale-to-width/292?cb=20070516132519&path-prefix=en",
                "name": "Mikhal_Traveler_outpost.jpg"
            },
            "title": "Darkling"
        },
        {
            "airdate": "1997-02-26",
            "episode": "19",
            "href": "http://en.memory-alpha.org/wiki/Rise_%28episode%29",
            "number": "3x19",
            "prodno": "160",
            "season": "3",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/a/a4/Mag-lev_carriage.jpg/revision/latest/scale-to-width/292?cb=20070516142848&path-prefix=en",
                "name": "Mag-lev_carriage.jpg"
            },
            "title": "Rise"
        },
        {
            "airdate": "1997-03-19",
            "episode": "20",
            "href": "http://en.memory-alpha.org/wiki/Favorite_Son_%28episode%29",
            "number": "3x20",
            "prodno": "162",
            "season": "3",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "50732.4",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/c/cf/Taymon_Dead.jpg/revision/latest/scale-to-width/292?cb=20080514075805&path-prefix=en",
                "name": "Taymon_Dead.jpg"
            },
            "title": "Favorite Son"
        },
        {
            "airdate": "1997-04-09",
            "episode": "21",
            "href": "http://en.memory-alpha.org/wiki/Before_and_After_%28episode%29",
            "number": "3x21",
            "prodno": "163",
            "season": "3",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/5/57/Birth_of_Linnis.jpg/revision/latest/scale-to-width/292?cb=20071031125642&path-prefix=en",
                "name": "Birth_of_Linnis.jpg"
            },
            "title": "Before and After"
        },
        {
            "airdate": "1997-04-23",
            "episode": "22",
            "href": "http://en.memory-alpha.org/wiki/Real_Life_%28episode%29",
            "number": "3x22",
            "prodno": "164",
            "season": "3",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "50836.2",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/f/fe/Jeffrey_in_Klingon_attire.jpg/revision/latest/scale-to-width/292?cb=20050914044336&path-prefix=en",
                "name": "Jeffrey_in_Klingon_attire.jpg"
            },
            "title": "Real Life"
        },
        {
            "airdate": "1997-04-30",
            "episode": "23",
            "href": "http://en.memory-alpha.org/wiki/Distant_Origin_%28episode%29",
            "number": "3x23",
            "prodno": "165",
            "season": "3",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/e/e9/Forra_Gegen_examines_globe_of_Earth.jpg/revision/latest/scale-to-width/292?cb=20080601202402&path-prefix=en",
                "name": "Forra_Gegen_examines_globe_of_Earth.jpg"
            },
            "title": "Distant Origin"
        },
        {
            "airdate": "1997-05-07",
            "episode": "24",
            "href": "http://en.memory-alpha.org/wiki/Displaced_%28episode%29",
            "number": "3x24",
            "prodno": "166",
            "season": "3",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "50912.4",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/1/16/Dammar.jpg/revision/latest/scale-to-width/292?cb=20050819044555&path-prefix=en",
                "name": "Dammar.jpg"
            },
            "title": "Displaced"
        },
        {
            "airdate": "1997-05-14",
            "episode": "25",
            "href": "http://en.memory-alpha.org/wiki/Worst_Case_Scenario_%28episode%29",
            "number": "3x25",
            "prodno": "167",
            "season": "3",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "50953.4",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/1/19/Insurrection_alpha_holoprogram.jpg/revision/latest/scale-to-width/292?cb=20080813124854&path-prefix=en",
                "name": "Insurrection_alpha_holoprogram.jpg"
            },
            "title": "Worst Case Scenario"
        },
        {
            "airdate": "1997-05-21",
            "episode": "26",
            "href": "http://en.memory-alpha.org/wiki/Scorpion_%28episode%29",
            "number": "3x26",
            "prodno": "168",
            "season": "3",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "50984.3",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/3/34/Species_8472_close-up.jpg/revision/latest/scale-to-width/292?cb=20061201213357&path-prefix=en",
                "name": "Species_8472_close-up.jpg"
            },
            "title": "Scorpion"
        },
        {
            "airdate": "1997-09-03",
            "episode": "01",
            "href": "http://en.memory-alpha.org/wiki/Scorpion,_Part_II_%28episode%29",
            "number": "4x01",
            "prodno": "169",
            "season": "4",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "51003.7",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/9/98/Borg_8472_battle.jpg/revision/latest/scale-to-width/292?cb=20070317220917&path-prefix=en",
                "name": "Borg_8472_battle.jpg"
            },
            "title": "Scorpion, Part II"
        },
        {
            "airdate": "1997-09-10",
            "episode": "02",
            "href": "http://en.memory-alpha.org/wiki/The_Gift_%28episode%29",
            "number": "4x02",
            "prodno": "170",
            "season": "4",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "51008",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/0/0a/USS_Voyager_experiencing_molecular_decohesion.jpg/revision/latest/scale-to-width/292?cb=20070421214341&path-prefix=en",
                "name": "USS_Voyager_experiencing_molecular_decohesion.jpg"
            },
            "title": "The Gift"
        },
        {
            "airdate": "1997-09-17",
            "episode": "03",
            "href": "http://en.memory-alpha.org/wiki/Day_of_Honor_%28episode%29",
            "number": "4x03",
            "prodno": "172",
            "season": "4",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/e/e5/TorresParisInSpace.jpg/revision/latest/scale-to-width/292?cb=20070704000902&path-prefix=en",
                "name": "TorresParisInSpace.jpg"
            },
            "title": "Day of Honor"
        },
        {
            "airdate": "1997-09-24",
            "episode": "04",
            "href": "http://en.memory-alpha.org/wiki/Nemesis_%28episode%29",
            "number": "4x04",
            "prodno": "171",
            "season": "4",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "51082.4",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/0/02/Kradin.jpg/revision/latest/scale-to-width/292?cb=20070313092026&path-prefix=en",
                "name": "Kradin.jpg"
            },
            "title": "Nemesis"
        },
        {
            "airdate": "1997-10-01",
            "episode": "05",
            "href": "http://en.memory-alpha.org/wiki/Revulsion_%28episode%29",
            "number": "4x05",
            "prodno": "173",
            "season": "4",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "51186.2",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/f/f9/Dejaren_and_the_Doctor.jpg/revision/latest/scale-to-width/292?cb=20090322151438&path-prefix=en",
                "name": "Dejaren_and_the_Doctor.jpg"
            },
            "title": "Revulsion"
        },
        {
            "airdate": "1997-10-08",
            "episode": "06",
            "href": "http://en.memory-alpha.org/wiki/The_Raven_%28episode%29",
            "number": "4x06",
            "prodno": "174",
            "season": "4",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/b/b0/Raven_Plaque.jpg/revision/latest/scale-to-width/292?cb=20080108043244&path-prefix=en",
                "name": "Raven_Plaque.jpg"
            },
            "title": "The Raven"
        },
        {
            "airdate": "1997-10-29",
            "episode": "07",
            "href": "http://en.memory-alpha.org/wiki/Scientific_Method_%28episode%29",
            "number": "4x07",
            "prodno": "175",
            "season": "4",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "51244.3",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/3/33/Genetic-Tag.jpg/revision/latest/scale-to-width/292?cb=20070813023739&path-prefix=en",
                "name": "Genetic-Tag.jpg"
            },
            "title": "Scientific Method"
        },
        {
            "airdate": "1997-11-05",
            "episode": "08",
            "href": "http://en.memory-alpha.org/wiki/Year_of_Hell_%28episode%29",
            "number": "4x08",
            "prodno": "176",
            "season": "4",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "51268.4",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/3/38/Krenim_temporal_weapon_ship_1.jpg/revision/latest/scale-to-width/292?cb=20080209180627&path-prefix=en",
                "name": "Krenim_temporal_weapon_ship_1.jpg"
            },
            "title": "Year of Hell"
        },
        {
            "airdate": "1997-11-12",
            "episode": "09",
            "href": "http://en.memory-alpha.org/wiki/Year_of_Hell,_Part_II_%28episode%29",
            "number": "4x09",
            "prodno": "177",
            "season": "4",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "51425.4",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/3/3b/Yearofhell_Janeway.jpg/revision/latest/scale-to-width/292?cb=20110118015325&path-prefix=en",
                "name": "Yearofhell_Janeway.jpg"
            },
            "title": "Year of Hell, Part II"
        },
        {
            "airdate": "1997-11-19",
            "episode": "10",
            "href": "http://en.memory-alpha.org/wiki/Random_Thoughts_%28episode%29",
            "number": "4x10",
            "prodno": "178",
            "season": "4",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "51367.2",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/8/88/Neurogenic_restructuring.jpg/revision/latest/scale-to-width/292?cb=20061126105625&path-prefix=en",
                "name": "Neurogenic_restructuring.jpg"
            },
            "title": "Random Thoughts"
        },
        {
            "airdate": "1997-11-26",
            "episode": "11",
            "href": "http://en.memory-alpha.org/wiki/Concerning_Flight_%28episode%29",
            "number": "4x11",
            "prodno": "179",
            "season": "4",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "51386.4",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/d/d1/Kate_In_%27Concerning_Flight%27.jpg/revision/latest/scale-to-width/292?cb=20080317131504&path-prefix=en",
                "name": "Kate_In_Concerning_Flight.jpg"
            },
            "title": "Concerning Flight"
        },
        {
            "airdate": "1997-12-17",
            "episode": "12",
            "href": "http://en.memory-alpha.org/wiki/Mortal_Coil_%28episode%29",
            "number": "4x12",
            "prodno": "180",
            "season": "4",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "51449.2",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/2/20/Dead_neelix.jpg/revision/latest/scale-to-width/292?cb=20080812201112&path-prefix=en",
                "name": "Dead_neelix.jpg"
            },
            "title": "Mortal Coil"
        },
        {
            "airdate": "1998-01-14",
            "episode": "13",
            "href": "http://en.memory-alpha.org/wiki/Waking_Moments_%28episode%29",
            "number": "4x13",
            "prodno": "182",
            "season": "4",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "51471.3",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/b/b5/Dream_waking_moments.jpg/revision/latest/scale-to-width/292?cb=20080812201516&path-prefix=en",
                "name": "Dream_waking_moments.jpg"
            },
            "title": "Waking Moments"
        },
        {
            "airdate": "1998-01-21",
            "episode": "14",
            "href": "http://en.memory-alpha.org/wiki/Message_in_a_Bottle_%28episode%29",
            "number": "4x14",
            "prodno": "181",
            "season": "4",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "51462",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/5/5f/Mark2%26Mark1.jpg/revision/latest/scale-to-width/292?cb=20070908181016&path-prefix=en",
                "name": "Mark2Mark1.jpg"
            },
            "title": "Message in a Bottle"
        },
        {
            "airdate": "1998-02-11",
            "episode": "15",
            "href": "http://en.memory-alpha.org/wiki/Hunters_%28episode%29",
            "number": "4x15",
            "prodno": "183",
            "season": "4",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "51501.4",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/7/73/TuvokIdrinBetaHirogen.jpg/revision/latest/scale-to-width/292?cb=20071013103522&path-prefix=en",
                "name": "TuvokIdrinBetaHirogen.jpg"
            },
            "title": "Hunters"
        },
        {
            "airdate": "1998-02-18",
            "episode": "16",
            "href": "http://en.memory-alpha.org/wiki/Prey_%28episode%29",
            "number": "4x16",
            "prodno": "184",
            "season": "4",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "51652.3",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/5/59/Species_8472_on_Voyager_hull.jpg/revision/latest/scale-to-width/292?cb=20080906202627&path-prefix=en",
                "name": "Species_8472_on_Voyager_hull.jpg"
            },
            "title": "Prey"
        },
        {
            "airdate": "1998-02-25",
            "episode": "17",
            "href": "http://en.memory-alpha.org/wiki/Retrospect_%28episode%29",
            "number": "4x17",
            "prodno": "185",
            "season": "4",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "51658.2",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/e/ec/Kovin.jpg/revision/latest/scale-to-width/292?cb=20050906015201&path-prefix=en",
                "name": "Kovin.jpg"
            },
            "title": "Retrospect"
        },
        {
            "airdate": "1998-03-04",
            "episode": "18",
            "href": "http://en.memory-alpha.org/wiki/The_Killing_Game_%28episode%29",
            "number": "4x18",
            "prodno": "186",
            "season": "4",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/a/af/Karr.jpg/revision/latest/scale-to-width/292?cb=20050905094956&path-prefix=en",
                "name": "Karr.jpg"
            },
            "title": "The Killing Game"
        },
        {
            "airdate": "1998-03-04",
            "episode": "19",
            "href": "http://en.memory-alpha.org/wiki/The_Killing_Game,_Part_II_%28episode%29",
            "number": "4x19",
            "prodno": "187",
            "season": "4",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "51715.2",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/b/be/Hirogen_nazi_killing_game_two.jpg/revision/latest/scale-to-width/292?cb=20060107195309&path-prefix=en",
                "name": "Hirogen_nazi_killing_game_two.jpg"
            },
            "title": "The Killing Game, Part II"
        },
        {
            "airdate": "1998-04-08",
            "episode": "20",
            "href": "http://en.memory-alpha.org/wiki/Vis_%C3%A0_Vis_%28episode%29",
            "number": "4x20",
            "prodno": "188",
            "season": "4",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "51762.4",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/e/e0/Daelen_and_Steth.jpg/revision/latest/scale-to-width/292?cb=20060629094144&path-prefix=en",
                "name": "Daelen_and_Steth.jpg"
            },
            "title": "Vis \u00e0 Vis"
        },
        {
            "airdate": "1998-04-15",
            "episode": "21",
            "href": "http://en.memory-alpha.org/wiki/The_Omega_Directive_%28episode%29",
            "number": "4x21",
            "prodno": "189",
            "season": "4",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "51781.2",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/1/17/Omega_Molecule.jpg/revision/latest/scale-to-width/292?cb=20100123212000&path-prefix=en",
                "name": "Omega_Molecule.jpg"
            },
            "title": "The Omega Directive"
        },
        {
            "airdate": "1998-04-22",
            "episode": "22",
            "href": "http://en.memory-alpha.org/wiki/Unforgettable_%28episode%29",
            "number": "4x22",
            "prodno": "190",
            "season": "4",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "51813.4",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/5/59/Chakotay_and_Kellin.jpg/revision/latest/scale-to-width/292?cb=20080812201635&path-prefix=en",
                "name": "Chakotay_and_Kellin.jpg"
            },
            "title": "Unforgettable"
        },
        {
            "airdate": "1998-04-29",
            "episode": "23",
            "href": "http://en.memory-alpha.org/wiki/Living_Witness_%28episode%29",
            "number": "4x23",
            "prodno": "191",
            "season": "4",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/4/45/Evil_Chakotay_Living_Witness.jpg/revision/latest/scale-to-width/292?cb=20070317102238&path-prefix=en",
                "name": "Evil_Chakotay_Living_Witness.jpg"
            },
            "title": "Living Witness"
        },
        {
            "airdate": "1998-05-06",
            "episode": "24",
            "href": "http://en.memory-alpha.org/wiki/Demon_%28episode%29",
            "number": "4x24",
            "prodno": "192",
            "season": "4",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/f/f4/Demon_class_copies.jpg/revision/latest/scale-to-width/292?cb=20080812202303&path-prefix=en",
                "name": "Demon_class_copies.jpg"
            },
            "title": "Demon"
        },
        {
            "airdate": "1998-05-13",
            "episode": "25",
            "href": "http://en.memory-alpha.org/wiki/One_%28episode%29",
            "number": "4x25",
            "prodno": "193",
            "season": "4",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "51929.3",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/8/8f/Lo-Tarik_Taunts_Seven.jpg/revision/latest/scale-to-width/292?cb=20090301170306&path-prefix=en",
                "name": "Lo-Tarik_Taunts_Seven.jpg"
            },
            "title": "One"
        },
        {
            "airdate": "1998-05-20",
            "episode": "26",
            "href": "http://en.memory-alpha.org/wiki/Hope_and_Fear_%28episode%29",
            "number": "4x26",
            "prodno": "194",
            "season": "4",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "51978.2",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/6/62/USS_Dauntless_profile%2C_Hope_and_Fear.jpg/revision/latest/scale-to-width/292?cb=20070117164819&path-prefix=en",
                "name": "USS_Dauntless_profile_Hope_and_Fear.jpg"
            },
            "title": "Hope and Fear"
        },
        {
            "airdate": "1998-10-14",
            "episode": "01",
            "href": "http://en.memory-alpha.org/wiki/Night_%28episode%29",
            "number": "5x01",
            "prodno": "195",
            "season": "5",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "52081.2",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/e/e2/Voyager_in_the_Void.jpg/revision/latest/scale-to-width/292?cb=20101116212852&path-prefix=en",
                "name": "Voyager_in_the_Void.jpg"
            },
            "title": "Night"
        },
        {
            "airdate": "1998-10-21",
            "episode": "02",
            "href": "http://en.memory-alpha.org/wiki/Drone_%28episode%29",
            "number": "5x02",
            "prodno": "196",
            "season": "5",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/7/7a/Borg_Sphere.jpg/revision/latest/scale-to-width/292?cb=20060710071143&path-prefix=en",
                "name": "Borg_Sphere.jpg"
            },
            "title": "Drone"
        },
        {
            "airdate": "1998-10-28",
            "episode": "03",
            "href": "http://en.memory-alpha.org/wiki/Extreme_Risk_%28episode%29",
            "number": "5x03",
            "prodno": "197",
            "season": "5",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/e/e9/Chakotay_argues_with_BElanna.jpg/revision/latest/scale-to-width/292?cb=20060622030718&path-prefix=en",
                "name": "Chakotay_argues_with_BElanna.jpg"
            },
            "title": "Extreme Risk"
        },
        {
            "airdate": "1998-11-04",
            "episode": "04",
            "href": "http://en.memory-alpha.org/wiki/In_the_Flesh_%28episode%29",
            "number": "5x04",
            "prodno": "198",
            "season": "5",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "52136.4",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/c/c7/Starfleet_Academy%2C_In_the_Flesh.jpg/revision/latest/scale-to-width/292?cb=20070109235915&path-prefix=en",
                "name": "Starfleet_Academy_In_the_Flesh.jpg"
            },
            "title": "In the Flesh"
        },
        {
            "airdate": "1998-11-11",
            "episode": "05",
            "href": "http://en.memory-alpha.org/wiki/Once_Upon_a_Time_%28episode%29",
            "number": "5x05",
            "prodno": "199",
            "season": "5",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/b/b0/Forest_of_Forever.jpg/revision/latest/scale-to-width/292?cb=20070930202049&path-prefix=en",
                "name": "Forest_of_Forever.jpg"
            },
            "title": "Once Upon a Time"
        },
        {
            "airdate": "1998-11-18",
            "episode": "06",
            "href": "http://en.memory-alpha.org/wiki/Timeless_%28episode%29",
            "number": "5x06",
            "prodno": "201",
            "season": "5",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "52164.3",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/b/b6/USS_Voyager_buried_under_ice.jpg/revision/latest/scale-to-width/292?cb=20060925112243&path-prefix=en",
                "name": "USS_Voyager_buried_under_ice.jpg"
            },
            "title": "Timeless"
        },
        {
            "airdate": "1998-11-25",
            "episode": "07",
            "href": "http://en.memory-alpha.org/wiki/Infinite_Regress_%28episode%29",
            "number": "5x07",
            "prodno": "203",
            "season": "5",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "52356.2",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/8/86/Seven_and_the_Doctor_look_at_the_Borg_vinculum.jpg/revision/latest/scale-to-width/292?cb=20110125171454&path-prefix=en",
                "name": "Seven_and_the_Doctor_look_at_the_Borg_vinculum.jpg"
            },
            "title": "Infinite Regress"
        },
        {
            "airdate": "1998-12-02",
            "episode": "08",
            "href": "http://en.memory-alpha.org/wiki/Nothing_Human_%28episode%29",
            "number": "5x08",
            "prodno": "200",
            "season": "5",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/b/b4/Cytoplasmic_lifeform.jpg/revision/latest/scale-to-width/292?cb=20051002145713&path-prefix=en",
                "name": "Cytoplasmic_lifeform.jpg"
            },
            "title": "Nothing Human"
        },
        {
            "airdate": "1998-12-09",
            "episode": "09",
            "href": "http://en.memory-alpha.org/wiki/Thirty_Days_%28episode%29",
            "number": "5x09",
            "prodno": "202",
            "season": "5",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "52179.4",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/b/b6/Paris_in_the_brig.jpg/revision/latest/scale-to-width/292?cb=20071015004917&path-prefix=en",
                "name": "Paris_in_the_brig.jpg"
            },
            "title": "Thirty Days"
        },
        {
            "airdate": "1998-12-16",
            "episode": "10",
            "href": "http://en.memory-alpha.org/wiki/Counterpoint_%28episode%29",
            "number": "5x10",
            "prodno": "204",
            "season": "5",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/b/b3/Devore_inspection_messhall.jpg/revision/latest/scale-to-width/292?cb=20060626004719&path-prefix=en",
                "name": "Devore_inspection_messhall.jpg"
            },
            "title": "Counterpoint"
        },
        {
            "airdate": "1999-01-20",
            "episode": "11",
            "href": "http://en.memory-alpha.org/wiki/Latent_Image_%28episode%29",
            "number": "5x11",
            "prodno": "206",
            "season": "5",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/c/cf/Jetal%2C_Ahni.jpg/revision/latest/scale-to-width/292?cb=20050916174924&path-prefix=en",
                "name": "Jetal_Ahni.jpg"
            },
            "title": "Latent Image"
        },
        {
            "airdate": "1999-01-27",
            "episode": "12",
            "href": "http://en.memory-alpha.org/wiki/Bride_of_Chaotica%21_%28episode%29",
            "number": "5x12",
            "prodno": "207",
            "season": "5",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/1/14/President-of-earth.jpg/revision/latest/scale-to-width/292?cb=20110810181042&path-prefix=en",
                "name": "President-of-earth.jpg"
            },
            "title": "Bride of Chaotica!"
        },
        {
            "airdate": "1999-02-03",
            "episode": "13",
            "href": "http://en.memory-alpha.org/wiki/Gravity_%28episode%29",
            "number": "5x13",
            "prodno": "205",
            "season": "5",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "52438.9",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/4/4e/Noss.jpg/revision/latest/scale-to-width/292?cb=20060124195408&path-prefix=en",
                "name": "Noss.jpg"
            },
            "title": "Gravity"
        },
        {
            "airdate": "1999-02-10",
            "episode": "14",
            "href": "http://en.memory-alpha.org/wiki/Bliss_%28episode%29",
            "number": "5x14",
            "prodno": "209",
            "season": "5",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "52542.3",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/6/61/Voyager_Enters_the_Creature%27s_Maw.jpg/revision/latest/scale-to-width/292?cb=20070514210045&path-prefix=en",
                "name": "Voyager_Enters_the_Creatures_Maw.jpg"
            },
            "title": "Bliss"
        },
        {
            "airdate": "1999-02-17",
            "episode": "15/16",
            "href": "http://en.memory-alpha.org/wiki/Dark_Frontier_%28episode%29",
            "number": "5x15/16",
            "prodno": "211",
            "season": "5",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "52619.2",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/8/84/SevenQueen.jpg/revision/latest/scale-to-width/292?cb=20070722154653&path-prefix=en",
                "name": "SevenQueen.jpg"
            },
            "title": "Dark Frontier"
        },
        {
            "airdate": "1999-02-24",
            "episode": "17",
            "href": "http://en.memory-alpha.org/wiki/The_Disease_%28episode%29",
            "number": "5x17",
            "prodno": "210",
            "season": "5",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/7/73/Derran_Tal_and_Harry_Kim.jpg/revision/latest/scale-to-width/292?cb=20070331232728&path-prefix=en",
                "name": "Derran_Tal_and_Harry_Kim.jpg"
            },
            "title": "The Disease"
        },
        {
            "airdate": "1999-03-03",
            "episode": "18",
            "href": "http://en.memory-alpha.org/wiki/Course:_Oblivion_%28episode%29",
            "number": "5x18",
            "prodno": "213",
            "season": "5",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "52586.3",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/f/f3/Silver_Blood_Voyager.jpg/revision/latest/scale-to-width/292?cb=20061224081921&path-prefix=en",
                "name": "Silver_Blood_Voyager.jpg"
            },
            "title": "Course: Oblivion"
        },
        {
            "airdate": "1999-03-24",
            "episode": "19",
            "href": "http://en.memory-alpha.org/wiki/The_Fight_%28episode%29",
            "number": "5x19",
            "prodno": "208",
            "season": "5",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/f/f0/Chakotay_in_a_chaotic_space_boxing_ring.jpg/revision/latest/scale-to-width/292?cb=20080813202507&path-prefix=en",
                "name": "Chakotay_in_a_chaotic_space_boxing_ring.jpg"
            },
            "title": "The Fight"
        },
        {
            "airdate": "1999-03-31",
            "episode": "20",
            "href": "http://en.memory-alpha.org/wiki/Think_Tank_%28episode%29",
            "number": "5x20",
            "prodno": "214",
            "season": "5",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/1/16/Kurros.jpg/revision/latest/scale-to-width/292?cb=20080501001513&path-prefix=en",
                "name": "Kurros.jpg"
            },
            "title": "Think Tank"
        },
        {
            "airdate": "1999-04-26",
            "episode": "21",
            "href": "http://en.memory-alpha.org/wiki/Juggernaut_%28episode%29",
            "number": "5x21",
            "prodno": "215",
            "season": "5",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/e/e7/Fesek.jpg/revision/latest/scale-to-width/292?cb=20080502012408&path-prefix=en",
                "name": "Fesek.jpg"
            },
            "title": "Juggernaut"
        },
        {
            "airdate": "1999-04-28",
            "episode": "22",
            "href": "http://en.memory-alpha.org/wiki/Someone_to_Watch_Over_Me_%28episode%29",
            "number": "5x22",
            "prodno": "216",
            "season": "5",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "52648.0",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/d/df/Seven_and_Doctor_Dance.jpg/revision/latest/scale-to-width/292?cb=20080427073519&path-prefix=en",
                "name": "Seven_and_Doctor_Dance.jpg"
            },
            "title": "Someone to Watch Over Me"
        },
        {
            "airdate": "1999-05-05",
            "episode": "23",
            "href": "http://en.memory-alpha.org/wiki/11:59_%28episode%29",
            "number": "5x23",
            "prodno": "217",
            "season": "5",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/3/3f/ODonnell_Bookstore.jpg/revision/latest/scale-to-width/292?cb=20100123215102&path-prefix=en",
                "name": "ODonnell_Bookstore.jpg"
            },
            "title": "11:59"
        },
        {
            "airdate": "1999-05-12",
            "episode": "24",
            "href": "http://en.memory-alpha.org/wiki/Relativity_%28episode%29",
            "number": "5x24",
            "prodno": "218",
            "season": "5",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "52861.274",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/d/de/USS_Relativity.jpg/revision/latest/scale-to-width/292?cb=20070224224626&path-prefix=en",
                "name": "USS_Relativity.jpg"
            },
            "title": "Relativity"
        },
        {
            "airdate": "1999-05-19",
            "episode": "25",
            "href": "http://en.memory-alpha.org/wiki/Warhead_%28episode%29",
            "number": "5x25",
            "prodno": "219",
            "season": "5",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/f/f6/Warhead_torpedo.jpg/revision/latest/scale-to-width/292?cb=20040915204102&path-prefix=en",
                "name": "Warhead_torpedo.jpg"
            },
            "title": "Warhead"
        },
        {
            "airdate": "1999-05-26",
            "episode": "26",
            "href": "http://en.memory-alpha.org/wiki/Equinox_%28episode%29",
            "number": "5x26",
            "prodno": "220",
            "season": "5",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/b/ba/Voyager_with_the_Equinox.jpg/revision/latest/scale-to-width/292?cb=20070316222615&path-prefix=en",
                "name": "Voyager_with_the_Equinox.jpg"
            },
            "title": "Equinox"
        },
        {
            "airdate": "1999-09-22",
            "episode": "01",
            "href": "http://en.memory-alpha.org/wiki/Equinox,_Part_II_%28episode%29",
            "number": "6x01",
            "prodno": "221",
            "season": "6",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/8/8c/Equinox%2C_Part_II_interrogation.jpg/revision/latest/scale-to-width/292?cb=20070611081614&path-prefix=en",
                "name": "Equinox_Part_II_interrogation.jpg"
            },
            "title": "Equinox, Part II"
        },
        {
            "airdate": "1999-09-29",
            "episode": "02",
            "href": "http://en.memory-alpha.org/wiki/Survival_Instinct_%28episode%29",
            "number": "6x02",
            "prodno": "222",
            "season": "6",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "53049.2",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/e/e5/P%27Chan%2C_Marika_Wilkarah_and_Lansor.jpg/revision/latest/scale-to-width/292?cb=20070818044312&path-prefix=en",
                "name": "PChan_Marika_Wilkarah_and_Lansor.jpg"
            },
            "title": "Survival Instinct"
        },
        {
            "airdate": "1999-10-06",
            "episode": "03",
            "href": "http://en.memory-alpha.org/wiki/Barge_of_the_Dead_%28episode%29",
            "number": "6x03",
            "prodno": "223",
            "season": "6",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/9/99/Barge_of_the_Dead_-_Torres_and_Kotar.jpg/revision/latest/scale-to-width/292?cb=20070418224748&path-prefix=en",
                "name": "Barge_of_the_Dead_-_Torres_and_Kotar.jpg"
            },
            "title": "Barge of the Dead"
        },
        {
            "airdate": "1999-10-13",
            "episode": "04",
            "href": "http://en.memory-alpha.org/wiki/Tinker_Tenor_Doctor_Spy_%28episode%29",
            "number": "6x04",
            "prodno": "224",
            "season": "6",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/9/9f/Tinker_Tenor_-_The_Doctor_as_ECH.jpg/revision/latest/scale-to-width/292?cb=20070921175336&path-prefix=en",
                "name": "Tinker_Tenor_-_The_Doctor_as_ECH.jpg"
            },
            "title": "Tinker Tenor Doctor Spy"
        },
        {
            "airdate": "1999-10-20",
            "episode": "05",
            "href": "http://en.memory-alpha.org/wiki/Alice_%28episode%29",
            "number": "6x05",
            "prodno": "226",
            "season": "6",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/8/8a/Alice_merges_with_Paris.jpg/revision/latest/scale-to-width/292?cb=20081026190110&path-prefix=en",
                "name": "Alice_merges_with_Paris.jpg"
            },
            "title": "Alice"
        },
        {
            "airdate": "1999-11-03",
            "episode": "06",
            "href": "http://en.memory-alpha.org/wiki/Riddles_%28episode%29",
            "number": "6x06",
            "prodno": "227",
            "season": "6",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "53263.2",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/7/70/Baneth.jpg/revision/latest/scale-to-width/292?cb=20051003003448&path-prefix=en",
                "name": "Baneth.jpg"
            },
            "title": "Riddles"
        },
        {
            "airdate": "1999-11-10",
            "episode": "07",
            "href": "http://en.memory-alpha.org/wiki/Dragon%27s_Teeth_%28episode%29",
            "number": "6x07",
            "prodno": "225",
            "season": "6",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "53167.9",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/8/8e/Underspace_corridor.jpg/revision/latest/scale-to-width/292?cb=20100820191954&path-prefix=en",
                "name": "Underspace_corridor.jpg"
            },
            "title": "Dragon's Teeth"
        },
        {
            "airdate": "1999-11-17",
            "episode": "08",
            "href": "http://en.memory-alpha.org/wiki/One_Small_Step_%28episode%29",
            "number": "6x08",
            "prodno": "228",
            "season": "6",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "53292.7",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/d/da/Mars_in_2032.jpg/revision/latest/scale-to-width/292?cb=20050805112626&path-prefix=en",
                "name": "Mars_in_2032.jpg"
            },
            "title": "One Small Step"
        },
        {
            "airdate": "1999-11-24",
            "episode": "09",
            "href": "http://en.memory-alpha.org/wiki/The_Voyager_Conspiracy_%28episode%29",
            "number": "6x09",
            "prodno": "229",
            "season": "6",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "53329",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/a/a1/Paris_viewing_graviton_catapult.jpg/revision/latest/scale-to-width/292?cb=20071125154415&path-prefix=en",
                "name": "Paris_viewing_graviton_catapult.jpg"
            },
            "title": "The Voyager Conspiracy"
        },
        {
            "airdate": "1999-12-01",
            "episode": "10",
            "href": "http://en.memory-alpha.org/wiki/Pathfinder_%28episode%29",
            "number": "6x10",
            "prodno": "230",
            "season": "6",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/b/b2/Starfleet_communications_research_center_sol_sector.jpg/revision/latest/scale-to-width/292?cb=20051012050141&path-prefix=en",
                "name": "Starfleet_communications_research_center_sol_sector.jpg"
            },
            "title": "Pathfinder"
        },
        {
            "airdate": "2000-01-12",
            "episode": "11",
            "href": "http://en.memory-alpha.org/wiki/Fair_Haven_%28episode%29",
            "number": "6x11",
            "prodno": "231",
            "season": "6",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/4/49/Fair_Haven_train_station.jpg/revision/latest/scale-to-width/292?cb=20050129150611&path-prefix=en",
                "name": "Fair_Haven_train_station.jpg"
            },
            "title": "Fair Haven"
        },
        {
            "airdate": "2000-01-19",
            "episode": "12",
            "href": "http://en.memory-alpha.org/wiki/Blink_of_an_Eye_%28episode%29",
            "number": "6x12",
            "prodno": "233",
            "season": "6",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/9/91/High_revolution_planet.jpg/revision/latest/scale-to-width/292?cb=20110824045104&path-prefix=en",
                "name": "High_revolution_planet.jpg"
            },
            "title": "Blink of an Eye"
        },
        {
            "airdate": "2000-01-26",
            "episode": "13",
            "href": "http://en.memory-alpha.org/wiki/Virtuoso_%28episode%29",
            "number": "6x13",
            "prodno": "234",
            "season": "6",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "53556.4",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/b/bc/The_Doctor_sings_on_Qomar_homeworld.jpg/revision/latest/scale-to-width/292?cb=20080822223252&path-prefix=en",
                "name": "The_Doctor_sings_on_Qomar_homeworld.jpg"
            },
            "title": "Virtuoso"
        },
        {
            "airdate": "2000-02-02",
            "episode": "14",
            "href": "http://en.memory-alpha.org/wiki/Memorial_%28episode%29",
            "number": "6x14",
            "prodno": "236",
            "season": "6",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/c/c1/Nakan_memorial.jpg/revision/latest/scale-to-width/292?cb=20081026062448&path-prefix=en",
                "name": "Nakan_memorial.jpg"
            },
            "title": "Memorial"
        },
        {
            "airdate": "2000-02-09",
            "episode": "15",
            "href": "http://en.memory-alpha.org/wiki/Tsunkatse_%28episode%29",
            "number": "6x15",
            "prodno": "232",
            "season": "6",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "53447.2",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/2/21/Tsunkatse_ring.jpg/revision/latest/scale-to-width/292?cb=20070628215515&path-prefix=en",
                "name": "Tsunkatse_ring.jpg"
            },
            "title": "Tsunkatse"
        },
        {
            "airdate": "2000-02-16",
            "episode": "16",
            "href": "http://en.memory-alpha.org/wiki/Collective_%28episode%29",
            "number": "6x16",
            "prodno": "235",
            "season": "6",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/8/8a/Borg-children.jpg/revision/latest/scale-to-width/292?cb=20070222235616&path-prefix=en",
                "name": "Borg-children.jpg"
            },
            "title": "Collective"
        },
        {
            "airdate": "2000-02-23",
            "episode": "17",
            "href": "http://en.memory-alpha.org/wiki/Spirit_Folk_%28episode%29",
            "number": "6x17",
            "prodno": "237",
            "season": "6",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/b/bc/Guinness_sign.jpg/revision/latest/scale-to-width/292?cb=20070418011606&path-prefix=en",
                "name": "Guinness_sign.jpg"
            },
            "title": "Spirit Folk"
        },
        {
            "airdate": "2000-03-01",
            "episode": "18",
            "href": "http://en.memory-alpha.org/wiki/Ashes_to_Ashes_%28episode%29",
            "number": "6x18",
            "prodno": "238",
            "season": "6",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "53679.4",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/b/bc/BallardAndHarry.jpg/revision/latest/scale-to-width/292?cb=20071011044635&path-prefix=en",
                "name": "BallardAndHarry.jpg"
            },
            "title": "Ashes to Ashes"
        },
        {
            "airdate": "2000-03-08",
            "episode": "19",
            "href": "http://en.memory-alpha.org/wiki/Child%27s_Play_%28episode%29",
            "number": "6x19",
            "prodno": "239",
            "season": "6",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/a/ad/Ichebs_Parents.jpg/revision/latest/scale-to-width/292?cb=20070724024342&path-prefix=en",
                "name": "Ichebs_Parents.jpg"
            },
            "title": "Child's Play"
        },
        {
            "airdate": "2000-03-15",
            "episode": "20",
            "href": "http://en.memory-alpha.org/wiki/Good_Shepherd_%28episode%29",
            "number": "6x20",
            "prodno": "240",
            "season": "6",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "53753.2",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/7/71/Harren%2C_Celes%2C_Telfer%2C_and_Janeway_aboard_Delta_Flyer.jpg/revision/latest/scale-to-width/292?cb=20071111071211&path-prefix=en",
                "name": "Harren_Celes_Telfer_and_Janeway_aboard_Delta_Flyer.jpg"
            },
            "title": "Good Shepherd"
        },
        {
            "airdate": "2000-04-19",
            "episode": "21",
            "href": "http://en.memory-alpha.org/wiki/Live_Fast_and_Prosper_%28episode%29",
            "number": "6x21",
            "prodno": "242",
            "season": "6",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "53849.2",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/1/16/Mobar.jpg/revision/latest/scale-to-width/292?cb=20051025231700&path-prefix=en",
                "name": "Mobar.jpg"
            },
            "title": "Live Fast and Prosper"
        },
        {
            "airdate": "2000-04-26",
            "episode": "22",
            "href": "http://en.memory-alpha.org/wiki/Muse_%28episode%29",
            "number": "6x22",
            "prodno": "244",
            "season": "6",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "53918.0",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/b/bc/Kelis_and_B%27Elanna_perform_for_Patron.jpg/revision/latest/scale-to-width/292?cb=20080722051118&path-prefix=en",
                "name": "Kelis_and_BElanna_perform_for_Patron.jpg"
            },
            "title": "Muse"
        },
        {
            "airdate": "2000-05-03",
            "episode": "23",
            "href": "http://en.memory-alpha.org/wiki/Fury_%28episode%29",
            "number": "6x23",
            "prodno": "241",
            "season": "6",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/4/4e/Kes_fury.jpg/revision/latest/scale-to-width/292?cb=20060804012135&path-prefix=en",
                "name": "Kes_fury.jpg"
            },
            "title": "Fury"
        },
        {
            "airdate": "2000-05-10",
            "episode": "24",
            "href": "http://en.memory-alpha.org/wiki/Life_Line_%28episode%29",
            "number": "6x24",
            "prodno": "243",
            "season": "6",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/7/74/Deanna_Troi_with_the_Doctor_and_Lewis_Zimmerman.jpg/revision/latest/scale-to-width/292?cb=20051119022308&path-prefix=en",
                "name": "Deanna_Troi_with_the_Doctor_and_Lewis_Zimmerman.jpg"
            },
            "title": "Life Line"
        },
        {
            "airdate": "2000-05-17",
            "episode": "25",
            "href": "http://en.memory-alpha.org/wiki/The_Haunting_of_Deck_Twelve_%28episode%29",
            "number": "6x25",
            "prodno": "245",
            "season": "6",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/9/96/Neelix_tells_a_ghost_story.jpg/revision/latest/scale-to-width/292?cb=20051009161131&path-prefix=en",
                "name": "Neelix_tells_a_ghost_story.jpg"
            },
            "title": "The Haunting of Deck Twelve"
        },
        {
            "airdate": "2000-05-24",
            "episode": "26",
            "href": "http://en.memory-alpha.org/wiki/Unimatrix_Zero_%28episode%29",
            "number": "6x26",
            "prodno": "246",
            "season": "6",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/8/8c/Borg-Queen-being-assembled.jpg/revision/latest/scale-to-width/292?cb=20051211111854&path-prefix=en",
                "name": "Borg-Queen-being-assembled.jpg"
            },
            "title": "Unimatrix Zero"
        },
        {
            "airdate": "2000-10-04",
            "episode": "01",
            "href": "http://en.memory-alpha.org/wiki/Unimatrix_Zero,_Part_II_%28episode%29",
            "number": "7x01",
            "prodno": "247",
            "season": "7",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "54014.4",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/c/c9/Unimatrix-zero.jpg/revision/latest/scale-to-width/292?cb=20100124184313&path-prefix=en",
                "name": "Unimatrix-zero.jpg"
            },
            "title": "Unimatrix Zero, Part II"
        },
        {
            "airdate": "2000-10-11",
            "episode": "02",
            "href": "http://en.memory-alpha.org/wiki/Imperfection_%28episode%29",
            "number": "7x02",
            "prodno": "248",
            "season": "7",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "54129.4",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/8/86/Cortical_node_-_Seven_of_Nine.jpg/revision/latest/scale-to-width/292?cb=20070211071227&path-prefix=en",
                "name": "Cortical_node_-_Seven_of_Nine.jpg"
            },
            "title": "Imperfection"
        },
        {
            "airdate": "2000-10-18",
            "episode": "03",
            "href": "http://en.memory-alpha.org/wiki/Drive_%28episode%29",
            "number": "7x03",
            "prodno": "249",
            "season": "7",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "54058.6",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/4/41/Tom_and_Harry_pilot_uniforms_Drive.jpg/revision/latest/scale-to-width/292?cb=20050918122938&path-prefix=en",
                "name": "Tom_and_Harry_pilot_uniforms_Drive.jpg"
            },
            "title": "Drive"
        },
        {
            "airdate": "2000-10-25",
            "episode": "04",
            "href": "http://en.memory-alpha.org/wiki/Repression_%28episode%29",
            "number": "7x04",
            "prodno": "251",
            "season": "7",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "54090.4",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/b/b8/Janeway_Chakotay_Tuvok_Repression.jpg/revision/latest/scale-to-width/292?cb=20110528235518&path-prefix=en",
                "name": "Janeway_Chakotay_Tuvok_Repression.jpg"
            },
            "title": "Repression"
        },
        {
            "airdate": "2000-11-01",
            "episode": "05",
            "href": "http://en.memory-alpha.org/wiki/Critical_Care_%28episode%29",
            "number": "7x05",
            "prodno": "250",
            "season": "7",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/1/1f/Dysek_and_the_doctor%2C_critical_care.jpg/revision/latest/scale-to-width/292?cb=20060107231957&path-prefix=en",
                "name": "Dysek_and_the_doctor_critical_care.jpg"
            },
            "title": "Critical Care"
        },
        {
            "airdate": "2000-11-08",
            "episode": "06",
            "href": "http://en.memory-alpha.org/wiki/Inside_Man_%28episode%29",
            "number": "7x06",
            "prodno": "252",
            "season": "7",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "54208.3",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/e/e9/Barclay_and_holographic_barclay_inside_man.jpg/revision/latest/scale-to-width/292?cb=20051115002516&path-prefix=en",
                "name": "Barclay_and_holographic_barclay_inside_man.jpg"
            },
            "title": "Inside Man"
        },
        {
            "airdate": "2000-11-15",
            "episode": "07",
            "href": "http://en.memory-alpha.org/wiki/Body_and_Soul_%28episode%29",
            "number": "7x07",
            "prodno": "255",
            "season": "7",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "54238.3",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/6/6c/Seven-Doctor_Preening.jpg/revision/latest/scale-to-width/292?cb=20070515225813&path-prefix=en",
                "name": "Seven-Doctor_Preening.jpg"
            },
            "title": "Body and Soul"
        },
        {
            "airdate": "2000-11-22",
            "episode": "08",
            "href": "http://en.memory-alpha.org/wiki/Nightingale_%28episode%29",
            "number": "7x08",
            "prodno": "256",
            "season": "7",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "54274.7",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/3/33/Nightingales_ready_room.jpg/revision/latest/scale-to-width/292?cb=20050921215631&path-prefix=en",
                "name": "Nightingales_ready_room.jpg"
            },
            "title": "Nightingale"
        },
        {
            "airdate": "2000-11-29",
            "episode": "09/10",
            "href": "http://en.memory-alpha.org/wiki/Flesh_and_Blood_%28episode%29",
            "number": "7x09/10",
            "prodno": "253",
            "season": "7",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "54315.3-54337.5",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/a/a3/Hirogen_Station_Flesh_and_Blood.jpg/revision/latest/scale-to-width/292?cb=20080812200513&path-prefix=en",
                "name": "Hirogen_Station_Flesh_and_Blood.jpg"
            },
            "title": "Flesh and Blood"
        },
        {
            "airdate": "2001-01-17",
            "episode": "11",
            "href": "http://en.memory-alpha.org/wiki/Shattered_%28episode%29",
            "number": "7x11",
            "prodno": "257",
            "season": "7",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/7/7d/Chakotay_in_temporal_flux.jpg/revision/latest/scale-to-width/292?cb=20060727163839&path-prefix=en",
                "name": "Chakotay_in_temporal_flux.jpg"
            },
            "title": "Shattered"
        },
        {
            "airdate": "2001-01-24",
            "episode": "12",
            "href": "http://en.memory-alpha.org/wiki/Lineage_%28episode%29",
            "number": "7x12",
            "prodno": "258",
            "season": "7",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "54452.6",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/b/b6/MiralParisInfantHologram.jpg/revision/latest/scale-to-width/292?cb=20071007173809&path-prefix=en",
                "name": "MiralParisInfantHologram.jpg"
            },
            "title": "Lineage"
        },
        {
            "airdate": "2001-01-31",
            "episode": "13",
            "href": "http://en.memory-alpha.org/wiki/Repentance_%28episode%29",
            "number": "7x13",
            "prodno": "259",
            "season": "7",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "54474.6",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/4/49/Nygean_prison_ship.jpg/revision/latest/scale-to-width/292?cb=20080413171433&path-prefix=en",
                "name": "Nygean_prison_ship.jpg"
            },
            "title": "Repentance"
        },
        {
            "airdate": "2001-02-07",
            "episode": "14",
            "href": "http://en.memory-alpha.org/wiki/Prophecy_%28episode%29",
            "number": "7x14",
            "prodno": "260",
            "season": "7",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "54518.2-54529.8",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/c/c5/D7_class_cruiser_and_uss_voyager.jpg/revision/latest/scale-to-width/292?cb=20060311092640&path-prefix=en",
                "name": "D7_class_cruiser_and_uss_voyager.jpg"
            },
            "title": "Prophecy"
        },
        {
            "airdate": "2001-02-14",
            "episode": "15",
            "href": "http://en.memory-alpha.org/wiki/The_Void_%28episode%29",
            "number": "7x15",
            "prodno": "261",
            "season": "7",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "54553.4-54562.7",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/f/f9/Voyager_void.jpg/revision/latest/scale-to-width/292?cb=20101221175429&path-prefix=en",
                "name": "Voyager_void.jpg"
            },
            "title": "The Void"
        },
        {
            "airdate": "2001-02-21",
            "episode": "16",
            "href": "http://en.memory-alpha.org/wiki/Workforce_%28episode%29",
            "number": "7x16",
            "prodno": "262",
            "season": "7",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "54584.3-54608.6",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/3/3a/Kathryn_Janeway_treated_for_Dysphoria_Syndrome.jpg/revision/latest/scale-to-width/292?cb=20070606071803&path-prefix=en",
                "name": "Kathryn_Janeway_treated_for_Dysphoria_Syndrome.jpg"
            },
            "title": "Workforce"
        },
        {
            "airdate": "2001-02-28",
            "episode": "17",
            "href": "http://en.memory-alpha.org/wiki/Workforce,_Part_II_%28episode%29",
            "number": "7x17",
            "prodno": "263",
            "season": "7",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "54622.4",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/6/68/Kadan.jpg/revision/latest/scale-to-width/292?cb=20060124203342&path-prefix=en",
                "name": "Kadan.jpg"
            },
            "title": "Workforce, Part II"
        },
        {
            "airdate": "2001-03-07",
            "episode": "18",
            "href": "http://en.memory-alpha.org/wiki/Human_Error_%28episode%29",
            "number": "7x18",
            "prodno": "264",
            "season": "7",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "Unknown",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/4/43/Seven_red_dress_human_error.jpg/revision/latest/scale-to-width/292?cb=20100330161028&path-prefix=en",
                "name": "Seven_red_dress_human_error.jpg"
            },
            "title": "Human Error"
        },
        {
            "airdate": "2001-04-11",
            "episode": "19",
            "href": "http://en.memory-alpha.org/wiki/Q2_%28episode%29",
            "number": "7x19",
            "prodno": "265",
            "season": "7",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "54704.5",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/a/a2/Q_junior.jpg/revision/latest/scale-to-width/292?cb=20070122230254&path-prefix=en",
                "name": "Q_junior.jpg"
            },
            "title": "Q2"
        },
        {
            "airdate": "2001-04-18",
            "episode": "20",
            "href": "http://en.memory-alpha.org/wiki/Author,_Author_%28episode%29",
            "number": "7x20",
            "prodno": "266",
            "season": "7",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "54732.3",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/8/88/PhotonsBeFree-Doctor_Intro.jpg/revision/latest/scale-to-width/292?cb=20070123212530&path-prefix=en",
                "name": "PhotonsBeFree-Doctor_Intro.jpg"
            },
            "title": "Author, Author"
        },
        {
            "airdate": "2001-04-25",
            "episode": "21",
            "href": "http://en.memory-alpha.org/wiki/Friendship_One_%28episode%29",
            "number": "7x21",
            "prodno": "267",
            "season": "7",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "54775.4",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/e/ef/Friendship_1.jpg/revision/latest/scale-to-width/292?cb=20050717211336&path-prefix=en",
                "name": "Friendship_1.jpg"
            },
            "title": "Friendship One"
        },
        {
            "airdate": "2001-05-02",
            "episode": "22",
            "href": "http://en.memory-alpha.org/wiki/Natural_Law_%28episode%29",
            "number": "7x22",
            "prodno": "268",
            "season": "7",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "54827.7",
            "thumb": {
                "href": "http://vignette3.wikia.nocookie.net/memoryalpha/images/f/f2/Ventu_language.jpg/revision/latest/scale-to-width/292?cb=20070111002845&path-prefix=en",
                "name": "Ventu_language.jpg"
            },
            "title": "Natural Law"
        },
        {
            "airdate": "2001-05-09",
            "episode": "23",
            "href": "http://en.memory-alpha.org/wiki/Homestead_%28episode%29",
            "number": "7x23",
            "prodno": "269",
            "season": "7",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "54868.6",
            "thumb": {
                "href": "http://vignette1.wikia.nocookie.net/memoryalpha/images/5/50/Neelix_Dexa_Brax_family.jpg/revision/latest/scale-to-width/292?cb=20050910010624&path-prefix=en",
                "name": "Neelix_Dexa_Brax_family.jpg"
            },
            "title": "Homestead"
        },
        {
            "airdate": "2001-05-16",
            "episode": "24",
            "href": "http://en.memory-alpha.org/wiki/Renaissance_Man_%28episode%29",
            "number": "7x24",
            "prodno": "270",
            "season": "7",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "54890.7",
            "thumb": {
                "href": "http://vignette4.wikia.nocookie.net/memoryalpha/images/e/e8/Tuvok_and_the_Doctors.jpg/revision/latest/scale-to-width/292?cb=20091221081232&path-prefix=en",
                "name": "Tuvok_and_the_Doctors.jpg"
            },
            "title": "Renaissance Man"
        },
        {
            "airdate": "2001-05-23",
            "episode": "25/26",
            "href": "http://en.memory-alpha.org/wiki/Endgame_%28episode%29",
            "number": "7x25/26",
            "prodno": "271",
            "season": "7",
            "series": "voyager",
            "seriesPretty": "Voyager",
            "stardate": "54973.4",
            "thumb": {
                "href": "http://vignette2.wikia.nocookie.net/memoryalpha/images/c/c8/Uss_voyager_earth.jpg/revision/latest/scale-to-width/292?cb=20080112185131&path-prefix=en",
                "name": "Uss_voyager_earth.jpg"
            },
            "title": "Endgame"
        }
    ]
};
