PGDMP  ,    #    
            {            Seguimiento_egresados    16.1    16.1     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16742    Seguimiento_egresados    DATABASE     �   CREATE DATABASE "Seguimiento_egresados" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Mexico.1252';
 '   DROP DATABASE "Seguimiento_egresados";
                postgres    false            �            1259    16743    egresado    TABLE     �  CREATE TABLE public.egresado (
    nocontrol integer NOT NULL,
    nombres character varying(50) NOT NULL,
    apellidopaterno character varying(60) NOT NULL,
    apellidomaterno character varying(60) NOT NULL,
    fechanacimiento timestamp without time zone NOT NULL,
    sexo character varying(10) NOT NULL,
    estadocivil character varying NOT NULL,
    municipio character varying(100) NOT NULL,
    estado character varying(100) NOT NULL,
    telefono character varying(14) NOT NULL,
    titulado character varying NOT NULL,
    fechaegreso timestamp without time zone NOT NULL,
    carrera character varying(100) NOT NULL,
    especialidad character varying(100) NOT NULL,
    domicilio character varying(200) NOT NULL,
    cp integer
);
    DROP TABLE public.egresado;
       public         heap    postgres    false            �            1259    16879    encuesta    TABLE     �  CREATE TABLE public.encuesta (
    idencuesta integer NOT NULL,
    fecha date NOT NULL,
    pregunta1 character varying NOT NULL,
    pregunta2 character varying NOT NULL,
    pregunta3 character varying NOT NULL,
    pregunta4 character varying NOT NULL,
    pregunta5 character varying NOT NULL,
    pregunta6 character varying NOT NULL,
    pregunta7 character varying NOT NULL,
    pregunta8 character varying NOT NULL,
    pregunta9 character varying NOT NULL,
    pregunta10 character varying NOT NULL,
    pregunta11 character varying NOT NULL,
    pregunta12 character varying NOT NULL,
    pregunta13 character varying NOT NULL,
    pregunta14 character varying NOT NULL,
    pregunta15 character varying NOT NULL,
    nocontrol integer NOT NULL
);
    DROP TABLE public.encuesta;
       public         heap    postgres    false            �            1259    16878    encuesta_idencuesta_seq    SEQUENCE     �   CREATE SEQUENCE public.encuesta_idencuesta_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.encuesta_idencuesta_seq;
       public          postgres    false    219            �           0    0    encuesta_idencuesta_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.encuesta_idencuesta_seq OWNED BY public.encuesta.idencuesta;
          public          postgres    false    218            �            1259    16798    usuario_idusuario_seq    SEQUENCE     ~   CREATE SEQUENCE public.usuario_idusuario_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.usuario_idusuario_seq;
       public          postgres    false            �            1259    16774    usuario    TABLE     �   CREATE TABLE public.usuario (
    idusuario integer DEFAULT nextval('public.usuario_idusuario_seq'::regclass) NOT NULL,
    nip integer NOT NULL,
    privilegio character varying(20) NOT NULL,
    nocontrol_egresado integer
);
    DROP TABLE public.usuario;
       public         heap    postgres    false    217            $           2604    16882    encuesta idencuesta    DEFAULT     z   ALTER TABLE ONLY public.encuesta ALTER COLUMN idencuesta SET DEFAULT nextval('public.encuesta_idencuesta_seq'::regclass);
 B   ALTER TABLE public.encuesta ALTER COLUMN idencuesta DROP DEFAULT;
       public          postgres    false    219    218    219            �          0    16743    egresado 
   TABLE DATA           �   COPY public.egresado (nocontrol, nombres, apellidopaterno, apellidomaterno, fechanacimiento, sexo, estadocivil, municipio, estado, telefono, titulado, fechaegreso, carrera, especialidad, domicilio, cp) FROM stdin;
    public          postgres    false    215          �          0    16879    encuesta 
   TABLE DATA           �   COPY public.encuesta (idencuesta, fecha, pregunta1, pregunta2, pregunta3, pregunta4, pregunta5, pregunta6, pregunta7, pregunta8, pregunta9, pregunta10, pregunta11, pregunta12, pregunta13, pregunta14, pregunta15, nocontrol) FROM stdin;
    public          postgres    false    219   �       �          0    16774    usuario 
   TABLE DATA           Q   COPY public.usuario (idusuario, nip, privilegio, nocontrol_egresado) FROM stdin;
    public          postgres    false    216   �       �           0    0    encuesta_idencuesta_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.encuesta_idencuesta_seq', 5, true);
          public          postgres    false    218            �           0    0    usuario_idusuario_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.usuario_idusuario_seq', 6, true);
          public          postgres    false    217            &           2606    16749    egresado Egresado_pkey 
   CONSTRAINT     ]   ALTER TABLE ONLY public.egresado
    ADD CONSTRAINT "Egresado_pkey" PRIMARY KEY (nocontrol);
 B   ALTER TABLE ONLY public.egresado DROP CONSTRAINT "Egresado_pkey";
       public            postgres    false    215            *           2606    16886    encuesta encuesta_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.encuesta
    ADD CONSTRAINT encuesta_pkey PRIMARY KEY (idencuesta);
 @   ALTER TABLE ONLY public.encuesta DROP CONSTRAINT encuesta_pkey;
       public            postgres    false    219            (           2606    16779    usuario usuario_pkey 
   CONSTRAINT     Y   ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_pkey PRIMARY KEY (idusuario);
 >   ALTER TABLE ONLY public.usuario DROP CONSTRAINT usuario_pkey;
       public            postgres    false    216            +           2606    16792    usuario fk_egresado    FK CONSTRAINT     �   ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT fk_egresado FOREIGN KEY (nocontrol_egresado) REFERENCES public.egresado(nocontrol) NOT VALID;
 =   ALTER TABLE ONLY public.usuario DROP CONSTRAINT fk_egresado;
       public          postgres    false    215    4646    216            ,           2606    16887    encuesta fk_egresado    FK CONSTRAINT        ALTER TABLE ONLY public.encuesta
    ADD CONSTRAINT fk_egresado FOREIGN KEY (nocontrol) REFERENCES public.egresado(nocontrol);
 >   ALTER TABLE ONLY public.encuesta DROP CONSTRAINT fk_egresado;
       public          postgres    false    215    219    4646            �   �   x�E̱N�@���y
�0��5!0��E-�*b@,ncU��|��
�Ӄ� ��?|�fD�5̹���lcR�`~�2+��q!"��5X��3�m�G��u�y��@g���d�����&z��!8_�^ʟ�����/-� ���(i%���O����(�2����q���<�BLY;��M�}���n�ϻ��~�=>      �      x������ � �      �   >   x�3�4664�tL����,.)JL�/���2�02037�tM/J-�r���r��qqq ��     