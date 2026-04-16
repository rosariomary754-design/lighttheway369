/**
 * THE LIGHTHOUSE — app.js
 * Anonymous Immigration Resource Website
 * 
 * PRIVACY PRINCIPLES:
 *  - No cookies set
 *  - No localStorage or sessionStorage used for PII
 *  - No analytics calls
 *  - No external tracking scripts
 *  - No IP logging (server responsibility)
 *  - Zip/region field never sent to any server
 */

'use strict';

/* =========================================================
   1. MULTILINGUAL CONTENT
   ========================================================= */

const TRANSLATIONS = {
  en: {
    privacyBanner: '🔒 We do not collect, store, or share your information. No login required. No tracking.',
    siteTitle: 'The Lighthouse',
    navResources: 'Resources',
    navRights: 'Know Your Rights',
    navFind: 'Find Near Me',
    heroTitle: 'You Are Not Alone.<br/>Help Is Here.',
    heroSub: 'Free resources for food, shelter, legal help, education, and citizenship — in your language, in your area. No names. No data. No fear.',
    privacyPill: '🔒 Anonymous & Private · No Data Stored · No Tracking',
    searchTitle: 'Find Resources Near You',
    searchNote: 'Enter only your zip code or region — we never ask for your name or address.',
    searchPlaceholder: 'Search resources, services, or topics...',
    zipPlaceholder: 'Zip code or city/region (optional)',
    searchBtnLabel: 'Search',
    resourcesTitle: 'Available Resources',
    resourcesSubtitle: 'Click any category to explore free services in your area.',
    foodTitle: 'Food Resources',
    foodDesc: 'Food banks, pantries, free meals',
    shelterTitle: 'Shelter & Housing',
    shelterDesc: 'Emergency shelter, transitional housing',
    legalTitle: 'Legal Aid & Immigration',
    legalDesc: 'Free legal help, citizenship, asylum',
    educationTitle: 'Education',
    educationDesc: 'Schools, ESL, adult learning, scholarships',
    childcareTitle: 'Childcare & Family',
    childcareDesc: 'Childcare, health, WIC, family services',
    rightsTitle: 'Know Your Rights',
    rightsDesc: 'Your rights with immigration officers — in many languages',
    privacyTitle: 'Our Privacy Promise',
    pp1: 'We do not collect your name, address, or phone number.',
    pp2: 'We do not store IP addresses or location data.',
    pp3: 'We do not use cookies or tracking tools.',
    pp4: 'We never sell or share your information — ever.',
    pp5: 'This site is anonymous by design. Use it freely and safely.',
    pp6: 'For extra privacy, use the Tor Browser or a VPN.',
    rightsLangLabel: 'Select your language / Seleccione su idioma:',
    rightsDownloadLabel: 'Download printable rights card (no internet needed):',
    footerDesc: 'A safe, anonymous resource hub. No login. No data. Just help.',
    footerLinksTitle: 'Quick Links',
    footerHotlinesTitle: 'Emergency Hotlines',
    footerPrivacyTitle: 'Privacy & Security',
    footerPrivacyText: 'This site uses no analytics, no cookies, no login. Zero data collected.',
    footerBottom: 'The Lighthouse is a free public resource. Not affiliated with any government agency. Information is provided for educational purposes only. Always consult a qualified immigration attorney for legal advice.',
    currentLang: 'English',
  },
  es: {
    privacyBanner: '🔒 No recopilamos, almacenamos ni compartimos su información. Sin inicio de sesión. Sin rastreo.',
    siteTitle: 'El Faro',
    navResources: 'Recursos',
    navRights: 'Sus Derechos',
    navFind: 'Buscar Cerca',
    heroTitle: 'No Estás Solo.<br/>Hay Ayuda Aquí.',
    heroSub: 'Recursos gratuitos para comida, vivienda, ayuda legal, educación y ciudadanía — en tu idioma y en tu área. Sin nombres. Sin datos. Sin miedo.',
    privacyPill: '🔒 Anónimo y Privado · Sin Datos Guardados · Sin Rastreo',
    searchTitle: 'Encuentra Recursos Cerca de Ti',
    searchNote: 'Solo ingresa tu código postal o región — nunca pedimos tu nombre ni dirección.',
    searchPlaceholder: 'Buscar recursos, servicios o temas...',
    zipPlaceholder: 'Código postal o ciudad/región (opcional)',
    searchBtnLabel: 'Buscar',
    resourcesTitle: 'Recursos Disponibles',
    resourcesSubtitle: 'Haz clic en cualquier categoría para explorar servicios gratuitos.',
    foodTitle: 'Recursos Alimenticios',
    foodDesc: 'Bancos de alimentos, despensas, comidas gratis',
    shelterTitle: 'Refugio y Vivienda',
    shelterDesc: 'Refugio de emergencia, vivienda de transición',
    legalTitle: 'Ayuda Legal e Inmigración',
    legalDesc: 'Ayuda legal gratuita, ciudadanía, asilo',
    educationTitle: 'Educación',
    educationDesc: 'Escuelas, inglés, aprendizaje para adultos',
    childcareTitle: 'Cuidado Infantil y Familia',
    childcareDesc: 'Cuidado infantil, salud, WIC, servicios familiares',
    rightsTitle: 'Conozca Sus Derechos',
    rightsDesc: 'Sus derechos ante oficiales de inmigración — en muchos idiomas',
    privacyTitle: 'Nuestra Promesa de Privacidad',
    pp1: 'No recopilamos su nombre, dirección ni número de teléfono.',
    pp2: 'No almacenamos direcciones IP ni datos de ubicación.',
    pp3: 'No usamos cookies ni herramientas de rastreo.',
    pp4: 'Nunca vendemos ni compartimos su información.',
    pp5: 'Este sitio es anónimo por diseño. Úselo con libertad y seguridad.',
    pp6: 'Para mayor privacidad, use el navegador Tor o una VPN.',
    rightsLangLabel: 'Seleccione su idioma:',
    rightsDownloadLabel: 'Descargue la tarjeta de derechos imprimible:',
    footerDesc: 'Un centro de recursos seguro y anónimo. Sin login. Sin datos. Solo ayuda.',
    footerLinksTitle: 'Enlaces Rápidos',
    footerHotlinesTitle: 'Líneas de Emergencia',
    footerPrivacyTitle: 'Privacidad y Seguridad',
    footerPrivacyText: 'Este sitio no usa análisis, cookies ni inicio de sesión. Cero datos recopilados.',
    footerBottom: 'El Faro es un recurso público gratuito. No está afiliado con ninguna agencia gubernamental. La información es solo para fines educativos.',
    currentLang: 'Español',
  },
  fr: {
    privacyBanner: '🔒 Nous ne collectons, ne stockons ni ne partageons vos informations. Sans connexion. Sans suivi.',
    siteTitle: 'Le Phare',
    navResources: 'Ressources',
    navRights: 'Vos Droits',
    navFind: 'Trouver Près',
    heroTitle: 'Vous N\'êtes Pas Seul(e).<br/>L\'aide Est Ici.',
    heroSub: 'Ressources gratuites pour la nourriture, le logement, l\'aide juridique, l\'éducation et la citoyenneté — dans votre langue, dans votre région.',
    privacyPill: '🔒 Anonyme et Privé · Sans Données · Sans Suivi',
    searchTitle: 'Trouvez des Ressources Près de Chez Vous',
    searchNote: 'Entrez uniquement votre code postal — nous ne demandons jamais votre nom.',
    searchPlaceholder: 'Rechercher des ressources, services ou sujets...',
    zipPlaceholder: 'Code postal ou ville/région (facultatif)',
    searchBtnLabel: 'Rechercher',
    resourcesTitle: 'Ressources Disponibles',
    resourcesSubtitle: 'Cliquez sur une catégorie pour explorer les services gratuits.',
    foodTitle: 'Ressources Alimentaires',
    foodDesc: 'Banques alimentaires, garde-manger, repas gratuits',
    shelterTitle: 'Hébergement et Logement',
    shelterDesc: "Hébergement d'urgence, logement transitoire",
    legalTitle: "Aide Juridique et Immigration",
    legalDesc: "Aide juridique gratuite, citoyenneté, asile",
    educationTitle: 'Éducation',
    educationDesc: 'Écoles, apprentissage de l\'anglais, bourses',
    childcareTitle: 'Garde d\'Enfants et Famille',
    childcareDesc: 'Garde d\'enfants, santé, services familiaux',
    rightsTitle: 'Connaissez Vos Droits',
    rightsDesc: 'Vos droits face aux agents d\'immigration — en plusieurs langues',
    privacyTitle: 'Notre Engagement de Confidentialité',
    pp1: 'Nous ne collectons pas votre nom, adresse ou numéro de téléphone.',
    pp2: 'Nous ne stockons pas les adresses IP ni les données de localisation.',
    pp3: 'Nous n\'utilisons pas de cookies ni d\'outils de suivi.',
    pp4: 'Nous ne vendons ni ne partageons jamais vos informations.',
    pp5: 'Ce site est anonyme par conception. Utilisez-le librement.',
    pp6: 'Pour plus de confidentialité, utilisez le navigateur Tor ou un VPN.',
    rightsLangLabel: 'Sélectionnez votre langue:',
    rightsDownloadLabel: 'Téléchargez la carte des droits imprimable:',
    footerDesc: 'Un centre de ressources sûr et anonyme. Sans connexion. Sans données.',
    footerLinksTitle: 'Liens Rapides',
    footerHotlinesTitle: 'Lignes d\'Urgence',
    footerPrivacyTitle: 'Confidentialité et Sécurité',
    footerPrivacyText: 'Ce site n\'utilise aucune analyse, cookie ou connexion. Zéro donnée collectée.',
    footerBottom: 'Le Phare est une ressource publique gratuite. Non affilié à aucune agence gouvernementale.',
    currentLang: 'Français',
  },
  zh: {
    privacyBanner: '🔒 我们不收集、存储或共享您的信息。无需登录。无追踪。',
    siteTitle: '灯塔',
    navResources: '资源',
    navRights: '了解您的权利',
    navFind: '附近查找',
    heroTitle: '您并不孤单。<br/>帮助就在这里。',
    heroSub: '免费提供食品、住所、法律援助、教育和公民身份资源——用您的语言，在您的地区。无需姓名、无数据收集、无恐惧。',
    privacyPill: '🔒 匿名私密 · 不存储数据 · 无追踪',
    searchTitle: '在您附近查找资源',
    searchNote: '只需输入邮政编码或地区——我们从不询问您的姓名或地址。',
    searchPlaceholder: '搜索资源、服务或主题...',
    zipPlaceholder: '邮政编码或城市/地区（可选）',
    searchBtnLabel: '搜索',
    resourcesTitle: '可用资源',
    resourcesSubtitle: '点击任意类别，探索您所在地区的免费服务。',
    foodTitle: '食物资源',
    foodDesc: '食物银行、食品储藏室、免费餐食',
    shelterTitle: '住所与住房',
    shelterDesc: '紧急住所、过渡性住房',
    legalTitle: '法律援助与移民',
    legalDesc: '免费法律援助、公民身份、庇护',
    educationTitle: '教育',
    educationDesc: '学校、英语课程、成人学习、奖学金',
    childcareTitle: '儿童保育与家庭',
    childcareDesc: '儿童保育、医疗、WIC、家庭服务',
    rightsTitle: '了解您的权利',
    rightsDesc: '面对移民官员时的权利——多语言版本',
    privacyTitle: '我们的隐私承诺',
    pp1: '我们不收集您的姓名、地址或电话号码。',
    pp2: '我们不存储IP地址或位置数据。',
    pp3: '我们不使用Cookie或追踪工具。',
    pp4: '我们永远不出售或共享您的信息。',
    pp5: '本网站设计上即为匿名。请放心使用。',
    pp6: '如需额外隐私保护，请使用Tor浏览器或VPN。',
    rightsLangLabel: '请选择您的语言：',
    rightsDownloadLabel: '下载可打印的权利卡片：',
    footerDesc: '安全、匿名的资源中心。无需登录。无数据收集。只有帮助。',
    footerLinksTitle: '快速链接',
    footerHotlinesTitle: '紧急热线',
    footerPrivacyTitle: '隐私与安全',
    footerPrivacyText: '本网站不使用任何分析工具、Cookie或登录。零数据收集。',
    footerBottom: '灯塔是一项免费公共资源。与任何政府机构无关。所提供信息仅供教育目的。',
    currentLang: '中文',
  },
  ht: {
    privacyBanner: '🔒 Nou pa kolekte, estoke, ni pataje okenn enfòmasyon ou. Pa bezwen konekte. Pa gen siveyans.',
    siteTitle: 'Faro a',
    navResources: 'Resous',
    navRights: 'Dwa Ou Yo',
    navFind: 'Jwenn Prè Mwen',
    heroTitle: 'Ou Pa Poukont Ou.<br/>Èd La Isit.',
    heroSub: 'Resous gratis pou manje, lojman, èd legal, edikasyon ak sitwayennte — nan lang ou, nan zòn ou. Pa gen non. Pa gen done. Pa gen pè.',
    privacyPill: '🔒 Anonim & Prive · Pa gen Done Estoke · Pa gen Swivi',
    searchTitle: 'Jwenn Resous Prè Ou',
    searchNote: 'Antre sèlman kòd postal ou oswa rejyon ou — nou pa janm mande non ou.',
    searchPlaceholder: 'Chèche resous, sèvis oswa sijè...',
    zipPlaceholder: 'Kòd postal oswa vil/rejyon (opsyonèl)',
    searchBtnLabel: 'Chèche',
    resourcesTitle: 'Resous Disponib',
    resourcesSubtitle: 'Klike sou nenpòt kategori pou eksplore sèvis gratis.',
    foodTitle: 'Resous Manje',
    foodDesc: 'Bank manje, depo manje, repa gratis',
    shelterTitle: 'Abri ak Lojman',
    shelterDesc: 'Abri ijans, lojman tranzisyon',
    legalTitle: 'Èd Legal ak Imigrasyon',
    legalDesc: 'Èd legal gratis, sitwayennte, azil',
    educationTitle: 'Edikasyon',
    educationDesc: 'Lekòl, klas angle, aprantisaj pou granmoun',
    childcareTitle: 'Swen Timoun ak Fanmi',
    childcareDesc: 'Swen timoun, sante, WIC, sèvis fanmi',
    rightsTitle: 'Konnen Dwa Ou Yo',
    rightsDesc: 'Dwa ou devan ajan imigrasyon — nan plizyè lang',
    privacyTitle: 'Pwomès Konfidansyalite Nou',
    pp1: 'Nou pa kolekte non ou, adrès ou, ni nimewo telefòn ou.',
    pp2: 'Nou pa estoke adrès IP ni done lokalizasyon.',
    pp3: 'Nou pa itilize cookies ni zouti swivi.',
    pp4: 'Nou pa janm vann ni pataje enfòmasyon ou.',
    pp5: 'Sit sa a anonim pa konsepsyon. Itilize l lib.',
    pp6: 'Pou plis konfidansyalite, itilize Tor Browser oswa yon VPN.',
    rightsLangLabel: 'Chwazi lang ou:',
    rightsDownloadLabel: 'Telechaje kat dwa ou kapab enprime:',
    footerDesc: 'Yon sant resous ki an sekirite ak anonim. Pa gen koneksyon. Pa gen done.',
    footerLinksTitle: 'Lyen Rapid',
    footerHotlinesTitle: 'Nimewo Ijans',
    footerPrivacyTitle: 'Konfidansyalite ak Sekirite',
    footerPrivacyText: 'Sit sa a pa itilize okenn analiz, cookie, ni koneksyon. Zewo done kolekte.',
    footerBottom: 'Faro a se yon resous piblik gratis. Pa gen rapò ak okenn ajans gouvènman.',
    currentLang: 'Kreyòl',
  },
  pt: {
    privacyBanner: '🔒 Não coletamos, armazenamos nem compartilhamos suas informações. Sem login. Sem rastreamento.',
    siteTitle: 'O Farol',
    navResources: 'Recursos',
    navRights: 'Seus Direitos',
    navFind: 'Encontrar Perto',
    heroTitle: 'Você Não Está Sozinho.<br/>A Ajuda Está Aqui.',
    heroSub: 'Recursos gratuitos para alimentação, abrigo, ajuda jurídica, educação e cidadania — no seu idioma, na sua região. Sem nomes. Sem dados. Sem medo.',
    privacyPill: '🔒 Anônimo e Privado · Sem Dados · Sem Rastreamento',
    searchTitle: 'Encontre Recursos Perto de Você',
    searchNote: 'Digite apenas o CEP ou região — nunca pedimos seu nome ou endereço.',
    searchPlaceholder: 'Pesquisar recursos, serviços ou tópicos...',
    zipPlaceholder: 'CEP ou cidade/região (opcional)',
    searchBtnLabel: 'Pesquisar',
    resourcesTitle: 'Recursos Disponíveis',
    resourcesSubtitle: 'Clique em qualquer categoria para explorar serviços gratuitos.',
    foodTitle: 'Recursos Alimentares',
    foodDesc: 'Bancos de alimentos, despensas, refeições gratuitas',
    shelterTitle: 'Abrigo e Moradia',
    shelterDesc: 'Abrigo de emergência, habitação transitória',
    legalTitle: 'Assistência Jurídica e Imigração',
    legalDesc: 'Ajuda jurídica gratuita, cidadania, asilo',
    educationTitle: 'Educação',
    educationDesc: 'Escolas, inglês, aprendizado adulto, bolsas',
    childcareTitle: 'Cuidados Infantis e Família',
    childcareDesc: 'Creche, saúde, WIC, serviços familiares',
    rightsTitle: 'Conheça Seus Direitos',
    rightsDesc: 'Seus direitos perante agentes de imigração — em vários idiomas',
    privacyTitle: 'Nossa Promessa de Privacidade',
    pp1: 'Não coletamos seu nome, endereço ou telefone.',
    pp2: 'Não armazenamos endereços IP ou dados de localização.',
    pp3: 'Não usamos cookies ou ferramentas de rastreamento.',
    pp4: 'Nunca vendemos ou compartilhamos suas informações.',
    pp5: 'Este site é anônimo por design. Use-o com liberdade e segurança.',
    pp6: 'Para mais privacidade, use o Tor Browser ou uma VPN.',
    rightsLangLabel: 'Selecione seu idioma:',
    rightsDownloadLabel: 'Baixe o cartão de direitos imprimível:',
    footerDesc: 'Um centro de recursos seguro e anônimo. Sem login. Sem dados. Só ajuda.',
    footerLinksTitle: 'Links Rápidos',
    footerHotlinesTitle: 'Linhas de Emergência',
    footerPrivacyTitle: 'Privacidade e Segurança',
    footerPrivacyText: 'Este site não usa análises, cookies ou login. Zero dados coletados.',
    footerBottom: 'O Farol é um recurso público gratuito. Não é afiliado a nenhuma agência governamental.',
    currentLang: 'Português',
  },
  ar: {
    privacyBanner: '🔒 نحن لا نجمع أو نخزن أو نشارك معلوماتك. لا تسجيل دخول. لا تتبع.',
    siteTitle: 'المنارة',
    navResources: 'الموارد',
    navRights: 'حقوقك',
    navFind: 'ابحث بالقرب',
    heroTitle: 'أنت لست وحدك.<br/>المساعدة هنا.',
    heroSub: 'موارد مجانية للغذاء والمأوى والمساعدة القانونية والتعليم والجنسية — بلغتك، في منطقتك. لا أسماء. لا بيانات. لا خوف.',
    privacyPill: '🔒 مجهول وخاص · لا بيانات مخزنة · لا تتبع',
    searchTitle: 'ابحث عن موارد قريبة منك',
    searchNote: 'أدخل فقط الرمز البريدي أو المنطقة — لن نطلب منك اسمك أو عنوانك أبداً.',
    searchPlaceholder: 'ابحث عن موارد أو خدمات أو مواضيع...',
    zipPlaceholder: 'الرمز البريدي أو المدينة/المنطقة (اختياري)',
    searchBtnLabel: 'بحث',
    resourcesTitle: 'الموارد المتاحة',
    resourcesSubtitle: 'انقر على أي فئة لاستكشاف الخدمات المجانية.',
    foodTitle: 'موارد الغذاء',
    foodDesc: 'بنوك الغذاء، المخازن، الوجبات المجانية',
    shelterTitle: 'المأوى والسكن',
    shelterDesc: 'مأوى الطوارئ، السكن الانتقالي',
    legalTitle: 'المساعدة القانونية والهجرة',
    legalDesc: 'مساعدة قانونية مجانية، الجنسية، اللجوء',
    educationTitle: 'التعليم',
    educationDesc: 'المدارس، تعلم الإنجليزية، التعلم للبالغين',
    childcareTitle: 'رعاية الأطفال والأسرة',
    childcareDesc: 'رعاية الأطفال، الصحة، WIC، خدمات الأسرة',
    rightsTitle: 'اعرف حقوقك',
    rightsDesc: 'حقوقك أمام ضباط الهجرة — بعدة لغات',
    privacyTitle: 'وعدنا بالخصوصية',
    pp1: 'نحن لا نجمع اسمك أو عنوانك أو رقم هاتفك.',
    pp2: 'لا نخزن عناوين IP أو بيانات الموقع.',
    pp3: 'لا نستخدم ملفات تعريف الارتباط أو أدوات التتبع.',
    pp4: 'لن نبيع أو نشارك معلوماتك أبداً.',
    pp5: 'هذا الموقع مجهول الهوية بتصميمه. استخدمه بحرية.',
    pp6: 'للحصول على مزيد من الخصوصية، استخدم متصفح Tor أو VPN.',
    rightsLangLabel: 'اختر لغتك:',
    rightsDownloadLabel: 'قم بتنزيل بطاقة الحقوق القابلة للطباعة:',
    footerDesc: 'مركز موارد آمن ومجهول الهوية. لا تسجيل دخول. لا بيانات. فقط مساعدة.',
    footerLinksTitle: 'روابط سريعة',
    footerHotlinesTitle: 'خطوط الطوارئ',
    footerPrivacyTitle: 'الخصوصية والأمان',
    footerPrivacyText: 'لا يستخدم هذا الموقع أي تحليلات أو ملفات تعريف ارتباط أو تسجيل دخول.',
    footerBottom: 'المنارة مورد عام مجاني. غير تابع لأي وكالة حكومية.',
    currentLang: 'العربية',
    dir: 'rtl',
  },
  vi: {
    privacyBanner: '🔒 Chúng tôi không thu thập, lưu trữ hoặc chia sẻ thông tin của bạn. Không cần đăng nhập. Không theo dõi.',
    siteTitle: 'Ngọn Hải Đăng',
    navResources: 'Tài Nguyên',
    navRights: 'Quyền Của Bạn',
    navFind: 'Tìm Gần Đây',
    heroTitle: 'Bạn Không Đơn Độc.<br/>Sự Giúp Đỡ Ở Đây.',
    heroSub: 'Tài nguyên miễn phí về thực phẩm, nhà ở, trợ giúp pháp lý, giáo dục và quyền công dân — bằng ngôn ngữ của bạn, tại khu vực của bạn.',
    privacyPill: '🔒 Ẩn Danh & Riêng Tư · Không Lưu Dữ Liệu · Không Theo Dõi',
    searchTitle: 'Tìm Tài Nguyên Gần Bạn',
    searchNote: 'Chỉ nhập mã bưu chính hoặc khu vực — chúng tôi không bao giờ hỏi tên bạn.',
    searchPlaceholder: 'Tìm kiếm tài nguyên, dịch vụ hoặc chủ đề...',
    zipPlaceholder: 'Mã bưu chính hoặc thành phố/khu vực (tùy chọn)',
    searchBtnLabel: 'Tìm kiếm',
    resourcesTitle: 'Tài Nguyên Có Sẵn',
    resourcesSubtitle: 'Nhấp vào bất kỳ danh mục nào để khám phá các dịch vụ miễn phí.',
    foodTitle: 'Tài Nguyên Thực Phẩm',
    foodDesc: 'Ngân hàng thực phẩm, kho thực phẩm, bữa ăn miễn phí',
    shelterTitle: 'Nơi Trú Ẩn & Nhà Ở',
    shelterDesc: 'Nơi trú ẩn khẩn cấp, nhà ở tạm thời',
    legalTitle: 'Trợ Giúp Pháp Lý & Di Trú',
    legalDesc: 'Trợ giúp pháp lý miễn phí, quốc tịch, tị nạn',
    educationTitle: 'Giáo Dục',
    educationDesc: 'Trường học, tiếng Anh, học tập người lớn',
    childcareTitle: 'Chăm Sóc Trẻ Em & Gia Đình',
    childcareDesc: 'Chăm sóc trẻ, y tế, WIC, dịch vụ gia đình',
    rightsTitle: 'Biết Quyền Của Bạn',
    rightsDesc: 'Quyền của bạn với nhân viên di trú — nhiều ngôn ngữ',
    privacyTitle: 'Cam Kết Quyền Riêng Tư Của Chúng Tôi',
    pp1: 'Chúng tôi không thu thập tên, địa chỉ hoặc số điện thoại của bạn.',
    pp2: 'Chúng tôi không lưu trữ địa chỉ IP hoặc dữ liệu vị trí.',
    pp3: 'Chúng tôi không sử dụng cookie hoặc công cụ theo dõi.',
    pp4: 'Chúng tôi không bao giờ bán hoặc chia sẻ thông tin của bạn.',
    pp5: 'Trang web này ẩn danh theo thiết kế. Sử dụng tự do và an toàn.',
    pp6: 'Để bảo mật thêm, hãy dùng Tor Browser hoặc VPN.',
    rightsLangLabel: 'Chọn ngôn ngữ của bạn:',
    rightsDownloadLabel: 'Tải thẻ quyền có thể in:',
    footerDesc: 'Trung tâm tài nguyên an toàn, ẩn danh. Không đăng nhập. Không dữ liệu.',
    footerLinksTitle: 'Liên Kết Nhanh',
    footerHotlinesTitle: 'Đường Dây Khẩn Cấp',
    footerPrivacyTitle: 'Quyền Riêng Tư & Bảo Mật',
    footerPrivacyText: 'Trang này không sử dụng phân tích, cookie hay đăng nhập. Không thu thập dữ liệu.',
    footerBottom: 'Ngọn Hải Đăng là tài nguyên công cộng miễn phí. Không liên kết với bất kỳ cơ quan chính phủ nào.',
    currentLang: 'Tiếng Việt',
  },
  ko: {
    privacyBanner: '🔒 귀하의 정보를 수집, 저장 또는 공유하지 않습니다. 로그인 불필요. 추적 없음.',
    siteTitle: '등대',
    navResources: '자원',
    navRights: '권리 알기',
    navFind: '근처 찾기',
    heroTitle: '당신은 혼자가 아닙니다.<br/>도움이 여기 있습니다.',
    heroSub: '음식, 주거, 법률 지원, 교육, 시민권을 위한 무료 자원 — 귀하의 언어로, 귀하의 지역에서. 이름 없음. 데이터 없음. 두려움 없음.',
    privacyPill: '🔒 익명 및 비공개 · 데이터 저장 없음 · 추적 없음',
    searchTitle: '가까운 자원 찾기',
    searchNote: '우편번호 또는 지역만 입력하세요 — 이름이나 주소는 절대 묻지 않습니다.',
    searchPlaceholder: '자원, 서비스 또는 주제 검색...',
    zipPlaceholder: '우편번호 또는 도시/지역 (선택사항)',
    searchBtnLabel: '검색',
    resourcesTitle: '이용 가능한 자원',
    resourcesSubtitle: '카테고리를 클릭하여 무료 서비스를 탐색하세요.',
    foodTitle: '식품 자원',
    foodDesc: '푸드뱅크, 식품창고, 무료 식사',
    shelterTitle: '쉼터 및 주거',
    shelterDesc: '긴급 쉼터, 과도기 주거',
    legalTitle: '법률 지원 및 이민',
    legalDesc: '무료 법률 지원, 시민권, 망명',
    educationTitle: '교육',
    educationDesc: '학교, 영어, 성인 학습, 장학금',
    childcareTitle: '보육 및 가족',
    childcareDesc: '보육, 건강, WIC, 가족 서비스',
    rightsTitle: '권리 알기',
    rightsDesc: '이민 관리와의 상황에서 귀하의 권리 — 여러 언어',
    privacyTitle: '개인정보 보호 약속',
    pp1: '이름, 주소, 전화번호를 수집하지 않습니다.',
    pp2: 'IP 주소나 위치 데이터를 저장하지 않습니다.',
    pp3: '쿠키나 추적 도구를 사용하지 않습니다.',
    pp4: '귀하의 정보를 절대 판매하거나 공유하지 않습니다.',
    pp5: '이 사이트는 설계상 익명입니다. 자유롭게 사용하세요.',
    pp6: '추가 개인정보 보호를 위해 Tor 브라우저나 VPN을 사용하세요.',
    rightsLangLabel: '언어를 선택하세요:',
    rightsDownloadLabel: '인쇄 가능한 권리 카드 다운로드:',
    footerDesc: '안전하고 익명인 자원 허브. 로그인 없음. 데이터 없음. 도움만.',
    footerLinksTitle: '빠른 링크',
    footerHotlinesTitle: '긴급 전화',
    footerPrivacyTitle: '개인정보 및 보안',
    footerPrivacyText: '이 사이트는 분석, 쿠키, 로그인을 사용하지 않습니다. 데이터 수집 없음.',
    footerBottom: '등대는 무료 공공 자원입니다. 어떠한 정부 기관과도 관련이 없습니다.',
    currentLang: '한국어',
  },
  ru: {
    privacyBanner: '🔒 Мы не собираем, не храним и не передаём вашу информацию. Без входа. Без слежки.',
    siteTitle: 'Маяк',
    navResources: 'Ресурсы',
    navRights: 'Ваши права',
    navFind: 'Найти рядом',
    heroTitle: 'Вы не одни.<br/>Помощь здесь.',
    heroSub: 'Бесплатные ресурсы для еды, жилья, юридической помощи, образования и гражданства — на вашем языке, в вашем регионе.',
    privacyPill: '🔒 Анонимно и Конфиденциально · Данные не хранятся · Без слежки',
    searchTitle: 'Найти ресурсы рядом с вами',
    searchNote: 'Введите только почтовый индекс или регион — мы никогда не спрашиваем имя.',
    searchPlaceholder: 'Поиск ресурсов, услуг или тем...',
    zipPlaceholder: 'Почтовый индекс или город/регион (необязательно)',
    searchBtnLabel: 'Найти',
    resourcesTitle: 'Доступные ресурсы',
    resourcesSubtitle: 'Нажмите на любую категорию для поиска бесплатных услуг.',
    foodTitle: 'Продовольственные ресурсы',
    foodDesc: 'Банки еды, кладовые, бесплатное питание',
    shelterTitle: 'Жильё и приют',
    shelterDesc: 'Экстренное жильё, временное жильё',
    legalTitle: 'Юридическая помощь и иммиграция',
    legalDesc: 'Бесплатная юридическая помощь, гражданство, убежище',
    educationTitle: 'Образование',
    educationDesc: 'Школы, английский язык, обучение для взрослых',
    childcareTitle: 'Уход за детьми и семья',
    childcareDesc: 'Уход за детьми, здоровье, WIC, семейные услуги',
    rightsTitle: 'Знайте свои права',
    rightsDesc: 'Ваши права при встрече с офицерами иммиграции — на многих языках',
    privacyTitle: 'Наше обещание конфиденциальности',
    pp1: 'Мы не собираем ваше имя, адрес или номер телефона.',
    pp2: 'Мы не храним IP-адреса или данные о местоположении.',
    pp3: 'Мы не используем файлы cookie или инструменты слежки.',
    pp4: 'Мы никогда не продаём и не передаём вашу информацию.',
    pp5: 'Этот сайт анонимен по своей природе. Пользуйтесь свободно.',
    pp6: 'Для дополнительной конфиденциальности используйте Tor или VPN.',
    rightsLangLabel: 'Выберите язык:',
    rightsDownloadLabel: 'Скачайте распечатываемую карточку прав:',
    footerDesc: 'Безопасный и анонимный центр ресурсов. Без входа. Без данных.',
    footerLinksTitle: 'Быстрые ссылки',
    footerHotlinesTitle: 'Экстренные номера',
    footerPrivacyTitle: 'Конфиденциальность и безопасность',
    footerPrivacyText: 'Сайт не использует аналитику, куки или вход. Данные не собираются.',
    footerBottom: 'Маяк — бесплатный общественный ресурс. Не связан ни с одним государственным органом.',
    currentLang: 'Русский',
  },
};

