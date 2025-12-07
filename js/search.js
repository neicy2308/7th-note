// Данные для поиска
const searchData = {
    articles: [
        {
            title: 'Влияние джаза на рок и хип-хоп. Часть I: «От ритм-н-блюза до прогрессивного эксперимента»',
            description: 'Как джаз стал основой для рока через R&B и рок-н-ролл. Влияние на современные группы',
            url: './articles/jazz-influence-part-1',
            type: 'Статья',
            tags: ['история джаза', 'джаз', 'рок-н-ролл', 'ритм-н-блюз', 'свинг', 'импровизация', 'джаз-рок', 'фьюжн', 'психоделический рок', 'прогрессив-рок', 'сложная гармония']
        },
        {
            title: 'Влияние джаза на рок и хип-хоп. Часть II: «Бит, импровизация, фристайл: джазовое наследие в хип-хопе»',
            description: 'Как джаз стал повлиял на становление уличной культуры. От уличных блок-пати в Бронксе (DJ Kool Herc, Grandmaster Flash) до интеллектуального джаз-рэпа',
            url: './articles/jazz-influence-part-2',
            type: 'Статья',
            tags: ['история джаза', 'джаз', 'Хип-хоп', 'джаз-рэп', 'фристайл', 'брейкбит', 'семплирование','MC', 'импровизация', 'фанк', 'соул', 'уличная культура']
        },
        {
            title: 'Strange Fruit: песня, изменившая Америку',
            description: 'История создания и значение одной из самых важных протестных песен XX века в исполнении Билли Холидей, изменившей американское общество.',
            url: './articles/strange-fruit.html',
            type: 'Статья',
            tags: ['Strange Fruit', 'Билли Холидей', 'Billie Holiday', 'протестная музыка', 'джаз', 'история джаза', 'гражданские права', 'Абель Мееропол', 'Lewis Allan', 'джазовые стандарты', 'социальный протест']
        },
        {
            title: '«I Dont Want to Set the World on Fire»',
            description: 'От пламени войны до Fallout: Как The Ink Spots создали вечный гимн эпох.',
            url: './articles/i-dont-want.html',
            type: 'Статья',
            tags: ['легенды джаза', 'альбом', 'культовый альбом', 'джазовые эпохи', 'бибоп', 'ink spots', ' jazz', 'i dont want']
        },
        {
            title: 'Кларнет в джазе',
            description: 'История кларнета в джазе: от классических корней до современного джаза.',
            url: './articles/clarinet-in-jazz.html',
            type: 'Статья',
            tags: ['кларнет', 'джаз', 'классика', 'кларнет в джазе', 'история кларнета', 'Бенни Гудман', 'Сидней Беше', 'джазовый кларнет', 'джазовые инструменты', 'новоорлеанский джаз', 'свинг', 'jazz', 'clarinet']
        },
        {
            title: 'История джаза: от Нового Орлеана до наших дней',
            description: 'Полное погружение в историю развития джазовой музыки, ключевые фигуры и важнейшие события, повлиявшие на становление жанра.',
            url: './articles/jazz-history.html',
            type: 'Статья',
            tags: ['история', 'джаз', 'новый орлеан', 'jazz', 'history of jazz']
        },
        {
            title: 'Интегративный джазовый центр',
            description: 'Информация о центре, его местоположении, работе и других интересных фактах.',
            url: './articles/integrative-jazz-center.html',
            type: 'Статья',
            tags: ['интеграция', 'джаз', 'москва', 'integration center', 'jazz']
        },
        {
            title: 'Легенды джаза: Луи Армстронг',
            description: 'Биография и творческий путь одного из самых влиятельных музыкантов в истории джаза.',
            url: './articles/louis-armstrong.html',
            type: 'Статья',
            tags: ['биография', 'луи армстронг', 'труба', 'jazz', 'louis armstrong']
        },
        {
            title: 'Майлз Дэвис: революционер джаза',
            description: 'Биография и творческий путь одного из самых влиятельных музыкантов в истории джаза.',
            url: './articles/miles-davis.html',
            type: 'Статья',
            tags: ['майлз дэвис', 'биография', 'труба', 'kind of blue', 'модальный джаз', 'джаз-рок', 'фьюжн', 'битчез брю', 'jazz', 'miles davis']
        },
        {
            title: 'Саксофон в джазе: история инструмента',
            description: 'Как саксофон стал одним из главных инструментов в джазовой музыке.',
            url: './articles/saxophone-in-jazz.html',
            type: 'Статья',
            tags: ['саксофон', 'инструменты', 'инструмент', 'история', 'jazz', 'saxophone in jazz', 'sax', 'saxophone']
        },
        {
            title: 'Бибоп: революция в джазе',
            description: 'Как новый стиль изменил представление о джазовой музыке в 1940-х годах.',
            url: './articles/bibop.html',
            type: 'Статья',
            tags: ['бибоп', 'стиль', 'история']
        },
        {
            title: '«What a Wonderful World»: Гимн надежды в исполнении Луи Армстронга',
            description: 'История создания и культурное значение легендарной песни, ставшей символом оптимизма и веры в лучшее. От социального контекста 1967 года до современного влияния на мировую музыку.',
            url: './articles/what-a-wonderful-world.html',
            type: 'Статья',
            tags: ['what a wonderful world', 'луи армстронг', 'louis armstrong', 'джаз', '1967', 'джазовые стандарты', 'история джаза']
        },
        {
            title: "Сара Воан: Божественное мецц-сопрано, переосмыслившее джаз",
            description: "История жизни и творчества легендарной джазовой вокалистки с уникальным мецц-сопрано. От церковного хора до мировой славы, анализ её стиля и влияние на джаз.",
            url: "articles/sarah-vaughan.html",
            tags: ["Сара Воан", "Sarah Vaughan", "джаз", "джазовая музыка", "джазовые вокалисты", "мецц-сопрано", "бибоп", "история джаза"]
        },
        {
            title: 'История развития джаза в России: от подполья до мировых сцен',
            description: 'От первых джаз-бэндов 1920-х до современной сцены. Ключевые этапы, выдающиеся музыканты и влияние на мировую культуру.',
            url: './articles/russian-jazz-history.html',
            type: 'Статья',
            tags: ['джаз в России', 'история джаза', 'советский джаз', 'российские джазмены', 'джазовые фестивали', 'Леонид Утёсов', 'Олег Лундстрем', 'Игорь Бутман', 'джазовая культура', 'russian jazz', 'jazz history']
        },
        {
            title: 'Электронный джаз: синтез традиций и инноваций',
            description: 'Исследуйте историю и развитие электронного джаза, от истоков до современных тенденций. От Херби Хэнкока до Flying Lotus — как электроника изменила джазовую музыку.',
            url: './articles/electronic-jazz.html',
            type: 'Статья',
            tags: ['электронный джаз', 'электро-джаз', 'джазтроника', 'ню-джаз', 'St Germain', 'Jazzanova', 'The Cinematic Orchestra', 'Flying Lotus', 'Херби Хэнкок', 'Miles Davis', 'Head Hunters', 'Bitches Brew', 'BADBADNOTGOOD', 'Kamaal Williams', 'Alfa Mist', 'Yussef Dayes', 'современный джаз', 'электронная музыка', 'jazz', 'electronic jazz']
        }
    ],
    radio: [
        {
            title: 'Jazz Classics',
            description: 'Классический джаз всех времен',
            url: './streaming.html',
            type: 'Радио',
            tags: ['радио', 'классика', 'джаз']
        },
        {
            title: 'Smooth Jazz',
            description: 'Мягкий и расслабляющий джаз',
            url: './streaming.html',
            type: 'Радио',
            tags: ['радио', 'smooth jazz', 'релакс']
        },
        {
            title: 'Modern Jazz',
            description: 'Современные джазовые композиции',
            url: './streaming.html',
            type: 'Радио',
            tags: ['радио', 'современный джаз']
        }
    ]
};

