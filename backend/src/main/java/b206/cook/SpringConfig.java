package b206.cook;

import b206.cook.repository.*;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.persistence.EntityManager;

@Configuration
public class SpringConfig {

    private final EntityManager em;

    public SpringConfig(EntityManager em) {
        this.em = em;
    }

    @Bean
    public ArticleRepository articleRepository() {
        return new JpaArticleRepository(em);
    }

    @Bean
    public CountryRepository countryRepository() {
        return new JpaCountryRepository(em);
    }

    @Bean
    public FoodRepository foodRepository() {
        return new JpaFoodRepository(em);
    }

    @Bean
    public IngredientRepository ingredientRepository() {
        return new JpaIngredientRepository(em);
    }

    @Bean
    public MemberRepository memberRepository() {
        return new JpaMemberRepository(em);
    }

    @Bean
    public RatingRepository ratingRepository() {
        return new JpaRatingRepository(em);
    }

    @Bean
    public RecipeRepository recipeRepository() {
        return new JpaRecipeRepository(em);
    }

    @Bean
    public SituationRepository situationRepository() {
        return new JpaSituationRepository(em);
    }

    @Bean
    public TimeRepository timeRepository() {
        return new JpaTimeRepository(em);
    }
}