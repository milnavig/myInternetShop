--
-- PostgreSQL database dump
--

-- Dumped from database version 13.3
-- Dumped by pg_dump version 13.3

-- Started on 2021-09-19 16:13:11

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 211 (class 1259 OID 16468)
-- Name: basket_devices; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.basket_devices (
    id integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "basketId" integer,
    "deviceId" integer
);


ALTER TABLE public.basket_devices OWNER TO postgres;

--
-- TOC entry 210 (class 1259 OID 16466)
-- Name: basket_devices_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.basket_devices_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.basket_devices_id_seq OWNER TO postgres;

--
-- TOC entry 3128 (class 0 OID 0)
-- Dependencies: 210
-- Name: basket_devices_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.basket_devices_id_seq OWNED BY public.basket_devices.id;


--
-- TOC entry 203 (class 1259 OID 16411)
-- Name: baskets; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.baskets (
    id integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "userId" integer
);


ALTER TABLE public.baskets OWNER TO postgres;

--
-- TOC entry 202 (class 1259 OID 16409)
-- Name: baskets_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.baskets_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.baskets_id_seq OWNER TO postgres;

--
-- TOC entry 3129 (class 0 OID 0)
-- Dependencies: 202
-- Name: baskets_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.baskets_id_seq OWNED BY public.baskets.id;


--
-- TOC entry 207 (class 1259 OID 16434)
-- Name: brands; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.brands (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.brands OWNER TO postgres;

--
-- TOC entry 206 (class 1259 OID 16432)
-- Name: brands_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.brands_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.brands_id_seq OWNER TO postgres;

--
-- TOC entry 3130 (class 0 OID 0)
-- Dependencies: 206
-- Name: brands_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.brands_id_seq OWNED BY public.brands.id;


--
-- TOC entry 219 (class 1259 OID 24578)
-- Name: comments; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.comments (
    id integer NOT NULL,
    text character varying(255) NOT NULL,
    "timestamp" timestamp with time zone NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "deviceId" integer,
    "userId" integer
);


ALTER TABLE public.comments OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 24576)
-- Name: comments_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.comments_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.comments_id_seq OWNER TO postgres;

--
-- TOC entry 3131 (class 0 OID 0)
-- Dependencies: 218
-- Name: comments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.comments_id_seq OWNED BY public.comments.id;


--
-- TOC entry 215 (class 1259 OID 16504)
-- Name: device_infos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.device_infos (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    description character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "deviceId" integer
);


ALTER TABLE public.device_infos OWNER TO postgres;

--
-- TOC entry 214 (class 1259 OID 16502)
-- Name: device_infos_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.device_infos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.device_infos_id_seq OWNER TO postgres;

--
-- TOC entry 3132 (class 0 OID 0)
-- Dependencies: 214
-- Name: device_infos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.device_infos_id_seq OWNED BY public.device_infos.id;


--
-- TOC entry 209 (class 1259 OID 16444)
-- Name: devices; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.devices (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    price integer NOT NULL,
    rating integer DEFAULT 0,
    img character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "typeId" integer,
    "brandId" integer
);


ALTER TABLE public.devices OWNER TO postgres;

--
-- TOC entry 208 (class 1259 OID 16442)
-- Name: devices_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.devices_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.devices_id_seq OWNER TO postgres;

--
-- TOC entry 3133 (class 0 OID 0)
-- Dependencies: 208
-- Name: devices_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.devices_id_seq OWNED BY public.devices.id;


--
-- TOC entry 213 (class 1259 OID 16486)
-- Name: ratings; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.ratings (
    id integer NOT NULL,
    rate integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "userId" integer,
    "deviceId" integer
);


ALTER TABLE public.ratings OWNER TO postgres;

--
-- TOC entry 212 (class 1259 OID 16484)
-- Name: ratings_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.ratings_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.ratings_id_seq OWNER TO postgres;

