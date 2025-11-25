// Experience counter
let experienceCount = 0;
let educationCount = 0;
let autoSaveInterval;

// Auto-save every 30 seconds
function startAutoSave() {
    autoSaveInterval = setInterval(() => {
        autoSaveProgress();
    }, 30000); // 30 seconds
}

// Auto-save progress silently
function autoSaveProgress() {
    const formData = collectFormData();
    localStorage.setItem('cv_autosave', JSON.stringify(formData));
    localStorage.setItem('cv_autosave_time', new Date().toISOString());
    
    // Show brief notification
    const status = document.getElementById('autoSaveStatus');
    if (status) {
        status.textContent = '✓ Vistað ' + new Date().toLocaleTimeString('is-IS');
        status.style.color = '#27ae60';
    }
}

// Collect all form data
function collectFormData() {
    const data = {
        jobType: document.getElementById('jobType')?.value || 'general',
        fullName: document.getElementById('fullName')?.value || '',
        title: document.getElementById('title')?.value || '',
        email: document.getElementById('email')?.value || '',
        phone: document.getElementById('phone')?.value || '',
        location: document.getElementById('location')?.value || '',
        availability: document.getElementById('availability')?.value || '',
        linkedin: document.getElementById('linkedin')?.value || '',
        website: document.getElementById('website')?.value || '',
        summary: document.getElementById('summary')?.value || '',
        skills: document.getElementById('skills')?.value || '',
        languages: document.getElementById('languages')?.value || '',
        volunteer: document.getElementById('volunteer')?.value || '',
        certifications: document.getElementById('certifications')?.value || '',
        experiences: [],
        education: [],
        experienceCount: experienceCount,
        educationCount: educationCount
    };
    
    // Collect experiences
    for (let i = 1; i <= experienceCount; i++) {
        const jobTitle = document.getElementById(`jobTitle-${i}`);
        if (jobTitle && document.getElementById(`experience-${i}`)) {
            data.experiences.push({
                id: i,
                jobTitle: jobTitle.value || '',
                company: document.getElementById(`company-${i}`)?.value || '',
                jobLocation: document.getElementById(`jobLocation-${i}`)?.value || '',
                startDate: document.getElementById(`startDate-${i}`)?.value || '',
                endDate: document.getElementById(`endDate-${i}`)?.value || '',
                jobDescription: document.getElementById(`jobDescription-${i}`)?.value || ''
            });
        }
    }
    
    // Collect education
    for (let i = 1; i <= educationCount; i++) {
        const degree = document.getElementById(`degree-${i}`);
        if (degree && document.getElementById(`education-${i}`)) {
            data.education.push({
                id: i,
                degree: degree.value || '',
                institution: document.getElementById(`institution-${i}`)?.value || '',
                eduLocation: document.getElementById(`eduLocation-${i}`)?.value || '',
                eduStartDate: document.getElementById(`eduStartDate-${i}`)?.value || '',
                eduEndDate: document.getElementById(`eduEndDate-${i}`)?.value || '',
                eduDescription: document.getElementById(`eduDescription-${i}`)?.value || ''
            });
        }
    }
    
    return data;
}

// Save progress manually
function saveProgress() {
    const formData = collectFormData();
    const dataStr = JSON.stringify(formData);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'ferilskra_framvinda_' + new Date().toISOString().split('T')[0] + '.json';
    link.click();
    URL.revokeObjectURL(url);
    
    alert('Framvindan hefur verið vistuð! Skráin hefur verið sótt á tölvuna þína.');
}

// Load progress
function loadProgress() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                try {
                    const data = JSON.parse(event.target.result);
                    restoreFormData(data);
                    alert('Framvindan hefur verið hlaðið inn!');
                } catch (error) {
                    alert('Villa við að lesa skrána. Vinsamlegast veldu rétta JSON skrá.');
                }
            };
            reader.readAsText(file);
        }
    };
    input.click();
}

