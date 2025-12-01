   // ===== BASE DE DONNÉES DES PIERRES =====
        const pierresData = {
            'ALEXANDRITE': {
                nom: 'Alexandrite',
                nomScientifique: 'Chrysoberyl',
                image: './images/alexendrite-gem.png',
                description: "L'alexandrite est une pierre rare et fascinante qui change de couleur selon la lumière. Elle passe du vert au jour au rouge sous lumière artificielle, un phénomène unique appelé 'effet alexandrite'.",
                origine: "Découverte en Russie dans les monts Oural en 1830, elle porte le nom du tsar Alexandre II. Aujourd'hui, on la trouve aussi au Brésil, au Sri Lanka et en Afrique de l'Est.",
                durete: '8.5',
                couleur: 'Vert/Rouge',
                famille: 'Chrysobéryl',
                vertus: "Pierre de chance et d'équilibre, l'alexandrite favorise la créativité et l'intuition. Elle aide à prendre des décisions importantes et renforce la confiance en soi."
            },
            'AMBER': {
                nom: 'Ambre',
                nomScientifique: 'Résine fossile',
                image: './images/amber-gems.png',
                description: "L'ambre n'est pas un minéral mais une résine végétale fossilisée qui date de millions d'années. On y trouve parfois des insectes ou des débris végétaux piégés, témoins du passé.",
                origine: "Les plus grands gisements se trouvent sur les côtes de la mer Baltique (Pologne, Russie, Lituanie). L'ambre de la République Dominicaine est particulièrement prisé pour sa clarté.",
                durete: '2-2.5',
                couleur: 'Jaune à brun',
                famille: 'Organique',
                vertus: "Pierre de guérison ancestrale, l'ambre apaise les douleurs, calme l'anxiété et purifie les énergies négatives. Elle est traditionnellement utilisée pour soulager les poussées dentaires des bébés."
            },
            'AMETHYST': {
                nom: 'Améthyste',
                nomScientifique: 'Quartz violet',
                image: './images/amethyst.png',
                description: "L'améthyste est une variété de quartz de couleur violette, due à la présence de fer et d'irradiation naturelle. C'est l'une des pierres les plus populaires en joaillerie.",
                origine: "Principalement extraite au Brésil, en Uruguay, en Zambie et à Madagascar. Les améthystes les plus foncées proviennent généralement d'Uruguay.",
                durete: '7',
                couleur: 'Violet à pourpre',
                famille: 'Quartz',
                vertus: "Pierre de sagesse et d'humilité, l'améthyste favorise la méditation, combat les addictions et apporte le calme intérieur. Elle stimule la créativité et la concentration."
            },
            'AMETRINE': {
                nom: 'Amétrine',
                nomScientifique: 'Quartz bicolore',
                image: './images/ametrine-gem.png',
                description: "L'amétrine est une pierre naturelle unique qui combine améthyste violette et citrine jaune dans le même cristal. Cette combinaison rare se forme par des variations de température lors de la cristallisation.",
                origine: "Presque exclusivement extraite de la mine Anahi en Bolivie. Des gisements mineurs existent au Brésil et en Inde.",
                durete: '7',
                couleur: 'Violet et jaune',
                famille: 'Quartz',
                vertus: "Pierre d'harmonie, l'amétrine combine les vertus de l'améthyste et de la citrine. Elle équilibre les énergies masculines et féminines, favorise la créativité et la prospérité."
            },
            'AQUAMARINE': {
                nom: 'Aigue-marine',
                nomScientifique: 'Béryl bleu',
                image: './images/aquamarine-gem.png',
                description: "L'aigue-marine tire son nom du latin 'aqua marina' (eau de mer) en raison de sa couleur bleu-vert évoquant l'océan. Elle appartient à la famille des béryls, comme l'émeraude.",
                origine: "Principalement extraite au Brésil, à Madagascar, au Pakistan et en Afrique. Les plus belles pierres proviennent du Brésil.",
                durete: '7.5-8',
                couleur: 'Bleu clair à bleu-vert',
                famille: 'Béryl',
                vertus: "Pierre des marins et des voyageurs, l'aigue-marine apporte courage, clarté mentale et communication harmonieuse. Elle calme les émotions et favorise l'expression de soi."
            },
            'CITRINE': {
                nom: 'Citrine',
                nomScientifique: 'Quartz jaune',
                image: './images/citrine-gem.png',
                description: "La citrine naturelle est rare et se forme par la présence de fer dans le quartz. Sa couleur varie du jaune pâle au brun doré. La plupart des citrines du commerce sont en fait des améthystes chauffées.",
                origine: "Brésil, Madagascar, Russie, France (région du Dauphiné). Les citrines naturelles les plus réputées viennent du Brésil.",
                durete: '7',
                couleur: 'Jaune à brun doré',
                famille: 'Quartz',
                vertus: "Pierre de prospérité et d'abondance, la citrine attire la richesse, stimule la joie de vivre et renforce la confiance. Elle dissipe les énergies négatives et favorise le succès."
            },
            'DIAMOND': {
                nom: 'Diamant',
                nomScientifique: 'Carbone cristallisé',
                image: './images/diamond.png',
                description: "Le diamant est le minéral naturel le plus dur connu. Formé de carbone pur cristallisé sous très haute pression, il se forme à plus de 150 km de profondeur dans le manteau terrestre.",
                origine: "Principales sources : Botswana, Russie, Canada, Afrique du Sud, Australie. Les diamants remontent à la surface lors d'éruptions volcaniques via les cheminées de kimberlite.",
                durete: '10',
                couleur: 'Incolore (ou diverses couleurs)',
                famille: 'Carbone',
                vertus: "Pierre d'éternité et de pureté, le diamant symbolise l'amour éternel. Il amplifie les énergies, apporte clarté mentale et renforce la volonté. Considéré comme la pierre ultime de protection."
            },
            'EMERALD': {
                nom: 'Émeraude',
                nomScientifique: 'Béryl vert',
                image: './images/emerald-gem.png',
                description: "L'émeraude est un béryl coloré en vert par des traces de chrome et de vanadium. C'est l'une des quatre pierres précieuses avec le diamant, le rubis et le saphir. Ses inclusions, appelées 'jardin', sont caractéristiques.",
                origine: "La Colombie produit les émeraudes les plus prisées (Muzo, Chivor). Autres sources : Zambie, Brésil, Afghanistan, Zimbabwe.",
                durete: '7.5-8',
                couleur: 'Vert intense',
                famille: 'Béryl',
                vertus: "Pierre de sagesse et de renaissance, l'émeraude favorise l'amour inconditionnel, la guérison émotionnelle et la prospérité. Elle renforce l'intuition et apporte l'harmonie."
            },
            'FANCY COLOR DIAMOND': {
                nom: 'Diamant Fancy',
                nomScientifique: 'Carbone cristallisé coloré',
                image: './images/fancy-color-diamond.png',
                description: "Les diamants de couleur fantaisie (fancy) sont extrêmement rares. Leur couleur provient d'impuretés ou de déformations structurelles : azote (jaune), bore (bleu), irradiation (vert), etc.",
                origine: "Argyle en Australie (roses et rouges, mine fermée en 2020), Afrique du Sud (jaunes et bleus), Brésil. Les diamants rouges sont les plus rares au monde.",
                durete: '10',
                couleur: 'Toutes couleurs',
                famille: 'Carbone',
                vertus: "Combine les propriétés du diamant avec les énergies spécifiques de sa couleur. Les diamants roses favorisent l'amour, les bleus la sérénité, les jaunes la joie."
            },
            'GARNET': {
                nom: 'Grenat',
                nomScientifique: 'Groupe des grenats',
                image: './images/garnet-gem.png',
                description: "Le grenat n'est pas une seule pierre mais une famille de minéraux. Le plus connu est le grenat almandin rouge, mais il existe aussi en vert (tsavorite), orange (spessartite) et autres couleurs.",
                origine: "Inde, Sri Lanka, Tanzanie (tsavorite), Madagascar, États-Unis. Les grenats sont trouvés sur tous les continents.",
                durete: '6.5-7.5',
                couleur: 'Rouge (principalement)',
                famille: 'Silicate',
                vertus: "Pierre d'énergie et de vitalité, le grenat stimule la passion, le courage et la persévérance. Il revitalise le corps, purifie les énergies et renforce les liens affectifs."
            },
            'IOLITE': {
                nom: 'Iolite',
                nomScientifique: 'Cordiérite',
                image: './images/iolite-gem.png',
                description: "L'iolite, aussi appelée 'saphir d'eau', présente un fort pléochroïsme : elle change de couleur selon l'angle de vue (bleu violet, gris jaunâtre, bleu pâle). Les Vikings l'utilisaient comme filtre polarisant pour naviguer.",
                origine: "Inde, Sri Lanka, Myanmar, Madagascar, Brésil. Les plus belles iolites proviennent d'Inde et du Myanmar.",
                durete: '7-7.5',
                couleur: 'Bleu violet',
                famille: 'Silicate',
                vertus: "Pierre de vision et d'orientation, l'iolite stimule l'imagination, aide à trouver sa voie et renforce l'intuition. Elle favorise la méditation et les voyages spirituels."
            },
            'MOONSTONE': {
                nom: 'Pierre de Lune',
                nomScientifique: 'Orthose',
                image: './images/moonstone.png',
                description: "La pierre de lune présente une adularescence caractéristique, un effet chatoyant blanc-bleuté qui évoque la lune. Ce phénomène optique est causé par la structure lamellaire du feldspath.",
                origine: "Sri Lanka (les plus belles), Inde, Myanmar, Madagascar, Tanzanie. La variété arc-en-ciel provient principalement d'Inde.",
                durete: '6-6.5',
                couleur: 'Blanc laiteux, reflets bleus',
                famille: 'Feldspath',
                vertus: "Pierre de féminité et d'intuition, la pierre de lune équilibre les émotions, favorise la fertilité et renforce l'empathie. Elle protège les voyageurs nocturnes et apaise les tensions."
            },
            'JADE': {
                nom: 'Jade',
                nomScientifique: 'Jadéite ou Néphrite',
                image: './images/jade-gem.png',
                description: "Le terme 'jade' désigne deux minéraux distincts : la jadéite (plus rare et précieuse) et la néphrite. Le jade impérial vert intense de Birmanie est le plus recherché.",
                origine: "Myanmar (jadéite impériale), Chine (néphrite), Nouvelle-Zélande (néphrite), Guatemala, Russie. Vénéré en Asie depuis des millénaires.",
                durete: '6-7',
                couleur: 'Vert (principalement)',
                famille: 'Silicate',
                vertus: "Pierre de sagesse et de longévité, le jade attire la chance, la prospérité et l'harmonie. Il protège contre le mal, favorise les rêves prémonitoires et renforce la sérénité."
            },
            'KUNZITE': {
                nom: 'Kunzite',
                nomScientifique: 'Spodumène rose',
                image: './images/kunzite-gem.png',
                description: "La kunzite est une variété rose de spodumène découverte en 1902. Sa couleur vient du manganèse. Elle présente un pléochroïsme marqué et peut perdre sa couleur si exposée trop longtemps à la lumière.",
                origine: "Afghanistan, Brésil, Madagascar, États-Unis (Californie). Les kunzites les plus intenses proviennent d'Afghanistan.",
                durete: '6.5-7',
                couleur: 'Rose à lilas',
                famille: 'Spodumène',
                vertus: "Pierre du cœur divin, la kunzite ouvre le chakra du cœur, favorise l'amour inconditionnel et dissout les blocages émotionnels. Elle apporte paix intérieure et compassion."
            }
        };

        // ===== GÉNÉRER LA GALERIE =====
        const container = document.getElementById('pierres-container');
        
        Object.keys(pierresData).forEach(key => {
            const pierre = pierresData[key];
            
            const card = document.createElement('div');
            card.className = 'info-pierre';
            card.onclick = () => openModal(key);
            
            const img = document.createElement('img');
            img.src = pierre.image;
            img.alt = pierre.nom;
            
            const h6 = document.createElement('h6');
            h6.textContent = key;
            
            card.appendChild(h6);
            card.appendChild(img);
            container.appendChild(card);
        });

        // ===== MODAL =====
        const modal = document.getElementById('modal');
        const closeBtn = document.getElementById('close-modal');

        function openModal(pierreName) {
            const pierre = pierresData[pierreName];
            
            // Remplir le modal
            document.getElementById('modal-img').src = pierre.image;
            document.getElementById('modal-title').textContent = pierre.nom;
            document.getElementById('modal-subtitle').textContent = pierre.nomScientifique;
            document.getElementById('modal-description').textContent = pierre.description;
            document.getElementById('modal-origine').textContent = pierre.origine;
            document.getElementById('modal-vertus').textContent = pierre.vertus;
            
            // Propriétés
            const propsContainer = document.getElementById('modal-properties');
            propsContainer.innerHTML = `
                <div class="property">
                    <div class="property-label">Dureté</div>
                    <div class="property-value">${pierre.durete}</div>
                </div>
                <div class="property">
                    <div class="property-label">Couleur</div>
                    <div class="property-value">${pierre.couleur}</div>
                </div>
                <div class="property">
                    <div class="property-label">Famille</div>
                    <div class="property-value">${pierre.famille}</div>
                </div>
            `;
            
            // Afficher le modal
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        // Événements
        closeBtn.addEventListener('click', closeModal);
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });

        // Fermer avec Echap
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeModal();
            }
        });