--
-- TOC entry 3134 (class 0 OID 0)
-- Dependencies: 212
-- Name: ratings_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.ratings_id_seq OWNED BY public.ratings.id;


--
-- TOC entry 221 (class 1259 OID 32770)
-- Name: tokens; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tokens (
    id integer NOT NULL,
    "refreshToken" character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "userId" integer
);


ALTER TABLE public.tokens OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 32768)
-- Name: tokens_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tokens_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tokens_id_seq OWNER TO postgres;

--
-- TOC entry 3135 (class 0 OID 0)
-- Dependencies: 220
-- Name: tokens_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tokens_id_seq OWNED BY public.tokens.id;


--
-- TOC entry 217 (class 1259 OID 16520)
-- Name: type_brands; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.type_brands (
    id integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "typeId" integer,
    "brandId" integer
);


ALTER TABLE public.type_brands OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 16518)
-- Name: type_brands_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.type_brands_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.type_brands_id_seq OWNER TO postgres;

--
-- TOC entry 3136 (class 0 OID 0)
-- Dependencies: 216
-- Name: type_brands_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.type_brands_id_seq OWNED BY public.type_brands.id;


--
-- TOC entry 205 (class 1259 OID 16424)
-- Name: types; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.types (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.types OWNER TO postgres;

--
-- TOC entry 204 (class 1259 OID 16422)
-- Name: types_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.types_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.types_id_seq OWNER TO postgres;

--
-- TOC entry 3137 (class 0 OID 0)
-- Dependencies: 204
-- Name: types_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.types_id_seq OWNED BY public.types.id;


--
-- TOC entry 201 (class 1259 OID 16397)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    email character varying(255),
    password character varying(255),
    role character varying(255) DEFAULT 'USER'::character varying,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    username character varying(255),
    "isActivated" boolean,
    "activationLink" character varying(255)
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 200 (class 1259 OID 16395)
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- TOC entry 3138 (class 0 OID 0)
-- Dependencies: 200
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- TOC entry 2920 (class 2604 OID 16471)
-- Name: basket_devices id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.basket_devices ALTER COLUMN id SET DEFAULT nextval('public.basket_devices_id_seq'::regclass);


--
-- TOC entry 2915 (class 2604 OID 16414)
-- Name: baskets id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.baskets ALTER COLUMN id SET DEFAULT nextval('public.baskets_id_seq'::regclass);


--
-- TOC entry 2917 (class 2604 OID 16437)
-- Name: brands id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.brands ALTER COLUMN id SET DEFAULT nextval('public.brands_id_seq'::regclass);


--
-- TOC entry 2924 (class 2604 OID 24581)
-- Name: comments id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comments ALTER COLUMN id SET DEFAULT nextval('public.comments_id_seq'::regclass);


--
-- TOC entry 2922 (class 2604 OID 16507)
-- Name: device_infos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.device_infos ALTER COLUMN id SET DEFAULT nextval('public.device_infos_id_seq'::regclass);


--
-- TOC entry 2918 (class 2604 OID 16447)
-- Name: devices id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.devices ALTER COLUMN id SET DEFAULT nextval('public.devices_id_seq'::regclass);


--
-- TOC entry 2921 (class 2604 OID 16489)
-- Name: ratings id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ratings ALTER COLUMN id SET DEFAULT nextval('public.ratings_id_seq'::regclass);


--
-- TOC entry 2925 (class 2604 OID 32773)
-- Name: tokens id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tokens ALTER COLUMN id SET DEFAULT nextval('public.tokens_id_seq'::regclass);


--
-- TOC entry 2923 (class 2604 OID 16523)
-- Name: type_brands id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.type_brands ALTER COLUMN id SET DEFAULT nextval('public.type_brands_id_seq'::regclass);


--
-- TOC entry 2916 (class 2604 OID 16427)
-- Name: types id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.types ALTER COLUMN id SET DEFAULT nextval('public.types_id_seq'::regclass);


--
-- TOC entry 2913 (class 2604 OID 16400)
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- TOC entry 3112 (class 0 OID 16468)
-- Dependencies: 211
-- Data for Name: basket_devices; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.basket_devices (id, "createdAt", "updatedAt", "basketId", "deviceId") FROM stdin;
\.


--
-- TOC entry 3104 (class 0 OID 16411)
-- Dependencies: 203
-- Data for Name: baskets; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.baskets (id, "createdAt", "updatedAt", "userId") FROM stdin;
1	2021-07-09 17:18:35.356+00	2021-07-09 17:18:35.356+00	1
2	2021-07-09 17:21:16.027+00	2021-07-09 17:21:16.027+00	3
3	2021-07-18 16:48:14.586+00	2021-07-18 16:48:14.586+00	4
4	2021-07-18 20:47:25.974+00	2021-07-18 20:47:25.974+00	5
5	2021-07-19 20:16:53.931+00	2021-07-19 20:16:53.931+00	6
6	2021-08-04 20:34:51.269+00	2021-08-04 20:34:51.269+00	7
7	2021-08-06 21:23:11.531+00	2021-08-06 21:23:11.531+00	8
8	2021-08-08 15:44:56.809+00	2021-08-08 15:44:56.809+00	9
9	2021-08-08 15:47:36.649+00	2021-08-08 15:47:36.649+00	10
10	2021-08-08 15:48:49.721+00	2021-08-08 15:48:49.721+00	11
11	2021-08-08 15:49:53.397+00	2021-08-08 15:49:53.397+00	12
12	2021-08-11 14:55:31.076+00	2021-08-11 14:55:31.076+00	\N
13	2021-08-11 15:00:48.791+00	2021-08-11 15:00:48.791+00	\N
14	2021-08-11 15:04:22.389+00	2021-08-11 15:04:22.389+00	15
\.


--
-- TOC entry 3108 (class 0 OID 16434)
-- Dependencies: 207
-- Data for Name: brands; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.brands (id, name, "createdAt", "updatedAt") FROM stdin;
1	Samsung	2021-07-07 15:59:41.453+00	2021-07-07 15:59:41.453+00
2	Apple	2021-07-07 15:59:47.942+00	2021-07-07 15:59:47.942+00
3	Lenovo	2021-08-08 12:59:06.174+00	2021-08-08 12:59:06.174+00
4	Xiaomi	2021-08-08 13:50:20.967+00	2021-08-08 13:50:20.967+00
\.


--
-- TOC entry 3120 (class 0 OID 24578)
-- Dependencies: 219
-- Data for Name: comments; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.comments (id, text, "timestamp", "createdAt", "updatedAt", "deviceId", "userId") FROM stdin;
5	123	2021-08-06 21:24:17.65+00	2021-08-06 21:24:17.65+00	2021-08-06 21:24:17.65+00	\N	8
6	My Comment	2021-08-06 22:02:46.831+00	2021-08-06 22:02:46.831+00	2021-08-06 22:02:46.831+00	\N	8
7	Test	2021-08-08 19:55:52.024+00	2021-08-08 19:55:52.026+00	2021-08-08 19:55:52.026+00	8	8
8	Test	2021-08-08 19:56:22.425+00	2021-08-08 19:56:22.425+00	2021-08-08 19:56:22.425+00	5	8
9	Hello!	2021-08-08 20:01:11.734+00	2021-08-08 20:01:11.734+00	2021-08-08 20:01:11.734+00	5	8
\.


--
-- TOC entry 3116 (class 0 OID 16504)
-- Dependencies: 215
-- Data for Name: device_infos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.device_infos (id, title, description, "createdAt", "updatedAt", "deviceId") FROM stdin;
2	Processor	10th Gen Intel Core i3-10110U	2021-08-08 13:04:49.815+00	2021-08-08 13:04:49.815+00	4
3	OS	Pre-Loaded Windows 10 Home with Lifetime Validity	2021-08-08 13:04:49.815+00	2021-08-08 13:04:49.815+00	4
4	Memory and Storage	8GB (4+4) RAM DDR4-2666 | Upgradable up to 12GB | 1 TB HDD	2021-08-08 13:04:49.815+00	2021-08-08 13:04:49.815+00	4
5	Graphics	Integrated Intel UHD Graphics	2021-08-08 13:04:49.815+00	2021-08-08 13:04:49.815+00	4
6	Display	15.6" Full HD (1920x1080) | Brightness: 220 nits | Anti-Glare	2021-08-08 13:04:49.815+00	2021-08-08 13:04:49.815+00	4
7	Processor	11th Gen Intel Tiger Lake Core i5-1135G7 | Speed: 2.4	2021-08-08 13:25:59.324+00	2021-08-08 13:25:59.324+00	5
8	OS	Pre-Loaded Windows 10 Home with Lifetime Validity	2021-08-08 13:25:59.324+00	2021-08-08 13:25:59.324+00	5
9	Memory and Storage	8GB RAM DDR4-3200 | 1TB HDD + 256GB SSD	2021-08-08 13:25:59.324+00	2021-08-08 13:25:59.324+00	5
10	Graphics	Intel Iris Xe Integrated Graphics	2021-08-08 13:25:59.324+00	2021-08-08 13:25:59.324+00	5
11	Display	5.6" Full HD (1920x1080) | Brightness: 300 nits | Anti-Glare | IPS Technology | 45% NTSC	2021-08-08 13:25:59.325+00	2021-08-08 13:25:59.325+00	5
12	Display	FHD+ (1080x2400) AMOLED Dot display; 16.33 centimeters (6.43 inch); 20:9 aspect ratio	2021-08-08 13:52:42.287+00	2021-08-08 13:52:42.287+00	6
13	Camera	48 MP Quad Rear camera with 8MP Ultra-wide	2021-08-08 13:52:42.287+00	2021-08-08 13:52:42.287+00	6
14	Battery	5000 mAh large battery with 33W fast charger in-box	2021-08-08 13:52:42.287+00	2021-08-08 13:52:42.287+00	6
15	Processor	Qualcomm Snapdragon 678 with Kryo 460 Octa-core; 11nm process	2021-08-08 13:52:42.287+00	2021-08-08 13:52:42.287+00	6
16	Screen	16.21 centimeters (6.4-inch) Super AMOLED - Infinity U-cut display, FHD+ resolution with 60Hz Refresh rate, protected by Gorilla Glass 3	2021-08-08 13:57:23.575+00	2021-08-08 13:57:23.575+00	7
17	Camera	48MP+8MP+5MP Triple camera setup-48MP	2021-08-08 13:57:23.575+00	2021-08-08 13:57:23.575+00	7
18	Battery	Monster 6000 mAh Battery	2021-08-08 13:57:23.575+00	2021-08-08 13:57:23.575+00	7
19	Camera	13MP (F1.8) main camera + 5MP (F2.2) ultra wide camera	2021-08-08 17:00:37.367+00	2021-08-08 17:00:37.367+00	8
20	Memory	Memory, Storage & SIM: 4GB RAM	2021-08-08 17:00:37.367+00	2021-08-08 17:00:37.367+00	8
21	OC	Android v10.0 operating system with 1.8GHz Qualcomm	2021-08-08 17:00:37.367+00	2021-08-08 17:00:37.367+00	8
22	Battery	5000mAH lithium-ion battery	2021-08-08 17:00:37.367+00	2021-08-08 17:00:37.367+00	8
23	Camera	13+2MP Rear camera with AI Portrait	2021-08-08 17:03:21.683+00	2021-08-08 17:03:21.683+00	9
24	Memory, Storage & SIM	4GB RAM | 64GB storage expandable up to 512GB| Dual SIM with dual standby (4G+4G)	2021-08-08 17:03:21.683+00	2021-08-08 17:03:21.683+00	9
25	Battery	Android v10 operating system with 2.3GHz Mediatek Helio G35 octa core processor	2021-08-08 17:03:21.683+00	2021-08-08 17:03:21.683+00	9
26	Camera	13MP rear camera with AI portrait	2021-08-08 17:06:54.181+00	2021-08-08 17:06:54.181+00	10
27	Memory, Storage & SIM	2GB RAM, 32GB internal memory expandable up to 512GB	2021-08-08 17:06:54.181+00	2021-08-08 17:06:54.181+00	10
28	OC	Android v10	2021-08-08 17:06:54.181+00	2021-08-08 17:06:54.181+00	10
1	q	w	2021-07-19 20:18:03.658+00	2021-07-19 20:18:03.658+00	\N
29	Color	Black	2021-08-17 19:14:53.089+00	2021-08-17 19:14:53.089+00	11
30	Form Factor	Stand Alone	2021-08-17 19:14:53.089+00	2021-08-17 19:14:53.089+00	11
31	Product 	17.72 x 18.58 x 19.37 inches; 34.6 Pounds	2021-08-17 19:14:53.089+00	2021-08-17 19:14:53.089+00	11
32	Color	Stainless Steel	2021-08-17 19:17:31.892+00	2021-08-17 19:17:31.892+00	12
33	Product	18.25 x 19 x 33.13 inches; 62.8 Pounds	2021-08-17 19:17:31.893+00	2021-08-17 19:17:31.893+00	12
\.


--
-- TOC entry 3110 (class 0 OID 16444)
-- Dependencies: 209
-- Data for Name: devices; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.devices (id, name, price, rating, img, "createdAt", "updatedAt", "typeId", "brandId") FROM stdin;
9	Redmi 9	10000	0	70dda6de-6f0c-4cef-ae2f-03bde0b6606a.jpg	2021-08-08 17:03:21.503+00	2021-08-08 17:03:21.503+00	1	4
10	Galaxy M51	26000	0	670e139a-1a56-45a3-9124-b9dc7397e64c.jpg	2021-08-08 17:06:53.987+00	2021-08-08 17:06:53.987+00	1	1
7	Galaxy M21	13300	0	095f18f2-280f-4b94-b740-d2756bc77ee1.jpg	2021-08-08 13:57:23.494+00	2021-08-08 13:57:23.494+00	1	1
5	IdeaPad Slim 5	34400	2	a46429df-eb2c-401d-a7c3-083a15b5d70d.jpg	2021-08-08 13:25:59.219+00	2021-08-16 18:59:40.817+00	3	3
6	Redmi Note 10	6700	3	c107753d-507b-471e-b805-037af1d0d5d7.jpg	2021-08-08 13:52:42.187+00	2021-08-16 19:06:12.483+00	1	4
4	IdeaPad Slim 3	2100	3	af378254-0e9e-490a-ae8a-5ee3ff4d8ad8.jpg	2021-08-08 13:04:49.643+00	2021-08-16 19:06:58.453+00	3	3
8	Galaxy M11	12000	2	b4be7c66-04de-4c55-96bc-62e3d0bc771a.jpg	2021-08-08 17:00:37.275+00	2021-08-16 19:07:18.526+00	1	1
11	WHS-65LB1 Compact	12300	0	bdda7f4e-4fba-4e2d-a424-7f38970eebe8.jpg	2021-08-17 19:14:52.935+00	2021-08-17 19:14:52.935+00	2	1
12	NewAir Beverage	9100	0	bb55a7bf-c8ea-4782-8b5d-a60c94edc716.jpg	2021-08-17 19:17:31.755+00	2021-08-17 19:17:31.755+00	2	4
\.


--
-- TOC entry 3114 (class 0 OID 16486)
-- Dependencies: 213
-- Data for Name: ratings; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.ratings (id, rate, "createdAt", "updatedAt", "userId", "deviceId") FROM stdin;
\.


--
-- TOC entry 3122 (class 0 OID 32770)
-- Dependencies: 221
-- Data for Name: tokens; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tokens (id, "refreshToken", "createdAt", "updatedAt", "userId") FROM stdin;
4	eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiZW1haWwiOiJ4IiwidXNlcm5hbWUiOiJhbGV4Iiwicm9sZSI6IkFETUlOIiwiaWF0IjoxNjI5MjI4MzYxLCJleHAiOjE2MjkzMTQ3NjF9.PwCAPAwpA7J_DULuSqlFekttXNTEuZPdzym0bz1HeU4	2021-08-17 19:13:30.439+00	2021-08-17 19:26:01.78+00	8
\.


--
-- TOC entry 3118 (class 0 OID 16520)
-- Dependencies: 217
-- Data for Name: type_brands; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.type_brands (id, "createdAt", "updatedAt", "typeId", "brandId") FROM stdin;
\.


--
-- TOC entry 3106 (class 0 OID 16424)
-- Dependencies: 205
-- Data for Name: types; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.types (id, name, "createdAt", "updatedAt") FROM stdin;
1	smartphones	2021-07-07 15:29:16.159+00	2021-07-07 15:29:16.159+00
2	fridges	2021-07-07 15:56:16.556+00	2021-07-07 15:56:16.556+00
3	laptops	2021-08-08 12:57:30.17+00	2021-08-08 12:57:30.17+00
\.


--
-- TOC entry 3102 (class 0 OID 16397)
-- Dependencies: 201
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, email, password, role, "createdAt", "updatedAt", username, "isActivated", "activationLink") FROM stdin;
1	alex@gmail.com	$2b$05$jxiFy0WabHUjp9F7XB5NAOTTKAVakBWEMSoLHEP7I6Duq6EjFeW.O	USER	2021-07-09 17:18:34.985+00	2021-07-09 17:18:34.985+00	\N	\N	\N
3	alex1@gmail.com	$2b$05$WghD2zIP6QW.lwi9STk89.0tcDJ8EnCWSyqSnh1hX/D/dR575A4xq	USER	2021-07-09 17:21:16.022+00	2021-07-09 17:21:16.022+00	\N	\N	\N
4	q@q.com	$2b$05$490.79uAP8sKPFaV88G06OIULUQ2AtBZSKnli1LumrqLhRb/7rPJW	ADMIN	2021-07-18 16:48:14.549+00	2021-07-18 16:48:14.549+00	\N	\N	\N
5	w@1	$2b$05$hwJDpvN3crgzrNwCZRZO7OTkxcLLgknkr1hP8s0LveTF5BWeY62R.	ADMIN	2021-07-18 20:47:25.969+00	2021-07-18 20:47:25.969+00	\N	\N	\N
6	r@1	$2b$05$pedWY3zPh62QTCYLDBN3luTTKuiWNzHa5gHF5mwSs7SMVwtzn6MoW	ADMIN	2021-07-19 20:16:53.87+00	2021-07-19 20:16:53.87+00	\N	\N	\N
7	z	$2b$05$MwP7iXmlsPP7LxQ8RGGO3u7c.lGkse2rM0JkMihqQ2/YNX5GZgplm	ADMIN	2021-08-04 20:34:51.026+00	2021-08-04 20:34:51.026+00	\N	\N	\N
8	x	$2b$05$h1AeQ3XUQuM7BPAEjjmdnuFgimhPzQT6v1pmUmFYhgpxqlluP1v3C	ADMIN	2021-08-06 21:23:11.451+00	2021-08-06 21:23:11.451+00	alex	\N	\N
9	c	$2b$05$QiwZ1iPnjLt0zEEyuAScFuNx7aIh.kUbttRwTHj847sx3WrzBNBqK	USER	2021-08-08 15:44:56.488+00	2021-08-08 15:44:56.488+00	qt	\N	\N
10	e	$2b$05$xRrte7vaRbH1cxRNbri.ceXYToO.8tcn72kMFZC3Vt078KrwO8Yx2	USER	2021-08-08 15:47:36.64+00	2021-08-08 15:47:36.64+00	rrt	\N	\N
11	r	$2b$05$qk7YUpbY3jW5bJn5fOXttOvdZ8lQO3bnyc00W8ant9upKMgiRvOIO	USER	2021-08-08 15:48:49.687+00	2021-08-08 15:48:49.687+00	rqwe	\N	\N
12	t	$2b$05$1xcJ6SWxcPY5Qoh2uX/nke5ISzm9OTDTors4BMlAhbxmHTJ6ZPBUi	USER	2021-08-08 15:49:53.387+00	2021-08-08 15:49:53.387+00	t	\N	\N
15	alexandr.tereschenko2014@gmail.com	$2b$05$wNR9mDeBnGlvvp2feOSUieLHGynPDaarKPvi0lJ8.HiaDwNZcd12.	USER	2021-08-11 15:04:22.368+00	2021-08-11 15:06:51.661+00	alexandr	t	eea464a1-86c1-447f-9f02-1ba2583eb657
\.


