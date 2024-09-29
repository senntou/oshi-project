--
-- PostgreSQL database dump
--

-- Dumped from database version 15.1
-- Dumped by pg_dump version 15.1

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

--
-- Data for Name: agency; Type: TABLE DATA; Schema: public; Owner: root
--

INSERT INTO public.agency VALUES ('488bb1f3-6fa9-4691-8f1c-409b51299e91', 'アクセルワン', '2024-09-29 15:44:29.906719', '2024-09-29 15:44:29.906719');
INSERT INTO public.agency VALUES ('dbfd7cbc-3a3b-4928-8106-92de2290f217', 'Sony Music Artists', '2024-09-29 15:45:51.300369', '2024-09-29 15:45:51.300369');


--
-- Data for Name: actor; Type: TABLE DATA; Schema: public; Owner: root
--

INSERT INTO public.actor VALUES ('9e4285e9-1190-4139-925d-93f06dcc5e7f', '水瀬いのり', 'みなせいのり', 'いのり', '水瀬', 'いのり', 'みなせ', 'FEMALE', '488bb1f3-6fa9-4691-8f1c-409b51299e91', NULL, '2024-09-29 15:45:30.070551', '2024-09-29 15:45:30.070551');
INSERT INTO public.actor VALUES ('2ed86717-1962-477d-929b-1807fe3481c9', '楠木ともり', 'くすのきともり', 'ともり', '楠木', 'ともり', 'くすのき', 'FEMALE', 'dbfd7cbc-3a3b-4928-8106-92de2290f217', NULL, '2024-09-29 15:46:04.07978', '2024-09-29 15:46:04.07978');
INSERT INTO public.actor VALUES ('bf87001d-7373-4beb-b8ee-a4d83cf37d77', '小宮山あかり', 'こみやまあかり', 'あかり', '小宮山', 'あかり', 'こみやま', 'FEMALE', 'dbfd7cbc-3a3b-4928-8106-92de2290f217', NULL, '2024-09-29 15:46:30.228756', '2024-09-29 15:46:30.228756');


--
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: root
--



--
-- Data for Name: appearing_content; Type: TABLE DATA; Schema: public; Owner: root
--



--
-- Data for Name: content_date; Type: TABLE DATA; Schema: public; Owner: root
--



--
-- Data for Name: create_content_date; Type: TABLE DATA; Schema: public; Owner: root
--



--
-- Data for Name: flyway_schema_history; Type: TABLE DATA; Schema: public; Owner: root
--

INSERT INTO public.flyway_schema_history VALUES (1, '01', 'init tables', 'SQL', 'V01__init_tables.sql', 225619792, 'root', '2024-09-29 15:44:02.708883', 81, true);


--
-- Data for Name: update_actor; Type: TABLE DATA; Schema: public; Owner: root
--



--
-- Data for Name: update_appearing_content; Type: TABLE DATA; Schema: public; Owner: root
--



--
-- PostgreSQL database dump complete
--