// Restore form data
function restoreFormData(data) {
    // Restore basic fields
    if (data.jobType) document.getElementById('jobType').value = data.jobType;
    if (data.fullName) document.getElementById('fullName').value = data.fullName;
    if (data.title) document.getElementById('title').value = data.title;
    if (data.email) document.getElementById('email').value = data.email;
    if (data.phone) document.getElementById('phone').value = data.phone;
    if (data.location) document.getElementById('location').value = data.location;
    if (data.availability) document.getElementById('availability').value = data.availability;
    if (data.linkedin) document.getElementById('linkedin').value = data.linkedin;
    if (data.website) document.getElementById('website').value = data.website;
    if (data.summary) document.getElementById('summary').value = data.summary;
    if (data.skills) document.getElementById('skills').value = data.skills;
    if (data.languages) document.getElementById('languages').value = data.languages;
    if (data.volunteer) document.getElementById('volunteer').value = data.volunteer;
    if (data.certifications) document.getElementById('certifications').value = data.certifications;
    
    // Clear existing experiences and education
    document.getElementById('experienceContainer').innerHTML = '';
    document.getElementById('educationContainer').innerHTML = '';
    experienceCount = 0;
    educationCount = 0;
    
    // Restore experiences
    if (data.experiences && data.experiences.length > 0) {
        data.experiences.forEach(exp => {
            addExperience();
            const currentId = experienceCount;
            if (exp.jobTitle) document.getElementById(`jobTitle-${currentId}`).value = exp.jobTitle;
            if (exp.company) document.getElementById(`company-${currentId}`).value = exp.company;
            if (exp.jobLocation) document.getElementById(`jobLocation-${currentId}`).value = exp.jobLocation;
            if (exp.startDate) document.getElementById(`startDate-${currentId}`).value = exp.startDate;
            if (exp.endDate) document.getElementById(`endDate-${currentId}`).value = exp.endDate;
            if (exp.jobDescription) document.getElementById(`jobDescription-${currentId}`).value = exp.jobDescription;
        });
    } else {
        addExperience();
    }
    
    // Restore education
    if (data.education && data.education.length > 0) {
        data.education.forEach(edu => {
            addEducation();
            const currentId = educationCount;
            if (edu.degree) document.getElementById(`degree-${currentId}`).value = edu.degree;
            if (edu.institution) document.getElementById(`institution-${currentId}`).value = edu.institution;
            if (edu.eduLocation) document.getElementById(`eduLocation-${currentId}`).value = edu.eduLocation;
            if (edu.eduStartDate) document.getElementById(`eduStartDate-${currentId}`).value = edu.eduStartDate;
            if (edu.eduEndDate) document.getElementById(`eduEndDate-${currentId}`).value = edu.eduEndDate;
            if (edu.eduDescription) document.getElementById(`eduDescription-${currentId}`).value = edu.eduDescription;
        });
    } else {
        addEducation();
    }
    
    // Update job type hints
    if (data.jobType) {
        updateFormForJobType();
    }
}

// Check for autosaved data on load
function checkAutoSave() {
    const autosave = localStorage.getItem('cv_autosave');
    const autosaveTime = localStorage.getItem('cv_autosave_time');
    
    if (autosave && autosaveTime) {
        const saveDate = new Date(autosaveTime);
        const now = new Date();
        const hoursDiff = (now - saveDate) / (1000 * 60 * 60);
        
        // If autosave is less than 24 hours old, ask if user wants to restore
        if (hoursDiff < 24) {
            const timeSince = saveDate.toLocaleString('is-IS');
            if (confirm(`Fannst sjálfvirk vistun frá ${timeSince}. Viltu hlaða henni inn?`)) {
                try {
                    const data = JSON.parse(autosave);
                    restoreFormData(data);
                } catch (error) {
                    console.error('Error loading autosave:', error);
                }
            }
        }
    }
}