/* =========================================================
   2. KNOW YOUR RIGHTS CONTENT
   ========================================================= */

const RIGHTS_CONTENT = {
  en: {
    title: '🛡️ Your Rights When Dealing with Immigration Officers',
    items: [
      '<strong>You have the right to remain silent.</strong> You do not have to answer questions about your immigration status, where you were born, or how you entered the country.',
      '<strong>You do not have to open your door</strong> unless the officer has a signed judicial warrant (not a deportation/removal order). Ask to see it slipped under the door.',
      '<strong>Do not sign anything</strong> without speaking to a lawyer first. Signing documents may affect your rights.',
      '<strong>You have the right to a lawyer.</strong> Say clearly: "I want to speak with a lawyer." Do not say anything else until your lawyer is present.',
      '<strong>Do not lie</strong> to immigration officials — but you do not have to answer questions.',
      '<strong>If detained</strong>, you have the right to contact your consulate and to have someone notified of your detention.',
      '<strong>Stay calm.</strong> Do not run. Do not resist physically. You can refuse verbally.',
      '<strong>Remember or write down</strong> the officer\'s badge number, name, and agency after the encounter.',
    ],
  },
  es: {
    title: '🛡️ Sus Derechos al Tratar con Oficiales de Inmigración',
    items: [
      '<strong>Tiene derecho a guardar silencio.</strong> No tiene que responder preguntas sobre su estatus migratorio, su lugar de nacimiento, ni cómo ingresó al país.',
      '<strong>No tiene que abrir la puerta</strong> a menos que el oficial tenga una orden judicial firmada (no una orden de deportación). Pida verla deslizada bajo la puerta.',
      '<strong>No firme nada</strong> sin hablar primero con un abogado. Firmar documentos puede afectar sus derechos.',
      '<strong>Tiene derecho a un abogado.</strong> Diga claramente: "Quiero hablar con un abogado." No diga nada más hasta que su abogado esté presente.',
      '<strong>No mienta</strong> a los oficiales de inmigración — pero no tiene que responder preguntas.',
      '<strong>Si es detenido</strong>, tiene derecho a contactar su consulado y a que alguien sea notificado de su detención.',
      '<strong>Mantenga la calma.</strong> No corra. No se resista físicamente. Puede negarse verbalmente.',
      '<strong>Recuerde o anote</strong> el número de placa, nombre y agencia del oficial después del encuentro.',
    ],
  },
  fr: {
    title: '🛡️ Vos Droits Face aux Agents d\'Immigration',
    items: [
      '<strong>Vous avez le droit de garder le silence.</strong> Vous n\'êtes pas obligé de répondre aux questions sur votre statut d\'immigration ou votre pays de naissance.',
      '<strong>Vous n\'êtes pas obligé d\'ouvrir votre porte</strong> sauf si l\'agent possède un mandat judiciaire signé. Demandez à le voir glissé sous la porte.',
      '<strong>Ne signez rien</strong> sans consulter un avocat au préalable.',
      '<strong>Vous avez droit à un avocat.</strong> Dites clairement : "Je veux parler à un avocat." Ne dites rien d\'autre.',
      '<strong>Ne mentez pas</strong> aux agents, mais vous n\'êtes pas tenu de répondre à leurs questions.',
      '<strong>Si vous êtes détenu</strong>, vous avez le droit de contacter votre consulat.',
      '<strong>Restez calme.</strong> Ne courez pas. Ne résistez pas physiquement.',
      '<strong>Notez</strong> le numéro de badge, le nom et l\'agence de l\'agent après l\'incident.',
    ],
  },
  zh: {
    title: '🛡️ 您面对移民官员时的权利',
    items: [
      '<strong>您有权保持沉默。</strong>您无需回答关于您的移民身份、出生地或入境方式的问题。',
      '<strong>您无需开门</strong>，除非官员持有签署的司法令状（非驱逐令）。要求将令状从门缝递入后再查看。',
      '<strong>未与律师商议前请勿签署任何文件。</strong>签署文件可能影响您的权利。',
      '<strong>您有权获得律师帮助。</strong>请明确说："我想与律师交谈。"在律师到场前不要再说其他任何话。',
      '<strong>不要对移民官员撒谎</strong>——但您无需回答问题。',
      '<strong>如果被拘留</strong>，您有权联系您的领事馆，并通知他人您被拘留的情况。',
      '<strong>保持冷静。</strong>不要奔跑。不要进行身体抵抗。您可以口头拒绝。',
      '<strong>事后记录</strong>官员的徽章号码、姓名和所属机构。',
    ],
  },
  ht: {
    title: '🛡️ Dwa Ou Devan Ajan Imigrasyon',
    items: [
      '<strong>Ou gen dwa pou ou rete an silans.</strong> Ou pa oblije reponn kesyon sou estati imigrasyon ou, kote ou fèt, oswa kijan ou antre nan peyi a.',
      '<strong>Ou pa oblije louvri pòt ou</strong> sof si ajan an gen yon manda jidisyè siyen. Mande pou wè l anba pòt la.',
      '<strong>Pa siyen okenn dokiman</strong> san pale ak yon avoka anvan.',
      '<strong>Ou gen dwa pou yon avoka.</strong> Di klèman: "Mwen vle pale ak yon avoka." Pa di anyen plis.',
      '<strong>Pa bay fo enfòmasyon</strong> bay ajan imigrasyon — men ou pa oblije reponn kesyon.',
      '<strong>Si yo detni ou</strong>, ou gen dwa kontakte konsila ou ak fè yon moun konnen ou detni.',
      '<strong>Rete kalm.</strong> Pa kouri. Pa reziste fizikman.',
      '<strong>Sonje oswa ekri</strong> nimewo badge, non, ak ajans ajan an apre rankontre a.',
    ],
  },
  pt: {
    title: '🛡️ Seus Direitos ao Lidar com Agentes de Imigração',
    items: [
      '<strong>Você tem o direito de permanecer em silêncio.</strong> Você não precisa responder perguntas sobre seu status de imigração, local de nascimento ou como entrou no país.',
      '<strong>Você não precisa abrir a porta</strong> a menos que o agente tenha um mandado judicial assinado. Peça para vê-lo deslizado sob a porta.',
      '<strong>Não assine nada</strong> sem falar com um advogado primeiro.',
      '<strong>Você tem direito a um advogado.</strong> Diga claramente: "Quero falar com um advogado." Não diga mais nada.',
      '<strong>Não minta</strong> para agentes de imigração — mas você não precisa responder perguntas.',
      '<strong>Se detido</strong>, você tem o direito de contatar seu consulado.',
      '<strong>Mantenha a calma.</strong> Não corra. Não resista fisicamente.',
      '<strong>Anote</strong> o número do crachá, nome e agência do agente após o encontro.',
    ],
  },
  ar: {
    title: '🛡️ حقوقك عند التعامل مع ضباط الهجرة',
    dir: 'rtl',
    items: [
      '<strong>لديك الحق في التزام الصمت.</strong> لست مضطراً للإجابة على أسئلة حول وضعك المهاجر أو مكان ميلادك أو كيفية دخولك للبلاد.',
      '<strong>لا يجب عليك فتح الباب</strong> إلا إذا كان الضابط يحمل أمراً قضائياً موقعاً. اطلب رؤيته من تحت الباب.',
      '<strong>لا توقع على أي وثيقة</strong> دون استشارة محامٍ أولاً.',
      '<strong>لديك الحق في الحصول على محامٍ.</strong> قل بوضوح: "أريد التحدث مع محامٍ." لا تقل شيئاً آخر.',
      '<strong>لا تكذب</strong> على ضباط الهجرة — لكنك لست مضطراً للإجابة على أسئلتهم.',
      '<strong>إذا اعتُقلت</strong>، لديك الحق في الاتصال بقنصليتك وإبلاغ شخص ما باعتقالك.',
      '<strong>ابقَ هادئاً.</strong> لا تركض. لا تقاوم جسدياً.',
      '<strong>سجّل</strong> رقم شارة الضابط واسمه وجهته بعد اللقاء.',
    ],
  },
  vi: {
    title: '🛡️ Quyền Của Bạn Khi Đối Mặt Với Nhân Viên Di Trú',
    items: [
      '<strong>Bạn có quyền im lặng.</strong> Bạn không cần trả lời câu hỏi về tình trạng di trú, nơi sinh, hoặc cách nhập cảnh.',
      '<strong>Bạn không cần mở cửa</strong> trừ khi nhân viên có lệnh tư pháp có chữ ký. Yêu cầu xem lệnh qua khe cửa.',
      '<strong>Đừng ký bất cứ thứ gì</strong> mà không nói chuyện với luật sư trước.',
      '<strong>Bạn có quyền có luật sư.</strong> Nói rõ: "Tôi muốn nói chuyện với luật sư." Đừng nói gì thêm.',
      '<strong>Đừng nói dối</strong> nhân viên di trú — nhưng bạn không phải trả lời câu hỏi.',
      '<strong>Nếu bị giam giữ</strong>, bạn có quyền liên hệ lãnh sự quán và thông báo cho người khác.',
      '<strong>Giữ bình tĩnh.</strong> Đừng chạy. Đừng kháng cự bằng vũ lực.',
      '<strong>Ghi nhớ hoặc ghi lại</strong> số huy hiệu, tên và cơ quan của nhân viên.',
    ],
  },
};

