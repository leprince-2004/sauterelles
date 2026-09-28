/* =============================================
   LES SAUTERELLES — JAVASCRIPT PRINCIPAL
============================================= */

document.addEventListener('DOMContentLoaded', function () {

  const translations = {

  fr: {
    // Menu
    home: "Accueil",
    about: "À propos",
    sections: "Sections",
    advantages: "Avantages",
    school_fees: "Frais scolaires",
    gallery: "Galerie",
    contact: "Nous contacter",
    contact_page_label: "Contact",
    sections_page_label: "Sections",
    advantages_page_label: "Avantages",
    fees_page_label: "Frais scolaires",
    gallery_page_label: "Galerie",
    
    // Hero
    our_story: "Notre histoire",
    about_title: "À propos de l'école",
    contact_hero_badge: "Parlons ensemble",
    contact_title: "Contactez-nous",
    sections_hero_badge: "Organisation scolaire",
    sections_title: "Nos Sections",
    advantages_hero_badge: "Ce qui nous distingue",
    advantages_title: "Nos Avantages",
    fees_hero_badge: "Transparence totale",
    fees_title: "Frais scolaires",
    gallery_hero_badge: "Vie scolaire",
    gallery_title: "Notre Galerie",
    
    // Histoire
    founded_passion: "Fondée avec passion",
    school_description: "Une école bâtie sur l'excellence et le bilinguisme",
    about_text_1: "Le Groupe Scolaire Bilingue Les Sauterelles est né d'une vision simple mais ambitieuse : offrir à chaque enfant de Ekoumdoum et ses environs une éducation bilingue de qualité internationale, accessible à toutes les familles.",
    about_text_2: "Depuis plus de 22 ans, notre école forme des générations d'élèves capables de s'exprimer avec aisance en français et en anglais, et d'affronter avec succès les examens officiels du Cameroun. Notre taux de réussite de 100% au CEP et FSLC depuis notre ouverture en est la preuve irréfutable.",
    
    // Valeurs
    mission_title: "Notre mission",
    mission_text: "Former des élèves bilingues compétents, épanouis et prêts à affronter l'avenir avec confiance.",
    vision_title: "Notre vision",
    vision_text: "Être l'école de référence du bilinguisme dans la région du Centre Cameroun.",
    values_title: "Nos valeurs",
    values_text: "Excellence, discipline, respect, créativité et épanouissement de chaque enfant.",
    
    // Chiffres clés
    in_numbers: "En chiffres",
    excellence_data: "L'excellence en données",
    years_exist: "Années d'existence",
    success_rate: "Réussite CEP & FSLC",
    teaching_langs: "Langues d'enseignement",
    students_trained: "Élèves formés",
    
    // Footer
    brand_name: "Les Sauterelles",
    brand_sub: "École Bilingue",
    footer_text: "d'excellence bilingue à Carrefour Ekoumdoum. Une école qui forme des champions.",
    nav_title: "Navigation",
    sections_title: "Sections",
    maternelle_link: "Maternelle Bilingue",
    primaire_link: "Primaire Bilingue",
    fees_link: "Frais scolaires",
    contact_title: "Contact",
    contact_link: "Nous écrire",
    address: "Carrefour Ekoumdoum",
    copyright: "© <span class=\"copyright-annee\"></span> Groupe Scolaire Bilingue Les Sauterelles.",
    developer: "Développé par Franck Le Prince",

    // Contact page
    contact_hero_badge: "Parlons ensemble",
    contact_title: "Contactez-nous",
    contact_page_label: "Contact",
    chat_badge: "ASSISTANT D'INFORMATION",
    chat_title: "Une question sur l'école ?",
    chat_scope: "Disponible pour vous renseigner sur Les Sauterelles",
    chat_assistant_label: "Les Sauterelles",
    chat_welcome: "Bonjour ! Je peux vous renseigner sur les sections, les frais, les démarches d'admission et les coordonnées de l'école. Que souhaitez-vous savoir ?",
    chat_suggestion_sections: "Quelles sont les sections ?",
    chat_suggestion_location: "Où se trouve l'école ?",
    chat_input_label: "Votre question sur l'école",
    chat_conversation_label: "Conversation avec l'assistant",
    chat_faq_label: "Questions fréquentes",
    chat_placeholder: "Écrivez votre question sur l'école…",
    chat_send_label: "Envoyer la question",
    chat_note: "Les réponses portent uniquement sur les informations de l'établissement.",
    chat_user_label: "Vous",
    chat_out_of_scope: "Malheureusement, je n'ai pas assez d'informations pour répondre à cette question. Je réponds uniquement aux questions concernant le Groupe Scolaire Bilingue Les Sauterelles. Pour plus d'informations, contactez l'école à franckleprince15@gmail.com ou au (+237) 655 936 211 / (+237) 695 413 438.",
    chat_no_answer: "Malheureusement, je n'ai pas assez d'informations à ce sujet. Pour plus d'informations, contactez l'école à franckleprince15@gmail.com ou au (+237) 655 936 211 / (+237) 695 413 438.",
    chat_link_fees: "Voir les frais et modalités",
    chat_link_sections: "Découvrir les sections",
    chat_link_contact: "Écrire à l'établissement",
    contact_info_address: "Adresse",
    contact_info_phones: "Téléphones",
    contact_info_hours: "Heures d'ouverture",
    contact_address_details: "Carrefour Ekoumdoum<br>Yaoundé, Cameroun",
    contact_phone_numbers: "(+237) 655 936 211<br>(+237) 695 413 438",
    contact_hours: "Lundi – Vendredi : 7h30 – 17h00<br>Samedi : 8h00 – 13h00",
    contact_details_badge: "Coordonnées",
    contact_info_title: "Nous sommes disponibles pour vous",
    contact_info_email: "Email",
    contact_follow_us: "Suivez-nous",
    our_location: "Notre localisation",

    // Sections page
    nursery_badge: "Tout-petits",
    nursery_title: "Section Maternelle Bilingue",
    nursery_description: "Notre section maternelle accueille les enfants dans un environnement chaleureux et stimulant. Les activités ludiques et pédagogiques sont conçues pour développer la curiosité, la créativité et les premières compétences bilingues dès le plus jeune âge.",
    available_levels: "Niveaux disponibles",
    maternelle_bilingue: "Maternelle Bilingue",
    sil: "SIL (Starter Infant Level)",
    petite_section: "Petite Section",
    moyenne_section: "Moyenne Section",
    grande_section: "Grande Section",
    eveil_bilingue: "Éveil bilingue",
    admission_conditions: "Conditions d'admission",
    birth_certificate: "Photocopie de l'acte de naissance",
    vaccination_record: "Photocopie du carnet de vaccination",
    paper_ream: "01 rame de papier 80G",
    two_folders: "02 chemises de classement (Niveau II et III)",
    two_binders: "02 classeurs (Maternelle et Niveau I)",
    nursery_fees_button: "Voir les frais maternelle",
    academic_badge: "Académique",
    primary_title: "Primaire Bilingue",
    primary_description: "Notre section primaire propose un enseignement bilingue rigoureux, aligné sur les programmes officiels du Cameroun. Les élèves sont préparés aux examens du CEP (Certificat d'Études Primaires) et du FSLC (First School Leaving Certificate) avec un taux de réussite de 100% depuis l'ouverture.",
    sil_to_ce2: "SIL au CE II",
    cm1: "CM1",
    cm2: "CM2",
    primary_bilingual: "Primaire Bilingue",
    cep_preparation: "Préparation CEP",
    fslc_preparation: "Préparation FSLC",
    success_badge: "🏆 100% de réussite",
    success_text: "Au CEP et FSLC depuis notre ouverture. Une performance jamais interrompue en 22 ans.",
    primary_fees_button: "Voir les frais primaire",
    cta_badge: "Prêt à rejoindre l'école ?",
    cta_title: "Découvrez notre école",
    cta_description: "Contactez-nous pour obtenir plus d'informations ou pour planifier une visite de l'école.",
    cta_fees_button: "Voir les frais",
    cta_contact_button: "Nous contacter",

    // Advantages page
    advantages_subtitle: "Pourquoi nous choisir",
    advantages_intro_title: "Des avantages concrets pour votre famille",
    advantage_uniform: "Uniforme Gratuit",
    advantage_uniform_text: "La tenue de classe est offerte gratuitement à chaque élève inscrit. Un vrai soulagement pour les familles.",
    advantage_bus: "Bus Scolaire",
    advantage_bus_text: "Service de transport disponible pour faciliter les déplacements des élèves en toute sécurité.",
    advantage_family_discount: "Remise Familiale",
    advantage_family_discount_text: "Réduction de 5 000 Fcfa par enfant à partir du 3ème enfant inscrit dans notre école.",
    advantage_early_discount: "Remise Anticipée",
    advantage_early_discount_text: "10% de réduction sur la totalité des frais pour tout paiement effectué avant le 30 août 2024.",
    advantage_european_partnership: "Partenariat Européen",
    advantage_european_partnership_text: "Partenariat avec des collèges et universités en Europe pour élargir les horizons de nos diplômés.",
    advantage_installment: "Paiement en Tranches",
    advantage_installment_text: "Paiement des frais en 3 tranches étalées sur l'année scolaire pour alléger la charge financière.",
    performance_title: "Performance historique",
    performance_heading: "100% de réussite aux examens officiels",
    performance_text: "Depuis l'ouverture de l'école, chaque candidat au CEP et au FSLC a réussi son examen. Un record jamais interrompu depuis 22 ans.",

    // Gallery page
    gallery_subtitle: "Photos & Moments",
    gallery_intro_title: "La vie à Les Sauterelles",
    gallery_description: "Cliquez sur une photo pour l'agrandir. Ces images reflètent la richesse de notre communauté scolaire.",
    gallery_caption_class: "📚 En classe",
    gallery_caption_kindergarten: "🍼 Section Maternelle",
    gallery_caption_library: "📖 Bibliothèque",
    gallery_caption_school: "🏫 Notre école",
    gallery_caption_playground: "⚽ Récréation",
    gallery_caption_activities: "🎨 Activités créatives",
    gallery_caption_sports: "🏃 Sports & Activités",
    gallery_caption_learning: "✏️ En apprentissage",
    gallery_visit_text: "Vous souhaitez visiter l'école en personne ?",
    gallery_visit_button: "Planifier une visite",

     // Fees page
     school_year_badge: "Année scolaire 2024–2025",
    fees_registration_title: "Frais d'admission (à payer une seule fois)",
    fees_section_title: "Frais scolaires & modalités de paiement",
     fees_section_desc: "Paiement en <strong>3 tranches</strong> pour faciliter les familles. Tous les montants sont en <strong>FCFA</strong>.",
     fees_payment_title: "Modalités de paiement par niveau",
     fees_payment_text: "Les paiements se font en 3 tranches : <strong>1ère avant le 30/09/2024</strong> — <strong>2ème avant le 31/10/2024</strong> — <strong>3ème avant le 10/12/2024</strong>",
     fees_card_title_maternelle_bilingue: "🌍 Maternelle Bilingue",
     fees_card_title_maternelle: "🍼 Maternelle",
     fees_card_title_sil_cm1: "📚 De la SIL au CM1",
     fees_card_title_cm2: "🎓 CM2",
     fees_card_title_primary_bilingual: "🌟 Primaire Bilingue",
     first_installment: "1ère tranche",
     second_installment: "2ème tranche",
     third_installment: "3ème tranche",
     annual_total: "TOTAL ANNUEL",
     conditions_title: "Conditions d'admission",
    birth_certificate_req_desc: "Document d'état civil demandé pour l'admission.",
     vaccination_record_req_desc: "Pour garantir la sécurité sanitaire de tous les élèves.",
    paper_req_desc: "À apporter lors du dépôt du dossier d'admission.",
     folder_req_desc: "Obligatoires pour les élèves de Niveau II et Niveau III.",
     binder_req_desc: "Obligatoires pour les élèves de Maternelle et Niveau I.",
     financial_advantages_title: "Remises & Avantages financiers",
     family_discount_title: "Remise familiale",
     family_discount_desc: "Réduction de <strong>5 000 Fcfa</strong> par enfant à partir du 3ème enfant inscrit dans l'école.",
     early_discount_title: "Remise anticipée",
     early_discount_desc: "<strong>10% de réduction</strong> sur le total pour tout paiement effectué avant le 30 août 2024.",
     free_uniform_title: "Uniforme gratuit",
     free_uniform_desc: "La <strong>tenue de classe est offerte</strong> gratuitement à tous les élèves inscrits.",
      fees_cta_question: "Des questions sur les frais ?",
      fees_cta_email_button: "Nous écrire",
      fees_cta_phone_button: "(+237) 655 936 211",
      
     // Divers
     years_excellence: "ans d'excellence"
   },

  en: {
    // Menu
    home: "Home",
    about: "About Us",
    sections: "Sections",
    advantages: "Advantages",
    school_fees: "School fees",
    gallery: "Gallery",
    contact: "Contact Us",
    contact_page_label: "Contact",
    sections_page_label: "Sections",
    advantages_page_label: "Advantages",
    fees_page_label: "School fees",
    gallery_page_label: "Gallery",
    
    // Hero
    our_story: "Our Story",
    about_title: "About the School",
    contact_hero_badge: "Let\'s talk",
    contact_title: "Contact us",
    sections_hero_badge: "School organization",
    sections_title: "Our Sections",
    advantages_hero_badge: "What sets us apart",
    advantages_title: "Our Advantages",
    fees_hero_badge: "Full transparency",
    fees_title: "School fees",
    gallery_hero_badge: "School life",
    gallery_title: "Our Gallery",
    
    // Histoire
    founded_passion: "Founded with passion",
    school_description: "A school built on excellence and bilingualism",
    about_text_1: "The Bilingual School Group Les Sauterelles was born from a simple but ambitious vision: to offer every child in Ekoumdoum and its surroundings a quality international bilingual education, accessible to all families.",
    about_text_2: "For over 22 years, our school has been training generations of students who can express themselves fluently in French and English, and successfully face official Cameroonian exams. Our 100% success rate in CEP and FSLC since our opening is indisputable proof.",
    
    // Valeurs
    mission_title: "Our Mission",
    mission_text: "To train competent, fulfilled bilingual students ready to face the future with confidence.",
    vision_title: "Our Vision",
    vision_text: "To be the reference bilingual school in the Centre region of Cameroon.",
    values_title: "Our Values",
    values_text: "Excellence, discipline, respect, creativity and fulfillment of every child.",
    
    // Chiffres clés
    in_numbers: "In numbers",
    excellence_data: "Excellence in data",
    years_exist: "Years of existence",
    success_rate: "Success rate CEP & FSLC",
    teaching_langs: "Teaching languages",
    students_trained: "Students trained",
    
    // Footer
    brand_name: "Les Sauterelles",
    brand_sub: "Bilingual School",
    footer_text: "years of bilingual excellence at Carrefour Ekoumdoum. A school that builds champions.",
    nav_title: "Navigation",
    sections_title: "Sections",
    maternelle_link: "Bilingual Kindergarten",
    primaire_link: "Bilingual Primary",
    fees_link: "School fees",
    contact_title: "Contact",
    contact_link: "Write to us",
    address: "Carrefour Ekoumdoum",
    copyright: "© <span class=\"copyright-annee\"></span> Bilingual School Group Les Sauterelles.",
    developer: "Developed by Franck Le Prince",

    // Contact page
    contact_hero_badge: "Let's talk",
    contact_title: "Contact us",
    contact_page_label: "Contact",
    chat_badge: "SCHOOL INFORMATION ASSISTANT",
    chat_title: "A question about the school?",
    chat_scope: "Here to answer questions about Les Sauterelles",
    chat_assistant_label: "Les Sauterelles",
    chat_welcome: "Hello! I can answer questions about school sections, fees, admission steps and contact details. What would you like to know?",
    chat_suggestion_sections: "What sections are available?",
    chat_suggestion_location: "Where is the school?",
    chat_input_label: "Your question about the school",
    chat_conversation_label: "Conversation with the assistant",
    chat_faq_label: "Frequently asked questions",
    chat_placeholder: "Ask a question about the school…",
    chat_send_label: "Send question",
    chat_note: "Answers are limited to information about the school.",
    chat_user_label: "You",
    chat_out_of_scope: "Unfortunately, I don't have enough information to answer that question. I can only answer questions about Les Sauterelles Bilingual School Group. For more information, contact the school at franckleprince15@gmail.com or (+237) 655 936 211 / (+237) 695 413 438.",
    chat_no_answer: "Unfortunately, I don't have enough information about that. For more information, contact the school at franckleprince15@gmail.com or (+237) 655 936 211 / (+237) 695 413 438.",
    chat_link_fees: "View fees and payment details",
    chat_link_sections: "Explore the school sections",
    chat_link_contact: "Email the school",
    contact_info_address: "Address",
    contact_info_phones: "Phones",
    contact_info_hours: "Opening hours",
    contact_address_details: "Carrefour Ekoumdoum<br>Yaoundé, Cameroun",
    contact_phone_numbers: "(+237) 655 936 211<br>(+237) 695 413 438",
    contact_hours: "Monday – Friday: 7:30 AM – 5:00 PM<br>Saturday: 8:00 AM – 1:00 PM",
    contact_details_badge: "Contact details",
    contact_info_title: "We are available for you",
    contact_info_email: "Email",
    contact_follow_us: "Follow us",
    our_location: "Our location",

    // Sections page
    nursery_badge: "Toddlers",
    nursery_title: "Bilingual Kindergarten",
    nursery_description: "Our kindergarten welcomes children in a warm, stimulating environment. Playful and educational activities are designed to develop curiosity, creativity and first bilingual skills from an early age.",
    available_levels: "Available levels",
    maternelle_bilingue: "Bilingual Kindergarten",
    sil: "SIL (Starter Infant Level)",
    petite_section: "Petite Section",
    moyenne_section: "Moyenne Section",
    grande_section: "Grande Section",
    eveil_bilingue: "Bilingual Awakening",
    admission_conditions: "Admission requirements",
    birth_certificate: "Copy of birth certificate",
    vaccination_record: "Copy of vaccination record",
    paper_ream: "1 ream of 80G paper",
    two_folders: "2 classification folders (Level II and III)",
    two_binders: "2 binders (Kindergarten and Level I)",
    nursery_fees_button: "View kindergarten fees",
    academic_badge: "Academic",
    primary_title: "Bilingual Primary",
    primary_description: "Our primary section offers rigorous bilingual education aligned with Cameroon's official programs. Students are prepared for CEP (Primary Education Certificate) and FSLC (First School Leaving Certificate) exams with a 100% success rate since opening.",
    sil_to_ce2: "SIL to CE II",
    cm1: "CM1",
    cm2: "CM2",
    primary_bilingual: "Bilingual Primary",
    cep_preparation: "CEP preparation",
    fslc_preparation: "FSLC preparation",
    success_badge: "🏆 100% success rate",
    success_text: "In CEP and FSLC since our opening. A performance never interrupted in 22 years.",
    primary_fees_button: "View primary fees",
    cta_badge: "Ready to join the school?",
    cta_title: "Discover our school",
    cta_description: "Contact us for more information or to schedule a school visit.",
    cta_fees_button: "View fees",
    cta_contact_button: "Contact us",

    // Advantages page
    advantages_subtitle: "Why choose us",
    advantages_intro_title: "Concrete benefits for your family",
    advantage_uniform: "Free uniform",
    advantage_uniform_text: "School uniforms are provided free of charge to every enrolled student. A real relief for families.",
    advantage_bus: "School bus",
    advantage_bus_text: "Transport service available to make student commutes safe and easy.",
    advantage_family_discount: "Family discount",
    advantage_family_discount_text: "5,000 FCFA discount per child from the third enrolled child in our school.",
    advantage_early_discount: "Early payment discount",
    advantage_early_discount_text: "10% discount on the total fees for any payment made before August 30, 2024.",
    advantage_european_partnership: "European partnership",
    advantage_european_partnership_text: "Partnerships with colleges and universities in Europe to broaden our graduates' horizons.",
    advantage_installment: "Installment payment",
    advantage_installment_text: "Fees payable in 3 installments spread over the school year to ease the financial burden.",
    performance_title: "Historic performance",
    performance_heading: "100% success in official exams",
    performance_text: "Since the school's opening, every CEP and FSLC candidate has passed their exam. A record never interrupted in 22 years.",

    // Gallery page
    gallery_subtitle: "Photos & Moments",
    gallery_intro_title: "Life at Les Sauterelles",
    gallery_description: "Click a photo to enlarge it. These images reflect the richness of our school community.",
    gallery_caption_class: "📚 In class",
    gallery_caption_kindergarten: "🍼 Kindergarten section",
    gallery_caption_library: "📖 Library",
    gallery_caption_school: "🏫 Our school",
    gallery_caption_playground: "⚽ Recreation",
    gallery_caption_activities: "🎨 Creative activities",
    gallery_caption_sports: "🏃 Sports & activities",
    gallery_caption_learning: "✏️ Learning",
    gallery_visit_text: "Would you like to visit the school in person?",
    gallery_visit_button: "Schedule a visit",

    // Fees page
    school_year_badge: "School year 2024–2025",
    fees_registration_title: "One-time admission fees",
    fees_section_title: "School fees & payment terms",
    fees_section_desc: "Payment in <strong>3 installments</strong> to help families. All amounts are in <strong>FCFA</strong>.",
    fees_payment_title: "Payment terms by level",
    fees_payment_text: "Payments are made in 3 installments: <strong>1st before 09/30/2024</strong> — <strong>2nd before 10/31/2024</strong> — <strong>3rd before 12/10/2024</strong>",
    fees_card_title_maternelle_bilingue: "🌍 Bilingual Kindergarten",
    fees_card_title_maternelle: "🍼 Kindergarten",
    fees_card_title_sil_cm1: "📚 SIL to CM1",
    fees_card_title_cm2: "🎓 CM2",
    fees_card_title_primary_bilingual: "🌟 Bilingual Primary",
    first_installment: "1st installment",
    second_installment: "2nd installment",
    third_installment: "3rd installment",
    annual_total: "ANNUAL TOTAL",
    conditions_title: "Admission requirements",
    birth_certificate_req_desc: "Civil status document required for admission.",
    vaccination_record_req_desc: "To guarantee the health safety of all students.",
    paper_req_desc: "To bring when submitting the admission file.",
    folder_req_desc: "Required for students in Level II and Level III.",
    binder_req_desc: "Required for students in Kindergarten and Level I.",
    financial_advantages_title: "Discounts & financial benefits",
    family_discount_title: "Family discount",
    family_discount_desc: "5,000 FCFA discount per child from the third enrolled child in the school.",
    early_discount_title: "Early payment discount",
    early_discount_desc: "<strong>10% discount</strong> on the total for any payment made before August 30, 2024.",
    free_uniform_title: "Free uniform",
    free_uniform_desc: "<strong>School uniform is offered</strong> free of charge to all enrolled students.",
    fees_cta_question: "Questions about the fees?",
    fees_cta_email_button: "Write to us",
    fees_cta_phone_button: "(+237) 655 936 211",

    // Divers
    years_excellence: "years of excellence"
  }};

  function changeLanguage(lang){
    const safeLang = translations[lang] ? lang : 'fr';

    localStorage.setItem('language', safeLang);
    document.documentElement.lang = safeLang;

    document.querySelectorAll('[data-lang], [data-lang-html]').forEach(element => {
      const key = element.dataset.lang || element.dataset.langHtml;
      if (!key) return;
      if (translations[safeLang][key]) {
        if (element.dataset.langHtml !== undefined) {
          element.innerHTML = translations[safeLang][key];
        } else {
          element.textContent = translations[safeLang][key];
        }
      }
    });

    document.querySelectorAll('[data-lang-placeholder]').forEach(element => {
      const key = element.dataset.langPlaceholder;
      if (translations[safeLang][key]) {
        element.placeholder = translations[safeLang][key];
      }
    });

    document.querySelectorAll('[data-lang-aria-label]').forEach(element => {
      const key = element.dataset.langAriaLabel;
      if (translations[safeLang][key]) {
        element.setAttribute('aria-label', translations[safeLang][key]);
      }
    });

    const installmentMap = {
      [translations.fr.first_installment]: 'first_installment',
      [translations.fr.second_installment]: 'second_installment',
      [translations.fr.third_installment]: 'third_installment',
      [translations.en.first_installment]: 'first_installment',
      [translations.en.second_installment]: 'second_installment',
      [translations.en.third_installment]: 'third_installment'
    };

    document.querySelectorAll('.tranche-badge').forEach(badge => {
      const text = badge.textContent.trim();
      const key = installmentMap[text];
      if (key && translations[safeLang][key]) {
        badge.textContent = translations[safeLang][key];
      }
    });

    document.querySelectorAll('.frais-total .label').forEach(label => {
      if (translations[safeLang].annual_total) {
        label.textContent = translations[safeLang].annual_total;
      }
    });

    document.querySelectorAll('.lang-btn').forEach(button => {
      const isActive = button.getAttribute('data-lang-option') === safeLang;
      button.classList.toggle('active', isActive);
      button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    // Traduire les optgroup
    document.querySelectorAll('optgroup[data-lang]').forEach(optgroup => {
      const key = optgroup.getAttribute('data-lang');
      if (translations[safeLang][key]) {
        optgroup.label = translations[safeLang][key];
      }
    });
  }

  /* ── 1. NAVBAR SCROLL ── */
  const navbar = document.querySelector('.navbar-sauterelles');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 60);
    });
  }

  /* ── 2. ACTIVE NAV LINK ── */
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href') === page) link.classList.add('active');
  });

  /* ── 3. COMPTEUR ANIMÉ (chiffres clés) ── */
  function animateCounter(el) {
    const target = parseInt(el.dataset.target);
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { current = target; clearInterval(timer); }
      el.textContent = Math.floor(current) + (el.dataset.suffix || '');
    }, 16);
  }

  const counters = document.querySelectorAll('[data-counter]');
  if (counters.length) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          animateCounter(e.target);
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(c => observer.observe(c));
  }

  /* ── 4. TOAST NOTIFICATION ── */
  window.showToast = function (message, type = 'success') {
    let toast = document.getElementById('toast-global');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toast-global';
      toast.className = 'toast-sauterelles';
      toast.innerHTML = `
        <div class="toast-icon">✓</div>
        <div class="toast-text">
          <strong id="toast-msg"></strong>
          <span>École Les Sauterelles</span>
        </div>`;
      document.body.appendChild(toast);
    }
    document.getElementById('toast-msg').textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 4000);
  };

  /* ── 5. ASSISTANT D'INFORMATION ── */
  const chatForm = document.getElementById('school-chat-form');
  const chatMessages = document.getElementById('school-chat-messages');
  const chatInput = document.getElementById('school-chat-input');

  if (chatForm && chatMessages && chatInput) {
    const normalizeQuestion = value => value
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/[^a-z0-9+\s]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();

    const appendChatMessage = (text, sender, link) => {
      const message = document.createElement('article');
      message.className = `chat-message chat-message-${sender}`;

      const label = document.createElement('span');
      label.className = 'chat-message-label';
      label.textContent = sender === 'user'
        ? translations[document.documentElement.lang].chat_user_label
        : translations[document.documentElement.lang].chat_assistant_label;

      const paragraph = document.createElement('p');
      paragraph.textContent = text;
      message.append(label, paragraph);

      if (link) {
        const action = document.createElement('a');
        action.className = 'chat-answer-link';
        action.href = link.href;
        action.textContent = link.label;
        message.appendChild(action);
      }

      chatMessages.appendChild(message);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    };

    const getSchoolAnswer = question => {
      const text = normalizeQuestion(question);
      const language = document.documentElement.lang === 'en' ? 'en' : 'fr';
      const t = translations[language];
      const has = (...terms) => terms.some(term => text.includes(term));

      if (has('frais', 'cout', 'prix', 'tarif', 'paiement', 'fee', 'cost', 'price', 'tuition', 'payment')) {
        return {
          text: language === 'en'
            ? 'The fees page lists one-time admission fees and payment arrangements. Its published information refers to the 2024–2025 school year, so please contact the school to confirm current rates.'
            : 'La page des frais présente les frais d’admission à payer une seule fois et les modalités de paiement. Les informations publiées concernent l’année scolaire 2024–2025 ; contactez l’école pour confirmer les tarifs actuels.',
          link: { href: 'frais.html', label: t.chat_link_fees }
        };
      }

      if (has('inscription', 'inscrire', 'admission', 'dossier', 'enroll', 'enrollment', 'register', 'registration', 'admission')) {
        return {
          text: language === 'en'
            ? 'For information about admission steps and required documents, contact the school at franckleprince15@gmail.com or (+237) 655 936 211 / (+237) 695 413 438.'
            : 'Pour connaître les démarches d’admission et les pièces à fournir, contactez l’école à franckleprince15@gmail.com ou au (+237) 655 936 211 / (+237) 695 413 438.',
          link: { href: 'mailto:franckleprince15@gmail.com', label: t.chat_link_contact }
        };
      }

      if (has('section', 'classe', 'niveau', 'maternelle', 'primaire', 'kindergarten', 'primary', 'grade', 'class', 'level', 'programme', 'curriculum', 'enseignement', 'teach', 'education')) {
        return {
          text: language === 'en'
            ? 'The school offers bilingual kindergarten and primary education. The listed levels include Petite, Moyenne and Grande Section, and primary classes from SIL through CM2, with preparation for CEP and FSLC.'
            : 'L’école propose une maternelle et un primaire bilingues. Les niveaux présentés comprennent les sections Petite, Moyenne et Grande, ainsi que le primaire du SIL au CM2, avec préparation au CEP et au FSLC.',
          link: { href: 'sections.html', label: t.chat_link_sections }
        };
      }

      if (has('adresse', 'situe', 'trouver', 'localisation', 'venir', 'where', 'address', 'located', 'location', 'directions')) {
        return {
          text: language === 'en'
            ? 'The school is at Carrefour Ekoumdoum, Yaoundé, Cameroon.'
            : 'L’école se trouve à Carrefour Ekoumdoum, à Yaoundé, au Cameroun.',
          link: { href: '#school-map', label: language === 'en' ? 'View map' : 'Voir la carte' }
        };
      }

      if (has('horaire', 'heure', 'ouverture', 'ouvert', 'opening', 'hours', 'schedule', 'time')) {
        return {
          text: language === 'en'
            ? 'Opening hours listed on the website are Monday to Friday, 7:30 AM–5:00 PM, and Saturday, 8:00 AM–1:00 PM.'
            : 'Les horaires affichés sur le site sont du lundi au vendredi, de 7h30 à 17h00, et le samedi, de 8h00 à 13h00.'
        };
      }

      if (has('telephone', 'numero', 'appeler', 'phone', 'call', 'contact', 'email', 'courriel')) {
        return {
          text: language === 'en'
            ? 'You can call (+237) 655 936 211 or (+237) 695 413 438, or email franckleprince15@gmail.com.'
            : 'Vous pouvez appeler le (+237) 655 936 211 ou le (+237) 695 413 438, ou écrire à franckleprince15@gmail.com.',
          link: { href: 'mailto:franckleprince15@gmail.com', label: t.chat_link_contact }
        };
      }

      if (has('bilingue', 'langue', 'bilingual', 'language', 'cep', 'fslc', 'reussite', 'success', 'exam')) {
        return {
          text: language === 'en'
            ? 'Les Sauterelles is a bilingual school. Its website says primary students are prepared for the CEP and FSLC and reports a 100% success rate since the school opened.'
            : 'Les Sauterelles est une école bilingue. Le site indique que les élèves du primaire sont préparés au CEP et au FSLC, et annonce un taux de réussite de 100 % depuis l’ouverture de l’école.',
          link: { href: 'about.html', label: language === 'en' ? 'About the school' : 'À propos de l’école' }
        };
      }

      if (has('bus', 'transport', 'uniforme', 'uniform', 'remise', 'reduction', 'discount')) {
        return {
          text: language === 'en'
            ? 'The advantages page mentions school transport and other family benefits. Please contact the school to confirm current availability and terms.'
            : 'La page des avantages mentionne le transport scolaire et d’autres avantages pour les familles. Contactez l’école pour confirmer les disponibilités et conditions actuelles.',
          link: { href: 'avantages.html', label: language === 'en' ? 'View school advantages' : 'Voir les avantages' }
        };
      }

      if (has('bonjour', 'bonsoir', 'salut', 'hello', 'hi ', 'good morning', 'good afternoon')) {
        return { text: t.chat_welcome };
      }

      if (has('ecole', 'etablissement', 'school', 'sauterelles')) {
        return { text: t.chat_no_answer };
      }

      return { text: t.chat_out_of_scope };
    };

    const askQuestion = question => {
      const cleanQuestion = question.trim();
      if (!cleanQuestion) return;
      appendChatMessage(cleanQuestion, 'user');
      const answer = getSchoolAnswer(cleanQuestion);
      appendChatMessage(answer.text, 'assistant', answer.link);
    };

    chatForm.addEventListener('submit', event => {
      event.preventDefault();
      askQuestion(chatInput.value);
      chatInput.value = '';
      chatInput.focus();
    });

    document.querySelectorAll('[data-chat-question]').forEach(button => {
      button.addEventListener('click', () => askQuestion(button.textContent));
    });
  }

  /* ── 6. SMOOTH SCROLL sur ancres ── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ── 7. LIGHTBOX GALERIE SIMPLE ── */
  const galerieItems = document.querySelectorAll('.galerie-item');
  if (galerieItems.length) {
    galerieItems.forEach(item => {
      item.addEventListener('click', () => {
        const src = item.querySelector('img').src;
        const overlay = document.createElement('div');
        overlay.style.cssText = `
          position:fixed;inset:0;background:rgba(0,0,0,0.92);
          z-index:9999;display:flex;align-items:center;justify-content:center;
          cursor:pointer;animation:fadeInUp 0.3s ease;padding:20px;`;
        overlay.innerHTML = `<img src="${src}"
          style="max-height:90vh;max-width:90vw;border-radius:12px;
                 box-shadow:0 30px 80px rgba(0,0,0,0.5);">`;
        overlay.addEventListener('click', () => overlay.remove());
        document.body.appendChild(overlay);
      });
    });
  }

  /* ── 8. INITIALISER AOS ── */
  if (typeof AOS !== 'undefined') {
    AOS.init({ duration: 700, easing: 'ease-out-cubic', once: true, offset: 60 });
  }

    /* ── 9. ANNÉE ET EXPÉRIENCE AUTOMATIQUES ── */

  const currentYear = new Date().getFullYear();

  // Footer année automatique
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = currentYear;
  }

  // Calcul des années d'expérience
  // 22 ans en 2024/2025 => fondation en 2002
  const foundationYear = 2002;
  const experienceYears = currentYear - foundationYear;

  // Badge expérience
  const badge = document.getElementById('experience-years-badge');
  if (badge) {
    badge.textContent = experienceYears + '+';
  }

  // Texte expérience
  const expText = document.getElementById('experience-years-text');
  if (expText) {
    expText.textContent = experienceYears + ' ans';
  }

  // Footer expérience
  const footerExp = document.getElementById('footer-experience');
  if (footerExp) {
    footerExp.textContent = experienceYears + ' ans';
  }

  // Compteur animé expérience
  const experienceCounter = document.getElementById('experience-counter');
  if (experienceCounter) {
    experienceCounter.setAttribute('data-target', experienceYears);
  }

    /* ── 10. LANGUAGE SWITCHER ── */

const languageSwitcher = document.querySelector('.language-switcher');

if (languageSwitcher) {
  const savedLanguage = localStorage.getItem('language') || 'fr';
  changeLanguage(savedLanguage);

  languageSwitcher.querySelectorAll('.lang-btn').forEach(button => {
    button.addEventListener('click', function () {
      changeLanguage(this.getAttribute('data-lang-option'));
    });
  });
}
  
});