// Job type specific suggestions
const jobTypeSuggestions = {
    general: {
        title: 'Starfsn\u00e1m, L\u00edfsbjarg, Verslunarma\u00f0ur',
        skills: 'Lipa\u00fe\u00e6tting, Skipulagsh\u00e6fni, Teymisvinnu, T\u00f6lvuk\u00fanni',
        certifications: 'Okuleyfi, Fyrstu hj\u00e1lp',
        hint: 'Almenn ferilskr\u00e1 sem h\u00e6fir fyrir flestar starfstegundir'
    },
    hospitality: {
        title: 'Þjónn/Þjónustufólk, Barmaður, Hótelstarfsmaður, Diskþjónn',
        skills: 'Þjónusta, Matarmeðferð, Peningameðferð, Samskipti, Vinna undir þrýstingi',
        certifications: 'Maðræðislausn, Áfengisleyfi, Fyrstu hjálp, HACCP',
        hint: 'Nefndu reynslu í þjónustu viðskiptavina og vinnu í hraða umhverfi'
    },
    trades: {
        title: 'Sm\u00ed\u00f0ur, Rafvirkji, P\u00edpulagningarma\u00f0ur, Bifrei\u00f0avirki',
        skills: 'T\u00e6knik\u00fanni, V\u00e9lnotkun, \u00d6ryggisreglur, M\u00e6lingar, Verkefnisstj\u00f3rnun',
        certifications: 'Sv\u00e9nsbr\u00e9f, \u00d6ryggisv\u00f6ttun, Lyftaraleyfi, Okuleyfi',
        hint: 'Leggstu \u00e1herslu \u00e1 t\u00e6knik\u00fann\u00e1ttu, v\u00e9lareynslu og \u00f6ryggisv\u00f6ttanir'
    },
    office: {
        title: 'Skrifstofustarfsma\u00f0ur, B\u00f3khallari, Stj\u00f3rnandi, Ritari',
        skills: 'Microsoft Office, Excel, Skr\u00e1hald, Skipulag, Samskipti, T\u00f6lvup\u00f3stur',
        certifications: 'Office Specialist, B\u00f3khaldsr\u00e9ttindi, Verkefnisstj\u00f3rnunarvottun',
        hint: '\u00c1hersla \u00e1 skipulag, stafr\u00e6na h\u00e6fni og fagleg samskipti'
    },
    healthcare: {
        title: 'Hj\u00fakrunarfr\u00e6\u00f0ingur, Um\u00f6nnunarma\u00f0ur, L\u00edkamsra\u00e6ktarkennari',
        skills: 'Um\u00f6nnun, Samkennd, Samskipti, Heilbrig\u00f0is\u00fe\u00fekking, Hlustun',
        certifications: 'Fyrstu hj\u00e1lp, Hj\u00fakrun, CPR, L\u00edkamsra\u00e6ktarvottun',
        hint: 'L\u00e1tu \u00ed ljosi samkennd, \u00fear\u00e1hyggju og reynslu \u00ed heilbrig\u00f0is\u00fej\u00f3nustu'
    },
    education: {
        title: 'Kennari, Leiðbeinandi, Dagforeldri, Námsráðgjafi',
        skills: 'Kennsla, Þolinmæði, Samskipti, Skipulag, Skapandi',
        certifications: 'Kennararéttindi, Fyrstu hjálp, Barnaverndarvottun',
        hint: 'Nefndu reynslu með börnum/nemendum og kennsluhæfni'
    },
    tech: {
        title: 'Forritari, Vefsmiður, IT tæknifræðingur, Gagnagreining',
        skills: 'Python, JavaScript, HTML/CSS, Git, SQL, Hugbúnaðarhönnun',
        certifications: 'AWS, Google Cloud, Microsoft Azure, CompTIA',
        hint: 'Áhersla á forritunarmál, verkefni og tæknilega hæfni'
    },
    creative: {
        title: 'Hönnuður, Ljósmyndari, Markaðsfræðingur, Innhönnuður',
        skills: 'Adobe Creative Suite, Photoshop, Illustrator, Hönnun, Skapandi',
        certifications: 'Adobe vottun, Markaðsvottun, Portfolio',
        hint: 'Nefndu portfolio, skapandi verkefni og hönnunarhæfni'
    },
    outdoor: {
        title: 'Garðyrkjumaður, Ferðaleiðsögumaður, Íþróttakennari',
        skills: 'Útivinna, Líkamleg þol, Ferðaþjónusta, Öryggismeðferð, Leiðsögn',
        certifications: 'Okuleyfi, Fyrstu hjálp í útivistinni, Leiðsögunarleyfi',
        hint: 'Áhersla á útivistarreynslu og líkamlega getu'
    },
    labor: {
        title: 'Vöruhúsastarfsmaður, Flutningamaður, Byggingarvirkji',
        skills: 'Líkamleg þol, Lyftaranotkun, Vörumerking, Teymisvinnu',
        certifications: 'Lyftaraleyfi, Öryggis vottun, Okuleyfi (flokkur C)',
        hint: 'Áhersla á líkamlega getu, öryggis og vélareynslu'
    },
    christmas: {
        title: 'Jólaverslun, Pökkunarstarfsmaður, Póstafgreiðsla',
        skills: 'Þjónustulund, Hraðvirkni, Vinna undir álagi, Pökkun, Skipulag',
        certifications: 'Engar sérstakar kröfur, Okuleyfi getur verið kostur',
        hint: '🎄 Jólastarf - Nefndu hæfni til að vinna í háannatíma og þjónusta marga viðskiptavini'
    },
    summer: {
        title: 'Sumarvinna, Garðavinna, Ferðaþjónusta, Tjaldsvæðisvörður',
        skills: 'Útivinna, Þjónustulund, Sjálfstæð vinna, Líkamleg þol, Sveigjanleiki',
        certifications: 'Fyrstu hjálp, Okuleyfi, Engar sérstakar kröfur',
        hint: '☀️ Sumarvinna - Leggðu áherslu á vilja til að vinna utandyra og sveigjanleika'
    },
    festival: {
        title: 'Hátíðarstarfsmaður, Tónleikaafgreiðsla, Viðburðastarfsfólk',
        skills: 'Teymisvinnu, Þjónusta, Vinna í hraða, Sveigjanleiki, Skipulag',
        certifications: 'Áfengisleyfi getur verið kostur, Fyrstu hjálp',
        hint: '🎪 Hátíðir & viðburðir - Nefndu reynslu í viðburðum og getu til að vinna langar vaktir'
    },
    harvest: {
        title: 'Uppskerustarf, Garðyrkja, Berjatínsla, Landbúnaður',
        skills: 'Líkamleg þol, Útivinna, Nákvæmni, Sjálfstæð vinna, Hraðvirkni',
        certifications: 'Engar sérstakar kröfur, Okuleyfi getur verið kostur',
        hint: '🌾 Uppskerutími - Áhersla á líkamlega getu og vilja til að vinna utandyra'
    },
    winter: {
        title: 'Skíðasvæði, Snjómokstur, Jólahúsavörður, Vetrarstarfsmaður',
        skills: 'Vinna í kulda, Þjónustulund, Öryggismeðferð, Sjálfstæð vinna',
        certifications: 'Okuleyfi, Fyrstu hjálp, Skíðakennsluvottun (ef við á)',
        hint: '❄️ Vetrarvinna - Nefndu getu til að vinna í kulda og vetraraðstæðum'
    }
};

