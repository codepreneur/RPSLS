describe("Rock-Paper-Scissors", function(){

	beforeEach(function(){

		var player1 = new Player();
		var player2 = new Player();
		var game = new Game(player1, player2);

	});

	describe('winning and losing', function(){

		describe('rock',function(){

			it('should beat scissors',function(){

				player1.picks('rock');
				player2.picks('scissors');
				expect(game.winner()).toBe(player1);

			});

			it('should lose to paper',function(){

				player1.picks('rock');
				player2.picks('paper');
				expect(game.winner()).toBe(player2);

			});

		});

		describe('paper',function(){

			it('should beat rock',function(){
				player1.picks('paper');
				player2.picks('rock');
				expect(game.winner()).toBe(player1);

			});

			it('should lose to scissors',function(){

				player1.picks('paper');
				player2.picks('scissors');
				expect(game.winner()).toBe(player2);

			});

		});

		describe('scissors',function(){

			it('should beat paper',function(){

				player1.picks('scissors');
				player2.picks('paper');
				expect(game.winner()).toBe(player1);

			});

			it('should lose to rock',function(){

				player1.picks('scissors');
				player2.picks('rock');
				expect(game.winner()).toBe(player2);

			});

		});

	});

});