/* =========================================================
   3. SEARCH DATABASE
   ========================================================= */

const SEARCH_DATABASE = [
  { cat: '🥗', category: 'food', name: 'Feeding America', desc: 'Nationwide food bank network — find your local pantry' },
  { cat: '🥗', category: 'food', name: 'WhyHunger Hotline', desc: '1-800-548-6479 — multilingual food referrals' },
  { cat: '🥗', category: 'food', name: 'Food Pantries Directory', desc: 'Search 60,000+ local food pantries by zip code' },
  { cat: '🥗', category: 'food', name: 'St. Vincent de Paul', desc: 'Free food assistance, no documentation required' },
  { cat: '🏠', category: 'shelter', name: '211 Helpline', desc: 'Dial 211 — emergency shelter referrals, no ID needed' },
  { cat: '🏠', category: 'shelter', name: 'Catholic Charities', desc: 'Emergency housing and shelter, serves all regardless of status' },
  { cat: '🏠', category: 'shelter', name: 'Salvation Army Shelter', desc: 'Emergency beds and meals — no ID required for crisis shelter' },
  { cat: '🏠', category: 'shelter', name: 'Domestic Violence Hotline', desc: '1-800-799-7233 — safe housing referrals, 24/7' },
  { cat: '⚖️', category: 'legal', name: 'CLINIC Legal Network', desc: 'Free/low-cost accredited immigration legal services' },
  { cat: '⚖️', category: 'legal', name: 'RAICES', desc: 'Free legal representation for detained immigrants and families' },
  { cat: '⚖️', category: 'legal', name: 'Immigration Advocates Network', desc: 'Free legal aid directory searchable by state' },
  { cat: '⚖️', category: 'legal', name: 'USCIS Fee Waivers', desc: 'Official fee waiver requests for immigration forms' },
  { cat: '⚖️', category: 'legal', name: 'National Immigration Law Center', desc: 'Policy advocacy and legal referrals' },
  { cat: '📚', category: 'education', name: 'K–12 Public Education', desc: 'All children have the right to free public school regardless of status' },
  { cat: '📚', category: 'education', name: 'ProLiteracy ESL', desc: 'Free adult English classes and literacy programs' },
  { cat: '📚', category: 'education', name: 'TheDream.US Scholarships', desc: 'College scholarships for DREAMers and TPS holders' },
  { cat: '📚', category: 'education', name: 'Free GED Prep', desc: 'Free study materials to earn high school equivalency' },
  { cat: '👶', category: 'childcare', name: 'WIC Program', desc: 'Free food and nutrition for children under 5 and pregnant women' },
  { cat: '👶', category: 'childcare', name: 'Head Start', desc: 'Free early childhood education for low-income families' },
  { cat: '👶', category: 'childcare', name: 'CHIP / Medicaid', desc: 'Free health coverage for children — US-born children may qualify' },
  { cat: '🛡️', category: 'rights', name: 'Know Your Rights — ACLU', desc: 'Your rights with immigration officers, downloadable in many languages' },
  { cat: '🛡️', category: 'rights', name: 'NILC Rights Guide', desc: 'Comprehensive know your rights resource' },
  { cat: '🛡️', category: 'rights', name: 'Immigrant Defense Project', desc: 'Rights information for community members' },
  { cat: '🌐', category: 'citizenship', name: 'USCIS Citizenship Test Prep', desc: 'Free study materials for the naturalization test' },
  { cat: '🌐', category: 'citizenship', name: 'Citizenship Corner (libraries)', desc: 'Free citizenship prep classes at many public libraries' },
];

