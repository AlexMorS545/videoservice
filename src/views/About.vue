<template>
	<div>
		<h1>О фильме</h1>
		<div class="item">
			<img class="item__image" :src="film.image.original">
			<div class="text-wrp">
				<span class="item__name">{{film.name}}</span>
				<span v-bind="removeTags(film.summary)" class="item__desc">{{ description }}</span>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			description: ''
		}
	},
	computed: {
		film() {
			return this.$store.getters.filmById(+this.$route.params.id)
		}
	},
	methods: {
		removeTags(desc) {
			this.description = desc.replace(/<(.|\n)*?>/g, '')
		}
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
}
</style>