--
-- TOC entry 3139 (class 0 OID 0)
-- Dependencies: 210
-- Name: basket_devices_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.basket_devices_id_seq', 1, false);


--
-- TOC entry 3140 (class 0 OID 0)
-- Dependencies: 202
-- Name: baskets_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.baskets_id_seq', 14, true);


--
-- TOC entry 3141 (class 0 OID 0)
-- Dependencies: 206
-- Name: brands_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.brands_id_seq', 4, true);


--
-- TOC entry 3142 (class 0 OID 0)
-- Dependencies: 218
-- Name: comments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.comments_id_seq', 9, true);


--
-- TOC entry 3143 (class 0 OID 0)
-- Dependencies: 214
-- Name: device_infos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.device_infos_id_seq', 33, true);


--
-- TOC entry 3144 (class 0 OID 0)
-- Dependencies: 208
-- Name: devices_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.devices_id_seq', 12, true);


--
-- TOC entry 3145 (class 0 OID 0)
-- Dependencies: 212
-- Name: ratings_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.ratings_id_seq', 1, false);


--
-- TOC entry 3146 (class 0 OID 0)
-- Dependencies: 220
-- Name: tokens_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tokens_id_seq', 4, true);


--
-- TOC entry 3147 (class 0 OID 0)
-- Dependencies: 216
-- Name: type_brands_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.type_brands_id_seq', 1, false);


