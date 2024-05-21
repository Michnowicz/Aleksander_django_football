from django_seed import Seed
from .models import *
import random

def continents():
    continents = ["North America", "South America", "Europe", "Africa", "Asia", "Australia"]

    for i in range(0, 6):
        seeder = Seed.seeder()
        seeder.add_entity(Continent,1,{
            'name' : lambda x : continents[i],
        })
        pks = seeder.execute()
        print(pks)

def countries():
    countries = [
    ["Afghanistan",4],
    ["Albania",3],
    ["Algeria",4],
    ["Andorra",3],
    ["Angola",4],
    ["Anguilla",6],
    ["Argentina",2],
    ["Armenia",5],
    ["Aruba",6],
    ["Australia",6],
    ["Austria",3],
    ["Azerbaijan",5],
    ["Bahamas",2],
    ["Bahrain",4],
    ["Bangladesh",4],
    ["Barbados",6],
    ["Belarus",3],
    ["Belgium",3],
    ["Belize",2],
    ["Benin",4],
    ["Bermuda",2],
    ["Bhutan",5],
    ["Bolivia",2],
    ["Bosnia & Herzegovina",3],
    ["Botswana",4],
    ["Brazil",2],
    ["Bulgaria",3],
    ["Burkina Faso",4],
    ["Burundi",4],
    ["Cambodia",5],
    ["Cameroon",4],
    ["Canada",1],
    ["Cape Verde",4],
    ["Cayman Islands",1],
    ["Central African Republic",4],
    ["Chad",4],
    ["Chile",2],
    ["China",5],
    ["Christmas Island",6],
    ["Cocos",5],
    ["Colombia",2],
    ["Comoros",4],
    ["Congo",4],
    ["Cook Islands",6],
    ["Costa Rica",4],
    ["Croatia",3],
    ["Cuba",1],
    ["Curaçao",2],
    ["Cyprus",5],
    ["Czechia",3],
    ["Côte d’Ivoire",4],
    ["Denmark",3],
    ["Djibouti",4],
    ["Dominica",1],
    ["Dominican Republic",1],
    ["Ecuador",2],
    ["Egypt",4],
    ["El Salvador",1],
    ["Equatorial Guinea",4],
    ["Eritrea",4],
    ["Estonia",3],
    ["Eswatini",4],
    ["Ethiopia",4],
    ["Falkland Islands",2],
    ["Faroe Islands",3],
    ["Fiji",6],
    ["Finland",3],
    ["France",3],
    ["French Guiana",2],
    ["French Polynesia",6],
    ["French Southern Territories",4],
    ["Gabon",4],
    ["Gambia",4],
    ["Georgia",5],
    ["Germany",3],
    ["Ghana",4],
    ["Gibraltar",4],
    ["Greece",3],
    ["Greenland",3],
    ["Grenada",2],
    ["Guadeloupe",2],
    ["Guam",5],
    ["Guatemala",1],
    ["Guernsey",3],
    ["Guinea",4],
    ["Guinea-Bissau",4],
    ["Guyana",4],
    ["Haiti",1],
    ["Honduras",1],
    ["Hong Kong",5],
    ["Hungary",3],
    ["Iceland",3],
    ["India",5],
    ["Indonesia",5],
    ["Iran",5],
    ["Iraq",5],
    ["Ireland",3],
    ["Isle of Man",3],
    ["Israel",5],
    ["Italy",3],
    ["Jamaica",1],
    ["Japan",5],
    ["Jersey",3],
    ["Jordan",5],
    ["Kazakhstan",5],
    ["Kenya",4],
    ["Kiribati",6],
    ["Kosovo",3],
    ["Kuwait",5],
    ["Kyrgyzstan",5],
    ["Laos",5],
    ["Latvia",3],
    ["Lebanon",4],
    ["Lesotho",4],
    ["Liberia",4],
    ["Libya",4],
    ["Liechtenstein",3],
    ["Lithuania",3],
    ["Luxembourg",3],
    ["Madagascar",4],
    ["Malawi",4],
    ["Malaysia",5],
    ["Maldives",5],
    ["Mali",4],
    ["Malta",3],
    ["Marshall Islands",6],
    ["Martinique",2],
    ["Mauritania",4],
    ["Mauritius",5],
    ["Mayotte",4],
    ["Mexico",2],
    ["Micronesia",6],
    ["Moldova",3],
    ["Monaco",3],
    ["Mongolia",5],
    ["Montenegro",3],
    ["Montserrat",3],
    ["Morocco",4],
    ["Mozambique",4],
    ["Myanmar",5],
    ["Namibia",4],
    ["Nauru",4],
    ["Nepal",5],
    ["Netherlands",3],
    ["New Caledonia",6],
    ["New Zealand",6],
    ["Nicaragua",1],
    ["Niger",4],
    ["Nigeria",4],
    ["Niue",6],
    ["Norfolk Island",6],
    ["North Korea",5],
    ["North Macedonia",3],
    ["Northern Cyprus",3],
    ["Northern Mariana Islands",1],
    ["Norway",3],
    ["Oman",5],
    ["Pakistan",5],
    ["Palau",5],
    ["Palestinian Territories",5],
    ["Panama",1],
    ["Papua New Guinea",6],
    ["Paraguay",2],
    ["Peru",2],
    ["Philippines",5],
    ["Pitcairn Islands",6],
    ["Poland",3],
    ["Portugal",3],
    ["Puerto Rico",2],
    ["Qatar",5],
    ["Romania",3],
    ["Russia",3],
    ["Rwanda",4],
    ["Réunion",4],
    ["Sahrawi Arab Democratic Republic",4],
    ["Samoa",6],
    ["San Marino",3],
    ["Saudi Arabia",5],
    ["Senegal",4],
    ["Serbia",3],
    ["Seychelles",4],
    ["Sierra Leone",4],
    ["Singapore",5],
    ["Sint Maarten",1],
    ["Slovakia",3],
    ["Slovenia",3],
    ["Solomon Islands",6],
    ["Somalia",4],
    ["Somaliland",4],
    ["South Africa",4],
    ["South Korea",5],
    ["South Ossetia",5],
    ["South Sudan",4],
    ["Spain",3],
    ["Sri Lanka",5],
    ["St. Barthélemy",1],
    ["St. Helena",4],
    ["St. Kitts & Nevis",1],
    ["St. Lucia",1],
    ["St. Martin",1],
    ["St. Pierre & Miquelon",1],
    ["St. Vincent & Grenadines",1],
    ["Sudan",4],
    ["Suriname",2],
    ["Svalbard & Jan Mayen",3],
    ["Sweden",3],
    ["Switzerland",3],
    ["Syria",5],
    ["São Tomé & Príncipe",4],
    ["Taiwan",5],
    ["Tajikistan",5],
    ["Tanzania",4],
    ["Thailand",5],
    ["Timor-Leste",5],
    ["Togo",4],
    ["Tokelau",6],
    ["Tonga",6],
    ["Transnistria",3],
    ["Trinidad & Tobago",2],
    ["Tunisia",4],
    ["Turkey",5],
    ["Turkmenistan",5],
    ["Turks & Caicos Islands",1],
    ["Tuvalu",6],
    ["U.S. Outlying Islands",2],
    ["U.S. Virgin Islands",1],
    ["Uganda",4],
    ["Ukraine",3],
    ["United Arab Emirates",5],
    ["United Kingdom",3],
    ["United States",1],
    ["Uruguay",2],
    ["Uzbekistan",5],
    ["Vanuatu",6],
    ["Vatican City",3],
    ["Venezuela",2],
    ["Vietnam",5],
    ["Wallis & Futuna",6],
    ["Western Sahara",4],
    ["Yemen",5],
    ["Zambia",4],
    ["Zimbabwe",4]
    ]

    for c in countries:
        id = Continent.objects.get(id=c[1])
        seeder = Seed.seeder()
        seeder.add_entity(Country,1,{
            'name' : lambda x : c[0],
            'continent' : lambda x : id
        })
        pks = seeder.execute()
        print(pks)