// Update form based on job type
function updateFormForJobType() {
    const jobType = document.getElementById('jobType').value;
    const suggestions = jobTypeSuggestions[jobType];
    
    // Update title placeholder
    document.getElementById('title').placeholder = suggestions.title;
    
    // Update skills placeholder
    document.getElementById('skills').placeholder = 'T.d. ' + suggestions.skills;
    
    // Update certifications placeholder
    document.getElementById('certifications').placeholder = 'T.d. ' + suggestions.certifications;
    
    // Update hint text
    document.getElementById('jobTypeHint').textContent = suggestions.hint;
}

// Add initial experience and education fields
window.onload = function() {
    addExperience();
    addEducation();
    checkAutoSave();
    startAutoSave();
};

// Add Experience Section
function addExperience() {
    experienceCount++;
    const container = document.getElementById('experienceContainer');
    const experienceDiv = document.createElement('div');
    experienceDiv.className = 'experience-item';
    experienceDiv.id = `experience-${experienceCount}`;
    
    experienceDiv.innerHTML = `
        <button type="button" class="remove-btn" onclick="removeElement('experience-${experienceCount}')" title="Fjarlægja">×</button>
        <input type="text" id="jobTitle-${experienceCount}" placeholder="Starfsheiti *">
        <input type="text" id="company-${experienceCount}" placeholder="Fyrirtækisheiti *">
        <input type="text" id="jobLocation-${experienceCount}" placeholder="Staðsetning">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
            <input type="text" id="startDate-${experienceCount}" placeholder="Byrjunardagur (t.d. Jan 2020)">
            <input type="text" id="endDate-${experienceCount}" placeholder="Lokadagur (t.d. Des 2022 eða Núna)">
        </div>
        <textarea id="jobDescription-${experienceCount}" placeholder="Starfslýsing og árangur..." rows="3"></textarea>
    `;
    
    container.appendChild(experienceDiv);
}