document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.querySelector('.search-form');
    const searchInput = searchForm.querySelector('input[type="search"]');
    
    // Create search modal if it doesn't exist
    if (!document.querySelector('.search-modal')) {
        const modalHTML = `
            <div class="search-modal">
                <div class="search-modal-content">
                    <div class="search-modal-header">
                        <h3>Результаты поиска</h3>
                        <button class="close-search">&times;</button>
                    </div>
                    <div class="search-results"></div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }

    const searchModal = document.querySelector('.search-modal');
    const searchResults = document.querySelector('.search-results');
    const closeSearch = document.querySelector('.close-search');

    function getCorrectUrl(url) {
        // Убираем ./ в начале пути если есть
        url = url.replace(/^\.\//, '');
        
        // Если мы находимся в подпапке /articles/
        const currentPath = window.location.pathname;
        if (currentPath.includes('/articles/')) {
            // Для всех страниц поднимаемся на уровень выше
            return `../${url}`;
        }
        // На главной странице используем относительные пути как есть
        return `./${url}`;
    }

    function performSearch(query) {
        query = query.toLowerCase();
        let results = [];

        // Search in articles
        results = results.concat(searchData.articles.filter(article => {
            return article.title.toLowerCase().includes(query) ||
                   article.description.toLowerCase().includes(query) ||
                   article.tags.some(tag => tag.toLowerCase().includes(query));
        }));

        // Search in radio
        results = results.concat(searchData.radio.filter(station => {
            return station.title.toLowerCase().includes(query) ||
                   station.description.toLowerCase().includes(query) ||
                   station.tags.some(tag => tag.toLowerCase().includes(query));
        }));

        return results;
    }

    function displayResults(results) {
        if (results.length === 0) {
            searchResults.innerHTML = '<div class="no-results">Ничего не найдено</div>';
            return;
        }

        searchResults.innerHTML = results.map(result => `
            <div class="search-result-item">
                <span class="result-type">${result.type}</span>
                <h4><a href="${getCorrectUrl(result.url)}">${result.title}</a></h4>
                <p>${result.description}</p>
                <div class="result-tags">
                    ${result.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        `).join('');
    }

    // Handle search form submission
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const query = searchInput.value.trim();
        
        if (query.length < 3) {
            alert('Введите минимум 3 символа для поиска');
            return;
        }

        const results = performSearch(query);
        displayResults(results);
        searchModal.classList.add('active');
    });

    // Close search modal
    closeSearch.addEventListener('click', () => {
        searchModal.classList.remove('active');
    });

    // Close modal when clicking outside
    searchModal.addEventListener('click', (e) => {
        if (e.target === searchModal) {
            searchModal.classList.remove('active');
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && searchModal.classList.contains('active')) {
            searchModal.classList.remove('active');
        }
    });
});
