import { Button, Container, Header, Segment, } from "semantic-ui-react";

import Link from "gatsby-link";
import React from "react";
import Trello from "trello";

import styled from "styled-components";

// ----------------------------------------------------

const trello = new Trello("MY APPLICATION KEY", "MY USER TOKEN");

const boardID = "MYBOARDID";

// trello.addCard('Clean car', 'Wax on, wax off', myListId,
// 	function (error, trelloCard) {
// 		if (error) {
// 			console.log('Could not add card:', error);
// 		}
// 		else {
// 			console.log('Added card:', trelloCard);
// 		}
// 	}
// );

const board = trello.getBoards();

console.log( board );

const TrelloWrapper = styled.div`
	$white: #fff;
	$lightgray: #ddd;
	$gray: #888;
	$darkgray: #333;
	$black: #111;

	$color-cat-1: #ff5559;
	$color-cat-2: #f60;
	$color-cat-3: #008ac8;
	$color-cat-4: #31aa63;
	$color-cat-5: #f27a9d;
	$color-cat-6: #f27a9d;
	$color-cat-7: #f28;
	$color-cat-8: #f29;
	$color-cat-9: #f30;
	$color-cat-10: #f31;
	$color-cat-11: #f52;
	$color-cat-12: #f73;
	$color-cat-13: #f94;

	.category {
		> .image > .cover {
			background-color: $white;
			border-style: solid;
			border-width: 1px;
			border-color: $gray;

			h3 {
				color: $gray;
			}

			&:hover {
				opacity: 0.6;
			}
		}

		> a > .image > .cover {
			color: $white;
		}
	}

	.resources .meta {
		padding: 1.5em;

		h3 {
			position: relative;
			top: 0;
			left: 0;
			margin-top: 0;
		}

		p {
			color: $lightgray;
		}
	}

	// Set div colours

	@mixin set-div-color ($div-color) {
		> .image > .cover {
			border-color: $div-color;

			h3 {
				color: $div-color;
			}
		}

		> a > .image > .cover {
			background-color: $div-color;
		}
	}

	.category-1 {
		@include set-div-color($color-cat-1);
	}

	.category-2 {
		@include set-div-color($color-cat-2);
	}

	.category-3 {
		@include set-div-color($color-cat-3);
	}

	.category-4 {
		@include set-div-color($color-cat-4);
	}

	.category-5 {
		@include set-div-color($color-cat-5);
	}

	.category-6 {
		@include set-div-color($color-cat-6);
	}

	.category-7 {
		@include set-div-color($color-cat-7);
	}

	.category-8 {
		@include set-div-color($color-cat-8);
	}

	.category-9 {
		@include set-div-color($color-cat-9);
	}

	.category-10 {
		@include set-div-color($color-cat-10);
	}

	.category-11 {
		@include set-div-color($color-cat-11);
	}

	.category-12 {
		@include set-div-color($color-cat-12);
	}

	.category-13 {
		@include set-div-color($color-cat-13);
	}
`;

const List = ( { list, count, }, ) => (
	<div className = "single-resource-grid category category-' + (i + 1) + '">
		<div className = "image">
			<div className = "cover">
				<div className = "meta">
					<h3>${ count }. ${ list.name }</h3>

					{
						list.cards.map( ( card, count, ) => (
							<Card card = { card, count } />
						))
					}
				</div>
			</div>
		</div>
	</div>
);

const Card = ( card, count, ) => (
	<div className = { `single-resource-grid category-${ count }` }>
		<a href = "#1">
			<div className = "image">
				<div className = "cover">
					<div className = "meta">
						<h3>{ card.name }</h3>

						<p>{ card.desc }</p>

						<p>{ card.card_categories.join(", ") }</p>
					</div>
				</div>
			</div>
		</a>
	</div>
);

// ----------------------------------------------------

const IndexPage = props => (
	<div>
		<section id = "intro">
			<div className = "container">
				<div className = "row">
					<div className = "col-md-6">
						<h1 className = "page-title">
							{ board.title }
						</h1>
						
						<p className = "page-desc">
							{ board.description }
						</p>
					</div>
				</div>
			</div>
		</section>

		<section id = "content">
			<div className = "container">
				<div className = "resources">
					{
						board.lists.map( (list, count, ) => (
							<List list = { list } count = { count }/>
						))
					}
				</div>
			</div>
		</section>
	</div>
);

export default IndexPage;