// Add Education Section
function addEducation() {
    educationCount++;
    const container = document.getElementById('educationContainer');
    const educationDiv = document.createElement('div');
    educationDiv.className = 'education-item';
    educationDiv.id = `education-${educationCount}`;
    
    educationDiv.innerHTML = `
        <button type="button" class="remove-btn" onclick="removeElement('education-${educationCount}')" title="Fjarlægja">×</button>
        <input type="text" id="degree-${educationCount}" placeholder="Gráða/Nám *">
        <input type="text" id="institution-${educationCount}" placeholder="Skólaheiti *">
        <input type="text" id="eduLocation-${educationCount}" placeholder="Staðsetning">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
            <input type="text" id="eduStartDate-${educationCount}" placeholder="Byrjunardagur (t.d. 2016)">
            <input type="text" id="eduEndDate-${educationCount}" placeholder="Lokadagur (t.d. 2020)">
        </div>
        <textarea id="eduDescription-${educationCount}" placeholder="Vidbótar upplýsingar (einkunn, heiður, viðeigandi námskeið...)" rows="2"></textarea>
    `;
    
    container.appendChild(educationDiv);
}

// Remove Element
function removeElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.remove();
    }
}

// Generate CV
function generateCV() {
    // Get personal information
    const fullName = document.getElementById('fullName').value;
    const title = document.getElementById('title').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const location = document.getElementById('location').value;
    const availability = document.getElementById('availability').value;
    const linkedin = document.getElementById('linkedin').value;
    const website = document.getElementById('website').value;
    const summary = document.getElementById('summary').value;
    const skills = document.getElementById('skills').value;
    const languages = document.getElementById('languages').value;
    const volunteer = document.getElementById('volunteer').value;
    const certifications = document.getElementById('certifications').value;

    // Validation
    if (!fullName || !email) {
        alert('Vinsamlegast fylltu út að minnsta kosti nafn og netfang.');
        return;
    }

    // Build CV HTML
    let cvHTML = '<div class="cv-content">';
    
    // Header
    cvHTML += '<div class="cv-header">';
    cvHTML += `<h1 class="cv-name">${escapeHtml(fullName)}</h1>`;
    if (title) {
        cvHTML += `<p class="cv-title">${escapeHtml(title)}</p>`;
    }
    cvHTML += '<div class="cv-contact">';
    if (email) cvHTML += `<span class="cv-contact-item">📧 ${escapeHtml(email)}</span>`;
    if (phone) cvHTML += `<span class="cv-contact-item">📱 ${escapeHtml(phone)}</span>`;
    if (location) cvHTML += `<span class="cv-contact-item">📍 ${escapeHtml(location)}</span>`;
    if (availability) cvHTML += `<span class="cv-contact-item">📅 ${escapeHtml(availability)}</span>`;
    if (linkedin) cvHTML += `<span class="cv-contact-item">💼 LinkedIn</span>`;
    if (website) cvHTML += `<span class="cv-contact-item">🌐 Website</span>`;
    cvHTML += '</div></div>';

    // Professional Summary
    if (summary) {
        cvHTML += '<div class="cv-section">';
        cvHTML += '<h2 class="cv-section-title">Um mig</h2>';
        cvHTML += `<p class="cv-summary">${escapeHtml(summary)}</p>`;
        cvHTML += '</div>';
    }

    // Work Experience
    const experiences = getExperiences();
    if (experiences.length > 0) {
        cvHTML += '<div class="cv-section">';
        cvHTML += '<h2 class="cv-section-title">Starfsreynsla</h2>';
        experiences.forEach(exp => {
            cvHTML += '<div class="cv-experience-item">';
            cvHTML += '<div class="cv-item-header">';
            cvHTML += `<span class="cv-item-title">${escapeHtml(exp.jobTitle)}</span>`;
            if (exp.startDate || exp.endDate) {
                cvHTML += `<span class="cv-item-date">${escapeHtml(exp.startDate)} - ${escapeHtml(exp.endDate)}</span>`;
            }
            cvHTML += '</div>';
            cvHTML += `<p class="cv-item-company">${escapeHtml(exp.company)}${exp.location ? ' • ' + escapeHtml(exp.location) : ''}</p>`;
            if (exp.description) {
                cvHTML += `<p class="cv-item-description">${escapeHtml(exp.description)}</p>`;
            }
            cvHTML += '</div>';
        });
        cvHTML += '</div>';
    }

    // Education
    const education = getEducation();
    if (education.length > 0) {
        cvHTML += '<div class="cv-section">';
        cvHTML += '<h2 class="cv-section-title">Menntun</h2>';
        education.forEach(edu => {
            cvHTML += '<div class="cv-education-item">';
            cvHTML += '<div class="cv-item-header">';
            cvHTML += `<span class="cv-item-title">${escapeHtml(edu.degree)}</span>`;
            if (edu.startDate || edu.endDate) {
                cvHTML += `<span class="cv-item-date">${escapeHtml(edu.startDate)} - ${escapeHtml(edu.endDate)}</span>`;
            }
            cvHTML += '</div>';
            cvHTML += `<p class="cv-item-institution">${escapeHtml(edu.institution)}${edu.location ? ' • ' + escapeHtml(edu.location) : ''}</p>`;
            if (edu.description) {
                cvHTML += `<p class="cv-item-description">${escapeHtml(edu.description)}</p>`;
            }
            cvHTML += '</div>';
        });
        cvHTML += '</div>';
    }

    // Skills
    if (skills) {
        cvHTML += '<div class="cv-section">';
        cvHTML += '<h2 class="cv-section-title">Hæfni</h2>';
        cvHTML += '<div class="cv-skills">';
        const skillsArray = skills.split(',').map(s => s.trim()).filter(s => s);
        skillsArray.forEach(skill => {
            cvHTML += `<span class="cv-skill-tag">${escapeHtml(skill)}</span>`;
        });
        cvHTML += '</div></div>';
    }

    // Languages
    if (languages) {
        cvHTML += '<div class="cv-section">';
        cvHTML += '<h2 class="cv-section-title">Tungumál</h2>';
        cvHTML += '<div class="cv-languages">';
        const languagesArray = languages.split(',').map(l => l.trim()).filter(l => l);
        languagesArray.forEach(lang => {
            cvHTML += `<p>${escapeHtml(lang)}</p>`;
        });
        cvHTML += '</div></div>';
    }

    // Volunteer & Activities
    if (volunteer) {
        cvHTML += '<div class="cv-section">';
        cvHTML += '<h2 class="cv-section-title">Sjálfboðaliðastarf og starfsemi</h2>';
        cvHTML += '<div class="cv-volunteer">';
        const volunteerArray = volunteer.split('\n').map(v => v.trim()).filter(v => v);
        volunteerArray.forEach(vol => {
            cvHTML += `<p>• ${escapeHtml(vol)}</p>`;
        });
        cvHTML += '</div></div>';
    }

    // Certifications
    if (certifications) {
        cvHTML += '<div class="cv-section">';
        cvHTML += '<h2 class="cv-section-title">Vottanir og leyfi</h2>';
        cvHTML += '<div class="cv-certifications">';
        const certsArray = certifications.split('\n').map(c => c.trim()).filter(c => c);
        certsArray.forEach(cert => {
            cvHTML += `<p>• ${escapeHtml(cert)}</p>`;
        });
        cvHTML += '</div></div>';
    }

    cvHTML += '</div>';

    // Display CV
    document.getElementById('cvPreview').innerHTML = cvHTML;
    
    // Scroll to preview on mobile
    if (window.innerWidth <= 1024) {
        document.querySelector('.preview-section').scrollIntoView({ behavior: 'smooth' });
    }
}