/* =========================================================
   4. LANGUAGE MANAGEMENT
   ========================================================= */

let currentLang = 'en';

function setLanguage(langCode) {
  const t = TRANSLATIONS[langCode];
  if (!t) return;
  currentLang = langCode;

  // Apply RTL if needed
  document.documentElement.dir = t.dir || 'ltr';
  document.documentElement.lang = langCode;

  // Update all translated elements
  const fields = [
    'privacyText', 'siteTitle', 'navResources', 'navRights', 'navFind',
    'heroSub', 'privacyPill', 'searchTitle', 'searchNote', 'searchBtn',
    'resourcesTitle', 'resourcesSubtitle', 'foodTitle', 'foodDesc',
    'shelterTitle', 'shelterDesc', 'legalTitle', 'legalDesc',
    'educationTitle', 'educationDesc', 'childcareTitle', 'childcareDesc',
    'rightsTitle', 'rightsDesc', 'privacyTitle', 'pp1', 'pp2', 'pp3',
    'pp4', 'pp5', 'pp6', 'rightsLangLabel', 'rightsDownloadLabel',
    'footerDesc', 'footerLinksTitle', 'footerHotlinesTitle',
    'footerPrivacyTitle', 'footerPrivacyText', 'footerBottom', 'currentLang',
  ];

  fields.forEach(id => {
    const el = document.getElementById(id);
    if (!el || !t[id]) return;
    el.innerHTML = t[id];
  });

  // heroTitle has HTML
  const heroTitle = document.getElementById('heroTitle');
  if (heroTitle && t.heroTitle) heroTitle.innerHTML = t.heroTitle;

  // Update placeholders
  const searchInput = document.getElementById('searchInput');
  if (searchInput && t.searchPlaceholder) searchInput.placeholder = t.searchPlaceholder;
  const zipInput = document.getElementById('zipInput');
  if (zipInput && t.zipPlaceholder) zipInput.placeholder = t.zipPlaceholder;

  // Update active rights content
  const activeRightsBtn = document.querySelector('.rl-btn.active');
  if (activeRightsBtn) {
    const activeLang = activeRightsBtn.getAttribute('onclick').match(/'([^']+)'/)?.[1] || 'en';
    showRights(activeLang, activeRightsBtn);
  } else {
    showRights('en', document.querySelector('.rl-btn'));
  }

  // Close lang menu
  closeLangMenu();
}