--
-- TOC entry 3148 (class 0 OID 0)
-- Dependencies: 204
-- Name: types_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.types_id_seq', 3, true);


--
-- TOC entry 3149 (class 0 OID 0)
-- Dependencies: 200
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 15, true);


--
-- TOC entry 2945 (class 2606 OID 16473)
-- Name: basket_devices basket_devices_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.basket_devices
    ADD CONSTRAINT basket_devices_pkey PRIMARY KEY (id);


--
-- TOC entry 2931 (class 2606 OID 16416)
-- Name: baskets baskets_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.baskets
    ADD CONSTRAINT baskets_pkey PRIMARY KEY (id);


--
-- TOC entry 2937 (class 2606 OID 16441)
-- Name: brands brands_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.brands
    ADD CONSTRAINT brands_name_key UNIQUE (name);


--
-- TOC entry 2939 (class 2606 OID 16439)
-- Name: brands brands_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.brands
    ADD CONSTRAINT brands_pkey PRIMARY KEY (id);


--
-- TOC entry 2955 (class 2606 OID 24583)
-- Name: comments comments_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comments
    ADD CONSTRAINT comments_pkey PRIMARY KEY (id);


--
-- TOC entry 2949 (class 2606 OID 16512)
-- Name: device_infos device_infos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.device_infos
    ADD CONSTRAINT device_infos_pkey PRIMARY KEY (id);


