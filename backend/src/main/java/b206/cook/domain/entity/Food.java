package b206.cook.domain.entity;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Food {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String name;

    @ManyToOne
    @JoinColumn(name="country_id")
    private Country country;

    @ManyToOne
    @JoinColumn(name="time_id")
    private Time time;

    public Food(String name, Country country, Time time) {
        this.name = name;
        this.country = country;
        this.time = time;
    }
}