function toggleLangMenu() {
  const menu = document.getElementById('langMenu');
  menu.classList.toggle('open');
}

function closeLangMenu() {
  document.getElementById('langMenu')?.classList.remove('open');
}

// Close lang menu on outside click
document.addEventListener('click', (e) => {
  const langSelector = document.querySelector('.lang-selector');
  if (langSelector && !langSelector.contains(e.target)) {
    closeLangMenu();
  }
});

/* =========================================================
   5. KNOW YOUR RIGHTS DISPLAY
   ========================================================= */

function showRights(langCode, btn) {
  // Update active button
  document.querySelectorAll('.rl-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  const content = RIGHTS_CONTENT[langCode] || RIGHTS_CONTENT['en'];
  const container = document.getElementById('rightsContent');
  if (!container) return;

  const isRTL = content.dir === 'rtl';
  container.setAttribute('dir', isRTL ? 'rtl' : 'ltr');

  const itemsHTML = content.items.map(item =>
    `<li>${item}</li>`
  ).join('');

  container.innerHTML = `
    <h4>${content.title}</h4>
    <ul>${itemsHTML}</ul>
  `;
}

/* =========================================================
   6. EXPANDABLE RESOURCE CARDS
   ========================================================= */

function toggleCard(card) {
  const isOpen = card.getAttribute('aria-expanded') === 'true';
  card.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
}

// Also support keyboard interaction
document.addEventListener('keydown', (e) => {
  if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('resource-card')) {
    e.preventDefault();
    toggleCard(e.target);
  }
});

