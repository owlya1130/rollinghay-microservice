package Entity;

import lombok.Data;
import lombok.Value;

@Data
@Value
public class Customer {
    private String name;

    public Customer(String name) {

        this.name = name;
    }
}