--
-- TOC entry 2941 (class 2606 OID 16455)
-- Name: devices devices_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.devices
    ADD CONSTRAINT devices_name_key UNIQUE (name);


--
-- TOC entry 2943 (class 2606 OID 16453)
-- Name: devices devices_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.devices
    ADD CONSTRAINT devices_pkey PRIMARY KEY (id);


--
-- TOC entry 2947 (class 2606 OID 16491)
-- Name: ratings ratings_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ratings
    ADD CONSTRAINT ratings_pkey PRIMARY KEY (id);


--
-- TOC entry 2957 (class 2606 OID 32775)
-- Name: tokens tokens_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tokens
    ADD CONSTRAINT tokens_pkey PRIMARY KEY (id);


--
-- TOC entry 2951 (class 2606 OID 16525)
-- Name: type_brands type_brands_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.type_brands
    ADD CONSTRAINT type_brands_pkey PRIMARY KEY (id);


--
-- TOC entry 2953 (class 2606 OID 16527)
-- Name: type_brands type_brands_typeId_brandId_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.type_brands
    ADD CONSTRAINT "type_brands_typeId_brandId_key" UNIQUE ("typeId", "brandId");


--
-- TOC entry 2933 (class 2606 OID 16431)
-- Name: types types_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.types
    ADD CONSTRAINT types_name_key UNIQUE (name);