/* =========================================================
   7. SEARCH FUNCTIONALITY
   ========================================================= */

function performSearch() {
  const query = document.getElementById('searchInput')?.value?.trim().toLowerCase() || '';
  const category = document.getElementById('categorySelect')?.value || '';
  const resultsContainer = document.getElementById('searchResults');
  if (!resultsContainer) return;

  if (!query && !category) {
    resultsContainer.innerHTML = '';
    return;
  }

  let results = SEARCH_DATABASE.filter(item => {
    const matchesQuery = !query ||
      item.name.toLowerCase().includes(query) ||
      item.desc.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query);
    const matchesCategory = !category || item.category === category;
    return matchesQuery && matchesCategory;
  });

  if (results.length === 0) {
    resultsContainer.innerHTML = `<p class="no-results">No results found. Try different keywords or browse the categories below.</p>`;
    return;
  }

  const html = results.slice(0, 8).map(item => `
    <div class="search-result-item">
      <span class="sri-cat">${item.cat}</span>
      <div>
        <div class="sri-name">${item.name}</div>
        <div class="sri-desc">${item.desc}</div>
      </div>
    </div>
  `).join('');

  resultsContainer.innerHTML = html;

  // Auto-scroll to results
  resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Search on Enter key
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') performSearch();
    });
  }

  const zipInput = document.getElementById('zipInput');
  if (zipInput) {
    zipInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') performSearch();
    });
  }

  const catSelect = document.getElementById('categorySelect');
  if (catSelect) {
    catSelect.addEventListener('change', performSearch);
  }
});

