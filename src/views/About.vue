<template>
	<div>
		<h1>О фильме</h1>
		<div class="item">
			<img class="item__image" :src="film.image.original" :alt="film.name">
			<div class="text-wrp">
				<span class="item__name">{{film.name}}</span>
				<span class="item__desc">{{ description }}</span>
				<a :href="`${film.officialSite}`" class="item__link btn" target="_blank">Перейти на оффициальный сайт</a>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data: () => ({
		description: ''
	}),
	computed: {
		film: () => {
      return this.$store.getters.filmById(+this.$route.params.id)
    }
	},
	mounted() {
		this.description = this.film.summary.replace(/<(.|\n)*?>/g, '')
	}
}
</script>
<style lang="less" scoped>
.item {
	display: flex;
	&__name {
		font-family: RubikMedium;
		font-weight: 500;
		font-size: 40px;
		display: block;
		max-width: 100%;
		margin-bottom: 40px;
	}
	&__image {
		width: 600px;
		margin-right: 40px;
	}
	&__link {
		text-decoration: none;
    margin-bottom: 10px;
    color: #ffffff;
    font-size: 14px;
    transition: color .2s ease;
		margin-top: 50px;
    &:hover {
      box-shadow: 0px 0px 10px 3px rgb(126, 126, 126, 0.3);
    }
		&:active {
			box-shadow: none;
		}
	}
}
.text-wrp {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 50px;
}
</style>