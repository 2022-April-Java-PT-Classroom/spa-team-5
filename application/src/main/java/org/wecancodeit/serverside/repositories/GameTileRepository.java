package org.wecancodeit.serverside.repositories;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.models.GameTile;

public interface GameTileRepository extends CrudRepository<GameTile, Long> {
}