/* =========================================================
   8. PRIVACY BANNER CLOSE
   ========================================================= */

function closeBanner() {
  const banner = document.getElementById('privacyBanner');
  if (banner) {
    banner.style.transition = 'opacity 0.3s, max-height 0.4s';
    banner.style.opacity = '0';
    banner.style.maxHeight = '0';
    banner.style.overflow = 'hidden';
    banner.style.padding = '0';
    setTimeout(() => banner.remove(), 400);
  }
}

/* =========================================================
   9. SCROLL REVEAL ANIMATION
   ========================================================= */

function initScrollReveal() {
  const cards = document.querySelectorAll('.resource-card, .search-card, .pp-item');
  cards.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

  cards.forEach(el => observer.observe(el));
}

/* =========================================================
   10. REAL-TIME HOURS CHECK
   ========================================================= */

function checkHours() {
  const now = new Date();
  const dayOfWeek = now.getDay(); // 0=Sun, 6=Sat
  const hour = now.getHours();
  const isWeekday = dayOfWeek >= 1 && dayOfWeek <= 5;
  const isWeekdayHours = isWeekday && hour >= 9 && hour < 17;
  const is211Hours = hour >= 7 && hour < 22;

  const hoursEls = document.querySelectorAll('[data-service]');
  hoursEls.forEach(el => {
    const service = el.getAttribute('data-service');
    if (service === 'feedingamerica') {
      if (isWeekdayHours) {
        el.innerHTML = '⏰ <span class="hours-open">Many locations OPEN now</span> <span class="update-badge">Live</span>';
      } else {
        el.innerHTML = '⏰ <span class="hours-closed">Likely closed now</span> — check local listing';
      }
    }
  });

  // Annotate 211 availability
  const allHoursEls = document.querySelectorAll('.ri-hours');
  allHoursEls.forEach(el => {
    if (el.textContent.includes('24/7')) {
      if (!el.querySelector('.update-badge')) {
        el.innerHTML += ' <span class="update-badge">Open Now</span>';
      }
    }
  });
}

/* =========================================================
   11. INITIALIZATION
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize rights content
  showRights('en', document.querySelector('.rl-btn'));

  // Start scroll animations
  initScrollReveal();

  // Check hours
  checkHours();

  // Refresh hours every 5 minutes
  setInterval(checkHours, 5 * 60 * 1000);

  console.log(
    '%c🏮 The Lighthouse',
    'color: #e8b84b; font-size: 1.4em; font-weight: bold;'
  );
  console.log(
    '%cPrivacy by design. No tracking. No data collected.',
    'color: #2e7d52; font-size: 0.95em;'
  );
});
