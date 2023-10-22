
let map = [ // Массив - карта, 40x24, 1- Стена, 0 - Пол HP- хилки, SW- меч
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
				[1, 'HP', 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,],
				[1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,],
				[0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1,],
				[1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 'HP', 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1,],
				[1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1,],
				[1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 'HP', 0, 0, 1, 0, 1,],
				[1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1,],
				[1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1,],
				[1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1,],
				[0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1,],
				[1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 'HP', 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1,],
				['SW', 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 'HP', 0, 0, 1,],
				[1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1,],
				[1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1,],
				[0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1,],
				[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 'HP', 0, 0, 1, 1, 'HP', 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1,],
				[1, 0, 0, 0, 1, 'HP', 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 'HP', 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1,],
				[1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 'HP', 1, 0, 1,],
				[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 'SW', 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1,],
				[1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1,],
				[1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1,],
				[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1,],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,]
			];


			function RandomPlace(map, hero, HPCount, id, weap) { //Создание объекта персонажа со случайными координатам в массиве
				do {
					randRow = Math.floor(Math.random() * 24);
					randCol = Math.floor(Math.random() * 40)
				} while (map[randRow][randCol] != 0)
				map[randRow][randCol] = { TypeHero: hero, HP: HPCount, Weapon: weap };
			}

			function CreateMap(map) { // Вывод массива в DOM
				const field = document.querySelector('.field');

				// Очистить содержимое игрового поля
				while (field.firstChild) {
					field.removeChild(field.firstChild);
				}

				for (let i = 0; i < 24; ++i) {
					for (let j = 0; j < 40; ++j) {
						const tile = document.createElement("div");
						tile.style.top = i * 50 + 'px';
						tile.style.left = j * 50 + 'px';

						if (map[i]) {
							switch (map[i][j]) {
								case 0: // Пол
									tile.className = 'tile';
									break;
								case 1: // Стена
									tile.className = 'tileW';
									break;
								case 'HP': // Хилка
									tile.className = 'tileHP';
									break;
								case 'SW': // Меч
									tile.className = 'tileSW';
									break;
								default:
									if (map[i][j] && map[i][j].TypeHero) {
										if (map[i][j].TypeHero === 'E') { // Противник
											tile.className = 'tileE';
											const health = document.createElement("div");
											health.className = 'health';
											health.style.width = map[i][j].HP + '%';
											tile.appendChild(health);
										} else if (map[i][j].TypeHero === 'P') { // Игрок
											tile.className = 'tileP';
											const health = document.createElement("div");
											health.className = 'health';
											health.style.width = map[i][j].HP + '%';
											tile.appendChild(health);
										}
									}
							}
						}

						field.appendChild(tile);
					}
				}
			}
			function findPlayer(map, TypeHero) { // Поиск персонажа 
				for (let i = 0; i < 24; ++i) {
					for (let j = 0; j < 40; ++j) {
						if (map[i][j].TypeHero === TypeHero) {
							return { x: j, y: i }
						}
					}
				}
			}
			function SpawnHero() { // Передаем параметры на спавн персонажей
				RandomPlace(map, 'P', HPP);
				for (n = 0; n < 10; ++n) {
					RandomPlace(map, 'E', HPE);
				}
			}

			function handleKeyDown(event, map) { // Действия при нажатии кнопокиы
				playerPos = findPlayer(map, 'P');

				switch (event.key) {
					case up:
						moveUp(map, playerPos);
						break;
					case down:
						moveDown(map, playerPos);
						break;
					case left:
						moveLeft(map, playerPos);
						break;
					case right:
						moveRight(map, playerPos);
						break;
					case hit:
						playerAttack(map, playerPos, baseDamage, swordDamage);
						break;
				
				}

				
			}
			function isValidPosition(y, x, map) { //Проверка границ массива, да, можно сделать lenght)
				return y >= 0 && y < 24 && x >= 0 && x < 40;
			}

			function canMoveTo(target) { // Проверка ячейки массива
				return target === 0 || target === 'HP' || target === 'SW';
			}
			function canMoveToE(target) { // Противнику ограничен ход на хилку или меч
				return target === 0;
			}
			function handleSpecialActions(map, playerPos, newY, newX) { // Добавляем меч в инвентарь или лечимся
				if (map[newY][newX] === 'SW') {
					map[playerPos.y][playerPos.x].Weapon = 'SW';
				} else if (map[newY][newX] === 'HP') {
					map[playerPos.y][playerPos.x].HP = 100;
				}
			}

			function swapPositions(map, playerPos, newY, newX) { // Меняем позицию
				const obj = map[playerPos.y][playerPos.x];
				map[playerPos.y][playerPos.x] = 0;
				playerPos.y = newY;
				playerPos.x = newX;
				map[newY][newX] = obj;
			}
			function moveUp(map, playerPos) { // Идем вверх
				const testY = playerPos.y - 1;

				if (isValidPosition(testY, playerPos.x, map)) {
					const target = map[testY][playerPos.x];

					if (canMoveTo(target)) {
						handleSpecialActions(map, playerPos, testY, playerPos.x);
						swapPositions(map, playerPos, testY, playerPos.x);
						
					}
				}
			}

			function moveDown(map, playerPos) { //Вниз

				const testY = playerPos.y + 1;

				if (isValidPosition(testY, playerPos.x, map)) {
					const target = map[testY][playerPos.x];

					if (canMoveTo(target)) {
						handleSpecialActions(map, playerPos, testY, playerPos.x);
						swapPositions(map, playerPos, testY, playerPos.x);
						
					}
				}
			}


			function moveLeft(map, playerPos) { // <-
				const testX = playerPos.x - 1;

				if (isValidPosition(playerPos.y, testX, map)) {
					const target = map[playerPos.y][testX];

					if (canMoveTo(target)) {
						handleSpecialActions(map, playerPos, playerPos.y, testX);
						swapPositions(map, playerPos, playerPos.y, testX);
						
					}
				}
			}

			function moveRight(map, playerPos) { // --> 
				const testX = playerPos.x + 1;
				if (isValidPosition(playerPos.y, testX, map)) {
					const target = map[playerPos.y][testX];

					if (canMoveTo(target)) {
						handleSpecialActions(map, playerPos, playerPos.y, testX);
						swapPositions(map, playerPos, playerPos.y, testX);
						
					}
				}
			}

			function playerAttack(map, playerPos, baseDamage, swordDamage) { // Бьем 
				let attack = baseDamage;
				if (map[playerPos.y][playerPos.x].Weapon == 'SW') {
					attack = swordDamage;
				}
				Y = playerPos.y - 1;
				X = playerPos.x - 1;
				Y3 = playerPos.y + 2;
				X3 = playerPos.x + 2;
				for (let i = Y; i < Y3; ++i) { // Надо поправить 
					for (let j = X; j < X3; ++j) {
						if (map[i][j].TypeHero == 'E') {
							map[i][j].HP -= attack;
							if (map[i][j].HP <= 0)
								map[i][j] = 0;
						}
					}
				}

			}
			function enemyAttack(map, baseDamageE) { // Бьют нас
				let attack = baseDamageE;
				playerPos = findPlayer(map, 'P');
				Y = playerPos.y - 1;
				X = playerPos.x - 1;
				Y3 = playerPos.y + 2;
				X3 = playerPos.x + 2;
				for (let i = Y; i < Y3; ++i) { // Надо поправить 
					for (let j = X; j < X3; ++j) {
						if (map[i][j].TypeHero == 'E') {
							map[playerPos.y][playerPos.x].HP -= attack;
							if (map[playerPos.y][playerPos.x].HP <= 0)
								map[playerPos.y][playerPos.x] = 0;
						}
					}
				}

			}
			function moveEnemies(map) { // Движение противников НАДО ПОПРАВИТЬ

				for (let i = 0; i < 24; ++i) {
					for (let j = 0; j < 40; ++j) {
						if (map[i][j].TypeHero === 'E') {
							direction = Math.floor(Math.random() * 4);
							playerPos = { y: i, x: j }
							switch (direction) {
								case 0: // Вверх
									enemyY = i - 1;
									enemyX = j;
									break;
								case 1: // Вправо
									enemyX = j + 1;
									enemyY = i;
									break;
								case 2: // Вниз
									enemyY = i + 1;
									enemyX = j;
									break;
								case 3: // Влево
									enemyX = j - 1;
									enemyY = i;
									break;
							}
							if (isValidPosition(enemyY, enemyX, map)) {
								const target = map[enemyY][enemyX];

								if (canMoveToE(target)) {
									swapPositions(map, playerPos, enemyY, enemyX);
								}
							}
						}
					}
				}
			}


			function gameLoop(currentTime) { //Тело игры
				const deltaTime = currentTime - lastFrameTime;


				if (deltaTime >= frameInterval) {

					moveEnemies(map);
					CreateMap(map);
					enemyAttack(map, baseDamageE);

					lastFrameTime = currentTime;
				}


				requestAnimationFrame(function (timestamp) { //Обновляем кадры
					gameLoop(timestamp);
				});
			}

			

			function startGame() { // Старт игры
				SpawnHero();
				requestAnimationFrame(function (timestamp) {
					gameLoop(timestamp);
				});
			}