--
-- TOC entry 2935 (class 2606 OID 16429)
-- Name: types types_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.types
    ADD CONSTRAINT types_pkey PRIMARY KEY (id);


--
-- TOC entry 2927 (class 2606 OID 16408)
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- TOC entry 2929 (class 2606 OID 16406)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- TOC entry 2961 (class 2606 OID 16474)
-- Name: basket_devices basket_devices_basketId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.basket_devices
    ADD CONSTRAINT "basket_devices_basketId_fkey" FOREIGN KEY ("basketId") REFERENCES public.baskets(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 2962 (class 2606 OID 16479)
-- Name: basket_devices basket_devices_deviceId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.basket_devices
    ADD CONSTRAINT "basket_devices_deviceId_fkey" FOREIGN KEY ("deviceId") REFERENCES public.devices(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 2958 (class 2606 OID 16417)
-- Name: baskets baskets_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.baskets
    ADD CONSTRAINT "baskets_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 2968 (class 2606 OID 24584)
-- Name: comments comments_deviceId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comments
    ADD CONSTRAINT "comments_deviceId_fkey" FOREIGN KEY ("deviceId") REFERENCES public.devices(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 2969 (class 2606 OID 24589)
-- Name: comments comments_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comments
    ADD CONSTRAINT "comments_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 2965 (class 2606 OID 16513)
-- Name: device_infos device_infos_deviceId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.device_infos
    ADD CONSTRAINT "device_infos_deviceId_fkey" FOREIGN KEY ("deviceId") REFERENCES public.devices(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 2960 (class 2606 OID 16461)
-- Name: devices devices_brandId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.devices
    ADD CONSTRAINT "devices_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES public.brands(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 2959 (class 2606 OID 16456)
-- Name: devices devices_typeId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.devices
    ADD CONSTRAINT "devices_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES public.types(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 2964 (class 2606 OID 16497)
-- Name: ratings ratings_deviceId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ratings
    ADD CONSTRAINT "ratings_deviceId_fkey" FOREIGN KEY ("deviceId") REFERENCES public.devices(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 2963 (class 2606 OID 16492)
-- Name: ratings ratings_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ratings
    ADD CONSTRAINT "ratings_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 2970 (class 2606 OID 32776)
-- Name: tokens tokens_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tokens
    ADD CONSTRAINT "tokens_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 2967 (class 2606 OID 16533)
-- Name: type_brands type_brands_brandId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.type_brands
    ADD CONSTRAINT "type_brands_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES public.brands(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 2966 (class 2606 OID 16528)
-- Name: type_brands type_brands_typeId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.type_brands
    ADD CONSTRAINT "type_brands_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES public.types(id) ON UPDATE CASCADE ON DELETE CASCADE;


-- Completed on 2021-09-19 16:13:14

--
-- PostgreSQL database dump complete
--