// Get all experience entries
function getExperiences() {
    const experiences = [];
    for (let i = 1; i <= experienceCount; i++) {
        const jobTitle = document.getElementById(`jobTitle-${i}`);
        const company = document.getElementById(`company-${i}`);
        
        if (jobTitle && company && jobTitle.value && company.value) {
            experiences.push({
                jobTitle: jobTitle.value,
                company: company.value,
                location: document.getElementById(`jobLocation-${i}`)?.value || '',
                startDate: document.getElementById(`startDate-${i}`)?.value || '',
                endDate: document.getElementById(`endDate-${i}`)?.value || '',
                description: document.getElementById(`jobDescription-${i}`)?.value || ''
            });
        }
    }
    return experiences;
}

// Get all education entries
function getEducation() {
    const education = [];
    for (let i = 1; i <= educationCount; i++) {
        const degree = document.getElementById(`degree-${i}`);
        const institution = document.getElementById(`institution-${i}`);
        
        if (degree && institution && degree.value && institution.value) {
            education.push({
                degree: degree.value,
                institution: institution.value,
                location: document.getElementById(`eduLocation-${i}`)?.value || '',
                startDate: document.getElementById(`eduStartDate-${i}`)?.value || '',
                endDate: document.getElementById(`eduEndDate-${i}`)?.value || '',
                description: document.getElementById(`eduDescription-${i}`)?.value || ''
            });
        }
    }
    return education;
}

// Clear Form
function clearForm() {
    if (confirm('Ertu viss um að þú viljir hreinsa öll gögnin?')) {
        // Clear all input fields
        document.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], input[type="url"], textarea').forEach(input => {
            input.value = '';
        });
        
        // Reset experience and education
        experienceCount = 0;
        educationCount = 0;
        document.getElementById('experienceContainer').innerHTML = '';
        document.getElementById('educationContainer').innerHTML = '';
        
        // Add one of each back
        addExperience();
        addEducation();
        
        // Clear preview
        document.getElementById('cvPreview').innerHTML = `
            <div class="preview-placeholder">
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 30h60M20 45h60M20 60h40M20 75h50" stroke="#ddd" stroke-width="3" stroke-linecap="round"/>
                </svg>
                <p>Ferilskráin þín mun birtast hér</p>
                <p class="small-text">Fylltu út eynsblub og smelltu á "Búa til ferilskrá"</p>
            </div>
        `;
    }
}

// Print CV
function printCV() {
    const preview = document.getElementById('cvPreview').innerHTML;
    
    if (preview.includes('preview-placeholder')) {
        alert('Vinsamlegast búiðu til ferilskrána þína fyrst áður en þú prentar.');
        return;
    }
    
    window.print();
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}