def roles():
    roles = ["runner","tank", "hastier", "puncher"]
    for r in roles:
        seeder = Seed.seeder()
        seeder.add_entity(Role,1,{
            'name' : lambda x : r
        })
        pks = seeder.execute()
        print(pks)

def teams():
    teams = [
        ["Tidewater Dogs Of War","Austin",1],
        ["Sanctis Draconis Petrocoria","Tourcoing",3],
        ["scallagrims","Toronto",1],
        ["KS Rycerz","Lodz",3],
        ["West Australian Beserkers","Canberra",6],
        ["The Seraphim","St. Louis",1],
        ["Dies Irae","Mokotow",3],
    ]
    for t in teams:
        continent = Continent.objects.get(id=t[2])
        seeder = Seed.seeder()
        seeder.add_entity(Team,1,{
            'name' : lambda x : t[0],
            "city" : lambda x : t[1],
            "continent" : lambda x : continent
        })
        pks = seeder.execute()
        print(pks)

def players():
    players = [
        ["Brian", "Callis", 33, "010 1 718 222 2222","M",231,1,2, "images/male_fighter.jpg"],
        ["Bronson", "Conlin", 27, "010 1 722 305 2046","M",231,1,3,"images/m3.jpg"],
        ["Benjamin", "Benecke", 30, "010 1 715 046 2833","M",231,1,1,"images/m4.jpg"],
        ["Sam", "Jensen", 29, "010 1 713 289 2637","M",231,1,4,"images/m17.jpg"],
        ["Jerry", "Lawson", 31, "010 1 718 378 3365","M",231,1,4,"images/m18.jpg"],

        ["Guillaume", "Prez", 25, "33 123 456 789","M",68,2,3,"images/m5.jpg",],
        ["Pierre", "Meunier", 34, "33 278 3O0 387","M",68,2,4,"images/m19.jpg",],
        ["Sébastien", "Caron", 29, "33 278 388 108","M",68,2,2,"images/m12.jpg",],
        ["Jean Marie", "Perrin", 0, "33 O48 2O1 2O4","M",68,2,4,"images/m20.jpg",],
        ["Sylvain", "Levy", 0, "33 287 377 349","M",68,2,1,"images/m11.jpg"],
    
        ["Greg", "Polevoy", 30, "030 1 416 704 9448","M",32,3,1,"images/m6.jpg",],
        ["Joshua", "Friars", 33, "030 1 389 276 3849","M",32,3,4,"images/m21.jpg",],
        ["Alex", "Smanster", 26, "030 1 203 389 2683","M",32,3,3,"images/male_fighter.jpg",],
        ["Matthew", "Willson", 30, "030 1 394 226 3944","M",32,3,2,"images/m12.jpg",],
        ["Trevor", "Armstrong", 27, "030 1 342 432 3340","M",32,3,4,"images/male_fighter.jpg",],

        ["Adam", "Jurga", 24, "48 057 489 576","M",1,4,4,"images/male_fighter.jpg",],
        ["Adrian", "Siembida", 32, "48 300 462 930","M",1,4,1,"images/m7.jpg",],
        ["Aleksander", "Blausz", 30, "48 349 300 462","M",1,4,3,"images/male_fighter.jpg",],
        ["Artur", "Frontczak", 28, "48 394 378 103","M",1,4,2,"images/m10.jpg",],
        ["Boleslaw", "Sitek", 25, "48 204 210 352","M",1,4,4,"images/m15.jpg",],
        

        ["Alex", "Jacobsen", 29, "01 98 308 888","M",10,5,3,"images/m8.jpg",],
        ["Bowen", "Slater", 32, "01 23 390 231","M",10,5,2,"images/m9.jpg",],
        ["Brad", "Swales", 30, "01 78 300 256","M",10,5,4,"images/m14.jpg",],
        ["Casey", "Lennon", 26, "01 93 498 190","M",10,5,1,"images/male_fighter.jpg",],
        ["Christian", "Sierra", 24, "01 39 276 220","M",10,5,4,"images/male_fighter.jpg",],
        

        ["Abigail", "Tobin", 24, "010 1 390 227 5376","F",231,6,1,"images/f9.jpg",],
        ["Ashley", "Lyons", 26, "010 1 278 109 2893","F",231,6,1,"images/f6.jpg",],
        ["Alexandra", "Jasper", 21, "010 1 390 333 2093","F",231,6,1,"images/f5.jpg",],
        ["Alice", "Langton", 31, "010 1 293 122 2677","F",231,6,1,"images/f9.jpg",],
        ["Amari", "Brooks", 29, "010 1 143 276 2899","F",231,6,1,"images/f4.jpg",],
        

        ["Demetria", "Ahlquist", 28, "020 3899 1521","F",230,7,4,"images/f9.jpg",],
        ["Elyce", "Ellington", 32, "020 3894 1593","F",230,7,4,"images/f9.jpg",],
        ["Freyja", "Seymore", 25, "020 0023 2701","F",230,7,1,"images/f7.jpg",],
        ["Genevieve", "Drouin", 29, "020 2739 2701","F",230,7,2,"images/f9.jpg",],
        ["Karine", "Porchet", 30, "020 3674 3982","F",230,7,3,"images/f9.jpg",],
    ]

    for p in players:
        country = Country.objects.get(id=p[5])
        team = Team.objects.get(id=p[6])
        role = Role.objects.get(id=p[7])
        seeder = Seed.seeder()
        seeder.add_entity(Player,1,{
            'firstname' : lambda x : p[0],
            "lastname" : lambda x : p[1],
            "age" : lambda x : p[2],
            "phone" : lambda x : p[3],
            "mail" : lambda x : f"{p[0]}{p[1]}@buhurt.com",
            "gender" : lambda x : p[4],
            "image" : lambda x : p[8],
            "country" : lambda x : country,
            "team" : lambda x : team,
            "role" : lambda x : role,
        })
        pks = seeder.execute()
        print(pks)

    teamless = [
        ["Aaron", "Miller", 30, "030 3892 3672","M",None,None,3,"images/male_fighter.jpg",],
        ["Arvid", "Gahsche", 25, "010 2093 2651","M",None,None,1,"images/m13.jpg",],
        ["Bastien", "Grandcamp", 32, "015 2983 3982","M",None,None,4,"images/male_fighter.jpg",],
        ["Bart", "De Laat", 21, "012 2990 1654","M",None,None,4,"images/male_fighter.jpg",],
        ["Ben", "Bailey", 28, "020 0992 1543","M",None,None,2,"images/male_fighter.jpg",],
        ["Benas", "Levulis", 31, "011 3988 2443","M",None,None,1,"images/male_fighter.jpg",],
        ["Bohumil", "Masnicak", 34, "014 2731 0993","M",None,None,2,"images/male_fighter.jpg",],
        

        ["Beth", "Hammer", 27, "013 9834 2267","F",None,None,3,"images/f10.jpg",],
        ["Bruna", "Longley", 34, "010 3197 2014","F",None,None,3,"images/f2.jpg",],
        ["Celia", "Rocton", 28, "001 3879 0922","F",None,None,3,"images/f11.jpg",],
        ["Christine", "Napolitano", 20, "003 3821 3894","F",None,None,3,"images/f1.jpg",],
        ["Charlotte", "Marchand", 19, "019 2753 4467","F",None,None,3,"images/f8.jpg",],
        ["Emeline", "Barbier", 23, "020 3892 4362","F",None,None,3,"images/f9.jpg",],
        ["Helmi", "Keränen", 32, "012 4983 4663","F",None,None,3,"images/f3.jpg",],
        
    ]
    for t in teamless:
        role = Role.objects.get(id=t[7])
        seeder = Seed.seeder()
        seeder.add_entity(Player,1,{
            'firstname' : lambda x : t[0],
            "lastname" : lambda x : t[1],
            "age" : lambda x : t[2],
            "phone" : lambda x : t[3],
            "mail" : lambda x : f"{t[0]}{t[1]}@buhurt.com",
            "gender" : lambda x : t[4],
            "image" : lambda x : t[8],
            "country" : lambda x : None,
            "team" : lambda x : None,
            "role" : lambda x : role,
        })
        pks = seeder.execute()
        print(pks)

