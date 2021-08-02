package b206.cook.repository;

import b206.cook.domain.Rating;

import java.util.List;
import java.util.Optional;

public interface RatingRepository {
    Rating save(Rating rating);
    Optional<Rating> findById(Long id);
    List<Rating> findAll();
}
