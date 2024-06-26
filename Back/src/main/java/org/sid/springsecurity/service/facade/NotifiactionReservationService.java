package org.sid.springsecurity.service.facade;


import org.sid.springsecurity.bean.NotificationReservation;

import java.util.List;

public interface NotifiactionReservationService {
    public NotificationReservation findByCode(String code);
    public int deleteByCode(String code);

    List<NotificationReservation> findAll();

    int save(NotificationReservation notificationReservation);
}
